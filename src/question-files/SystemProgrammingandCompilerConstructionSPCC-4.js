const SystemProgrammingandCompilerConstructionSPCC4 = [
  {
    question: "A critical aspect of operating system design is managing processes. Which scheduling algorithm prioritizes the process with the shortest expected burst time?",
    options: ["Shortest Job First", "Round Robin", "Priority Scheduling", "Multilevel Queue"],
    correct: 0,
    category: "SPCC"
  },
  {
    question: "In a compiler design, which component performs the task of converting source code into a stream of tokens?",
    options: ["Parser", "Lexer", "Semantic analyzer", "Intermediate code generator"],
    correct: 1,
    category: "SPCC"
  },
  {
    question: "Which technique in system programming leverages precompiled code sections to improve application performance?",
    options: ["Dynamic linking", "Static linking", "Function inlining", "Code caching"],
    correct: 0,
    category: "SPCC"
  },
  {
    question: "In a compiler, what intermediate representation (IR) is commonly used to represent a program as a sequence of basic blocks?",
    options: ["Abstract Syntax Tree", "Control Flow Graph", "Three-address code", "Syntax Directed Translation"],
    correct: 1,
    category: "SPCC"
  },
  {
    question: "What crucial aspect of a compiler ensures type checking and enforcing the language's type rules during compilation?",
    options: ["Code Optimization", "Semantic Analysis", "Lexical Analysis", "Parsing"],
    correct: 1,
    category: "SPCC"
  },
  {
    question: "Real-time systems often require precise timing constraints. Which scheduling algorithm is particularly suited for managing these constraints?",
    options: ["Round Robin", "Priority Scheduling", "Shortest Job First", "Earliest Deadline First"],
    correct: 3,
    category: "SPCC"
  },
  {
    question: "Error recovery in a compiler is crucial. Which error recovery strategy involves the compiler attempting to continue processing after encountering an error?",
    options: ["Panic mode", "Phrase-level recovery", "Error correction", "Semantic recovery"],
    correct: 0,
    category: "SPCC"
  },
  {
    question: "In system programming, which approach to managing memory allocates and deallocates memory dynamically during program execution?",
    options: ["Virtual memory", "Heap memory management", "Stack memory", "Memory mapping"],
    correct: 1,
    category: "SPCC"
  },
  {
    question: "Which memory management scheme is typically used for allocating and dealing with memory in operating systems?",
    options: ["Segmented", "Paged", "Linked", "Direct"],
    correct: 1,
    category: "SPCC"
  },
  {
    question: "What key difference distinguishes a compiler from an interpreter?",
    options: ["Compilation occurs at runtime", "Interpreters generate intermediate code", "Interpreters generate native machine code", "Compilers perform semantic analysis before code generation"],
    correct: 3,
    category: "SPCC"
  },
  {
    question: "A key component of robust operating systems is preventing unwanted resource access by unauthorized processes. Which mechanism manages this access control?",
    options: ["File permissions", "Process isolation", "Inter-process communication", "Virtual memory"],
    correct: 0,
    category: "SPCC"
  },
  {
    question: "What does the symbol table in a compiler primarily store?",
    options: ["Tokens", "Abstract Syntax Trees", "Intermediate code", "Identifiers and their attributes"],
    correct: 3,
    category: "SPCC"
  },
  {
    question: "Garbage collection, an important memory management technique, is most commonly implemented in what type of languages?",
    options: ["Assembly", "C", "Java", "C++"],
    correct: 2,
    category: "SPCC"
  },
  {
    question: "In a compiler, what is the primary function of the back-end?",
    options: ["Parsing", "Lexical analysis", "Semantic analysis", "Code generation"],
    correct: 3,
    category: "SPCC"
  },
  {
    question: "In a virtual memory system, which algorithm, known for its low overhead and ease of implementation, is often used for page replacement, but can suffer from Belady's anomaly?",
    options: ["FIFO", "LRU", "Optimal", "Clock"],
    correct: 0,
    category: "SPCC"
  },
  {
    question: "Which optimization technique, commonly used in compilers, involves rearranging the order of operations to improve code efficiency by reducing cache misses?",
    options: ["Loop unrolling", "Constant folding", "Dead code elimination", "Code hoisting"],
    correct: 0,
    category: "SPCC"
  },
  {
    question: "What critical section problem solution employs atomic instructions for ensuring mutual exclusion, particularly beneficial for multiprocessor systems?",
    options: ["Peterson's algorithm", "Bakery algorithm", "Test-and-set", "Semaphore"],
    correct: 2,
    category: "SPCC"
  },
  {
    question: "Which intermediate representation (IR) in a compiler, often used for optimization, represents the code in a tree-like structure?",
    options: ["Three-address code", "Quadruples", "Abstract Syntax Tree (AST)", "Syntax Directed Translation"],
    correct: 2,
    category: "SPCC"
  },
  {
    question: "In a compiler's lexical analysis phase, what is the primary role of a finite automaton?",
    options: ["Generating intermediate code", "Recognizing tokens", "Performing semantic analysis", "Optimizing code"],
    correct: 1,
    category: "SPCC"
  },
  {
    question: "A system program that translates assembly code into machine code is called a?",
    options: ["Assembler", "Linker", "Loader", "Interpreter"],
    correct: 0,
    category: "SPCC"
  },
  {
    question: "Which technique in a compiler is crucial for managing identifiers and their scopes during the semantic analysis phase?",
    options: ["Symbol table", "Syntax tree", "Abstract machine code", "Intermediate code generation"],
    correct: 0,
    category: "SPCC"
  },
  {
    question: "What is the core responsibility of a linker in a typical operating system?",
    options: ["Resolving external references", "Creating a load module", "Performing memory management", "Compiling source code"],
    correct: 0,
    category: "SPCC"
  },
  {
    question: "Which optimization technique aims to remove redundant computations by storing intermediate results and reusing them?",
    options: ["Common subexpression elimination", "Dead code elimination", "Constant folding", "Loop unrolling"],
    correct: 0,
    category: "SPCC"
  },
  {
    question: "What is the primary function of a virtual machine in a system program?",
    options: ["Execute machine code directly", "Translate code to a different ISA", "Manage physical memory allocation", "Perform input/output operations"],
    correct: 1,
    category: "SPCC"
  },
  {
    question: "In operating system scheduling, what scheduling algorithm favors processes that have waited the longest?",
    options: ["Shortest Job First", "Round Robin", "Priority Scheduling", "Longest Job First"],
    correct: 2,
    category: "SPCC"
  },
  {
    question: "What error is frequently caught during the intermediate code generation phase of a compiler?",
    options: ["Type errors", "Syntax errors", "Linker errors", "Logical errors"],
    correct: 0,
    category: "SPCC"
  },
  {
    question: "Which memory management technique allows multiple processes to share the same physical memory address space?",
    options: ["Paging", "Segmentation", "Virtual memory", "Swapping"],
    correct: 1,
    category: "SPCC"
  },
  {
    question: "What's the primary difference between a preemptive and non-preemptive scheduling algorithm?",
    options: ["Preemptive allows context switching based on time limits", "Non-preemptive allows the OS to interrupt a running process", "Preemptive prioritizes I/O-bound processes", "Non-preemptive only works in single-core systems"],
    correct: 0,
    category: "SPCC"
  },
  {
    question: "In a compiler, what is the purpose of the semantic analysis phase?",
    options: ["Validating the syntax of the code", "Converting the code into intermediate representation", "Checking the meaning and context of the code", "Recognizing tokens"],
    correct: 2,
    category: "SPCC"
  },
  {
    question: "What optimization technique rewrites code based on specific patterns that are identified as frequently occurring?",
    options: ["Common subexpression elimination", "Code hoisting", "Strength reduction", "Loop unrolling"],
    correct: 2,
    category: "SPCC"
  },
  {
    question: "Which file is created by a compiler to hold the intermediate code before the code is assembled?",
    options: ["Executable file", "Source code file", "Intermediate file", "Object file"],
    correct: 2,
    category: "SPCC"
  },
  {
    question: "What data structure is typically used to represent the hierarchical structure of a program?",
    options: ["Symbol Table", "Queue", "Stack", "Parse Tree"],
    correct: 3,
    category: "SPCC"
  },
  {
    question: "A key characteristic of a just-in-time (JIT) compiler is that it?",
    options: ["Compiles code at runtime", "Compiles code at design time", "Compiles code at link time", "Compiles code at load time"],
    correct: 0,
    category: "SPCC"
  },
  {
    question: "Which concept in system programming deals with controlling the sharing of resources among concurrent processes?",
    options: ["Scheduling", "Synchronization", "Memory Management", "Virtualization"],
    correct: 1,
    category: "SPCC"
  },
  {
    question: "Which aspect of compiler design involves checking the consistency of data types and operations?",
    options: ["Lexical analysis", "Parsing", "Semantic analysis", "Optimization"],
    correct: 2,
    category: "SPCC"
  },
  {
    question: "What is the essential role of a linker in the process of creating an executable file?",
    options: ["Converting assembly code to machine code", "Resolving external references", "Handling memory allocation", "Performing code optimization"],
    correct: 1,
    category: "SPCC"
  },
  {
    question: "A key difference between a compiler and an interpreter is that an interpreter?",
    options: ["Converts the entire source code to machine code", "Executes code line-by-line", "Generates an intermediate representation", "Performs code optimization"],
    correct: 1,
    category: "SPCC"
  },
  {
    question: "In a system programming context, what does the term 'context switching' represent?",
    options: ["Copying data from one process to another", "Changing from one program to another", "Temporarily suspending one process to resume another", "Synchronizing different threads"],
    correct: 2,
    category: "SPCC"
  },
  {
    question: "What is the purpose of a cache in a computer system?",
    options: ["To slow down processing", "To hold frequently accessed data for faster retrieval", "To store the operating system", "To hold all data from main memory"],
    correct: 1,
    category: "SPCC"
  },
  {
    question: "Which of the following is NOT a typical optimization technique used in modern compilers to reduce code size?",
    options: ["Common subexpression elimination", "Dead code elimination", "Loop unrolling", "Function inlining"],
    correct: 0,
    category: "SPCC"
  },
  {
    question: "In a virtual memory system, which algorithm is known for its tendency to exhibit poor performance under certain page replacement scenarios, particularly in cases of frequent page faults?",
    options: ["Least Recently Used (LRU)", "First-In, First-Out (FIFO)", "Clock Algorithm", "Optimal Algorithm"],
    correct: 1,
    category: "SPCC"
  },
  {
    question: "A crucial aspect of linker functionality is resolving external references. Which of these is NOT a common approach for resolving these references?",
    options: ["Symbol table lookup and matching", "Relocation of code and data", "Code rewriting based on runtime environment", "Virtual memory address translation"],
    correct: 2,
    category: "SPCC"
  },
  {
    question: "Which phase of a compiler is responsible for transforming the abstract syntax tree (AST) into a lower-level intermediate representation (e.g., three-address code)?",
    options: ["Lexical analysis", "Syntax analysis", "Semantic analysis", "Intermediate code generation"],
    correct: 3,
    category: "SPCC"
  },
  {
    question: "In a system programming context, a crucial challenge involves managing shared resources. Which mechanism is most suitable for ensuring exclusive access to a shared variable in a multithreaded environment?",
    options: ["Atomic operations", "Semaphores", "Mutexes", "Condition variables"],
    correct: 2,
    category: "SPCC"
  },
  {
    question: "When dealing with exception handling in a system programming environment, which approach is best for providing a controlled mechanism to handle errors or exceptional situations?",
    options: ["Signal handling", "Custom error codes", "Stack unwinding", "Exception specifications"],
    correct: 2,
    category: "SPCC"
  },
  {
    question: "In a compiler design, which optimization technique aims to transform a piece of code into an equivalent one that runs faster?",
    options: ["Constant folding", "Dead code elimination", "Loop unrolling", "All of the above"],
    correct: 3,
    category: "SPCC"
  },
  {
    question: "For a compiler to handle different architectures efficiently, which mechanism is used to represent an architecture-independent intermediate representation (IR)?",
    options: ["Bytecode", "Abstract syntax tree (AST)", "Three-address code (3AC)", "Assembly language"],
    correct: 0,
    category: "SPCC"
  },
  {
    question: "In a memory management scheme, which technique is essential to dynamically allocate and deallocate memory during program execution?",
    options: ["Paging", "Segmentation", "Dynamic linking", "Heap management"],
    correct: 3,
    category: "SPCC"
  },
  {
    question: "A key aspect of a system programming language is the ability to control low-level hardware resources. Which language feature best exemplifies this capability?",
    options: ["Pointers", "Exception handling", "Object-oriented programming", "Generics"],
    correct: 0,
    category: "SPCC"
  },
  {
    question: "Modern operating systems frequently use a hierarchical file system.  Which of these is NOT a typical feature of this structure?",
    options: ["Pathnames for unique file references", "Tree-like structure for organizing files", "Consistency check and repair mechanisms", "Recursive directory traversal with symbolic links"],
    correct: 3,
    category: "SPCC"
  }
];

export default SystemProgrammingandCompilerConstructionSPCC4;
