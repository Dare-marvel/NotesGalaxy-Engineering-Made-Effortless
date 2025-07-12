const content = `# Pipelining in Computer Architecture

Pipelining is a fundamental technique in computer architecture that increases instruction throughput by overlapping the execution of multiple instructions. It's analogous to an assembly line in manufacturing, where different stages of production occur simultaneously.

## Introduction to Pipelining

Pipelining exploits **instruction-level parallelism** by dividing instruction execution into multiple stages and processing different instructions in different stages simultaneously.

### Basic Concept

Without pipelining, instructions execute sequentially:
$Total\\_Time = n \\times Instruction\\_Time$

With pipelining:
$Total\\_Time = (k-1) + n \\times Stage\\_Time$

Where:
- $n$ = number of instructions
- $k$ = number of pipeline stages
- $Stage\\_Time = \\frac{Instruction\\_Time}{k}$

### Pipeline Speedup

**Theoretical speedup:**
$Speedup = \\frac{Time\\_without\\_pipeline}{Time\\_with\\_pipeline} = \\frac{n \\times T}{(k-1) \\times T + n \\times \\frac{T}{k}}$

For large $n$: $Speedup \\approx k$

**Pipeline efficiency:**
$Efficiency = \\frac{Speedup}{k} = \\frac{n}{(k-1) + n}$

## Classic 5-Stage Pipeline

The most common pipeline organization divides instruction execution into five stages:

### Pipeline Stages

**1. Instruction Fetch (IF):**
- Fetch instruction from memory
- Update program counter

**2. Instruction Decode (ID):**
- Decode instruction
- Read register operands
- Generate control signals

**3. Execute (EX):**
- Perform ALU operations
- Calculate memory addresses
- Evaluate branch conditions

**4. Memory Access (MEM):**
- Access data memory for loads/stores
- Pass through for other instructions

**5. Write Back (WB):**
- Write results to register file
- Update processor state

### Pipeline Register Design

Pipeline registers store intermediate results between stages:

$\\begin{array}{|c|c|c|c|}
\\hline
IF/ID & ID/EX & EX/MEM & MEM/WB \\\\
\\hline
32\\text{ bits} & 128\\text{ bits} & 96\\text{ bits} & 64\\text{ bits} \\\\
\\hline
\\end{array}$

Each register contains:
- Instruction fields
- Data values
- Control signals
- Status information

## Pipeline Hazards

Hazards prevent the next instruction from executing in the next clock cycle, reducing pipeline efficiency.

### Data Hazards

Occur when instructions depend on results from previous instructions.

#### Read After Write (RAW) - True Dependency

**Example:**
\`\`\`assembly
ADD R1, R2, R3    ; R1 = R2 + R3
SUB R4, R1, R5    ; R4 = R1 - R5 (depends on R1)
\`\`\`

**Pipeline diagram:**
\`\`\`
Clock:  1  2  3  4  5  6
ADD:   IF ID EX MEM WB
SUB:      IF ID EX  MEM WB
           ↑  ↑   ↑
        Stall needed here
\`\`\`

#### Write After Read (WAR) - Anti-dependency

Less common in simple pipelines, more relevant in out-of-order execution.

#### Write After Write (WAW) - Output dependency

Occurs when two instructions write to the same register.

### Control Hazards

Result from branch instructions that change the program flow.

**Branch penalty:**
$Penalty = (Number\\_of\\_stages - Branch\\_resolution\\_stage)$

**Example branch timing:**
\`\`\`assembly
BEQ R1, R2, LABEL    ; Branch if R1 == R2
ADD R3, R4, R5       ; May or may not execute
\`\`\`

### Structural Hazards

Occur when hardware resources are insufficient to support all combinations of instructions.

**Example:** Single memory port serving both instruction fetch and data access.

## Hazard Resolution Techniques

### Forwarding (Bypassing)

Forwards results directly from one pipeline stage to another without waiting for write-back.

**Forwarding paths:**
- EX/MEM → ALU input
- MEM/WB → ALU input
- MEM/WB → Memory data input

**Forwarding condition:**
\`\`\`
If (EX/MEM.RegisterRd == ID/EX.RegisterRs) AND 
   (EX/MEM.RegWrite == 1) AND 
   (EX/MEM.RegisterRd ≠ 0)
Then ForwardA = 10  // Forward from EX/MEM
\`\`\`

### Pipeline Stalls

Insert bubbles (no-ops) to resolve dependencies that cannot be forwarded.

**Load-use hazard:**
\`\`\`assembly
LW  R1, 0(R2)     ; Load R1 from memory
ADD R3, R1, R4    ; Use R1 (must stall)
\`\`\`

**Stall insertion:**
\`\`\`
Clock:  1  2  3  4  5  6
LW:    IF ID EX MEM WB
ADD:      IF ID stall EX MEM WB
\`\`\`

### Branch Prediction

Predict branch outcomes to reduce control hazard penalties.

#### Static Branch Prediction

**Always taken:** Predict all branches as taken
**Always not taken:** Predict all branches as not taken
**Backward taken, forward not taken:** Based on branch direction

#### Dynamic Branch Prediction

**1-bit predictor:**
$State = \\begin{cases}
Taken & \\text{if last branch was taken} \\\\
Not\\_Taken & \\text{if last branch was not taken}
\\end{cases}$

**2-bit predictor (Saturating counter):**
\`\`\`
States: Strongly Not Taken (00)
        Weakly Not Taken   (01)
        Weakly Taken       (10)
        Strongly Taken     (11)
\`\`\`

**Branch prediction accuracy:**
$Accuracy = \\frac{Correct\\_Predictions}{Total\\_Branches}$

## Code Example

Here's a pipeline simulator implementation:

\`\`\`c
#include <stdio.h>
#include <string.h>

typedef enum {
    NOP, ADD, SUB, LW, SW, BEQ, J
} InstructionType;

typedef struct {
    InstructionType type;
    int rs, rt, rd;
    int immediate;
    int valid;
} Instruction;

typedef struct {
    Instruction if_id, id_ex, ex_mem, mem_wb;
    int registers[32];
    int pc;
    int cycles;
    int stalls;
    int forwarding_enabled;
} Pipeline;

void pipeline_cycle(Pipeline* pipe) {
    // Write Back stage
    if (pipe->mem_wb.valid) {
        switch(pipe->mem_wb.type) {
            case ADD:
            case SUB:
                pipe->registers[pipe->mem_wb.rd] = pipe->mem_wb.immediate;
                break;
            case LW:
                pipe->registers[pipe->mem_wb.rt] = pipe->mem_wb.immediate;
                break;
        }
    }
    
    // Memory stage
    pipe->mem_wb = pipe->ex_mem;
    
    // Execute stage
    if (pipe->id_ex.valid) {
        int result = 0;
        switch(pipe->id_ex.type) {
            case ADD:
                result = pipe->registers[pipe->id_ex.rs] + 
                        pipe->registers[pipe->id_ex.rt];
                break;
            case SUB:
                result = pipe->registers[pipe->id_ex.rs] - 
                        pipe->registers[pipe->id_ex.rt];
                break;
        }
        pipe->ex_mem = pipe->id_ex;
        pipe->ex_mem.immediate = result;
    }
    
    // Decode stage - Check for hazards
    int stall_needed = 0;
    if (pipe->if_id.valid && pipe->id_ex.valid) {
        // Check for load-use hazard
        if (pipe->id_ex.type == LW &&
            (pipe->id_ex.rt == pipe->if_id.rs || 
             pipe->id_ex.rt == pipe->if_id.rt)) {
            stall_needed = 1;
            pipe->stalls++;
        }
    }
    
    if (!stall_needed) {
        pipe->id_ex = pipe->if_id;
        // Fetch next instruction
        pipe->if_id.valid = 1; // Simulate instruction fetch
        pipe->pc += 4;
    }
    
    pipe->cycles++;
}
\`\`\`

## Advanced Pipelining Techniques

### Superpipelining

Increases the number of pipeline stages to reduce clock cycle time.

**Deep pipeline advantages:**
- Higher clock frequency
- Better instruction throughput

**Disadvantages:**
- Increased branch misprediction penalty
- More complex hazard detection
- Higher power consumption

**Optimal pipeline depth:**
$Depth_{optimal} = \\sqrt{\\frac{Logic\\_Delay + Latch\\_Delay}{Latch\\_Delay}}$

### Superscalar Execution

Issues multiple instructions per clock cycle.

**Dual-issue pipeline:**
- Two instructions fetched per cycle
- Requires duplicate execution units
- More complex dependency checking

**Issue rate:** $IPC = \\frac{Instructions\\_Completed}{Clock\\_Cycles}$

**Theoretical maximum:** $IPC_{max} = Issue\\_Width$

### Out-of-Order Execution

Execute instructions as soon as operands are available, regardless of program order.

**Components:**
- **Reservation stations:** Hold instructions waiting for operands
- **Reorder buffer:** Maintain program order for commits
- **Register renaming:** Eliminate false dependencies

**Tomasulo's algorithm:**
1. Issue instructions to reservation stations
2. Execute when operands are ready
3. Broadcast results to waiting instructions
4. Commit results in program order

## Pipeline Performance Analysis

### CPI with Pipeline Stalls

**Base CPI:** 1 (ideal pipeline)

**Actual CPI:**
$CPI = 1 + Stalls\\_per\\_instruction$

$Stalls\\_per\\_instruction = Branch\\_stalls + Data\\_stalls + Structural\\_stalls$

### Branch Penalty Calculation

**Branch frequency:** Percentage of instructions that are branches
**Branch misprediction rate:** Percentage of branches predicted incorrectly
**Branch penalty:** Cycles lost per mispredicted branch

$Branch\\_stalls = Branch\\_frequency \\times Misprediction\\_rate \\times Branch\\_penalty$

### Pipeline Efficiency Metrics

**Throughput:**
$Throughput = \\frac{Instructions\\_completed}{Time}$

**Utilization:**
$Utilization = \\frac{Useful\\_cycles}{Total\\_cycles}$

**Pipeline stall frequency:**
$Stall\\_frequency = \\frac{Stall\\_cycles}{Total\\_cycles}$

## Dynamic Scheduling

### Scoreboard Algorithm

Centralized control for out-of-order execution:

**Four stages:**
1. **Issue:** Decode and check for structural hazards
2. **Read operands:** Wait for operands to become available
3. **Execute:** Perform operation
4. **Write result:** Update registers and notify waiting instructions

**Scoreboard table:**
$\\begin{array}{|c|c|c|c|c|}
\\hline
Instruction & Issue & Read & Execute & Write \\\\
\\hline
ADD\\_R1,R2,R3 & 1 & 2 & 3 & 4 \\\\
SUB\\_R4,R1,R5 & 2 & 5 & 6 & 7 \\\\
\\hline
\\end{array}$

### Register Renaming

Eliminates WAR and WAW hazards by mapping logical registers to physical registers.

**Mapping table:**
$Physical\\_Register = Rename\\_Table[Logical\\_Register]$

**Free list:** Available physical registers
**Active list:** Instructions awaiting commit

## Performance Comparison

| Pipeline Type | IPC | Clock Speed | Complexity | Power |
|---------------|-----|-------------|------------|-------|
| Simple 5-stage | 0.8-1.0 | High | Low | Low |
| Superpipelined | 0.9-1.1 | Very High | Medium | Medium |
| Superscalar | 1.5-3.0 | Medium | High | High |
| Out-of-order | 2.0-4.0 | Medium | Very High | Very High |

## Pipeline Design Considerations

### Clock Cycle Time

Limited by the slowest pipeline stage:
$T_{cycle} = max(T_{stage1}, T_{stage2}, ..., T_{stagek}) + T_{latch}$

**Stage balancing:**
Divide logic evenly among stages to minimize clock period.

### Pipeline Register Overhead

**Area overhead:** Pipeline registers add silicon area
**Power overhead:** Additional switching activity
**Timing overhead:** Setup and hold time requirements

**Total overhead:**
$Overhead = k \\times (Register\\_area + Register\\_power)$

### Hazard Detection Complexity

**Hardware cost:** $O(n^2)$ for $n$ instructions in flight
**Detection logic:** Comparators for register dependencies
**Control complexity:** FSM for hazard resolution

---

*Pipelining is a cornerstone technique that enables modern processors to achieve high performance through instruction-level parallelism!*

> Mastering pipeline concepts is essential for understanding how modern CPUs achieve their impressive performance levels.

`;

export default content;