const content = `# Database Normalization: Eliminating Redundancy and Anomalies

Database normalization is a systematic approach to organizing data in a relational database to reduce redundancy and improve data integrity. It involves decomposing tables into smaller, well-structured tables and defining relationships between them.

## What is Normalization?

Normalization is the process of structuring a database in accordance with a series of so-called **normal forms** to reduce data redundancy and improve data integrity.

### Goals of Normalization:
- Eliminate redundant data
- Reduce storage space
- Prevent data anomalies (insertion, update, deletion)
- Ensure data consistency
- Improve database performance

## Types of Anomalies

### Insertion Anomaly
Cannot add data without having other irrelevant data present.

### Update Anomaly
Changing data in one place requires changes in multiple places, leading to inconsistency.

### Deletion Anomaly
Deleting a record results in loss of other valuable information.

## Normal Forms

### First Normal Form (1NF)

A table is in 1NF if:
- Each column contains atomic (indivisible) values
- Each column contains values of the same type
- Each column has a unique name
- Order of rows and columns doesn't matter

**Example:**
Instead of storing multiple phone numbers in one field:
\`\`\`
Student_Name | Phone_Numbers
John Doe     | 123-456-7890, 987-654-3210
\`\`\`

Use separate rows:
\`\`\`
Student_Name | Phone_Number
John Doe     | 123-456-7890
John Doe     | 987-654-3210
\`\`\`

### Second Normal Form (2NF)

A table is in 2NF if:
- It's in 1NF
- All non-key attributes are fully functionally dependent on the primary key

**Functional Dependency:** $A \\rightarrow B$ means A functionally determines B.

**Example of 2NF Violation:**
\`\`\`sql
CREATE TABLE Student_Course (
    Student_ID INT,
    Course_ID INT,
    Student_Name VARCHAR(50),
    Course_Name VARCHAR(50),
    Grade CHAR(1),
    PRIMARY KEY (Student_ID, Course_ID)
);
\`\`\`

Here, Student_Name depends only on Student_ID, not the full composite key.

**2NF Solution:**
\`\`\`sql
-- Students table
CREATE TABLE Students (
    Student_ID INT PRIMARY KEY,
    Student_Name VARCHAR(50)
);

-- Enrollments table
CREATE TABLE Enrollments (
    Student_ID INT,
    Course_ID INT,
    Grade CHAR(1),
    PRIMARY KEY (Student_ID, Course_ID)
);
\`\`\`

### Third Normal Form (3NF)

A table is in 3NF if:
- It's in 2NF
- No transitive dependency exists (non-key attributes don't depend on other non-key attributes)

**Transitive Dependency:** If $A \\rightarrow B$ and $B \\rightarrow C$, then $A \\rightarrow C$

**Example:**
\`\`\`sql
-- Before 3NF
Student_ID | Student_Name | Department_ID | Department_Name | HOD_Name
\`\`\`

Department_Name and HOD_Name depend on Department_ID, creating transitive dependency.

### Boyce-Codd Normal Form (BCNF)

A stronger version of 3NF. A table is in BCNF if:
- It's in 3NF
- For every functional dependency $A \\rightarrow B$, A must be a super key

### Fourth Normal Form (4NF)

A table is in 4NF if:
- It's in BCNF
- No multi-valued dependencies exist

### Fifth Normal Form (5NF)

A table is in 5NF if:
- It's in 4NF
- No join dependencies exist that are not implied by candidate keys

## Normalization Process Example

### Unnormalized Table:
| Student_ID | Student_Name | Course1 | Grade1 | Course2 | Grade2 | Department |
|------------|--------------|---------|--------|---------|--------|------------|
| 101        | Alice        | Math    | A      | Physics | B      | Science    |
| 102        | Bob          | Math    | B      | NULL    | NULL   | Arts       |

### After 1NF:
| Student_ID | Student_Name | Course  | Grade | Department |
|------------|--------------|---------|-------|------------|
| 101        | Alice        | Math    | A     | Science    |
| 101        | Alice        | Physics | B     | Science    |
| 102        | Bob          | Math    | B     | Arts       |

### After 2NF and 3NF:

**Students Table:**
| Student_ID | Student_Name | Dept_ID |
|------------|--------------|---------|
| 101        | Alice        | 1       |
| 102        | Bob          | 2       |

**Departments Table:**
| Dept_ID | Department |
|---------|------------|
| 1       | Science    |
| 2       | Arts       |

**Enrollments Table:**
| Student_ID | Course_ID | Grade |
|------------|-----------|-------|
| 101        | 1         | A     |
| 101        | 2         | B     |
| 102        | 1         | B     |

## Advantages and Disadvantages

### Advantages:
- Reduces data redundancy
- Improves data consistency
- Easier maintenance
- Better data integrity
- Saves storage space

### Disadvantages:
- Increased complexity in queries
- More joins required
- Potential performance overhead
- Difficult to understand for beginners

## When to Denormalize

Sometimes, controlled denormalization is beneficial for:
- Read-heavy applications
- Data warehousing
- Reporting systems
- Performance optimization

The mathematical relationship can be expressed as:
$$\\text{Query Performance} = \\frac{\\text{Data Access Speed}}{\\text{Number of Joins}}$$

---

*Remember: Normalization is about finding the right balance between data integrity and performance!*

`;

export default content;