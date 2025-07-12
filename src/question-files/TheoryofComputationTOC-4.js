const TheoryofComputationTOC4 = [
  {
    question: "Which theorem states that there exist problems that a computer cannot solve?",
    options: ["Pumping Lemma", "Closure Properties", "Rice's Theorem", "Undecidability Theorem"],
    correct: 3,
    category: "TOC"
  },
  {
    question: "A Turing Machine can recognize any language that is:",
    options: ["Regular", "Context-free", "Context-sensitive", "Recursively enumerable"],
    correct: 3,
    category: "TOC"
  },
  {
    question: "What is a key concept related to the analysis of algorithms, and used to prove the lower bound of algorithms?",
    options: ["DFA", "CFG", "NP Completeness", "Recurrence Relation"],
    correct: 2,
    category: "TOC"
  },
  {
    question: "Which language class is strictly contained in another?",
    options: ["Regular in Context-free", "Context-free in Recursively Enumerable", "Context-sensitive in Recursive", "Recursive in Recursively Enumerable"],
    correct: 0,
    category: "TOC"
  },
  {
    question: "A key difference between deterministic and non-deterministic Turing Machines is:",
    options: ["Non-deterministic machines are always faster", "Non-deterministic machines have non-linear time complexity", "Deterministic machines can solve more problems", "Non-deterministic machines explore multiple computation paths"],
    correct: 3,
    category: "TOC"
  },
  {
    question: "Consider a language L. How can you prove that L is not a regular language?",
    options: ["Use the pumping lemma", "Construct a Turing Machine that accepts L", "Show it is context-free", "Demonstrate that it is recursive"],
    correct: 0,
    category: "TOC"
  },
  {
    question: "What does the Chomsky hierarchy represent?",
    options: ["A classification of different types of computation", "A type of Turing Machine", "An algorithm for solving problems", "A different programming paradigm"],
    correct: 0,
    category: "TOC"
  },
  {
    question: "In what scenario might a Turing machine's halting problem become relevant?",
    options: ["Optimizing program run time", "Debugging a program", "Validating the correctness of a program's logic", "Deciding whether a program will halt on a given input"],
    correct: 3,
    category: "TOC"
  },
  {
    question: "What does the term 'decidable' mean in the context of a language?",
    options: ["There exists a Turing Machine that can decide if a string is in the language", "There is a program that determines if a string is in the language in polynomial time", "The language can be represented by a context-free grammar", "The language can be accepted by a finite automaton in linear time"],
    correct: 0,
    category: "TOC"
  },
  {
    question: "Which concept in the theory of computation is essential for proving that a given algorithm will not always complete?",
    options: ["Space Complexity", "Time Complexity", "Undecidability", "Regular Grammars"],
    correct: 2,
    category: "TOC"
  },
  {
    question: "A language recognized by a Turing Machine is said to be:",
    options: ["Recursively Enumerable", "Recursively Decidable", "Non-regular", "Non-Context Free"],
    correct: 0,
    category: "TOC"
  },
  {
    question: "How can you determine if a problem is NP-Complete?",
    options: ["Show it is NP and reduce a known NP-Complete problem to it", "Use the pumping lemma", "Construct a pushdown automaton that accepts it", "Prove that it is recursive"],
    correct: 0,
    category: "TOC"
  },
  {
    question: "What does a CFG represent?",
    options: ["A formal grammar for generating strings", "A class of Turing Machines", "A finite automaton model", "A mathematical logic statement"],
    correct: 0,
    category: "TOC"
  },
  {
    question: "Which of the following formal languages is NOT regular?",
    options: ["{a^n b^n | n >= 0}", "{a^n b^m | n, m >= 0}", "{a^n b^n c^n | n >= 0}", "{a^i b^j | i = j}"],
    correct: 2,
    category: "TOC"
  },
  {
    question: "Consider a Turing machine that halts on every input.  Which of the following statements is true?",
    options: ["The machine must be deterministic", "The machine must be non-deterministic", "The language recognized by the machine is finite", "The machine must accept all inputs"],
    correct: 0,
    category: "TOC"
  },
  {
    question: "What is the space complexity of a context-free grammar that generates palindromes over the alphabet {a, b}?",
    options: ["O(n)", "O(n^2)", "O(1)", "O(log n)"],
    correct: 0,
    category: "TOC"
  },
  {
    question: "Which of the following problems is undecidable?",
    options: ["Checking if a given context-free grammar is ambiguous", "Determining if a given Turing machine halts on a given input", "Testing if two given regular expressions represent the same language", "Finding the minimal DFA for a given regular expression"],
    correct: 1,
    category: "TOC"
  },
  {
    question: "In a Chomsky Normal Form (CNF) grammar, what is the maximum number of symbols in a production rule?",
    options: ["3", "2", "4", "1"],
    correct: 1,
    category: "TOC"
  },
  {
    question: "Given a Turing machine with a blank tape, which of these statements is true about its halting behavior?",
    options: ["It always halts on any input", "It halts only on empty input", "It may halt or loop, depending on the input", "It always loops"],
    correct: 2,
    category: "TOC"
  },
  {
    question: "Which algorithm can be used to minimize a DFA?",
    options: ["Floyd-Warshall", "Breadth-First Search", "Kruskal's", "Merge Sort"],
    correct: 1,
    category: "TOC"
  },
  {
    question: "What type of language does a Turing machine with a single tape and a single head recognize?",
    options: ["Regular", "Context-Free", "Context-Sensitive", "Recursive"],
    correct: 3,
    category: "TOC"
  },
  {
    question: "How many states are required for a DFA to recognize the language {w | w has an even number of a's and an even number of b's} over the alphabet {a, b}?",
    options: ["2", "4", "8", "16"],
    correct: 1,
    category: "TOC"
  },
  {
    question: "Which of the following problems are computationally equivalent to the halting problem?",
    options: ["Sorting a list", "Finding a shortest path in a graph", "Determining if a grammar is ambiguous", "Determining if a Turing machine accepts a specific input"],
    correct: 3,
    category: "TOC"
  },
  {
    question: "What does pumping lemma determine for a given regular language?",
    options: ["whether it is context-free", "whether it is context-sensitive", "a string belonging to the language", "a guaranteed repeating substring within strings of a specific length"],
    correct: 3,
    category: "TOC"
  },
  {
    question: "Which property is NOT guaranteed for a Turing machine that halts?",
    options: ["It accepts the input", "It rejects the input", "Its output is fixed", "Its computational step is finite"],
    correct: 2,
    category: "TOC"
  },
  {
    question: "What is the relationship between the power of a Turing machine and a Non-deterministic Turing machine?",
    options: ["Non-deterministic Turing machines are more powerful", "They have the same computational power", "Turing machines are more powerful", "The power depends on the input"],
    correct: 1,
    category: "TOC"
  },
  {
    question: "A grammar that generates the language {a^n b^n c^n | n>=0} belongs to which language class?",
    options: ["Regular", "Context-Free", "Context-Sensitive", "Recursive"],
    correct: 2,
    category: "TOC"
  },
  {
    question: "What does a Chomsky Hierarchy represent?",
    options: ["The different types of grammars and their corresponding languages", "The design of a compiler", "The steps of a Turing machine", "The complexity of algorithms"],
    correct: 0,
    category: "TOC"
  },
  {
    question: "Which algorithm is widely used to convert a NFA into an equivalent DFA?",
    options: ["Floyd-Warshall", "Kruskal's", "Subset Construction", "Bellman-Ford"],
    correct: 2,
    category: "TOC"
  },
  {
    question: "Given a context-free grammar, how can you check whether it is ambiguous?",
    options: ["Use a Turing machine", "Simulate the grammar with different inputs", "Use a regular expression", "Check for left recursion"],
    correct: 1,
    category: "TOC"
  },
  {
    question: "What does the concept of undecidability refer to in TOC?",
    options: ["Languages that are not recursive", "Problems for which no algorithm exists", "Problems solvable in polynomial time", "Problems related to non-deterministic machines"],
    correct: 1,
    category: "TOC"
  },
  {
    question: "A practical application of finite automata is in:",
    options: ["Compiler design", "Image processing", "Data compression", "All of the above"],
    correct: 3,
    category: "TOC"
  },
  {
    question: "A context-free grammar, capable of generating any arithmetic expression, falls into which category?",
    options: ["Regular", "Context-sensitive", "Recursively Enumerable", "Context-free"],
    correct: 3,
    category: "TOC"
  },
  {
    question: "Which of the following does NOT hold for a context-sensitive grammar?",
    options: ["The left-hand side of a production is always smaller than the right-hand side", "The number of variables is unlimited", "The production rules can transform any string in the language", "The language generated is equivalent to the language that a Turing Machine can accept"],
    correct: 0,
    category: "TOC"
  },
  {
    question: "The use of pushdown automata is especially relevant in which part of programming languages?",
    options: ["Lexical analysis", "Parsing", "Code generation", "Syntax checking"],
    correct: 1,
    category: "TOC"
  },
  {
    question: "Consider a Turing Machine that operates on a binary input string.  The machine halts if it encounters a '1' followed by a sequence of '0's of length greater than or equal to the input length.  Otherwise, it runs indefinitely.  What is the language recognized by this Turing Machine?",
    options: ["{w \u2208 {0,1}* | w contains at least one 1}", "{w \u2208 {0,1}* | w starts with 1}", "{w \u2208 {0,1}* | the length of the sequence of 0s following the first 1 is greater than or equal to the length of w}", "{w \u2208 {0,1}* | w has a 1 followed by a sequence of 0s}"],
    correct: 2,
    category: "TOC"
  },
  {
    question: "Which of the following is NOT a property of a context-free grammar?",
    options: ["Can generate all regular languages", "Can generate palindromes", "Can describe the language of balanced parentheses", "Can generate the language {a^n b^n c^n | n \u2265 0}"],
    correct: 0,
    category: "TOC"
  },
  {
    question: "A language L is decidable if there exists a Turing Machine that halts on every input string and accepts strings in L and rejects strings not in L.  Which of the following scenarios describes an undecidable problem related to Turing Machines?",
    options: ["Determining if a Turing Machine accepts a given string", "Checking if a Turing Machine halts on a given input", "Counting the number of states in a Turing Machine", "Determining the language accepted by a Turing Machine"],
    correct: 1,
    category: "TOC"
  },
  {
    question: "Given a non-deterministic finite automaton (NFA) with 5 states and an alphabet of size 3, what is the maximum number of distinct paths from a starting state to an accepting state?",
    options: ["15", "3^5", "5^3", "5 * 3"],
    correct: 1,
    category: "TOC"
  },
  {
    question: "Which property ensures that a language recognized by a Turing Machine is effectively computable?",
    options: ["Decidability", "Regularity", "Closure under concatenation", "Closure under complement"],
    correct: 0,
    category: "TOC"
  },
  {
    question: "A context-sensitive grammar can generate languages that are not context-free, due to which fundamental aspect of its rules?",
    options: ["Variable replacement based on the surrounding context of variables in the string", "Ability to replace non-terminals with terminals based on matching with substrings", "The inherent ability to perform pushdown stack operations", "Rules governing recursion in the language"],
    correct: 0,
    category: "TOC"
  },
  {
    question: "What crucial aspect differentiates a Turing Machine from a finite automaton?",
    options: ["Input length limitations", "Acceptance by final state", "Ability to manipulate input using a tape", "Limited number of states"],
    correct: 2,
    category: "TOC"
  },
  {
    question: "Which concept in the theory of computation provides the foundation for the study of complexity of algorithms?",
    options: ["Deterministic Finite Automata", "Pushdown Automata", "Turing Machines", "Context-Free Grammars"],
    correct: 2,
    category: "TOC"
  },
  {
    question: "In the Chomsky Hierarchy, which type of grammar defines the broadest class of languages?",
    options: ["Type 0", "Type 1", "Type 2", "Type 3"],
    correct: 0,
    category: "TOC"
  },
  {
    question: "What is the complexity class of the problem of determining if a given context-free grammar generates an empty language?",
    options: ["P", "NP", "Co-NP", "Decidable but not in any known complexity class"],
    correct: 3,
    category: "TOC"
  },
  {
    question: "What mathematical structure is used to model the execution of a Turing Machine?",
    options: ["Finite state automaton", "Pushdown automaton", "Recursive function", "State Transition Diagram"],
    correct: 0,
    category: "TOC"
  },
  {
    question: "What is the primary theoretical difference between a deterministic and non-deterministic Turing machine?",
    options: ["Non-deterministic TM's can halt on any input", "Deterministic TM's have more tape space", "Non-deterministic TM's can follow multiple paths simultaneously", "Deterministic TM's can use multiple input tapes"],
    correct: 2,
    category: "TOC"
  },
  {
    question: "What language is NOT regular?",
    options: ["{a^n b^n | n >= 0}", "{w|w has equal number of a's and b's}", "{a^n | n >= 0}", "{a^n b^n c^n| n >=0}"],
    correct: 3,
    category: "TOC"
  },
  {
    question: "Which computational model is most powerful in terms of language recognition, given unlimited memory?",
    options: ["Finite State Machine", "Pushdown Automata", "Turing Machine", "Context-Free Grammar"],
    correct: 2,
    category: "TOC"
  },
  {
    question: "What is a common technique for proving the undecidability of a problem?",
    options: ["Reduction", "Induction", "Substitution", "Contradiction"],
    correct: 0,
    category: "TOC"
  }
];

export default TheoryofComputationTOC4;
