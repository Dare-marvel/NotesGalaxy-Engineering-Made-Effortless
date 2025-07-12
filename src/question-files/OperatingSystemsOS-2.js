const OperatingSystemsOS2 = [
  {
    question: "A process is in the blocked state.  What is the MOST probable reason for this?",
    options: ["Waiting for CPU", "Waiting for a resource", "Finished execution", "Waiting for user input"],
    correct: 1,
    category: "OS"
  },
  {
    question: "Consider a system with multiple hard drives.  Which disk scheduling algorithm is known to minimize seek time in a system with many random requests?",
    options: ["FCFS", "SSTF", "SCAN", "C-SCAN"],
    correct: 2,
    category: "OS"
  },
  {
    question: "What is the primary function of a file system's inode?",
    options: ["Store file data", "Define file permissions", "Track file attributes", "Maintain file directory structure"],
    correct: 2,
    category: "OS"
  },
  {
    question: "Which OS component handles inter-process communication (IPC)?",
    options: ["Scheduler", "File System", "Memory Manager", "Kernel"],
    correct: 3,
    category: "OS"
  },
  {
    question: "A system using a fixed-size partition scheme experiences frequent disk swapping. What is a likely culprit?",
    options: ["Poorly written file system", "Excessive number of processes", "Large process sizes", "Inadequate partition size"],
    correct: 3,
    category: "OS"
  },
  {
    question: "What does a semaphore primarily control?",
    options: ["File access", "Memory allocation", "Process synchronization", "CPU scheduling"],
    correct: 2,
    category: "OS"
  },
  {
    question: "In a Linux system, which command is used to display details about active processes?",
    options: ["ls", "ps", "top", "df"],
    correct: 1,
    category: "OS"
  },
  {
    question: "A system experiences frequent context switching. What does this MOST likely indicate?",
    options: ["High CPU utilization", "High memory usage", "Heavy process competition", "Insufficient disk space"],
    correct: 2,
    category: "OS"
  },
  {
    question: "What is the purpose of a buffer cache in an OS?",
    options: ["Manage virtual memory", "Optimize file I/O", "Control process scheduling", "Enforce security policies"],
    correct: 1,
    category: "OS"
  },
  {
    question: "Which concept is critical for preventing race conditions in concurrent programs?",
    options: ["Deadlock avoidance", "Virtual memory", "Mutual exclusion", "Disk scheduling"],
    correct: 2,
    category: "OS"
  },
  {
    question: "What is a major advantage of a layered operating system design?",
    options: ["Increased security", "Simplified debugging", "Improved performance", "Reduced memory consumption"],
    correct: 1,
    category: "OS"
  },
  {
    question: "Which OS structure allows different OS services to run as separate processes?",
    options: ["Microkernel", "Monolithic kernel", "Virtual Machine", "Layered kernel"],
    correct: 0,
    category: "OS"
  },
  {
    question: "What does the term 'process' represent in an OS context?",
    options: ["A program in execution", "A collection of files", "A set of instructions", "A single instruction"],
    correct: 0,
    category: "OS"
  },
  {
    question: "What is a key characteristic of a real-time operating system (RTOS)?",
    options: ["Emphasis on response time", "Flexibility in task scheduling", "Support for multitasking", "Extensive memory management"],
    correct: 0,
    category: "OS"
  },
  {
    question: "Which technique is used to allocate memory to processes in a segmentation system?",
    options: ["Paging", "Swapping", "Segmentation", "Virtualization"],
    correct: 2,
    category: "OS"
  },
  {
    question: "What is the role of a system call?",
    options: ["To provide an interface between a program and the OS", "To manage disk space", "To facilitate memory allocation", "To schedule processes"],
    correct: 0,
    category: "OS"
  },
  {
    question: "Which process state transitions to the ready state after an I/O operation completes?",
    options: ["Ready", "Blocked", "Running", "New"],
    correct: 1,
    category: "OS"
  },
  {
    question: "What is the primary function of a device driver?",
    options: ["Schedule processes", "Manage memory", "Handle I/O requests", "Manage file systems"],
    correct: 2,
    category: "OS"
  },
  {
    question: "What does a copy-on-write (COW) mechanism aim to optimize?",
    options: ["File I/O", "Memory allocation", "Process creation", "Context switching"],
    correct: 2,
    category: "OS"
  },
  {
    question: "Which scheduling algorithm is most likely to exhibit starvation under heavy load, especially for I/O-bound processes?",
    options: ["Shortest Job First (SJF)", "Priority Scheduling", "Round Robin", "First-Come, First-Served (FCFS)"],
    correct: 1,
    category: "OS"
  },
  {
    question: "A system using a demand paging memory management scheme experiences a high page fault rate.  Which of the following is the LEAST likely cause?",
    options: ["Excessive page size", "Small physical memory size", "Inadequate page replacement algorithm", "Very large program size"],
    correct: 0,
    category: "OS"
  },
  {
    question: "A critical section problem occurs when multiple processes try to access and modify a shared resource simultaneously. Which solution is NOT a common approach to handle such problems?",
    options: ["Peterson's Algorithm", "Test-and-Set instruction", "Semaphore Implementation", "Using a global lock outside the critical section"],
    correct: 3,
    category: "OS"
  },
  {
    question: "In a multithreaded environment, which context switch is generally FASTER?",
    options: ["Context switch between different processes", "Context switch between threads within the same process", "Context switch between threads in different processes", "Context switches are all equally fast"],
    correct: 1,
    category: "OS"
  },
  {
    question: "Which OS concept is most closely associated with the idea of virtualizing resources and isolating processes from each other?",
    options: ["Deadlock prevention", "Demand paging", "Process isolation", "Virtual memory"],
    correct: 2,
    category: "OS"
  },
  {
    question: "A system is experiencing thrashing. What immediate solution is most effective?",
    options: ["Decrease the time quantum", "Increase the number of processes", "Increase the amount of physical memory", "Increase the size of the swap space"],
    correct: 2,
    category: "OS"
  },
  {
    question: "What type of file system structure is most often used to organize data in modern operating systems?",
    options: ["Linear", "Hierarchical", "Sequential", "Networked"],
    correct: 1,
    category: "OS"
  },
  {
    question: "Which concept ensures that the OS can handle multiple users concurrently by giving each user the illusion of having exclusive access to resources?",
    options: ["Deadlock avoidance", "Multitasking", "Process synchronization", "Virtualization"],
    correct: 3,
    category: "OS"
  },
  {
    question: "Which technique allows a process to access a resource even though another process is using it, improving resource utilization?",
    options: ["Mutual exclusion", "Deadlock detection", "Spooling", "Virtual memory"],
    correct: 2,
    category: "OS"
  },
  {
    question: "Which file system characteristic ensures that data remains consistent despite hardware failures?",
    options: ["Hierarchical structure", "Journaling", "File allocation table", "Directory structure"],
    correct: 1,
    category: "OS"
  },
  {
    question: "Which component manages and tracks the allocation of secondary storage devices?",
    options: ["Memory manager", "Device driver", "File system", "Process scheduler"],
    correct: 2,
    category: "OS"
  },
  {
    question: "What is the primary function of a system call?",
    options: ["To execute a specific instruction", "To communicate between user processes", "To request services from the kernel", "To terminate a process"],
    correct: 2,
    category: "OS"
  },
  {
    question: "Which scheduling algorithm favours shorter processes over longer ones?",
    options: ["FIFO", "Round Robin", "SJF", "Priority"],
    correct: 2,
    category: "OS"
  },
  {
    question: "What is a major advantage of a microkernel architecture?",
    options: ["Improved performance", "Increased security", "Simplified debugging", "Reduced resource consumption"],
    correct: 1,
    category: "OS"
  },
  {
    question: "What is the role of a buffer in an OS?",
    options: ["To perform input/output operations", "To store data temporarily", "To prevent data loss", "To schedule processes"],
    correct: 1,
    category: "OS"
  },
  {
    question: "Which concept helps avoid situations where multiple processes are blocked, waiting for each other's resources?",
    options: ["Deadlock prevention", "Mutual exclusion", "Race condition", "Context switching"],
    correct: 0,
    category: "OS"
  },
  {
    question: "Which part of an OS is responsible for managing and allocating primary memory?",
    options: ["File system", "Memory manager", "Process scheduler", "Device driver"],
    correct: 1,
    category: "OS"
  },
  {
    question: "Which OS design principle is concerned with preventing conflicts between processes competing for shared resources?",
    options: ["Modularity", "Portability", "Concurrency control", "Reliability"],
    correct: 2,
    category: "OS"
  },
  {
    question: "Which concept is used in operating systems to ensure that multiple processes can access shared resources without causing data corruption?",
    options: ["Paging", "Segmentation", "Mutual exclusion", "Virtual memory"],
    correct: 2,
    category: "OS"
  },
  {
    question: "A key characteristic of a well-designed OS is:",
    options: ["High resource consumption", "Poor responsiveness", "High degree of complexity", "Flexibility and modularity"],
    correct: 3,
    category: "OS"
  },
  {
    question: "What is the primary function of a file allocation table (FAT)?",
    options: ["To track the location of disk clusters", "To manage file permissions", "To prevent file corruption", "To provide access to data from removable media"],
    correct: 0,
    category: "OS"
  },
  {
    question: "Which OS component manages interrupts and exceptions?",
    options: ["Process scheduler", "Memory manager", "Interrupt handler", "Device driver"],
    correct: 2,
    category: "OS"
  },
  {
    question: "What is the role of a linker in a typical operating system?",
    options: ["Loading modules into memory", "Managing file access", "Combining object files", "Handling system calls"],
    correct: 2,
    category: "OS"
  },
  {
    question: "Which scheduling algorithm, when dealing with a large number of short processes, is most likely to lead to high CPU utilization but suffer from context switching overhead?",
    options: ["Round Robin", "Shortest Job First", "Priority Scheduling", "Multi-level Feedback Queue"],
    correct: 0,
    category: "OS"
  },
  {
    question: "A system employs a demand paging scheme with a page size of 4KB. If a process references memory locations 0x1000, 0x2000, and 0x3000, assuming a fully associative TLB with a miss penalty of 100ns, what is the total time for the page faults, given a page table lookup time of 20ns per page table entry and a TLB hit rate of 0.8?",
    options: ["260ns", "140ns", "220ns", "300ns"],
    correct: 1,
    category: "OS"
  },
  {
    question: "In a file system employing inode-based structures, which of these is NOT a typical component of an inode?",
    options: ["File size", "File permissions", "File type", "File location on disk"],
    correct: 3,
    category: "OS"
  },
  {
    question: "A system employing a lock-free data structure experiences frequent false sharing. Which of these solutions would likely be most effective?",
    options: ["Using a different lock-based data structure", "Increasing cache line size", "Decreasing the granularity of locks", "Using atomic operations on smaller data items"],
    correct: 3,
    category: "OS"
  },
  {
    question: "Which OS concept enables multiple processes to run concurrently while protecting shared resources?",
    options: ["Deadlocks", "Threads", "Virtual memory", "Interrupts"],
    correct: 1,
    category: "OS"
  },
  {
    question: "A system implements a distributed file system. Which challenge is LEAST related to data consistency across nodes?",
    options: ["Network latency", "Process synchronization", "Disk I/O performance", "CPU scheduling"],
    correct: 3,
    category: "OS"
  },
  {
    question: "Which OS component manages the allocation of CPU time among multiple processes?",
    options: ["File system", "Memory manager", "Scheduler", "Device driver"],
    correct: 2,
    category: "OS"
  },
  {
    question: "What key component in modern OSes ensures memory safety when multiple processes share the same address space?",
    options: ["Virtual memory", "Paging", "Segmentation", "Shared memory"],
    correct: 0,
    category: "OS"
  }
];

export default OperatingSystemsOS2;
