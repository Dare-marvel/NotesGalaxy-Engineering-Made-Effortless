const DigitalSystemsandMicroprocessorsDSM4 = [
  {
    question: "What type of memory is typically used for storing program instructions in a microcontroller?",
    options: ["RAM", "ROM", "Register", "Cache"],
    correct: 1,
    category: "DSM"
  },
  {
    question: "What is the primary drawback of using a fully combinational circuit design instead of a sequential one?",
    options: ["Higher complexity", "Higher cost", "Potential for race conditions and hazards", "Reduced performance"],
    correct: 2,
    category: "DSM"
  },
  {
    question: "What is the maximum number of unique states possible in a 3-bit counter?",
    options: ["3", "6", "8", "16"],
    correct: 2,
    category: "DSM"
  },
  {
    question: "In digital signal processing, which technique can be used to filter out high-frequency noise?",
    options: ["Low-pass filtering", "High-pass filtering", "Band-pass filtering", "Band-stop filtering"],
    correct: 0,
    category: "DSM"
  },
  {
    question: "What does pipelining aim to achieve in a microprocessor?",
    options: ["Reduce instruction latency", "Increase clock cycles per instruction", "Boost power consumption", "Simplify instruction decoding"],
    correct: 0,
    category: "DSM"
  },
  {
    question: "Which memory hierarchy component has the highest access speed?",
    options: ["Cache", "RAM", "Secondary storage", "Registers"],
    correct: 3,
    category: "DSM"
  },
  {
    question: "A system using a microcontroller needs to interface with a sensor that outputs a 10-bit ADC value. How is this data transferred?",
    options: ["Through an interrupt service routine", "Through a dedicated GPIO pin", "Through a DMA transfer", "Through a serial communication protocol"],
    correct: 3,
    category: "DSM"
  },
  {
    question: "What is the role of an opcode in a microprocessor instruction?",
    options: ["Specifies the data size", "Indicates the address of the operand", "Specifies the operation to be performed", "Defines the registers to be used"],
    correct: 2,
    category: "DSM"
  },
  {
    question: "Which is a key consideration in the design of a parallel processing system?",
    options: ["Minimizing the communication overhead", "Maximizing the number of processors", "Balancing the workload among processors", "All of the above"],
    correct: 3,
    category: "DSM"
  },
  {
    question: "Which bus structure is characterized by one bus connecting all devices?",
    options: ["Multi-bus structure", "Shared bus structure", "Dedicated bus structure", "Multiplexed bus structure"],
    correct: 1,
    category: "DSM"
  },
  {
    question: "What is the primary function of a microcontroller's program counter (PC)?",
    options: ["Stores the currently executing instruction", "Keeps track of the next instruction's address", "Performs arithmetic operations", "Manages memory allocation"],
    correct: 1,
    category: "DSM"
  },
  {
    question: "What does VHDL stand for in the context of hardware description languages?",
    options: ["Very High-speed Integrated Circuit Hardware Description Language", "Visual Hardware Design Language", "Virtual Hardware Design Language", "Very High-level Integrated Circuit Hardware Language"],
    correct: 0,
    category: "DSM"
  },
  {
    question: "What does the acronym ALU stand for in a microprocessor?",
    options: ["Arithmetic Logic Unit", "Address Logic Unit", "Array Logic Unit", "Application Logic Unit"],
    correct: 0,
    category: "DSM"
  },
  {
    question: "Which addressing mode allows the operand to be accessed directly using the effective address calculated from the instruction itself?",
    options: ["Immediate Addressing", "Direct Addressing", "Register Indirect Addressing", "Indexed Addressing"],
    correct: 1,
    category: "DSM"
  },
  {
    question: "A system utilizes a 16-bit address bus and a 8-bit data bus. What is the maximum memory capacity this system can address?",
    options: ["64KB", "128KB", "256KB", "512KB"],
    correct: 1,
    category: "DSM"
  },
  {
    question: "In a pipelined microprocessor, which stage is responsible for fetching the next instruction from memory after an instruction has completed execution?",
    options: ["Instruction Decode", "Execute", "Memory Access", "Instruction Fetch"],
    correct: 3,
    category: "DSM"
  },
  {
    question: "Which technique is commonly used to improve the performance of a microprocessor by overlapping the execution of multiple instructions?",
    options: ["Caching", "Pipelining", "DMA", "Interrupts"],
    correct: 1,
    category: "DSM"
  },
  {
    question: "What is the primary role of a microcontroller's interrupt controller?",
    options: ["Manage DMA transfers", "Control the instruction pipeline", "Prioritize and handle external requests", "Execute instructions sequentially"],
    correct: 2,
    category: "DSM"
  },
  {
    question: "A digital system is designed to detect a specific sequence of bits. What type of circuit would be most suitable?",
    options: ["Adder", "Comparator", "Sequence Detector", "Counter"],
    correct: 2,
    category: "DSM"
  },
  {
    question: "In a microprocessor with a Von Neumann architecture, where are both instructions and data stored?",
    options: ["Separate memory locations", "Same memory location", "Dedicated registers", "Cache memory"],
    correct: 1,
    category: "DSM"
  },
  {
    question: "Which type of memory is known for its high speed but limited capacity?",
    options: ["RAM", "ROM", "Cache", "Flash"],
    correct: 2,
    category: "DSM"
  },
  {
    question: "What is the function of the ALU in a microprocessor?",
    options: ["Stores data", "Fetches instructions", "Performs arithmetic and logical operations", "Manages memory access"],
    correct: 2,
    category: "DSM"
  },
  {
    question: "What is the purpose of a parity bit in data transmission?",
    options: ["Increase data rate", "Detect errors", "Reduce latency", "Improve security"],
    correct: 1,
    category: "DSM"
  },
  {
    question: "Which logic gate is the basis for all other logic gates?",
    options: ["NAND", "NOR", "AND", "OR"],
    correct: 0,
    category: "DSM"
  },
  {
    question: "How many flip-flops are needed to design a 4-bit Johnson counter?",
    options: ["4", "8", "12", "16"],
    correct: 0,
    category: "DSM"
  },
  {
    question: "What does the term 'bus' signify in a computer architecture?",
    options: ["A parallel set of wires for data transmission", "A specific type of memory", "A processing unit", "An input/output device"],
    correct: 0,
    category: "DSM"
  },
  {
    question: "Which memory is volatile?",
    options: ["ROM", "EEPROM", "RAM", "PROM"],
    correct: 2,
    category: "DSM"
  },
  {
    question: "What is the difference between a microcontroller and a microprocessor?",
    options: ["Microcontrollers are more powerful", "Microcontrollers contain peripherals", "Microcontrollers are used for larger systems", "Microprocessors have more memory"],
    correct: 1,
    category: "DSM"
  },
  {
    question: "What is the significance of the clock signal in a digital system?",
    options: ["Provides power to the circuits", "Controls the timing of operations", "Determines the data size", "Reduces signal noise"],
    correct: 1,
    category: "DSM"
  },
  {
    question: "Which type of memory is typically used to store the boot instructions in a computer system?",
    options: ["RAM", "ROM", "Cache", "Flash"],
    correct: 1,
    category: "DSM"
  },
  {
    question: "What is the purpose of a decoder in a digital system?",
    options: ["Compresses data", "Expands data", "Generates specific control signals", "Processes arithmetic operations"],
    correct: 2,
    category: "DSM"
  },
  {
    question: "What does DMA stand for in computer architecture?",
    options: ["Direct Memory Access", "Digital Memory Allocation", "Dynamic Memory Arrangement", "Data Movement Assistant"],
    correct: 0,
    category: "DSM"
  },
  {
    question: "In a microprocessor, what does a stack pointer typically point to?",
    options: ["The top of the stack", "The bottom of the stack", "A memory address of the program", "The instruction register"],
    correct: 0,
    category: "DSM"
  },
  {
    question: "Which method is crucial for minimizing the propagation delay in a digital circuit?",
    options: ["Using bigger transistors", "Utilizing smaller transistors", "Decreasing the clock frequency", "Minimizing fan-out"],
    correct: 3,
    category: "DSM"
  },
  {
    question: "Which principle ensures that only one task accesses a shared resource at a time?",
    options: ["Pipelining", "Interrupt handling", "Mutual exclusion", "DMA"],
    correct: 2,
    category: "DSM"
  },
  {
    question: "What is the essential role of a state machine in a digital system?",
    options: ["Arithmetic computations", "Timing sequences", "Data transmission", "Register management"],
    correct: 1,
    category: "DSM"
  },
  {
    question: "A microcontroller with a 16-bit address bus can directly access how many bytes of memory?",
    options: ["64KB", "128KB", "256KB", "64MB"],
    correct: 0,
    category: "DSM"
  },
  {
    question: "In a synchronous sequential circuit with a master-slave flip-flop configuration, the master stage samples the input at the ___________ of the clock pulse and the output of the master stage is transferred to the slave stage on the ___________ of the clock pulse.",
    options: ["rising edge, falling edge", "falling edge, rising edge", "both rising edge, both falling edge", "both edges, both edges"],
    correct: 0,
    category: "DSM"
  },
  {
    question: "Which addressing mode allows for the calculation of an effective address using an index register and an offset?",
    options: ["Direct addressing", "Register indirect addressing", "Indexed addressing", "Immediate addressing"],
    correct: 2,
    category: "DSM"
  },
  {
    question: "Which logic gate is fundamental to implementing a full adder?",
    options: ["AND gate", "XOR gate", "NAND gate", "NOR gate"],
    correct: 1,
    category: "DSM"
  },
  {
    question: "What is the output sequence of a 3-bit Johnson counter starting from 000?",
    options: ["000, 001, 011, 010, 110, 111, 101, 100", "000, 001, 011, 111, 110, 100, 000, 101", "000, 100, 110, 111, 011, 010, 000", "000, 001, 010, 011, 111, 110, 100, 101"],
    correct: 2,
    category: "DSM"
  },
  {
    question: "In a microprocessor system, what does the program counter (PC) hold?",
    options: ["The next instruction to be executed", "The address of the currently executing instruction", "The address of the last instruction executed", "The data being processed by the ALU"],
    correct: 1,
    category: "DSM"
  },
  {
    question: "A 74194 4-bit shift register is configured for right shift. What is the final state if the input sequence is 0101?",
    options: ["0001", "1000", "1010", "0100"],
    correct: 0,
    category: "DSM"
  },
  {
    question: "What is the primary function of a DMA controller?",
    options: ["Manage interrupts", "Move data between memory and I/O devices directly", "Control the flow of instructions in a pipeline", "Perform arithmetic operations"],
    correct: 1,
    category: "DSM"
  },
  {
    question: "Which type of memory is volatile and used for temporary storage in a microprocessor system?",
    options: ["ROM", "RAM", "PROM", "EEPROM"],
    correct: 1,
    category: "DSM"
  },
  {
    question: "What does pipelining in a microprocessor achieve?",
    options: ["Faster execution of instructions", "Lower power consumption", "More complex instruction sets", "Reduced memory access time"],
    correct: 0,
    category: "DSM"
  },
  {
    question: "A system uses a 10-bit ADC. What is the resolution?",
    options: ["1024 levels", "10 bits", "10mV", "1000 levels"],
    correct: 0,
    category: "DSM"
  },
  {
    question: "Which component is responsible for converting an analog signal to a digital signal?",
    options: ["DAC", "CPU", "ALU", "ADC"],
    correct: 3,
    category: "DSM"
  },
  {
    question: "Which method is used to handle multiple interrupts in a microcontroller?",
    options: ["Polling", "Interrupt priority", "DMA", "Direct memory access"],
    correct: 1,
    category: "DSM"
  },
  {
    question: "What is the purpose of a UART in a microprocessor system?",
    options: ["Perform floating-point calculations", "Manage memory access", "Transfer serial data", "Control external devices"],
    correct: 2,
    category: "DSM"
  }
];

export default DigitalSystemsandMicroprocessorsDSM4;
