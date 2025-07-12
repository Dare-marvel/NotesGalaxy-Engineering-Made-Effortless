const DistributedComputingDC2 = [
  {
    question: "Which technique is crucial for ensuring data consistency and atomicity across multiple nodes in a distributed system?",
    options: ["Data sharding", "Transactions", "Caching", "Replication"],
    correct: 1,
    category: "DC"
  },
  {
    question: "In the context of MapReduce, which step involves combining the intermediate results from multiple mappers?",
    options: ["Map", "Reduce", "Shuffle", "Sort"],
    correct: 1,
    category: "DC"
  },
  {
    question: "A distributed system experiencing high latency and slow response times is most likely suffering from issues related to:",
    options: ["Network bandwidth", "Data consistency", "Load balancing", "Scalability"],
    correct: 0,
    category: "DC"
  },
  {
    question: "Which principle is fundamental in ensuring data integrity and preventing unauthorized access in a distributed database?",
    options: ["Data replication", "Data consistency", "Data security", "Data integrity"],
    correct: 2,
    category: "DC"
  },
  {
    question: "A system that uses a single point of failure to control all access to resources is an example of:",
    options: ["Centralized system", "Decentralized system", "Distributed system", "Replicated system"],
    correct: 0,
    category: "DC"
  },
  {
    question: "Which problem arises when multiple replicas of a data item experience conflicting updates?",
    options: ["Replica consistency", "Data consistency", "Concurrency control", "Eventual consistency"],
    correct: 2,
    category: "DC"
  },
  {
    question: "In a peer-to-peer file sharing system, which method is commonly used to locate files?",
    options: ["Centralized directory", "Hierarchical structure", "Distributed hash table", "Sequential search"],
    correct: 2,
    category: "DC"
  },
  {
    question: "What is a primary challenge in implementing fault tolerance in distributed systems?",
    options: ["Scalability", "Consistency", "Correctness", "Handling failures"],
    correct: 3,
    category: "DC"
  },
  {
    question: "What is the key advantage of using a distributed cache compared to a single-server cache?",
    options: ["Reduced latency", "Higher capacity", "Improved consistency", "Increased security"],
    correct: 0,
    category: "DC"
  },
  {
    question: "Which technique is essential for efficient load balancing in a distributed system?",
    options: ["Network topology analysis", "Hash-based routing", "Algorithm selection", "Dynamic resource allocation"],
    correct: 3,
    category: "DC"
  },
  {
    question: "What is a major consideration when designing a fault-tolerant distributed system?",
    options: ["Availability", "Scalability", "Maintainability", "All of the above"],
    correct: 3,
    category: "DC"
  },
  {
    question: "Which distributed programming model uses message passing for communication between processes?",
    options: ["Shared memory", "Message queues", "Remote procedure calls", "Data streams"],
    correct: 1,
    category: "DC"
  },
  {
    question: "Which of these is a key aspect of achieving high availability in a distributed system?",
    options: ["Redundancy", "Replication", "Clustering", "All of the above"],
    correct: 3,
    category: "DC"
  },
  {
    question: "What is a critical step for ensuring data consistency across multiple replicas in a distributed system?",
    options: ["Synchronization", "Consistency protocols", "Transaction management", "All of the above"],
    correct: 3,
    category: "DC"
  },
  {
    question: "A design pattern that allows for efficient handling of operations on a large, potentially growing dataset in a distributed system is called?",
    options: ["Sharding", "Caching", "Replication", "Clustering"],
    correct: 0,
    category: "DC"
  },
  {
    question: "What is the major benefit of using a distributed ledger technology like blockchain?",
    options: ["Improved scalability", "Increased security", "Enhanced transparency", "All of the above"],
    correct: 3,
    category: "DC"
  },
  {
    question: "Which protocol is commonly used for remote procedure calls in distributed systems?",
    options: ["HTTP", "RPC", "TCP", "UDP"],
    correct: 1,
    category: "DC"
  },
  {
    question: "What is a key consideration when choosing a suitable distributed database system?",
    options: ["Data consistency needs", "Scalability requirements", "Fault tolerance", "All of the above"],
    correct: 3,
    category: "DC"
  },
  {
    question: "Which distributed algorithm is used to find the shortest path in a graph?",
    options: ["Dijkstra's", "Bellman-Ford", "Floyd-Warshall", "All of the above"],
    correct: 3,
    category: "DC"
  },
  {
    question: "What is a common problem in distributed systems where tasks may be repeated unnecessarily?",
    options: ["Data consistency", "Deadlock", "Starvation", "Redundant computation"],
    correct: 3,
    category: "DC"
  },
  {
    question: "What does CAP theorem refer to in the context of distributed systems?",
    options: ["Consistency, Availability, Partition tolerance", "Concurrency, Atomicity, Persistence", "Clustering, Aggregation, Partitioning", "Communication, Aggregation, Performance"],
    correct: 0,
    category: "DC"
  },
  {
    question: "Which technology allows multiple services to share a common pool of memory and resources in a distributed system?",
    options: ["RPC", "Message Queues", "Shared Memory", "Cloud Computing"],
    correct: 2,
    category: "DC"
  },
  {
    question: "Which consensus algorithm is known for its fault tolerance and efficiency in leader election, but can be complex to implement?",
    options: ["Paxos", "Raft", "Two-Phase Commit", "Lamport's Paxos"],
    correct: 0,
    category: "DC"
  },
  {
    question: "In a distributed system employing a replicated database, what technique minimizes the risk of data loss due to a node failure?",
    options: ["Gossip Protocol", "Two-Phase Commit", "Quorum System", "Vector Clocks"],
    correct: 2,
    category: "DC"
  },
  {
    question: "A system employing consistent hashing to distribute data across multiple servers needs to handle server failures.  How does consistent hashing mitigate this?",
    options: ["Re-allocates data to another server randomly", "Re-calculates hash keys for each object", "Moves data based on the current hash value", "Re-maps data to available servers using a consistent mapping function"],
    correct: 3,
    category: "DC"
  },
  {
    question: "Which approach is best suited for handling read-heavy operations in a distributed system with high availability?",
    options: ["Replication with eventual consistency", "Replication with strong consistency", "Master-slave replication", "Client-side caching"],
    correct: 0,
    category: "DC"
  },
  {
    question: "A distributed file system employing a lease-based approach for managing files. What is the crucial role of leases?",
    options: ["Ensure file locking", "Avoid data duplication", "Manage access timeouts", "Prevent concurrent access by multiple users"],
    correct: 2,
    category: "DC"
  },
  {
    question: "Which technique allows for efficient data aggregation across a large network of sensors by propagating data locally and only forwarding relevant information?",
    options: ["Bloom Filters", "Consistent Hashing", "Data Pipelines", "Gossip Protocol"],
    correct: 3,
    category: "DC"
  },
  {
    question: "In a distributed system handling transactions, the Two-Phase Commit protocol ensures atomicity across all participating nodes.  What crucial step guarantees atomicity?",
    options: ["Participant vote", "Coordinator decision", "Pre-commit phase", "Post-commit phase"],
    correct: 1,
    category: "DC"
  },
  {
    question: "What is the primary benefit of using a message queue in a distributed system?",
    options: ["Improved data consistency", "Reduced latency", "Decoupling of components", "Increased scalability"],
    correct: 2,
    category: "DC"
  },
  {
    question: "Which characteristic best describes a system using a quorum system to ensure data consistency?",
    options: ["Scalability", "Strong consistency", "High availability", "Fault tolerance"],
    correct: 1,
    category: "DC"
  },
  {
    question: "How does a distributed cache improve the performance of a web application?",
    options: ["By storing frequently accessed data in primary memory", "By reducing the load on the database server", "By distributing the load across multiple servers", "All of the above"],
    correct: 3,
    category: "DC"
  },
  {
    question: "Which concept is most closely associated with maintaining data consistency across geographically distributed copies of data?",
    options: ["Gossip Protocol", "Two-Phase Commit", "Vector Clocks", "Consistent Hashing"],
    correct: 2,
    category: "DC"
  },
  {
    question: "What is the key challenge in building a globally consistent system when dealing with network latency?",
    options: ["Scalability", "Data Integrity", "Availability", "Synchronization"],
    correct: 3,
    category: "DC"
  },
  {
    question: "What does a distributed lock manager primarily address?",
    options: ["Concurrency control", "Data consistency", "Resource allocation", "Transaction management"],
    correct: 0,
    category: "DC"
  },
  {
    question: "What is a major difference between MapReduce and Spark?",
    options: ["MapReduce is faster", "Spark utilizes in-memory computations", "Spark is less fault tolerant", "MapReduce is a distributed database system"],
    correct: 1,
    category: "DC"
  },
  {
    question: "What is the primary goal of a fault-tolerant distributed system?",
    options: ["High availability", "Improved performance", "Enhanced scalability", "Reduced latency"],
    correct: 0,
    category: "DC"
  },
  {
    question: "Which technique is used in distributed systems to prevent race conditions while updating shared resources?",
    options: ["Atomic operations", "Locking mechanisms", "Versioning", "All of the above"],
    correct: 3,
    category: "DC"
  },
  {
    question: "What aspect of distributed systems is most difficult to address when dealing with network partitions?",
    options: ["Scalability", "Consistency", "Fault Tolerance", "Security"],
    correct: 1,
    category: "DC"
  },
  {
    question: "Which algorithm ensures data consistency across multiple replicas in a distributed system, even with partial failures?",
    options: ["Paxos", "Raft", "Two-Phase Commit", "Lamport's Paxos"],
    correct: 0,
    category: "DC"
  },
  {
    question: "What fundamental concept is crucial for handling concurrent access to shared data in distributed environments?",
    options: ["Synchronization", "Redundancy", "Replication", "Clustering"],
    correct: 0,
    category: "DC"
  },
  {
    question: "What is a common challenge in implementing a distributed database system, particularly concerning data integrity?",
    options: ["Network partitions", "Data replication", "Concurrency control", "Data consistency"],
    correct: 3,
    category: "DC"
  },
  {
    question: "Which data structure is crucial in distributed systems for tracking the sequence of events across different nodes?",
    options: ["Vector clocks", "Lamport timestamps", "Quorum systems", "Consistent Hashing"],
    correct: 0,
    category: "DC"
  },
  {
    question: "A distributed system employing a quorum system must guarantee...",
    options: ["Read consistency", "Write consistency", "Data availability", "All of the above"],
    correct: 3,
    category: "DC"
  },
  {
    question: "What is a key characteristic of a scalable distributed system?",
    options: ["Adaptability to varying workloads", "Ease of maintenance", "Fault tolerance", "All of the above"],
    correct: 0,
    category: "DC"
  },
  {
    question: "How does a distributed system employ the concept of eventual consistency?",
    options: ["Ensuring immediate data synchronization across nodes", "Achieving data consistency over time", "Preventing data inconsistencies", "Guaranteeing strong consistency"],
    correct: 1,
    category: "DC"
  },
  {
    question: "In a distributed system using Paxos, which of the following ensures agreement on a proposed value across multiple nodes?",
    options: ["Client requests", "Majority vote", "Leader election process", "Consensus protocol"],
    correct: 3,
    category: "DC"
  },
  {
    question: "Which consistency model guarantees that all replicas see the same data in a distributed database, but allows for potentially stale reads?",
    options: ["Strong consistency", "Eventual consistency", "Linearizability", "Sequential consistency"],
    correct: 1,
    category: "DC"
  },
  {
    question: "A key challenge in designing a fault-tolerant distributed system is handling the failure of a node during a critical data transfer. Which technique is best suited for managing this?",
    options: ["Load balancing", "Data replication", "Quorum systems", "Virtual machines"],
    correct: 2,
    category: "DC"
  },
  {
    question: "Which algorithm is commonly used for leader election in a distributed system where nodes have varying resources and network connectivity?",
    options: ["Bully algorithm", "Ring algorithm", "Paxos algorithm", "Lamport's timestamps"],
    correct: 0,
    category: "DC"
  }
];

export default DistributedComputingDC2;
