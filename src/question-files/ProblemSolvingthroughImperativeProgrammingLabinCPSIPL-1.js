const ProblemSolvingthroughImperativeProgrammingLabinCPSIPL1 = [
  {
    question: "Which header file is necessary for using `printf` function in a C program?",
    options: ["stdio.h", "conio.h", "math.h", "string.h"],
    correct: 0,
    category: "PSIPL"
  },
  {
    question: "What is the output of the following C code snippet:\n```C\nint main(){\nint x = 5, y = 10;\nprintf(\"%d\", x + y);\nreturn 0;}\n```",
    options: ["15", "5", "10", "Error"],
    correct: 0,
    category: "PSIPL"
  },
  {
    question: "How do you declare a two-dimensional array of integers with 3 rows and 4 columns in C?",
    options: ["int arr[3][4];", "int arr(3,4);", "int arr[4][3];", "array arr[3][4];"],
    correct: 0,
    category: "PSIPL"
  },
  {
    question: "Which loop is best suited to iterate through an array in C?",
    options: ["`while` loop", "`for` loop", "`do-while` loop", "Any of the above"],
    correct: 1,
    category: "PSIPL"
  },
  {
    question: "What is the purpose of the `malloc` function in C?",
    options: ["To declare variables", "To allocate memory dynamically", "To print to the console", "To read user input"],
    correct: 1,
    category: "PSIPL"
  },
  {
    question: "What does the `return 0;` statement in `main` function typically indicate?",
    options: ["Program execution was successful", "An error occurred", "Program execution was interrupted", "User input was incorrect"],
    correct: 0,
    category: "PSIPL"
  },
  {
    question: "What is the output of the following C code:\n`#include <stdio.h>\nint main() { int a = 5; int b = ++a; printf(\"%d\\n\", b); return 0; }`",
    options: ["4", "5", "6", "Error"],
    correct: 2,
    category: "PSIPL"
  },
  {
    question: "What is the role of a `switch` statement in C?",
    options: ["To loop through a range of values", "To perform a conditional action", "To execute a group of statements repeatedly", "To select one block of code from several based on a value"],
    correct: 3,
    category: "PSIPL"
  },
  {
    question: "What is a pointer in C?",
    options: ["A variable that stores an address of another variable", "A value representing a memory location", "A function that performs calculations", "A constant value"],
    correct: 0,
    category: "PSIPL"
  },
  {
    question: "Which function is used to copy strings in C?",
    options: ["`strcpy`", "`strncpy`", "`strcat`", "`strcmp`"],
    correct: 0,
    category: "PSIPL"
  },
  {
    question: "What is the result of `sizeof(int)` on a 64-bit system?",
    options: ["4", "8", "16", "2"],
    correct: 1,
    category: "PSIPL"
  },
  {
    question: "How can you handle potential errors from file operations in C?",
    options: ["Use `if` statements", "Use try-catch blocks", "Check the return value of file functions", "Use exceptions"],
    correct: 2,
    category: "PSIPL"
  },
  {
    question: "What is the output of this C code: `#include <stdio.h> int main() { int arr[] = {1, 2, 3}; printf(\"%d\", arr[2]); return 0; }`",
    options: ["1", "2", "3", "Error"],
    correct: 2,
    category: "PSIPL"
  },
  {
    question: "In C, what is the function that returns the length of a string?",
    options: ["`string_length`", "`strlen`", "`strlength`", "`length`"],
    correct: 1,
    category: "PSIPL"
  },
  {
    question: "Which operator is used for bitwise AND in C?",
    options: ["&", "|", "^", "~"],
    correct: 0,
    category: "PSIPL"
  },
  {
    question: "What does `#include <stdlib.h>` do?",
    options: ["Includes standard input/output functions", "Includes standard library functions", "Defines macros", "Includes string functions"],
    correct: 1,
    category: "PSIPL"
  },
  {
    question: "Which keyword is used to declare a constant in C?",
    options: ["`const`", "`constant`", "`var`", "`final`"],
    correct: 0,
    category: "PSIPL"
  },
  {
    question: "What is a structure in C?",
    options: ["A collection of variables of different types", "A block of code that performs a specific task", "A data type that groups related data items under a single name", "A special type of array"],
    correct: 2,
    category: "PSIPL"
  },
  {
    question: "Which keyword is used to represent null pointer in C?",
    options: ["`NULL`", "`null`", "`NULLPOINTER`", "`nullptr`"],
    correct: 0,
    category: "PSIPL"
  },
  {
    question: "What is a `typedef` in C programming?",
    options: ["A function that converts data types", "A keyword that defines a new name for an existing data type", "A macro for string manipulation", "A command to define a new structure"],
    correct: 1,
    category: "PSIPL"
  },
  {
    question: "What is the output of `printf(\"%.2f\", 3.14159);`?",
    options: ["3.14", "3.14159", "3.15", "Error"],
    correct: 0,
    category: "PSIPL"
  },
  {
    question: "What does `#define` do in C?",
    options: ["Declares a variable", "Defines a macro", "Includes a header file", "Declares a function"],
    correct: 1,
    category: "PSIPL"
  },
  {
    question: "What is the use of `getch()` in C programming?",
    options: ["Reads a character from the console without displaying it", "Reads an integer from the console", "Writes a character to the console", "Displays a message on the console"],
    correct: 0,
    category: "PSIPL"
  },
  {
    question: "Given a C program with nested loops iterating over an array of structs, what is the most efficient way to avoid unnecessary re-calculations within the inner loop if the same data needs to be used repeatedly?",
    options: ["Use a temporary variable to store the results of the outer loop", "Use a separate function to calculate the needed value", "Use a global variable to store the value", "Use pointers to access the data"],
    correct: 0,
    category: "PSIPL"
  },
  {
    question: "A program sorts an array of strings. It's critical to ensure that the sorting is case-insensitive.  Which approach is most suitable and efficient for this?",
    options: ["Convert all strings to lowercase before sorting", "Use custom comparison function in qsort", "Create a copy of the array and sort the copy", "Employ a separate sorting algorithm"],
    correct: 1,
    category: "PSIPL"
  },
  {
    question: "Which data structure is most appropriate for efficiently storing and searching for a large set of numbers that may frequently be added and removed?",
    options: ["Array", "Linked List", "Binary Search Tree", "Hash Table"],
    correct: 3,
    category: "PSIPL"
  },
  {
    question: "You're working on a program that needs to reverse a linked list. What approach would be most suitable for this task without creating a new linked list?",
    options: ["Use recursion", "Iterative traversal with pointers", "Create a copy and reverse it", "Use a stack to store nodes"],
    correct: 1,
    category: "PSIPL"
  },
  {
    question: "Which C function is best for dynamically allocating a 2D array?",
    options: ["malloc", "calloc", "realloc", "strdup"],
    correct: 0,
    category: "PSIPL"
  },
  {
    question: "A program needs to determine if a matrix is symmetric. What is the most efficient way to achieve this?",
    options: ["Compare each element with its corresponding element in the transpose", "Compare all elements of the matrix", "Check the diagonal elements only", "Use a nested loop to compare all elements"],
    correct: 0,
    category: "PSIPL"
  },
  {
    question: "How do you prevent memory leaks in C when working with dynamically allocated memory?",
    options: ["Use `free()` for every `malloc()` call", "Avoid using dynamically allocated memory", "Use `realloc()` to resize memory", "Use `calloc()` instead of `malloc()`"],
    correct: 0,
    category: "PSIPL"
  },
  {
    question: "A program processes a file containing integers, and some might be invalid. Which approach is best to handle these invalid entries?",
    options: ["Ignore invalid entries", "Report an error and stop", "Replace invalid entries with a default value", "Use a robust input validation routine"],
    correct: 3,
    category: "PSIPL"
  },
  {
    question: "Which sorting algorithm is suitable for a small dataset where the order of elements doesn't matter as much as the speed?",
    options: ["Merge Sort", "Quick Sort", "Insertion Sort", "Radix Sort"],
    correct: 2,
    category: "PSIPL"
  },
  {
    question: "A program needs to simulate a queue using an array. What is a potential pitfall to avoid when implementing this?",
    options: ["Not using a loop for insertion", "Not checking the array for overflow or underflow", "Not using a pointer", "Not setting the front index properly"],
    correct: 1,
    category: "PSIPL"
  },
  {
    question: "Given a polynomial representation as an array of coefficients, how can you most efficiently evaluate the polynomial for a given value of 'x'?",
    options: ["Nested multiplication", "Iterative multiplication", "Recursion", "Direct evaluation"],
    correct: 0,
    category: "PSIPL"
  },
  {
    question: "When implementing a recursive function in C, which of these should be avoided to prevent infinite loops or stack overflow?",
    options: ["Using a base case", "Calling itself with different arguments", "Avoiding unnecessary loops inside the function", "Lack of recursive base case or infinite recursion"],
    correct: 3,
    category: "PSIPL"
  },
  {
    question: "What data structure best supports frequent insertions and deletions at both ends?",
    options: ["Stack", "Queue", "Linked List", "Binary Search Tree"],
    correct: 0,
    category: "PSIPL"
  },
  {
    question: "You are writing a program to find the largest palindrome number made from the product of two 3-digit numbers. How would you approach this problem efficiently?",
    options: ["Check all possible products", "Generate potential palindromes and check for divisibility", "Iterate through products and check for palindrome property", "Focus on optimizing loops"],
    correct: 2,
    category: "PSIPL"
  },
  {
    question: "A program needs to find the factorial of a number. Which approach best balances efficiency and avoiding integer overflow?",
    options: ["Iterative approach", "Recursive approach with safeguards against large values", "Use a data type such as long long", "Check if the value is within a reasonable range"],
    correct: 1,
    category: "PSIPL"
  },
  {
    question: "What is the best way to determine if a string is a valid palindrome in C?",
    options: ["Compare characters from both ends using two pointers", "Convert to lowercase and reverse", "Use a stack to store characters", "Check each character individually"],
    correct: 0,
    category: "PSIPL"
  },
  {
    question: "Given a 2D array representing a maze, which algorithm would be most suitable for finding a path from the starting point to the end point?",
    options: ["Depth-First Search (DFS)", "Breadth-First Search (BFS)", "Dijkstra's Algorithm", "Bellman-Ford algorithm"],
    correct: 0,
    category: "PSIPL"
  },
  {
    question: "A program needs to simulate a deck of cards. Which data structure is most suitable to implement this?",
    options: ["Linked List", "Array", "Stack", "Queue"],
    correct: 1,
    category: "PSIPL"
  },
  {
    question: "How is a 3x3 matrix represented in memory for efficient processing in C?",
    options: ["1D array", "2D array", "Linked list", "Hash table"],
    correct: 1,
    category: "PSIPL"
  },
  {
    question: "How can you best check for buffer overflow vulnerability in a C program?",
    options: ["Use a debugger", "Employ a static analysis tool", "Implement input validation", "Use the `gets()` function"],
    correct: 2,
    category: "PSIPL"
  },
  {
    question: "What is the most efficient approach to implement a circular queue?",
    options: ["Using an array with indexing and modulo", "Using a linked list with tail pointer", "Using a doubly linked list", "Using a stack"],
    correct: 0,
    category: "PSIPL"
  },
  {
    question: "Which data structure is optimal for storing and retrieving key-value pairs quickly in C?",
    options: ["Linked list", "Array", "Hash table", "Tree"],
    correct: 2,
    category: "PSIPL"
  },
  {
    question: "Which file operation in C is best suited to copy the contents of one file to another?",
    options: ["`fopen`", "`fread` and `fwrite`", "`fgets` and `fputs`", "`fscanf` and `fprintf`"],
    correct: 1,
    category: "PSIPL"
  },
  {
    question: "Which method is most efficient to calculate the Fibonacci sequence for a large input value in C?",
    options: ["Recursive approach", "Iterative approach with an array", "Matrix exponentiation", "Using a hash table"],
    correct: 2,
    category: "PSIPL"
  },
  {
    question: "Given a C program that calculates the factorial of a user-inputted number, which of the following best describes the most efficient data structure to store intermediate factorials during calculation, to avoid redundant computations and reduce runtime?",
    options: ["Linked List", "Stack", "Queue", "Array"],
    correct: 1,
    category: "PSIPL"
  },
  {
    question: "A C program needs to implement a function to identify and count the occurrences of a specific substring within a large text file.  Which approach offers the best performance balance between simplicity and efficiency?",
    options: ["Using fgets and manual string comparison", "Employing a Trie data structure", "Utilizing a KMP algorithm", "Implementing a hash table for substring indexing"],
    correct: 2,
    category: "PSIPL"
  },
  {
    question: "A program needs to manage a collection of student records, including student ID, name, and GPA. Which data structure provides the most suitable way to efficiently search for student records by student ID, in a dynamically growing collection of students?",
    options: ["Array", "Linked List", "Binary Search Tree", "Hash Table"],
    correct: 3,
    category: "PSIPL"
  }
];

export default ProblemSolvingthroughImperativeProgrammingLabinCPSIPL1;
