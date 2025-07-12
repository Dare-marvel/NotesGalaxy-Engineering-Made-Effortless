const LinearAlgebraLA4 = [
  {
    question: "Given two vectors (1, 2, 3) and (4, 5, 6). What's their dot product?",
    options: ["32", "26", "29", "35"],
    correct: 0,
    category: "LA"
  },
  {
    question: "A system of linear equations has a unique solution if and only if...",
    options: ["the coefficient matrix is invertible.", "the determinant is zero.", "the rows are linearly independent.", "the matrix has full column rank."],
    correct: 0,
    category: "LA"
  },
  {
    question: "The determinant of a 3x3 matrix is 6. What is the determinant of the matrix obtained by multiplying each row by 2?",
    options: ["12", "18", "24", "48"],
    correct: 3,
    category: "LA"
  },
  {
    question: "Find the value of  k  for which the system  x + 2y = 3 and 3x + ky = 9 has infinitely many solutions?",
    options: ["6", "4", "2", "Infinite solutions"],
    correct: 0,
    category: "LA"
  },
  {
    question: "Which is the correct relationship between the rank and nullity of a matrix?",
    options: ["rank + nullity = rows.", "rank + nullity = cols.", "rank - nullity = rows.", "rank + nullity = rows + cols."],
    correct: 1,
    category: "LA"
  },
  {
    question: "In a 2x2 matrix with eigenvalues λ1 = 2 and λ2 = 3, what is the determinant of the matrix?",
    options: ["5", "6", "9", "7"],
    correct: 1,
    category: "LA"
  },
  {
    question: "What is the characteristic equation of the matrix  A = [[1, 2], [3, 4]]?",
    options: ["\u03bb^2 - 5\u03bb + 2 = 0", "\u03bb^2 + 5\u03bb - 2 = 0", "\u03bb^2 + 5\u03bb + 2 = 0", "\u03bb^2 - 5\u03bb - 2 = 0"],
    correct: 0,
    category: "LA"
  },
  {
    question: "If A is an orthogonal matrix, what is true about the columns of A?",
    options: ["They are parallel.", "They are orthogonal to each other.", "They have zero length.", "They are linearly dependent."],
    correct: 1,
    category: "LA"
  },
  {
    question: "Determine the null space dimension of a 4x5 matrix with rank 3.",
    options: ["0", "1", "2", "3"],
    correct: 2,
    category: "LA"
  },
  {
    question: "A 2x2 matrix has eigenvalues 2 and 3. What is the determinant of the matrix?",
    options: ["1", "6", "5", "0"],
    correct: 1,
    category: "LA"
  },
  {
    question: "If a transformation preserves lengths and angles, what type of transformation is it?",
    options: ["Invertible", "Orthogonal", "Linear", "Symmetric"],
    correct: 1,
    category: "LA"
  },
  {
    question: "What is the trace of a 2x2 identity matrix?",
    options: ["0", "1", "2", "4"],
    correct: 2,
    category: "LA"
  },
  {
    question: "What's the null space of a 3x3 matrix with 3 linearly independent columns?",
    options: ["{(0,0,0)}", "{0}", "The entire R^3 space", "Not Defined"],
    correct: 0,
    category: "LA"
  },
  {
    question: "Given the matrix A = \n[[1, 2, 3],\n[4, 5, 6],\n[7, 8, 9]], what is the determinant of the adjugate of A?",
    options: ["0", "1", "-1", "9"],
    correct: 0,
    category: "LA"
  },
  {
    question: "A linear transformation T: R³ → R² is defined by T(x, y, z) = (x + 2y, 3y - z). What is the matrix representation of T?",
    options: ["[[1, 2, 0], [0, 3, -1]]", "[[1, 0, 0], [2, 3, -1]]", "[[1, 2, 0], [0, 0, 3]]", "[[1, 0, 0], [2, 3, 0]]"],
    correct: 0,
    category: "LA"
  },
  {
    question: "Consider a system of linear equations represented by Ax = b. If rank(A) = rank([A|b]) and rank(A) < n (where n is the number of variables), then which of the following statements is true?",
    options: ["The system has a unique solution", "The system has infinitely many solutions", "The system is inconsistent", "The system has no solution"],
    correct: 1,
    category: "LA"
  },
  {
    question: "Which of the following is an eigenvector of the matrix M = [[2, 1], [1, 2]]?",
    options: ["[1, 0]", "[0, 1]", "[1, 1]", "[-1, 1]"],
    correct: 2,
    category: "LA"
  },
  {
    question: "For a 4x4 matrix, if two rows are identical, then the determinant is equal to?",
    options: ["0", "1", "2", "-1"],
    correct: 0,
    category: "LA"
  },
  {
    question: "In a vector space V over the field F, if {v1, v2, v3} is a linearly independent set, then what is the dimension of the subspace spanned by these vectors?",
    options: ["1", "2", "3", "4"],
    correct: 2,
    category: "LA"
  },
  {
    question: "What is the nullity of the matrix A = [[1, 2], [2, 4]]?",
    options: ["0", "1", "2", "3"],
    correct: 1,
    category: "LA"
  },
  {
    question: "What is the trace of the matrix  [[3, 4], [5, 6]]?",
    options: ["3", "6", "9", "11"],
    correct: 1,
    category: "LA"
  },
  {
    question: "If A is a 3x3 matrix with eigenvalues 1, 2, 3, what is the determinant of A?",
    options: ["6", "3", "1", "0"],
    correct: 0,
    category: "LA"
  },
  {
    question: "Find the orthogonal projection of the vector [1, 2] onto the vector [3, 4]",
    options: ["[3, 4]", "[9/5, 12/5]", "[9/25, 12/25]", "[1.8, 2.4]"],
    correct: 1,
    category: "LA"
  },
  {
    question: "Given the vectors u = [1, 0, 1] and v = [0, 1, 0], what is the cosine of the angle between them?",
    options: ["0", "1/\u221a2", "1/\u221a3", "1/\u221a6"],
    correct: 2,
    category: "LA"
  },
  {
    question: "What is the rank of a 3x2 matrix?",
    options: ["1", "2", "3", "0"],
    correct: 1,
    category: "LA"
  },
  {
    question: "Which concept is fundamental in understanding how linear transformations affect the geometric properties of objects in space?",
    options: ["Eigenvectors", "Eigenvalues", "Determinants", "Vector Spaces"],
    correct: 0,
    category: "LA"
  },
  {
    question: "A transformation T maps a square to a parallelogram. Which concept best describes this alteration?",
    options: ["Inverse", "Linear Transformation", "Eigenvalues", "Rotation"],
    correct: 1,
    category: "LA"
  },
  {
    question: "In Cramer's Rule, how do we calculate the solution for an unknown variable?",
    options: ["Divide a determinant by another determinant", "Sum of determinants", "Subtract determinants", "Square determinants"],
    correct: 0,
    category: "LA"
  },
  {
    question: "If A is an invertible matrix and Ax = b, then x = ?",
    options: ["A\u207b\u00b9b", "b\u207b\u00b9A", "Ab\u207b\u00b9", "b/A"],
    correct: 0,
    category: "LA"
  },
  {
    question: "What is the characteristic polynomial of a 2x2 identity matrix?",
    options: ["\u03bb\u00b2 - 2\u03bb + 1", "\u03bb\u00b2 - 1", "\u03bb\u00b2 - 2\u03bb", "\u03bb\u00b2 + 1"],
    correct: 1,
    category: "LA"
  },
  {
    question: "If matrix A is orthogonal, what property does its inverse satisfy?",
    options: ["A\u207b\u00b9 = A\u1d40", "A\u207b\u00b9 = -A\u1d40", "A\u207b\u00b9 = A", "A\u207b\u00b9 = -A"],
    correct: 0,
    category: "LA"
  },
  {
    question: "What is the null space of a matrix?",
    options: ["The set of all vectors that are orthogonal to the matrix", "The set of all vectors that equal the zero vector", "The set of all vectors that multiply to the zero vector", "The set of all vectors mapped to the zero vector by the matrix"],
    correct: 3,
    category: "LA"
  },
  {
    question: "Which concept describes the maximum number of linearly independent vectors in a vector space?",
    options: ["Span", "Dimension", "Basis", "Linear Combination"],
    correct: 1,
    category: "LA"
  },
  {
    question: "A diagonalizable matrix A has how many distinct eigenvalues?",
    options: ["equal to the rank of A", "equal to the number of linearly independent eigenvectors", "equal to the dimension of the matrix", "equal to the trace of A"],
    correct: 2,
    category: "LA"
  },
  {
    question: "What is the Gram-Schmidt process used for?",
    options: ["Finding eigenvalues", "Orthogonalizing a set of vectors", "Solving systems of linear equations", "Calculating determinants"],
    correct: 1,
    category: "LA"
  },
  {
    question: "How many possible solutions are there in a system of linear equations with more variables than equations?",
    options: ["0", "1", "Infinite", "2"],
    correct: 2,
    category: "LA"
  },
  {
    question: "Given a linear transformation T: R³ → R² defined by T(x, y, z) = (x + 2y, 3y - z), what is the dimension of the kernel of T?",
    options: ["0", "1", "2", "3"],
    correct: 1,
    category: "LA"
  },
  {
    question: "Consider the matrix A = [[1, 2, 3], [4, 5, 6], [7, 8, 9]].  What is the rank of A?",
    options: ["0", "1", "2", "3"],
    correct: 2,
    category: "LA"
  },
  {
    question: "Which of the following statements is true regarding eigenvalues and eigenvectors of a matrix?",
    options: ["Eigenvectors corresponding to distinct eigenvalues are linearly independent.", "Eigenvalues are always positive.", "Eigenvectors must be orthogonal to each other.", "Eigenvalues must be real."],
    correct: 0,
    category: "LA"
  },
  {
    question: "A system of linear equations has infinitely many solutions.  Which of the following statements MUST be true?",
    options: ["The system is inconsistent.", "The coefficient matrix has full rank.", "The augmented matrix has a row of zeros.", "The system has more unknowns than equations."],
    correct: 2,
    category: "LA"
  },
  {
    question: "Let A be a 3x3 matrix.  If det(A) = 2, what is det(2A)?",
    options: ["2", "4", "6", "8"],
    correct: 2,
    category: "LA"
  },
  {
    question: "Find the determinant of the matrix: [[1, 0, 0], [0, 2, 0], [0, 0, -1]]",
    options: ["-2", "0", "1", "2"],
    correct: 0,
    category: "LA"
  },
  {
    question: "In a vector space V, what is the dimension of the subspace spanned by {v1, v2, v3} if {v1, v2, v3} is linearly dependent?",
    options: ["0", "1", "2", "3"],
    correct: 2,
    category: "LA"
  },
  {
    question: "Which method is NOT used to solve a system of linear equations?",
    options: ["Gaussian Elimination", "Cramer's Rule", "Eigenvalue Decomposition", "Matrix Inversion"],
    correct: 2,
    category: "LA"
  },
  {
    question: "What is the dot product of the vectors <1, 2, 3> and <-1, 0, 1>?",
    options: ["-1", "1", "2", "3"],
    correct: 0,
    category: "LA"
  },
  {
    question: "A 2x2 matrix with eigenvalues 2 and -3 has what determinant?",
    options: ["-6", "0", "2", "-3"],
    correct: 0,
    category: "LA"
  },
  {
    question: "Given A = [[1,2],[3,4]]. What is the trace of A?",
    options: ["1", "5", "7", "8"],
    correct: 1,
    category: "LA"
  },
  {
    question: "If A is an orthogonal matrix, what is |det(A)|?",
    options: ["0", "1", "-1", "2"],
    correct: 1,
    category: "LA"
  },
  {
    question: "What is the null space of a 3x2 matrix with full column rank?",
    options: ["{0}", "R\u00b2", "R\u00b3", "The entire 3x2 matrix"],
    correct: 0,
    category: "LA"
  },
  {
    question: "If a linear transformation maps a basis of R^n to a linearly dependent set in R^m, what can you deduce about m and n?",
    options: ["m > n", "m < n", "m = n", "m = n+1"],
    correct: 0,
    category: "LA"
  }
];

export default LinearAlgebraLA4;
