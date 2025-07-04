const ComputerOrganizationandArchitectureCOA1 = [
  {
    question: "Which addressing mode allows for dynamic memory access based on the contents of a register?",
    options: ["Direct Addressing", "Immediate Addressing", "Register Indirect Addressing", "Relative Addressing"],
    correct: 2,
    category: "COA"
  },
  {
    question: "A system with a 32-bit address bus can directly address how many bytes of memory?",
    options: ["2^32", "2^31", "2^30", "2^16"],
    correct: 0,
    category: "COA"
  },
  {
    question: "What is the primary function of a cache memory?",
    options: ["To store frequently accessed data", "To increase the clock speed of the processor", "To slow down memory access", "To store all data in RAM"],
    correct: 0,
    category: "COA"
  },
  {
    question: "Which instruction set architecture (ISA) typically uses a stack-based approach for calculations?",
    options: ["Complex Instruction Set Computer (CISC)", "Reduced Instruction Set Computer (RISC)", "VLIW", "Stack-oriented"],
    correct: 3,
    category: "COA"
  },
  {
    question: "What is the purpose of a control unit in a CPU?",
    options: ["To execute instructions", "To fetch instructions", "To decode instructions", "To coordinate and manage all other units"],
    correct: 3,
    category: "COA"
  },
  {
    question: "Which type of memory is non-volatile and retains data even when power is off?",
    options: ["RAM", "ROM", "Cache", "Registers"],
    correct: 1,
    category: "COA"
  },
  {
    question: "What is a common example of a parallel processing technique?",
    options: ["Pipelining", "Branch prediction", "Cache coherence", "Prefetching"],
    correct: 0,
    category: "COA"
  },
  {
    question: "What is the function of a DMA controller?",
    options: ["To control the flow of data between CPU and I/O devices", "To execute programs", "To store frequently used instructions", "To manage the cache memory"],
    correct: 0,
    category: "COA"
  },
  {
    question: "In a 2-way set associative cache, how many sets are there for 128 bytes of data, block size of 16 bytes, and total capacity of 256 bytes?",
    options: ["2", "4", "8", "16"],
    correct: 1,
    category: "COA"
  },
  {
    question: "What is the impact of a larger cache memory on performance?",
    options: ["Slower performance", "No significant impact", "Improved performance", "Decreased memory usage"],
    correct: 2,
    category: "COA"
  },
  {
    question: "Which technique is used to predict the next instruction in a program to improve performance?",
    options: ["Cache replacement", "Branch prediction", "Prefetching", "Scheduling"],
    correct: 1,
    category: "COA"
  },
  {
    question: "What is the difference between RISC and CISC architectures?",
    options: ["RISC has fewer complex instructions; CISC has more complex instructions", "RISC and CISC architectures are the same", "RISC is based on microcode; CISC is based on hardware", "RISC has more complex instructions; CISC has fewer complex instructions"],
    correct: 0,
    category: "COA"
  },
  {
    question: "What is an interrupt?",
    options: ["A signal to the CPU to stop executing current instruction", "A signal to execute next instruction in sequence", "A signal to temporarily suspend current process", "An error signal"],
    correct: 0,
    category: "COA"
  },
  {
    question: "In a CPU, what is the role of the ALU?",
    options: ["Fetch instructions", "Decode instructions", "Perform arithmetic and logical operations", "Control data flow"],
    correct: 2,
    category: "COA"
  },
  {
    question: "Which unit of the CPU manages the flow of instructions and data?",
    options: ["Arithmetic Logic Unit (ALU)", "Control Unit", "Registers", "Memory Unit"],
    correct: 1,
    category: "COA"
  },
  {
    question: "What does MIPS stand for in computer architecture?",
    options: ["Millions of Instructions Per Second", "Multiple Instruction Processing System", "Microprocessor Integrated Processing System", "Memory Interfacing Processing System"],
    correct: 0,
    category: "COA"
  },
  {
    question: "What is the key advantage of using virtual memory?",
    options: ["Reduced hardware cost", "Improved CPU speed", "Increased system memory", "Improved memory management"],
    correct: 3,
    category: "COA"
  },
  {
    question: "What does pipelining in a CPU achieve?",
    options: ["Improved clock speed", "Reduced number of clock cycles to execute a program", "Increased memory capacity", "Faster interrupt handling"],
    correct: 1,
    category: "COA"
  },
  {
    question: "What is the importance of a Memory Management Unit (MMU)?",
    options: ["To manage the cache memory", "To control the input/output devices", "To convert virtual addresses to physical addresses", "To handle interrupt signals"],
    correct: 2,
    category: "COA"
  },
  {
    question: "Which type of memory has the fastest access time?",
    options: ["RAM", "ROM", "Registers", "Cache"],
    correct: 2,
    category: "COA"
  },
  {
    question: "What is the function of an instruction register?",
    options: ["To hold the address of the next instruction", "To hold the data being processed", "To hold the current instruction being executed", "To hold the result of an operation"],
    correct: 2,
    category: "COA"
  },
  {
    question: "What is the purpose of a bus in a computer system?",
    options: ["To store data", "To execute instructions", "To transfer data between components", "To control the CPU"],
    correct: 2,
    category: "COA"
  },
  {
    question: "What is a major advantage of a microprogrammed control unit?",
    options: ["Increased hardware complexity", "Reduced instruction set size", "Flexibility in instruction set design", "Improved clock speed"],
    correct: 2,
    category: "COA"
  },
  {
    question: "Which concept is employed to improve performance by overlapping the execution of multiple instructions?",
    options: ["Parallel processing", "Branch prediction", "Prefetching", "Pipelining"],
    correct: 3,
    category: "COA"
  },
  {
    question: "Which type of error is typically detected using parity bits?",
    options: ["Logic errors", "Arithmetic errors", "Bit errors", "Syntax errors"],
    correct: 2,
    category: "COA"
  },
  {
    question: "Which addressing mode allows the operand's address to be calculated using a base register, an index register, and an offset?",
    options: ["Immediate addressing", "Direct addressing", "Indexed addressing", "Base addressing"],
    correct: 3,
    category: "COA"
  },
  {
    question: "In a pipelined processor, which stage is responsible for fetching the instruction from memory?",
    options: ["Execute", "Memory access", "Instruction fetch", "Decode"],
    correct: 2,
    category: "COA"
  },
  {
    question: "What is the primary function of a cache memory in a computer system?",
    options: ["Storing frequently accessed data", "Increasing processing speed", "Reducing access time to data", "All of the above"],
    correct: 3,
    category: "COA"
  },
  {
    question: "A system using a 32-bit address bus can directly access how many memory locations?",
    options: ["2^32", "2^16", "2^64", "2^20"],
    correct: 0,
    category: "COA"
  },
  {
    question: "Which type of memory is typically used for storing the operating system?",
    options: ["Cache memory", "RAM", "ROM", "Registers"],
    correct: 1,
    category: "COA"
  },
  {
    question: "What does a DMA controller do in a computer system?",
    options: ["Transfers data directly between peripherals and memory", "Controls the flow of data between processes", "Handles interrupts", "Manages the cache"],
    correct: 0,
    category: "COA"
  },
  {
    question: "What is a major characteristic of a RISC architecture?",
    options: ["Complex instruction set", "Large number of addressing modes", "Reduced instruction set", "CISC instructions"],
    correct: 2,
    category: "COA"
  },
  {
    question: "Which floating-point standard is widely used in computers?",
    options: ["IEEE 754", "ANSI/IEEE Std 854-1987", "MIPS 32", "ARMv8"],
    correct: 0,
    category: "COA"
  },
  {
    question: "What is the role of a Control Unit in a CPU?",
    options: ["Executing instructions", "Storing data", "Fetching instructions", "Decodes and controls the execution of instructions"],
    correct: 3,
    category: "COA"
  },
  {
    question: "What is the difference between a stack pointer and a program counter?",
    options: ["Stack pointer points to the top of the stack, while program counter points to the next instruction", "Stack pointer points to the bottom of the stack, program counter points to the previous instruction", "They both point to the top of the stack", "They both point to the next instruction"],
    correct: 0,
    category: "COA"
  },
  {
    question: "In a von Neumann architecture, instructions and data are stored in:",
    options: ["Separate memories", "A single memory", "Registers", "Cache memory"],
    correct: 1,
    category: "COA"
  },
  {
    question: "What does a memory hierarchy consist of?",
    options: ["Registers, Cache, Main Memory, Secondary Storage", "Registers, Main memory", "Registers, Cache memory", "Main memory, Secondary Storage"],
    correct: 0,
    category: "COA"
  },
  {
    question: "What is the function of an Arithmetic Logic Unit (ALU)?",
    options: ["Fetch instructions", "Decode instructions", "Perform arithmetic and logic operations", "Control data flow"],
    correct: 2,
    category: "COA"
  },
  {
    question: "Which bus component manages communication between the CPU and memory?",
    options: ["Data bus", "Address bus", "Control bus", "All of the above"],
    correct: 0,
    category: "COA"
  },
  {
    question: "What is a branch prediction algorithm used for?",
    options: ["Determining the next instruction to execute", "Predicting whether a branch will be taken or not", "Managing cache misses", "Predicting instruction execution time"],
    correct: 1,
    category: "COA"
  },
  {
    question: "What is the impact of increasing the number of cache levels?",
    options: ["Increased access time", "Decreased cost", "Improved memory performance", "No impact on performance"],
    correct: 2,
    category: "COA"
  },
  {
    question: "Which type of parallelism can be exploited in a single instruction stream, multiple data stream (SIMD) architecture?",
    options: ["Data parallelism", "Task parallelism", "Instruction level parallelism", "Thread parallelism"],
    correct: 0,
    category: "COA"
  },
  {
    question: "What is the function of an interrupt controller?",
    options: ["To manage and prioritize interrupts", "To handle DMA requests", "To store frequently accessed data", "To control the cache"],
    correct: 0,
    category: "COA"
  },
  {
    question: "What is the key difference between a Harvard architecture and a von Neumann architecture?",
    options: ["Harvard uses separate memories for instructions and data; von Neumann uses a single memory", "Harvard uses a single memory; von Neumann uses separate memories", "Harvard has more registers than von Neumann", "Harvard is more complex than von Neumann"],
    correct: 0,
    category: "COA"
  },
  {
    question: "What is a major advantage of a virtual memory system?",
    options: ["Increased memory capacity", "Improved CPU performance", "Improved response time", "All of the above"],
    correct: 0,
    category: "COA"
  },
  {
    question: "What is a common technique used for reducing memory access time in a computer system?",
    options: ["Using a large cache", "Employing a fast memory bus", "Improving CPU speed", "All of the above"],
    correct: 0,
    category: "COA"
  },
  {
    question: "What is an instruction pipeline?",
    options: ["A sequence of stages for executing instructions", "A type of memory chip", "A type of hard drive", "A program to optimize code"],
    correct: 0,
    category: "COA"
  },
  {
    question: "What is the function of a memory management unit (MMU)?",
    options: ["Translate virtual addresses to physical addresses", "Manage the cache", "Control the execution of instructions", "Manage peripheral devices"],
    correct: 0,
    category: "COA"
  },
  {
    question: "Which addressing mode allows for indirect access to data through a memory location containing the address of the operand?",
    options: ["Direct Addressing", "Immediate Addressing", "Register Addressing", "Indirect Addressing"],
    correct: 3,
    category: "COA"
  },
  {
    question: "In a pipelined processor, what situation arises when an instruction depends on the result of a previous instruction still in the pipeline?",
    options: ["Hazard", "Stalled Pipeline", "Branch Misprediction", "Data Dependency"],
    correct: 0,
    category: "COA"
  }
];

export default ComputerOrganizationandArchitectureCOA1;
