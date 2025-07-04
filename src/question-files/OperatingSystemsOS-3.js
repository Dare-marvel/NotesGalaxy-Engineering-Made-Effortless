const OperatingSystemsOS3 = [
  {
    question: "What characteristic of a real-time OS distinguishes it from a general-purpose OS?",
    options: ["Support for multiple users", "Predictable response times", "Ability to run batch jobs", "Efficient memory management"],
    correct: 1,
    category: "OS"
  },
  {
    question: "Which security mechanism is primarily concerned with preventing unauthorized access to OS resources?",
    options: ["File permissions", "Authentication", "Encryption", "Virtualization"],
    correct: 1,
    category: "OS"
  },
  {
    question: "How does a system implement a hard real-time requirement?",
    options: ["Using a sophisticated scheduler", "Prioritizing the real-time process", "Using interrupts", "Utilizing a time-slicing mechanism"],
    correct: 2,
    category: "OS"
  },
  {
    question: "What is a major drawback of using a purely preemptive scheduling algorithm?",
    options: ["Increased context switching overhead", "Potential for starvation", "Inefficient resource utilization", "Difficult implementation"],
    correct: 0,
    category: "OS"
  },
  {
    question: "Which memory management technique is most vulnerable to external fragmentation?",
    options: ["Paging", "Segmentation", "Swapping", "Virtual memory"],
    correct: 1,
    category: "OS"
  },
  {
    question: "What is a critical section in an OS?",
    options: ["A section of code that must be executed atomically", "A section of code that can be executed by multiple processes simultaneously", "A region of memory used for buffering", "A section of code related to process scheduling"],
    correct: 0,
    category: "OS"
  },
  {
    question: "How does a system handle a page fault?",
    options: ["Loads the requested page into memory", "Terminates the process", "Increases the process's memory allocation", "Prints an error message"],
    correct: 0,
    category: "OS"
  },
  {
    question: "What is the purpose of a system call?",
    options: ["To provide an interface between application programs and the OS kernel", "To initiate hardware interrupts", "To transfer data between processes", "To manage memory allocation"],
    correct: 0,
    category: "OS"
  },
  {
    question: "Which technique allows multiple processes to access shared resources without interference?",
    options: ["Semaphores", "Threads", "Processes", "Interrupts"],
    correct: 0,
    category: "OS"
  },
  {
    question: "What is the primary role of a buffer cache in an OS?",
    options: ["To hold recently accessed data", "To provide a unified memory space across processes", "To manage virtual memory", "To reduce the overhead of I/O operations"],
    correct: 3,
    category: "OS"
  },
  {
    question: "Which OS component is responsible for handling I/O requests?",
    options: ["File system", "Device driver", "Memory manager", "Scheduler"],
    correct: 1,
    category: "OS"
  },
  {
    question: "A system with a large number of processes exhibits high context switching rates. What is a likely cause?",
    options: ["High CPU utilization", "Long process execution times", "Short processes", "Limited system resources"],
    correct: 2,
    category: "OS"
  },
  {
    question: "What is a key aspect of a multi-threaded OS?",
    options: ["Increased context switching overhead", "Improved resource utilization", "Reduced process concurrency", "Simplified memory management"],
    correct: 1,
    category: "OS"
  },
  {
    question: "Which approach is typically used for implementing virtual machines?",
    options: ["Binary translation", "Dynamic binary rewriting", "Interpreted execution", "All of the above"],
    correct: 3,
    category: "OS"
  },
  {
    question: "What is a significant advantage of a microkernel architecture?",
    options: ["Improved performance", "Increased security", "Reduced complexity", "Enhanced modularity"],
    correct: 3,
    category: "OS"
  },
  {
    question: "Which scheduling algorithm is best suited for a system with a mix of CPU-bound and I/O-bound processes?",
    options: ["Shortest Job First", "Round Robin", "Priority Scheduling", "Multi-level Feedback Queue"],
    correct: 3,
    category: "OS"
  },
  {
    question: "Which scheduling algorithm is most likely to exhibit the convoy effect, especially under heavy load, when prioritizing short jobs?",
    options: ["Shortest Job First (SJF)", "Priority Scheduling", "Round Robin", "First-Come, First-Served (FCFS)"],
    correct: 1,
    category: "OS"
  },
  {
    question: "A system employs a demand paging scheme with a page table stored in main memory. If a page fault occurs, which of these steps does not happen in the context of handling the page fault?",
    options: ["Loading the requested page from secondary storage", "Updating the page table", "Initiating the process context switch", "Determining the appropriate frame in memory"],
    correct: 2,
    category: "OS"
  },
  {
    question: "Consider a system with multiple processes competing for shared resources.  What condition, arising from improper synchronization mechanisms, leads to an indefinite postponement of a process waiting for resources that are held by other processes?",
    options: ["Deadlock", "Starvation", "Race condition", "Mutual exclusion violation"],
    correct: 1,
    category: "OS"
  },
  {
    question: "In a file system utilizing a B+ tree, which aspect contributes significantly to its efficiency in handling large datasets?",
    options: ["Balanced structure", "Use of pointers", "Sequential access", "Indexed allocation"],
    correct: 0,
    category: "OS"
  },
  {
    question: "Which memory management technique allows processes to share portions of memory without explicitly copying the code or data segments?",
    options: ["Demand Paging", "Virtual Memory", "Segmentation", "Swapping"],
    correct: 2,
    category: "OS"
  },
  {
    question: "A process needs to access a critical section. Which of the following conditions are NOT necessary to ensure mutual exclusion?",
    options: ["Progress", "Bounded Waiting", "Mutual Exclusion", "Hold and Wait"],
    correct: 3,
    category: "OS"
  },
  {
    question: "In a real-time operating system (RTOS), what is the primary distinguishing characteristic that differentiates it from a general-purpose OS?",
    options: ["Support for multitasking", "Use of virtual memory", "Guaranteed response times", "File system management"],
    correct: 2,
    category: "OS"
  },
  {
    question: "A system uses a least recently used (LRU) page replacement algorithm.  Which scenario would lead to the highest page fault rate?",
    options: ["Frequent process creation and destruction", "Fixed working set size", "Large process address space", "Small amount of physical memory"],
    correct: 3,
    category: "OS"
  },
  {
    question: "Which OS concept allows a process to execute multiple threads concurrently within a single address space?",
    options: ["Virtual Memory", "Multithreading", "Segmentation", "Multiprocessing"],
    correct: 1,
    category: "OS"
  },
  {
    question: "A system implements a file allocation table (FAT).  What is a potential limitation associated with this approach compared to other file allocation methods?",
    options: ["Low storage capacity", "Slow access speed", "Limited scalability", "Requires extensive indexing"],
    correct: 1,
    category: "OS"
  },
  {
    question: "What is a key difference between a monolithic kernel and a microkernel architecture?",
    options: ["Microkernel uses a single address space, while monolithic uses multiple", "Monolithic kernel provides more flexibility and modularity", "Microkernel provides more efficiency and stability", "Microkernel offers better extensibility and maintainability"],
    correct: 2,
    category: "OS"
  },
  {
    question: "A system experiences a significant number of context switches. Which metric is most directly indicative of this characteristic?",
    options: ["Interrupt rate", "Throughput", "CPU utilization", "Process switching rate"],
    correct: 3,
    category: "OS"
  },
  {
    question: "Which method is typically used to protect shared resources from simultaneous access by multiple processes in an operating system?",
    options: ["Virtualization", "DMA", "Synchronization primitives", "Multiprocessing"],
    correct: 2,
    category: "OS"
  },
  {
    question: "What is the most significant disadvantage of using a first-come, first-served (FCFS) scheduling algorithm?",
    options: ["High context switching overhead", "Poor I/O device utilization", "Potential for starvation", "Unpredictable response time"],
    correct: 3,
    category: "OS"
  },
  {
    question: "Which scheduling algorithm typically yields better performance for a large number of short processes?",
    options: ["Priority Scheduling", "Shortest Job First", "Round Robin", "First-Come, First-Served"],
    correct: 2,
    category: "OS"
  },
  {
    question: "Which OS component is responsible for managing and allocating secondary storage devices?",
    options: ["File system", "Device driver", "Memory manager", "Process scheduler"],
    correct: 0,
    category: "OS"
  },
  {
    question: "Which concept is essential for allowing multiple processes to share the same physical memory without interfering with each other?",
    options: ["Virtual memory", "Memory protection", "Memory mapping", "Paging"],
    correct: 1,
    category: "OS"
  },
  {
    question: "What is the primary function of a process control block (PCB)?",
    options: ["Track memory allocation for the process", "Manage the process's execution state", "Perform input/output operations", "Allocate CPU time slices"],
    correct: 1,
    category: "OS"
  },
  {
    question: "How does the operating system handle the concurrent access to shared resources by multiple processes?",
    options: ["Preemptive scheduling", "Mutual exclusion", "Deadlock detection", "Context switching"],
    correct: 1,
    category: "OS"
  },
  {
    question: "What is the primary purpose of a buffer cache in an operating system?",
    options: ["Improve file system performance", "Minimize disk access", "Enforce memory protection", "Manage interrupts"],
    correct: 0,
    category: "OS"
  },
  {
    question: "What is the role of a system call?",
    options: ["Process scheduling", "Provide a way for a program to access OS services", "Virtual memory management", "Device driver loading"],
    correct: 1,
    category: "OS"
  },
  {
    question: "A system using a demand paging scheme experiences a high page fault rate.  What is the most likely contributing factor?",
    options: ["Large amount of physical memory", "Low utilization of I/O devices", "A poor page replacement algorithm", "Excessive CPU utilization"],
    correct: 2,
    category: "OS"
  },
  {
    question: "Which scheduling algorithm is most likely to suffer from the 'convoy effect' when dealing with a mix of short and long CPU burst processes?",
    options: ["Shortest Job First (SJF)", "Round Robin", "First-Come, First-Served (FCFS)", "Priority Scheduling"],
    correct: 2,
    category: "OS"
  },
  {
    question: "A system uses a demand paging memory management scheme.  If the page fault rate increases dramatically, what is the most likely contributing factor?",
    options: ["Increased number of processes", "Increased memory size", "Decreased process execution time", "Decreased locality of reference"],
    correct: 3,
    category: "OS"
  },
  {
    question: "In a virtual memory system using a page table, what data structure is commonly used to track the status of each page?",
    options: ["Linked List", "Binary Search Tree", "Hash Table", "Stack"],
    correct: 0,
    category: "OS"
  },
  {
    question: "A system implements a file system with journaling.  What is the primary benefit of journaling?",
    options: ["Improved file transfer speeds", "Increased disk space utilization", "Improved data recovery in case of system crashes", "Reduced disk seek time"],
    correct: 2,
    category: "OS"
  },
  {
    question: "Which process synchronization mechanism is most appropriate for preventing race conditions in a situation where multiple processes need exclusive access to a shared resource, and that resource requires several operations?",
    options: ["Semaphores", "Monitors", "Mutexes", "Atomic instructions"],
    correct: 1,
    category: "OS"
  },
  {
    question: "A critical section problem is characterized by which of the following attributes?",
    options: ["Mutual Exclusion, Progress, Bounded Waiting, and Fairness", "Mutual Exclusion, Progress, and Bounded Waiting", "Mutual Exclusion, Progress, and Deadlock prevention", "Mutual Exclusion, Progress, and Fairness"],
    correct: 0,
    category: "OS"
  },
  {
    question: "In a real-time operating system (RTOS), what is the primary concern when scheduling tasks?",
    options: ["Throughput", "Turnaround time", "Responsiveness to deadlines", "CPU utilization"],
    correct: 2,
    category: "OS"
  },
  {
    question: "Which technique is commonly used to detect deadlocks in an operating system?",
    options: ["Resource Allocation Graph", "Wait-for Graph", "Banker's Algorithm", "All of the above"],
    correct: 3,
    category: "OS"
  },
  {
    question: "A system employs a file system with a hierarchical structure. What is the primary advantage of such a structure?",
    options: ["Improved file access speed", "Simplified file management", "Enhanced security", "Reduced storage space"],
    correct: 1,
    category: "OS"
  },
  {
    question: "Which OS component is responsible for managing processes and threads, including scheduling and resource allocation?",
    options: ["File System", "Memory Manager", "Process Manager", "Device Driver"],
    correct: 2,
    category: "OS"
  },
  {
    question: "What is the primary function of a buffer cache in an operating system?",
    options: ["To speed up file access", "To improve memory utilization", "To handle interrupts", "To manage virtual memory"],
    correct: 0,
    category: "OS"
  },
  {
    question: "Which type of scheduling algorithm favors shorter processes over longer ones?",
    options: ["First-Come, First-Served", "Shortest Remaining Time", "Round Robin", "Priority Scheduling"],
    correct: 1,
    category: "OS"
  }
];

export default OperatingSystemsOS3;
