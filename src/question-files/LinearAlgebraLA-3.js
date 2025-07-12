const LinearAlgebraLA3 = [
  {
    question: "Which of the following is NOT a type of vector space?",
    options: ["Set of all polynomials of degree 2 or less", "Set of all continuous functions on [0, 1]", "Set of all matrices with dimensions 2x2", "Set of all integers"],
    correct: 3,
    category: "LA"
  },
  {
    question: "Let A and B be two nxn matrices. If AB = 0, what can we say about the rank of B?",
    options: ["rank(B) = n", "rank(B) <= n-1", "rank(B) >= n", "rank(B) = 0"],
    correct: 1,
    category: "LA"
  },
  {
    question: "What is the trace of a 3x3 identity matrix?",
    options: ["0", "1", "3", "9"],
    correct: 2,
    category: "LA"
  },
  {
    question: "What is the nullity of a 4x3 matrix if its rank is 2?",
    options: ["0", "1", "2", "3"],
    correct: 1,
    category: "LA"
  },
  {
    question: "Which is an example of a non-linear transformation?",
    options: ["Projection onto a line", "Rotation about an axis", "Squaring a vector's components", "Reflection across a plane"],
    correct: 2,
    category: "LA"
  },
  {
    question: "Given a square matrix A, what does it imply if the determinant of A is 0?",
    options: ["A is invertible", "A has a unique inverse", "A is singular", "A has full rank"],
    correct: 2,
    category: "LA"
  },
  {
    question: "How many linearly independent eigenvectors can a 3x3 matrix have at most?",
    options: ["0", "1", "2", "3"],
    correct: 3,
    category: "LA"
  },
  {
    question: "In Gram-Schmidt process, what do we obtain at the end?",
    options: ["An orthogonal matrix", "An orthonormal basis", "An eigenvector", "A diagonal matrix"],
    correct: 1,
    category: "LA"
  },
  {
    question: "A 2x2 matrix has eigenvalues 2 and 3. What is the determinant of the matrix?",
    options: ["5", "6", "7", "9"],
    correct: 1,
    category: "LA"
  },
  {
    question: "Which operation on a matrix is NOT necessarily a linear transformation?",
    options: ["Scalar multiplication", "Matrix addition", "Taking the determinant", "Matrix multiplication"],
    correct: 2,
    category: "LA"
  },
  {
    question: "What is the dimension of the vector space of all 2x2 symmetric matrices?",
    options: ["2", "3", "4", "5"],
    correct: 3,
    category: "LA"
  },
  {
    question: "What is the geometric interpretation of the nullspace of a linear transformation?",
    options: ["The set of all vectors mapped to zero", "The set of all vectors parallel to a line", "The set of all vectors mapped to a single vector", "The set of all vectors that are perpendicular to a plane"],
    correct: 0,
    category: "LA"
  },
  {
    question: "If a matrix A has linearly dependent columns, what is the rank of A?",
    options: ["0", "1", "2", "Greater than or equal to 2"],
    correct: 1,
    category: "LA"
  },
  {
    question: "In an orthogonal projection onto a line, what is the nullspace of the projection matrix?",
    options: ["The line itself", "A plane perpendicular to the line", "The vector space the projection lies in", "A point on the line"],
    correct: 0,
    category: "LA"
  },
  {
    question: "Given a 5x5 matrix with a determinant of 0, what can be said about its columns/rows?",
    options: ["Linearly Independent", "Linearly Dependent", "Orthogonal", "Symmetric"],
    correct: 1,
    category: "LA"
  },
  {
    question: "What is the dimension of the vector space of all 3x3 skew-symmetric matrices?",
    options: ["3", "6", "9", "12"],
    correct: 1,
    category: "LA"
  },
  {
    question: "Given a 3x3 matrix A with eigenvalues λ1 = 2, λ2 = -1, λ3 = 3.  What is the determinant of A?",
    options: ["-6", "6", "2", "-2"],
    correct: 0,
    category: "LA"
  },
  {
    question: "A transformation T: R³ → R² is defined by T(x, y, z) = (2x - y, x + 3z).  What is the nullity of T?",
    options: ["0", "1", "2", "3"],
    correct: 1,
    category: "LA"
  },
  {
    question: "Which of the following is an example of a singular matrix?",
    options: ["[[1, 0], [0, 1]]", "[[1, 2], [3, 4]]", "[[2, 0], [0, 0]]", "[[1, 1], [2, 2]]"],
    correct: 2,
    category: "LA"
  },
  {
    question: "For a linear transformation T: R² → R², if T(1, 0) = (1, 2) and T(0, 1) = (3, 4), what is T(2, -1)?",
    options: ["(-1, -2)", "(5, 2)", "(-2, -2)", "(1, 6)"],
    correct: 1,
    category: "LA"
  },
  {
    question: "Find the rank of the matrix [[1, 2, 3], [4, 5, 6], [7, 8, 9]]",
    options: ["0", "1", "2", "3"],
    correct: 2,
    category: "LA"
  },
  {
    question: "What is the characteristic equation for a 2x2 matrix A = [[a, b], [c, d]]?",
    options: ["\u03bb\u00b2 - (a+d)\u03bb + (ad-bc) = 0", "\u03bb\u00b2 - (a+d)\u03bb + bc = 0", "\u03bb\u00b2 + (a+d)\u03bb - (ad-bc) = 0", "\u03bb\u00b2 + (a-d)\u03bb + ad = 0"],
    correct: 0,
    category: "LA"
  },
  {
    question: "If A and B are 3x3 matrices such that AB = 0, then which of the following statements must be true?",
    options: ["A is invertible", "B is invertible", "A or B is non-invertible", "Both A and B are invertible"],
    correct: 2,
    category: "LA"
  },
  {
    question: "The set of all vectors orthogonal to a given vector v forms a:",
    options: ["line", "plane", "hyperplane", "point"],
    correct: 1,
    category: "LA"
  },
  {
    question: "Given the vector space P₃(ℝ), the dimension of this space is:",
    options: ["3", "4", "2", "1"],
    correct: 0,
    category: "LA"
  },
  {
    question: "If A is an orthogonal matrix, what is true about its determinant?",
    options: ["|det(A)| = 1", "det(A) = 0", "det(A) = -1", "det(A) = 1 or -1"],
    correct: 3,
    category: "LA"
  },
  {
    question: "What is the dot product of vectors u = (1, 2, 3) and v = (4, -1, 2)?",
    options: ["5", "11", "9", "13"],
    correct: 1,
    category: "LA"
  },
  {
    question: "Which vector space operation does not have an inverse?",
    options: ["Vector Addition", "Scalar Multiplication", "Matrix Addition", "Inner Product"],
    correct: 0,
    category: "LA"
  },
  {
    question: "Find the eigenvalues of the matrix [[0,1],[0,0]]",
    options: ["0", "1", "2", "-1"],
    correct: 0,
    category: "LA"
  },
  {
    question: "A is a 3x3 matrix.  Its eigenvectors corresponding to distinct eigenvalues are necessarily:",
    options: ["linearly dependent", "orthogonal", "linearly independent", "none of the above"],
    correct: 2,
    category: "LA"
  },
  {
    question: "What is the null space of a 2x3 matrix?",
    options: ["A line", "A plane", "A point", "A vector"],
    correct: 1,
    category: "LA"
  },
  {
    question: "A non-zero vector orthogonal to all vectors in a subspace is called:",
    options: ["A normal vector", "An eigenvector", "A null vector", "A basis vector"],
    correct: 0,
    category: "LA"
  },
  {
    question: "Which theorem states the relationship between the rank and nullity of a linear transformation?",
    options: ["Cayley-Hamilton Theorem", "Rank-Nullity Theorem", "Schur's Theorem", "Gram-Schmidt Theorem"],
    correct: 1,
    category: "LA"
  },
  {
    question: "What is the trace of the matrix [[2, 1], [3, 4]]?",
    options: ["5", "6", "7", "8"],
    correct: 0,
    category: "LA"
  },
  {
    question: "The solution space of a homogeneous system of linear equations is:",
    options: ["always empty", "always a single point", "always a subspace", "can be any set of vectors"],
    correct: 2,
    category: "LA"
  },
  {
    question: "The Gram-Schmidt process is used to:",
    options: ["find eigenvalues", "solve linear systems", "orthogonalize vectors", "diagonalize matrices"],
    correct: 2,
    category: "LA"
  },
  {
    question: "If A is an n×n matrix and Ax=0 for all x ∈ Rn, then:",
    options: ["A is invertible", "A=I", "A=0", "det(A)=1"],
    correct: 2,
    category: "LA"
  },
  {
    question: "A square matrix A is diagonalizable if and only if:",
    options: ["A has n distinct eigenvalues", "A has n linearly independent eigenvectors", "A is symmetric", "A is orthogonal"],
    correct: 1,
    category: "LA"
  },
  {
    question: "What is the dimension of the vector space of all 2x2 matrices?",
    options: ["2", "4", "6", "8"],
    correct: 1,
    category: "LA"
  },
  {
    question: "The set of all linear combinations of a set of vectors forms a:",
    options: ["basis", "nullspace", "range", "kernel"],
    correct: 2,
    category: "LA"
  },
  {
    question: "Let A be a 3x3 matrix with eigenvalues λ1 = 2, λ2 = -1, λ3 = 3. What is the determinant of the matrix A^3?",
    options: ["18", "-6", "24", "54"],
    correct: 3,
    category: "LA"
  },
  {
    question: "Given the linear transformation T: R^3 → R^2 defined by T(x, y, z) = (2x - y, x + 3z), what is the nullity of T?",
    options: ["0", "1", "2", "3"],
    correct: 2,
    category: "LA"
  },
  {
    question: "A homogeneous system of linear equations has 4 unknowns. If the reduced row echelon form of the augmented matrix has 2 pivot columns, what is the dimension of the solution space?",
    options: ["0", "1", "2", "4"],
    correct: 2,
    category: "LA"
  },
  {
    question: "Which of the following is NOT a property of orthogonal matrices?",
    options: ["Their inverse is equal to their transpose.", "Their determinant is either 1 or -1.", "Their column vectors are orthonormal.", "Their row vectors are linearly dependent."],
    correct: 3,
    category: "LA"
  },
  {
    question: "If A is a 4x4 matrix with eigenvalues 1, 2, 3, and 4, what is the trace of A^2?",
    options: ["20", "30", "10", "50"],
    correct: 0,
    category: "LA"
  },
  {
    question: "Find the rank of the matrix  [[1, 2, 3], [4, 5, 6], [7, 8, 9]]",
    options: ["1", "2", "3", "0"],
    correct: 2,
    category: "LA"
  },
  {
    question: "Which of these is a possible eigenvector of the identity matrix?",
    options: ["(1, 0, 0)", "(1, 1, 1)", "(0, 0, 0)", "(-1, -1, -1)"],
    correct: 0,
    category: "LA"
  },
  {
    question: "What is the dimension of the vector space spanned by the vectors (1, 2, 3) and (4, 5, 6)?",
    options: ["1", "2", "3", "4"],
    correct: 1,
    category: "LA"
  },
  {
    question: "If A and B are similar matrices, what is the relationship between their eigenvalues?",
    options: ["A and B have the same eigenvalues.", "A and B have the same eigenvectors.", "A and B are equal matrices.", "A and B are not related."],
    correct: 0,
    category: "LA"
  },
  {
    question: "Determine the nullity of the linear transformation T(x, y, z) = (x + y, y - z)",
    options: ["1", "2", "3", "0"],
    correct: 1,
    category: "LA"
  }
];

export default LinearAlgebraLA3;
