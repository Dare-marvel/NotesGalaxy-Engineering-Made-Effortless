const content = `# Essential Algorithms and Data Structures: A Complete Guide

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

*Efficient algorithms are the foundation of scalable software systems!*`;

export default content;