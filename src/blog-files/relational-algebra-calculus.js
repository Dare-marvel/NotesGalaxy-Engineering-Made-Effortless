const content = `# Relational Algebra and Calculus: Mathematical Foundations of DBMS

Relational algebra and calculus form the theoretical foundation for relational database operations. They provide formal mathematical frameworks for querying and manipulating relational databases.

## Introduction

**Relational Algebra** is a procedural query language that specifies how to compute a query result, while **Relational Calculus** is a declarative query language that specifies what result is desired without specifying how to compute it.

## Relational Algebra

Relational algebra consists of a set of operations that take one or more relations as input and produce a relation as output.

### Basic Operations

#### 1. Selection (σ)
Selects tuples that satisfy a given condition.

**Syntax:** $σ_{condition}(R)$

**Example:**
$σ_{age > 25}(Employee)$ - Select employees older than 25

\`\`\`sql
-- SQL equivalent
SELECT * FROM Employee WHERE age > 25;
\`\`\`

#### 2. Projection (π)
Selects specific columns from a relation.

**Syntax:** $π_{A_1, A_2, ..., A_n}(R)$

**Example:**
$π_{name, salary}(Employee)$ - Select name and salary columns

\`\`\`sql
-- SQL equivalent
SELECT name, salary FROM Employee;
\`\`\`

#### 3. Union (∪)
Combines tuples from two relations with the same schema.

**Syntax:** $R ∪ S$

**Conditions:**
- Relations must be union-compatible
- Same number of attributes
- Corresponding attributes have same domains

#### 4. Set Difference (-)
Returns tuples in first relation but not in second.

**Syntax:** $R - S$

**Example:**
$Employee - Manager$ - Employees who are not managers

#### 5. Cartesian Product (×)
Combines every tuple of first relation with every tuple of second relation.

**Syntax:** $R × S$

**Result size:** $|R × S| = |R| × |S|$

If R has m tuples and S has n tuples, the result has $m × n$ tuples.

#### 6. Rename (ρ)
Renames attributes or relations.

**Syntax:** $ρ_{new\\_name}(R)$ or $ρ_{new\\_name(A_1, A_2, ...)}(R)$

### Derived Operations

#### 1. Intersection (∩)
Returns common tuples between two relations.

**Formula:** $R ∩ S = R - (R - S)$

#### 2. Join Operations

##### Natural Join (⋈)
Joins relations on common attributes with same values.

**Syntax:** $R ⋈ S$

##### Theta Join (⋈θ)
Joins relations based on a condition θ.

**Syntax:** $R ⋈_θ S$

**Formula:** $R ⋈_θ S = σ_θ(R × S)$

##### Equi Join
Special case of theta join where condition is equality.

##### Outer Joins
- **Left Outer Join (⟕):** Includes all tuples from left relation
- **Right Outer Join (⟖):** Includes all tuples from right relation  
- **Full Outer Join (⟗):** Includes all tuples from both relations

#### 3. Division (÷)
Used for queries involving "for all" conditions.

**Syntax:** $R ÷ S$

Returns tuples in R that are associated with all tuples in S.

### Complex Query Example

Find employees who work on all projects:

$π_{emp\\_id}(Works\\_On) ÷ π_{proj\\_id}(Project)$

This can be broken down as:
1. $T_1 = π_{emp\\_id, proj\\_id}(Works\\_On)$
2. $T_2 = π_{proj\\_id}(Project)$  
3. $Result = T_1 ÷ T_2$

## Relational Calculus

Relational calculus is a non-procedural query language based on mathematical logic.

### Tuple Relational Calculus (TRC)

Uses tuple variables and logical formulas.

**General Form:**
$\\{t | P(t)\\}$

Where:
- t is a tuple variable
- P(t) is a formula involving t

#### Atomic Formulas:
1. $t ∈ R$ - tuple t belongs to relation R
2. $t[A] \\, θ \\, c$ - attribute A of tuple t satisfies condition θ with constant c
3. $t_1[A] \\, θ \\, t_2[B]$ - attribute A of t₁ relates to attribute B of t₂

#### Logical Connectives:
- $∧$ (AND)
- $∨$ (OR)  
- $¬$ (NOT)
- $→$ (IMPLIES)
- $↔$ (IF AND ONLY IF)

#### Quantifiers:
- $∃$ (EXISTS) - existential quantifier
- $∀$ (FOR ALL) - universal quantifier

**Example:**
Find employees with salary > 50000:

$\\{t | t ∈ Employee ∧ t[salary] > 50000\\}$

### Domain Relational Calculus (DRC)

Uses domain variables instead of tuple variables.

**General Form:**
$\\{⟨x_1, x_2, ..., x_n⟩ | P(x_1, x_2, ..., x_n)\\}$

**Example:**
Find names of employees with salary > 50000:

$\\{⟨n⟩ | ∃s, d (⟨n, s, d⟩ ∈ Employee ∧ s > 50000)\\}$

## Equivalence of Query Languages

**Codd's Theorem:** Relational algebra, tuple relational calculus, and domain relational calculus are equivalent in expressive power.

This means:
- Any query expressible in one can be expressed in the others
- They form the foundation for SQL

## Query Optimization Using Algebra

### Transformation Rules:

1. **Selection Cascade:**
   $σ_{c_1 ∧ c_2}(R) = σ_{c_1}(σ_{c_2}(R))$

2. **Selection Commutativity:**
   $σ_{c_1}(σ_{c_2}(R)) = σ_{c_2}(σ_{c_1}(R))$

3. **Projection Cascade:**
   $π_{L_1}(π_{L_2}(R)) = π_{L_1}(R)$ if $L_1 ⊆ L_2$

4. **Selection-Projection Commutativity:**
   $π_L(σ_c(R)) = σ_c(π_L(R))$ if condition c involves only attributes in L

## Comparison Table

| Aspect | Relational Algebra | Relational Calculus |
|--------|-------------------|-------------------|
| Nature | Procedural | Declarative |
| Approach | How to compute | What to compute |
| Operations | Step-by-step | Logical formulas |
| Complexity | $O(n^k)$ for k-way joins | Depends on formula |
| SQL Relation | Close to execution | Close to specification |

## Practical Applications

### Query Processing Steps:
1. **Parse** SQL query
2. **Translate** to relational algebra
3. **Optimize** using transformation rules
4. **Execute** optimized plan

### Cost Estimation:
For a join operation $R ⋈ S$:
- **Nested Loop:** $Cost = |R| × |S|$
- **Sort-Merge:** $Cost = |R| \\log |R| + |S| \\log |S|$
- **Hash Join:** $Cost = |R| + |S|$

---

*Remember: Understanding these mathematical foundations helps in writing efficient queries and database design!*

`;

export default content;