const content = `# Hash Functions in Cryptography

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

Unlike encryption, **hashing is one-way** — you can't decrypt a hash back to the original data. That's why it's used for **data verification** and not data confidentiality.`;

export default content;