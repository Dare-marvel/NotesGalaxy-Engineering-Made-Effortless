export const blogContent = {
  "how-to-write-a-blog-here": {
    title: "Format for writing a blog here",
    content: `
# Format for all important notations used in blogs are given below, download this blog to understand how to write a blog on my website

## Introduction

Mathematical formulas are essential in computer science. Let's explore some key concepts.

### Inline Math

The famous equation $E = mc^2$ revolutionized physics. In computer science, we often use the Big O notation like $O(n^2)$ to describe time complexity.

### Block Math

The quadratic formula is:

$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$

### Summation

The sum of first n natural numbers:

$\\sum_{i=1}^{n} i = \\frac{n(n+1)}{2}$

## Code Example

Here's a Python implementation:

\`\`\`python
def quadratic_formula(a, b, c):
    discriminant = b**2 - 4*a*c
    if discriminant < 0:
        return "No real solutions"
    elif discriminant == 0:
        return -b / (2*a)
    else:
        import math
        sqrt_discriminant = math.sqrt(discriminant)
        x1 = (-b + sqrt_discriminant) / (2*a)
        x2 = (-b - sqrt_discriminant) / (2*a)
        return x1, x2
\`\`\`

## Matrix Operations

A 2x2 matrix multiplication:

$\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} \\begin{pmatrix} e & f \\\\ g & h \\end{pmatrix} = \\begin{pmatrix} ae+bg & af+bh \\\\ ce+dg & cf+dh \\end{pmatrix}$

> This is important for computer graphics and machine learning!

## Table Example

| Algorithm | Time Complexity | Space Complexity |
|-----------|----------------|------------------|
| Binary Search | $O(\\log n)$ | $O(1)$ |
| Merge Sort | $O(n \\log n)$ | $O(n)$ |
| Quick Sort | $O(n^2)$ worst case | $O(\\log n)$ |

## Lists

### Important mathematical concepts:
- Linear algebra
- Calculus
- Discrete mathematics
- Statistics and probability

### Steps to solve:
1. Identify the problem type
2. Choose appropriate mathematical model
3. Apply the formula: $f(x) = ax^2 + bx + c$
4. Verify the solution

---

*Remember: Mathematics is the language of computer science!*

> Click on the download button at the top right of the screen to download this blog and understand how to write a blog on my website.

`,
    date: "2024-06-04",
    author: "Adwait Purao",
    insta: "https://www.instagram.com/adwaitpurao/",
    facebook: "https://www.facebook.com/adwait.purao.1/",
    medium: "https://medium.com/@adwait.purao",
  },
  "rsa-blog": {
    title: "Understanding RSA Encryption",
    content: `# Understanding RSA Encryption

RSA (Rivest-Shamir-Adleman) is one of the most widely used public-key cryptosystems. It enables secure communication over untrusted networks using a pair of keys: a **public key** for encryption and a **private key** for decryption.

## Key Generation

1. Choose two distinct prime numbers $p$ and $q$.
2. Compute $n = p \\times q$ — this is the **modulus**.
3. Compute Euler's totient: $\\phi(n) = (p - 1)(q - 1)$
4. Choose an integer $e$ such that $1 < e < \\phi(n)$ and $\\gcd(e, \\phi(n)) = 1$
5. Compute $d$ as the modular inverse of $e$ modulo $\\phi(n)$:  
   $$d \\equiv e^{-1} \\pmod{\\phi(n)}$$

The public key is $(e, n)$, and the private key is $(d, n)$.

## Encryption and Decryption

- **Encryption**:  
  Given a message $m$, the ciphertext $c$ is:  
  $$c \\equiv m^e \\pmod{n}$$

- **Decryption**:  
  To retrieve the original message $m$:  
  $$m \\equiv c^d \\pmod{n}$$

## Use Cases

RSA is commonly used for:
- Secure data transmission
- Digital signatures
- SSL/TLS certificates

Despite being secure, RSA is computationally intensive and typically used to encrypt small payloads like symmetric keys.

`,
    date: "2024-06-04",
    author: "Adwait Purao",
    insta: "https://www.instagram.com/adwaitpurao/",
    facebook: "https://www.facebook.com/adwait.purao.1/",
    medium: "https://medium.com/@adwait.purao",
  },

  "diffie-hellman-blog": {
    title: "Diffie-Hellman Key Exchange Explained",
    content: `# Diffie-Hellman Key Exchange Explained

The **Diffie-Hellman Key Exchange** is a cryptographic protocol that enables two parties to establish a shared secret key over an insecure channel.

## Core Idea

It relies on the difficulty of solving the **discrete logarithm problem**.

## How It Works

1. Agree on a **large prime** $p$ and a **primitive root** $g$ (called base or generator).
2. Alice chooses a secret $a$, and Bob chooses a secret $b$.
3. Alice computes $A = g^a \\bmod p$ and sends it to Bob.
4. Bob computes $B = g^b \\bmod p$ and sends it to Alice.
5. Both compute the shared key:
   - Alice: $K = B^a \\bmod p = g^{ba} \\bmod p$
   - Bob: $K = A^b \\bmod p = g^{ab} \\bmod p$

Because $g^{ab} = g^{ba}$, both arrive at the same shared secret $K$.

## Example

Let:
- $p = 23$, $g = 5$
- Alice chooses $a = 6$, computes $A = 5^6 \\bmod 23 = 8$
- Bob chooses $b = 15$, computes $B = 5^{15} \\bmod 23 = 2$

Shared key:
- Alice: $K = 2^6 \\bmod 23 = 18$
- Bob: $K = 8^{15} \\bmod 23 = 18$

## Security

The security lies in the **difficulty of computing $a$** given $g^a \\bmod p$ — a hard problem when $p$ is large.

`,
    date: "2024-06-04",
    author: "Adwait Purao",
    insta: "https://www.instagram.com/adwaitpurao/",
    facebook: "https://www.facebook.com/adwait.purao.1/",
    medium: "https://medium.com/@adwait.purao",
  },

  "hash-functions-blog": {
    title: "Hash Functions in Cryptography",
    content: `# Hash Functions in Cryptography

**Hash functions** play a critical role in cryptographic systems by mapping data of arbitrary size to fixed-size strings — called **hash values** or **digests**.

## Key Properties

A good cryptographic hash function must satisfy:
- **Determinism**: Same input → same output.
- **Pre-image resistance**: Hard to reverse (find input from hash).
- **Second pre-image resistance**: Hard to find a different input with the same hash.
- **Collision resistance**: Hard to find two different inputs with the same hash.

## Popular Hash Functions

- **SHA-256**: Secure Hash Algorithm producing a 256-bit hash.
- **SHA-3**: A newer alternative designed using the Keccak algorithm.
- **BLAKE2**: Faster than MD5, SHA-1, and SHA-2 while being more secure.

## Example (SHA-256)

Input: \`"Hello World"\`  
Output:  
\`a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e\`

## Use Cases

- **Password hashing** (with salt)
- **Digital signatures**
- **Blockchain**
- **File integrity checks**

## Hash vs Encryption

Unlike encryption, **hashing is one-way** — you can't decrypt a hash back to the original data. That's why it's used for **data verification** and not data confidentiality.

`,
    date: "2024-06-04",
    author: "Adwait Purao",
    insta: "https://www.instagram.com/adwaitpurao/",
    facebook: "https://www.facebook.com/adwait.purao.1/",
    medium: "https://medium.com/@adwait.purao",
  },

  
  "machine-learning-fundamentals": {
    title: "Machine Learning Fundamentals: From Theory to Implementation",
    content: `
# Machine Learning Fundamentals: From Theory to Implementation

## Introduction

Machine learning is revolutionizing how we solve complex problems. Understanding the mathematical foundations is crucial for building effective ML models.

### Linear Regression

The simplest form of supervised learning starts with linear regression. We aim to find the best line that fits our data points.

### The Cost Function

For linear regression, we use the Mean Squared Error:

$J(\\theta) = \\frac{1}{2m} \\sum_{i=1}^{m} (h_\\theta(x^{(i)}) - y^{(i)})^2$

Where:
- $h_\\theta(x) = \\theta_0 + \\theta_1 x$ is our hypothesis function
- $m$ is the number of training examples
- $\\theta_0, \\theta_1$ are parameters we need to learn

### Gradient Descent Algorithm

To minimize our cost function, we use gradient descent:

$\\theta_j := \\theta_j - \\alpha \\frac{\\partial}{\\partial \\theta_j} J(\\theta)$

The partial derivatives are:

$\\frac{\\partial}{\\partial \\theta_0} J(\\theta) = \\frac{1}{m} \\sum_{i=1}^{m} (h_\\theta(x^{(i)}) - y^{(i)})$

$\\frac{\\partial}{\\partial \\theta_1} J(\\theta) = \\frac{1}{m} \\sum_{i=1}^{m} (h_\\theta(x^{(i)}) - y^{(i)}) \\cdot x^{(i)}$

## Python Implementation

Here's a complete implementation of linear regression from scratch:

\`\`\`python
import numpy as np
import matplotlib.pyplot as plt

class LinearRegression:
    def __init__(self, learning_rate=0.01, max_iterations=1000):
        self.learning_rate = learning_rate
        self.max_iterations = max_iterations
        self.theta = None
        self.cost_history = []
    
    def fit(self, X, y):
        # Add bias term (intercept)
        m = len(y)
        X_with_bias = np.column_stack([np.ones(m), X])
        
        # Initialize parameters
        self.theta = np.zeros(X_with_bias.shape[1])
        
        # Gradient descent
        for i in range(self.max_iterations):
            # Hypothesis
            h = X_with_bias.dot(self.theta)
            
            # Cost function
            cost = (1/(2*m)) * np.sum((h - y)**2)
            self.cost_history.append(cost)
            
            # Gradients
            gradients = (1/m) * X_with_bias.T.dot(h - y)
            
            # Update parameters
            self.theta -= self.learning_rate * gradients
    
    def predict(self, X):
        X_with_bias = np.column_stack([np.ones(len(X)), X])
        return X_with_bias.dot(self.theta)
    
    def plot_cost_history(self):
        plt.plot(self.cost_history)
        plt.title('Cost Function Over Iterations')
        plt.xlabel('Iterations')
        plt.ylabel('Cost')
        plt.show()

# Example usage
if __name__ == "__main__":
    # Generate sample data
    np.random.seed(42)
    X = 2 * np.random.rand(100, 1)
    y = 4 + 3 * X.flatten() + np.random.randn(100)
    
    # Create and train model
    model = LinearRegression(learning_rate=0.1, max_iterations=1000)
    model.fit(X, y)
    
    # Make predictions
    predictions = model.predict(X)
    
    print(f"Learned parameters: θ₀ = {model.theta[0]:.2f}, θ₁ = {model.theta[1]:.2f}")
\`\`\`

## Neural Networks: The Sigmoid Function

In neural networks, we often use the sigmoid activation function:

$\\sigma(z) = \\frac{1}{1 + e^{-z}}$

Its derivative, useful for backpropagation, is:

$\\frac{d}{dz}\\sigma(z) = \\sigma(z)(1 - \\sigma(z))$

## Performance Metrics

### Classification Metrics

| Metric | Formula | Purpose |
|--------|---------|---------|
| Accuracy | $\\frac{TP + TN}{TP + TN + FP + FN}$ | Overall correctness |
| Precision | $\\frac{TP}{TP + FP}$ | Positive prediction accuracy |
| Recall | $\\frac{TP}{TP + FN}$ | True positive detection rate |
| F1-Score | $\\frac{2 \\cdot Precision \\cdot Recall}{Precision + Recall}$ | Harmonic mean of precision and recall |

## Key Concepts to Remember

### Mathematical foundations:
- Linear algebra for matrix operations
- Calculus for optimization
- Statistics for model evaluation
- Probability theory for uncertainty quantification

### Implementation steps:
1. Data preprocessing and feature scaling
2. Model selection and hyperparameter tuning
3. Training with gradient descent: $\\theta_{new} = \\theta_{old} - \\alpha \\nabla J(\\theta)$
4. Validation and testing

---

*Machine learning is where mathematics meets practical problem-solving!*

`,
    date: "2024-06-05",
    author: "Adwait Purao",
    insta: "https://www.instagram.com/adwaitpurao/",
    facebook: "https://www.facebook.com/adwait.purao.1/",
    medium: "https://medium.com/@adwait.purao"
  },
  
  "algorithms-data-structures": {
    title: "Essential Algorithms and Data Structures: A Complete Guide",
    content: `
# Essential Algorithms and Data Structures: A Complete Guide

## Introduction

Algorithms and data structures form the backbone of efficient programming. Understanding their mathematical analysis helps us write better, faster code.

### Time Complexity Analysis

Big O notation describes how algorithm performance scales with input size.

### Common Complexities

The hierarchy of time complexities:

$O(1) < O(\\log n) < O(n) < O(n \\log n) < O(n^2) < O(2^n) < O(n!)$

### Analyzing Recursive Algorithms

For recursive algorithms, we often use the Master Theorem:

$T(n) = aT(\\frac{n}{b}) + f(n)$

Where:
- $a$ = number of subproblems
- $b$ = factor by which subproblem size is reduced
- $f(n)$ = cost of work done outside recursive calls

## Binary Search Implementation

Binary search achieves $O(\\log n)$ time complexity:

\`\`\`python
def binary_search(arr, target):
    """
    Binary search implementation with O(log n) time complexity
    """
    left, right = 0, len(arr) - 1
    
    while left <= right:
        mid = left + (right - left) // 2  # Avoid overflow
        
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    
    return -1  # Element not found

# Recursive version
def binary_search_recursive(arr, target, left=0, right=None):
    if right is None:
        right = len(arr) - 1
    
    if left > right:
        return -1
    
    mid = left + (right - left) // 2
    
    if arr[mid] == target:
        return mid
    elif arr[mid] < target:
        return binary_search_recursive(arr, target, mid + 1, right)
    else:
        return binary_search_recursive(arr, target, left, mid - 1)
\`\`\`

## Sorting Algorithms

### Merge Sort Analysis

Merge sort follows the divide-and-conquer paradigm:

$T(n) = 2T(\\frac{n}{2}) + O(n)$

Using the Master Theorem: $T(n) = O(n \\log n)$

\`\`\`python
def merge_sort(arr):
    """
    Merge sort implementation with O(n log n) time complexity
    """
    if len(arr) <= 1:
        return arr
    
    # Divide
    mid = len(arr) // 2
    left_half = merge_sort(arr[:mid])
    right_half = merge_sort(arr[mid:])
    
    # Conquer (merge)
    return merge(left_half, right_half)

def merge(left, right):
    """
    Merge two sorted arrays
    """
    result = []
    i = j = 0
    
    # Merge elements in sorted order
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    
    # Add remaining elements
    result.extend(left[i:])
    result.extend(right[j:])
    
    return result

# Quick Sort with randomized pivot
import random

def quick_sort(arr):
    """
    Quick sort with randomized pivot
    Average case: O(n log n), Worst case: O(n²)
    """
    if len(arr) <= 1:
        return arr
    
    # Randomized pivot selection
    pivot_index = random.randint(0, len(arr) - 1)
    pivot = arr[pivot_index]
    
    # Partition
    less = [x for x in arr if x < pivot]
    equal = [x for x in arr if x == pivot]
    greater = [x for x in arr if x > pivot]
    
    return quick_sort(less) + equal + quick_sort(greater)
\`\`\`

## Hash Tables and Collision Resolution

### Hash Function Design

A good hash function distributes keys uniformly:

$h(k) = k \\bmod m$

For better distribution, we can use:

$h(k) = \\lfloor m \\cdot (k \\cdot A \\bmod 1) \\rfloor$

Where $A = \\frac{\\sqrt{5} - 1}{2} \\approx 0.618$ (golden ratio conjugate)

### Load Factor

The load factor determines hash table performance:

$\\alpha = \\frac{n}{m}$

Where $n$ is the number of elements and $m$ is table size.

\`\`\`python
class HashTable:
    """
    Hash table implementation with chaining for collision resolution
    """
    def __init__(self, size=10):
        self.size = size
        self.table = [[] for _ in range(size)]
        self.count = 0
    
    def _hash(self, key):
        """Simple hash function"""
        return hash(key) % self.size
    
    def put(self, key, value):
        """Insert key-value pair"""
        index = self._hash(key)
        bucket = self.table[index]
        
        # Check if key already exists
        for i, (k, v) in enumerate(bucket):
            if k == key:
                bucket[i] = (key, value)  # Update existing
                return
        
        # Add new key-value pair
        bucket.append((key, value))
        self.count += 1
        
        # Resize if load factor exceeds threshold
        if self.count / self.size > 0.7:
            self._resize()
    
    def get(self, key):
        """Retrieve value by key"""
        index = self._hash(key)
        bucket = self.table[index]
        
        for k, v in bucket:
            if k == key:
                return v
        
        raise KeyError(f"Key '{key}' not found")
    
    def _resize(self):
        """Resize hash table when load factor is high"""
        old_table = self.table
        self.size *= 2
        self.table = [[] for _ in range(self.size)]
        self.count = 0
        
        # Rehash all elements
        for bucket in old_table:
            for key, value in bucket:
                self.put(key, value)
\`\`\`

## Graph Algorithms

### Dijkstra's Algorithm

Finds shortest paths with time complexity $O((V + E) \\log V)$:

The relaxation step updates distances:

$d[v] = \\min(d[v], d[u] + w(u,v))$

## Algorithm Complexity Comparison

| Algorithm | Best Case | Average Case | Worst Case | Space |
|-----------|-----------|--------------|------------|-------|
| Bubble Sort | $O(n)$ | $O(n^2)$ | $O(n^2)$ | $O(1)$ |
| Merge Sort | $O(n \\log n)$ | $O(n \\log n)$ | $O(n \\log n)$ | $O(n)$ |
| Quick Sort | $O(n \\log n)$ | $O(n \\log n)$ | $O(n^2)$ | $O(\\log n)$ |
| Heap Sort | $O(n \\log n)$ | $O(n \\log n)$ | $O(n \\log n)$ | $O(1)$ |

## Dynamic Programming

### Fibonacci with Memoization

Transform exponential time to linear:

From $T(n) = 2^n$ to $T(n) = O(n)$

### Key principles:
- Optimal substructure property
- Overlapping subproblems
- Memoization: $dp[i] = f(dp[i-1], dp[i-2], ...)$
- Bottom-up approach for space optimization

### Implementation steps:
1. Identify the recursive structure
2. Define the recurrence relation: $f(n) = f(n-1) + f(n-2)$
3. Implement memoization or tabulation
4. Optimize space complexity when possible

---

*Efficient algorithms are the foundation of scalable software systems!*

`,
    date: "2024-06-06",
    author: "Adwait Purao",
    insta: "https://www.instagram.com/adwaitpurao/",
    facebook: "https://www.facebook.com/adwait.purao.1/",
    medium: "https://medium.com/@adwait.purao"
  }
};