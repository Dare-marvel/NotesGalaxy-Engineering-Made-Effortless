const SystemProgrammingandCompilerConstructionSPCC1 = [
  {
    question: "Which of the following is NOT a core component of a typical compiler?",
    options: ["Lexical Analyzer", "Parser", "Symbol Table", "Operating System"],
    correct: 3,
    category: "SPCC"
  },
  {
    question: "What optimization technique involves replacing a frequently used instruction with a faster, more efficient one?",
    options: ["Constant Folding", "Common Subexpression Elimination", "Inlining", "Register Allocation"],
    correct: 2,
    category: "SPCC"
  },
  {
    question: "In a demand-paged virtual memory system, which of these strategies minimizes page faults?",
    options: ["FIFO", "LRU", "Optimal", "MRU"],
    correct: 2,
    category: "SPCC"
  },
  {
    question: "What does a linker resolve during the linking phase?",
    options: ["Variables", "Function calls", "Data Structures", "Control flow"],
    correct: 1,
    category: "SPCC"
  },
  {
    question: "Which addressing mode allows you to access data relative to the current value of the program counter?",
    options: ["Direct", "Indirect", "Register Indirect", "Relative"],
    correct: 3,
    category: "SPCC"
  },
  {
    question: "What is a significant challenge in designing a compiler for a parallel processing architecture?",
    options: ["Error handling", "Memory management", "Optimizing for data dependencies", "Generating efficient code"],
    correct: 2,
    category: "SPCC"
  },
  {
    question: "A system call is used by a process to interact with which component?",
    options: ["Hardware", "Kernel", "User Space Applications", "Operating System Library"],
    correct: 1,
    category: "SPCC"
  },
  {
    question: "What is a major difference between a compiler and an interpreter?",
    options: ["Interpreters generate machine code, compilers do not", "Compilers generate intermediate code, interpreters do not", "Compilers translate the entire program, interpreters translate and execute line by line", "Compilers are faster, interpreters are slower"],
    correct: 2,
    category: "SPCC"
  },
  {
    question: "What is the role of a symbol table in a compiler?",
    options: ["Stores intermediate code", "Keeps track of variables and functions", "Manages memory allocation", "Handles lexical analysis"],
    correct: 1,
    category: "SPCC"
  },
  {
    question: "What is a critical section in concurrent programming?",
    options: ["A section of code that is never executed", "A section of code that can be executed by multiple processes simultaneously without issues", "A section of code that accesses shared resources", "A section of code that should be avoided"],
    correct: 2,
    category: "SPCC"
  },
  {
    question: "Which type of memory management technique divides memory into fixed-size blocks?",
    options: ["Paging", "Segmentation", "Swapping", "Fixed Partitioning"],
    correct: 3,
    category: "SPCC"
  },
  {
    question: "Which data structure is commonly used in a compiler's parser?",
    options: ["Queue", "Stack", "Tree", "Graph"],
    correct: 1,
    category: "SPCC"
  },
  {
    question: "What is the primary function of a linker in a program compilation process?",
    options: ["To perform code optimization", "To translate high-level code to assembly language", "To combine object code modules", "To generate machine code"],
    correct: 2,
    category: "SPCC"
  },
  {
    question: "Which design principle ensures that concurrent processes don't interfere with each other?",
    options: ["Concurrence", "Mutual Exclusion", "Atomicity", "Scheduling"],
    correct: 1,
    category: "SPCC"
  },
  {
    question: "What does a lexical analyzer do?",
    options: ["Executes code", "Parses code", "Identifies tokens", "Optimizes code"],
    correct: 2,
    category: "SPCC"
  },
  {
    question: "What is a major difference between a logical and a physical address in a computer system?",
    options: ["Logical address is used by the processor, physical address is used by the operating system", "Logical address is for the user, physical address is for the computer", "Logical address is a virtual address, physical address is the real address in memory", "Logical address is used by the compiler, physical address is used by the linker"],
    correct: 2,
    category: "SPCC"
  },
  {
    question: "Which concept is fundamental in a compiler's intermediate code generation phase?",
    options: ["Garbage Collection", "Code Optimization", "Type checking", "Context Switching"],
    correct: 1,
    category: "SPCC"
  },
  {
    question: "What is a common use case for virtual memory?",
    options: ["Direct access to hardware", "Compiling high-level code", "Processing large files in main memory", "Creating a larger virtual address space than physical memory"],
    correct: 3,
    category: "SPCC"
  },
  {
    question: "What is the function of a scheduler in an operating system?",
    options: ["Manages virtual memory", "Handles input/output operations", "Controls the execution of processes", "Translates source code to machine code"],
    correct: 2,
    category: "SPCC"
  },
  {
    question: "What is the purpose of a buffer in a system programming context?",
    options: ["To store intermediate assembly code", "To handle interrupts", "To improve the speed of input/output operations by storing data temporarily", "To manage memory allocation"],
    correct: 2,
    category: "SPCC"
  },
  {
    question: "Which of these is an example of a low-level programming language?",
    options: ["Python", "Java", "C++", "Assembly Language"],
    correct: 3,
    category: "SPCC"
  },
  {
    question: "A race condition occurs when multiple processes access and modify shared resources concurrently without proper synchronization, what's a common mechanism to deal with it?",
    options: ["Exception handling", "Virtualization", "Mutexes", "Dynamic linking"],
    correct: 2,
    category: "SPCC"
  },
  {
    question: "What is an advantage of using a just-in-time (JIT) compiler?",
    options: ["Improved source code readability", "Faster compilation times", "Increased security against malicious code", "Better performance for frequently executed code"],
    correct: 3,
    category: "SPCC"
  },
  {
    question: "Which optimization technique, commonly employed in compilers, leverages the properties of associativity and commutativity of arithmetic operations to rearrange the order of computations?",
    options: ["Constant Folding", "Dead Code Elimination", "Common Subexpression Elimination", "Loop Unrolling"],
    correct: 0,
    category: "SPCC"
  },
  {
    question: "In a virtual memory system, what data structure is crucial for managing page tables and translating virtual addresses to physical addresses?",
    options: ["Hash Table", "B-Tree", "Skip List", "Inverted Page Table"],
    correct: 3,
    category: "SPCC"
  },
  {
    question: "Consider a system with a multi-level page table. Which approach minimizes the memory overhead associated with page tables?",
    options: ["Hierarchical Page Tables", "Inverted Page Tables", "Demand Paging", "Segmentation"],
    correct: 0,
    category: "SPCC"
  },
  {
    question: "What critical aspect of a compiler directly impacts the efficiency and performance of the generated machine code, particularly when dealing with large programs?",
    options: ["Code generation optimization", "Lexical analysis", "Syntax analysis", "Symbol table management"],
    correct: 0,
    category: "SPCC"
  },
  {
    question: "In a compiler, which phase is responsible for translating a high-level program into an intermediate representation?",
    options: ["Parsing", "Scanning", "Semantic analysis", "Optimization"],
    correct: 2,
    category: "SPCC"
  },
  {
    question: "Which mechanism enables a process to access memory locations outside its allocated address space?",
    options: ["Segmentation", "Memory Mapping", "Virtual Memory", "Paging"],
    correct: 2,
    category: "SPCC"
  },
  {
    question: "What is the primary role of a linker in the compilation process?",
    options: ["Resolves external references", "Optimizes the code", "Performs lexical analysis", "Handles symbol table management"],
    correct: 0,
    category: "SPCC"
  },
  {
    question: "What is a key characteristic of a Just-In-Time (JIT) compiler?",
    options: ["Compiles the entire source code at once", "Compiles the code only when necessary", "Interprets the code in real-time", "Translates code to assembly only during debugging"],
    correct: 1,
    category: "SPCC"
  },
  {
    question: "What is the purpose of a symbol table in a compiler?",
    options: ["To store the intermediate representation", "To manage the names and types of identifiers", "To perform code optimization", "To manage the memory allocation"],
    correct: 1,
    category: "SPCC"
  },
  {
    question: "What is a common technique for reducing memory accesses during program execution?",
    options: ["Dead code elimination", "Code hoisting", "Data structures optimization", "Loop unrolling"],
    correct: 2,
    category: "SPCC"
  },
  {
    question: "What is the main function of a memory manager in a system?",
    options: ["To optimize the execution speed of programs", "To translate virtual addresses to physical addresses", "To allocate and deallocate memory to processes", "To provide file system access to users"],
    correct: 2,
    category: "SPCC"
  },
  {
    question: "Which system call is typically used to allocate memory for processes?",
    options: ["open()", "close()", "read()", "mmap()"],
    correct: 3,
    category: "SPCC"
  },
  {
    question: "Which scheduling algorithm is known for its fairness and responsiveness in handling multiple processes?",
    options: ["FIFO", "SJF", "Round Robin", "Priority"],
    correct: 2,
    category: "SPCC"
  },
  {
    question: "What is a crucial aspect of a compiler for handling variable scope and visibility within a program?",
    options: ["Register Allocation", "Code Generation", "Semantic Analysis", "Lexical Analysis"],
    correct: 2,
    category: "SPCC"
  },
  {
    question: "Which technique optimizes the use of CPU registers by assigning variables to registers?",
    options: ["Inlining", "Common Sub-expression Elimination", "Register Allocation", "Dead Code Elimination"],
    correct: 2,
    category: "SPCC"
  },
  {
    question: "Which fundamental concept is essential in system programming for ensuring data integrity and synchronization across concurrent processes?",
    options: ["Pointers", "Threads", "Atomic Operations", "Virtual Memory"],
    correct: 2,
    category: "SPCC"
  },
  {
    question: "How does a compiler handle the conversion of high-level data types to lower-level representations?",
    options: ["Lexical Analysis", "Semantic Analysis", "Type Checking", "Code Generation"],
    correct: 2,
    category: "SPCC"
  },
  {
    question: "A specific algorithm used in operating systems for managing disk I/O requests is known as",
    options: ["FIFO", "LRU", "SSTF", "Optimal"],
    correct: 2,
    category: "SPCC"
  },
  {
    question: "What is the most critical aspect of a linker for handling shared libraries?",
    options: ["Symbol resolution", "Code optimization", "Memory management", "Debugging"],
    correct: 0,
    category: "SPCC"
  },
  {
    question: "What does a compiler's error recovery mechanism deal with?",
    options: ["Lexical errors", "Syntax errors", "Logical errors", "Runtime errors"],
    correct: 1,
    category: "SPCC"
  },
  {
    question: "Which concept is fundamental to managing multiple processes on a system?",
    options: ["Recursion", "Iteration", "Scheduling", "Interrupts"],
    correct: 2,
    category: "SPCC"
  },
  {
    question: "What is the primary function of an assembler?",
    options: ["Translates high-level code to assembly", "Converts assembly code to machine code", "Optimizes machine code", "Links different modules"],
    correct: 1,
    category: "SPCC"
  },
  {
    question: "Which design pattern is frequently used in system programming to decouple modules and enhance their maintainability?",
    options: ["Singleton", "Observer", "Strategy", "Factory"],
    correct: 2,
    category: "SPCC"
  },
  {
    question: "A technique to handle page faults in a virtual memory system is called",
    options: ["Demand paging", "Segmentation", "Swap space", "Caching"],
    correct: 0,
    category: "SPCC"
  },
  {
    question: "Which optimization technique, commonly used in compilers, replaces a frequently accessed variable with a register, and reduces the number of memory accesses?",
    options: ["Dead Code Elimination", "Constant Folding", "Register Allocation", "Common Subexpression Elimination"],
    correct: 2,
    category: "SPCC"
  },
  {
    question: "In a linker, which of these is NOT a typical task for resolving external references?",
    options: ["Symbol Resolution", "Address Relocation", "Code Optimization", "Linking Libraries"],
    correct: 2,
    category: "SPCC"
  },
  {
    question: "A compiler encountering a code sequence 'x = y + z; y = x + z;' in an arithmetic-intensive loop will likely use which optimization to improve performance?",
    options: ["Loop Unrolling", "Strength Reduction", "Dead Code Elimination", "Constant Folding"],
    correct: 1,
    category: "SPCC"
  }
];

export default SystemProgrammingandCompilerConstructionSPCC1;
