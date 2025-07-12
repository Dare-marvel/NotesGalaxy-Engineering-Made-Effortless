const ComputerOrganizationandArchitectureCOA4 = [
  {
    question: "What is the main difference between RISC and CISC architectures in terms of instruction sets?",
    options: ["RISC has fewer, simpler instructions; CISC has many complex instructions", "RISC has more, complex instructions; CISC has fewer simple instructions", "RISC and CISC have identical instruction sets", "RISC and CISC have no significant differences in instruction sets"],
    correct: 0,
    category: "COA"
  },
  {
    question: "In a computer system with a Von Neumann architecture, which component manages fetching instructions and data?",
    options: ["ALU", "Control Unit", "Memory", "Input/Output Controller"],
    correct: 1,
    category: "COA"
  },
  {
    question: "Which concept allows multiple processes to share the CPU efficiently in a time-sliced manner?",
    options: ["Memory management", "Instruction pipelining", "DMA", "Multitasking"],
    correct: 3,
    category: "COA"
  },
  {
    question: "What is the role of a Floating Point Unit (FPU)?",
    options: ["Integer arithmetic", "Complex math operations", "Logical operations", "Character manipulation"],
    correct: 1,
    category: "COA"
  },
  {
    question: "A computer system's performance is impacted by its clock frequency and which other critical factor?",
    options: ["Instruction set size", "Memory access latency", "Number of transistors", "Number of cores"],
    correct: 1,
    category: "COA"
  },
  {
    question: "What is the purpose of memory interleaving?",
    options: ["Increase memory access speed", "Reduce memory access latency", "Improve cache coherence", "Support multitasking"],
    correct: 0,
    category: "COA"
  },
  {
    question: "What does a DMA controller directly control in a computer system?",
    options: ["Memory bus", "CPU bus", "Network connections", "System bus"],
    correct: 0,
    category: "COA"
  },
  {
    question: "What is the significance of a 'branch prediction' unit in a processor?",
    options: ["Reduce the clock cycle time", "Improve code efficiency", "Enable parallel execution", "Improve memory access"],
    correct: 0,
    category: "COA"
  },
  {
    question: "Which method is used to manage data stored across multiple physical memory chips?",
    options: ["Cache coherency", "Memory banking", "Virtual memory", "Memory mapping"],
    correct: 1,
    category: "COA"
  },
  {
    question: "What is the key characteristic of a parallel processing system?",
    options: ["Multiple instructions executed sequentially", "Single instruction executed concurrently", "Multiple instructions executed concurrently", "Sequential execution of single instructions"],
    correct: 2,
    category: "COA"
  },
  {
    question: "Which technology is used to minimize the wait time for I/O operations on a computer system?",
    options: ["Interrupt handling", "Polling", "DMA", "Cache memory"],
    correct: 2,
    category: "COA"
  },
  {
    question: "What is the primary function of a stack in computer architecture?",
    options: ["Manage program flow", "Perform arithmetic operations", "Store temporary data", "Control I/O devices"],
    correct: 2,
    category: "COA"
  },
  {
    question: "Which concept enables multiple processes to run concurrently in a single CPU system?",
    options: ["Paging", "Segmentation", "Multithreading", "DMA"],
    correct: 2,
    category: "COA"
  },
  {
    question: "What is the purpose of a bus arbiter in a multi-master system?",
    options: ["Generate interrupts", "Control data flow", "Allocate bus access", "Handle interrupts"],
    correct: 2,
    category: "COA"
  },
  {
    question: "What is the major benefit of using a hierarchical memory system?",
    options: ["Reduced memory capacity", "Reduced cost", "Improved access speed", "Decreased complexity"],
    correct: 2,
    category: "COA"
  },
  {
    question: "What is a major limitation of a Von Neumann architecture?",
    options: ["Inability to fetch instructions and data concurrently", "Limited addressing space", "Slow clock speed", "High power consumption"],
    correct: 0,
    category: "COA"
  },
  {
    question: "In a pipelined processor, a data hazard occurs when:\n  a) Two instructions need the same resources concurrently.\n  b) An instruction depends on the result of a previous instruction that is still in the pipeline.\n  c) A branch instruction changes the program counter unexpectedly.\n  d) Cache misses prevent fetching the next instruction.",
    options: ["a) Two instructions need the same resources concurrently.", "b) An instruction depends on the result of a previous instruction that is still in the pipeline.", "c) A branch instruction changes the program counter unexpectedly.", "d) Cache misses prevent fetching the next instruction."],
    correct: 1,
    category: "COA"
  },
  {
    question: "Which addressing mode allows accessing data stored at an address calculated from a base register and an offset?",
    options: ["Direct addressing", "Indirect addressing", "Indexed addressing", "Immediate addressing"],
    correct: 2,
    category: "COA"
  },
  {
    question: "A system using a write-back cache policy will experience a:\n  a) Faster write operation compared to write-through\n  b) Slower write operation compared to write-through\n  c) Write operation is the same as write-through\n  d) Write operation speed doesn't depend on the cache policy",
    options: ["a) Faster write operation compared to write-through", "b) Slower write operation compared to write-through", "c) Write operation is the same as write-through", "d) Write operation speed doesn't depend on the cache policy"],
    correct: 0,
    category: "COA"
  },
  {
    question: "What is the primary function of a Memory Management Unit (MMU)?",
    options: ["To manage the CPU's registers.", "To translate virtual addresses to physical addresses.", "To control the cache memory.", "To manage the input/output devices."],
    correct: 1,
    category: "COA"
  },
  {
    question: "Which CPU scheduling algorithm is prone to starvation?",
    options: ["FCFS", "SJF", "Priority", "Round Robin"],
    correct: 2,
    category: "COA"
  },
  {
    question: "Which component in a computer system is responsible for fetching instructions from memory?",
    options: ["ALU", "CU", "Registers", "Memory Controller"],
    correct: 1,
    category: "COA"
  },
  {
    question: "What does a RISC processor generally favor?",
    options: ["Complex instructions", "Simple instructions", "Variable instruction length", "No cache memory."],
    correct: 1,
    category: "COA"
  },
  {
    question: "What does a superscalar processor architecture aim to achieve?",
    options: ["Reduced instruction latency", "Increased instruction throughput", "Improve clock frequency", "Reduce power consumption"],
    correct: 1,
    category: "COA"
  },
  {
    question: "In a virtual memory system, what is a page fault?",
    options: ["An error in the paging algorithm", "A request for a page that is not in memory", "An issue with the page table", "A write operation on a full page"],
    correct: 1,
    category: "COA"
  },
  {
    question: "A critical section in concurrent programming is a section of code that:",
    options: ["can be executed by multiple processes simultaneously", "must be protected to avoid race conditions", "can only be executed by a single process", "does not need any synchronization mechanisms"],
    correct: 1,
    category: "COA"
  },
  {
    question: "What is the main difference between a bus and a network?",
    options: ["Network uses switches, bus uses wires", "Bus connects multiple devices, network connects multiple systems", "Bus has a shared medium, network has dedicated connections", "Bus has a broadcast topology, network uses point-to-point connections"],
    correct: 2,
    category: "COA"
  },
  {
    question: "What does locality of reference mean in memory access patterns?",
    options: ["Data accessed is randomly scattered in memory", "Data is accessed in sequential order", "Data accessed is clustered in memory", "Data is accessed in decreasing order of address"],
    correct: 2,
    category: "COA"
  },
  {
    question: "Which register holds the memory address of the next instruction to be executed?",
    options: ["Accumulator", "Program Counter", "Instruction Register", "Memory Address Register"],
    correct: 1,
    category: "COA"
  },
  {
    question: "What is the role of a Floating-Point Unit (FPU)?",
    options: ["To perform integer arithmetic operations", "To perform floating-point arithmetic operations", "To manage memory access", "To control the CPU's execution units"],
    correct: 1,
    category: "COA"
  },
  {
    question: "What does the term 'CISC' stand for in computer architecture?",
    options: ["Complex Instruction Set Computing", "Complicated Instruction Set Computer", "Coded Instruction Set Code", "Common Instruction Set Computer"],
    correct: 0,
    category: "COA"
  },
  {
    question: "Which method is used to quickly access data stored in a specific location in memory?",
    options: ["Sequential access", "Direct access", "Random access", "Serial access"],
    correct: 2,
    category: "COA"
  },
  {
    question: "What is the function of an opcode in an instruction?",
    options: ["Specifies the data to be operated on", "Specifies the source operands", "Specifies the destination operand", "Specifies the operation to be performed"],
    correct: 3,
    category: "COA"
  },
  {
    question: "In a cache memory system, what is a cache miss?",
    options: ["When the requested data is found in the cache", "When the data is correctly written to the cache", "When the data is not found in the cache", "When the cache is full"],
    correct: 2,
    category: "COA"
  },
  {
    question: "What is the purpose of a DMA controller?",
    options: ["To control the CPU's access to memory", "To transfer data directly between I/O devices and memory", "To manage the cache memory", "To handle interrupts"],
    correct: 1,
    category: "COA"
  },
  {
    question: "What is the principle behind the use of virtual memory?",
    options: ["To increase the physical memory capacity.", "To increase the storage capacity.", "To decrease the operating system's memory footprint.", "To allow programs to access more memory than physically available."],
    correct: 3,
    category: "COA"
  },
  {
    question: "What does Amdahl's Law describe?",
    options: ["How memory access time affects program performance.", "How parallel processing can improve speedup.", "How instruction throughput affects processor speed.", "The performance improvement that can be achieved by parallelizing a task."],
    correct: 1,
    category: "COA"
  },
  {
    question: "Which type of memory typically has the fastest access time?",
    options: ["DRAM", "SRAM", "Flash memory", "ROM"],
    correct: 1,
    category: "COA"
  },
  {
    question: "What is the primary benefit of using a multi-core processor?",
    options: ["Reduced power consumption", "Increased clock speed", "Improved instruction-level parallelism", "Reduced manufacturing cost"],
    correct: 2,
    category: "COA"
  },
  {
    question: "A system uses a 3-level cache hierarchy.  Level 1 cache has an access time of 1 ns, Level 2 cache has an access time of 5 ns, and main memory has an access time of 100 ns.  If the hit rates for Level 1, Level 2, and main memory are 80%, 15%, and 5% respectively, what is the average memory access time?",
    options: ["10.5 ns", "14 ns", "11.75 ns", "12.75 ns"],
    correct: 3,
    category: "COA"
  },
  {
    question: "Which technique is NOT typically used to improve instruction level parallelism (ILP)?",
    options: ["Loop unrolling", "Instruction scheduling", "Branch prediction", "Vectorization"],
    correct: 3,
    category: "COA"
  },
  {
    question: "In a pipelined processor, a data dependency stalls the pipeline.  If the pipeline has 5 stages, and a data dependency occurs in the 3rd stage, what is the total number of pipeline cycles lost due to the stall, assuming no forwarding mechanisms?",
    options: ["2", "3", "5", "4"],
    correct: 0,
    category: "COA"
  },
  {
    question: "A computer system employs a write-back cache.  Which of these statements is NOT TRUE?",
    options: ["Dirty bits track modified cache blocks.", "Data in the cache must be written to main memory before replacing a block.", "Write operations always involve both cache and main memory.", "Write operations are significantly faster when using a write-back cache."],
    correct: 2,
    category: "COA"
  },
  {
    question: "Which addressing mode involves computing the effective address by adding an offset to a base register?",
    options: ["Immediate", "Register", "Base Indexed", "Direct"],
    correct: 2,
    category: "COA"
  },
  {
    question: "A system uses a 2-way set associative cache with a block size of 8 bytes.  If the main memory address is 32 bits, how many bits are used for the set index?",
    options: ["10", "8", "12", "9"],
    correct: 1,
    category: "COA"
  },
  {
    question: "Consider a RISC architecture.  What is the primary reason for using a large number of general-purpose registers?",
    options: ["Improved pipelining performance", "Enhanced instruction encoding efficiency", "Reduced memory access time", "Simplified compiler optimization"],
    correct: 0,
    category: "COA"
  },
  {
    question: "Which memory hierarchy level has the highest access speed?",
    options: ["Main Memory", "Cache", "Registers", "Hard Disk"],
    correct: 2,
    category: "COA"
  },
  {
    question: "A system with 32-bit addresses uses a cache with a 16-byte block size.  If the cache is 16-way set associative with a total capacity of 256KB, how many sets are in the cache?",
    options: ["16", "256", "128", "64"],
    correct: 3,
    category: "COA"
  },
  {
    question: "In a computer architecture with virtual memory, what is the role of the page table?",
    options: ["To translate virtual addresses to physical addresses.", "To store data segments in memory.", "To manage file access.", "To control process execution."],
    correct: 0,
    category: "COA"
  },
  {
    question: "A processor implements a branch prediction scheme with a 1-bit predictor.  What is the major limitation of this scheme?",
    options: ["Can't handle jumps", "Slow response time", "Subject to mispredictions on repeated branches", "Limited accuracy on conditional branches"],
    correct: 3,
    category: "COA"
  }
];

export default ComputerOrganizationandArchitectureCOA4;
