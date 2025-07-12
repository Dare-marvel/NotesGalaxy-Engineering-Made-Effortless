const content = `# Computer Arithmetic in Computer Architecture

Computer arithmetic forms the foundation of all computational operations in digital systems. Understanding how numbers are represented and manipulated is crucial for designing efficient processors and optimizing performance.

## Introduction to Number Representation

Computers use binary representation to store and process numerical data. The choice of representation affects the range, precision, and complexity of arithmetic operations.

### Binary Number System

In binary, each digit represents a power of 2:

$N = \\sum_{i=0}^{n-1} b_i \\times 2^i$

Where $b_i \\in \\{0, 1\\}$ are the binary digits.

For example: $1011_2 = 1 \\times 2^3 + 0 \\times 2^2 + 1 \\times 2^1 + 1 \\times 2^0 = 11_{10}$

## Integer Representation

### Unsigned Integers

For an n-bit unsigned integer, the range is $[0, 2^n - 1]$.

### Signed Integer Representations

#### Sign-Magnitude

The most significant bit represents the sign:
- $0$: positive number
- $1$: negative number

Range: $[-(2^{n-1} - 1), +(2^{n-1} - 1)]$

#### Two's Complement

Most widely used signed representation. For an n-bit number:

$N = -b_{n-1} \\times 2^{n-1} + \\sum_{i=0}^{n-2} b_i \\times 2^i$

Range: $[-2^{n-1}, 2^{n-1} - 1]$

**Two's complement calculation:**
1. Invert all bits (one's complement)
2. Add 1 to the result

Example: $-5$ in 4-bit two's complement:
- $5 = 0101_2$
- One's complement: $1010_2$
- Add 1: $1010_2 + 1 = 1011_2$

## Binary Addition and Subtraction

### Addition Algorithm

Binary addition follows these rules:
- $0 + 0 = 0$
- $0 + 1 = 1$
- $1 + 0 = 1$
- $1 + 1 = 10_2$ (0 with carry 1)

### Overflow Detection

For n-bit two's complement addition:

**Overflow occurs when:**
- Adding two positive numbers yields a negative result
- Adding two negative numbers yields a positive result

Mathematical condition: $C_{n-1} \\oplus C_n = 1$

Where $C_{n-1}$ is carry into MSB and $C_n$ is carry out of MSB.

### Subtraction

Subtraction $A - B$ is performed as $A + (-B)$ using two's complement.

## Binary Multiplication

### Unsigned Multiplication

**Shift-and-Add Algorithm:**

\`\`\`
Product = 0
For i = 0 to n-1:
    If Multiplier[i] == 1:
        Product += Multiplicand << i
\`\`\`

### Booth's Algorithm

Efficient method for signed multiplication that reduces the number of additions:

**Booth Recoding Rules:**
- $00$ or $11$: No operation
- $01$: Add multiplicand
- $10$: Subtract multiplicand

Example multiplication: $6 \\times (-4)$ using 4-bit representation:

$6 = 0110_2$, $-4 = 1100_2$

Booth recoding of $-4$: $1100_2 \\rightarrow$ operations based on bit transitions.

### Multiplication Hardware

**Array Multiplier:**
Uses $n \\times n$ AND gates and $(n-1)$ full adders for n-bit multiplication.

**Wallace Tree Multiplier:**
Reduces partial products using carry-save adders, achieving $O(\\log n)$ delay.

## Binary Division

### Restoring Division Algorithm

\`\`\`
1. Initialize: Quotient = 0, Remainder = Dividend
2. For each bit position:
   - Shift remainder left
   - Subtract divisor from remainder
   - If result ≥ 0: Set quotient bit to 1
   - If result < 0: Restore remainder, set quotient bit to 0
\`\`\`

### Non-Restoring Division

More efficient as it avoids the restoration step:

\`\`\`
If remainder ≥ 0: 
    Remainder = 2×Remainder - Divisor
Else: 
    Remainder = 2×Remainder + Divisor
\`\`\`

The quotient bit is determined by the sign of the remainder.

## Floating-Point Arithmetic

### IEEE 754 Standard

**Single Precision (32-bit):**

$\\begin{array}{|c|c|c|}
\\hline
Sign & Exponent & Mantissa \\\\
\\hline
1\\text{ bit} & 8\\text{ bits} & 23\\text{ bits} \\\\
\\hline
\\end{array}$

**Value representation:**
$(-1)^S \\times (1.M) \\times 2^{E-127}$

Where:
- $S$ = sign bit
- $E$ = biased exponent
- $M$ = mantissa (fractional part)

### Floating-Point Addition

**Algorithm steps:**
1. **Alignment:** Shift mantissa of smaller number
2. **Addition:** Add/subtract aligned mantissas
3. **Normalization:** Adjust result to proper form
4. **Rounding:** Apply rounding rules

Example: $1.5 + 2.75$

$1.5 = 1.100_2 \\times 2^0$
$2.75 = 1.011_2 \\times 2^1$

After alignment: $0.110_2 + 1.011_2 = 10.001_2$
Normalized: $1.0001_2 \\times 2^1 = 4.25$

### Floating-Point Multiplication

$$(S_1, E_1, M_1) \\times (S_2, E_2, M_2) = (S_1 \\oplus S_2, E_1 + E_2 - 127, M_1 \\times M_2)$$

**Steps:**
1. XOR signs: $S_{result} = S_1 \\oplus S_2$
2. Add exponents: $E_{result} = E_1 + E_2 - 127$
3. Multiply mantissas: $M_{result} = (1.M_1) \\times (1.M_2)$
4. Normalize and round the result

## Code Example

Here's a simple implementation of binary addition with overflow detection:

\`\`\`c
#include <stdio.h>
#include <stdbool.h>

typedef struct {
    int result;
    bool overflow;
    bool carry;
} ArithmeticResult;

ArithmeticResult binary_add(int a, int b, int bits) {
    ArithmeticResult res;
    
    // Perform addition
    long long temp = (long long)a + b;
    res.result = temp & ((1LL << bits) - 1);
    
    // Check for carry out
    res.carry = (temp >> bits) & 1;
    
    // Check for overflow (two's complement)
    int sign_a = (a >> (bits - 1)) & 1;
    int sign_b = (b >> (bits - 1)) & 1;
    int sign_result = (res.result >> (bits - 1)) & 1;
    
    res.overflow = (sign_a == sign_b) && (sign_a != sign_result);
    
    return res;
}

// Example usage
int main() {
    ArithmeticResult result = binary_add(127, 1, 8); // 8-bit addition
    printf("Result: %d, Overflow: %s\\n", 
           result.result, result.overflow ? "Yes" : "No");
    return 0;
}
\`\`\`

## BCD Arithmetic

**Binary Coded Decimal (BCD)** represents each decimal digit using 4 bits.

### BCD Addition

After binary addition of BCD digits:
- If result $> 9$ or carry generated: Add 6 for correction

Example: $8 + 5$ in BCD
- $1000_2 + 0101_2 = 1101_2 = 13$
- Since $13 > 9$: $1101_2 + 0110_2 = 0011_2$ with carry
- Result: $13_{10} = 0001\\_0011_{BCD}$

## Performance Considerations

### Arithmetic Unit Design Trade-offs

| Algorithm | Area | Speed | Power |
|-----------|------|-------|-------|
| Ripple Carry | Small | Slow | Low |
| Carry Lookahead | Large | Fast | High |
| Carry Select | Medium | Fast | Medium |
| Wallace Tree | Large | Very Fast | High |

### Pipelining Arithmetic Operations

**Multiplication Pipeline:**
1. **Stage 1:** Booth encoding
2. **Stage 2:** Partial product generation
3. **Stage 3:** Partial product reduction
4. **Stage 4:** Final addition

Pipeline throughput: $\\frac{1}{max(Stage\\_Delay)}$

## Special Cases and Exceptions

### Floating-Point Special Values

- **Zero:** $E = 0$, $M = 0$
- **Infinity:** $E = 255$, $M = 0$
- **NaN:** $E = 255$, $M \\neq 0$
- **Denormalized:** $E = 0$, $M \\neq 0$

### Exception Handling

Common arithmetic exceptions:
- **Overflow:** Result exceeds representable range
- **Underflow:** Result too small for representation
- **Division by zero:** Undefined operation
- **Invalid operation:** $\\sqrt{-1}$, $0/0$

---

*Computer arithmetic is the heart of digital computation, enabling everything from simple calculations to complex scientific simulations!*

> Mastering these concepts is essential for understanding processor design and optimizing computational performance.

`;

export default content;