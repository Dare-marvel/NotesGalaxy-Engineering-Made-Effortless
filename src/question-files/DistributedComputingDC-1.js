const DistributedComputingDC1 = [
  {
    question: "Which of the following is NOT a fundamental characteristic of a well-designed distributed system?",
    options: ["Fault tolerance", "Scalability", "Centralized control", "Concurrency"],
    correct: 2,
    category: "DC"
  },
  {
    question: "In a distributed database system, which consistency model allows for the highest degree of concurrency but potentially sacrifices data integrity?",
    options: ["Strict consistency", "Eventual consistency", "Sequential consistency", "Atomic consistency"],
    correct: 1,
    category: "DC"
  },
  {
    question: "What is a key challenge in designing a distributed file system that ensures data consistency across multiple replicas?",
    options: ["Maintaining data integrity during failures", "Managing concurrent access to shared data", "Ensuring data availability", "Balancing performance and reliability"],
    correct: 0,
    category: "DC"
  },
  {
    question: "Which algorithm is commonly used for achieving consensus in a distributed system?",
    options: ["Paxos", "Raft", "Lamport's timestamps", "Gossip protocols"],
    correct: 0,
    category: "DC"
  },
  {
    question: "Which of these is NOT a typical component of a MapReduce framework?",
    options: ["Mapper", "Reducer", "Coordinator", "Database"],
    correct: 3,
    category: "DC"
  },
  {
    question: "A system that replicates data across multiple servers to improve availability but has no mechanism for handling conflicts is likely to exhibit which problem?",
    options: ["Partial data loss", "Redundant data storage", "Inconsistent data", "High latency"],
    correct: 2,
    category: "DC"
  },
  {
    question: "Which technique is crucial for achieving high availability in a distributed system by using redundant components?",
    options: ["Replication", "Load balancing", "Clustering", "Caching"],
    correct: 0,
    category: "DC"
  },
  {
    question: "In a distributed system, what does a global clock represent?",
    options: ["The real-time of a single node", "A single, consistent time across all nodes", "A local clock synchronized with a master", "A time synchronized based on GPS signals"],
    correct: 1,
    category: "DC"
  },
  {
    question: "Which approach to fault tolerance involves detecting and recovering from failures in distributed systems?",
    options: ["Replication", "Redundancy", "Error Handling", "Monitoring"],
    correct: 0,
    category: "DC"
  },
  {
    question: "What is a key challenge in building a fault-tolerant distributed system with a large number of nodes?",
    options: ["Resource allocation", "Communication latency", "Coordination complexity", "Data consistency"],
    correct: 2,
    category: "DC"
  },
  {
    question: "Which protocol ensures reliable message delivery in a distributed system, even in the presence of network partitions?",
    options: ["TCP", "UDP", "HTTP", "SMTP"],
    correct: 0,
    category: "DC"
  },
  {
    question: "In a distributed system, what is a potential issue arising from the use of local clocks?",
    options: ["Data consistency issues", "Inaccurate timestamps", "Synchronization errors", "All of the above"],
    correct: 3,
    category: "DC"
  },
  {
    question: "Which type of distributed system typically handles large-scale data processing and storage?",
    options: ["Cloud computing", "Peer-to-peer systems", "Message queues", "Distributed databases"],
    correct: 0,
    category: "DC"
  },
  {
    question: "What is a key aspect of managing data consistency in a distributed database?",
    options: ["Replication", "Transaction management", "Concurrency control", "All of the above"],
    correct: 3,
    category: "DC"
  },
  {
    question: "Which data structure is commonly used in distributed caching systems to manage cached data?",
    options: ["Hash table", "Binary search tree", "B-tree", "Trie"],
    correct: 0,
    category: "DC"
  },
  {
    question: "What is a major concern when designing a distributed system that involves geographically dispersed servers?",
    options: ["Network latency", "Communication overhead", "Security", "All of the above"],
    correct: 3,
    category: "DC"
  },
  {
    question: "What does a distributed lock manager do?",
    options: ["Manages concurrent access to resources", "Enforces access restrictions", "Prevents race conditions", "All of the above"],
    correct: 3,
    category: "DC"
  },
  {
    question: "Which component is responsible for coordinating the execution of tasks across multiple machines in a distributed system?",
    options: ["Master node", "Worker node", "Broker", "Client"],
    correct: 0,
    category: "DC"
  },
  {
    question: "What is a potential issue if a distributed system does not have a mechanism for handling network partitions?",
    options: ["Data loss", "Inconsistent data", "Service unavailability", "All of the above"],
    correct: 3,
    category: "DC"
  },
  {
    question: "Which approach is often used to optimize performance in distributed systems by reducing the amount of data transferred between machines?",
    options: ["Caching", "Data compression", "Data locality", "Replication"],
    correct: 2,
    category: "DC"
  },
  {
    question: "A distributed system for managing data in a multi-tenant environment requires which feature to deal with access control to the data stored by different users?",
    options: ["Load balancing", "Security and access control", "Data partitioning", "Redundancy"],
    correct: 1,
    category: "DC"
  },
  {
    question: "Which is a key aspect of ensuring system reliability in distributed computing?",
    options: ["Fault tolerance", "Redundancy", "Monitoring", "All of the above"],
    correct: 3,
    category: "DC"
  },
  {
    question: "Which technique is used to avoid a single point of failure in distributed systems?",
    options: ["Redundancy", "Fault Tolerance", "Clustering", "All of the above"],
    correct: 3,
    category: "DC"
  },
  {
    question: "What concept allows for different parts of a distributed system to operate concurrently without direct synchronization?",
    options: ["Asynchronous operations", "Data races", "Sequential execution", "Mutual exclusion"],
    correct: 0,
    category: "DC"
  },
  {
    question: "Which consensus algorithm is known for its use of a leader and followers, making it suitable for systems with varying node processing capabilities?",
    options: ["Paxos", "Raft", "Byzantine Fault Tolerance", "Two-Phase Commit"],
    correct: 1,
    category: "DC"
  },
  {
    question: "In a distributed system employing a replicated database, which approach minimizes data inconsistency by using timestamps for each data update?",
    options: ["Optimistic Replication", "Pessimistic Replication", "Vector Clocks", "Two-Phase Locking"],
    correct: 2,
    category: "DC"
  },
  {
    question: "Which technique is crucial for ensuring data consistency across multiple replicas in a distributed file system, handling simultaneous updates?",
    options: ["Locking", "Quorum Consensus", "Optimistic Concurrency Control", "Distributed Transactions"],
    correct: 1,
    category: "DC"
  },
  {
    question: "A system needs to distribute a large file across many nodes. Which approach is most suitable for efficiently distributing and managing the file's fragments?",
    options: ["MapReduce", "Gossip Protocol", "Chord", "Consistent Hashing"],
    correct: 0,
    category: "DC"
  },
  {
    question: "Consider a distributed system with failures. Which mechanism ensures that a particular service remains available even if some nodes fail?",
    options: ["Fault Tolerance", "Load Balancing", "Replication", "Clustering"],
    correct: 0,
    category: "DC"
  },
  {
    question: "In a distributed caching system, which technique minimizes cache misses by predicting future accesses based on historical data?",
    options: ["LRU", "FIFO", "Least Recently Used (LRU) with locality", "Predictive Caching"],
    correct: 3,
    category: "DC"
  },
  {
    question: "Which distributed algorithm is crucial for maintaining a consistent view of time across multiple geographically dispersed nodes, handling clock drift?",
    options: ["Vector Clocks", "NTP (Network Time Protocol)", "Logical Clocks", "Lamport Timestamps"],
    correct: 0,
    category: "DC"
  },
  {
    question: "In a distributed system experiencing failures, which model represents a situation where multiple nodes fail concurrently?",
    options: ["Byzantine Fault", "Crash Fault", "Omission Fault", "Network Partitioning"],
    correct: 0,
    category: "DC"
  },
  {
    question: "Which approach for handling failures in distributed systems is most appropriate when the cost of ensuring correctness is high?",
    options: ["Fault Tolerance", "Error Detection and Recovery", "Redundancy and Replication", "Graceful Degradation"],
    correct: 3,
    category: "DC"
  },
  {
    question: "Which system component plays a vital role in distributing work across multiple processors or machines?",
    options: ["Load Balancer", "Message Queue", "Distributed Cache", "Fault Tolerance Mechanism"],
    correct: 0,
    category: "DC"
  },
  {
    question: "A distributed system needs to handle a large number of concurrent requests.  Which architecture best suits load distribution in this case?",
    options: ["Microservices Architecture", "Client-Server Architecture", "Microservices with Load Balancing", "Event-Driven Architecture"],
    correct: 2,
    category: "DC"
  },
  {
    question: "A distributed system must ensure data consistency across nodes. Which consistency model is least restrictive, allowing for eventual consistency?",
    options: ["Strong Consistency", "Eventual Consistency", "Sequential Consistency", "Linearizability"],
    correct: 1,
    category: "DC"
  },
  {
    question: "Which technique is employed to efficiently locate a specific data item in a distributed database system by replicating data across multiple servers?",
    options: ["Hashing", "Indexing", "Consistent Hashing", "B-trees"],
    correct: 2,
    category: "DC"
  },
  {
    question: "In a distributed system, which component is responsible for managing communication between different nodes, including handling messages and network issues?",
    options: ["Routing Protocol", "Message Broker", "RPC Mechanism", "Process Coordination"],
    correct: 1,
    category: "DC"
  },
  {
    question: "Which fundamental principle in distributed systems ensures that the ordering of events is maintained, even in the presence of network delays and failures?",
    options: ["Atomicity", "Consistency", "Durability", "Causality"],
    correct: 3,
    category: "DC"
  },
  {
    question: "What is the primary challenge in achieving high availability in a distributed system with significant network latency?",
    options: ["Data Consistency", "Load Balancing", "Synchronization", "Fault Tolerance Management"],
    correct: 2,
    category: "DC"
  },
  {
    question: "Which protocol is commonly used for building distributed systems to manage the consistency and order of operations across multiple machines?",
    options: ["RPC", "HTTP", "MQTT", "2PC"],
    correct: 0,
    category: "DC"
  },
  {
    question: "What's a crucial aspect of designing a robust distributed system, focusing on handling different failure scenarios and achieving fault tolerance?",
    options: ["Scalability", "Replication", "Abstraction", "Fault Handling"],
    correct: 3,
    category: "DC"
  },
  {
    question: "Which paradigm is vital for managing complex interactions between different services and components in a distributed system, promoting decentralized control?",
    options: ["Microservices", "Message Queues", "Cloud Computing", "Microservices with API Gateway"],
    correct: 0,
    category: "DC"
  },
  {
    question: "Which algorithm is specifically designed to handle network partitions in distributed systems by identifying the partitions and coordinating the recovery process?",
    options: ["Paxos", "Chord", "Consistent Hashing", "Partition-Aware Algorithm"],
    correct: 3,
    category: "DC"
  },
  {
    question: "In a distributed system where multiple services need to interact and coordinate their actions, which design pattern helps manage this interaction?",
    options: ["Observer Pattern", "Chain of Responsibility", "Strategy Pattern", "Composite Pattern"],
    correct: 0,
    category: "DC"
  },
  {
    question: "Which concept in distributed systems describes the ability of a system to handle an increasing number of requests or users without degrading performance?",
    options: ["Scalability", "Flexibility", "Robustness", "Resilience"],
    correct: 0,
    category: "DC"
  },
  {
    question: "What is a key characteristic of a distributed system that aims to provide uninterrupted service even in the face of failures or network issues?",
    options: ["Scalability", "Resilience", "Consistency", "Availability"],
    correct: 3,
    category: "DC"
  },
  {
    question: "Which consensus algorithm is known for its high throughput and efficiency, but can be vulnerable to Byzantine failures in certain configurations?",
    options: ["Paxos", "Raft", "PBFT", "2PC"],
    correct: 2,
    category: "DC"
  },
  {
    question: "In a distributed file system, which approach is typically used to handle concurrent access to the same file by multiple clients without data corruption?",
    options: ["Optimistic concurrency control", "Pessimistic concurrency control", "Locking", "Versioning"],
    correct: 0,
    category: "DC"
  },
  {
    question: "A key-value store designed for high availability and fault tolerance often utilizes which replication strategy?",
    options: ["Active-Passive", "Master-Slave", "Multi-Master", "Primary-Backup"],
    correct: 2,
    category: "DC"
  }
];

export default DistributedComputingDC1;
