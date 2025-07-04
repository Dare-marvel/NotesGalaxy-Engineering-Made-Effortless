const TheoryofComputationTOC3 = [
  {
    question: "Which problem is typically used to illustrate undecidability?",
    options: ["Primality testing", "Sorting", "The halting problem", "Graph coloring"],
    correct: 2,
    category: "TOC"
  },
  {
    question: "Which of these is not a computational complexity class?",
    options: ["P", "NP", "SPACE", "LOGSPACE"],
    correct: 0,
    category: "TOC"
  },
  {
    question: "What does the Pumping Lemma for context-free languages allow you to do?",
    options: ["Prove a language is not regular", "Prove a language is context-free", "Prove a language is context-sensitive", "Determine the shortest string in a language"],
    correct: 0,
    category: "TOC"
  },
  {
    question: "Which aspect of a Turing Machine is central to its ability to solve any computable function?",
    options: ["The input tape", "The state diagram", "The tape head's movement", "The computational power of the algorithm"],
    correct: 2,
    category: "TOC"
  },
  {
    question: "What does a Pushdown Automata recognize?",
    options: ["Regular Languages", "Context-Free Languages", "Context-Sensitive Languages", "Recursively Enumerable Languages"],
    correct: 1,
    category: "TOC"
  },
  {
    question: "A language is recursive if?",
    options: ["A Turing machine can decide it", "A Turing machine can only accept it", "A Turing machine can partially decide it", "It is not decidable by any Turing machine"],
    correct: 0,
    category: "TOC"
  },
  {
    question: "Which of these formal language classes is the most general?",
    options: ["Regular Languages", "Context-Free Languages", "Recursive Languages", "Recursively Enumerable Languages"],
    correct: 3,
    category: "TOC"
  },
  {
    question: "What is a key difference between deterministic and non-deterministic finite automata?",
    options: ["Deterministic automata use less memory than non-deterministic ones.", "Non-deterministic automata can accept more languages.", "Non-deterministic automata can process the same input in multiple ways simultaneously.", "Deterministic automata only accept regular expressions."],
    correct: 2,
    category: "TOC"
  },
  {
    question: "What does P stand for in terms of computational complexity classes?",
    options: ["Polynomial Time", "Probabilistic Time", "Parallel Time", "Polynomial Space"],
    correct: 0,
    category: "TOC"
  },
  {
    question: "How are undecidable problems demonstrated?",
    options: ["Through counterexamples", "By creating a contradiction", "Through Turing machines", "All of the above"],
    correct: 3,
    category: "TOC"
  },
  {
    question: "What does a Context-Sensitive Grammar allow to be defined?",
    options: ["Regular expressions", "Context-free languages", "Context-sensitive languages", "None of these"],
    correct: 2,
    category: "TOC"
  },
  {
    question: "Which grammar class is the subset of the one with production rules that have a single non-terminal on the left side?",
    options: ["Regular Grammar", "Context-Free Grammar", "Context-Sensitive Grammar", "Recursive Grammar"],
    correct: 1,
    category: "TOC"
  },
  {
    question: "What is a fundamental requirement for a language to be Turing-recognizable?",
    options: ["There exists a DFA that accepts it", "There exists a Turing machine that accepts it", "It can be defined using a context-free grammar", "It has a regular expression."],
    correct: 1,
    category: "TOC"
  },
  {
    question: "What does the time complexity of an algorithm measure?",
    options: ["The number of states visited", "The amount of memory used", "The number of steps required", "The number of input characters."],
    correct: 2,
    category: "TOC"
  },
  {
    question: "What is the relationship between P and NP?",
    options: ["P = NP", "P \u2282 NP", "NP \u2282 P", "P \u2229 NP = \u2205"],
    correct: 1,
    category: "TOC"
  },
  {
    question: "Which concept is essential for designing a compiler that performs semantic analysis?",
    options: ["Finite Automata", "Context-free Grammars", "Turing Machines", "Regular expressions"],
    correct: 1,
    category: "TOC"
  },
  {
    question: "A language accepted by a Turing machine is known as?",
    options: ["Recursive Language", "Recursively Enumerable Language", "Non-Recursive Language", "Context-sensitive Language"],
    correct: 1,
    category: "TOC"
  },
  {
    question: "Which of the following formal languages is not recursively enumerable?",
    options: ["{<M> | M halts on empty input}", "{<M> | M accepts a string of length 10}", "{<M> | M rejects all strings of even length}", "{<M> | M halts on all inputs}"],
    correct: 2,
    category: "TOC"
  },
  {
    question: "Consider a Turing machine that operates on binary strings.  If the machine halts on input 0110, which of these inputs is it guaranteed to halt on?",
    options: ["1100", "0011", "0000", "1010"],
    correct: 0,
    category: "TOC"
  },
  {
    question: "What is the key difference between a deterministic and non-deterministic finite automaton?",
    options: ["Deterministic automata are more complex", "Non-deterministic automata can only recognize regular languages", "Deterministic automata have multiple possible transitions for a given input", "Non-deterministic automata can explore multiple computational paths simultaneously"],
    correct: 3,
    category: "TOC"
  },
  {
    question: "A context-free grammar can generate which of these languages?",
    options: ["The set of all palindromes", "The set of all balanced parentheses strings", "The set of all strings with equal numbers of 'a's and 'b's", "All of the above"],
    correct: 3,
    category: "TOC"
  },
  {
    question: "Which machine model can recognize context-sensitive languages?",
    options: ["Pushdown automaton", "Turing machine", "Finite automaton", "Linear-bounded automaton"],
    correct: 3,
    category: "TOC"
  },
  {
    question: "In Chomsky hierarchy, what is the order of languages from simplest to most complex?",
    options: ["Regular, Context-free, Context-sensitive, Recursively enumerable", "Context-sensitive, Recursively enumerable, Context-free, Regular", "Regular, Context-free, Recursively enumerable, Context-sensitive", "Context-free, Regular, Context-sensitive, Recursively enumerable"],
    correct: 0,
    category: "TOC"
  },
  {
    question: "What is the time complexity of a context-free grammar parsing algorithm like CYK?",
    options: ["O(n)", "O(n^3)", "O(2^n)", "O(n!)"],
    correct: 1,
    category: "TOC"
  },
  {
    question: "Which algorithm is commonly used for determining whether a given context-free grammar is ambiguous?",
    options: ["Earley parsing", "CYK parsing", "LL parsing", "Recursive descent parsing"],
    correct: 0,
    category: "TOC"
  },
  {
    question: "What does the pumping lemma for context-free languages prove?",
    options: ["Every context-free language is decidable", "Every context-free language is regular", "Every context-free language is not regular", "Every context-free language is recursively enumerable"],
    correct: 2,
    category: "TOC"
  },
  {
    question: "A language is Turing-recognizable if and only if it can be recognized by a ...",
    options: ["Finite automaton", "Pushdown automaton", "Turing machine", "Nondeterministic finite automaton"],
    correct: 2,
    category: "TOC"
  },
  {
    question: "What is the halting problem?",
    options: ["A problem related to the decidability of context-free languages", "A problem related to whether a program will halt on a given input", "A problem related to the minimization of finite automata", "A problem that can be solved by a linear bounded automaton"],
    correct: 1,
    category: "TOC"
  },
  {
    question: "Which computational problem is undecidable?",
    options: ["Testing for emptiness of a context-free language", "Determining if two context-free grammars generate the same language", "Determining if a Turing machine halts on a given input", "All of the above"],
    correct: 2,
    category: "TOC"
  },
  {
    question: "How do you show that a problem is undecidable?",
    options: ["Construct a reduction from a known undecidable problem", "Show that it's equivalent to a known decidable problem", "Prove its context-sensitivity", "All of the above"],
    correct: 0,
    category: "TOC"
  },
  {
    question: "Which concept in TOC is crucial to prove the undecidability of the halting problem?",
    options: ["Reduction", "Diagonalization", "Closure properties", "Regular languages"],
    correct: 1,
    category: "TOC"
  },
  {
    question: "What does the Rice's Theorem state about properties of Turing machines?",
    options: ["Properties of Turing machines are always decidable", "Non-trivial properties of Turing machines are undecidable", "All properties of Turing machines are recursively enumerable", "All properties of Turing machines are regular"],
    correct: 1,
    category: "TOC"
  },
  {
    question: "In computational complexity theory, what does P represent?",
    options: ["Problems solvable by non-deterministic Turing machines in polynomial time", "Problems solvable by deterministic Turing machines in polynomial time", "Problems solvable by deterministic Turing machines in exponential time", "Problems solvable by Turing machines in linear time"],
    correct: 1,
    category: "TOC"
  },
  {
    question: "What is a key application of formal language theory in software engineering?",
    options: ["Compiling and interpreting programming languages", "Designing compiler optimizers", "Designing programming language parsers", "All of the above"],
    correct: 3,
    category: "TOC"
  },
  {
    question: "What is the key characteristic of a Chomsky normal form grammar?",
    options: ["All productions are of the form A -> BC", "All productions have a single variable on the right side", "All productions have variables and terminals on the right side", "All productions have at most one terminal on the right side"],
    correct: 0,
    category: "TOC"
  },
  {
    question: "What does a pumping lemma essentially demonstrate for a particular language class?",
    options: ["Certain languages cannot be recognized by a particular machine type.", "A particular class of languages has an upper bound on the size of the smallest accepting machine.", "The existence of specific types of grammars is decidable.", "A particular type of machine can recognize any language in a given class."],
    correct: 0,
    category: "TOC"
  },
  {
    question: "How can regular expressions be used practically?",
    options: ["Validating user input in web forms", "Searching and matching text patterns in strings", "Defining protocols for communication", "All of the above"],
    correct: 3,
    category: "TOC"
  },
  {
    question: "How does a Turing Machine differ from a finite state machine?",
    options: ["Turing Machines have an infinite tape", "Finite State Machines can count arbitrarily large inputs", "Turing Machines have a restricted number of states", "Finite State Machines have non-deterministic transitions"],
    correct: 0,
    category: "TOC"
  },
  {
    question: "What is the primary significance of the Chomsky hierarchy?",
    options: ["It categorizes languages according to the complexity of their grammars", "It standardizes notations for regular expressions", "It defines the limits of computability in the context of Turing Machines", "It differentiates between compiler design and interpreter design"],
    correct: 0,
    category: "TOC"
  },
  {
    question: "Which concept is fundamental to the idea of computability?",
    options: ["Recursive functions", "Context-free grammars", "Regular expressions", "Finite automata"],
    correct: 0,
    category: "TOC"
  },
  {
    question: "Consider a Turing Machine that operates on binary strings. What is the maximum number of states required for a Turing Machine that decides if a binary string contains an equal number of 0s and 1s?",
    options: ["n", "n^2", "2^n", "log(n)"],
    correct: 1,
    category: "TOC"
  },
  {
    question: "Which of the following languages is not recursively enumerable?",
    options: ["L = {<M> | M halts on input <M>}", "L = {<M> | M accepts <M> on input <M>}", "L = {<M> | M rejects <M> on input <M>}", "L = {<M> | M never halts on input <M>}"],
    correct: 3,
    category: "TOC"
  },
  {
    question: "Given a context-free grammar, how can you determine if it is ambiguous?",
    options: ["Use a Turing machine to simulate the grammar", "Inspect the grammar for left-recursion only", "Find two different parse trees for the same string", "Use a pushdown automaton to simulate the grammar"],
    correct: 2,
    category: "TOC"
  },
  {
    question: "In the Chomsky hierarchy, which class of languages allows for the use of context-sensitive rules?",
    options: ["Regular languages", "Context-free languages", "Context-sensitive languages", "Recursively enumerable languages"],
    correct: 2,
    category: "TOC"
  },
  {
    question: "Which problem is undecidable regarding Turing Machines?",
    options: ["Determining if a Turing machine accepts a given input", "Determining if a Turing machine halts on a given input", "Determining if two Turing machines accept the same language", "Determining the size of a Turing machine's state table"],
    correct: 1,
    category: "TOC"
  },
  {
    question: "What does a nondeterministic finite automaton (NFA) accept?",
    options: ["A single path through the state diagram", "One or more paths through the state diagram", "The empty set", "All paths that end in an accepting state"],
    correct: 1,
    category: "TOC"
  },
  {
    question: "How does a pushdown automaton differ fundamentally from a finite automaton?",
    options: ["Pushdown automata can use a stack", "Pushdown automata use more memory", "Pushdown automata use a different alphabet", "Pushdown automata have multiple accepting states"],
    correct: 0,
    category: "TOC"
  },
  {
    question: "What is the essential difference between a context-sensitive grammar and a context-free grammar?",
    options: ["Context-sensitive grammars use only production rules with a single nonterminal on the left", "Context-sensitive grammars can have context-sensitive nonterminals on the right side of production rules", "Context-sensitive grammars can contain context restrictions on production rules", "Context-sensitive grammars are inherently more complex in structure"],
    correct: 2,
    category: "TOC"
  },
  {
    question: "Which computational model can recognize any recursively enumerable language?",
    options: ["Finite automaton", "Pushdown automaton", "Turing machine", "Deterministic Finite Automaton"],
    correct: 2,
    category: "TOC"
  },
  {
    question: "What is the key distinguishing feature of a regular language?",
    options: ["The language can be recognized by a Turing Machine", "It can be expressed as a context-free grammar", "It can be recognized by a finite automaton", "The language satisfies a specific context-sensitive grammar"],
    correct: 2,
    category: "TOC"
  }
];

export default TheoryofComputationTOC3;
