const OperatingSystemsOS1 = [
  {
    question: "Which scheduling algorithm is most likely to lead to the shortest average waiting time for a batch processing system, given a set of independent jobs with varying execution times?",
    options: ["First-Come, First-Served", "Shortest Job First", "Round Robin", "Priority Scheduling"],
    correct: 1,
    category: "OS"
  },
  {
    question: "A process is in the blocked state. What is the most likely reason?",
    options: ["It is currently running.", "It is waiting for input/output (I/O) completion.", "It has been preempted.", "Its CPU quantum has expired."],
    correct: 1,
    category: "OS"
  },
  {
    question: "Which memory management technique allows for more efficient use of memory compared to fixed partitioning?",
    options: ["Swapping", "Paging", "Segmentation", "Virtual Memory"],
    correct: 2,
    category: "OS"
  },
  {
    question: "What is a major advantage of a multithreaded program over a single-threaded program?",
    options: ["Improved memory utilization", "Faster execution of single tasks", "Better responsiveness to user interaction", "Reduced system overhead"],
    correct: 2,
    category: "OS"
  },
  {
    question: "Which system call is typically used for reading from a file in a Unix-like operating system?",
    options: ["open()", "close()", "read()", "write()"],
    correct: 2,
    category: "OS"
  },
  {
    question: "Deadlocks can occur when there's a circular wait. What other condition is necessary for a deadlock to occur?",
    options: ["Mutual Exclusion", "Hold and Wait", "No Preemption", "Circular Wait"],
    correct: 1,
    category: "OS"
  },
  {
    question: "What does a buffer overflow vulnerability in an OS exploit?",
    options: ["Insufficient system resources", "Lack of proper error handling", "Memory corruption", "Network security issues"],
    correct: 2,
    category: "OS"
  },
  {
    question: "Which scheduling algorithm uses a fixed time slice for each process?",
    options: ["Shortest Job First", "Priority Scheduling", "Round Robin", "First Come, First Served"],
    correct: 2,
    category: "OS"
  },
  {
    question: "What is a critical section in concurrent programming?",
    options: ["A section of code that is never executed", "A protected region of code that must be accessed by only one process at a time", "A section of code used for input/output operations", "A section of code that can be executed by multiple processes concurrently"],
    correct: 1,
    category: "OS"
  },
  {
    question: "What is the primary role of a file system in an operating system?",
    options: ["Managing network connections", "Managing physical memory", "Organizing and managing files", "Handling process scheduling"],
    correct: 2,
    category: "OS"
  },
  {
    question: "What is the main function of the OS kernel?",
    options: ["User interface", "Application execution", "Hardware abstraction", "Disk management"],
    correct: 2,
    category: "OS"
  },
  {
    question: "Which concept ensures data consistency in a database?",
    options: ["Virtual memory", "Paging", "Concurrency control", "File system"],
    correct: 2,
    category: "OS"
  },
  {
    question: "What is a page fault?",
    options: ["A mistake in the programming logic", "A failure to allocate memory", "A request for a page not in memory", "A disk read error"],
    correct: 2,
    category: "OS"
  },
  {
    question: "Which OS component manages the allocation and deallocation of main memory?",
    options: ["File System", "Device Driver", "Memory Manager", "Process Scheduler"],
    correct: 2,
    category: "OS"
  },
  {
    question: "What is a major benefit of using a layered operating system?",
    options: ["Reduced security vulnerabilities", "Enhanced memory utilization", "Improved modularity and maintainability", "Faster boot times"],
    correct: 2,
    category: "OS"
  },
  {
    question: "What is the function of a device driver?",
    options: ["Managing user processes", "Communicating with hardware devices", "Scheduling processes", "Managing files"],
    correct: 1,
    category: "OS"
  },
  {
    question: "What is a major advantage of a real-time operating system (RTOS)?",
    options: ["Improved user interface responsiveness", "Reduced memory footprint", "Guaranteed task response times", "Increased processing power"],
    correct: 2,
    category: "OS"
  },
  {
    question: "What does a semaphore protect?",
    options: ["User input", "Shared data", "Network resources", "System calls"],
    correct: 1,
    category: "OS"
  },
  {
    question: "Which concept is crucial for preventing race conditions in concurrent programs?",
    options: ["Multithreading", "Virtualization", "Synchronization", "Caching"],
    correct: 2,
    category: "OS"
  },
  {
    question: "What is the role of a linker in an operating system?",
    options: ["Loads executable files into memory", "Translates assembly code to machine code", "Connects multiple object files", "Manages file access"],
    correct: 2,
    category: "OS"
  },
  {
    question: "What is a major function of a system call?",
    options: ["Facilitating hardware access", "Executing user programs", "Creating new processes", "Handling device interrupts"],
    correct: 0,
    category: "OS"
  },
  {
    question: "Which memory allocation technique often leads to external fragmentation?",
    options: ["Paging", "Segmentation", "Fixed Partitioning", "Dynamic Partitioning"],
    correct: 3,
    category: "OS"
  },
  {
    question: "What is the purpose of a swap file in an operating system?",
    options: ["To store user data", "To provide temporary storage for processes", "To manage network connections", "To store executable files"],
    correct: 1,
    category: "OS"
  },
  {
    question: "Which OS feature allows multiple users to share resources concurrently?",
    options: ["Multiprocessing", "Multitasking", "Multithreading", "Virtualization"],
    correct: 1,
    category: "OS"
  },
  {
    question: "Which scheduling algorithm is most likely to lead to the starvation of processes with shorter CPU burst times, if the scheduler prioritizes processes with longer burst times?",
    options: ["Priority scheduling", "Round Robin", "Shortest Job First", "Multilevel Feedback Queue"],
    correct: 0,
    category: "OS"
  },
  {
    question: "A system uses a demand paging memory management scheme.  If a page fault occurs, which of the following steps is NOT typically performed by the operating system?",
    options: ["Checking the backing store for the missing page", "Finding a free frame in main memory", "Updating the page table", "Loading the entire process into memory"],
    correct: 3,
    category: "OS"
  },
  {
    question: "In a file system, which method optimizes sequential access but can lead to fragmentation?",
    options: ["Linked allocation", "Indexed allocation", "Contiguous allocation", "Sparse allocation"],
    correct: 0,
    category: "OS"
  },
  {
    question: "A system implements a lock-free data structure for concurrent access.  What is a potential pitfall of this approach?",
    options: ["Increased context switching overhead", "Potential deadlock", "Complexity of implementation and debugging", "Improved throughput compared to mutexes"],
    correct: 2,
    category: "OS"
  },
  {
    question: "Which OS concept allows multiple users to interact with the system concurrently, without necessarily having dedicated hardware resources for each?",
    options: ["Virtualization", "Multitasking", "Scheduling", "Paging"],
    correct: 0,
    category: "OS"
  },
  {
    question: "Consider a system with multiple processes competing for resources.  Which condition, if present, leads to a situation where no process can proceed, even if resources are available?",
    options: ["Deadlock", "Starvation", "Race condition", "Mutual exclusion violation"],
    correct: 0,
    category: "OS"
  },
  {
    question: "What is the primary role of a file system's journaling mechanism?",
    options: ["Optimize read performance", "Prevent data loss during crashes", "Manage file permissions", "Enhance user interface"],
    correct: 1,
    category: "OS"
  },
  {
    question: "A system uses a Least Recently Used (LRU) page replacement algorithm. What is a potential drawback of this algorithm?",
    options: ["High overhead", "Poor cache performance", "Increased memory utilization", "Fair allocation of resources"],
    correct: 0,
    category: "OS"
  },
  {
    question: "Which component of an operating system manages interrupts?",
    options: ["Memory manager", "Scheduler", "Device driver", "File system"],
    correct: 2,
    category: "OS"
  },
  {
    question: "Which technique is most suitable for preventing a single process from monopolizing system resources?",
    options: ["Semaphores", "Monitors", "Deadlock avoidance", "Time slicing"],
    correct: 3,
    category: "OS"
  },
  {
    question: "A process requires 10GB of memory to run. If the system only has 8GB of RAM, what is the technique the OS will use to execute the process?",
    options: ["Swapping", "Paging", "Segmentation", "Virtual Memory"],
    correct: 3,
    category: "OS"
  },
  {
    question: "Which OS structure involves layering different functionalities in a hierarchical manner?",
    options: ["Microkernel", "Layered", "Modular", "Hierarchical"],
    correct: 1,
    category: "OS"
  },
  {
    question: "In an operating system, what is the role of the system call interface?",
    options: ["Communicate with hardware devices", "Manage user processes", "Provide a mechanism for user programs to request services from the OS", "Handle file system operations"],
    correct: 2,
    category: "OS"
  },
  {
    question: "What is a major advantage of a microkernel architecture?",
    options: ["Improved performance", "Increased security", "Reduced complexity", "Enhanced modularity"],
    correct: 2,
    category: "OS"
  },
  {
    question: "Which concept allows a single process to appear to have multiple threads, each executing concurrently?",
    options: ["Multiprocessing", "Multithreading", "Multitasking", "Multiprogramming"],
    correct: 1,
    category: "OS"
  },
  {
    question: "What problem can arise if multiple processes access and modify shared resources concurrently without proper synchronization?",
    options: ["Deadlock", "Starvation", "Race condition", "Segmentation fault"],
    correct: 2,
    category: "OS"
  },
  {
    question: "Which OS component is responsible for managing processes and their execution?",
    options: ["Device driver", "File system", "Scheduler", "Memory manager"],
    correct: 2,
    category: "OS"
  },
  {
    question: "Which process management technique involves temporarily suspending a process, allowing another to run?",
    options: ["Time slicing", "Interrupt handling", "Context switching", "Resource allocation"],
    correct: 2,
    category: "OS"
  },
  {
    question: "A system uses a file allocation table (FAT) file system. What is a key characteristic of this approach?",
    options: ["Direct access to data", "Efficient use of disk space", "Easy to manage large files", "High performance in sequential reads"],
    correct: 3,
    category: "OS"
  },
  {
    question: "In OS security, what does access control mean?",
    options: ["Preventing unauthorized access to resources", "Providing user accounts", "Setting file permissions", "All of the above"],
    correct: 3,
    category: "OS"
  },
  {
    question: "What is a critical section in concurrent programming?",
    options: ["A section of code that accesses shared resources", "A section that handles interrupts", "A section that runs only on one processor core", "A section of code that is always protected by a mutex"],
    correct: 0,
    category: "OS"
  },
  {
    question: "Which method of I/O handling involves the CPU waiting for an I/O operation to complete?",
    options: ["Asynchronous I/O", "Blocking I/O", "Non-blocking I/O", "DMA"],
    correct: 1,
    category: "OS"
  },
  {
    question: "A system uses a least recently used (LRU) page replacement algorithm.  Which page is MOST likely to be evicted from memory if the page table shows that pages 2, 5, 1, 8, and 3 were accessed in that order and page 5 is accessed again?",
    options: ["Page 1", "Page 2", "Page 3", "Page 8"],
    correct: 3,
    category: "OS"
  },
  {
    question: "In a multi-threaded environment, which scheduling algorithm is particularly useful for maximizing throughput in a system with numerous short-lived threads?",
    options: ["Round Robin", "Priority Scheduling", "Shortest Job First", "Multilevel Queue"],
    correct: 0,
    category: "OS"
  },
  {
    question: "A system employing a demand paging strategy experiences a significant increase in page faults. Which of these factors is the LEAST likely cause of the increase?",
    options: ["Larger page size", "Increased number of processes", "Higher memory fragmentation", "Significant increase in CPU burst time"],
    correct: 0,
    category: "OS"
  },
  {
    question: "Which technique is most commonly used to implement virtual memory in a paging system to reduce overhead in translation lookaside buffers (TLBs)?",
    options: ["Page-level caching", "Block-level caching", "TLB-based prefetching", "Inverted page table"],
    correct: 3,
    category: "OS"
  }
];

export default OperatingSystemsOS1;
