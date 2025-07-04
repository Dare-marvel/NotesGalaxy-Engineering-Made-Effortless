const DesignAndAnalysisOfAlgorithmsDAA4 = [
  {
    question: "What is the time complexity of the Huffman coding algorithm for constructing an optimal prefix code?",
    options: ["O(n log n)", "O(n^2)", "O(n)", "O(log n)"],
    correct: 0,
    category: "DAA"
  },
  {
    question: "In a knapsack problem where you are given n items with weights and values and a knapsack with a maximum weight capacity, which approach is typically used to find the maximum total value that can be put in the knapsack?",
    options: ["Greedy approach", "Dynamic programming", "Linear search", "Binary search"],
    correct: 1,
    category: "DAA"
  },
  {
    question: "Which sorting algorithm guarantees O(n log n) time complexity in the worst case?",
    options: ["Insertion sort", "Bubble sort", "Merge sort", "Quick sort"],
    correct: 2,
    category: "DAA"
  },
  {
    question: "What is the most common use of a Trie data structure?",
    options: ["Finding shortest paths", "Implementing a stack", "Storing and searching for strings", "Representing graphs"],
    correct: 2,
    category: "DAA"
  },
  {
    question: "Which technique is crucial in designing efficient algorithms for problems involving overlapping subproblems?",
    options: ["Divide and conquer", "Dynamic programming", "Backtracking", "Greedy approach"],
    correct: 1,
    category: "DAA"
  },
  {
    question: "What is the primary application of the Rabin-Karp algorithm?",
    options: ["Sorting", "Graph traversal", "String matching", "Data compression"],
    correct: 2,
    category: "DAA"
  },
  {
    question: "What is the primary use of a binary search tree?",
    options: ["Implementing a hash table", "Storing and retrieving data efficiently", "Implementing a queue", "Representing a graph"],
    correct: 1,
    category: "DAA"
  },
  {
    question: "Which algorithm is best suited for finding the minimum spanning tree in a graph when there are edge weights?",
    options: ["Breadth-First Search", "Depth-First Search", "Kruskal's algorithm", "Topological Sort"],
    correct: 2,
    category: "DAA"
  },
  {
    question: "What is the typical application of a Radix sort?",
    options: ["Sorting integers", "Searching strings", "Finding shortest paths", "Solving linear equations"],
    correct: 0,
    category: "DAA"
  },
  {
    question: "Which algorithm efficiently finds the kth smallest element in an unsorted array?",
    options: ["Bubble Sort", "Insertion Sort", "Heap Sort", "QuickSelect"],
    correct: 3,
    category: "DAA"
  },
  {
    question: "In a graph, what does a topological sort determine?",
    options: ["Shortest paths", "Minimum spanning tree", "Cycle detection", "Order of vertices"],
    correct: 3,
    category: "DAA"
  },
  {
    question: "Which algorithm efficiently solves the assignment problem, maximizing the sum of values?",
    options: ["Bellman-Ford", "Dijkstra's", "Hungarian Algorithm", "Floyd-Warshall"],
    correct: 2,
    category: "DAA"
  },
  {
    question: "Which data structure uses a hash function to store and retrieve data in constant time (on average)?",
    options: ["Binary Search Tree", "Linked List", "Hash Table", "Priority Queue"],
    correct: 2,
    category: "DAA"
  },
  {
    question: "Which of the following best describes a key difference between greedy and dynamic programming approaches?",
    options: ["Greedy algorithms always find the optimal solution, while dynamic programming may not.", "Greedy algorithms make locally optimal choices, while dynamic programming considers the global optimal.", "Greedy algorithms are faster than dynamic programming for all problems.", "Greedy algorithms are used only for optimization problems, while dynamic programming can be used for optimization and other types."],
    correct: 1,
    category: "DAA"
  },
  {
    question: "In a graph with weighted edges, which algorithm is specifically designed for finding the shortest path between a single source node and all other nodes, taking into account edge weights?",
    options: ["Depth-First Search", "Breadth-First Search", "Bellman-Ford Algorithm", "Dijkstra's Algorithm"],
    correct: 3,
    category: "DAA"
  },
  {
    question: "What is the time complexity of the Floyd-Warshall algorithm for finding all-pairs shortest paths in a graph with |V| vertices?",
    options: ["O(V^2)", "O(V^3)", "O(V log V)", "O(V^2 log V)"],
    correct: 1,
    category: "DAA"
  },
  {
    question: "Given a set of tasks with start times and finish times, what algorithm efficiently determines the maximum number of compatible tasks that can be performed?",
    options: ["Merge Sort", "Heap Sort", "Selection Sort", "Activity Selection"],
    correct: 3,
    category: "DAA"
  },
  {
    question: "In the context of computational geometry, which algorithm is primarily used for determining whether a point lies inside or outside a polygon?",
    options: ["Graham Scan", "Convex Hull", "Point Location", "Voronoi Diagram"],
    correct: 2,
    category: "DAA"
  },
  {
    question: "Which data structure is most suitable for implementing a priority queue efficiently?",
    options: ["Linked List", "Array", "Binary Search Tree", "Binary Heap"],
    correct: 3,
    category: "DAA"
  },
  {
    question: "Which approach is most suitable for solving optimization problems with overlapping subproblems and optimal substructure?",
    options: ["Greedy Approach", "Divide and Conquer", "Dynamic Programming", "Backtracking"],
    correct: 2,
    category: "DAA"
  },
  {
    question: "What is the worst-case time complexity of quicksort on an array of n elements?",
    options: ["O(n)", "O(n log n)", "O(n^2)", "O(log n)"],
    correct: 2,
    category: "DAA"
  },
  {
    question: "In which scenario is a Randomized Algorithm likely to perform better than a deterministic one?",
    options: ["When the input is known to be sorted", "When dealing with deterministic input", "When solving problems that are inherently unpredictable", "When high accuracy is needed in every run"],
    correct: 2,
    category: "DAA"
  },
  {
    question: "What core principle does the Master Theorem help analyze?",
    options: ["Divide-and-conquer algorithms", "Greedy algorithms", "Dynamic programming algorithms", "Backtracking algorithms"],
    correct: 0,
    category: "DAA"
  },
  {
    question: "Which sorting algorithm typically uses a divide-and-conquer strategy to sort elements?",
    options: ["Insertion Sort", "Bubble Sort", "Merge Sort", "Heap Sort"],
    correct: 2,
    category: "DAA"
  },
  {
    question: "A problem exhibits optimal substructure if the optimal solution to the problem can be constructed from the optimal solutions of its subproblems.  Which algorithm design technique commonly leverages this characteristic?",
    options: ["Greedy Algorithm", "Divide and Conquer", "Dynamic Programming", "Backtracking"],
    correct: 2,
    category: "DAA"
  },
  {
    question: "Consider a graph problem involving finding the shortest paths in a graph with negative edge weights.  Which algorithm can handle this case, while Dijkstra's cannot?",
    options: ["Dijkstra's", "Bellman-Ford", "Floyd-Warshall", "A*"],
    correct: 1,
    category: "DAA"
  },
  {
    question: "What is the space complexity of Breadth-First Search (BFS) on a graph with V vertices and E edges?",
    options: ["O(V)", "O(E)", "O(V + E)", "O(V^2)"],
    correct: 2,
    category: "DAA"
  },
  {
    question: "What data structure is crucial for implementing a graph algorithm like Depth-First Search (DFS)?",
    options: ["Queue", "Stack", "Heap", "Hash Table"],
    correct: 1,
    category: "DAA"
  },
  {
    question: "Which algorithm is commonly used for finding strongly connected components in a directed graph?",
    options: ["Dijkstra's Algorithm", "Bellman-Ford Algorithm", "Kruskal's Algorithm", "Kosaraju's Algorithm"],
    correct: 3,
    category: "DAA"
  },
  {
    question: "In which scenario would a tree-based data structure, specifically a balanced binary search tree, be optimal for searching?",
    options: ["Searching a sorted array", "Searching a linked list", "Searching an unsorted array", "Searching a set of sorted data"],
    correct: 3,
    category: "DAA"
  },
  {
    question: "The knapsack problem is a classic example of what type of algorithmic problem?",
    options: ["Shortest path", "Graph coloring", "Sorting", "Dynamic programming"],
    correct: 3,
    category: "DAA"
  },
  {
    question: "Which algorithm is typically used to construct a minimum spanning tree from a weighted graph?",
    options: ["Dijkstra's Algorithm", "Bellman-Ford Algorithm", "Kruskal's Algorithm", "Prim's Algorithm"],
    correct: 3,
    category: "DAA"
  },
  {
    question: "What is a characteristic of a NP-Complete problem?",
    options: ["Can be solved in polynomial time", "Can't be solved in polynomial time", "Has a known polynomial-time algorithm", "Is equivalent in complexity to all other NP problems"],
    correct: 3,
    category: "DAA"
  },
  {
    question: "Which data structure is not suitable for implementing a stack?",
    options: ["Array", "Linked List", "Queue", "Binary Tree"],
    correct: 3,
    category: "DAA"
  },
  {
    question: "In a binary search tree, what is the best case time complexity for searching an element?",
    options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"],
    correct: 1,
    category: "DAA"
  },
  {
    question: "Which problem often involves breaking down a problem into smaller overlapping subproblems?",
    options: ["Traveling Salesperson Problem", "Merge Sort", "Activity Selection", "Knapsack Problem"],
    correct: 3,
    category: "DAA"
  },
  {
    question: "Which of the following graph traversal algorithms, when applied to a directed acyclic graph (DAG), can guarantee a topological sorting order?",
    options: ["Breadth-First Search (BFS)", "Depth-First Search (DFS)", "Dijkstra's algorithm", "Bellman-Ford algorithm"],
    correct: 1,
    category: "DAA"
  },
  {
    question: "Consider a problem where you need to find the shortest path between every pair of vertices in a weighted graph. Which algorithm would be most efficient for this problem?",
    options: ["Dijkstra's algorithm", "Bellman-Ford algorithm", "Floyd-Warshall algorithm", "Kruskal's algorithm"],
    correct: 2,
    category: "DAA"
  },
  {
    question: "In a dynamic programming approach to solve a problem, which aspect of the subproblem solutions needs to be stored and retrieved efficiently?",
    options: ["The subproblem values themselves", "The optimal solution to each subproblem", "The algorithm for solving the subproblem", "The input to each subproblem"],
    correct: 0,
    category: "DAA"
  },
  {
    question: "A divide-and-conquer algorithm solves a problem of size n by recursively solving subproblems of size n/2.  What is the time complexity of this algorithm?",
    options: ["O(n)", "O(n log n)", "O(n^2)", "O(log n)"],
    correct: 1,
    category: "DAA"
  },
  {
    question: "Which data structure is crucial for implementing a priority queue, enabling efficient retrieval of the maximum (or minimum) element?",
    options: ["Linked List", "Array", "Binary Heap", "Hash Table"],
    correct: 2,
    category: "DAA"
  },
  {
    question: "In the context of greedy algorithms, what is a crucial characteristic of the problem to ensure that a locally optimal choice leads to a globally optimal solution?",
    options: ["Optimal substructure", "Overlapping subproblems", "Greedy choice property", "Dynamic programming"],
    correct: 2,
    category: "DAA"
  },
  {
    question: "A knapsack problem with a capacity of 100 units and items with weights [20, 30, 40] and values [10, 25, 30] respectively, can be optimally solved using which method?",
    options: ["Breadth-First Search", "Depth-First Search", "Dynamic Programming", "Greedy Approach"],
    correct: 2,
    category: "DAA"
  },
  {
    question: "Which algorithm is best suited for finding the minimum spanning tree in a graph with n vertices and m edges where the edges have different weights?",
    options: ["Dijkstra's algorithm", "Bellman-Ford algorithm", "Kruskal's algorithm", "Prim's algorithm"],
    correct: 2,
    category: "DAA"
  },
  {
    question: "What is the time complexity of inserting a new node into a balanced binary search tree with n nodes?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correct: 1,
    category: "DAA"
  },
  {
    question: "Which sorting algorithm is known for its in-place nature and good performance on nearly sorted data?",
    options: ["Merge Sort", "Quick Sort", "Insertion Sort", "Heap Sort"],
    correct: 2,
    category: "DAA"
  },
  {
    question: "A hash function maps keys to indices in a hash table.  What is a desirable characteristic of a good hash function?",
    options: ["Uniform distribution", "Zero collisions", "Slow calculation speed", "Not related to the key values"],
    correct: 0,
    category: "DAA"
  },
  {
    question: "What is the typical time complexity of searching an element in a balanced binary search tree?",
    options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"],
    correct: 1,
    category: "DAA"
  },
  {
    question: "In a graph representing social networks, if you want to find influential users who have a high degree of connections, which centrality measure is most appropriate?",
    options: ["Closeness centrality", "Betweenness centrality", "Degree centrality", "Eigenvector centrality"],
    correct: 2,
    category: "DAA"
  },
  {
    question: "Which algorithm is best suited for finding the shortest path from a single source vertex to all other vertices in an unweighted graph?",
    options: ["Dijkstra's algorithm", "Bellman-Ford algorithm", "Floyd-Warshall algorithm", "Breadth-First Search"],
    correct: 3,
    category: "DAA"
  }
];

export default DesignAndAnalysisOfAlgorithmsDAA4;
