const content = `# Diffie-Hellman Key Exchange Explained

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

The security lies in the **difficulty of computing $a$** given $g^a \\bmod p$ — a hard problem when $p$ is large.`;

export default content;