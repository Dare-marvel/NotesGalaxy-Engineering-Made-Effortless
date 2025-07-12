const ProblemSolvingthroughImperativeProgrammingLabinCPSIPL2 = [
  {
    question: "You need to develop a C function to sort an array of custom structs containing student information.  What sorting algorithm, considering both efficiency and ease of implementation, is most suitable for large datasets?",
    options: ["Bubble Sort", "Merge Sort", "Insertion Sort", "Quick Sort"],
    correct: 1,
    category: "PSIPL"
  },
  {
    question: "How can a C program most effectively handle errors encountered while reading data from a file?",
    options: ["Using `perror` to report errors and exit", "Ignoring potential errors and continuing execution", "Using exception handling to trap and handle errors", "Checking `fopen` return values and handling accordingly"],
    correct: 3,
    category: "PSIPL"
  },
  {
    question: "What is the most efficient way to determine if a number is a prime number within a program handling a large range of potential prime candidates?",
    options: ["Checking divisibility by all numbers up to the square root of the number", "Using trial division by all numbers up to the number itself", "Employing a sieve of Eratosthenes approach", "Calculating prime factors"],
    correct: 0,
    category: "PSIPL"
  },
  {
    question: "Which approach best handles dynamic memory allocation and deallocation in C to prevent memory leaks in a program manipulating large datasets?",
    options: ["Manual memory management with `malloc` and `free`", "Using `realloc` to resize memory blocks", "Employing a garbage collection system", "Automatic memory management using RAII"],
    correct: 0,
    category: "PSIPL"
  },
  {
    question: "In a C program performing matrix multiplication, which loop ordering generally leads to better cache utilization and performance?",
    options: ["Row-major, column-major", "Column-major, row-major", "Row-major, row-major", "Column-major, column-major"],
    correct: 1,
    category: "PSIPL"
  },
  {
    question: "A program needs to manage a collection of tasks with varying priorities.  Which data structure is best suited for efficiently retrieving and processing the highest priority task from a dynamic list?",
    options: ["Array", "Linked List", "Binary Heap", "Hash Table"],
    correct: 2,
    category: "PSIPL"
  },
  {
    question: "A C function is designed to sort an array of strings lexicographically.  Which sorting algorithm provides a stable sort, guaranteeing the relative order of equal elements?",
    options: ["Quicksort", "Heapsort", "Merge Sort", "Bubblesort"],
    correct: 2,
    category: "PSIPL"
  },
  {
    question: "Which C header file is essential for using file I/O operations within a PSIPL program?",
    options: ["stdio.h", "stdlib.h", "string.h", "math.h"],
    correct: 0,
    category: "PSIPL"
  },
  {
    question: "You need to implement a C program to determine the greatest common divisor (GCD) of two integers. Which approach is most efficient?",
    options: ["Euclidean algorithm", "Prime factorization", "Trial division", "Recursive GCD function"],
    correct: 0,
    category: "PSIPL"
  },
  {
    question: "A C program reads input from standard input. What ensures that the program does not crash if the user provides unexpected input?",
    options: ["Input validation", "Error handling", "Output buffering", "Data sanitization"],
    correct: 0,
    category: "PSIPL"
  },
  {
    question: "What is the primary benefit of using recursion in C programming for solving certain problems?",
    options: ["Improved efficiency in all cases", "Conciseness and elegance of code", "Preventing stack overflow errors", "Automatic memory management"],
    correct: 1,
    category: "PSIPL"
  },
  {
    question: "In C, which concept ensures data integrity when multiple threads access shared resources?",
    options: ["Pointers", "Structs", "Synchronization mechanisms", "Dynamic memory allocation"],
    correct: 2,
    category: "PSIPL"
  },
  {
    question: "How can a C program be made robust against buffer overflow vulnerabilities?",
    options: ["Use `strncpy` instead of `strcpy`", "Employ array bounds checking", "Use `fgets` for string input", "All of the above"],
    correct: 3,
    category: "PSIPL"
  },
  {
    question: "Given a set of linked lists, how can you efficiently merge them into a single sorted list?",
    options: ["Merge sort approach", "Iterative approach using pointers", "Insertion sort approach", "Selection sort approach"],
    correct: 0,
    category: "PSIPL"
  },
  {
    question: "To optimize the performance of an algorithm for finding the largest element in a sorted array, which strategy is best?",
    options: ["Applying a linear scan", "Directly accessing the last element", "Binary search", "Using a divide-and-conquer approach"],
    correct: 1,
    category: "PSIPL"
  },
  {
    question: "How can a C program efficiently store and search a large collection of words encountered in a document?",
    options: ["Using a hash table", "Employing a binary search tree", "Creating a linked list", "Implementing a linear search"],
    correct: 0,
    category: "PSIPL"
  },
  {
    question: "A program needs to execute a series of tasks, some potentially dependent on others, in a specific order. Which approach best supports this dependency relationship?",
    options: ["Sequential execution", "Parallel execution", "Dependency graph", "Concurrency"],
    correct: 2,
    category: "PSIPL"
  },
  {
    question: "A function is repeatedly called with different arguments.  If performance is critical, what strategy should you consider?",
    options: ["Caching results", "Optimizing the function's logic", "Debugging the function for errors", "Using recursion for all calls"],
    correct: 0,
    category: "PSIPL"
  },
  {
    question: "You're comparing two algorithms for solving a problem, considering time complexity, what is the most appropriate metric to analyze?",
    options: ["Number of operations", "Space complexity", "Input size", "Algorithm's average case complexity"],
    correct: 3,
    category: "PSIPL"
  },
  {
    question: "What is a key advantage of using modular programming in C for larger programs?",
    options: ["Reducing debugging time", "Improving code readability and maintainability", "Promoting reusability", "All of the above"],
    correct: 3,
    category: "PSIPL"
  },
  {
    question: "What is a common cause of runtime errors in C programs that involve dynamic memory allocation?",
    options: ["Memory leaks", "Uninitialized pointers", "Accessing memory outside allocated blocks", "All of the above"],
    correct: 3,
    category: "PSIPL"
  },
  {
    question: "Given a C program that calculates the factorial of a number, which of the following modifications ensures the program handles potential integer overflow for large input values?",
    options: ["Using a `float` data type for the factorial calculation", "Employing a `long long` data type for the factorial variable", "Implementing input validation to restrict input to a safe range", "Adding error handling for division by zero"],
    correct: 1,
    category: "PSIPL"
  },
  {
    question: "A program reads student records from a file. Each record contains name, ID, and scores. Which sorting algorithm is most suitable to efficiently sort the records based on the student IDs?",
    options: ["Bubble Sort", "Insertion Sort", "Merge Sort", "Quick Sort"],
    correct: 3,
    category: "PSIPL"
  },
  {
    question: "Consider a C program designed to find the longest common subsequence (LCS) of two strings. Which data structure is most appropriate for storing the LCS?",
    options: ["Linked List", "Stack", "Queue", "2D Array"],
    correct: 3,
    category: "PSIPL"
  },
  {
    question: "In a C program simulating a linked list, which of the following is the MOST critical element for preventing memory leaks?",
    options: ["Properly initializing the head node", "Dynamically allocating memory for new nodes", "Using `free()` to deallocate memory of nodes", "Inserting nodes at the tail of the list"],
    correct: 2,
    category: "PSIPL"
  },
  {
    question: "A program needs to process a large file containing student grades.  Which approach is best to prevent excessive memory usage if the file is too large to load into memory at once?",
    options: ["Using a linked list to store the grades", "Loading the entire file into memory at once", "Using a circular buffer", "Processing the file in chunks"],
    correct: 3,
    category: "PSIPL"
  },
  {
    question: "Which C function is most efficient for searching a sorted array for a specific value?",
    options: ["`strcmp`", "`strchr`", "`binary_search`", "`linear_search`"],
    correct: 2,
    category: "PSIPL"
  },
  {
    question: "What is a major advantage of using recursion in problem-solving?",
    options: ["It always uses less memory than iterative solutions", "It directly translates to a more efficient machine code.", "It simplifies the expression of certain algorithms elegantly.", "It's less prone to errors than iterative solutions."],
    correct: 2,
    category: "PSIPL"
  },
  {
    question: "In C, which data structure is ideal for implementing a priority queue?",
    options: ["Linked List", "Array", "Binary Search Tree", "Heap"],
    correct: 3,
    category: "PSIPL"
  },
  {
    question: "To handle potential stack overflow in a recursive function, which technique is usually employed?",
    options: ["Using a global variable", "Adding extensive error handling", "Iterative implementation", "Dynamic memory allocation"],
    correct: 2,
    category: "PSIPL"
  },
  {
    question: "Which feature of C is crucial for passing large structures efficiently between functions?",
    options: ["Pointers", "Structures", "Arrays", "Macros"],
    correct: 0,
    category: "PSIPL"
  },
  {
    question: "What is the time complexity of inserting an element into an unsorted array?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correct: 2,
    category: "PSIPL"
  },
  {
    question: "A program processes a string.  Which method is best to avoid buffer overflow errors?",
    options: ["Using `gets` function", "Using string functions from `string.h` carefully", "Ignoring potential input lengths", "Using `strcpy` without checking destination buffer size"],
    correct: 1,
    category: "PSIPL"
  },
  {
    question: "What is the primary function of a `typedef` statement in C?",
    options: ["Defining a new data type", "Declaring a variable", "Creating a function", "Returning a value"],
    correct: 0,
    category: "PSIPL"
  },
  {
    question: "Which header file is necessary for using `fopen`?",
    options: ["stdio.h", "stdlib.h", "string.h", "math.h"],
    correct: 0,
    category: "PSIPL"
  },
  {
    question: "Which C expression is correct for checking if a character 'c' is a lowercase alphabet?",
    options: ["(c >= 'a' && c <= 'z')", "(c >= 'A' && c <= 'Z')", "(c >= 97 && c <= 122)", "Both (c >= 'a' && c <= 'z') and (c >= 97 && c <= 122)"],
    correct: 3,
    category: "PSIPL"
  },
  {
    question: "Given a polynomial represented as an array of coefficients, which algorithm provides the most efficient evaluation at a specific point?",
    options: ["Naive polynomial evaluation", "Horner's method", "Gaussian elimination", "Binary search"],
    correct: 1,
    category: "PSIPL"
  },
  {
    question: "When dealing with linked lists, why is it crucial to maintain separate `next` pointers in each node?",
    options: ["To keep track of previous nodes", "To allow for insertion and deletion efficiently", "For garbage collection", "To manage array indices"],
    correct: 1,
    category: "PSIPL"
  },
  {
    question: "What is the primary use of dynamic memory allocation in C?",
    options: ["To define variables with fixed size", "To store data in the stack", "To create data structures of varying sizes", "To perform arithmetic operations efficiently"],
    correct: 2,
    category: "PSIPL"
  },
  {
    question: "Which sorting algorithm is known for its quadratic time complexity in the worst case but performs well in average and best cases?",
    options: ["Merge Sort", "Quick Sort", "Insertion Sort", "Heap Sort"],
    correct: 2,
    category: "PSIPL"
  },
  {
    question: "How is a function's local variable's memory deallocated?",
    options: ["Explicitly using free()", "Automatically when the function returns", "By using malloc()", "By using calloc()"],
    correct: 1,
    category: "PSIPL"
  },
  {
    question: "Which error handling technique is NOT suited for detecting memory allocation failures in C?",
    options: ["`malloc` returning `NULL`", "Checking the return value of `fopen`", "Using exceptions", "Using a custom error flag"],
    correct: 2,
    category: "PSIPL"
  },
  {
    question: "Which concept best describes the process of repeatedly applying an operation to a data sequence until a desired outcome is reached?",
    options: ["Iteration", "Recursion", "Abstraction", "Encapsulation"],
    correct: 0,
    category: "PSIPL"
  },
  {
    question: "Given a linked list where each node stores an integer, what is the most efficient way to reverse the list in place, without allocating new memory for nodes?",
    options: ["Iterative approach using three pointers", "Recursive approach", "Using a stack to store nodes", "Using a queue to store nodes"],
    correct: 0,
    category: "PSIPL"
  },
  {
    question: "A program needs to efficiently find the largest contiguous subarray within an array of integers (Kadane's Algorithm). What is a critical aspect of the algorithm for correctness?",
    options: ["Maintaining a running maximum sum", "Initializing the maximum sum with the first element", "Proper handling of negative numbers within the subarray", "All of the above"],
    correct: 3,
    category: "PSIPL"
  },
  {
    question: "What data structure is most suitable for implementing a priority queue with efficient retrieval of the highest priority element?",
    options: ["Linked list", "Array", "Binary heap", "Hash table"],
    correct: 2,
    category: "PSIPL"
  },
  {
    question: "You are tasked with implementing a function to calculate the factorial of a non-negative integer.  Which approach is the most efficient for large inputs?",
    options: ["Iterative approach using a loop", "Recursive approach", "Using a lookup table", "Using bit manipulation"],
    correct: 0,
    category: "PSIPL"
  },
  {
    question: "Which sorting algorithm is known for its in-place nature and efficiency on almost sorted lists?",
    options: ["Merge Sort", "Quick Sort", "Insertion Sort", "Heap Sort"],
    correct: 2,
    category: "PSIPL"
  },
  {
    question: "In a program manipulating polynomials represented by linked lists, what is the most efficient way to perform polynomial addition?",
    options: ["Traverse both lists separately", "Use a hash table to store coefficients", "Create a new list and merge terms based on their exponents", "Sort exponents and directly add"],
    correct: 2,
    category: "PSIPL"
  },
  {
    question: "You need to implement a function that checks if a given string is a palindrome. What is the most efficient algorithm?",
    options: ["Compare characters from the start and end", "Reverse the string and compare", "Use a stack", "Use a queue"],
    correct: 0,
    category: "PSIPL"
  }
];

export default ProblemSolvingthroughImperativeProgrammingLabinCPSIPL2;
