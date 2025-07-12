const ProblemSolvingthroughImperativeProgrammingLabinCPSIPL4 = [
  {
    question: "What is the output of this C code snippet? #include <stdio.h> int main() {int arr[] = {1, 2, 3, 4, 5}; int *ptr = arr; ptr++; printf(\"%d\\n\", *ptr); return 0; }",
    options: ["2", "1", "3", "Error"],
    correct: 0,
    category: "PSIPL"
  },
  {
    question: "In C, which keyword is used to define a function that does not return any value?",
    options: ["void", "int", "float", "char"],
    correct: 0,
    category: "PSIPL"
  },
  {
    question: "What is the output of the following C code? #include <stdio.h> int main() {int i = 5;  printf(\"%d\\n\", ++i); return 0; }",
    options: ["4", "5", "6", "Compilation Error"],
    correct: 2,
    category: "PSIPL"
  },
  {
    question: "What is the purpose of the `strcmp` function in C?",
    options: ["To compare two integers", "To compare two strings", "To copy one string to another", "To calculate the length of a string"],
    correct: 1,
    category: "PSIPL"
  },
  {
    question: "What's the result of running this code? #include <stdio.h> int main() { int a=10; int b=0; if (b) a=0; printf(\"%d\\n\", a); return 0;}",
    options: ["0", "10", "1", "Compilation error"],
    correct: 1,
    category: "PSIPL"
  },
  {
    question: "What is the role of a function prototype in C?",
    options: ["To define the function body", "To declare the function's parameters and return type", "To call a function", "To allocate memory for the function variables"],
    correct: 1,
    category: "PSIPL"
  },
  {
    question: "What's the fundamental difference between a while loop and a do-while loop in C?",
    options: ["The while loop checks the condition before each iteration; the do-while loop checks the condition after each iteration.", "The while loop only works with integers, the do-while works with strings.", "The while loop runs infinitely; the do-while runs once.", "The while loop needs a semicolon at the end; the do-while loop doesn't."],
    correct: 0,
    category: "PSIPL"
  },
  {
    question: "Which C library function is useful for reading an integer from the user's input?",
    options: ["scanf", "getchar", "fgets", "puts"],
    correct: 0,
    category: "PSIPL"
  },
  {
    question: "Which data structure would you use to store a collection of items where you need to access the items in the order they were added?",
    options: ["Stack", "Queue", "Tree", "Hash Table"],
    correct: 1,
    category: "PSIPL"
  },
  {
    question: "What is the output of the following C code? #include <stdio.h> int main() { int x = 10; int *ptr = &x; printf(\"%d\\n\", *ptr); return 0; }",
    options: ["10", "Address of x", "Compilation Error", "Runtime Error"],
    correct: 0,
    category: "PSIPL"
  },
  {
    question: "Which error is most likely caused by accessing an element beyond the valid bounds of an array in C?",
    options: ["Compilation error", "Runtime error", "Logical error", "Syntax error"],
    correct: 1,
    category: "PSIPL"
  },
  {
    question: "Which sorting algorithm has the best average-case time complexity?",
    options: ["Bubble Sort", "Insertion Sort", "Merge Sort", "Selection Sort"],
    correct: 2,
    category: "PSIPL"
  },
  {
    question: "Given a dynamically allocated 2D array representing a maze, where '0' denotes a path and '1' a wall, which function efficiently finds the shortest path from a starting point to an exit point using a queue-based approach?",
    options: ["`bfs(maze, start, end)`", "`dfs(maze, start, end)`", "`dijkstra(maze, start, end)`", "`bellmanFord(maze, start, end)`"],
    correct: 0,
    category: "PSIPL"
  },
  {
    question: "Which sorting algorithm, when dealing with almost sorted input arrays, exhibits significantly improved performance compared to its counterparts?",
    options: ["Insertion Sort", "Merge Sort", "Quick Sort", "Bubble Sort"],
    correct: 0,
    category: "PSIPL"
  },
  {
    question: "You need to implement a function that reverses the order of words in a string.  How should you use string manipulation functions effectively?",
    options: ["Using `strcpy` and `strcat` repeatedly", "Employing `strtok` to tokenize the string and then reversing the tokens", "Reversing the whole string using a loop", "Implementing a recursive function that handles string reversal"],
    correct: 1,
    category: "PSIPL"
  },
  {
    question: "Consider a scenario where you need to manage a large dataset of student records.  Which data structure would be the most appropriate to efficiently search for a student based on their ID?",
    options: ["Linked List", "Binary Search Tree", "Hash Table", "Array"],
    correct: 2,
    category: "PSIPL"
  },
  {
    question: "A function to calculate the factorial of a number is to be designed. Which approach handles potential integer overflow issues effectively?",
    options: ["Using `long long` integer type", "Using a floating-point representation", "Using a logarithmic approach", "Ignoring the possibility of overflow"],
    correct: 0,
    category: "PSIPL"
  },
  {
    question: "Which approach is best for implementing a priority queue efficiently?",
    options: ["Using a sorted array", "Using a linked list", "Using a binary heap", "Using a hash table"],
    correct: 2,
    category: "PSIPL"
  },
  {
    question: "In a C program processing a series of sensor readings, a variable `sensorData` is to be updated with new readings. What approach should be avoided to maintain data consistency and avoid race conditions if multiple threads are involved?",
    options: ["Using mutexes to protect `sensorData`", "Using conditional variables", "Using global variables without any protection mechanisms", "Using atomic operations for `sensorData`"],
    correct: 2,
    category: "PSIPL"
  },
  {
    question: "What is the most efficient way to determine if a given number is prime?",
    options: ["Trial division up to the square root of the number", "Checking divisibility by all numbers up to the number itself", "Using recursion", "Using a hash table"],
    correct: 0,
    category: "PSIPL"
  },
  {
    question: "You need to implement a function that detects cycles in a linked list. Which method is the most efficient and appropriate?",
    options: ["Using a hash table to store visited nodes", "Using two pointers, one moving at twice the speed of the other", "Using recursion", "Using a stack to store visited nodes"],
    correct: 1,
    category: "PSIPL"
  },
  {
    question: "A program to calculate Fibonacci numbers recursively often results in performance issues. Which approach effectively addresses this performance problem?",
    options: ["Using memoization to store intermediate results", "Using a loop-based iterative approach", "Using a divide-and-conquer strategy", "Implementing a function with static variables"],
    correct: 0,
    category: "PSIPL"
  },
  {
    question: "Given a set of points, how would you implement an algorithm to find the pair of points with the smallest Euclidean distance?",
    options: ["Brute-force approach", "Divide-and-conquer approach", "Using a binary search tree", "Sorting the points by x-coordinate"],
    correct: 1,
    category: "PSIPL"
  },
  {
    question: "Which structure effectively represents a collection of items with unique keys and values?",
    options: ["Array", "Linked List", "Binary Search Tree", "Hash Table"],
    correct: 3,
    category: "PSIPL"
  },
  {
    question: "To efficiently find the largest element in a very large array, what algorithm is the most suitable?",
    options: ["Linear scan", "Binary search", "Selection sort", "Quick sort"],
    correct: 0,
    category: "PSIPL"
  },
  {
    question: "Which data structure allows constant-time insertion and deletion at both ends?",
    options: ["Linked list", "Array", "Stack", "Queue"],
    correct: 2,
    category: "PSIPL"
  },
  {
    question: "For a program manipulating a large set of numbers, what's the crucial consideration to optimize performance?",
    options: ["Memory allocation", "Data structures", "Algorithm selection", "Use of libraries"],
    correct: 2,
    category: "PSIPL"
  },
  {
    question: "How can you handle potential errors caused by user input during program execution?",
    options: ["Using error codes", "Assertions", "Input validation", "All of the above"],
    correct: 3,
    category: "PSIPL"
  },
  {
    question: "When writing a function to perform a matrix multiplication, what consideration is crucial to avoid errors?",
    options: ["Matrix dimensions", "Order of operations", "Memory management", "All of the above"],
    correct: 3,
    category: "PSIPL"
  },
  {
    question: "What is the crucial difference between `strcpy` and `strncpy` in C?",
    options: ["`strcpy` always succeeds", "`strncpy` checks for buffer overflow", "`strcpy` appends NULL terminators", "All of the above"],
    correct: 1,
    category: "PSIPL"
  },
  {
    question: "What library in C is essential for managing input/output operations in a program?",
    options: ["`math.h`", "`stdio.h`", "`string.h`", "`stdlib.h`"],
    correct: 1,
    category: "PSIPL"
  },
  {
    question: "What does the `malloc` function in C return if memory allocation fails?",
    options: ["0", "NULL", "-1", "1"],
    correct: 1,
    category: "PSIPL"
  },
  {
    question: "What data structure would be ideal for implementing a set of unique items?",
    options: ["Linked List", "Array", "Hash Table", "Stack"],
    correct: 2,
    category: "PSIPL"
  },
  {
    question: "How to prevent memory leaks in C programs?",
    options: ["Use `free` to deallocate allocated memory", "Avoid `malloc` function", "Use `calloc` instead of `malloc`", "All of the above"],
    correct: 0,
    category: "PSIPL"
  },
  {
    question: "What is the primary purpose of a `typedef` statement in C?",
    options: ["To create a new data type", "To declare a function", "To define a macro", "To allocate memory"],
    correct: 0,
    category: "PSIPL"
  },
  {
    question: "Given a 2D array representing a maze, where 0 represents a path and 1 represents a wall, which function best implements a recursive backtracking algorithm to find a path from the top-left corner to the bottom-right corner in C?",
    options: ["A function that simply traverses the array in a grid fashion", "A function that uses a stack to keep track of visited cells and their neighbors", "A function that uses dynamic memory allocation and a queue", "A function that directly prints the path without proper checking"],
    correct: 1,
    category: "PSIPL"
  },
  {
    question: "A program needs to sort a large dataset of student records (name, ID, GPA) in ascending order by GPA.  Which sorting algorithm would be MOST efficient and why?",
    options: ["Bubble sort", "Insertion sort", "Merge sort", "Selection sort"],
    correct: 2,
    category: "PSIPL"
  },
  {
    question: "You are writing a C program to manage a linked list of product inventory.  Which structure would be most appropriate to manage the inventory list efficiently, considering potential frequent insertions and deletions in the middle of the list?",
    options: ["An array", "A statically allocated array", "A doubly linked list", "A singly linked list"],
    correct: 2,
    category: "PSIPL"
  },
  {
    question: "A program needs to calculate the factorial of a large integer. Which approach is the most suitable considering potential integer overflow issues, given standard 32-bit or 64-bit integers in C?",
    options: ["Using a built-in factorial function", "Using recursion", "Using an unsigned long long data type and explicit error handling", "Using a while loop and manually calculating the product"],
    correct: 2,
    category: "PSIPL"
  },
  {
    question: "A C program needs to read data from a file and perform calculations.  What is a critical error-checking step to be included when dealing with file input?",
    options: ["Checking if the file pointer is valid after opening", "Checking for successful closing of the file", "Checking if the read operation was successful with fscanf", "All of the above"],
    correct: 3,
    category: "PSIPL"
  },
  {
    question: "What data structure is best suited for implementing a priority queue in C?",
    options: ["Linked list", "Array", "Binary search tree", "Heap"],
    correct: 3,
    category: "PSIPL"
  },
  {
    question: "A function needs to efficiently search for a specific value within a sorted array. Which algorithm should be preferred?",
    options: ["Linear search", "Binary search", "Bubble sort", "Selection sort"],
    correct: 1,
    category: "PSIPL"
  },
  {
    question: "Which of these C constructs BEST helps avoid potential memory leaks when using dynamic memory allocation?",
    options: ["Using `malloc`", "Using `free`", "Using `realloc`", "Using `calloc` and remembering to `free`"],
    correct: 1,
    category: "PSIPL"
  },
  {
    question: "In a C program simulating a banking system, which data structure is most appropriate for representing customer accounts with varying balances and transaction histories?",
    options: ["An array of structures", "A doubly linked list", "A hash table", "A stack"],
    correct: 0,
    category: "PSIPL"
  },
  {
    question: "You need to implement a function to reverse a string in C. Which approach is generally considered the most efficient and why?",
    options: ["Using recursion", "Iterative swapping of characters", "Using `strcpy` and reversing it", "Using a temporary string buffer"],
    correct: 1,
    category: "PSIPL"
  },
  {
    question: "Which C library function is suitable for handling command-line arguments in a program?",
    options: ["`scanf`", "`fgets`", "`getchar`", "`argc` and `argv`"],
    correct: 3,
    category: "PSIPL"
  },
  {
    question: "A program processes a large file line-by-line and needs to extract specific data from each line. Which input/output approach is MOST suitable for optimal performance?",
    options: ["Reading the entire file into memory at once", "Using `fgets` to read lines", "Using `fscanf` to parse individual words", "Using `scanf` to read the whole file"],
    correct: 1,
    category: "PSIPL"
  },
  {
    question: "When working with floating-point numbers in C, you want to check for equality.  What's the appropriate approach, considering potential precision issues?",
    options: ["Using `==` directly", "Comparing absolute differences within a tolerance", "Comparing relative differences within a tolerance", "Using a custom function for comparison"],
    correct: 2,
    category: "PSIPL"
  },
  {
    question: "Implementing a function to convert a string to an integer in C, what would be an important consideration to handle possible errors?",
    options: ["Checking the return value from `atoi`", "Validating input characters for integer representation", "Using error handling with `sscanf`", "All of the above"],
    correct: 3,
    category: "PSIPL"
  },
  {
    question: "Consider a program designed to analyze student performance in a course.  Given a set of student records (containing student ID, name, and scores for multiple assignments), the program needs to calculate and print the average assignment score for each student.  Further, the program must identify and print the student with the highest average score, along with their ID and name.  Which data structure, implemented using arrays, would be the most efficient and suitable for storing and managing the student records and facilitating the calculation of average scores and finding the highest average?",
    options: ["A two-dimensional array, where each row represents a student and columns store their ID, name, and assignment scores.", "A linked list, where each node contains a student's record.", "A hash table, where student IDs serve as keys and records as values.", "A structure (using `struct`) with arrays to store student data, enabling efficient access to specific elements"],
    correct: 0,
    category: "PSIPL"
  }
];

export default ProblemSolvingthroughImperativeProgrammingLabinCPSIPL4;
