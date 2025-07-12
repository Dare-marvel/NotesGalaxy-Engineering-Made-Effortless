const DatabaseManagementSystemDBMS4 = [
  {
    question: "What is a trigger in a DBMS?",
    options: ["A stored procedure", "A rule for data validation", "A set of instructions executed in response to database events", "A view of data"],
    correct: 2,
    category: "DBMS"
  },
  {
    question: "Which concurrency control mechanism prevents lost updates in a DBMS?",
    options: ["Locking", "Timestamping", "Optimistic Locking", "Serializability"],
    correct: 0,
    category: "DBMS"
  },
  {
    question: "How can you prevent data redundancy in a database design?",
    options: ["Using normalization", "Adding more fields", "Using views", "Denormalization"],
    correct: 0,
    category: "DBMS"
  },
  {
    question: "Which SQL command is used to add a new row to a table?",
    options: ["INSERT", "ALTER", "MODIFY", "UPDATE"],
    correct: 0,
    category: "DBMS"
  },
  {
    question: "A database application needs to store complex multimedia objects. Which DBMS approach is most suitable?",
    options: ["Object-relational", "NoSQL", "Relational", "Hierarchical"],
    correct: 0,
    category: "DBMS"
  },
  {
    question: "What does a database index do?",
    options: ["Speeds up data retrieval", "Increases data redundancy", "Reduces storage space", "Makes data modification slower"],
    correct: 0,
    category: "DBMS"
  },
  {
    question: "Which statement best describes a distributed database system?",
    options: ["Database is stored on a single server", "Data is distributed across multiple servers", "Data is replicated for redundancy only", "Data is organized hierarchically"],
    correct: 1,
    category: "DBMS"
  },
  {
    question: "What is a transaction in DBMS?",
    options: ["A single logical unit of work", "A set of related data records", "A user interface command", "A database backup"],
    correct: 0,
    category: "DBMS"
  },
  {
    question: "What does data integrity in DBMS mean?",
    options: ["Data is valid", "Data is consistent", "Data is complete", "All of the above"],
    correct: 3,
    category: "DBMS"
  },
  {
    question: "Which DBMS concept is used for storing frequently accessed data to improve performance?",
    options: ["Indexing", "Normalization", "Views", "Hashing"],
    correct: 0,
    category: "DBMS"
  },
  {
    question: "What is the purpose of a foreign key constraint?",
    options: ["Ensures data consistency across tables", "Uniquely identifies a row", "Speeds up query processing", "Reduces database size"],
    correct: 0,
    category: "DBMS"
  },
  {
    question: "In a DBMS, which of the following is NOT a characteristic of a good database design?",
    options: ["Data integrity", "Data redundancy", "Data consistency", "Data efficiency"],
    correct: 1,
    category: "DBMS"
  },
  {
    question: "What is the purpose of a database schema?",
    options: ["To physically store data", "To define the logical structure of the database", "To manage user access", "To optimize query execution"],
    correct: 1,
    category: "DBMS"
  },
  {
    question: "Which SQL clause is used to limit the number of rows returned by a query?",
    options: ["LIMIT", "FETCH", "TOP", "TAKE"],
    correct: 0,
    category: "DBMS"
  },
  {
    question: "What is a database view?",
    options: ["A stored query result set", "A virtual table", "A physical data storage location", "A complete data backup"],
    correct: 1,
    category: "DBMS"
  },
  {
    question: "Which normalization form ensures that there are no transitive dependencies between non-key attributes in a database relation?",
    options: ["1NF", "2NF", "3NF", "BCNF"],
    correct: 3,
    category: "DBMS"
  },
  {
    question: "A database system that allows users to access and manipulate data stored in a relational database is known as a(n):",
    options: ["Application Program Interface (API)", "Query Language Interpreter", "Database Management System (DBMS)", "Data Warehouse"],
    correct: 2,
    category: "DBMS"
  },
  {
    question: "Which ACID property guarantees that a transaction either completes fully or leaves the database unchanged, preventing partial updates?",
    options: ["Atomicity", "Consistency", "Isolation", "Durability"],
    correct: 0,
    category: "DBMS"
  },
  {
    question: "A system used to manage very large volumes of data, often used for business intelligence and analytics, is:",
    options: ["Relational Database", "NoSQL Database", "Data Warehouse", "Transaction Processing System"],
    correct: 2,
    category: "DBMS"
  },
  {
    question: "Which SQL command is used to create a new table?",
    options: ["SELECT", "INSERT", "CREATE TABLE", "UPDATE"],
    correct: 2,
    category: "DBMS"
  },
  {
    question: "In a database, what is a Foreign Key?",
    options: ["A key that uniquely identifies a row in a table", "A key that establishes a relationship between two tables", "A key that is used to calculate an attribute's value", "A key that contains the sum of primary keys"],
    correct: 1,
    category: "DBMS"
  },
  {
    question: "Which indexing method is often used for spatial data in a database?",
    options: ["B-tree index", "Hash index", "R-tree index", "Bitmap index"],
    correct: 2,
    category: "DBMS"
  },
  {
    question: "What does a database trigger do?",
    options: ["Connects to external systems", "Allows users to specify security restrictions", "Modifies data in response to changes in other data", "Sorts and filters data"],
    correct: 2,
    category: "DBMS"
  },
  {
    question: "Which database system model is based on the concept of objects and their relationships?",
    options: ["Relational Model", "Object-Oriented Model", "Hierarchical Model", "Network Model"],
    correct: 1,
    category: "DBMS"
  },
  {
    question: "What is the primary purpose of a data dictionary in a DBMS?",
    options: ["To store user data", "To describe the structure of the database", "To manage transactions", "To control access to the database"],
    correct: 1,
    category: "DBMS"
  },
  {
    question: "What is a common way to improve query performance in a DBMS?",
    options: ["Adding more indexes", "Using complex SQL queries", "Increasing the database size", "Reducing the data volume"],
    correct: 0,
    category: "DBMS"
  },
  {
    question: "Which data structure is commonly used for implementing indexes in a DBMS?",
    options: ["Linked List", "Hash Table", "B-Tree", "Binary Search Tree"],
    correct: 2,
    category: "DBMS"
  },
  {
    question: "A database system designed for handling a large number of concurrent users is likely to use:",
    options: ["Optimistic concurrency control", "Locking mechanisms", "Data replication", "Distributed query processing"],
    correct: 1,
    category: "DBMS"
  },
  {
    question: "What is a deadlock in a DBMS?",
    options: ["A situation where two or more transactions are waiting for each other indefinitely", "A situation where a transaction is waiting for a resource that is not available", "An error in the database schema", "A situation where a query takes too long to execute"],
    correct: 0,
    category: "DBMS"
  },
  {
    question: "Which method for managing transactions handles multiple transactions concurrently by dividing the task into smaller pieces?",
    options: ["Optimistic Concurrency", "Pessimistic Concurrency", "Two-Phase Locking", "Deadlock Detection"],
    correct: 2,
    category: "DBMS"
  },
  {
    question: "Which query optimization technique involves identifying and reordering the steps in a query plan to improve performance?",
    options: ["Query rewriting", "Index selection", "Query caching", "Statistical analysis"],
    correct: 0,
    category: "DBMS"
  },
  {
    question: "What is the purpose of a View in a database?",
    options: ["To store data in a separate table", "To provide a customized, virtual representation of data", "To control user access to the database", "To execute a query directly against the data storage"],
    correct: 1,
    category: "DBMS"
  },
  {
    question: "Which DBMS architecture typically provides higher availability?",
    options: ["Centralized DBMS", "Distributed DBMS", "Client-Server DBMS", "Cloud DBMS"],
    correct: 1,
    category: "DBMS"
  },
  {
    question: "A database that stores documents instead of tables is categorized as:",
    options: ["Relational Database", "Object-Oriented Database", "Document Database", "Graph Database"],
    correct: 2,
    category: "DBMS"
  },
  {
    question: "Which key performance indicator (KPI) is frequently used to measure the efficiency of a DBMS?",
    options: ["Response Time", "Transaction throughput", "Query optimization ratio", "System reliability"],
    correct: 1,
    category: "DBMS"
  },
  {
    question: "Which concept from DBMS theory is applied to efficiently manage access to data through different indexes?",
    options: ["Materialized views", "Data warehousing", "Query optimization", "Database replication"],
    correct: 2,
    category: "DBMS"
  },
  {
    question: "Which aspect of a DBMS deals with securing data from unauthorized access?",
    options: ["Data integrity", "Data security", "Data recovery", "Data consistency"],
    correct: 1,
    category: "DBMS"
  },
  {
    question: "What is the role of a Database Administrator (DBA)?",
    options: ["Data entry", "Data analysis", "Database design and maintenance", "Data modeling"],
    correct: 2,
    category: "DBMS"
  },
  {
    question: "Which of the following is NOT a characteristic of a well-designed database schema, focusing on data integrity?",
    options: ["Atomicity", "Consistency", "Redundancy", "Isolation"],
    correct: 2,
    category: "DBMS"
  },
  {
    question: "A company needs to store information about employees, their departments, and the projects they work on.  Which type of database model would be MOST suitable to represent the relationships between these entities, considering efficient querying and data integrity?",
    options: ["Hierarchical", "Network", "Object-oriented", "Relational"],
    correct: 3,
    category: "DBMS"
  },
  {
    question: "A database administrator wants to ensure data consistency across multiple transactions.  Which ACID property guarantees that either all parts of a transaction are committed or none are?",
    options: ["Atomicity", "Consistency", "Isolation", "Durability"],
    correct: 0,
    category: "DBMS"
  },
  {
    question: "Which query optimization technique is particularly useful for identifying and eliminating redundant calculations in a complex SQL query, leading to significant performance improvements?",
    options: ["Query Decomposition", "Index Selection", "Materialized View", "Query Rewriting"],
    correct: 3,
    category: "DBMS"
  },
  {
    question: "In a database system with a large amount of data, what technique significantly improves the speed of data retrieval and reduces disk I/O, especially for range queries?",
    options: ["Normalization", "Hashing", "Indexing", "Aggregation"],
    correct: 2,
    category: "DBMS"
  },
  {
    question: "Which SQL command is used to retrieve specific rows from a table based on a certain condition, allowing flexibility in filtering criteria?",
    options: ["CREATE TABLE", "ALTER TABLE", "INSERT INTO", "SELECT"],
    correct: 3,
    category: "DBMS"
  },
  {
    question: "A database system needs to manage transactions involving multiple users simultaneously. What approach ensures that concurrent transactions don't interfere with each other and maintain data consistency?",
    options: ["Data replication", "Transaction logging", "Concurrency control", "Database tuning"],
    correct: 2,
    category: "DBMS"
  },
  {
    question: "In a relational database, what does normalization aim to achieve, especially concerning data redundancy and dependency problems?",
    options: ["Increased data integrity", "Faster query execution", "Improved data consistency", "Reduced data redundancy"],
    correct: 3,
    category: "DBMS"
  },
  {
    question: "Consider a scenario where a large e-commerce platform needs to track customer orders, products, and payments. Which NoSQL database model would be BEST suited to handle this high-volume, rapidly changing data?",
    options: ["Graph database", "Document database", "Key-value store", "Column-family store"],
    correct: 1,
    category: "DBMS"
  },
  {
    question: "Which advanced DBMS feature allows for creating a separate storage location for frequently accessed data to optimize performance, improving query response times?",
    options: ["Database replication", "Caching", "Data compression", "Transaction clustering"],
    correct: 1,
    category: "DBMS"
  },
  {
    question: "A bank needs to track customer accounts, transactions, and balances.  Which database design principle is crucial for maintaining data accuracy and consistency across these various data elements?",
    options: ["Object-oriented design", "Entity-relationship modeling", "Distributed systems design", "Cloud computing principles"],
    correct: 1,
    category: "DBMS"
  },
  {
    question: "What key characteristic distinguishes a database system that handles large datasets and complex queries involving spatial data, from a traditional relational database management system?",
    options: ["Normalization", "Data warehousing", "Spatial indexing", "Transactions"],
    correct: 2,
    category: "DBMS"
  }
];

export default DatabaseManagementSystemDBMS4;
