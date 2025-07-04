const OperatingSystemsOS4 = [
  {
    question: "What is the key difference between a system call and a function call within a process?",
    options: ["System calls involve kernel mode, while function calls remain in user mode.", "System calls need specific permissions, while functions don't.", "System calls are usually faster than function calls.", "System calls require special libraries, while functions don't."],
    correct: 0,
    category: "OS"
  },
  {
    question: "What is the purpose of a device driver in an operating system?",
    options: ["To provide a user interface for interacting with the system.", "To manage virtual memory.", "To handle communication between the OS and hardware devices.", "To manage network connections."],
    correct: 2,
    category: "OS"
  },
  {
    question: "Which technique allows multiple processes to share the same physical memory location?",
    options: ["Demand Paging", "Segmentation", "Virtual Memory", "Shared Memory"],
    correct: 3,
    category: "OS"
  },
  {
    question: "What is the role of a swap file or space in a system using virtual memory?",
    options: ["To hold frequently accessed data.", "To temporarily store data not currently in RAM.", "To store system logs.", "To store device drivers."],
    correct: 1,
    category: "OS"
  },
  {
    question: "Which scheduling algorithm is most suitable for situations where the average response time is critical, especially for interactive applications?",
    options: ["Priority Scheduling", "Round Robin", "Shortest Job First", "Multilevel Queue Scheduling"],
    correct: 1,
    category: "OS"
  },
  {
    question: "In a multitasking environment, how does an operating system manage multiple programs sharing limited resources efficiently?",
    options: ["By using virtual memory", "By swapping processes in and out of memory", "By implementing process scheduling algorithms", "All of the above"],
    correct: 3,
    category: "OS"
  },
  {
    question: "How do operating systems manage concurrent processes accessing shared resources, without race conditions or deadlocks?",
    options: ["By using semaphores", "By using mutexes", "By using monitors", "All of the above"],
    correct: 3,
    category: "OS"
  },
  {
    question: "What is a major advantage of a microkernel architecture over a monolithic kernel?",
    options: ["Higher performance", "Reduced security vulnerabilities", "Increased modularity and maintainability", "More efficient resource management"],
    correct: 2,
    category: "OS"
  },
  {
    question: "What is the key difference between a file and a directory in a file system?",
    options: ["A file stores data, while a directory stores metadata.", "A file stores instructions, a directory stores data.", "A file contains data and can be directly accessed, whereas a directory is an organizational structure.", "A file is an executable program, while a directory is not."],
    correct: 2,
    category: "OS"
  },
  {
    question: "What is a critical section in a concurrent program?",
    options: ["A segment of code that must be executed sequentially by a single process.", "A section that can be accessed by multiple processes concurrently.", "A section that requires careful attention to prevent errors.", "A section that is protected by special hardware"],
    correct: 0,
    category: "OS"
  },
  {
    question: "Which scheduling algorithm is most likely to lead to starvation in a real-time operating system (RTOS) environment, given the presence of multiple high-priority tasks?",
    options: ["Priority-based scheduling", "Round-robin scheduling", "Shortest Job First (SJF)", "Multilevel feedback queue"],
    correct: 0,
    category: "OS"
  },
  {
    question: "A system uses a demand paging scheme with a 2-level page table. If a page fault occurs during the translation of a virtual address, what is the first step the OS will typically perform?",
    options: ["Check the swap space for the page", "Access the page table for the page frame", "Translate the virtual page number to a physical frame number", "Load the page table for the required process"],
    correct: 3,
    category: "OS"
  },
  {
    question: "In a virtual memory system, which of the following strategies is least effective in reducing page faults when handling processes with varying working sets?",
    options: ["Page replacement algorithms based on Least Recently Used (LRU)", "Page replacement algorithms based on working set size", "Larger page sizes", "Larger page tables"],
    correct: 3,
    category: "OS"
  },
  {
    question: "A critical section in a concurrent programming environment is a section of code that must be executed?",
    options: ["By a single process at a time", "By all processes simultaneously", "In a specific order", "By any process in any order"],
    correct: 0,
    category: "OS"
  },
  {
    question: "Which OS concept allows multiple processes to share resources without experiencing conflicts?",
    options: ["Semaphores", "Deadlocks", "Interrupts", "File systems"],
    correct: 0,
    category: "OS"
  },
  {
    question: "In a file system, which method is generally most efficient for retrieving a specific file block given its file location, considering random access patterns?",
    options: ["Sequential access", "Indexed allocation", "Direct allocation", "Linked allocation"],
    correct: 2,
    category: "OS"
  },
  {
    question: "What characteristic of a file system determines if a file can be accessed by multiple processes concurrently?",
    options: ["File permissions", "File type", "File size", "File locking mechanism"],
    correct: 3,
    category: "OS"
  },
  {
    question: "A key difference between a monolithic kernel and a microkernel architecture is?",
    options: ["Memory allocation strategy", "Process scheduling algorithm", "Handling of system calls", "Use of virtual memory"],
    correct: 2,
    category: "OS"
  },
  {
    question: "In a network operating system, what mechanism is crucial for maintaining the consistency of data shared across multiple computers?",
    options: ["Distributed locking", "Network protocols", "Remote procedure calls", "Message queues"],
    correct: 0,
    category: "OS"
  },
  {
    question: "Which OS component manages the allocation of main memory to different processes?",
    options: ["File system", "Memory manager", "Process scheduler", "Device driver"],
    correct: 1,
    category: "OS"
  },
  {
    question: "What is a common technique to prevent race conditions in concurrent processes accessing shared memory?",
    options: ["Deadlocks", "Semaphores", "Virtual memory", "Interrupts"],
    correct: 1,
    category: "OS"
  },
  {
    question: "Which scheduling algorithm is optimal for minimizing average wait time but is not practical for real-time systems?",
    options: ["Priority scheduling", "Round robin", "Shortest Job First", "Multilevel feedback queue"],
    correct: 2,
    category: "OS"
  },
  {
    question: "What is the primary function of a device driver in an OS?",
    options: ["Managing processes", "Handling user input", "Accessing system resources", "Managing memory allocation"],
    correct: 2,
    category: "OS"
  },
  {
    question: "Which method is used to enhance security and prevent unauthorized access to files in an OS?",
    options: ["File system journaling", "File encryption", "File access control lists", "All of the above"],
    correct: 3,
    category: "OS"
  },
  {
    question: "A system experiencing thrashing has an alarmingly high page fault rate.  Which aspect of system management would you most likely consider adjusting to address this?",
    options: ["Scheduling algorithms", "Virtual memory size", "Swap space allocation", "Page replacement algorithm"],
    correct: 2,
    category: "OS"
  },
  {
    question: "What is the crucial role of a file system in an OS?",
    options: ["Manage memory allocation", "Control access to hardware devices", "Provide a structured way to store and organize data", "Manage processes"],
    correct: 2,
    category: "OS"
  },
  {
    question: "Which process is best handled by a dedicated OS thread?",
    options: ["Calculating a large array", "Handling high-frequency events", "Displaying an image", "Complex network operations"],
    correct: 1,
    category: "OS"
  },
  {
    question: "What crucial OS service does a system call perform?",
    options: ["Process creation", "Network communications", "Device interaction", "Inter-process communication"],
    correct: 2,
    category: "OS"
  },
  {
    question: "What is a key difference between user mode and kernel mode in an OS?",
    options: ["Memory access permissions", "Process scheduling", "Interrupt handling", "File system access"],
    correct: 0,
    category: "OS"
  },
  {
    question: "What is the most significant problem with using a simple FIFO scheduling algorithm?",
    options: ["Performance degradation for short tasks", "Starvation of longer tasks", "High overhead", "Increased context switching"],
    correct: 1,
    category: "OS"
  },
  {
    question: "In what scenarios would you anticipate a significant need for background processes in an operating system?",
    options: ["Interactive user sessions", "Real-time control systems", "Multimedia applications", "System maintenance and updates"],
    correct: 3,
    category: "OS"
  },
  {
    question: "Which concept is essential for achieving secure file sharing in a distributed OS environment?",
    options: ["Atomic operations", "Transactions", "Versioning", "Locking mechanisms"],
    correct: 3,
    category: "OS"
  },
  {
    question: "What is a key performance metric to monitor when analyzing the efficiency of an OS's I/O handling?",
    options: ["Disk throughput", "CPU utilization", "Memory usage", "Network bandwidth"],
    correct: 0,
    category: "OS"
  },
  {
    question: "Which scheduling algorithm, when used in a real-time operating system (RTOS), is most likely to guarantee a hard real-time deadline for a set of periodic tasks?",
    options: ["Round Robin", "Shortest Job First", "Earliest Deadline First", "Priority Scheduling"],
    correct: 2,
    category: "OS"
  },
  {
    question: "A system uses a page replacement algorithm that tracks the frequency of page accesses.  Which algorithm is it likely to be?",
    options: ["LRU", "FIFO", "Clock", "LFU"],
    correct: 3,
    category: "OS"
  },
  {
    question: "In a multi-threaded application, a critical section is a block of code that requires which property to prevent race conditions?",
    options: ["Mutual Exclusion", "Atomic Operations", "Synchronization Primitives", "All of the above"],
    correct: 3,
    category: "OS"
  },
  {
    question: "A file system employing ext4 utilizes which key data structure(s) to manage directory entries?",
    options: ["Hash Tables", "B-trees", "Linked Lists", "Both B-trees and Hash Tables"],
    correct: 1,
    category: "OS"
  },
  {
    question: "A system uses a demand paging scheme. Which of the following best describes a page fault?",
    options: ["The page is not present in physical memory", "A page table entry is missing", "A page is requested by a process that has not allocated a page frame", "All of the above"],
    correct: 3,
    category: "OS"
  },
  {
    question: "Which OS concept allows processes to share memory, but with controlled access to protect from data corruption?",
    options: ["Virtual Memory", "Shared Memory", "Paging", "Segmentation"],
    correct: 1,
    category: "OS"
  },
  {
    question: "What is the primary function of a file allocation table (FAT)?",
    options: ["Store metadata about files", "Track the location of file data on disk", "Implement file system security", "Handle file compression"],
    correct: 1,
    category: "OS"
  },
  {
    question: "Which OS component is responsible for translating logical addresses to physical addresses?",
    options: ["Page Table", "Process Control Block", "File System", "Device Driver"],
    correct: 0,
    category: "OS"
  },
  {
    question: "What is a major drawback of the Banker's Algorithm in preventing deadlock?",
    options: ["High computational overhead", "Potential for starvation", "Requires perfect knowledge of future resource requests", "All of the above"],
    correct: 2,
    category: "OS"
  },
  {
    question: "Which OS scheduling algorithm is best suited for interactive workloads requiring short response times?",
    options: ["Shortest Job First", "First-Come, First-Served", "Round Robin", "Priority Scheduling"],
    correct: 2,
    category: "OS"
  },
  {
    question: "In a real-world OS, a process often transitions between different states.  What state is a process in when it's waiting for I/O to complete?",
    options: ["Ready", "Running", "Blocked", "New"],
    correct: 2,
    category: "OS"
  },
  {
    question: "What is a major advantage of using a memory management unit (MMU)?",
    options: ["Increased processing speed", "Improved security", "Improved memory utilization", "Abstraction from physical memory"],
    correct: 3,
    category: "OS"
  },
  {
    question: "Which OS feature helps to manage resources efficiently across multiple processes by allowing for preemption?",
    options: ["Virtual Memory", "Process Scheduling", "Demand Paging", "Interrupts"],
    correct: 1,
    category: "OS"
  },
  {
    question: "A system implements a file system using a hierarchical structure of directories. What is this file system model referred to as?",
    options: ["Linear file system", "Tree-structured file system", "Network file system", "Flat file system"],
    correct: 1,
    category: "OS"
  },
  {
    question: "In a system with virtual memory, swapping is used to move pages between which two areas?",
    options: ["Main memory and secondary storage", "Main memory and cache", "CPU registers and main memory", "CPU registers and secondary storage"],
    correct: 0,
    category: "OS"
  },
  {
    question: "Which advanced OS concept allows processes to execute parts of themselves concurrently?",
    options: ["Multithreading", "Multiprocessing", "Scheduling", "Interrupts"],
    correct: 0,
    category: "OS"
  },
  {
    question: "What is a key difference between a monolithic kernel and a microkernel?",
    options: ["Monolithic kernels have a smaller code base.", "Microkernels separate kernel functionalities.", "Monolithic kernels handle more functions in the kernel.", "Microkernels have a more complex system call structure."],
    correct: 1,
    category: "OS"
  }
];

export default OperatingSystemsOS4;
