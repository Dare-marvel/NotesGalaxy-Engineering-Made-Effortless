const LinearAlgebraLA1 = [
  {
    question: "Which of the following is NOT a fundamental operation in linear algebra?",
    options: ["Matrix multiplication", "Vector addition", "Determinant calculation", "Logarithm of a matrix"],
    correct: 3,
    category: "LA"
  },
  {
    question: "Given matrices A and B, which condition guarantees that the matrix product AB is defined?",
    options: ["Number of columns in A equals the number of rows in B", "Number of rows in A equals the number of columns in B", "A and B have the same dimensions", "A and B are both square matrices"],
    correct: 0,
    category: "LA"
  },
  {
    question: "What is the rank of a matrix with 5 rows and 3 columns if its nullity is 2?",
    options: ["0", "2", "3", "5"],
    correct: 1,
    category: "LA"
  },
  {
    question: "If A is a 3x3 matrix and det(A) = 0, which of the following statements is always true?",
    options: ["A is invertible", "A has full rank", "A is singular", "A has an eigenvalue of 0"],
    correct: 2,
    category: "LA"
  },
  {
    question: "The eigenvalues of a triangular matrix are...",
    options: ["the entries on the main diagonal", "the entries on the off-diagonal", "the determinant", "the trace"],
    correct: 0,
    category: "LA"
  },
  {
    question: "What is the dimension of the vector space spanned by the vectors [1, 2, 3] and [4, 5, 6]?",
    options: ["1", "2", "3", "6"],
    correct: 1,
    category: "LA"
  },
  {
    question: "What is the dot product of vectors [1, 2] and [-3, 4]?",
    options: ["-11", "-5", "5", "11"],
    correct: 1,
    category: "LA"
  },
  {
    question: "A system of linear equations has a unique solution if and only if...",
    options: ["the determinant of the coefficient matrix is zero", "the rank of the augmented matrix equals the rank of the coefficient matrix", "the rank of the augmented matrix is greater than the rank of the coefficient matrix", "the system has more variables than equations"],
    correct: 1,
    category: "LA"
  },
  {
    question: "Which of these is a type of matrix decomposition?",
    options: ["Gaussian Elimination", "QR Decomposition", "Row Echelon Form", "Cramer's Rule"],
    correct: 1,
    category: "LA"
  },
  {
    question: "What is the null space of a 3x3 zero matrix?",
    options: ["{0}", "R^3", "R^2", "R^1"],
    correct: 1,
    category: "LA"
  },
  {
    question: "Which is a characteristic equation of a matrix?",
    options: ["det(A) = 0", "det(A - \u03bbI) = 0", "A - \u03bbI = 0", "tr(A) = 0"],
    correct: 1,
    category: "LA"
  },
  {
    question: "If v1 and v2 are linearly independent vectors, which statement is true?",
    options: ["v1 = v2", "v1 + v2 = 0", "The span of v1 and v2 is R^2", "v1 and v2 cannot be in R^3"],
    correct: 2,
    category: "LA"
  },
  {
    question: "The inverse of a 2x2 matrix is found using what?",
    options: ["Gaussian elimination", "Determinant calculation", "Matrix transpose", "Cross product"],
    correct: 0,
    category: "LA"
  },
  {
    question: "What is the trace of a 2x2 matrix with diagonal entries 3 and 5?",
    options: ["0", "8", "15", "35"],
    correct: 1,
    category: "LA"
  },
  {
    question: "In linear transformations, what does a null space represent?",
    options: ["The vectors mapped to zero", "The vectors mapped to one", "The image of the space", "The orthogonal complement"],
    correct: 0,
    category: "LA"
  },
  {
    question: "What property do orthogonal vectors always satisfy?",
    options: ["They are parallel", "Their dot product is zero", "Their magnitudes are equal", "Their components are zero"],
    correct: 1,
    category: "LA"
  },
  {
    question: "If A is an orthogonal matrix, what is det(A)?",
    options: ["1 or -1", "0", "1", "2"],
    correct: 0,
    category: "LA"
  },
  {
    question: "Which is NOT a type of vector space?",
    options: ["Euclidean space", "Polynomial space", "Complex numbers", "Binary sequences"],
    correct: 3,
    category: "LA"
  },
  {
    question: "A system of linear equations has infinitely many solutions if...",
    options: ["the rank of the augmented matrix is less than the rank of the coefficient matrix", "the number of variables exceeds the number of equations", "the system is homogeneous", "the determinant of the coefficient matrix is 1"],
    correct: 0,
    category: "LA"
  },
  {
    question: "Which best describes a linear combination of vectors?",
    options: ["The sum of vectors", "A weighted sum of vectors", "The difference of vectors", "The product of vectors"],
    correct: 1,
    category: "LA"
  },
  {
    question: "What's the dimension of the null space of a matrix?",
    options: ["Rank", "Nullity", "Trace", "Determinant"],
    correct: 1,
    category: "LA"
  },
  {
    question: "A diagonalizable matrix has...",
    options: ["only 0 eigenvalues", "linearly independent eigenvectors", "all eigenvalues are 1", "no inverse"],
    correct: 1,
    category: "LA"
  },
  {
    question: "What operation transforms a matrix to a row-echelon form?",
    options: ["Matrix Multiplication", "Gaussian Elimination", "Cholesky Decomposition", "Singular Value Decomposition"],
    correct: 1,
    category: "LA"
  },
  {
    question: "Given a linear transformation T: R³ → R² defined by T(x, y, z) = (2x - y, x + 3z), find the matrix representation of T with respect to the standard bases.",
    options: ["[[2, -1, 0], [1, 0, 3]]", "[[2, -1, 0], [1, 3, 0]]", "[[2, -1, 0], [1, 0, 3]]", "[[2, 1, 0], [-1, 0, 3]]"],
    correct: 0,
    category: "LA"
  },
  {
    question: "Consider the matrix A = [[1, 2], [3, 4]]. What is the determinant of A⁻¹?",
    options: ["-1/5", "1/5", "-1", "1"],
    correct: 1,
    category: "LA"
  },
  {
    question: "A system of linear equations has an infinite number of solutions. Which statement is TRUE about the system?",
    options: ["The augmented matrix has a pivot in every row.", "The augmented matrix has more variables than equations.", "The system has a unique solution.", "The system's coefficient matrix has a zero determinant."],
    correct: 1,
    category: "LA"
  },
  {
    question: "If A is a 3x3 matrix with eigenvalues λ₁ = 2, λ₂ = -1, λ₃ = 3, what is the determinant of A?",
    options: ["-6", "6", "2", " -2"],
    correct: 0,
    category: "LA"
  },
  {
    question: "Which of the following is a valid inner product on R²?",
    options: ["\u27e8(x\u2081, y\u2081), (x\u2082, y\u2082)\u27e9 = x\u2081x\u2082 + 2y\u2081y\u2082", "\u27e8(x\u2081, y\u2081), (x\u2082, y\u2082)\u27e9 = x\u2081x\u2082 - y\u2081y\u2082", "\u27e8(x\u2081, y\u2081), (x\u2082, y\u2082)\u27e9 = 2x\u2081x\u2082 + 3y\u2081y\u2082", "\u27e8(x\u2081, y\u2081), (x\u2082, y\u2082)\u27e9 = x\u2081x\u2082 + y\u2081y\u2082"],
    correct: 0,
    category: "LA"
  },
  {
    question: "Find the rank of the matrix  [[1, 2, 3], [4, 5, 6], [7, 8, 9]]",
    options: ["0", "1", "2", "3"],
    correct: 2,
    category: "LA"
  },
  {
    question: "What is the nullity of a 5x3 matrix with rank 2?",
    options: ["0", "2", "3", "5"],
    correct: 2,
    category: "LA"
  },
  {
    question: "Which of the following matrices is not orthogonal?",
    options: ["[[0, 1], [1, 0]]", "[[1/\u221a2, -1/\u221a2], [1/\u221a2, 1/\u221a2]]", "[[1, 0], [0, 1]]", "[[2, 0], [0, 0]]"],
    correct: 3,
    category: "LA"
  },
  {
    question: "The characteristic polynomial of a 2x2 matrix A is (λ-2)(λ-3). What are the eigenvalues of A?",
    options: ["2, 3", "-2, -3", "2, -3", "3, 2"],
    correct: 0,
    category: "LA"
  },
  {
    question: "A Markov chain has a transition matrix. What is the meaning of a matrix entry above the main diagonal?",
    options: ["Probability of remaining in the same state", "Probability of moving from state i to state j", "Probability of being in state j", "Probability of moving from state j to state i"],
    correct: 1,
    category: "LA"
  },
  {
    question: "What is the trace of the product of two 2x2 matrices?",
    options: ["Product of the traces", "Sum of traces", "Difference of traces", "Square of the trace of sum of matrices"],
    correct: 1,
    category: "LA"
  },
  {
    question: "How many linearly independent vectors can be found in a set of 5 vectors in ℝ⁴?",
    options: ["0", "4", "5", "6"],
    correct: 3,
    category: "LA"
  },
  {
    question: "In a vector space, if v and w are orthogonal, what can be said about their dot product?",
    options: ["Positive", "Negative", "Zero", "Undefined"],
    correct: 2,
    category: "LA"
  },
  {
    question: "Given vectors v1 and v2, what is their cross product a vector in?",
    options: ["Same space as v1 and v2", "Orthogonal to the plane spanned by v1 and v2", "Parallel to the plane spanned by v1 and v2", "Depends on the dimension of the space"],
    correct: 1,
    category: "LA"
  },
  {
    question: "Find the null space of a 2x3 matrix with a column of zeros",
    options: ["{ (x, 0, z) | x, z \u2208 \u211d }", "{ (0, 0, 0) }", "{ (x, y, 0) | x, y \u2208 \u211d }", "{ (0, 0) }"],
    correct: 0,
    category: "LA"
  },
  {
    question: "For a set of vectors to span a vector space, what condition must hold?",
    options: ["Linear independence", "Linear dependence", "Orthogonality", "Spanning all basis vectors"],
    correct: 0,
    category: "LA"
  },
  {
    question: "What is the dimension of the vector space of all 3x3 symmetric matrices?",
    options: ["3", "6", "9", "18"],
    correct: 1,
    category: "LA"
  },
  {
    question: "Which process finds a basis for the column space of a matrix?",
    options: ["Gaussian elimination", "Gram-Schmidt", "Singular Value Decomposition", "Eigenvalue decomposition"],
    correct: 0,
    category: "LA"
  },
  {
    question: "What is the inverse of a rotation matrix by 90 degrees?",
    options: ["Rotation by 90 degrees", "Rotation by 270 degrees", "Rotation by 180 degrees", "Reflection across a line"],
    correct: 1,
    category: "LA"
  },
  {
    question: "In the context of computer graphics, what linear transformation is used for scaling?",
    options: ["Rotation", "Reflection", "Shear", "Dilation"],
    correct: 3,
    category: "LA"
  },
  {
    question: "What does the rank-nullity theorem relate?",
    options: ["Rank, nullity, and determinant", "Rank, nullity, and dimensions of matrix spaces", "Rank, nullity, and eigenvalues", "Rank, nullity, and eigenvectors"],
    correct: 1,
    category: "LA"
  },
  {
    question: "What is the characteristic equation of a matrix A?",
    options: ["det(A - \u03bbI) = 0", "det(A + \u03bbI) = 0", "tr(A) - \u03bb = 0", "A - \u03bb = 0"],
    correct: 0,
    category: "LA"
  },
  {
    question: "A matrix is diagonalizable if its size equals?",
    options: ["the number of linearly independent eigenvectors", "the number of linearly dependent eigenvectors", "the number of eigenvalues", "the number of rows"],
    correct: 0,
    category: "LA"
  },
  {
    question: "Given a linear transformation T: R³ → R² defined by T(x, y, z) = (2x - y, x + 3z), find the matrix representation of T with respect to the standard bases.",
    options: ["[[2, -1, 0], [1, 0, 3]]", "[[2, -1, 0], [1, 3, 0]]", "[[2, -1, 0], [0, 0, 3]]", "[[2, 1, 0], [1, 0, 3]]"],
    correct: 0,
    category: "LA"
  },
  {
    question: "Which of the following is NOT a subspace of R³?",
    options: ["The set of all vectors of the form (x, 0, 0)", "The set of all vectors of the form (x, y, z) where x+y+z=0", "The set of all vectors of the form (x, x, x)", "The set of all vectors perpendicular to (1, 0, 0)"],
    correct: 3,
    category: "LA"
  },
  {
    question: "Consider the matrix A = [[1, 2], [3, 4]]. What is the determinant of the inverse of A?",
    options: ["1/5", "-1/5", "5", "-5"],
    correct: 1,
    category: "LA"
  },
  {
    question: "A system of linear equations has infinitely many solutions.  Which statement is guaranteed to be true about the system?",
    options: ["The coefficient matrix has a determinant of 0.", "The augmented matrix has a row of zeros.", "The number of variables is greater than the number of equations.", "The system has a unique solution."],
    correct: 0,
    category: "LA"
  }
];

export default LinearAlgebraLA1;
