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
  },

  "process-management": {
    title: "Process and Process Management in Operating Systems",
    content: `
## Introduction

Process management is one of the fundamental responsibilities of an operating system. Understanding how processes work and how they are managed is crucial for anyone studying computer science or working with systems programming. Let's dive deep into the world of processes and explore how operating systems efficiently manage them.

### What is a Process?

A process is simply a program in execution. When you double-click on an application, the operating system creates a process for that program. The relationship can be expressed as:

$Process = Program + Execution Context$

Where execution context includes CPU registers, memory space, open files, and other resources.

### Process States

A process transitions through various states during its lifetime. The fundamental states are:

$States = \{New, Ready, Running, Waiting, Terminated\}$

The state transition probability can be modeled as:

$P(State_{t+1} = s_j | State_t = s_i) = p_{ij}$

## Process Control Block (PCB)

The Process Control Block is a data structure that contains all information about a process. The memory overhead for PCB can be calculated as:

$PCB_{size} = \\sum_{i=1}^{n} field_i$

Where each field represents different process attributes like process ID, program counter, CPU registers, memory management information, accounting information, and I/O status.

### Key PCB Components

The PCB typically contains:
- Process identification number (PID)
- Process state information
- CPU scheduling information with priority $P_i$ where $0 \\leq P_i \\leq {MAX\\_PRIORITY}$
- Memory management data
- I/O status information

## Process Scheduling

Process scheduling determines which process gets CPU time. The goal is to maximize CPU utilization while minimizing response time.

### Scheduling Metrics

The average waiting time for n processes is:

$Average\\_Waiting\\_Time = \\frac{1}{n} \\sum_{i=1}^{n} W_i$

The turnaround time for process i:

$Turnaround\\_Time_i = Completion\\_Time_i - Arrival\\_Time_i$

### Common Scheduling Algorithms

First-Come-First-Served (FCFS) has an average waiting time of:

$W_{avg} = \\frac{\\sum_{i=1}^{n-1} \\sum_{j=1}^{i} BT_j}{n}$

Where $BT_j$ is the burst time of process j.

## Code Example

Here's a simple process management simulation in Python:

\`\`\`python
class Process:
    def __init__(self, pid, arrival_time, burst_time, priority=0):
        self.pid = pid
        self.arrival_time = arrival_time
        self.burst_time = burst_time
        self.priority = priority
        self.waiting_time = 0
        self.turnaround_time = 0
        self.completion_time = 0
    
    def calculate_times(self, start_time):
        self.waiting_time = start_time - self.arrival_time
        self.completion_time = start_time + self.burst_time
        self.turnaround_time = self.completion_time - self.arrival_time

class ProcessScheduler:
    def __init__(self):
        self.processes = []
        self.current_time = 0
    
    def add_process(self, process):
        self.processes.append(process)
    
    def fcfs_schedule(self):
        # Sort by arrival time
        self.processes.sort(key=lambda p: p.arrival_time)
        
        current_time = 0
        for process in self.processes:
            if current_time < process.arrival_time:
                current_time = process.arrival_time
            
            process.calculate_times(current_time)
            current_time = process.completion_time
    
    def calculate_averages(self):
        n = len(self.processes)
        avg_waiting = sum(p.waiting_time for p in self.processes) / n
        avg_turnaround = sum(p.turnaround_time for p in self.processes) / n
        return avg_waiting, avg_turnaround

# Example usage
scheduler = ProcessScheduler()
scheduler.add_process(Process(1, 0, 5))
scheduler.add_process(Process(2, 1, 3))
scheduler.add_process(Process(3, 2, 8))

scheduler.fcfs_schedule()
avg_wait, avg_turn = scheduler.calculate_averages()
print(f"Average Waiting Time: {avg_wait:.2f}")
print(f"Average Turnaround Time: {avg_turn:.2f}")
\`\`\`

## Inter-Process Communication (IPC)

Processes often need to communicate and synchronize. The communication overhead can be modeled as:

$Communication\\_Cost = \\alpha + \\beta \\times Message\\_Size$

Where $\\alpha$ is the startup cost and $\\beta$ is the per-byte transmission cost.

### Synchronization Primitives

Critical section problem requires three conditions:
1. Mutual Exclusion: $\\forall i,j: i \\neq j \\Rightarrow \\neg(in\\_CS_i \\land in\\_CS_j)$
2. Progress: If no process is in CS, selection cannot be postponed indefinitely
3. Bounded Waiting: Limit on number of times other processes enter CS

## Memory Management for Processes

Each process has its own virtual memory space. The memory layout typically includes:

$Virtual\\_Address\\_Space = Text + Data + Heap + Stack$

The page fault rate can be expressed as:

$Page\\_Fault\\_Rate = \\frac{Number\\_of\\_Page\\_Faults}{Total\\_Memory\\_References}$

## Performance Analysis

| Scheduling Algorithm | Time Complexity | Space Complexity | Context Switch Overhead |
|---------------------|----------------|------------------|------------------------|
| FCFS | $O(n)$ | $O(1)$ | Low |
| SJF | $O(n \log n)$ | $O(1)$ | Low |
| Round Robin | $O(n)$ | $O(1)$ | High |
| Priority | $O(n \log n)$ | $O(1)$ | Medium |

## Advanced Process Management Concepts

### Process Creation and Termination

Process creation involves several steps:
1. Allocate PID: $PID = next\\_available\\_id()$
2. Allocate memory: $Memory\\_required = Code\\_size + Data\\_size + Stack\\_size$
3. Initialize PCB
4. Add to ready queue

### Process Hierarchies

In Unix-like systems, processes form a tree structure where:
$Parent\\_Process \\rightarrow Child\\_Process_1, Child\\_Process_2, ..., Child\\_Process_n$

The total number of processes in a system at time t:
$N(t) = N_0 + \\int_0^t (Birth\\_Rate(\\tau) - Death\\_Rate(\\tau)) d\\tau$

---

*Process management is the heart of operating system design. Understanding these concepts is essential for system programming and performance optimization!*
`,
    date: "2025-06-25",
    author: "Adwait Purao",
    insta: "https://www.instagram.com/adwaitpurao/",
    facebook: "https://www.facebook.com/adwait.purao.1/",
    medium: "https://medium.com/@adwait.purao"
  },

  "threads": {
    title: "Concept of Threads in Operating Systems",
    content: `
## Introduction

Threads represent one of the most important concepts in modern operating systems and concurrent programming. While processes provide the fundamental unit of resource allocation, threads offer a lighter-weight mechanism for achieving parallelism and concurrent execution. Understanding threads is crucial for developing efficient, responsive applications in today's multi-core world.

### What is a Thread?

A thread is often called a "lightweight process" because it shares most resources with other threads in the same process. The relationship can be expressed as:

$Thread = Execution\\_Context + Shared\\_Resources$

Where execution context includes program counter, register set, and stack, while shared resources include code, data, and files.

### Thread vs Process

The key difference in resource overhead:

$Process\\_Overhead = PCB + Memory\\_Space + File\\_Descriptors + Security\\_Context$

$Thread\\_Overhead = TCB + Stack + Registers$

Where $Thread\\_Overhead << Process\\_Overhead$

## Thread Models

### User-Level Threads (ULT)

In user-level threading, the thread management is handled entirely by the application:

$Context\\_Switch\\_Time_{ULT} = O(1)$ (very fast)

The mapping relationship is:
$N_{user\\_threads} : 1_{kernel\\_thread}$

### Kernel-Level Threads (KLT)

Kernel-level threads are managed directly by the operating system:

$Context\\_Switch\\_Time_{KLT} = O(k)$ where k > 1 (slower but more flexible)

The mapping relationship is:
$1_{user\\_thread} : 1_{kernel\\_thread}$

### Hybrid Model

The hybrid model combines both approaches:
$M_{user\\_threads} : N_{kernel\\_threads}$ where M > N

## Thread States and Lifecycle

Thread states can be modeled as a finite state machine:

$Thread\\_States = \\{Created, Ready, Running, Blocked, Terminated\\}$

The transition probability matrix:
$P = \\begin{pmatrix} 
0 & 1 & 0 & 0 & 0 \\\\
0 & p_{rr} & p_{ru} & p_{rb} & p_{rt} \\\\
0 & 1 & 0 & 0 & 0 \\\\
0 & 1 & 0 & 0 & 0 \\\\
0 & 0 & 0 & 0 & 1
\\end{pmatrix}$

## Code Example

Here's a comprehensive threading example in Python:

\`\`\`python
import threading
import time
import queue
from concurrent.futures import ThreadPoolExecutor
import logging

# Configure logging for thread safety
logging.basicConfig(level=logging.INFO, 
                  format='%(asctime)s - %(threadName)s - %(message)s')

class ThreadSafeCounter:
   def __init__(self):
       self._value = 0
       self._lock = threading.Lock()
   
   def increment(self):
       with self._lock:
           current = self._value
           # Simulate some processing time
           time.sleep(0.001)
           self._value = current + 1
   
   def get_value(self):
       with self._lock:
           return self._value

class ProducerConsumerExample:
   def __init__(self, buffer_size=5):
       self.buffer = queue.Queue(maxsize=buffer_size)
       self.running = True
   
   def producer(self, producer_id, num_items):
       for i in range(num_items):
           if not self.running:
               break
           
           item = f"Item-{producer_id}-{i}"
           self.buffer.put(item, timeout=1)
           logging.info(f"Producer {producer_id} produced: {item}")
           time.sleep(0.1)
       
       logging.info(f"Producer {producer_id} finished")
   
   def consumer(self, consumer_id):
       while self.running:
           try:
               item = self.buffer.get(timeout=1)
               logging.info(f"Consumer {consumer_id} consumed: {item}")
               # Simulate processing time
               time.sleep(0.2)
               self.buffer.task_done()
           except queue.Empty:
               continue
       
       logging.info(f"Consumer {consumer_id} finished")
   
   def stop(self):
       self.running = False

# Thread synchronization example
class BankAccount:
   def __init__(self, initial_balance=0):
       self.balance = initial_balance
       self.lock = threading.RLock()  # Reentrant lock
       self.condition = threading.Condition(self.lock)
   
   def deposit(self, amount):
       with self.condition:
           self.balance += amount
           logging.info(f"Deposited {amount}, Balance: {self.balance}")
           self.condition.notify_all()  # Wake up waiting threads
   
   def withdraw(self, amount):
       with self.condition:
           while self.balance < amount:
               logging.info(f"Insufficient funds. Waiting...")
               self.condition.wait()  # Wait for deposit
           
           self.balance -= amount
           logging.info(f"Withdrew {amount}, Balance: {self.balance}")
           return amount

# Example usage functions
def basic_threading_example():
   counter = ThreadSafeCounter()
   threads = []
   
   def worker():
       for _ in range(1000):
           counter.increment()
   
   # Create multiple threads
   for i in range(5):
       t = threading.Thread(target=worker, name=f"Worker-{i}")
       threads.append(t)
       t.start()
   
   # Wait for all threads to complete
   for t in threads:
       t.join()
   
   print(f"Final counter value: {counter.get_value()}")
\`\`\`

## Thread Synchronization

### Critical Section Problem for Threads

When multiple threads access shared resources, we need synchronization. The critical section requirement:

$\\forall i,j: i \\neq j \\Rightarrow \\neg(in\\_CS_i \\land in\\_CS_j)$

### Synchronization Primitives

The effectiveness of different synchronization mechanisms:

$Mutex\\_Overhead = Acquisition\\_Time + Critical\\_Section\\_Time + Release\\_Time$

$Semaphore\\_Value: S = S_0 + \\sum_{i=1}^{n} (V_i - P_i)$

Where $V_i$ represents signal operations and $P_i$ represents wait operations.

## Thread Performance Analysis

### Amdahl's Law for Threading

The speedup achievable with n threads:

$Speedup = \\frac{1}{(1-P) + \\frac{P}{n}}$

Where P is the fraction of the program that can be parallelized.

### Thread Pool Optimization

The optimal number of threads in a pool:

$N_{optimal} = N_{CPU} \\times (1 + \\frac{W}{C})$

Where:
- $N_{CPU}$ = Number of CPU cores
- W = Wait time per task
- C = Compute time per task

## Memory Model and Thread Safety

### Thread Memory Layout

Each thread has its own stack but shares heap memory:

$Thread\\_Memory = Private\\_Stack + Shared\\_(Heap + Code + Data)$

The stack size per thread:
$Stack\\_Size = Default\\_Size + Dynamic\\_Growth$

Typically: $Stack\\_Size \\approx 1MB$ to $8MB$

### Data Race Detection

A data race occurs when:
$\\exists i,j: (Access_i \\parallel Access_j) \\land (Write_i \\lor Write_j) \\land \\neg Synchronized(i,j)$

## Performance Comparison

| Thread Model | Creation Time | Context Switch | Memory Usage | Scalability |
|-------------|---------------|----------------|--------------|-------------|
| User-Level | $O(1)$ | $O(1)$ | Low | Limited |
| Kernel-Level | $O(k)$ | $O(k)$ | Medium | High |
| Hybrid | $O(k)$ | $O(1)$ to $O(k)$ | Medium | Very High |
| Green Threads | $O(1)$ | $O(1)$ | Very Low | Medium |

## Advanced Threading Concepts

### Thread Pools and Work Queues

Thread pool efficiency can be measured as:

$Efficiency = \\frac{Useful\\_Work\\_Time}{Total\\_Thread\\_Time}$

The queue length optimization:
$Queue\\_Length_{optimal} = \\lambda \\times Service\\_Time$

Where $\\lambda$ is the arrival rate of tasks.

### Lock-Free Programming

In lock-free algorithms, the progress guarantee is:
$\\forall operation: \\exists finite\\_steps: operation\\_completes$

Compare-and-swap (CAS) operation success probability:
$P_{CAS\\_success} = \\frac{1}{1 + Contention\\_Level}$

### Thread Local Storage

Thread-local variables eliminate synchronization overhead:
$Access\\_Time_{TLS} = O(1)$ with no synchronization cost

The memory overhead:
$TLS\\_Overhead = N_{threads} \\times TLS\\_Size_{per\\_thread}$

---

*Threading is essential for modern software development. Mastering these concepts enables you to build scalable, efficient, and responsive applications!*    

`,
    date: "2025-06-25",
    author: "Adwait Purao",
    insta: "https://www.instagram.com/adwaitpurao/",
    facebook: "https://www.facebook.com/adwait.purao.1/",
    medium: "https://medium.com/@adwait.purao"
  },

    "interprocess-communication": {
    title: "Interprocess Communication in Operating Systems",
    content: `
## Introduction

Interprocess Communication (IPC) is a fundamental mechanism that allows processes to exchange data and synchronize their actions. In modern operating systems, processes need to collaborate, share resources, and coordinate their activities to accomplish complex tasks. Understanding IPC is crucial for developing distributed systems, parallel applications, and efficient system software.

### What is Interprocess Communication?

IPC refers to the mechanisms provided by an operating system to allow processes to manage shared data and coordinate execution. The communication complexity can be expressed as:

$IPC\\_{Complexity} = Communication\\_{overhead} + Synchronization\\_{cost} + Data\\_{transfer}$

Where each component contributes to the overall system performance.

### IPC Requirements

For effective interprocess communication, we need:
- Data transfer capability: $Transfer\\_{rate} = \\frac{Data\\_{size}}{Time\\_{elapsed}}$
- Synchronization mechanisms
- Process naming and identification
- Protection and security

## Classification of IPC Mechanisms

### Direct vs Indirect Communication

Direct communication requires explicit naming:
$Send(P, message)$ and $Receive(Q, message)$

Indirect communication uses mailboxes or ports:
$Send(A, message)$ and $Receive(A, message)$ where A is a mailbox

The addressing overhead:
$Addressing\\_{cost} = Direct\\_{naming} + Indirect\\_{lookup}$

### Synchronous vs Asynchronous Communication

Synchronous communication blocking time:
$T_{sync} = T_{send} + T_{network} + T_{receive} + T_{process}$

Asynchronous communication allows:
$T_{async} = max(T_{send}, T_{receive})$ with buffering

## Shared Memory IPC

Shared memory provides the fastest IPC mechanism by allowing processes to access the same memory region.

### Shared Memory Model

The shared memory space can be modeled as:
$SharedMemory = \\{Address_{start}, Size, Permissions, Processes\\}$

Access time complexity: $O(1)$ for direct memory access

### Code Example

Here's a comprehensive shared memory implementation:

\`\`\`python
import multiprocessing
import time
import threading
from multiprocessing import shared_memory, Process, Lock
import numpy as np

class SharedCounter:
   def __init__(self, initial_value=0):
       self.lock = multiprocessing.Lock()
       # Create shared memory for counter
       self.counter_memory = shared_memory.SharedMemory(
           create=True, size=4, name='counter_shm'
       )
       # Initialize counter value
       counter_array = np.ndarray((1,), dtype=np.int32, buffer=self.counter_memory.buf)
       counter_array[0] = initial_value
   
   def increment(self):
       with self.lock:
           counter_array = np.ndarray((1,), dtype=np.int32, buffer=self.counter_memory.buf)
           counter_array[0] += 1
   
   def get_value(self):
       counter_array = np.ndarray((1,), dtype=np.int32, buffer=self.counter_memory.buf)
       return counter_array[0]
   
   def cleanup(self):
       self.counter_memory.close()
       self.counter_memory.unlink()

class SharedBuffer:
   def __init__(self, buffer_size=1024):
       self.buffer_size = buffer_size
       self.lock = multiprocessing.Lock()
       self.not_empty = multiprocessing.Condition(self.lock)
       self.not_full = multiprocessing.Condition(self.lock)
       
       # Create shared memory buffer
       self.buffer_memory = shared_memory.SharedMemory(
           create=True, size=buffer_size + 12, name='buffer_shm'
       )
       
       # Initialize buffer metadata (read_pos, write_pos, count)
       metadata = np.ndarray((3,), dtype=np.int32, buffer=self.buffer_memory.buf[:12])
       metadata[0] = 0  # read_pos
       metadata[1] = 0  # write_pos
       metadata[2] = 0  # count
   
   def put(self, data):
       with self.not_full:
           while self._is_full():
               self.not_full.wait()
           
           self._write_data(data)
           self.not_empty.notify()
   
   def get(self):
       with self.not_empty:
           while self._is_empty():
               self.not_empty.wait()
           
           data = self._read_data()
           self.not_full.notify()
           return data
   
   def _is_full(self):
       metadata = np.ndarray((3,), dtype=np.int32, buffer=self.buffer_memory.buf[:12])
       return metadata[2] >= self.buffer_size - 12
   
   def _is_empty(self):
       metadata = np.ndarray((3,), dtype=np.int32, buffer=self.buffer_memory.buf[:12])
       return metadata[2] == 0
   
   def _write_data(self, data):
       data_bytes = data.encode() if isinstance(data, str) else data
       metadata = np.ndarray((3,), dtype=np.int32, buffer=self.buffer_memory.buf[:12])
       
       write_pos = metadata[1]
       data_len = len(data_bytes)
       
       # Write data to buffer
       buffer_data = self.buffer_memory.buf[12:]
       buffer_data[write_pos:write_pos + data_len] = data_bytes
       
       # Update metadata
       metadata[1] = (write_pos + data_len) % (self.buffer_size - 12)
       metadata[2] += data_len
   
   def _read_data(self, size=10):
       metadata = np.ndarray((3,), dtype=np.int32, buffer=self.buffer_memory.buf[:12])
       read_pos = metadata[0]
       
       buffer_data = self.buffer_memory.buf[12:]
       data = bytes(buffer_data[read_pos:read_pos + size])
       
       # Update metadata
       metadata[0] = (read_pos + size) % (self.buffer_size - 12)
       metadata[2] -= size
       
       return data.decode().rstrip('\\x00')
   
   def cleanup(self):
       self.buffer_memory.close()
       self.buffer_memory.unlink()

def producer_process(buffer, items):
   for i in range(items):
       data = f"Item_{i:03d}"
       buffer.put(data)
       print(f"Produced: {data}")
       time.sleep(0.1)

def consumer_process(buffer, items):
   for i in range(items):
       data = buffer.get()
       print(f"Consumed: {data}")
       time.sleep(0.15)
\`\`\`

## Message Passing IPC

Message passing provides a structured way for processes to exchange data without sharing memory space.

### Message Passing Models

The message passing throughput:
$Throughput = \\frac{Message\\_{size}}{Message\\_{latency} + Processing\\_{time}}$

Buffering strategies affect performance:
- Zero capacity: $Buffer\\_{size} = 0$ (synchronous)
- Bounded capacity: $0 < Buffer\\_{size} < \\infty$
- Unbounded capacity: $Buffer\\_{size} = \\infty$

### Communication Patterns

Point-to-point communication cost:
$Cost_{p2p} = Setup\\_{cost} + Message\\_{size} \\times Bandwidth^{-1}$

Broadcast communication cost:
$Cost_{broadcast} = Setup\\_{cost} + N \\times (Message_{size} \\times Bandwidth^{-1})$

Where N is the number of receiving processes.

## Pipes and Named Pipes

### Ordinary Pipes

Ordinary pipes provide unidirectional communication between parent and child processes:
$Pipe\\_{capacity} = Buffer\\_{size}$ (typically 4KB to 64KB)

### Named Pipes (FIFOs)

Named pipes allow communication between unrelated processes:
$FIFO\\_{throughput} = min(Writer\\_{rate}, Reader\\_{rate})$

## Sockets and Network IPC

### Socket Communication

Socket communication overhead:
$Socket\\_{overhead} = Connection\\_{setup} + Data\\_{transmission} + Connection\\_{teardown}$

The network latency model:
$Latency = Propagation_{delay} + Transmission_{delay} + Processing_{delay}$

### Socket Types Performance

| Socket Type | Latency | Throughput | Reliability | Use Case |
|-------------|---------|------------|-------------|----------|
| TCP | High | High | Reliable | $O(n)$ connection setup |
| UDP | Low | Very High | Unreliable | $O(1)$ datagram |
| Unix Domain | Very Low | Very High | Reliable | Local IPC |
| Raw | Very Low | Maximum | Custom | Network protocols |

## Synchronization in IPC

### Semaphores

Semaphore operations follow:
$P(S): S = S - 1$ (wait operation)
$V(S): S = S + 1$ (signal operation)

The semaphore invariant:
$S = S_0 + \\sum_{i=1}^{n} (V_i - P_i) \\geq 0$

### Monitors

Monitor synchronization ensures:
$\\forall t: |Processes_{in\\_monitor}(t)| \\leq 1$

The condition variable operations:
- $wait(c)$: Release monitor lock and wait
- $signal(c)$: Wake up one waiting process
- $broadcast(c)$: Wake up all waiting processes

## Performance Analysis

### IPC Mechanism Comparison

The communication efficiency can be measured as:
$Efficiency = \\frac{Useful\\_{data}}{Total\\_{overhead}} \\times 100\\%$

Latency comparison:
$Latency_{shared} < Latency_{pipe} < Latency_{socket} < Latency_{network}$

### Throughput Analysis

For different message sizes, throughput varies:
$Throughput(size) = \\frac{size}{\\alpha + \\beta \\times size}$

Where $\\alpha$ is fixed overhead and $\\beta$ is per-byte cost.

## Advanced IPC Concepts

### Memory-Mapped Files

Memory-mapped files provide efficient file I/O:
$Access\\_{time} = Memory\\_{access} + Page\\_{fault} \\times Disk\\_{access}$

The page fault probability:
$P_{fault} = \\frac{Working\\_{set} - Physical\\_{memory}}{Working\\_{set}}$

### Remote Procedure Calls (RPC)

RPC call overhead:
$RPC_{overhead} = Marshalling + Network\\_{transmission} + Unmarshalling$

The transparency equation:
$RPC_{call} \\approx Local\\_{call} + Network\\_{latency}$

### Signal Handling

Signal delivery time:
$Signal\\_{delivery} = Detection\\_{time} + Context\\_{switch} + Handler\\_{execution}$

Signal masking affects timing:
$Effective\\_{signals} = All\\_{signals} - Masked\\_{signals}$

---

*Interprocess Communication is the backbone of modern distributed systems. Mastering these mechanisms is essential for building scalable and efficient applications!*
`,
    date: "2024-06-05",
    author: "Adwait Purao",
    insta: "https://www.instagram.com/adwaitpurao/",
    facebook: "https://www.facebook.com/adwait.purao.1/",
    medium: "https://medium.com/@adwait.purao"
  },

    "scheduling": {
    title: "Process Scheduling in Operating Systems",
    content: `
## Introduction

Process scheduling is the heart of multitasking operating systems, determining which process gets access to the CPU and for how long. Effective scheduling algorithms ensure optimal system performance, fair resource allocation, and responsive user experience. Understanding scheduling is crucial for system performance optimization and designing efficient operating systems.

### What is Process Scheduling?

Process scheduling is the method by which the operating system decides which process in the ready queue gets the CPU next. The scheduling decision can be modeled as:

$Schedule\\_{decision} = f(Process\\_{state}, Priority, Arrival\\_{time}, Burst\\_{time})$

The primary goal is to optimize system performance metrics while maintaining fairness.

### Scheduling Objectives

Key objectives include:
- Maximize CPU utilization: $CPU\\_{utilization} = \\frac{CPU\\_{busy\\_time}}{Total_{time}} \\times 100\\%$
- Minimize response time: $Response\\_{time} = First\\_{response} - Arrival\\_{time}$
- Ensure fairness: $Fairness = \\frac{min(Service\\_{time})}{max(Service\\_{time})}$
- Maximize throughput: $Throughput = \\frac{Completed\\_{processes}}{Time\\_{period}}$

## Scheduling Metrics

### Performance Measures

Turnaround time for process i:
$TAT_i = Completion\\_{time} - Arrival\\_{time}$

Waiting time calculation:
$WT_i = TAT_i - Burst\\_{time}$

Average waiting time for n processes:
$AWT = \\frac{1}{n} \\sum_{i=1}^{n} WT_i$

Response ratio for Highest Response Ratio Next:
$Response\\_{ratio} = \\frac{Waiting\\_{time} + Service\\_{time}}{Service\\_{time}}$

## Preemptive vs Non-Preemptive Scheduling

### Non-Preemptive Scheduling

In non-preemptive scheduling, once a process starts executing, it continues until completion:
$Execution\\_{time} = Burst\\_{time}$ (uninterrupted)

Context switches: $Context\\_{switches} = Process\\_{count} - 1$

### Preemptive Scheduling

Preemptive scheduling allows interruption:
$Execution\\_{segments} = \\lceil \\frac{Burst\\_{time}}{Time\\_{quantum}} \\rceil$

Context switch overhead:
$Total\\_{overhead} = Context\\_{switches} \\times Switch\\_{cost}$

## Scheduling Algorithms

### First-Come-First-Served (FCFS)

FCFS is the simplest scheduling algorithm where processes are executed in arrival order.

Average waiting time:
$AWT_{FCFS} = \\frac{\\sum_{i=1}^{n-1} \\sum_{j=1}^{i} BT_j}{n}$

### Shortest Job First (SJF)

SJF selects the process with minimum burst time:
$Next\\_{process} = \\arg\\min_{i} \\{BT_i : Process_i \\in Ready\\_{queue}\\}$

SJF provides optimal average waiting time for non-preemptive scheduling.

### Code Example

Here's a comprehensive scheduling simulator:

\`\`\`python
import heapq
from collections import deque
from dataclasses import dataclass
from typing import List, Tuple
import matplotlib.pyplot as plt

@dataclass
class Process:
   pid: int
   arrival_time: int
   burst_time: int
   priority: int = 0
   remaining_time: int = 0
   waiting_time: int = 0
   turnaround_time: int = 0
   completion_time: int = 0
   response_time: int = -1
   first_run: bool = False
   
   def __post_init__(self):
       self.remaining_time = self.burst_time

class SchedulingSimulator:
   def __init__(self):
       self.processes = []
       self.current_time = 0
       self.gantt_chart = []
   
   def add_process(self, process: Process):
       self.processes.append(process)
   
   def reset(self):
       self.current_time = 0
       self.gantt_chart = []
       for p in self.processes:
           p.remaining_time = p.burst_time
           p.waiting_time = 0
           p.turnaround_time = 0
           p.completion_time = 0
           p.response_time = -1
           p.first_run = False
   
   def fcfs_scheduling(self):
       """First-Come-First-Served Scheduling"""
       self.reset()
       ready_queue = sorted(self.processes, key=lambda p: p.arrival_time)
       
       for process in ready_queue:
           # Wait for process arrival
           if self.current_time < process.arrival_time:
               self.current_time = process.arrival_time
           
           # Set response time
           if not process.first_run:
               process.response_time = self.current_time - process.arrival_time
               process.first_run = True
           
           # Execute process
           self.gantt_chart.append((process.pid, self.current_time, 
                                  self.current_time + process.burst_time))
           self.current_time += process.burst_time
           
           # Calculate times
           process.completion_time = self.current_time
           process.turnaround_time = process.completion_time - process.arrival_time
           process.waiting_time = process.turnaround_time - process.burst_time
   
   def sjf_non_preemptive(self):
       """Shortest Job First (Non-Preemptive)"""
       self.reset()
       ready_queue = []
       remaining_processes = sorted(self.processes, key=lambda p: p.arrival_time)
       i = 0
       
       while remaining_processes or ready_queue:
           # Add arrived processes to ready queue
           while i < len(remaining_processes) and remaining_processes[i].arrival_time <= self.current_time:
               heapq.heappush(ready_queue, (remaining_processes[i].burst_time, 
                                          remaining_processes[i].arrival_time, 
                                          remaining_processes[i]))
               i += 1
           
           if ready_queue:
               _, _, process = heapq.heappop(ready_queue)
               
               # Set response time
               if not process.first_run:
                   process.response_time = self.current_time - process.arrival_time
                   process.first_run = True
               
               # Execute process
               self.gantt_chart.append((process.pid, self.current_time, 
                                      self.current_time + process.burst_time))
               self.current_time += process.burst_time
               
               # Calculate times
               process.completion_time = self.current_time
               process.turnaround_time = process.completion_time - process.arrival_time
               process.waiting_time = process.turnaround_time - process.burst_time
           else:
               # No process ready, advance time
               if i < len(remaining_processes):
                   self.current_time = remaining_processes[i].arrival_time
   
   def round_robin(self, time_quantum: int):
       """Round Robin Scheduling"""
       self.reset()
       ready_queue = deque()
       remaining_processes = sorted(self.processes, key=lambda p: p.arrival_time)
       i = 0
       
       while remaining_processes or ready_queue:
           # Add arrived processes to ready queue
           while i < len(remaining_processes) and remaining_processes[i].arrival_time <= self.current_time:
               ready_queue.append(remaining_processes[i])
               i += 1
           
           if ready_queue:
               process = ready_queue.popleft()
               
               # Set response time on first run
               if not process.first_run:
                   process.response_time = self.current_time - process.arrival_time
                   process.first_run = True
               
               # Execute for time quantum or remaining time
               execution_time = min(time_quantum, process.remaining_time)
               self.gantt_chart.append((process.pid, self.current_time, 
                                      self.current_time + execution_time))
               
               self.current_time += execution_time
               process.remaining_time -= execution_time
               
               # Check for newly arrived processes
               while i < len(remaining_processes) and remaining_processes[i].arrival_time <= self.current_time:
                   ready_queue.append(remaining_processes[i])
                   i += 1
               
               # If process not finished, add back to queue
               if process.remaining_time > 0:
                   ready_queue.append(process)
               else:
                   # Process completed
                   process.completion_time = self.current_time
                   process.turnaround_time = process.completion_time - process.arrival_time
                   process.waiting_time = process.turnaround_time - process.burst_time
           else:
               # No process ready, advance time
               if i < len(remaining_processes):
                   self.current_time = remaining_processes[i].arrival_time
   
   def priority_scheduling(self, preemptive=False):
       """Priority Scheduling (lower number = higher priority)"""
       self.reset()
       
       if not preemptive:
           ready_queue = []
           remaining_processes = sorted(self.processes, key=lambda p: p.arrival_time)
           i = 0
           
           while remaining_processes or ready_queue:
               # Add arrived processes
               while i < len(remaining_processes) and remaining_processes[i].arrival_time <= self.current_time:
                   heapq.heappush(ready_queue, (remaining_processes[i].priority, 
                                              remaining_processes[i].arrival_time, 
                                              remaining_processes[i]))
                   i += 1
               
               if ready_queue:
                   _, _, process = heapq.heappop(ready_queue)
                   
                   if not process.first_run:
                       process.response_time = self.current_time - process.arrival_time
                       process.first_run = True
                   
                   self.gantt_chart.append((process.pid, self.current_time, 
                                          self.current_time + process.burst_time))
                   self.current_time += process.burst_time
                   
                   process.completion_time = self.current_time
                   process.turnaround_time = process.completion_time - process.arrival_time
                   process.waiting_time = process.turnaround_time - process.burst_time
               else:
                   if i < len(remaining_processes):
                       self.current_time = remaining_processes[i].arrival_time
   
   def calculate_averages(self) -> dict:
       """Calculate average performance metrics"""
       n = len(self.processes)
       avg_waiting = sum(p.waiting_time for p in self.processes) / n
       avg_turnaround = sum(p.turnaround_time for p in self.processes) / n
       avg_response = sum(p.response_time for p in self.processes) / n
       
       return {
           'avg_waiting_time': avg_waiting,
           'avg_turnaround_time': avg_turnaround,
           'avg_response_time': avg_response,
           'total_completion_time': max(p.completion_time for p in self.processes)
       }
   
   def print_results(self, algorithm_name: str):
       """Print scheduling results"""
       print(f"\\n{algorithm_name} Scheduling Results:")
       print("-" * 60)
       print(f"{'PID':<5} {'AT':<5} {'BT':<5} {'CT':<5} {'TAT':<5} {'WT':<5} {'RT':<5}")
       print("-" * 60)
       
       for p in sorted(self.processes, key=lambda x: x.pid):
           print(f"{p.pid:<5} {p.arrival_time:<5} {p.burst_time:<5} "
                 f"{p.completion_time:<5} {p.turnaround_time:<5} "
                 f"{p.waiting_time:<5} {p.response_time:<5}")
       
       metrics = self.calculate_averages()
       print("-" * 60)
       print(f"Average Waiting Time: {metrics['avg_waiting_time']:.2f}")
       print(f"Average Turnaround Time: {metrics['avg_turnaround_time']:.2f}")
       print(f"Average Response Time: {metrics['avg_response_time']:.2f}")

# Example usage
if __name__ == "__main__":
   simulator = SchedulingSimulator()
   
   # Add sample processes
   processes = [
       Process(1, 0, 6, 2),
       Process(2, 1, 8, 1),
       Process(3, 2, 7, 3),
       Process(4, 3, 3, 2)
   ]
   
   for p in processes:
       simulator.add_process(p)
   
   # Test different algorithms
   simulator.fcfs_scheduling()
   simulator.print_results("FCFS")
   
   simulator.sjf_non_preemptive()
   simulator.print_results("SJF (Non-Preemptive)")
   
   simulator.round_robin(4)
   simulator.print_results("Round Robin (q=4)")
   
   simulator.priority_scheduling()
   simulator.print_results("Priority (Non-Preemptive)")
\`\`\`

## Advanced Scheduling Algorithms

### Shortest Remaining Time First (SRTF)

SRTF is the preemptive version of SJF:
$Next\\_{process} = \\arg\\min_{i} \\{Remaining\\_{time_i} : Process_i \\in Ready\\_{queue}\\}$

### Priority Scheduling

Priority scheduling selects processes based on priority values:
$Priority_{effective} = Base\\_{priority} + Age\\_{factor} \\times Wait\\_{time}$

Aging prevents starvation:
$Age(t) = Age(0) + \\alpha \\times t$

### Multilevel Queue Scheduling

Different queues for different process types:
$Queues = \\{System, Interactive, Batch, Student\\}$

Each queue has its own scheduling algorithm:
$Schedule\\_{total} = \\sum_{i=1}^{n} Priority_i \\times Schedule_i$

## Real-Time Scheduling

### Earliest Deadline First (EDF)

EDF is optimal for single processor systems:
$Utilization = \\sum_{i=1}^{n} \\frac{C_i}{T_i} \\leq 1$

Where $C_i$ is computation time and $T_i$ is period.

### Rate Monotonic Scheduling

Static priority assignment:
$Priority_i \\propto \\frac{1}{Period_i}$

Schedulability condition:
$\\sum_{i=1}^{n} \\frac{C_i}{T_i} \\leq n(2^{1/n} - 1)$

## Performance Comparison

| Algorithm | Time Complexity | Preemptive | Optimal | Starvation |
|-----------|----------------|------------|---------|------------|
| FCFS | $O(n)$ | No | No | No |
| SJF | $O(n \\log n)$ | No | Yes | Yes |
| SRTF | $O(n \\log n)$ | Yes | Yes | Yes |
| Round Robin | $O(n)$ | Yes | No | No |
| Priority | $O(n \\log n)$ | Optional | No | Yes |
| Multilevel | $O(n \\log n)$ | Yes | No | Possible |

## Scheduling in Multiprocessor Systems

### Load Balancing

Load balancing efficiency:
$Balance\\_{factor} = 1 - \\frac{\\sigma_{load}}{\\mu_{load}}$

Where $\\sigma_{load}$ is standard deviation and $\\mu_{load}$ is mean load.

### Processor Affinity

Cache affinity benefit:
$Affinity\\_{benefit} = Cache\\_{hit\\_rate} \\times Cache\\_{access\\_time\\_saved}$

### Gang Scheduling

Synchronous scheduling for parallel processes:
$Gang\\_{efficiency} = \\frac{Parallel\\_{execution\\_time}}{Sequential\\_{execution\\_time}}$

---

*Process scheduling is fundamental to operating system performance. Understanding these algorithms helps in designing efficient systems and optimizing application performance!*
`,
    date: "2025-06-25",
    author: "Adwait Purao",
    insta: "https://www.instagram.com/adwaitpurao/",
    facebook: "https://www.facebook.com/adwait.purao.1/",
    medium: "https://medium.com/@adwait.purao"
  },


//   "replace": {
//     title: "",
//     content: `

// `,
//     date: "2024-06-05",
//     author: "Adwait Purao",
//     insta: "https://www.instagram.com/adwaitpurao/",
//     facebook: "https://www.facebook.com/adwait.purao.1/",
//     medium: "https://medium.com/@adwait.purao"
//   },
};