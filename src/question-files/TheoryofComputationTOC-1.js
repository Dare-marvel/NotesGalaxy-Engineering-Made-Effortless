const TheoryofComputationTOC1 = [
  {
    question: "Which of the following formal languages is not context-free?",
    options: ["a = {a^n b^n c^n | n >= 0}", "b = {a^n b^m | n = m}", "c = {a^n b^n | n >= 0}", "d = {w | w has equal number of a's and b's}"],
    correct: 0,
    category: "TOC"
  },
  {
    question: "What is the time complexity of recognizing a language accepted by a deterministic finite automaton (DFA)?",
    options: ["O(n^2)", "O(n)", "O(log n)", "O(n^3)"],
    correct: 1,
    category: "TOC"
  },
  {
    question: "A Turing machine can recognize all languages that are...",
    options: ["Recursive", "Recursively enumerable", "Regular", "Context-sensitive"],
    correct: 1,
    category: "TOC"
  },
  {
    question: "Which of the following is an example of a non-deterministic pushdown automaton (PDA) application?",
    options: ["Parsing arithmetic expressions", "Lexical analysis", "Memory management", "Simple text formatting"],
    correct: 0,
    category: "TOC"
  },
  {
    question: "What is the relationship between context-free languages and regular languages?",
    options: ["Context-free languages are a subset of regular languages", "Regular languages are a subset of context-free languages", "They are equivalent", "They have no relationship"],
    correct: 1,
    category: "TOC"
  },
  {
    question: "Given a Turing machine with a halting state, what is a likely goal for the Turing machine?",
    options: ["Generating a sequence of random numbers", "Solving a decision problem", "Accepting input only", "Compressing data"],
    correct: 1,
    category: "TOC"
  },
  {
    question: "What does Chomsky Hierarchy describe?",
    options: ["Different types of grammars and languages", "Different types of compilers", "Different types of programming paradigms", "Different types of operating systems"],
    correct: 0,
    category: "TOC"
  },
  {
    question: "Which of these formal languages is described by a regular grammar?",
    options: ["{a^n b^n | n >= 0}", "{a^n b^m | n >= 0, m >= 0}", "{a^i b^j | i = j}", "{a^n | n >= 0}"],
    correct: 3,
    category: "TOC"
  },
  {
    question: "A key difference between a PDA and a Turing machine is the...",
    options: ["Number of tapes", "Stack size", "Memory", "Input alphabet"],
    correct: 0,
    category: "TOC"
  },
  {
    question: "What is the significance of the halting problem?",
    options: ["It's a solvable problem for any Turing machine", "It highlights the limitations of algorithms", "It provides a method for optimizing algorithms", "It demonstrates that all problems are polynomial time solvable"],
    correct: 1,
    category: "TOC"
  },
  {
    question: "How does a Nondeterministic Finite Automata (NFA) differ from a Deterministic Finite Automata (DFA)?",
    options: ["NFAs have multiple possible transitions for a given input symbol; DFAs have a unique transition", "NFAs are more powerful; DFAs are less powerful", "NFAs are more efficient; DFAs are less efficient", "NFAs and DFAs accept the same set of languages"],
    correct: 0,
    category: "TOC"
  },
  {
    question: "Which concept is essential for understanding Turing Machine capabilities?",
    options: ["Backtracking", "Recursion", "Memoization", "Universality"],
    correct: 3,
    category: "TOC"
  },
  {
    question: "What is a key challenge in designing algorithms?",
    options: ["Keeping code efficient in the presence of recursion", "Handling specific cases of input", "Developing Turing Machines for every task", "Limiting the power of any algorithm"],
    correct: 0,
    category: "TOC"
  },
  {
    question: "Which concept in TOC explains why some computational tasks may be inherently difficult?",
    options: ["Complexity theory", "Computability theory", "Formal languages", "Regular expressions"],
    correct: 0,
    category: "TOC"
  },
  {
    question: "What is the relationship between undecidable problems and Turing Machines?",
    options: ["Turing Machines can always decide undecidable problems", "Undecidable problems are unsolvable with any Turing machine", "All Turing machines can solve undecidable problems", "Undecidable problems cannot be defined using Turing Machines"],
    correct: 1,
    category: "TOC"
  },
  {
    question: "A crucial application of regular languages is in...",
    options: ["Compiling high-level programming languages", "Deciding if a program halts", "Creating natural language parsers", "Validating input text"],
    correct: 3,
    category: "TOC"
  },
  {
    question: "What does the pumping lemma for regular languages do?",
    options: ["Prove that a language is context-free", "Prove that a language is regular", "Demonstrate that a language is Turing-recognizable", "Determine the complexity of a regular language"],
    correct: 1,
    category: "TOC"
  },
  {
    question: "Which grammar type is most powerful in Chomsky hierarchy?",
    options: ["Regular Grammar", "Context-Free Grammar", "Context-Sensitive Grammar", "Type-0 Grammar"],
    correct: 3,
    category: "TOC"
  },
  {
    question: "What does the closure property of formal languages concern?",
    options: ["The set of operations that preserve the type of a language", "The complexity of the language", "The decidability of the language", "The expressiveness of the language"],
    correct: 0,
    category: "TOC"
  },
  {
    question: "Which class of problems has a solution that can be found in polynomial time on a Turing machine?",
    options: ["NP", "P", "NP-complete", "Undecidable"],
    correct: 1,
    category: "TOC"
  },
  {
    question: "What is a key concept in complexity theory that relates to the efficiency of algorithms?",
    options: ["Closure", "Decidability", "Regular Expression", "Time complexity"],
    correct: 3,
    category: "TOC"
  },
  {
    question: "Which concept is relevant to establishing limits on what problems can be solved algorithmically?",
    options: ["Context-sensitivity", "Computability", "Ambiguity", "Closure properties"],
    correct: 1,
    category: "TOC"
  },
  {
    question: "How many states does a DFA need to accept the language {an bn | n ≥ 0}",
    options: ["1", "2", "n", "infinite"],
    correct: 2,
    category: "TOC"
  },
  {
    question: "Which of the following languages is not recursively enumerable?",
    options: ["{<M> | M halts on empty input}", "{<M> | M accepts a string of length n}", "{<M> | M accepts the empty string}", "{<M> | M does not halt on empty input}"],
    correct: 3,
    category: "TOC"
  },
  {
    question: "Consider a Turing Machine that accepts a language L. If L is decidable, which property must the Turing Machine possess?",
    options: ["Always halts on every input", "May loop infinitely on some inputs", "Always halts on at least one input", "Always halts on all inputs except for the empty string"],
    correct: 0,
    category: "TOC"
  },
  {
    question: "What is the space complexity of a Turing Machine that determines if a given context-free grammar is ambiguous?",
    options: ["O(n)", "O(n^2)", "O(log n)", "O(n log n)"],
    correct: 1,
    category: "TOC"
  },
  {
    question: "A language is said to be recursively enumerable if and only if:",
    options: ["There is a Turing Machine that accepts strings in the language", "There is a Turing Machine that rejects strings not in the language", "There is a Turing Machine that halts on all strings in the language", "There is a Turing Machine that halts on all strings in the language and rejects strings not in the language"],
    correct: 0,
    category: "TOC"
  },
  {
    question: "In Chomsky's hierarchy, which type of grammar generates regular languages?",
    options: ["Type 0", "Type 1", "Type 2", "Type 3"],
    correct: 3,
    category: "TOC"
  },
  {
    question: "Given a non-deterministic Turing Machine, which statement regarding its equivalent deterministic Turing Machine is correct?",
    options: ["The equivalent deterministic TM will always have fewer states", "The equivalent deterministic TM will always have more states", "The equivalent deterministic TM can have a similar or increased number of states", "The equivalent deterministic TM can only be created using Quantum algorithms"],
    correct: 2,
    category: "TOC"
  },
  {
    question: "Which of these computational models is Turing-equivalent?",
    options: ["Finite Automata", "Pushdown Automata", "Turing Machines", "\u03bb-calculus"],
    correct: 3,
    category: "TOC"
  },
  {
    question: "A Turing machine is used to solve a problem. Given that the problem is decidable, which of the following statements is always true?",
    options: ["The TM accepts all inputs.", "The TM rejects all inputs.", "The TM halts on all inputs.", "The TM halts on all inputs except the empty input."],
    correct: 2,
    category: "TOC"
  },
  {
    question: "Which of these computational models can recognize the language {a^n b^n | n >= 0}?",
    options: ["Finite Automaton", "Pushdown Automaton", "Deterministic Turing Machine", "Non-deterministic Turing Machine"],
    correct: 1,
    category: "TOC"
  },
  {
    question: "A context-free grammar is said to be ambiguous if:",
    options: ["There is more than one leftmost derivation for some strings.", "It generates an infinite number of strings.", "There is no derivation for some strings.", "All derivations have the same steps."],
    correct: 0,
    category: "TOC"
  },
  {
    question: "Which algorithm efficiently determines if a given Context-Free Grammar is ambiguous?",
    options: ["Floyd-Warshall", "Cocke-Younger-Kasami", "A* Search", "Longest Common Subsequence"],
    correct: 1,
    category: "TOC"
  },
  {
    question: "What type of language is recognized by a Turing machine?",
    options: ["Regular", "Context-free", "Context-sensitive", "Recursively Enumerable"],
    correct: 3,
    category: "TOC"
  },
  {
    question: "What is the halting problem?",
    options: ["The problem of determining if a program will finish running", "The problem of determining if a program will loop infinitely", "The problem of determining if a program will produce an output", "The problem of determining if a program will crash"],
    correct: 1,
    category: "TOC"
  },
  {
    question: "The set of all valid programs in a programming language, in a formal sense, is:",
    options: ["Recursively enumerable", "Recursively decidable", "Context-sensitive", "Finite."],
    correct: 0,
    category: "TOC"
  },
  {
    question: "The language L = { a^n b^n c^n | n >= 0 } is:",
    options: ["Regular", "Context-free", "Context-sensitive", "Decidable but not regular"],
    correct: 2,
    category: "TOC"
  },
  {
    question: "Which language class contains the largest set of languages?",
    options: ["Regular", "Context-free", "Context-sensitive", "Recursively Enumerable"],
    correct: 3,
    category: "TOC"
  },
  {
    question: "The complexity class P is the set of problems...",
    options: ["Solvable in polynomial time by a deterministic Turing Machine", "Solvable in polynomial time by a non-deterministic Turing Machine", "Solvable in exponential time by a deterministic Turing Machine", "Solvable only by a quantum computer."],
    correct: 0,
    category: "TOC"
  },
  {
    question: "What is a key aspect in understanding the Chomsky hierarchy?",
    options: ["Levels of complexity in formal grammars", "Relationship between the types of grammars and languages.", "The hierarchy\u2019s direct use in real-world programming.", "Relationship between languages and their lexical analysis."],
    correct: 1,
    category: "TOC"
  },
  {
    question: "The time complexity of parsing a context-free grammar using the CYK algorithm is...",
    options: ["O(n)", "O(n^2)", "O(n^3)", "O(2^n)"],
    correct: 2,
    category: "TOC"
  },
  {
    question: "How does a nondeterministic finite automaton (NFA) differ from a deterministic finite automaton (DFA)?",
    options: ["NFAs can have multiple transitions for a single input symbol", "DFAs can have multiple transitions for a single input symbol", "NFAs cannot accept the empty string", "DFAs cannot accept the empty string"],
    correct: 0,
    category: "TOC"
  },
  {
    question: "What is a key difference between Turing Machines and Finite Automata?",
    options: ["Turing Machines have unbounded memory", "Finite Automata have bounded memory", "Turing Machines can only accept regular languages", "Finite Automata can accept any language"],
    correct: 0,
    category: "TOC"
  },
  {
    question: "What is the key idea behind the pumping lemma for context-free languages?",
    options: ["Any sufficiently long string in a context-free language can be 'pumped' into multiple possible forms.", "Short strings in context-free languages can\u2019t be \u2018pumped\u2019.", "All strings in context-free languages can be infinitely pumped.", "Pumping lemma only works on context-sensitive grammars."],
    correct: 0,
    category: "TOC"
  },
  {
    question: "The concept of decidability is crucial for understanding:",
    options: ["Problems with no solution", "Problems that have an algorithm for a solution", "Formal language relationships", "Formal grammar relationships"],
    correct: 1,
    category: "TOC"
  },
  {
    question: "Which of the following languages is not recursively enumerable?",
    options: ["{<M> | M halts on empty input}", "{<M> | M accepts the empty string}", "{<M> | M rejects the empty string}", "{<M> | M doesn't halt on any input}"],
    correct: 3,
    category: "TOC"
  },
  {
    question: "Consider a Turing machine with a two-symbol alphabet {0, 1}. What is the minimum number of states required to recognize the language L = {0^n 1^n | n >= 0}?",
    options: ["1", "2", "3", "4"],
    correct: 2,
    category: "TOC"
  },
  {
    question: "Which type of grammar allows you to describe languages that can be parsed using a top-down approach, unlike bottom-up parsers?",
    options: ["LL(k)", "LR(k)", "Context-Free", "Regular"],
    correct: 0,
    category: "TOC"
  },
  {
    question: "A language is said to be decidable if...",
    options: ["there exists a Turing Machine that always halts and accepts or rejects for every input", "it can be recognized by a pushdown automaton", "its complement is recursive", "it is a subset of the language recognized by a Turing Machine"],
    correct: 0,
    category: "TOC"
  }
];

export default TheoryofComputationTOC1;
