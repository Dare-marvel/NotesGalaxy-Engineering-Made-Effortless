const DistributedComputingDC3 = [
  {
    question: "Consider a distributed file system.  Which approach would be most effective in minimizing the impact of a single disk failure on a node?",
    options: ["Redundant arrays of independent disks (RAID)", "Data striping", "Data replication", "File system caching"],
    correct: 2,
    category: "DC"
  },
  {
    question: "In a MapReduce framework, which component is responsible for grouping and aggregating data from intermediate results?",
    options: ["Reducer", "Mapper", "Combiner", "Data sorter"],
    correct: 0,
    category: "DC"
  },
  {
    question: "What is a major drawback of using a centralized approach for managing a distributed system?",
    options: ["Scalability", "Fault tolerance", "Security", "Performance"],
    correct: 0,
    category: "DC"
  },
  {
    question: "Which technique is critical for achieving high availability in a distributed system?",
    options: ["Load balancing", "Data encryption", "Process isolation", "Concurrency control"],
    correct: 0,
    category: "DC"
  },
  {
    question: "What is the primary goal of a consensus protocol in a distributed system?",
    options: ["Determining the leader node", "Maintaining data consistency", "Managing network traffic", "Ensuring efficient resource allocation"],
    correct: 1,
    category: "DC"
  },
  {
    question: "How does gossip protocols differ from flooding protocols in fault tolerance?",
    options: ["Gossip is scalable, flooding is not", "Flooding can lead to redundancy, gossip is selective", "Gossip uses a single source, flooding is not", "Flooding is faster than gossip"],
    correct: 1,
    category: "DC"
  },
  {
    question: "Which concept is essential for ensuring data consistency in a distributed system handling concurrent updates?",
    options: ["Transactions", "Timestamps", "Caching", "Replication"],
    correct: 0,
    category: "DC"
  },
  {
    question: "In a distributed cache, what is the typical strategy for managing cache misses?",
    options: ["Load balancing", "Data replication", "Eviction policies", "Optimistic concurrency"],
    correct: 2,
    category: "DC"
  },
  {
    question: "Which characteristic is crucial for a distributed system to be resilient to node failures?",
    options: ["Centralized control", "High availability", "Strong consistency", "Low latency"],
    correct: 1,
    category: "DC"
  },
  {
    question: "Which data structure is commonly used for representing distributed system topology?",
    options: ["B-tree", "Hash table", "Graph", "Trie"],
    correct: 2,
    category: "DC"
  },
  {
    question: "What is a key advantage of using a distributed database compared to a centralized one?",
    options: ["Lower cost of maintenance", "Higher transaction throughput", "Enhanced fault tolerance", "Simplified data security"],
    correct: 2,
    category: "DC"
  },
  {
    question: "How does the use of virtual machines improve the deployment of distributed systems?",
    options: ["Faster execution times", "Reduced maintenance", "Increased resource utilization", "Enhanced security"],
    correct: 2,
    category: "DC"
  },
  {
    question: "What issue is a distributed coordination service designed to address?",
    options: ["Performance", "Failure recovery", "Shared resource access", "Network fragmentation"],
    correct: 2,
    category: "DC"
  },
  {
    question: "Which concept is crucial for handling concurrent access to shared resources in a distributed system?",
    options: ["Locking", "Caching", "Data replication", "Load balancing"],
    correct: 0,
    category: "DC"
  },
  {
    question: "In a distributed system employing message passing, what component is critical for guaranteeing reliable delivery?",
    options: ["Network router", "Message queue", "Event dispatcher", "Process scheduler"],
    correct: 1,
    category: "DC"
  },
  {
    question: "Which approach is most common for handling large-scale data analysis tasks in distributed systems?",
    options: ["Batch processing", "Stream processing", "Real-time processing", "Hybrid processing"],
    correct: 0,
    category: "DC"
  },
  {
    question: "Which tradeoff is often present in designing highly available distributed systems?",
    options: ["Cost vs. performance", "Consistency vs. availability", "Scalability vs. complexity", "Security vs. flexibility"],
    correct: 1,
    category: "DC"
  },
  {
    question: "What is a key characteristic of a micro-service architecture compared to a monolith?",
    options: ["Lower latency", "Simplified deployment", "Enhanced fault tolerance", "Reduced development time"],
    correct: 2,
    category: "DC"
  },
  {
    question: "Which algorithm is commonly used to calculate the shortest path in a distributed graph?",
    options: ["Dijkstra's algorithm", "Bellman-Ford algorithm", "Floyd-Warshall algorithm", "A* search algorithm"],
    correct: 0,
    category: "DC"
  },
  {
    question: "Which concept is crucial for preventing cascading failures in a distributed system?",
    options: ["Circuit breakers", "Load balancing", "Data replication", "Transactions"],
    correct: 0,
    category: "DC"
  },
  {
    question: "Which of the following is NOT a typical characteristic of a fault-tolerant distributed system?",
    options: ["High availability", "Scalability", "Robustness to failures", "Centralized control"],
    correct: 3,
    category: "DC"
  },
  {
    question: "In a MapReduce framework, which phase involves grouping and aggregating intermediate results?",
    options: ["Map phase", "Reduce phase", "Shuffle phase", "Combine phase"],
    correct: 1,
    category: "DC"
  },
  {
    question: "A distributed system using Paxos for consensus often faces challenges with:",
    options: ["Load balancing", "Message delivery", "Communication latency", "Concurrency control"],
    correct: 2,
    category: "DC"
  },
  {
    question: "Which algorithm is crucial for maintaining consistency across multiple replicated data stores in a distributed database?",
    options: ["Paxos", "Two-phase commit", "Chord", "Gossip"],
    correct: 1,
    category: "DC"
  },
  {
    question: "What is a primary concern when designing a distributed caching system for a large-scale e-commerce application?",
    options: ["Data consistency", "Scalability", "Cache invalidation strategies", "All of the above"],
    correct: 3,
    category: "DC"
  },
  {
    question: "Which approach is best suited for achieving high availability in a microservices architecture?",
    options: ["Database replication", "Load balancing", "Redundant servers", "All of the above"],
    correct: 3,
    category: "DC"
  },
  {
    question: "In a distributed file system, what is the key challenge in managing metadata across nodes?",
    options: ["Consistency maintenance", "Scalability of metadata", "Data replication", "Data integrity"],
    correct: 1,
    category: "DC"
  },
  {
    question: "Which technique helps minimize the impact of network partitions in a distributed system?",
    options: ["Gossip protocol", "Paxos", "Two-phase commit", "Consistent hashing"],
    correct: 0,
    category: "DC"
  },
  {
    question: "What crucial aspect does a quorum system address in distributed consensus?",
    options: ["Conflict resolution", "Data consistency", "Node synchronization", "Majority agreement"],
    correct: 3,
    category: "DC"
  },
  {
    question: "A distributed system using ZooKeeper primarily addresses which concern?",
    options: ["Data replication", "Global coordination", "Fault tolerance", "Concurrency control"],
    correct: 1,
    category: "DC"
  },
  {
    question: "What is a critical performance consideration for a distributed system involving frequent data updates?",
    options: ["Network bandwidth", "Data consistency", "Transaction latency", "All of the above"],
    correct: 3,
    category: "DC"
  },
  {
    question: "Which protocol ensures reliable data transfer in the presence of packet loss?",
    options: ["TCP", "UDP", "HTTP", "FTP"],
    correct: 0,
    category: "DC"
  },
  {
    question: "A system using DHT (Distributed Hash Table) is characterized by:",
    options: ["centralized control", "highly consistent data", "strict ordering of operations", "decentralized storage"],
    correct: 3,
    category: "DC"
  },
  {
    question: "Which factor is most significant in determining the performance of a distributed system utilizing message queues?",
    options: ["Queue size", "Message latency", "Network topology", "CPU speed"],
    correct: 2,
    category: "DC"
  },
  {
    question: "A major advantage of sharding in a distributed database is:",
    options: ["increased transaction throughput", "improved data consistency", "easier scalability", "faster query processing"],
    correct: 2,
    category: "DC"
  },
  {
    question: "What does the CAP theorem primarily concern?",
    options: ["data consistency", "scalability", "availability", "all of the above"],
    correct: 3,
    category: "DC"
  },
  {
    question: "Which technique is NOT commonly used for load balancing in a distributed system?",
    options: ["Round-robin", "Least connections", "Hashing", "Branching"],
    correct: 3,
    category: "DC"
  },
  {
    question: "In a distributed system, what does a failure detector do?",
    options: ["Detect network congestion", "Detect slow nodes", "Detect dead nodes", "Detect malicious nodes"],
    correct: 2,
    category: "DC"
  },
  {
    question: "Which architectural pattern is often used for fault tolerance in microservices?",
    options: ["Layered architecture", "Event-driven architecture", "CQRS", "Circuit breaker"],
    correct: 3,
    category: "DC"
  },
  {
    question: "What is the primary objective of a consistent hashing algorithm?",
    options: ["Minimizing network latency", "Achieving high availability", "Distributing load evenly", "Ensuring data consistency across replicas"],
    correct: 3,
    category: "DC"
  },
  {
    question: "What is the key advantage of using a publish-subscribe model in a distributed system?",
    options: ["Data consistency", "Simplified concurrency control", "Decentralized data management", "Loose coupling between producers and consumers"],
    correct: 3,
    category: "DC"
  },
  {
    question: "What is a major challenge in managing replicas in a distributed database?",
    options: ["Data consistency", "Replication lag", "Synchronization overhead", "All of the above"],
    correct: 3,
    category: "DC"
  },
  {
    question: "Which aspect is NOT directly related to data partitioning in a distributed system?",
    options: ["Scalability", "Load balancing", "Data consistency", "Fault tolerance"],
    correct: 2,
    category: "DC"
  },
  {
    question: "Which data structure is frequently used in distributed systems for maintaining node connectivity?",
    options: ["Binary search tree", "Hash table", "Graph", "Stack"],
    correct: 2,
    category: "DC"
  },
  {
    question: "Which consensus algorithm is particularly well-suited for environments with frequent failures and a high degree of network partitioning?",
    options: ["Paxos", "Raft", "PBFT", "Byzantine Fault Tolerance"],
    correct: 2,
    category: "DC"
  },
  {
    question: "In a distributed system using a consistent hashing scheme, if a node fails, which strategy minimizes the impact on data distribution and retrieval?",
    options: ["Rehash all existing data immediately", "Rehash only data stored on the failed node", "Add a new node to take over the failed node's range", "Update the virtual ring mapping by assigning the failed node's range to other nodes"],
    correct: 3,
    category: "DC"
  },
  {
    question: "When dealing with replicated data in a distributed database, what consistency model allows for the most flexibility and potential performance gains, but at the risk of data inconsistencies?",
    options: ["Strong consistency", "Eventual consistency", "Linearizability", "Atomic consistency"],
    correct: 1,
    category: "DC"
  },
  {
    question: "A distributed system uses a gossip protocol for propagating updates.  What is a significant advantage of this protocol, compared to a centralized approach?",
    options: ["Reduced latency in update propagation", "Enhanced fault tolerance", "Better data consistency", "Simplified data storage management"],
    correct: 1,
    category: "DC"
  },
  {
    question: "Which technique is crucial for managing concurrency and preventing conflicts in distributed transactions across multiple data centers?",
    options: ["Optimistic locking", "Pessimistic locking", "Two-phase commit", "Distributed consensus"],
    correct: 2,
    category: "DC"
  },
  {
    question: "In a distributed file system, which approach minimizes data redundancy while guaranteeing data availability even with node failures?",
    options: ["Replication", "Erasure coding", "Distributed caching", "Distributed locking"],
    correct: 1,
    category: "DC"
  }
];

export default DistributedComputingDC3;
