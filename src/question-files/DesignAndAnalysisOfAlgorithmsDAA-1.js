const DesignAndAnalysisOfAlgorithmsDAA1 = [
  {
    question: "Which sorting algorithm exhibits a time complexity of O(n log n) in the average and worst cases, and is known for its stability?",
    options: ["Bubble Sort", "Insertion Sort", "Merge Sort", "Quick Sort"],
    correct: 2,
    category: "DAA"
  },
  {
    question: "What is the time complexity of finding the minimum element in a Binary Search Tree (BST) containing n nodes?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correct: 2,
    category: "DAA"
  },
  {
    question: "In a graph, a path from a vertex 'u' to a vertex 'v' is a sequence of vertices starting from 'u' and ending at 'v' where each vertex in the sequence is connected to the next vertex. What is a shortest path algorithm for weighted graphs?",
    options: ["Breadth-First Search (BFS)", "Depth-First Search (DFS)", "Dijkstra's Algorithm", "Bellman-Ford Algorithm"],
    correct: 3,
    category: "DAA"
  },
  {
    question: "A greedy algorithm always makes the locally optimal choice at each step. Which problem is typically solved using a greedy approach?",
    options: ["Finding the shortest path in a graph", "Knapsack problem", "Finding the optimal assignment of tasks", "Finding the maximum flow in a network"],
    correct: 1,
    category: "DAA"
  },
  {
    question: "What is the space complexity of a recursive implementation of Merge Sort?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correct: 3,
    category: "DAA"
  },
  {
    question: "What is the time complexity of topological sort on a Directed Acyclic Graph (DAG) with n vertices and m edges?",
    options: ["O(m)", "O(n + m)", "O(n^2)", "O(m log n)"],
    correct: 1,
    category: "DAA"
  },
  {
    question: "Which data structure is commonly used for implementing a priority queue?",
    options: ["Linked List", "Array", "Binary Search Tree", "Heap"],
    correct: 3,
    category: "DAA"
  },
  {
    question: "What does dynamic programming aim to avoid?",
    options: ["Redundant calculations", "Exponential time complexity", "Brute-force approaches", "All of the above"],
    correct: 0,
    category: "DAA"
  },
  {
    question: "Which technique is used to analyze the average-case performance of algorithms?",
    options: ["Worst-case analysis", "Best-case analysis", "Amortized analysis", "Probability theory"],
    correct: 3,
    category: "DAA"
  },
  {
    question: "In Divide and Conquer algorithm, what are the three steps typically involved?",
    options: ["Divide, Conquer, and Combine", "Divide, Conquer, and Repeat", "Divide, Analyze, and Combine", "Divide, Solve, and Combine"],
    correct: 0,
    category: "DAA"
  },
  {
    question: "What does the term 'NP-complete' describe?",
    options: ["Problems that are easy to solve", "Problems that are hard to solve", "Problems that are known to be solvable in polynomial time", "Problems that are solvable in polynomial time if a solution to an NP-complete problem can be found"],
    correct: 3,
    category: "DAA"
  },
  {
    question: "Which algorithm is used to find the minimum spanning tree in a weighted graph?",
    options: ["Dijkstra's Algorithm", "Bellman-Ford Algorithm", "Kruskal's Algorithm", "Prim's Algorithm"],
    correct: 2,
    category: "DAA"
  },
  {
    question: "What is the key idea behind the backtracking algorithm?",
    options: ["Solve the problem by exploring all possible solutions", "Use recursion to explore solution space", "Systematically explore possible solutions, and abandon branches that are not likely to lead to a solution", "Focus on a specific solution path, and improve it through successive approximations"],
    correct: 2,
    category: "DAA"
  },
  {
    question: "Which sorting algorithm is known for its in-place nature and good performance on nearly sorted datasets?",
    options: ["Heap Sort", "Merge Sort", "Insertion Sort", "Quick Sort"],
    correct: 2,
    category: "DAA"
  },
  {
    question: "What is the time complexity of searching an element in a sorted array using binary search?",
    options: ["O(n)", "O(n log n)", "O(log n)", "O(1)"],
    correct: 2,
    category: "DAA"
  },
  {
    question: "How many comparisons are required to sort an array of size n using Insertion Sort in the worst-case scenario?",
    options: ["n(n-1)/2", "n log n", "n", "n^2"],
    correct: 0,
    category: "DAA"
  },
  {
    question: "What is the purpose of a hashing function in a hash table?",
    options: ["To sort the elements", "To distribute the elements uniformly across the hash table", "To identify duplicate elements", "To search for a specific element using a binary search"],
    correct: 1,
    category: "DAA"
  },
  {
    question: "In the context of graphs, what does a cycle represent?",
    options: ["A sequence of edges that connects a node to itself", "A sequence of edges that connects two nodes", "A sequence of edges that connects multiple nodes without repeating nodes", "A sequence of edges that connects two nodes without repeating nodes"],
    correct: 0,
    category: "DAA"
  },
  {
    question: "What is a key difference between a stack and a queue?",
    options: ["Stacks use FIFO while queues use LIFO", "Stacks use LIFO while queues use FIFO", "Stacks are dynamic while queues are static", "Stacks store data in order while queues don't"],
    correct: 1,
    category: "DAA"
  },
  {
    question: "Which algorithm is particularly efficient for finding the shortest paths in unweighted graphs?",
    options: ["Dijkstra's algorithm", "Bellman-Ford algorithm", "Floyd-Warshall algorithm", "Breadth-First Search"],
    correct: 3,
    category: "DAA"
  },
  {
    question: "What is the essential characteristic of a dynamic programming algorithm?",
    options: ["It always uses a divide and conquer approach", "It uses recursion with memoization or tabulation", "It iterates through all possible solutions", "It employs a greedy approach"],
    correct: 1,
    category: "DAA"
  },
  {
    question: "What does an algorithm's time complexity represent?",
    options: ["The amount of memory the algorithm uses", "The amount of time it takes for the algorithm to run as a function of the input size", "The number of steps the algorithm takes", "The complexity of the algorithm's design"],
    correct: 1,
    category: "DAA"
  },
  {
    question: "What is the role of a Huffman tree in data compression?",
    options: ["To represent data using variable-length codes", "To sort data alphabetically", "To encrypt data", "To index data"],
    correct: 0,
    category: "DAA"
  },
  {
    question: "Which concept allows us to determine the maximum possible time an algorithm will take to complete regardless of the input?",
    options: ["Big O notation", "Big Theta notation", "Big Omega notation", "Amortized analysis"],
    correct: 0,
    category: "DAA"
  },
  {
    question: "Consider a graph representing social connections. Each node represents a person, and an edge between two nodes indicates friendship.  Which algorithm, optimized for finding the shortest path between two users in such a social network, would be most suitable, assuming the weights on the edges represent the number of mutual friends?",
    options: ["Breadth-First Search (BFS)", "Depth-First Search (DFS)", "Dijkstra's Algorithm", "Bellman-Ford Algorithm"],
    correct: 2,
    category: "DAA"
  },
  {
    question: "You're designing an algorithm for scheduling tasks with dependencies.  Which approach is most suitable for finding the order in which tasks can be completed to minimize the overall completion time?",
    options: ["Greedy approach", "Dynamic programming", "Backtracking", "Divide and conquer"],
    correct: 1,
    category: "DAA"
  },
  {
    question: "A company needs to find the most efficient way to distribute products from multiple warehouses to multiple retail stores.  Which algorithm best suits this logistics optimization problem?",
    options: ["Travelling Salesperson Problem (TSP) approximation algorithms", "Minimum Spanning Tree (MST) algorithms", "Maximum Flow algorithms", "Knapsack problem"],
    correct: 0,
    category: "DAA"
  },
  {
    question: "Which data structure, when used with a suitable algorithm, guarantees logarithmic time complexity for search, insertion, and deletion operations, in the worst case?",
    options: ["Linked list", "Array", "Binary search tree", "Hash table"],
    correct: 2,
    category: "DAA"
  },
  {
    question: "In a scheduling problem with precedence constraints, what algorithm provides a schedule that minimizes the makespan, taking into account the dependencies between tasks?",
    options: ["Linear programming", "Greedy approach", "Critical Path Method (CPM)", "Dynamic programming"],
    correct: 2,
    category: "DAA"
  },
  {
    question: "An online retailer wants to recommend products to customers based on their past purchases and browsing history. Which algorithm would be best suited for this task?",
    options: ["Greedy approach", "Clustering algorithms", "Apriori algorithm", "PageRank algorithm"],
    correct: 2,
    category: "DAA"
  },
  {
    question: "Which algorithm is commonly used to solve the activity selection problem, where you need to select non-overlapping activities?",
    options: ["Merge sort", "Quick sort", "Heap sort", "Greedy approach"],
    correct: 3,
    category: "DAA"
  },
  {
    question: "What is the time complexity of finding the maximum and minimum element in an unsorted array using a single pass?",
    options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
    correct: 0,
    category: "DAA"
  },
  {
    question: "Which sorting algorithm is known for its in-place nature and adaptive property, often performing well in almost sorted data sets?",
    options: ["Merge sort", "Heap sort", "Quick sort", "Insertion sort"],
    correct: 3,
    category: "DAA"
  },
  {
    question: "In a computational geometry problem involving finding the convex hull of a set of points, which algorithm would be most efficient and accurate?",
    options: ["Graham Scan", "QuickHull", "Gift Wrapping", "Convex Hull algorithm"],
    correct: 0,
    category: "DAA"
  },
  {
    question: "The runtime of an algorithm is observed to grow proportionally to n^2. What is the Big O notation for this algorithm?",
    options: ["O(log n)", "O(n)", "O(n^2)", "O(n!)"],
    correct: 2,
    category: "DAA"
  },
  {
    question: "What is a key difference between greedy algorithms and dynamic programming?",
    options: ["Greedy algorithms make optimal choices locally, while dynamic programming considers the optimal solution for all subproblems", "Greedy algorithms solve problems in a bottom-up manner, while dynamic programming solves them in a top-down manner", "Greedy algorithms are often more efficient than dynamic programming", "Greedy algorithms always find optimal solutions, whereas dynamic programming sometimes finds suboptimal solutions"],
    correct: 0,
    category: "DAA"
  },
  {
    question: "What is the complexity of finding connected components in a graph using Depth-First Search (DFS)?",
    options: ["O(V + E)", "O(V^2)", "O(V log V)", "O(E log E)"],
    correct: 0,
    category: "DAA"
  },
  {
    question: "Consider a system to manage customer orders in real-time.  Which data structure would be best for efficient retrieval of orders based on timestamps?",
    options: ["Hash Table", "Binary Search Tree", "Heap", "Linked List"],
    correct: 2,
    category: "DAA"
  },
  {
    question: "Which algorithm is crucial for finding the shortest paths in a weighted graph when negative edge weights might exist but no negative cycles are present?",
    options: ["Dijkstra's Algorithm", "Bellman-Ford Algorithm", "Floyd-Warshall Algorithm", "A* Search"],
    correct: 1,
    category: "DAA"
  },
  {
    question: "In a genetic algorithm used for optimization, what is the role of crossover?",
    options: ["To evaluate fitness of individuals", "To generate new candidate solutions from existing ones", "To mutate existing solutions", "To select the best solutions"],
    correct: 1,
    category: "DAA"
  },
  {
    question: "Which graph traversal technique is most efficient for finding all connected components in a graph?",
    options: ["Breadth-First Search", "Depth-First Search", "Dijkstra's Algorithm", "Bellman-Ford Algorithm"],
    correct: 1,
    category: "DAA"
  },
  {
    question: "What is a key consideration when choosing between a hash table and a binary search tree for a particular application?",
    options: ["Expected search time complexity", "Ease of implementation", "Memory requirements", "All of the above"],
    correct: 3,
    category: "DAA"
  },
  {
    question: "In what scenario would a branch and bound algorithm be particularly effective compared to other optimization techniques?",
    options: ["Problems with many local optima", "Problems with large input sizes but a small search space", "Problems with small input sizes and a large search space", "Problems with constraints but no objective function"],
    correct: 0,
    category: "DAA"
  },
  {
    question: "What is the time complexity of the Merge sort algorithm?",
    options: ["O(n log n)", "O(n^2)", "O(n)", "O(log n)"],
    correct: 0,
    category: "DAA"
  },
  {
    question: "Which algorithm is used for efficiently finding a set of disjoint subsets (e.g., islands) in an undirected graph?",
    options: ["Union-Find", "Depth-First Search", "Breadth-First Search", "Dijkstra's Algorithm"],
    correct: 0,
    category: "DAA"
  },
  {
    question: "What does a Huffman tree represent in the context of data compression?",
    options: ["A binary search tree", "An optimal prefix code", "A complete binary tree", "A weighted graph"],
    correct: 1,
    category: "DAA"
  },
  {
    question: "What is the main advantage of using divide-and-conquer algorithms?",
    options: ["Reduction of complexity", "Improved resource utilization", "Simpler code", "All of the above"],
    correct: 0,
    category: "DAA"
  },
  {
    question: "Given a graph with weighted edges, where weights represent time taken to travel between vertices, which algorithm would be most suitable for finding the shortest path from a source vertex to all other vertices if the graph has negative cycles?",
    options: ["Dijkstra's algorithm", "Bellman-Ford algorithm", "Floyd-Warshall algorithm", "Kruskal's algorithm"],
    correct: 1,
    category: "DAA"
  },
  {
    question: "Which approach is most appropriate for solving a problem that involves finding the maximum profit from a set of jobs with given start and end times, where each job can be performed only once?",
    options: ["Greedy approach", "Dynamic programming", "Divide and conquer", "Backtracking"],
    correct: 0,
    category: "DAA"
  },
  {
    question: "What is the time complexity of the merge sort algorithm when implemented recursively on an array of size n?",
    options: ["O(n log n)", "O(n^2)", "O(n)", "O(log n)"],
    correct: 0,
    category: "DAA"
  }
];

export default DesignAndAnalysisOfAlgorithmsDAA1;
