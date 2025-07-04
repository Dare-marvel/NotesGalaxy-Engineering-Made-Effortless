const SystemProgrammingandCompilerConstructionSPCC3 = [
  {
    question: "What is a major concern when designing a virtual memory system?",
    options: ["Increasing the number of registers", "Reducing cache misses", "Balancing memory access speed and cost", "Reducing paging frequency"],
    correct: 2,
    category: "SPCC"
  },
  {
    question: "Which compiler phase typically handles the conversion of high-level code to assembly language?",
    options: ["Lexical Analysis", "Syntax Analysis", "Intermediate Code Generation", "Code Optimization"],
    correct: 2,
    category: "SPCC"
  },
  {
    question: "Which scheduling algorithm is known for its potential to lead to starvation in some cases?",
    options: ["FIFO", "Priority", "Shortest Job First", "Round Robin"],
    correct: 1,
    category: "SPCC"
  },
  {
    question: "In a compiler, which type of error is detected during the lexical analysis phase?",
    options: ["Syntax errors", "Semantic errors", "Type errors", "Lexical errors"],
    correct: 3,
    category: "SPCC"
  },
  {
    question: "What is the main purpose of a garbage collector?",
    options: ["Manage memory allocation", "Improve program performance", "Automatically reclaim unused memory", "Implement optimized code"],
    correct: 2,
    category: "SPCC"
  },
  {
    question: "Which design pattern is often employed for managing resources with a potentially large number of users?",
    options: ["Singleton", "Observer", "Factory", "Abstract Factory"],
    correct: 0,
    category: "SPCC"
  },
  {
    question: "What is the primary reason for using a linker?",
    options: ["To optimize the code", "To perform type checking", "To combine object files", "To generate the intermediate code"],
    correct: 2,
    category: "SPCC"
  },
  {
    question: "What data structure is commonly used for symbol table implementation?",
    options: ["Linked List", "Hash Table", "Binary Search Tree", "Stack"],
    correct: 1,
    category: "SPCC"
  },
  {
    question: "What is a critical section in operating system design?",
    options: ["A section of code that must be executed atomically", "A section of code that always succeeds", "A protected section in memory", "A section handled by a single process"],
    correct: 0,
    category: "SPCC"
  },
  {
    question: "In a compiler, which phase handles the creation of intermediate code?",
    options: ["Lexical Analysis", "Syntax Analysis", "Semantic Analysis", "Intermediate Code Generation"],
    correct: 3,
    category: "SPCC"
  },
  {
    question: "A file system uses inodes. What is an inode primarily responsible for?",
    options: ["Storing file data", "Storing file metadata", "Allocating disk space", "Managing directory structures"],
    correct: 1,
    category: "SPCC"
  },
  {
    question: "What is a major advantage of a pipelined CPU architecture?",
    options: ["Higher clock frequency", "Lower power consumption", "Reduced instruction latency", "Improved branch prediction"],
    correct: 2,
    category: "SPCC"
  },
  {
    question: "What is a major difference between a stack and a queue?",
    options: ["Stack follows LIFO, Queue follows FIFO", "Stack is used for function calls, Queue is used for processes", "Stack has fixed size, Queue is dynamic", "Stack uses pointers, Queue uses indices"],
    correct: 0,
    category: "SPCC"
  },
  {
    question: "Which operating system concept allows for running multiple processes simultaneously?",
    options: ["Concurrency", "Multitasking", "Scheduling", "Virtualization"],
    correct: 1,
    category: "SPCC"
  },
  {
    question: "Which concept is critical for handling multiple processes accessing shared resources?",
    options: ["Synchronization", "Deadlock avoidance", "Inter-process communication", "Resource allocation"],
    correct: 0,
    category: "SPCC"
  },
  {
    question: "What is the core principle behind a just-in-time (JIT) compiler?",
    options: ["Compiling code at runtime", "Compiling code beforehand", "Optimizing code on demand", "Reducing the runtime size"],
    correct: 0,
    category: "SPCC"
  },
  {
    question: "What does a linker resolve?",
    options: ["External references", "Internal references", "Function definitions", "Variable declarations"],
    correct: 0,
    category: "SPCC"
  },
  {
    question: "What is a common performance bottleneck in a database system?",
    options: ["Disk I/O", "CPU processing", "Memory access", "Network latency"],
    correct: 0,
    category: "SPCC"
  },
  {
    question: "Which optimization technique in a compiler is most effective at reducing the number of register spills during code generation, assuming limited register availability?",
    options: ["Dead Code Elimination", "Constant Folding", "Register Allocation", "Common Subexpression Elimination"],
    correct: 2,
    category: "SPCC"
  },
  {
    question: "A system program designed to monitor and manage the execution of other processes, preventing deadlocks and ensuring proper resource allocation, is best categorized as a:",
    options: ["File System", "Device Driver", "Process Scheduler", "Memory Manager"],
    correct: 2,
    category: "SPCC"
  },
  {
    question: "In a virtual memory system, which algorithm is most likely to suffer from Belady's anomaly (where increasing the number of page frames can increase page faults)?",
    options: ["FIFO", "LRU", "Optimal", "Clock"],
    correct: 0,
    category: "SPCC"
  },
  {
    question: "Which aspect of compiler design directly influences the generated assembly code's efficiency and resource usage?",
    options: ["Lexical Analysis", "Syntax Analysis", "Semantic Analysis", "Intermediate Code Generation"],
    correct: 3,
    category: "SPCC"
  },
  {
    question: "What crucial component of a compiler handles the translation of high-level language constructs to an intermediate representation, often a tree structure?",
    options: ["Lexical Analyzer", "Parser", "Semantic Analyzer", "Abstract Syntax Tree"],
    correct: 1,
    category: "SPCC"
  },
  {
    question: "Which technique in operating systems allows multiple processes to share a single copy of a program's code?",
    options: ["Dynamic Linking", "Static Linking", "Virtual Memory", "Paging"],
    correct: 0,
    category: "SPCC"
  },
  {
    question: "When dealing with a large number of global variables, a compiler may employ which technique to potentially improve memory management during compilation?",
    options: ["Variable Folding", "Data Structures", "Global Variable Optimization", "Register Allocation"],
    correct: 2,
    category: "SPCC"
  },
  {
    question: "What is a primary drawback of using a stack-based virtual machine (VM) compared to a register-based VM?",
    options: ["Higher Memory Usage", "Increased Instruction Complexity", "Reduced Efficiency", "Slower Execution"],
    correct: 2,
    category: "SPCC"
  },
  {
    question: "Which compiler optimization aims to reduce redundant computations by replacing expressions with previously computed results?",
    options: ["Constant Folding", "Common Subexpression Elimination", "Dead Code Elimination", "Loop Unrolling"],
    correct: 1,
    category: "SPCC"
  },
  {
    question: "What crucial aspect of a linker determines whether a library function is linked statically or dynamically?",
    options: ["Symbol Resolution", "File Format", "Memory Allocation", "Code Optimization"],
    correct: 0,
    category: "SPCC"
  },
  {
    question: "Which memory management technique in operating systems avoids external fragmentation by allocating memory in fixed-size blocks?",
    options: ["Paging", "Segmentation", "Buddy System", "Slab Allocation"],
    correct: 2,
    category: "SPCC"
  },
  {
    question: "How does a compiler typically handle function calls and return addresses during code generation?",
    options: ["Direct Memory Access", "Stack Frame Management", "Virtual Memory Mapping", "Process Switching"],
    correct: 1,
    category: "SPCC"
  },
  {
    question: "What is the primary purpose of a garbage collector in a system programming context?",
    options: ["Freeing up memory occupied by unused objects", "Improving CPU performance", "Optimizing code size", "Preventing memory leaks"],
    correct: 0,
    category: "SPCC"
  },
  {
    question: "Which concept is crucial for achieving modularity and reusability in system programming by separating code into distinct units?",
    options: ["Abstraction", "Data Structures", "Concurrency", "Modular Design"],
    correct: 3,
    category: "SPCC"
  },
  {
    question: "What is a key consideration when implementing a dynamic loader in an operating system?",
    options: ["Code optimization", "Memory mapping", "Process scheduling", "Security"],
    correct: 1,
    category: "SPCC"
  },
  {
    question: "What is a major advantage of using a virtual file system (VFS) in an operating system?",
    options: ["Faster file access", "Reduced memory consumption", "Increased security", "Enhanced modularity"],
    correct: 3,
    category: "SPCC"
  },
  {
    question: "Which technique significantly improves performance of programs working with large arrays?",
    options: ["Vectorization", "Dynamic programming", "Divide and conquer", "Memoization"],
    correct: 0,
    category: "SPCC"
  },
  {
    question: "Which method ensures that code executed by a program has been verified against malicious instructions, crucial for security?",
    options: ["Hardware Protection", "Memory Protection", "Sandboxing", "Code Integrity"],
    correct: 3,
    category: "SPCC"
  },
  {
    question: "What is the primary role of an interpreter in a compiler-interpreter workflow?",
    options: ["Converting code into an intermediate representation", "Generating assembly code", "Executing intermediate code", "Translating source code into machine code"],
    correct: 2,
    category: "SPCC"
  },
  {
    question: "Which data structure is most commonly used to represent the intermediate code generated by a compiler during code optimization?",
    options: ["Linked List", "Array", "Tree", "Hash Table"],
    correct: 2,
    category: "SPCC"
  },
  {
    question: "What is the primary function of a process scheduler in a multitasking operating system?",
    options: ["Managing memory allocation", "Synchronizing processes", "Allocating system resources", "Controlling process execution"],
    correct: 3,
    category: "SPCC"
  },
  {
    question: "In compiler design, what does the process of 'syntax directed translation' entail?",
    options: ["Converting source code to assembly", "Generating intermediate code", "Attaching attributes to syntax tree nodes", "Performing semantic analysis"],
    correct: 2,
    category: "SPCC"
  },
  {
    question: "A system program responsible for converting high-level language code to machine code is known as a:",
    options: ["Linker", "Loader", "Interpreter", "Compiler"],
    correct: 3,
    category: "SPCC"
  },
  {
    question: "In a compiler's intermediate code generation phase, which representation often utilizes three-address instructions?",
    options: ["Abstract Syntax Tree (AST)", "Syntax Directed Translation (SDT)", "Three-address code", "Quadruples"],
    correct: 2,
    category: "SPCC"
  },
  {
    question: "Which technique in system programming is crucial for preventing multiple processes from simultaneously accessing and modifying shared resources, leading to data corruption?",
    options: ["Dynamic linking", "Virtual memory", "Semaphore", "Memory mapping"],
    correct: 2,
    category: "SPCC"
  },
  {
    question: "Consider a compiler that encounters a complex expression involving multiple operators and operands. What optimization technique might be employed to improve code efficiency by rearranging the operations?",
    options: ["Constant folding", "Common subexpression elimination", "Dead code elimination", "Loop unrolling"],
    correct: 1,
    category: "SPCC"
  },
  {
    question: "When dealing with file systems, which method is particularly effective for managing space efficiency and maintaining data integrity during updates and modifications?",
    options: ["Linked allocation", "Indexed allocation", "Direct allocation", "File allocation table (FAT)"],
    correct: 1,
    category: "SPCC"
  },
  {
    question: "In a linker's role, resolving external references during the linking phase can be a computationally complex task. Which algorithm is commonly used for this task?",
    options: ["Bellman-Ford", "Floyd-Warshall", "Depth-First Search", "Breadth-First Search"],
    correct: 3,
    category: "SPCC"
  },
  {
    question: "Which optimization technique in a compiler directly aims at minimizing the total number of instructions executed by simplifying or eliminating redundant operations in a program?",
    options: ["Code hoisting", "Constant folding", "Dead code elimination", "Strength reduction"],
    correct: 2,
    category: "SPCC"
  },
  {
    question: "A system programmer is concerned with a program accessing memory locations outside of its allocated space. Which mechanism is critical for preventing such errors?",
    options: ["Stack overflow detection", "Segmentation fault handling", "Garbage collection", "Exception handling"],
    correct: 1,
    category: "SPCC"
  },
  {
    question: "For a specific target architecture, a compiler needs to generate instructions in the correct order and sequence based on the semantics of the source code. Which essential stage manages this?",
    options: ["Lexical analysis", "Parsing", "Semantic analysis", "Code generation"],
    correct: 3,
    category: "SPCC"
  },
  {
    question: "What fundamental data structure is frequently used in a compiler's intermediate representation to represent the hierarchical structure of a program?",
    options: ["Quadruple", "Triple", "Abstract Syntax Tree", "Three-address code"],
    correct: 2,
    category: "SPCC"
  }
];

export default SystemProgrammingandCompilerConstructionSPCC3;
