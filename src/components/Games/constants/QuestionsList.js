const QUESTIONS = {
  "Problem Solving through Imperative Programming Lab in C (PSIPL)": [
    {
      question: "What is the correct syntax to declare an integer variable in C?",
      options: ["integer x;", "int x;", "var x;", "x: integer;"],
      correct: 1,
      category: "PSIPL"
    },
    {
      question: "Which loop is guaranteed to execute at least once?",
      options: ["for loop", "while loop", "do-while loop", "nested loop"],
      correct: 2,
      category: "PSIPL"
    },
    {
      question: "What is the output of printf(\"%d\", 5/2); in C?",
      options: ["2.5", "2", "3", "Error"],
      correct: 1,
      category: "PSIPL"
    },
    {
      question: "Which header file is required for printf() function?",
      options: ["<stdlib.h>", "<stdio.h>", "<string.h>", "<math.h>"],
      correct: 1,
      category: "PSIPL"
    }
  ],
  "Digital Systems and Microprocessors (DSM)": [
    {
      question: "What does CPU stand for?",
      options: ["Central Processing Unit", "Computer Processing Unit", "Central Program Unit", "Control Processing Unit"],
      correct: 0,
      category: "DSM"
    },
    {
      question: "How many bits are in a byte?",
      options: ["4", "8", "16", "32"],
      correct: 1,
      category: "DSM"
    },
    {
      question: "What is the binary representation of decimal 5?",
      options: ["100", "101", "110", "111"],
      correct: 1,
      category: "DSM"
    },
    {
      question: "Which gate produces output 1 only when all inputs are 1?",
      options: ["OR gate", "AND gate", "NOT gate", "XOR gate"],
      correct: 1,
      category: "DSM"
    }
  ],
  "Mathematics": [
    {
      question: "What is 7 × 8?",
      options: ["54", "56", "58", "62"],
      correct: 1,
      category: "Math"
    },
    {
      question: "What is 15% of 200?",
      options: ["25", "30", "35", "40"],
      correct: 1,
      category: "Math"
    },
    {
      question: "What is 12²?",
      options: ["124", "144", "164", "184"],
      correct: 1,
      category: "Math"
    }
  ],
  "Science": [
    {
      question: "What is H2O commonly known as?",
      options: ["Hydrogen", "Oxygen", "Water", "Carbon"],
      correct: 2,
      category: "Science"
    },
    {
      question: "Which planet is closest to the Sun?",
      options: ["Venus", "Mercury", "Earth", "Mars"],
      correct: 1,
      category: "Science"
    }
  ],
  "Geography": [
    {
      question: "What is the capital of France?",
      options: ["London", "Berlin", "Paris", "Madrid"],
      correct: 2,
      category: "Geography"
    },
    {
      question: "What is the largest ocean on Earth?",
      options: ["Atlantic", "Indian", "Arctic", "Pacific"],
      correct: 3,
      category: "Geography"
    }
  ],
  "Literature": [
    {
      question: "Who wrote 'Romeo and Juliet'?",
      options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
      correct: 1,
      category: "Literature"
    }
  ]
};

  export default QUESTIONS;
