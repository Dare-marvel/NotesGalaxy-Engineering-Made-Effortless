const content = `# Understanding RSA Encryption

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

Despite being secure, RSA is computationally intensive and typically used to encrypt small payloads like symmetric keys.`;

export default content;