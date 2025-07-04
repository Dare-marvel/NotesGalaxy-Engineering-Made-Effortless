const DigitalSystemsandMicroprocessorsDSM3 = [
  {
    question: "What is the maximum number of memory locations that can be directly addressed by a 12-bit address bus?",
    options: ["4096", "8192", "16384", "32768"],
    correct: 1,
    category: "DSM"
  },
  {
    question: "What does a DMA controller do?",
    options: ["Directly manipulates the CPU's registers", "Facilitates direct data transfer between memory and devices", "Handles interrupt requests", "Performs arithmetic operations on data"],
    correct: 1,
    category: "DSM"
  },
  {
    question: "Which register in a microprocessor stores the memory address of the next instruction to be fetched?",
    options: ["Accumulator", "Program Counter", "Stack Pointer", "Instruction Register"],
    correct: 1,
    category: "DSM"
  },
  {
    question: "A system uses a microcontroller with an SPI interface to communicate with a sensor. What characteristic is likely to be a limitation?",
    options: ["Low power consumption", "High speed", "Low bandwidth", "Simple implementation"],
    correct: 2,
    category: "DSM"
  },
  {
    question: "What is the base-2 representation of the decimal number 25?",
    options: ["11001", "110011", "11010", "110010"],
    correct: 0,
    category: "DSM"
  },
  {
    question: "What is the difference between RISC and CISC architectures?",
    options: ["CISC uses fewer instructions, but more complex, while RISC uses more simple instructions.", "RISC uses fewer instructions and complex hardware, CISC more instructions but simpler hardware.", "RISC and CISC have the same core instruction set, but different implementations.", "There is no difference between RISC and CISC architectures."],
    correct: 0,
    category: "DSM"
  },
  {
    question: "Which type of memory is typically volatile and fast?",
    options: ["ROM", "PROM", "RAM", "EPROM"],
    correct: 2,
    category: "DSM"
  },
  {
    question: "What does a microcontroller typically include in addition to a CPU?",
    options: ["Separate memory chips", "Independent I/O ports", "Dedicated peripherals", "A bus extender for external communication"],
    correct: 2,
    category: "DSM"
  },
  {
    question: "Which technique is crucial in achieving high clock speeds in modern microprocessors?",
    options: ["Stack organization", "Pipelining", "Virtual memory", "Memory mapping"],
    correct: 1,
    category: "DSM"
  },
  {
    question: "How does a DMA controller improve system performance?",
    options: ["By reducing CPU usage", "By improving interrupt response time", "By increasing memory bandwidth", "By enhancing cache performance"],
    correct: 0,
    category: "DSM"
  },
  {
    question: "A common issue in digital system design arises when signals change states rapidly. What is this issue?",
    options: ["Clock skew", "Noise", "Fanout", "Glitch"],
    correct: 3,
    category: "DSM"
  },
  {
    question: "A microprocessor uses a memory-mapped I/O. What does this mean?",
    options: ["Memory locations are used to access devices", "I/O devices have unique addresses", "Memory and I/O are treated differently", "I/O is not involved in data transfer"],
    correct: 0,
    category: "DSM"
  },
  {
    question: "Which standard is widely used for high-speed serial communication in embedded systems?",
    options: ["I2C", "SPI", "USB", "RS-232"],
    correct: 1,
    category: "DSM"
  },
  {
    question: "What does the term 'Endianness' refer to in computer architecture?",
    options: ["The alignment of instructions in memory", "The order in which bytes of a multi-byte data type are stored in memory", "The method for handling interrupt requests", "The way data is encoded in registers"],
    correct: 1,
    category: "DSM"
  },
  {
    question: "Which logic family is known for high speed and low power consumption?",
    options: ["CMOS", "TTL", "ECL", "NMOS"],
    correct: 0,
    category: "DSM"
  },
  {
    question: "What is a common use-case for a microcontroller with an ADC?",
    options: ["Displaying text on a LCD", "Processing images", "Measuring sensor readings", "Controlling a stepper motor"],
    correct: 2,
    category: "DSM"
  },
  {
    question: "In a pipelined microprocessor, what is the primary reason for introducing pipeline stages?",
    options: ["To increase clock cycle time", "To decrease the number of clock cycles per instruction", "To reduce the complexity of the control unit", "To improve instruction fetch rate"],
    correct: 1,
    category: "DSM"
  },
  {
    question: "Which addressing mode allows a microprocessor to access memory locations relative to a register that holds a base address?",
    options: ["Direct Addressing", "Indirect Addressing", "Register Indirect Addressing", "Base Addressing"],
    correct: 3,
    category: "DSM"
  },
  {
    question: "A 16-bit microprocessor with a 16-bit data bus can transfer how many bits of data per memory access?",
    options: ["8", "16", "32", "64"],
    correct: 1,
    category: "DSM"
  },
  {
    question: "Which logic gate is used to implement a half adder?",
    options: ["AND, OR, XOR", "AND, OR, NOT", "XOR, AND", "NAND, NOR"],
    correct: 0,
    category: "DSM"
  },
  {
    question: "What is the maximum number of memory locations that can be accessed by a microprocessor with a 20-bit address bus?",
    options: ["1024", "2048", "1MB", "1MB"],
    correct: 2,
    category: "DSM"
  },
  {
    question: "A system uses a DMA controller.  How does it improve performance over programmed I/O?",
    options: ["By reducing the CPU's workload", "By increasing the memory bandwidth", "By decreasing the number of interrupts", "All of the above"],
    correct: 3,
    category: "DSM"
  },
  {
    question: "What does a finite state machine (FSM) typically represent?",
    options: ["A register", "A logic gate", "A sequence of actions", "A memory chip"],
    correct: 2,
    category: "DSM"
  },
  {
    question: "Which technique is used to reduce the power consumption of a microprocessor by dynamically changing its clock frequency?",
    options: ["Clock gating", "Dynamic voltage scaling", "Cache optimization", "Instruction pipelining"],
    correct: 1,
    category: "DSM"
  },
  {
    question: "What is the purpose of a memory management unit (MMU)?",
    options: ["To translate virtual addresses to physical addresses", "To manage interrupts", "To control DMA operations", "To fetch instructions from memory"],
    correct: 0,
    category: "DSM"
  },
  {
    question: "Which type of memory is volatile and can be accessed directly by the processor?",
    options: ["ROM", "RAM", "PROM", "EPROM"],
    correct: 1,
    category: "DSM"
  },
  {
    question: "Which instruction set architecture is typically used in embedded systems?",
    options: ["x86", "ARM", "MIPS", "All of the above"],
    correct: 1,
    category: "DSM"
  },
  {
    question: "In a microcontroller, what does the program counter (PC) contain?",
    options: ["Current instruction", "Next instruction's address", "Current data", "Previous instruction's address"],
    correct: 1,
    category: "DSM"
  },
  {
    question: "A system uses a microcontroller with an ADC. What is the ADC's primary function?",
    options: ["Convert analog signals to digital", "Convert digital signals to analog", "Fetch instructions", "Compare two values"],
    correct: 0,
    category: "DSM"
  },
  {
    question: "What is the key difference between RISC and CISC architectures?",
    options: ["RISC uses fewer instructions, CISC uses more complex instructions.", "RISC emphasizes complex instructions, CISC emphasizes simple instructions.", "RISC is faster, CISC is slower", "RISC requires less memory, CISC requires more"],
    correct: 0,
    category: "DSM"
  },
  {
    question: "In a parallel processing system, what is the primary advantage?",
    options: ["Increased response time", "Reduced clock speed", "Improved throughput", "Increased power consumption"],
    correct: 2,
    category: "DSM"
  },
  {
    question: "What is the function of a UART in a microcontroller?",
    options: ["Serial communication interface", "Parallel communication interface", "Analog-to-digital converter", "Memory management unit"],
    correct: 0,
    category: "DSM"
  },
  {
    question: "What does a DMA controller do?",
    options: ["Direct memory access", "Direct memory copy", "Direct memory write", "Direct memory read"],
    correct: 0,
    category: "DSM"
  },
  {
    question: "What is the role of an interrupt in a microprocessor?",
    options: ["To stop the CPU's operation", "To provide external input/output capability", "To perform calculations", "To perform complex operations"],
    correct: 1,
    category: "DSM"
  },
  {
    question: "Which of these is a key performance metric for memory?",
    options: ["Cycle time", "Access time", "Latency", "All of the above"],
    correct: 3,
    category: "DSM"
  },
  {
    question: "What does a decoder do in a digital system?",
    options: ["Encode binary data", "Decode binary data into multiple outputs", "Generate clock signals", "Perform arithmetic operations"],
    correct: 1,
    category: "DSM"
  },
  {
    question: "What is the function of a multiplexer?",
    options: ["Combine multiple input signals to one output", "Split a single input to multiple outputs", "Compare two values", "Encode binary data"],
    correct: 0,
    category: "DSM"
  },
  {
    question: "Which type of memory typically uses non-volatile storage?",
    options: ["SRAM", "DRAM", "ROM", "RAM"],
    correct: 2,
    category: "DSM"
  },
  {
    question: "What is a common use for a microcontroller?",
    options: ["General purpose computer", "Embedded systems", "Networking device", "All of the above"],
    correct: 1,
    category: "DSM"
  },
  {
    question: "In a microprocessor, what does the arithmetic logic unit (ALU) do?",
    options: ["Manages memory", "Performs arithmetic and logical operations", "Controls data flow", "Fetches instructions"],
    correct: 1,
    category: "DSM"
  },
  {
    question: "A microcontroller with a Harvard architecture differs from one with a Von Neumann architecture primarily in how it handles:",
    options: ["Data and instructions in separate memory spaces", "Input/output operations", "Interrupt handling", "Clock speed"],
    correct: 0,
    category: "DSM"
  },
  {
    question: "Which technique is most commonly used for minimizing the propagation delay in a combinational circuit?",
    options: ["Using a multiplexer", "Using a decoder", "Employing asynchronous logic", "Using gate-level optimization"],
    correct: 3,
    category: "DSM"
  },
  {
    question: "In a digital system employing pipelining, what is the primary benefit?",
    options: ["Increased clock speed", "Reduced instruction latency", "Enhanced memory access time", "Improved power consumption"],
    correct: 1,
    category: "DSM"
  },
  {
    question: "A system employing a DMA controller is designed to:",
    options: ["Improve interrupt response times", "Directly transfer data between memory and peripherals", "Manage task priorities", "Control the CPU's clock speed"],
    correct: 1,
    category: "DSM"
  },
  {
    question: "Which standard is commonly used for serial communication between microcontrollers and peripherals?",
    options: ["SPI", "I2C", "UART", "All of the above"],
    correct: 3,
    category: "DSM"
  },
  {
    question: "What does a Finite State Machine (FSM) primarily represent?",
    options: ["A sequential circuit's behavior", "A combinational logic function", "A data structure", "An algorithm"],
    correct: 0,
    category: "DSM"
  },
  {
    question: "Gray code is often preferred in digital systems because it:",
    options: ["Reduces power consumption", "Improves accuracy", "Minimizes errors during transitions", "Facilitates parallel processing"],
    correct: 2,
    category: "DSM"
  },
  {
    question: "What is the primary purpose of a parity bit in data transmission?",
    options: ["To increase the data rate", "To ensure data integrity", "To reduce the size of data packets", "To allow for faster encoding"],
    correct: 1,
    category: "DSM"
  },
  {
    question: "Which logic gate is fundamentally required for constructing any logic function?",
    options: ["AND", "OR", "NOT", "All of the above"],
    correct: 3,
    category: "DSM"
  },
  {
    question: "In a microprocessor, what does the Arithmetic Logic Unit (ALU) do?",
    options: ["Stores program instructions", "Manages memory addresses", "Performs arithmetic and logical operations", "Controls input/output devices"],
    correct: 2,
    category: "DSM"
  }
];

export default DigitalSystemsandMicroprocessorsDSM3;
