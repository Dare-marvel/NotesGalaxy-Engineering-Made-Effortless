const content = `# Relational Model and Functional Dependencies in DBMS

The Relational Model is the foundation of modern database systems, providing a mathematical framework for organizing and querying data. Functional Dependencies are crucial for understanding data relationships and designing efficient database schemas through normalization.

## Introduction to Relational Model

The Relational Model, introduced by Edgar F. Codd in 1970, represents data as relations (tables) and provides a solid mathematical foundation for database operations.

### Core Concepts

**Relation:** A table with rows and columns
**Tuple:** A row in a relation
**Attribute:** A column in a relation
**Domain:** Set of allowable values for an attribute

### Mathematical Foundation

A relation $R$ is a subset of the Cartesian product of domains:

$R \\subseteq D_1 \\times D_2 \\times ... \\times D_n$

Where $D_i$ are domains and $n$ is the degree of relation.

**Cardinality:** Number of tuples in relation
**Degree:** Number of attributes in relation

## Relational Schema

### Schema Definition

A **relational schema** $R(A_1, A_2, ..., A_n)$ specifies:
- Relation name $R$
- Set of attributes $\\{A_1, A_2, ..., A_n\\}$
- Domain for each attribute

### Database Schema

Collection of relational schemas:
$Database\\_Schema = \\{R_1, R_2, ..., R_m\\}$

### Schema Instance

Actual data stored in database at specific time.

**Example:**
\`\`\`
STUDENT(StudentID, Name, Major, GPA)
Instance:
(101, 'Alice', 'CS', 3.8)
(102, 'Bob', 'Math', 3.6)
(103, 'Carol', 'CS', 3.9)
\`\`\`

## Keys in Relational Model

### Superkey

Set of attributes that uniquely identifies tuples.

**Mathematical definition:**
$SK$ is superkey if $\\forall t_1, t_2 \\in R: t_1 \\neq t_2 \\Rightarrow t_1[SK] \\neq t_2[SK]$

### Candidate Key

Minimal superkey - no proper subset is also a superkey.

**Properties:**
- **Uniqueness:** No two tuples have same key value
- **Minimality:** No proper subset satisfies uniqueness

### Primary Key

Chosen candidate key for relation.

**Selection criteria:**
- Stability: Values don't change frequently
- Simplicity: Preferably single attribute
- Non-null: Must have value for every tuple

### Foreign Key

Attribute(s) referencing primary key of another relation.

**Referential Integrity:** $\\forall t \\in R_1: t[FK] \\in \\pi_{PK}(R_2) \\cup \\{null\\}$

## Relational Algebra

### Basic Operations

#### Selection (σ)

Selects tuples satisfying condition.

$\\sigma_{condition}(R) = \\{t \\in R : condition(t) = true\\}$

**Example:** $\\sigma_{Major='CS'}(STUDENT)$

#### Projection (π)

Selects specified attributes.

$\\pi_{A_1, A_2, ..., A_k}(R) = \\{t[A_1, A_2, ..., A_k] : t \\in R\\}$

**Example:** $\\pi_{Name, GPA}(STUDENT)$

#### Union (∪)

Combines tuples from compatible relations.

$R_1 \\cup R_2 = \\{t : t \\in R_1 \\lor t \\in R_2\\}$

**Compatibility:** Same degree and compatible domains

#### Intersection (∩)

Common tuples from compatible relations.

$R_1 \\cap R_2 = \\{t : t \\in R_1 \\land t \\in R_2\\}$

#### Difference (-)

Tuples in first relation but not in second.

$R_1 - R_2 = \\{t : t \\in R_1 \\land t \\notin R_2\\}$

#### Cartesian Product (×)

All possible combinations of tuples.

$R_1 \\times R_2 = \\{(t_1, t_2) : t_1 \\in R_1 \\land t_2 \\in R_2\\}$

**Degree:** $degree(R_1 \\times R_2) = degree(R_1) + degree(R_2)$

### Join Operations

#### Natural Join (⋈)

Combines relations on common attributes.

$R_1 ⋈ R_2 = \\{t : \\exists t_1 \\in R_1, t_2 \\in R_2$ such that $t_1[common] = t_2[common]\\}$

#### Theta Join (⋈θ)

Join with specified condition.

$R_1 ⋈_θ R_2 = \\sigma_θ(R_1 \\times R_2)$

#### Equi Join

Theta join with equality conditions only.

#### Outer Join

Preserves unmatched tuples.

**Left Outer Join:** $R_1 ⟕ R_2$
**Right Outer Join:** $R_1 ⟖ R_2$  
**Full Outer Join:** $R_1 ⟗ R_2$

## Functional Dependencies

### Definition

A functional dependency $X \\rightarrow Y$ holds in relation $R$ if:

$\\forall t_1, t_2 \\in R: t_1[X] = t_2[X] \\Rightarrow t_1[Y] = t_2[Y]$

**Interpretation:** X functionally determines Y

### Examples

In STUDENT(StudentID, Name, Major, GPA):
- $StudentID \\rightarrow Name$
- $StudentID \\rightarrow Major$
- $StudentID \\rightarrow GPA$
- $StudentID \\rightarrow \\{Name, Major, GPA\\}$

### Types of Functional Dependencies

#### Trivial FD

$X \\rightarrow Y$ is trivial if $Y \\subseteq X$

**Example:** $\\{StudentID, Name\\} \\rightarrow Name$

#### Non-trivial FD

$X \\rightarrow Y$ is non-trivial if $Y \\not\\subseteq X$

#### Completely Non-trivial FD

$X \\rightarrow Y$ is completely non-trivial if $X \\cap Y = \\emptyset$

### Armstrong's Axioms

Fundamental rules for functional dependencies:

#### Reflexivity

If $Y \\subseteq X$, then $X \\rightarrow Y$

#### Augmentation

If $X \\rightarrow Y$, then $XZ \\rightarrow YZ$

#### Transitivity

If $X \\rightarrow Y$ and $Y \\rightarrow Z$, then $X \\rightarrow Z$

### Derived Rules

#### Union

If $X \\rightarrow Y$ and $X \\rightarrow Z$, then $X \\rightarrow YZ$

#### Decomposition

If $X \\rightarrow YZ$, then $X \\rightarrow Y$ and $X \\rightarrow Z$

#### Pseudo-transitivity

If $X \\rightarrow Y$ and $WY \\rightarrow Z$, then $WX \\rightarrow Z$

## Closure and Key Finding

### Attribute Closure

Given set of FDs $F$ and attribute set $X$, the closure $X^+$ is:

$X^+ = \\{A : X \\rightarrow A \\text{ can be derived from } F\\}$

### Algorithm for Attribute Closure

\`\`\`
Input: Set of attributes X, Set of FDs F
Output: X+

1. Initialize: result = X
2. Repeat:
   old_result = result
   For each FD Y → Z in F:
     If Y ⊆ result then result = result ∪ Z
   Until old_result = result
3. Return result
\`\`\`

### Finding Candidate Keys

**Algorithm:**
1. Compute closure for each attribute subset
2. If closure equals all attributes, it's a superkey
3. If no proper subset is superkey, it's candidate key

### Code Example

Here's an implementation for finding attribute closure:

\`\`\`python
class FunctionalDependency:
    def __init__(self, left, right):
        self.left = set(left) if isinstance(left, list) else {left}
        self.right = set(right) if isinstance(right, list) else {right}
    
    def __str__(self):
        return f"{''.join(sorted(self.left))} → {''.join(sorted(self.right))}"

class RelationalSchema:
    def __init__(self, attributes, functional_dependencies):
        self.attributes = set(attributes)
        self.fds = functional_dependencies
    
    def attribute_closure(self, attribute_set):
        """Compute closure of given attribute set"""
        closure = set(attribute_set)
        changed = True
        
        while changed:
            changed = False
            for fd in self.fds:
                # If left side is subset of current closure
                if fd.left.issubset(closure):
                    # Add right side to closure
                    old_size = len(closure)
                    closure.update(fd.right)
                    if len(closure) > old_size:
                        changed = True
        
        return closure
    
    def is_superkey(self, attribute_set):
        """Check if attribute set is a superkey"""
        closure = self.attribute_closure(attribute_set)
        return closure == self.attributes
    
    def find_candidate_keys(self):
        """Find all candidate keys"""
        candidate_keys = []
        
        # Generate all possible attribute subsets
        from itertools import combinations
        
        for r in range(1, len(self.attributes) + 1):
            for combo in combinations(self.attributes, r):
                attr_set = set(combo)
                
                # Check if it's a superkey
                if self.is_superkey(attr_set):
                    # Check if it's minimal (no proper subset is superkey)
                    is_minimal = True
                    for subset in combinations(attr_set, len(attr_set) - 1):
                        if self.is_superkey(set(subset)):
                            is_minimal = False
                            break
                    
                    if is_minimal:
                        candidate_keys.append(attr_set)
        
        return candidate_keys
    
    def check_fd_validity(self, fd):
        """Check if functional dependency holds"""
        closure = self.attribute_closure(fd.left)
        return fd.right.issubset(closure)

# Example usage
attributes = ['A', 'B', 'C', 'D', 'E']
fds = [
    FunctionalDependency('A', 'B'),
    FunctionalDependency('B', 'C'),
    FunctionalDependency('C', 'D'),
    FunctionalDependency(['D', 'E'], 'A')
]

schema = RelationalSchema(attributes, fds)

# Find closure of {A}
closure_A = schema.attribute_closure({'A'})
print(f"Closure of A: {closure_A}")

# Find candidate keys
candidate_keys = schema.find_candidate_keys()
print(f"Candidate keys: {candidate_keys}")
\`\`\`

## Inference Rules and Closure

### Closure of FD Set

The closure $F^+$ of FD set $F$ is:

$F^+ = \\{X \\rightarrow Y : X \\rightarrow Y \\text{ can be derived from } F\\}$

### Canonical Cover

Minimal set of FDs equivalent to original set.

**Properties:**
- No extraneous attributes in left side
- No redundant FDs
- Right side is single attribute

**Algorithm:**
1. Replace each FD $X \\rightarrow \\{A_1, A_2, ..., A_n\\}$ with $X \\rightarrow A_i$
2. Remove extraneous attributes from left sides
3. Remove redundant FDs

### Equivalence of FD Sets

Two FD sets $F$ and $G$ are equivalent if $F^+ = G^+$

**Test:** $F \\equiv G$ iff every FD in $F$ can be derived from $G$ and vice versa

## Normalization Process

### First Normal Form (1NF)

Relation is in 1NF if all attribute values are atomic.

**Violations:**
- Multi-valued attributes
- Composite attributes
- Nested relations

### Second Normal Form (2NF)

Relation is in 2NF if:
- It's in 1NF
- No partial dependency exists

**Partial Dependency:** Non-prime attribute depends on proper subset of candidate key

### Third Normal Form (3NF)

Relation is in 3NF if:
- It's in 2NF  
- No transitive dependency exists

**Transitive Dependency:** $X \\rightarrow Y$, $Y \\rightarrow Z$, and $Y$ is not candidate key

**Alternative definition:** For every FD $X \\rightarrow A$:
- $A \\in X$ (trivial), or
- $X$ is superkey, or  
- $A$ is prime attribute

### Boyce-Codd Normal Form (BCNF)

Relation is in BCNF if for every FD $X \\rightarrow Y$:
- $Y \\subseteq X$ (trivial), or
- $X$ is superkey

**BCNF is stronger than 3NF**

## Decomposition

### Lossless Decomposition

Decomposition $R = R_1 \\cup R_2$ is lossless if:

$R = R_1 ⋈ R_2$

**Test:** $(R_1 \\cap R_2) \\rightarrow R_1$ or $(R_1 \\cap R_2) \\rightarrow R_2$

### Dependency Preservation

Decomposition preserves dependencies if:

$(F_1 \\cup F_2 \\cup ... \\cup F_n)^+ = F^+$

Where $F_i$ are FDs that apply to $R_i$

### Decomposition Algorithms

#### 3NF Decomposition

**Algorithm:**
1. Find canonical cover of F
2. For each FD $X \\rightarrow A$ in canonical cover, create relation $R_i(XA)$
3. If no relation contains candidate key, add relation with candidate key
4. Remove redundant relations

#### BCNF Decomposition

**Algorithm:**
1. If relation is in BCNF, stop
2. Find violating FD $X \\rightarrow Y$
3. Decompose into $R_1(X^+)$ and $R_2(R - X^+ + X)$
4. Recursively apply to both relations

## Multi-Valued Dependencies

### Definition

Multi-valued dependency $X \\rightarrow\\rightarrow Y$ holds if:

For tuples with same X value, Y values are independent of other attributes.

**Mathematical definition:**
$\\forall t_1, t_2 \\in R: t_1[X] = t_2[X] \\Rightarrow \\exists t_3, t_4 \\in R$ such that:
- $t_3[X] = t_4[X] = t_1[X] = t_2[X]$
- $t_3[Y] = t_1[Y]$ and $t_3[Z] = t_2[Z]$
- $t_4[Y] = t_2[Y]$ and $t_4[Z] = t_1[Z]$

### Fourth Normal Form (4NF)

Relation is in 4NF if for every MVD $X \\rightarrow\\rightarrow Y$:
- $Y \\subseteq X$ or $X \\cup Y = R$ (trivial), or
- $X$ is superkey

## Performance Implications

### Query Optimization

**Join Cost:** $Cost(R_1 ⋈ R_2) = |R_1| \\times |R_2| \\times selectivity$

**Index Usage:** FDs help determine useful indexes

### Storage Efficiency

**Normalization Trade-offs:**
- Higher normalization: Less redundancy, more joins
- Lower normalization: More redundancy, fewer joins

**Optimal design:** Balance based on access patterns

---

*The Relational Model and Functional Dependencies provide the theoretical foundation for designing efficient, consistent, and maintainable database systems!*

> Understanding these concepts is crucial for database designers to create schemas that minimize redundancy while maintaining data integrity and query performance.

`;

export default content;