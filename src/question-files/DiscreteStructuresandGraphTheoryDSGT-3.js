const DiscreteStructuresandGraphTheoryDSGT3 = [
  {
    question: "Which graph traversal algorithm guarantees visiting all nodes in a graph, even if there are cycles, but may not necessarily visit them in a specific order?",
    options: ["Breadth-First Search", "Depth-First Search", "Dijkstra's Algorithm", "Bellman-Ford Algorithm"],
    correct: 1,
    category: "DSGT"
  },
  {
    question: "In a formal language with alphabet {a, b}, which language is represented by the regular expression (a|b)*ab?",
    options: ["All strings containing at least one 'a' and one 'b'", "All strings ending in 'ab'", "All strings containing exactly two characters", "All strings starting with 'a' and ending in 'b'"],
    correct: 1,
    category: "DSGT"
  },
  {
    question: "A topological sort is possible for a directed acyclic graph (DAG) if and only if",
    options: ["The graph is strongly connected", "The graph contains no cycles", "The graph is complete", "The graph is connected"],
    correct: 1,
    category: "DSGT"
  },
  {
    question: "The recurrence relation T(n) = 2T(n/2) + n describes which type of algorithm?",
    options: ["Linear", "Logarithmic", "Quadratic", "Exponential"],
    correct: 0,
    category: "DSGT"
  },
  {
    question: "Which data structure is typically used to implement a priority queue efficiently?",
    options: ["Linked List", "Array", "Binary Search Tree", "Heap"],
    correct: 3,
    category: "DSGT"
  },
  {
    question: "In a relational database, what constraint ensures that a foreign key value in a table always refers to an existing primary key value in another table?",
    options: ["Uniqueness", "Integrity", "Referential Integrity", "Normalization"],
    correct: 2,
    category: "DSGT"
  },
  {
    question: "For a graph G with 10 vertices, what is the minimum number of edges required to guarantee connectivity?",
    options: ["9", "10", "45", "5"],
    correct: 0,
    category: "DSGT"
  },
  {
    question: "How many different binary search trees can be constructed from 3 distinct keys?",
    options: ["3", "5", "6", "8"],
    correct: 1,
    category: "DSGT"
  },
  {
    question: "A key aspect of a Hash Table is?",
    options: ["Binary Search", "Balanced Tree", "Hash Function", "Linear Search"],
    correct: 2,
    category: "DSGT"
  },
  {
    question: "What is the time complexity of finding the shortest path in a graph with positive edge weights using Dijkstra's algorithm?",
    options: ["O(E log V)", "O(V^2)", "O(E + V log V)", "O(V^3)"],
    correct: 2,
    category: "DSGT"
  },
  {
    question: "In a context-free grammar, what is a non-terminal symbol?",
    options: ["A terminal symbol that does not produce other symbols", "A symbol that can be replaced by a rule.", "A symbol that cannot be replaced by a rule.", "A special symbol used to signal the end of a string."],
    correct: 1,
    category: "DSGT"
  },
  {
    question: "What does a Minimum Spanning Tree (MST) do?",
    options: ["Finds the longest possible path between vertices in a graph.", "Connects all vertices with the shortest possible total edge weight.", "Finds all possible cycles in a graph.", "Finds the shortest path from one vertex to all other vertices."],
    correct: 1,
    category: "DSGT"
  },
  {
    question: "Which logic gate implements the exclusive OR (XOR) operation?",
    options: ["AND", "OR", "NAND", "XOR"],
    correct: 3,
    category: "DSGT"
  },
  {
    question: "What is the time complexity of inserting an element into a balanced binary search tree?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correct: 1,
    category: "DSGT"
  },
  {
    question: "Which sorting algorithm is often the fastest in practice, though can have a worst-case time complexity?",
    options: ["Merge Sort", "Insertion Sort", "Quick Sort", "Heap Sort"],
    correct: 2,
    category: "DSGT"
  },
  {
    question: "A complete bipartite graph K_{m, n} has how many edges?",
    options: ["m + n", "mn", "m*n/2", "m + n / 2"],
    correct: 1,
    category: "DSGT"
  },
  {
    question: "What is a key difference between a queue and a stack?",
    options: ["Queues use FIFO, stacks use LIFO.", "Queues are implemented using linked lists, stacks using arrays.", "Queues have higher memory overhead than stacks.", "Stacks are recursive, queues are iterative."],
    correct: 0,
    category: "DSGT"
  },
  {
    question: "What is the order of a graph with 100 vertices and 4950 edges?",
    options: ["100", "4950", "99", "101"],
    correct: 0,
    category: "DSGT"
  },
  {
    question: "A weighted graph G has vertices {A, B, C, D} and edges with weights: AB=3, BC=2, CD=5, DA=4.  What is the weight of the Eulerian circuit using the Fleury's Algorithm if starting at vertex A?",
    options: ["14", "17", "19", "20"],
    correct: 1,
    category: "DSGT"
  },
  {
    question: "Consider a directed acyclic graph (DAG) with vertices representing tasks and edges representing dependencies.  If the DAG has 6 vertices, what is the minimum number of vertices that must have an in-degree of 0?",
    options: ["1", "2", "3", "6"],
    correct: 3,
    category: "DSGT"
  },
  {
    question: "Which of the following is NOT a valid characteristic of a strongly connected graph?",
    options: ["Every vertex is reachable from every other vertex", "There exists a path between any two vertices", "Has a cycle", "No vertex is an isolated node"],
    correct: 0,
    category: "DSGT"
  },
  {
    question: "In a complete graph K5, how many edges are there?",
    options: ["5", "10", "20", "15"],
    correct: 1,
    category: "DSGT"
  },
  {
    question: "A binary tree has 8 leaf nodes.  What is the minimum number of internal nodes in the tree?",
    options: ["7", "6", "5", "8"],
    correct: 0,
    category: "DSGT"
  },
  {
    question: "A graph with 11 vertices has 45 edges.  What is the type of graph based on this information?",
    options: ["Complete graph", "Bipartite graph", "Regular graph", "Planar graph"],
    correct: 0,
    category: "DSGT"
  },
  {
    question: "Which algorithm is most efficient to find the shortest paths between all pairs of vertices in a weighted graph?",
    options: ["Dijkstra's", "Bellman-Ford", "Floyd-Warshall", "Breadth-First Search"],
    correct: 2,
    category: "DSGT"
  },
  {
    question: "How many different spanning trees are there in a complete graph K4?",
    options: ["16", "8", "12", "9"],
    correct: 1,
    category: "DSGT"
  },
  {
    question: "In a weighted graph, which spanning tree algorithm minimizes the total weight of the edges?",
    options: ["Kruskal's", "Dijkstra's", "Bellman-Ford", "Prim's"],
    correct: 0,
    category: "DSGT"
  },
  {
    question: "What is the chromatic number of a complete graph Kn where n >= 2?",
    options: ["1", "2", "n", "n+1"],
    correct: 2,
    category: "DSGT"
  },
  {
    question: "A graph with all vertices having the same degree is called a/an?",
    options: ["Regular graph", "Complete graph", "Bipartite graph", "Planar graph"],
    correct: 0,
    category: "DSGT"
  },
  {
    question: "Which of these is NOT a basic data structure for representing graphs?",
    options: ["Adjacency matrix", "Adjacency list", "Binary search tree", "Incidence matrix"],
    correct: 2,
    category: "DSGT"
  },
  {
    question: "A network flow problem seeks to find a maximum flow in a network represented by a directed graph.  What is a key concept in determining the max flow?",
    options: ["Min-cut theorem", "Maximum matching", "Spanning trees", "Greedy approach"],
    correct: 0,
    category: "DSGT"
  },
  {
    question: "Determine the time complexity of Depth First Search (DFS) in an adjacency list representation of a graph.",
    options: ["O(V)", "O(V+E)", "O(V^2)", "O(E^2)"],
    correct: 1,
    category: "DSGT"
  },
  {
    question: "In propositional logic, what does (p → q) ∧ (q → r) imply?",
    options: ["p \u2192 r", "p \u2194 r", "\u00acp \u2192 \u00acr", "p \u2228 r"],
    correct: 0,
    category: "DSGT"
  },
  {
    question: "Which concept is fundamental to finite state machines?",
    options: ["Recurrence relations", "Boolean algebra", "State transitions", "Graph coloring"],
    correct: 2,
    category: "DSGT"
  },
  {
    question: "Find the number of Hamiltonian cycles in a complete graph K5.",
    options: ["20", "30", "60", "120"],
    correct: 2,
    category: "DSGT"
  },
  {
    question: "What is the base case for the recursive definition of a Fibonacci sequence?",
    options: ["F(0) = 0, F(1) = 1", "F(1) = 1", "F(2) = 1", "F(0) = 1, F(1) = 1"],
    correct: 0,
    category: "DSGT"
  },
  {
    question: "Given a set of relations {R, S}, what does the relational algebra operation R ∩ S represent?",
    options: ["Union of R and S", "Intersection of R and S", "Difference of R and S", "Cartesian product of R and S"],
    correct: 1,
    category: "DSGT"
  },
  {
    question: "Which algorithm is commonly used to detect cycles in a directed graph?",
    options: ["Kruskal's", "Dijkstra's", "Topological sort", "Prim's"],
    correct: 2,
    category: "DSGT"
  },
  {
    question: "What is the complexity of determining if a given graph is bipartite?",
    options: ["O(V)", "O(V+E)", "O(V^2)", "O(E^2)"],
    correct: 1,
    category: "DSGT"
  },
  {
    question: "In a context-free grammar, what represents the start symbol?",
    options: ["First symbol in the production rules", "Symbol at the root of the parse tree", "Terminal symbol", "Non-terminal symbol"],
    correct: 1,
    category: "DSGT"
  },
  {
    question: "What is the maximum number of edges in a connected bipartite graph with 10 vertices?",
    options: ["40", "45", "20", "25"],
    correct: 1,
    category: "DSGT"
  },
  {
    question: "In a graph, what does a vertex with an in-degree of zero represent in a directed acyclic graph (DAG) problem?",
    options: ["Start vertex", "End vertex", "Intermediate vertex", "Independent vertex"],
    correct: 0,
    category: "DSGT"
  },
  {
    question: "A social network has 100 users.  Each user is connected to exactly 5 other users.  What is the minimum number of connected components in the graph representing this network?",
    options: ["1", "5", "100", "20"],
    correct: 0,
    category: "DSGT"
  },
  {
    question: "Given a weighted graph with edges representing flight routes and weights representing flight times, how can Dijkstra's algorithm be applied to find the shortest route from one airport to all other airports?",
    options: ["By repeatedly visiting the edge with the smallest weight.", "By considering each edge's weight along a path, without consideration of intermediary nodes", "By initializing the distances to all other airports to zero", "By initializing the distances to all other airports to infinity and using a priority queue"],
    correct: 3,
    category: "DSGT"
  },
  {
    question: "Which of these statements is NOT a property of a complete graph?",
    options: ["Every vertex is connected to every other vertex", "Each edge has a positive weight", "The graph has maximum possible edges", "A complete graph with n vertices has n(n-1)/2 edges"],
    correct: 1,
    category: "DSGT"
  },
  {
    question: "In a binary search tree, what is the time complexity of searching for a specific value, assuming the tree is balanced?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    correct: 1,
    category: "DSGT"
  },
  {
    question: "Which traversal method is guaranteed to visit all nodes in a graph, even if cycles exist, without revisiting edges?",
    options: ["Breadth-First Search", "Depth-First Search", "Dijkstra's Algorithm", "Bellman-Ford Algorithm"],
    correct: 0,
    category: "DSGT"
  },
  {
    question: "A graph with n vertices has a minimum spanning tree with edges summing up to 1000. What is the maximum number of edges in the graph?",
    options: ["n-1", "1000", "n", "n(n-1)/2"],
    correct: 0,
    category: "DSGT"
  },
  {
    question: "Which algorithm finds the shortest path between all pairs of vertices in a graph, even with negative edge weights but without negative cycles?",
    options: ["Dijkstra's algorithm", "Bellman-Ford algorithm", "Floyd-Warshall algorithm", "Breadth-First Search"],
    correct: 2,
    category: "DSGT"
  },
  {
    question: "What is the chromatic number of a complete graph with 4 vertices?",
    options: ["1", "2", "3", "4"],
    correct: 3,
    category: "DSGT"
  }
];

export default DiscreteStructuresandGraphTheoryDSGT3;
