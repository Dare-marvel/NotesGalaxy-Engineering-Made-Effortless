export const blogContent = {
  "rsa-blog": {
    title: "Understanding RSA Encryption",
    content: `# Understanding RSA Encryption

RSA (Rivest–Shamir–Adleman) is one of the most widely used public-key cryptosystems. It enables secure communication over untrusted networks using a pair of keys: a **public key** for encryption and a **private key** for decryption.

## Key Generation

1. Choose two distinct prime numbers \\( p \\) and \\( q \\).
2. Compute \\( n = p \\times q \\) — this is the **modulus**.
3. Compute Euler’s totient: \\( \\phi(n) = (p - 1)(q - 1) \\)
4. Choose an integer \\( e \\) such that \\( 1 < e < \\phi(n) \\) and \\( \\gcd(e, \\phi(n)) = 1 \\)
5. Compute \\( d \\) as the modular inverse of \\( e \\) modulo \\( \\phi(n) \\):  
   \\[
   d \\equiv e^{-1} \\mod \\phi(n)
   \\]

The public key is \\( (e, n) \\), and the private key is \\( (d, n) \\).

## Encryption and Decryption

- **Encryption**:  
  Given a message \\( m \\), the ciphertext \\( c \\) is:  
  \\[
  c \\equiv m^e \\mod n
  \\]

- **Decryption**:  
  To retrieve the original message \\( m \\):  
  \\[
  m \\equiv c^d \\mod n
  \\]

## Use Cases

RSA is commonly used for:
- Secure data transmission
- Digital signatures
- SSL/TLS certificates

Despite being secure, RSA is computationally intensive and typically used to encrypt small payloads like symmetric keys.

`,
    date: "2024-06-04",
    author: "Adwait Purao",
    insta : "https://www.instagram.com/adwaitpurao/",
    facebook : "https://www.facebook.com/adwait.purao",
    medium : "https://medium.com/@adwaitpurao",

  },

  "diffie-hellman-blog": {
    title: "Diffie-Hellman Key Exchange Explained",
    content: `# Diffie-Hellman Key Exchange Explained

The **Diffie-Hellman Key Exchange** is a cryptographic protocol that enables two parties to establish a shared secret key over an insecure channel.

## Core Idea

It relies on the difficulty of solving the **discrete logarithm problem**.

## How It Works

1. Agree on a **large prime** \\( p \\) and a **primitive root** \\( g \\) (called base or generator).
2. Alice chooses a secret \\( a \\), and Bob chooses a secret \\( b \\).
3. Alice computes \\( A = g^a \\mod p \\) and sends it to Bob.
4. Bob computes \\( B = g^b \\mod p \\) and sends it to Alice.
5. Both compute the shared key:
   - Alice: \\( K = B^a \\mod p = g^{ba} \\mod p \\)
   - Bob: \\( K = A^b \\mod p = g^{ab} \\mod p \\)

Because \\( g^{ab} = g^{ba} \\), both arrive at the same shared secret \\( K \\).

## Example

Let:
- \\( p = 23 \\), \\( g = 5 \\)
- Alice chooses \\( a = 6 \\), computes \\( A = 5^6 \\mod 23 = 8 \\)
- Bob chooses \\( b = 15 \\), computes \\( B = 5^{15} \\mod 23 = 2 \\)

Shared key:
- Alice: \\( K = 2^6 \\mod 23 = 18 \\)
- Bob: \\( K = 8^{15} \\mod 23 = 18 \\)

## Security

The security lies in the **difficulty of computing \\( a \\)** given \\( g^a \\mod p \\) — a hard problem when \\( p \\) is large.

`,
    date: "2024-06-04",
    author: "Adwait Purao",
    insta : "https://www.instagram.com/adwaitpurao/",
    facebook : "https://www.facebook.com/adwait.purao",
    medium : "https://medium.com/@adwaitpurao",
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
    insta : "https://www.instagram.com/adwaitpurao/",
    facebook : "https://www.facebook.com/adwait.purao",
    medium : "https://medium.com/@adwaitpurao",
  }
};
