const LinearAlgebraLA2 = [
  {
    question: "Find the eigenvalues of the matrix  [[2, 1], [0, 2]]",
    options: ["2, 2", "1, 2", "0, 2", "2, 1"],
    correct: 0,
    category: "LA"
  },
  {
    question: "What is the rank of the matrix [[1, 2, 3], [4, 5, 6], [7, 8, 9]]?",
    options: ["1", "2", "3", "0"],
    correct: 2,
    category: "LA"
  },
  {
    question: "Given two vectors u = (1, 2) and v = (3, 4), what is the projection of u onto v?",
    options: ["(9/5, 12/5)", "(3/5, 4/5)", "(2/5, 4/5)", "(18/5, 24/5)"],
    correct: 0,
    category: "LA"
  },
  {
    question: "A transformation T is defined by  T(x, y) = (2x, y+x). Which property does it NOT possess?",
    options: ["Linearity", "Invertibility", "Bijectivity", "Additivity"],
    correct: 1,
    category: "LA"
  },
  {
    question: "Which of the following transformations are linear?",
    options: ["f(x,y) = x^2 + y", "g(x,y) = (x+y, 2x)", "h(x,y) = (x, sin(y))", "i(x,y) = (x+2, y)"],
    correct: 1,
    category: "LA"
  },
  {
    question: "What is the nullity of a 3x4 matrix with rank 2?",
    options: ["0", "1", "2", "3"],
    correct: 2,
    category: "LA"
  },
  {
    question: "If A is a 5x5 matrix with det(A)=0, which statement must be true?",
    options: ["A is invertible", "A has a zero eigenvalue", "A has full rank", "A is symmetric"],
    correct: 1,
    category: "LA"
  },
  {
    question: "What is the dimension of the vector space of all 2x3 matrices?",
    options: ["5", "6", "8", "9"],
    correct: 3,
    category: "LA"
  },
  {
    question: "Given vectors u = (1, 0, 1) and v = (0, 1, 1), what is the angle between them?",
    options: ["\u03c0/2", "\u03c0/3", "\u03c0/4", "\u03c0/6"],
    correct: 1,
    category: "LA"
  },
  {
    question: "If A is a 3x3 matrix and its columns form an orthonormal basis, what is the inverse of A?",
    options: ["A^T", "A^-1", "A^T*A", "A*A^T"],
    correct: 0,
    category: "LA"
  },
  {
    question: "Consider a Markov chain represented by a transition matrix. What is the interpretation of the eigenvector corresponding to the eigenvalue 1?",
    options: ["The steady-state distribution", "The initial state", "The transition probability", "The absorbing state"],
    correct: 0,
    category: "LA"
  },
  {
    question: "Which operation is NOT permitted on a matrix during Gaussian elimination?",
    options: ["Multiplying a row by a non-zero scalar", "Swapping two rows", "Adding a multiple of one row to another row", "Dividing a row by a zero scalar"],
    correct: 3,
    category: "LA"
  },
  {
    question: "In a vector space, which set of vectors is guaranteed to be linearly independent?",
    options: ["Any set of three vectors in a 2-dimensional vector space", "Any set of vectors spanning the entire vector space", "Any set of basis vectors", "Any set of non-zero vectors"],
    correct: 2,
    category: "LA"
  },
  {
    question: "Given a linear transformation T: R² → R², what does it represent?",
    options: ["A function that maps R2 to another vector in R2", "A linear equation", "A 2x2 matrix", "A geometric transformation like rotation or scaling"],
    correct: 3,
    category: "LA"
  },
  {
    question: "If A is a 3x3 matrix with characteristic polynomial λ³ - 2λ² + λ - 2 = 0, what is the trace of A?",
    options: ["-2", "2", "1", "-1"],
    correct: 0,
    category: "LA"
  },
  {
    question: "What is the rank of the zero matrix?",
    options: ["0", "1", "undefined", "Infinity"],
    correct: 0,
    category: "LA"
  },
  {
    question: "How many linearly independent eigenvectors can a 4x4 matrix have?",
    options: ["0", "1", "4", "Cannot be determined without knowing eigenvalues"],
    correct: 2,
    category: "LA"
  },
  {
    question: "In what specific scenario is a matrix's determinant equal to zero?",
    options: ["When all its rows are identical", "When a row is a multiple of another", "When the matrix is invertible", "When its rows are orthogonal"],
    correct: 0,
    category: "LA"
  },
  {
    question: "What is the null space of a matrix?",
    options: ["The set of all vectors that result in the zero vector when multiplied by the matrix", "The set of vectors that lie in the span of the rows", "The set of vectors that are orthogonal to the matrix", "The inverse of the matrix"],
    correct: 0,
    category: "LA"
  },
  {
    question: "Given the matrix A = \n[[1, 2, 3], [4, 5, 6], [7, 8, 9]], what is the rank of the matrix?",
    options: ["0", "1", "2", "3"],
    correct: 2,
    category: "LA"
  },
  {
    question: "If a linear transformation T: R^3 -> R^2 is defined by T(x, y, z) = (x+y, 2y-z), what is the standard matrix representation of T?",
    options: ["[[1, 1, 0], [0, 2, -1]]", "[[1, 0, 0], [1, 2, 0], [0, -1, 0]]", "[[1, 1, 0], [2, -1, 0]]", "[[1, 1], [0, 2], [0, -1]]"],
    correct: 0,
    category: "LA"
  },
  {
    question: "Consider the following system of linear equations: x + 2y = 3, 2x + 4y = 6. Determine the nature of the solution(s).",
    options: ["Unique solution", "Infinite solutions", "No solution", "Depends on the values of x and y"],
    correct: 1,
    category: "LA"
  },
  {
    question: "What is the nullity of the matrix A = [[1, 2], [2, 4]]?",
    options: ["0", "1", "2", "3"],
    correct: 1,
    category: "LA"
  },
  {
    question: "A transformation T : R^2 → R^2 is defined by T(x, y) = (2x - y, x + 3y).  Which of the following is NOT true?",
    options: ["T is a linear transformation", "The matrix of T has determinant 7", "The range of T is R^2", "T is invertible"],
    correct: 3,
    category: "LA"
  },
  {
    question: "Find the eigenvalue(s) of the matrix A = [[2, 1], [0, 2]]",
    options: ["1, 2", "2, 0", "2, 2", "1, 1"],
    correct: 2,
    category: "LA"
  },
  {
    question: "What is the dot product of vectors u = (1, 2, 3) and v = (4, 5, 6)?",
    options: ["32", "25", "30", "10"],
    correct: 0,
    category: "LA"
  },
  {
    question: "If A and B are 3x3 matrices with det(A)=2 and det(B)=3, what is det(AB)?",
    options: ["5", "6", "1", "2"],
    correct: 1,
    category: "LA"
  },
  {
    question: "A 2x2 matrix is given by [[a, b], [c, d]]. For which condition is the matrix singular?",
    options: ["ad - bc = 0", "a + d = 0", "a = d", "b = c"],
    correct: 0,
    category: "LA"
  },
  {
    question: "Find the eigenvector of the matrix [[1,2],[3,4]] corresponding to the eigenvalue 5.",
    options: ["[2,1]", "[-1,1]", "[1,2]", "[1,3]"],
    correct: 1,
    category: "LA"
  },
  {
    question: "The set of all linear combinations of the vectors {(1, 0, 0), (0, 1, 0)} forms which subspace?",
    options: ["x-y plane", "xy plane", "yz plane", "xz plane"],
    correct: 1,
    category: "LA"
  },
  {
    question: "If A is a 4x4 matrix, and its determinant is 2, what is the determinant of 2A?",
    options: ["8", "16", "2", "32"],
    correct: 3,
    category: "LA"
  },
  {
    question: "What is the dimension of the null space of the identity matrix?",
    options: ["1", "0", "2", "4"],
    correct: 1,
    category: "LA"
  },
  {
    question: "Which of the following is not a linear transformation?",
    options: ["Projection onto a line", "Rotation about a point", "Reflection across a plane", "Scaling by a factor"],
    correct: 1,
    category: "LA"
  },
  {
    question: "What is the trace of the matrix [[1, 2], [3, 4]]?",
    options: ["5", "7", "6", "2"],
    correct: 0,
    category: "LA"
  },
  {
    question: "Given A = [[1, 2], [3, 4]], which scalar is the determinant of A?",
    options: ["-2", "2", "5", "-5"],
    correct: 0,
    category: "LA"
  },
  {
    question: "A vector is orthogonal to another vector if their dot product is:",
    options: ["1", "0", "Infinity", "Negative"],
    correct: 1,
    category: "LA"
  },
  {
    question: "What is the rank-nullity theorem for a linear transformation T: V → W?",
    options: ["dim(V) = dim(ker(T)) + dim(range(T))", "dim(ker(T)) + dim(im(T)) = dim(V)", "dim(ker(T)) + dim(range(T)) = dim(W)", "dim(ker(T)) = dim(range(T))"],
    correct: 0,
    category: "LA"
  },
  {
    question: "Which of the following is an example of a non-invertible matrix?",
    options: ["an identity matrix", "a matrix with a non-zero determinant", "a diagonal matrix with non-zero diagonal elements", "a matrix with a zero determinant"],
    correct: 3,
    category: "LA"
  },
  {
    question: "The solution set to a system of homogeneous linear equations is a ______.",
    options: ["line", "point", "plane", "vector space"],
    correct: 3,
    category: "LA"
  },
  {
    question: "If A is a 5x5 matrix with linearly dependent columns, what is the value of det(A)?",
    options: ["0", "1", "5", "25"],
    correct: 0,
    category: "LA"
  },
  {
    question: "Which of the following is not a property of eigenvectors?",
    options: ["Eigenvectors corresponding to distinct eigenvalues are linearly independent", "The zero vector is an eigenvector of any square matrix", "Eigenvectors corresponding to the same eigenvalue are linearly dependent", "Eigenvectors of a symmetric matrix corresponding to distinct eigenvalues are orthogonal"],
    correct: 1,
    category: "LA"
  },
  {
    question: "A linear transformation T : R^3 → R^3 rotates vectors by 90 degrees about the x-axis. What is the determinant of the matrix representing T?",
    options: ["-1", "0", "1", "90"],
    correct: 0,
    category: "LA"
  },
  {
    question: "Given a linear transformation T: V→V, when is the transformation represented by an orthogonal matrix? ",
    options: ["When the transformation preserves lengths of vectors", "When the transformation preserves dot products of vectors", "Both a and b", "None of the above"],
    correct: 2,
    category: "LA"
  },
  {
    question: "Given a 3x3 matrix A with eigenvalues λ1 = 2, λ2 = -1, λ3 = 3, what is the determinant of A?",
    options: ["-6", "6", "0", "1"],
    correct: 0,
    category: "LA"
  },
  {
    question: "A linear transformation T maps vectors in R^3 to R^2.  If the transformation is represented by a 2x3 matrix, what is the dimension of the null space of T?",
    options: ["0", "1", "2", "3"],
    correct: 2,
    category: "LA"
  },
  {
    question: "Which of the following is NOT a property of an orthogonal matrix?",
    options: ["Its inverse is equal to its transpose", "Its determinant is either 1 or -1", "Its columns form an orthonormal set", "Its rows form a linearly dependent set"],
    correct: 3,
    category: "LA"
  },
  {
    question: "Consider a system of linear equations represented by Ax = b.  If the rank of A is equal to the number of variables in x, what can be said about the solution(s)?",
    options: ["There are infinitely many solutions", "There is a unique solution", "There are no solutions", "The solution space is a plane"],
    correct: 1,
    category: "LA"
  },
  {
    question: "For a 4x4 matrix, what is the minimum number of linearly independent eigenvectors needed to diagonalize it?",
    options: ["1", "2", "3", "4"],
    correct: 3,
    category: "LA"
  },
  {
    question: "A transformation T maps vectors in R^2 to R^3.  If T is a linear transformation, what is the maximum possible rank of the transformation matrix?",
    options: ["1", "2", "3", "4"],
    correct: 2,
    category: "LA"
  },
  {
    question: "If the characteristic polynomial of a 2x2 matrix is λ² - 5λ + 6 = 0, what are the eigenvalues?",
    options: ["2, 3", "2, -3", "-2, -3", "-2, 3"],
    correct: 0,
    category: "LA"
  }
];

export default LinearAlgebraLA2;
