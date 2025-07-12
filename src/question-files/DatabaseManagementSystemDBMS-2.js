const DatabaseManagementSystemDBMS2 = [
  {
    question: "In a relational database, what is a crucial aspect of a foreign key to maintain referential integrity?",
    options: ["Uniqueness constraint", "Primary key constraint", "Not null constraint", "Match with a primary key in another table"],
    correct: 3,
    category: "DBMS"
  },
  {
    question: "Which SQL command is used to retrieve rows from a table that satisfy a specific condition?",
    options: ["INSERT", "UPDATE", "DELETE", "SELECT"],
    correct: 3,
    category: "DBMS"
  },
  {
    question: "Which ACID property ensures that a transaction is either completely successful or completely unsuccessful, leaving the database in a consistent state?",
    options: ["Atomicity", "Consistency", "Isolation", "Durability"],
    correct: 0,
    category: "DBMS"
  },
  {
    question: "What type of query optimization technique analyzes the query plan to identify potential performance bottlenecks?",
    options: ["Cost-based optimization", "Rule-based optimization", "Query rewriting", "Query caching"],
    correct: 0,
    category: "DBMS"
  },
  {
    question: "Which data structure is often used to represent the relationships between tables in a relational database?",
    options: ["Binary tree", "Hash table", "B-tree", "Linked list"],
    correct: 2,
    category: "DBMS"
  },
  {
    question: "Which database model is known for its flexibility in storing complex relationships and semi-structured data?",
    options: ["Relational", "Hierarchical", "Network", "NoSQL"],
    correct: 3,
    category: "DBMS"
  },
  {
    question: "What is a common issue in distributed databases that occurs when multiple transactions access and modify the same data concurrently?",
    options: ["Data inconsistency", "Data integrity violation", "Concurrency control failure", "Deadlock"],
    correct: 0,
    category: "DBMS"
  },
  {
    question: "Which SQL clause is used to filter records based on a specific condition?",
    options: ["ORDER BY", "GROUP BY", "WHERE", "HAVING"],
    correct: 2,
    category: "DBMS"
  },
  {
    question: "What does a trigger in a DBMS do?",
    options: ["Automatically executes SQL statements in response to events", "Stores data for later use", "Optimizes queries", "Controls user access"],
    correct: 0,
    category: "DBMS"
  },
  {
    question: "Which index type allows for faster retrieval of data based on a range of values?",
    options: ["B-tree", "Hash", "Bitmap", "Full-text"],
    correct: 2,
    category: "DBMS"
  },
  {
    question: "A database that allows for a flexible schema and is often used for unstructured data is known as a...",
    options: ["Relational database", "Hierarchical database", "Network database", "NoSQL database"],
    correct: 3,
    category: "DBMS"
  },
  {
    question: "What is the purpose of a database schema?",
    options: ["To define the structure of the database", "To store data", "To execute queries", "To manage users"],
    correct: 0,
    category: "DBMS"
  },
  {
    question: "Which data model is best suited for representing data that has a hierarchical structure?",
    options: ["Relational", "Entity-relationship", "Hierarchical", "Object-oriented"],
    correct: 2,
    category: "DBMS"
  },
  {
    question: "Which command in SQL is used to add a new column to a table?",
    options: ["ALTER TABLE", "CREATE TABLE", "DROP TABLE", "MODIFY TABLE"],
    correct: 0,
    category: "DBMS"
  },
  {
    question: "In a database, what does a view represent?",
    options: ["A virtual table based on the result set of a query", "A physical table storing data", "A relationship between tables", "A stored procedure"],
    correct: 0,
    category: "DBMS"
  },
  {
    question: "What is a key characteristic of a NoSQL database compared to a relational database?",
    options: ["Strict schema enforcement", "Data stored in tables", "Ability to handle high volumes of unstructured data", "Strong ACID properties"],
    correct: 2,
    category: "DBMS"
  },
  {
    question: "What is the purpose of transaction logs in a database system?",
    options: ["To store the data itself", "To ensure data consistency across multiple users", "To speed up query execution", "To create backups"],
    correct: 1,
    category: "DBMS"
  },
  {
    question: "What problem occurs when multiple transactions try to access and modify the same data concurrently and the database system fails to prevent inconsistent updates?",
    options: ["Data inconsistency", "Deadlock", "Concurrency control error", "Data integrity violation"],
    correct: 0,
    category: "DBMS"
  },
  {
    question: "Which SQL keyword is used to sort the results of a query?",
    options: ["ORDER BY", "SORT BY", "SORT", "ORDER"],
    correct: 0,
    category: "DBMS"
  },
  {
    question: "Which database concept ensures that data is accurate and reliable?",
    options: ["Data integrity", "Data redundancy", "Data normalization", "Data security"],
    correct: 0,
    category: "DBMS"
  },
  {
    question: "What does an aggregate function in SQL do?",
    options: ["Calculates summary information from multiple rows", "Sorts rows in a table", "Filters rows in a table", "Groups rows in a table"],
    correct: 0,
    category: "DBMS"
  },
  {
    question: "Which normalization form ensures that there are no transitive dependencies in a database table, addressing data redundancy and ensuring data integrity?",
    options: ["1NF", "2NF", "3NF", "BCNF"],
    correct: 3,
    category: "DBMS"
  },
  {
    question: "A database system using a clustered index on a column will most likely exhibit which performance characteristic?",
    options: ["Improved search performance for values in the clustered column range.", "Increased storage space requirement for the index.", "Reduced query response time for values outside the clustered column range.", "Lowered query response time for lookups based on non-clustered columns."],
    correct: 0,
    category: "DBMS"
  },
  {
    question: "In a relational database, which operation is used to select rows from a table that satisfy a specific condition?",
    options: ["JOIN", "UNION", "SELECT", "UPDATE"],
    correct: 2,
    category: "DBMS"
  },
  {
    question: "Which concurrency control mechanism can lead to phantom reads?",
    options: ["Two-phase locking", "Optimistic locking", "Timestamp-based locking", "Deadlock avoidance"],
    correct: 2,
    category: "DBMS"
  },
  {
    question: "A database schema designed using the Entity-Relationship Model (ERM) is primarily concerned with:",
    options: ["Data storage efficiency", "Data manipulation strategies", "Data relationships and entities", "Query optimization techniques"],
    correct: 2,
    category: "DBMS"
  },
  {
    question: "What is the primary role of a transaction log in a DBMS?",
    options: ["Storing the results of all queries.", "Enforcing data integrity constraints.", "Maintaining a history of data changes.", "Optimizing query execution plans."],
    correct: 2,
    category: "DBMS"
  },
  {
    question: "Which SQL command is used to add a new column to a table?",
    options: ["ALTER TABLE", "CREATE TABLE", "UPDATE TABLE", "DROP TABLE"],
    correct: 0,
    category: "DBMS"
  },
  {
    question: "In a distributed database system, which approach is used to maintain data consistency across different sites?",
    options: ["Data replication", "Data partitioning", "Data summarization", "Data encryption"],
    correct: 0,
    category: "DBMS"
  },
  {
    question: "Which query optimization technique involves identifying common subexpressions in a complex query to improve performance?",
    options: ["Query rewriting", "Index selection", "Join order optimization", "Materialization"],
    correct: 0,
    category: "DBMS"
  },
  {
    question: "Which type of join combines rows from two tables based on a common column, returning only matching rows?",
    options: ["LEFT JOIN", "RIGHT JOIN", "INNER JOIN", "OUTER JOIN"],
    correct: 2,
    category: "DBMS"
  },
  {
    question: "What does ACID stand for in the context of database transactions?",
    options: ["Atomic, Consistent, Isolated, Data", "Atomicity, Consistency, Integrity, Durability", "Atomic, Consistency, Isolation, Durability", "Availability, Consistency, Integrity, Durability"],
    correct: 2,
    category: "DBMS"
  },
  {
    question: "Which type of database is best suited for handling large amounts of unstructured data, such as images and videos?",
    options: ["Relational", "NoSQL", "Hierarchical", "Network"],
    correct: 1,
    category: "DBMS"
  },
  {
    question: "Which data structure is often used to implement indexes in a DBMS to speed up data retrieval?",
    options: ["Hash table", "Binary search tree", "B-tree", "Linked list"],
    correct: 2,
    category: "DBMS"
  },
  {
    question: "Which DBMS concept is used to manage and control access to data within a database system?",
    options: ["Concurrency control", "Security mechanisms", "Integrity constraints", "Query optimization"],
    correct: 1,
    category: "DBMS"
  },
  {
    question: "Which database model allows representing relationships between entities using one-to-one, one-to-many, and many-to-many associations?",
    options: ["Relational", "Hierarchical", "Network", "Object-oriented"],
    correct: 0,
    category: "DBMS"
  },
  {
    question: "In a database, a Foreign Key is used to:",
    options: ["Specify primary key constraints", "Enforce referential integrity", "Ensure unique values", "Improve query performance"],
    correct: 1,
    category: "DBMS"
  },
  {
    question: "Which SQL clause is used to specify conditions for filtering rows in a SELECT statement?",
    options: ["ORDER BY", "GROUP BY", "WHERE", "HAVING"],
    correct: 2,
    category: "DBMS"
  },
  {
    question: "Which data model does MongoDB use?",
    options: ["Relational", "Hierarchical", "Object-oriented document", "Network"],
    correct: 2,
    category: "DBMS"
  },
  {
    question: "A database system experiencing deadlocks may benefit from which strategy?",
    options: ["Query Optimization", "Database Replication", "Deadlock Detection and Resolution", "Data Normalization"],
    correct: 2,
    category: "DBMS"
  },
  {
    question: "Data warehousing is primarily used for?",
    options: ["Transaction processing", "Real-time data analysis", "Online data entry", "Data integrity enforcement"],
    correct: 1,
    category: "DBMS"
  },
  {
    question: "Which SQL command is used to delete a table from the database?",
    options: ["DELETE", "DROP TABLE", "TRUNCATE TABLE", "REMOVE TABLE"],
    correct: 1,
    category: "DBMS"
  },
  {
    question: "Which type of database system is best suited for applications requiring high availability and fault tolerance?",
    options: ["Centralized", "Distributed", "Cloud-based", "Relational"],
    correct: 1,
    category: "DBMS"
  },
  {
    question: "A database schema is:",
    options: ["An instance of a database", "A collection of data", "The structure of a database", "A query language"],
    correct: 2,
    category: "DBMS"
  },
  {
    question: "A view in a database is:",
    options: ["A physical table", "A stored query result", "A subset of a table", "An alternative schema"],
    correct: 2,
    category: "DBMS"
  },
  {
    question: "Which normal form ensures that there are no transitive dependencies between non-key attributes and the primary key in a relation?",
    options: ["1NF", "2NF", "3NF", "BCNF"],
    correct: 3,
    category: "DBMS"
  },
  {
    question: "A database system using a clustered index on a frequently queried attribute will exhibit which performance characteristic?",
    options: ["Increased read latency for the clustered attribute", "Reduced write speed for the clustered attribute", "Improved read performance for queries involving the clustered attribute", "No impact on query performance"],
    correct: 2,
    category: "DBMS"
  },
  {
    question: "Which SQL command is used to modify the structure of an existing table by adding a new column?",
    options: ["ALTER TABLE", "UPDATE TABLE", "CREATE TABLE", "MODIFY TABLE"],
    correct: 0,
    category: "DBMS"
  },
  {
    question: "In a relational database, a 'view' is best described as:",
    options: ["A physical representation of data", "A stored query result", "A table with actual data", "A materialized subset of data from base tables."],
    correct: 3,
    category: "DBMS"
  },
  {
    question: "What is the primary difference between a clustered index and a non-clustered index?",
    options: ["Clustered indexes sort data physically, non-clustered indexes do not.", "Clustered indexes are faster for all operations, non-clustered indexes are slower.", "Clustered indexes are used for searching, non-clustered indexes are not.", "Clustered indexes store data logically, non-clustered indexes store it physically."],
    correct: 0,
    category: "DBMS"
  }
];

export default DatabaseManagementSystemDBMS2;
