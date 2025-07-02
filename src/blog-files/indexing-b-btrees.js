const content = `# Database Indexing: B-Trees and B+ Trees Explained

Database indexing is a crucial technique for improving query performance by creating efficient data structures that provide fast access paths to data records.

## Introduction to Indexing

An **index** is a data structure that improves the speed of data retrieval operations on a database table at the cost of additional writes and storage space.

### Types of Indexes

#### 1. Primary Index
- Created on primary key
- Unique and non-null values
- Automatically maintained by DBMS

#### 2. Secondary Index
- Created on non-primary key attributes
- May contain duplicate values
- Explicitly created by users

#### 3. Clustering Index
- Data records are physically ordered according to index key
- Only one clustering index per table

#### 4. Non-Clustering Index
- Data records are not physically ordered
- Multiple non-clustering indexes possible

## B-Trees

B-Tree is a self-balancing tree data structure that maintains sorted data and allows searches, sequential access, insertions, and deletions in logarithmic time.

### Properties of B-Tree

For a B-Tree of order $m$:

1. Every node has at most $m$ children
2. Every internal node has at least $⌈m/2⌉$ children
3. Root has at least 2 children (unless it's a leaf)
4. All leaves are at the same level
5. Internal node with $k$ children has $k-1$ keys

### Mathematical Properties

#### Height of B-Tree
For a B-Tree with $n$ keys and order $m$:

**Minimum Height:**
$h_{min} = ⌈\\log_m(n+1)⌉$

**Maximum Height:**
$h_{max} = ⌊\\log_{⌈m/2⌉}((n+1)/2)⌋ + 1$

#### Storage Utilization
**Worst Case:** 50% (except root)
**Average Case:** 69% (ln 2 ≈ 0.693)

### B-Tree Operations

#### Search Operation
Time Complexity: $O(\\log n)$

\`\`\`python
def search_btree(node, key):
    i = 0
    # Find the first key greater than or equal to key
    while i < len(node.keys) and key > node.keys[i]:
        i += 1
    
    # If key found
    if i < len(node.keys) and key == node.keys[i]:
        return node, i
    
    # If leaf node, key not found
    if node.is_leaf:
        return None
    
    # Recursively search in appropriate child
    return search_btree(node.children[i], key)
\`\`\`

#### Insertion Operation

**Algorithm:**
1. Find appropriate leaf node
2. Insert key in sorted order
3. If node overflows (> m-1 keys), split node
4. Promote middle key to parent
5. Repeat until no overflow or create new root

**Split Condition:**
If node has $m$ keys after insertion, split into:
- Left node: first $⌊m/2⌋$ keys
- Right node: last $⌊m/2⌋$ keys  
- Middle key: promoted to parent

#### Deletion Operation

**Cases:**
1. **Key in leaf node:** Simply remove
2. **Key in internal node:** Replace with predecessor/successor
3. **Underflow:** Borrow from sibling or merge nodes

**Underflow Condition:**
Node has fewer than $⌈m/2⌉ - 1$ keys

### Example: B-Tree of Order 3

\`\`\`
       [10, 20]
      /    |    \\
   [5]   [15]   [25, 30]
\`\`\`

**Insert 12:**
\`\`\`
       [10, 20]
      /    |    \\
   [5]  [12,15]  [25, 30]
\`\`\`

## B+ Trees

B+ Tree is a variation of B-Tree optimized for range queries and sequential access.

### Key Differences from B-Tree

1. **Data only in leaves:** Internal nodes contain only keys for navigation
2. **Linked leaves:** All leaf nodes are linked for sequential access
3. **Redundant keys:** Keys may appear in both internal and leaf nodes
4. **All paths same length:** Guaranteed balanced structure

### Properties of B+ Tree

For a B+ Tree of order $m$:

1. Internal nodes have at most $m$ children
2. Internal nodes have at least $⌈m/2⌉$ children
3. Leaf nodes contain at least $⌈m/2⌉$ records
4. Leaf nodes contain at most $m-1$ records
5. All leaf nodes at same level

### Mathematical Analysis

#### Fanout
For page size $P$ and key size $K$:
$$Fanout = \\frac{P}{K + \\text{pointer size}}$$

#### Height
For $n$ records and fanout $F$:
$$Height = ⌈\\log_F(n)⌉$$

#### Range Query Cost
For range $[a, b]$ with $k$ qualifying records:
$$Cost = \\log_F(n) + \\frac{k}{\\text{records per page}}$$

### B+ Tree Operations

#### Search Operation

\`\`\`python
def search_bplus_tree(root, key):
    current = root
    
    # Navigate to leaf level
    while not current.is_leaf:
        i = 0
        while i < len(current.keys) and key >= current.keys[i]:
            i += 1
        current = current.children[i]
    
    # Search in leaf node
    for i, k in enumerate(current.keys):
        if k == key:
            return current.records[i]
    
    return None
\`\`\`

#### Range Query

\`\`\`python
def range_query(root, start_key, end_key):
    # Find starting leaf node
    leaf = find_leaf(root, start_key)
    results = []
    
    # Traverse linked leaves
    while leaf:
        for i, key in enumerate(leaf.keys):
            if start_key <= key <= end_key:
                results.append(leaf.records[i])
            elif key > end_key:
                return results
        leaf = leaf.next_leaf
    
    return results
\`\`\`

### Insertion in B+ Tree

**Algorithm:**
1. Find appropriate leaf node
2. Insert key-record pair
3. If leaf overflows, split leaf
4. Insert middle key in parent
5. Propagate splits up the tree

**Leaf Split:**
For $m$ keys in leaf, split into:
- Left leaf: first $⌈m/2⌉$ keys
- Right leaf: remaining keys
- Copy smallest key of right leaf to parent

### Deletion in B+ Tree

**Cases:**
1. **Key in leaf:** Remove key-record pair
2. **Underflow in leaf:** Redistribute or merge with sibling
3. **Key removal from internal node:** Replace with successor

## Comparison: B-Tree vs B+ Tree

| Feature | B-Tree | B+ Tree |
|---------|--------|---------|
| Data Storage | Internal + Leaf nodes | Leaf nodes only |
| Sequential Access | $O(n)$ | $O(k)$ for k records |
| Range Queries | Inefficient | Efficient |
| Space Utilization | Better | Slightly worse |
| Implementation | Simpler | More complex |

## Performance Analysis

### Time Complexities

| Operation | B-Tree | B+ Tree |
|-----------|--------|---------|
| Search | $O(\\log n)$ | $O(\\log n)$ |
| Insert | $O(\\log n)$ | $O(\\log n)$ |
| Delete | $O(\\log n)$ | $O(\\log n)$ |
| Range Query | $O(n)$ | $O(\\log n + k)$ |

### Space Complexity
Both: $O(n)$ where $n$ is number of keys

### Cache Performance

**Block Size Optimization:**
$$Optimal\\_Order = \\frac{\\text{Page Size}}{\\text{Key Size} + \\text{Pointer Size}}$$

For 4KB pages with 8-byte keys and 8-byte pointers:
$$Order = \\frac{4096}{8 + 8} = 256$$

## Practical Considerations

### Choosing B-Tree vs B+ Tree

**Use B-Tree when:**
- Random access is primary requirement
- Storage space is limited
- Simple implementation preferred

**Use B+ Tree when:**
- Range queries are common
- Sequential access needed
- Database systems (most use B+ trees)

### Optimization Techniques

#### Bulk Loading
For large datasets, build B+ tree bottom-up:
1. Sort all records by key
2. Build leaf level first
3. Build internal levels upward

**Time Complexity:** $O(n)$ vs $O(n \\log n)$ for individual inserts

#### Buffering
Use buffer pool to cache frequently accessed nodes:
$$Hit\\_Ratio = \\frac{\\text{Buffer Hits}}{\\text{Total Accesses}}$$

### Real-World Implementation

\`\`\`sql
-- Create index using B+ tree (default in most DBMS)
CREATE INDEX idx_employee_salary ON Employee(salary);

-- Range query optimized by B+ tree
SELECT * FROM Employee 
WHERE salary BETWEEN 50000 AND 80000;

-- Execution plan shows index scan
-- Cost: log_F(n) + k/records_per_page
\`\`\`

## Advanced Topics

### Concurrent B+ Trees
- **Crabbing Protocol:** Acquire locks while traversing
- **Lock Coupling:** Release parent lock after acquiring child lock
- **Optimistic Approach:** Assume no conflicts, rollback if needed

### Compression Techniques
- **Prefix Compression:** Remove common prefixes
- **Suffix Compression:** Remove common suffixes
- **Dictionary Encoding:** Map keys to shorter codes

**Space Savings:**
$$Compression\\_Ratio = \\frac{\\text{Original Size}}{\\text{Compressed Size}}$$

---

*Remember: Choosing the right index structure is crucial for database performance optimization!*

`;

export default content;