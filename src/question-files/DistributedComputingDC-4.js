const DistributedComputingDC4 = [
  {
    question: "What critical aspect of distributed systems is addressed by technologies like ZooKeeper or etcd?",
    options: ["Data consistency", "Resource management", "Coordination and configuration management", "Security management"],
    correct: 2,
    category: "DC"
  },
  {
    question: "A distributed system experiences a significant increase in network latency. Which component would likely be the primary cause?",
    options: ["Hardware failures", "Data replication failures", "Network congestion", "Application-level issues"],
    correct: 2,
    category: "DC"
  },
  {
    question: "Which design pattern, often used in distributed systems, promotes modularity and independent scaling?",
    options: ["Microservices", "Singleton", "Observer", "Strategy"],
    correct: 0,
    category: "DC"
  },
  {
    question: "A system needs to guarantee data consistency across multiple geographically distributed servers. Which approach would be most appropriate?",
    options: ["In-memory caching", "Distributed transactions", "Asynchronous messaging", "Load balancing"],
    correct: 1,
    category: "DC"
  },
  {
    question: "In MapReduce, how is the intermediate data typically handled?",
    options: ["Stored in a centralized database", "Stored in memory only", "Persisted on disk and shuffled", "Distributed across nodes in a distributed cache"],
    correct: 2,
    category: "DC"
  },
  {
    question: "What is a key challenge in implementing fault tolerance in distributed systems?",
    options: ["Maintaining data consistency", "Ensuring network reliability", "Detecting and isolating failures", "Managing resource conflicts"],
    correct: 0,
    category: "DC"
  },
  {
    question: "Which service discovery mechanism allows dynamically registering and resolving services across distributed nodes?",
    options: ["DNS", "Consul", "HTTP", "RPC"],
    correct: 1,
    category: "DC"
  },
  {
    question: "What data structure is commonly used in distributed systems for consistent ordering of events?",
    options: ["HashMap", "Linked List", "Queue", "Log"],
    correct: 3,
    category: "DC"
  },
  {
    question: "Which technique is fundamental to achieving high availability in a distributed database?",
    options: ["Replication", "Clustering", "Sharding", "Transactions"],
    correct: 0,
    category: "DC"
  },
  {
    question: "What's the primary benefit of using a shared-nothing architecture in a distributed system?",
    options: ["Improved fault tolerance", "Increased scalability", "Reduced latency", "Simplified programming"],
    correct: 1,
    category: "DC"
  },
  {
    question: "Which protocol is crucial for reliable communication between nodes in a distributed system?",
    options: ["HTTP", "TCP", "UDP", "FTP"],
    correct: 1,
    category: "DC"
  },
  {
    question: "What is a key consideration when designing a distributed system for mobile applications?",
    options: ["Security", "Scalability", "Data consistency", "Latency"],
    correct: 3,
    category: "DC"
  },
  {
    question: "Which concept is central to ensuring data integrity in a distributed system?",
    options: ["Replication", "Consistency", "Concurrency control", "Transactions"],
    correct: 1,
    category: "DC"
  },
  {
    question: "In a distributed caching system, what mechanism manages the cache consistency across multiple nodes?",
    options: ["Optimistic Locking", "Pessimistic Locking", "Cache Invalidation", "Cache Pre-fetching"],
    correct: 2,
    category: "DC"
  },
  {
    question: "Which technique enables the handling of massive amounts of data across multiple servers in a distributed system?",
    options: ["Load balancing", "Data sharding", "Stream processing", "Parallel computing"],
    correct: 1,
    category: "DC"
  },
  {
    question: "What is a major concern when designing a distributed system that interacts with legacy systems?",
    options: ["Security", "Data Consistency", "Interoperability", "Scalability"],
    correct: 2,
    category: "DC"
  },
  {
    question: "Which architectural pattern best suits a system that needs to process messages asynchronously and reliably?",
    options: ["Event Sourcing", "Publish-Subscribe", "CQRS", "Microservices"],
    correct: 1,
    category: "DC"
  },
  {
    question: "Which consistency model guarantees that all replicas of a data item see the same value, but might allow for some delay in updates being visible to all replicas?",
    options: ["Sequential consistency", "Causal consistency", "Strong consistency", "Eventual consistency"],
    correct: 1,
    category: "DC"
  },
  {
    question: "In a distributed system using Paxos, what role does the learner play?",
    options: ["Proposes values to be accepted", "Accepts or rejects proposed values", "Determines the final agreed-upon value", "Sends messages to other processes"],
    correct: 2,
    category: "DC"
  },
  {
    question: "A system using a gossip protocol for data replication is primarily aiming for what type of consistency?",
    options: ["Strong consistency", "Eventual consistency", "Linearizability", "Sequential consistency"],
    correct: 1,
    category: "DC"
  },
  {
    question: "Which algorithm is suitable for finding the shortest path between nodes in a large distributed network, considering network latency and potential failures?",
    options: ["Dijkstra's algorithm", "Bellman-Ford algorithm", "Floyd-Warshall algorithm", "Distributed Bellman-Ford algorithm"],
    correct: 3,
    category: "DC"
  },
  {
    question: "What is a key challenge in implementing fault tolerance in a distributed database?",
    options: ["Maintaining data consistency across replicas", "Balancing load across servers", "Ensuring data integrity", "Managing network partitions"],
    correct: 0,
    category: "DC"
  },
  {
    question: "In a distributed file system, which strategy minimizes the impact of a single node failure on the availability of files?",
    options: ["Replication", "Caching", "Data sharding", "Data mirroring"],
    correct: 0,
    category: "DC"
  },
  {
    question: "Which technique is crucial for managing concurrent access to shared resources in a distributed system?",
    options: ["Synchronization primitives", "Distributed locks", "Atomic operations", "All of the above"],
    correct: 3,
    category: "DC"
  },
  {
    question: "What is the primary advantage of using a distributed cache?",
    options: ["Reduced database load", "Improved application performance", "Enhanced data consistency", "Simplified data management"],
    correct: 1,
    category: "DC"
  },
  {
    question: "In a system with data replicated across multiple machines, which mechanism ensures that all replicas reflect the latest changes?",
    options: ["Master-slave replication", "Active-active replication", "Data sharding", "Database synchronization"],
    correct: 1,
    category: "DC"
  },
  {
    question: "What is a significant advantage of using a quorum system for data updates in a distributed database?",
    options: ["Improved data consistency", "Increased throughput", "Faster response times", "Simplified data management"],
    correct: 0,
    category: "DC"
  },
  {
    question: "Which protocol is widely used for reliable data transmission in distributed systems, employing acknowledgments and timeouts?",
    options: ["TCP", "UDP", "HTTP", "FTP"],
    correct: 0,
    category: "DC"
  },
  {
    question: "Which key concept addresses how a distributed system manages and recovers from failures by replicating data across multiple machines?",
    options: ["Replication", "Fault Tolerance", "Consistency", "Scalability"],
    correct: 1,
    category: "DC"
  },
  {
    question: "How does MapReduce facilitate large-scale data processing?",
    options: ["By dividing tasks among multiple machines", "By ensuring data consistency across nodes", "By handling failures using checkpointing", "By applying parallel processing to data sets"],
    correct: 3,
    category: "DC"
  },
  {
    question: "What is the primary goal of a consensus protocol in a distributed system?",
    options: ["To ensure that all nodes agree on a single value", "To manage data replication across multiple nodes", "To provide fault tolerance in case of node failures", "To optimize data transmission speeds"],
    correct: 0,
    category: "DC"
  },
  {
    question: "In the context of distributed systems, what does 'scalability' refer to?",
    options: ["The ability to handle a growing number of requests or data", "The system's ability to maintain consistency even in the presence of failures", "The system's ability to handle changes in workload", "The capacity to add new resources to handle increased demand"],
    correct: 3,
    category: "DC"
  },
  {
    question: "Which technique allows a distributed system to improve performance by avoiding redundant computations?",
    options: ["Load Balancing", "Caching", "Replication", "Data Partitioning"],
    correct: 1,
    category: "DC"
  },
  {
    question: "How does ZooKeeper contribute to distributed systems?",
    options: ["Provides a distributed coordination service", "Handles data replication across nodes", "Provides a mechanism for leader election", "All of the above"],
    correct: 3,
    category: "DC"
  },
  {
    question: "What is the primary concern when dealing with network partitions in a distributed system?",
    options: ["Data loss", "Data inconsistency", "Performance degradation", "All of the above"],
    correct: 2,
    category: "DC"
  },
  {
    question: "Which aspect of a distributed system is most strongly associated with handling geographically dispersed data and users?",
    options: ["Scalability", "Consistency", "Fault tolerance", "Latency"],
    correct: 3,
    category: "DC"
  },
  {
    question: "What is a major difference between a centralized and distributed database?",
    options: ["Centralized databases are more scalable", "Distributed databases are more fault-tolerant", "Distributed databases rely on a single point of failure", "Centralized databases are more suitable for massive datasets"],
    correct: 1,
    category: "DC"
  },
  {
    question: "What is a critical consideration when designing a distributed system to be resilient to failures?",
    options: ["Maintaining high data availability", "Ensuring minimal data redundancy", "Implementing complex error handling logic", "Utilizing centralized resources"],
    correct: 0,
    category: "DC"
  },
  {
    question: "Which component is crucial for enabling communication and coordination between different nodes in a distributed system?",
    options: ["Message Queues", "Distributed Locks", "Shared Memory", "All of the above"],
    correct: 0,
    category: "DC"
  },
  {
    question: "What is a primary goal of load balancing in a distributed system?",
    options: ["Minimize the response time for client requests", "Ensure all nodes have equal computational load", "Maintain consistency across all nodes", "Maximize network bandwidth utilization"],
    correct: 0,
    category: "DC"
  },
  {
    question: "What critical aspect of distributed systems is often overlooked during design, leading to performance issues?",
    options: ["Network bandwidth", "Communication latency", "Data consistency", "Resource utilization"],
    correct: 1,
    category: "DC"
  },
  {
    question: "A system employs a consistent hashing scheme for distributing data across multiple servers.  If a server fails, what is the most efficient strategy to rebalance the data distribution?",
    options: ["Manually redistribute data to available servers.", "Use a secondary lookup table to locate data replicas.", "Perform a global rehashing of the entire system.", "Rebuild the hashing function from scratch using a different algorithm."],
    correct: 1,
    category: "DC"
  },
  {
    question: "In a distributed system using Paxos, which condition is NOT a fundamental requirement for agreement?",
    options: ["Nodes must communicate asynchronously.", "Nodes must be able to persist proposed values.", "All proposed values must be unique.", "All correct nodes must eventually agree on a single value."],
    correct: 0,
    category: "DC"
  },
  {
    question: "A distributed file system utilizes a gossip protocol for maintaining consistency across replicas.  Which of these is NOT a typical characteristic of such a protocol?",
    options: ["Decentralized control, relying on peer-to-peer communication.", "High fault tolerance due to redundant information.", "Strict adherence to a centralized coordinator.", "Efficient propagation of updates among nodes."],
    correct: 2,
    category: "DC"
  },
  {
    question: "Which technique is commonly used to ensure atomicity in a distributed transaction that involves multiple databases across different locations?",
    options: ["Two-phase commit.", "Consistent hashing.", "Data replication.", "Gossip protocol."],
    correct: 0,
    category: "DC"
  },
  {
    question: "When designing a distributed system for handling massive datasets, which aspect is MOST critical for ensuring scalability and high performance?",
    options: ["Minimizing latency within a single server.", "Optimizing data storage on a single server.", "Employing efficient data partitioning and sharding strategies.", "Utilizing advanced compression algorithms."],
    correct: 2,
    category: "DC"
  },
  {
    question: "Consider a distributed system managing sensor data from various locations.  Which approach would be best suited for handling potential network partitions and guaranteeing data integrity?",
    options: ["A centralized database.", "A peer-to-peer architecture.", "A master-slave architecture.", "A strict leader-follower approach."],
    correct: 1,
    category: "DC"
  },
  {
    question: "In a distributed system for online transaction processing (OLTP), which component is crucial to handle eventual consistency and maintain data integrity when network failures occur?",
    options: ["Load balancer.", "Proxy server.", "Transaction manager.", "Caching mechanism."],
    correct: 2,
    category: "DC"
  },
  {
    question: "A distributed system employing MapReduce for processing large datasets encounters an issue where intermediate results are not being properly communicated between the map and reduce tasks. What is the most likely cause?",
    options: ["Incorrect map function implementation.", "Insufficient disk space on the storage nodes.", "Improper partitioning of the data.", "Inadequate communication channels between worker nodes."],
    correct: 3,
    category: "DC"
  },
  {
    question: "A web application experiencing high latency during peak hours.  Which distributed architecture pattern would be MOST suitable for improving performance through data replication and load balancing?",
    options: ["Client-server.", "Peer-to-peer.", "Microservices.", "Message queueing."],
    correct: 2,
    category: "DC"
  }
];

export default DistributedComputingDC4;
