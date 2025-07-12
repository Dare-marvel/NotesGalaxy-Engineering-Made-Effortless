const content = `# Transactions and Concurrency Control in Database Management Systems

Transactions and concurrency control are fundamental concepts in database management systems that ensure data consistency, integrity, and reliability in multi-user environments.

## What is a Transaction?

A **transaction** is a logical unit of work that consists of one or more database operations that must be executed as a single, indivisible unit.

### ACID Properties

Every transaction must satisfy the ACID properties:

#### Atomicity
- All operations in a transaction are completed successfully, or none are
- **"All or Nothing"** principle
- If any operation fails, the entire transaction is rolled back

#### Consistency
- Database must remain in a consistent state before and after transaction
- All integrity constraints must be satisfied
- Mathematical representation: $State_{before} \\xrightarrow{Transaction} State_{after}$

#### Isolation
- Concurrent transactions should not interfere with each other
- Each transaction appears to execute in isolation
- Prevents interference between concurrent transactions

#### Durability
- Once a transaction is committed, its effects are permanent
- Changes survive system failures
- Data is safely stored in non-volatile memory

## Transaction States

A transaction goes through several states during its lifetime:

### State Transition Diagram

\`\`\`
Active → Partially Committed → Committed
  ↓              ↓
Failed    ←    Aborted
\`\`\`

### State Descriptions:

1. **Active:** Transaction is executing
2. **Partially Committed:** Final statement executed, but not yet committed
3. **Committed:** Transaction completed successfully
4. **Failed:** Transaction cannot proceed due to error
5. **Aborted:** Transaction rolled back and database restored to previous state

## Concurrency Control

Concurrency control manages simultaneous access to database by multiple transactions to maintain consistency.

### Problems in Concurrent Execution

#### 1. Lost Update Problem
Two transactions update the same data item, and one update is lost.

**Example:**
\`\`\`
T1: Read(A)     // A = 100
T2: Read(A)     // A = 100
T1: A = A + 50  // A = 150
T2: A = A - 30  // A = 70
T1: Write(A)    // A = 150
T2: Write(A)    // A = 70 (T1's update lost)
\`\`\`

#### 2. Dirty Read Problem
Transaction reads uncommitted data from another transaction.

**Example:**
\`\`\`
T1: Read(A)     // A = 100
T1: A = A + 50  // A = 150
T1: Write(A)    // A = 150
T2: Read(A)     // A = 150 (dirty read)
T1: Rollback    // A = 100
\`\`\`

#### 3. Unrepeatable Read
Transaction reads the same data twice and gets different values.

#### 4. Phantom Read
Transaction reads a set of rows twice and gets different number of rows.

### Concurrency Control Techniques

#### 1. Lock-Based Protocols

##### Binary Locks
- **Lock(X):** Acquire exclusive lock on X
- **Unlock(X):** Release lock on X

##### Shared/Exclusive Locks
- **Shared Lock (S):** Multiple transactions can read
- **Exclusive Lock (X):** Only one transaction can read/write

**Lock Compatibility Matrix:**
|   | S | X |
|---|---|---|
| S | ✓ | ✗ |
| X | ✗ | ✗ |

##### Two-Phase Locking (2PL)
Ensures serializability by dividing transaction into two phases:

1. **Growing Phase:** Acquire locks, cannot release any lock
2. **Shrinking Phase:** Release locks, cannot acquire any lock

**Mathematical Condition:**
For transaction $T_i$: $lock_i(X) < unlock_i(Y)$ for all items X, Y

#### 2. Timestamp-Based Protocols

Each transaction assigned unique timestamp when it begins.

**Timestamp Ordering:**
- If $TS(T_i) < TS(T_j)$, then $T_i$ should execute before $T_j$
- **Read Timestamp (RTS):** Largest timestamp of transaction that read the item
- **Write Timestamp (WTS):** Largest timestamp of transaction that wrote the item

**Rules:**
1. If $TS(T_i) < WTS(X)$, reject read and rollback $T_i$
2. If $TS(T_i) < RTS(X)$, reject write and rollback $T_i$

#### 3. Validation-Based Protocols

Three phases for each transaction:
1. **Read Phase:** Read values and perform computations
2. **Validation Phase:** Check if transaction can be committed
3. **Write Phase:** Apply changes to database

**Validation Test:**
For transactions $T_i$ and $T_j$ where $TS(T_i) < TS(T_j)$:

1. Finish($T_i$) < Start($T_j$), OR
2. Start($T_j$) < Finish($T_i$) < Validation($T_j$) and WriteSet($T_i$) ∩ ReadSet($T_j$) = ∅

## Deadlock Handling

### Deadlock Detection

Use **Wait-for Graph:**
- Nodes represent transactions
- Edge from $T_i$ to $T_j$ means $T_i$ waits for $T_j$
- Cycle indicates deadlock

### Deadlock Prevention

#### 1. Wait-Die Scheme
If $TS(T_i) < TS(T_j)$: $T_i$ waits for $T_j$
Else: $T_i$ dies (rollback)

#### 2. Wound-Wait Scheme
If $TS(T_i) < TS(T_j)$: $T_j$ is wounded (rollback)
Else: $T_i$ waits for $T_j$

## Isolation Levels

SQL defines four isolation levels:

### 1. Read Uncommitted
- Lowest isolation level
- Allows dirty reads
- No shared locks acquired

### 2. Read Committed
- Prevents dirty reads
- Shared locks released immediately after read
- Default in many systems

### 3. Repeatable Read
- Prevents dirty and unrepeatable reads
- Shared locks held until transaction ends
- May still have phantom reads

### 4. Serializable
- Highest isolation level
- Prevents all anomalies
- Uses range locks

## Recovery Techniques

### Log-Based Recovery

#### Immediate Database Modification
- Changes applied to database immediately
- **Undo operation:** Restore old values
- **Redo operation:** Apply new values

#### Deferred Database Modification
- Changes applied only after commit
- Only **Redo operation** needed

### Checkpoint-Based Recovery

Periodically save database state to reduce recovery time.

**Algorithm:**
1. Output all log records in main memory to stable storage
2. Output all modified buffer blocks to disk
3. Write checkpoint record to log

**Recovery Time:**
$T_{recovery} = T_{checkpoint} + T_{log\\_scan} + T_{redo/undo}$

## Performance Metrics

### Throughput
Number of transactions processed per unit time:
$$Throughput = \\frac{\\text{Number of Transactions}}{\\text{Time Period}}$$

### Response Time
Average time to complete a transaction:
$$Response\\_Time = \\frac{\\sum_{i=1}^{n} (Completion\\_Time_i - Arrival\\_Time_i)}{n}$$

### Concurrency Level
Average number of active transactions:
$$Concurrency = \\frac{\\sum_{i=1}^{n} Active\\_Time_i}{Total\\_Time}$$

## Example Implementation

\`\`\`python
class Transaction:
    def __init__(self, tid, operations):
        self.tid = tid
        self.operations = operations
        self.state = "ACTIVE"
        self.locks = set()
    
    def acquire_lock(self, item, lock_type):
        if lock_type == "S":
            return self.acquire_shared_lock(item)
        else:
            return self.acquire_exclusive_lock(item)
    
    def release_locks(self):
        for lock in self.locks:
            lock.release()
        self.locks.clear()
    
    def commit(self):
        self.state = "COMMITTED"
        self.release_locks()
        self.write_to_log("COMMIT")
    
    def rollback(self):
        self.state = "ABORTED"
        self.undo_operations()
        self.release_locks()
        self.write_to_log("ROLLBACK")
\`\`\`

## Best Practices

### Transaction Design:
- Keep transactions short and simple
- Minimize lock holding time
- Avoid user interaction within transactions
- Use appropriate isolation levels

### Deadlock Prevention:
- Acquire locks in consistent order
- Use timeouts for lock requests
- Implement deadlock detection algorithms

### Performance Optimization:
- Use indexes to reduce lock contention
- Partition data to reduce conflicts
- Implement efficient logging mechanisms

---

*Remember: Proper transaction management is crucial for maintaining data integrity in concurrent database environments!*

`;

export default content;