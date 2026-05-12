import { Question } from "../types";

export const questions: Question[] = [
  // --- UNIT 1: INTRODUCTION TO PROBLEM SOLVING ---
  {
    id: 1,
    unit: 1,
    topic: "Problem Solving Steps",
    pattern: "8 Marker",
    type: "Theory",
    frequency: "High",
    isMustDo: true,
    question: "Explain the various steps involved in problem-solving using a computer.",
    answer: {
      finalAnswer: "Problem Definition → Analysis → Design → Coding → Testing → Maintenance",
      explanation: "Problem solving is a systematic approach. 1. Problem Definition: Identifying user requirements. 2. Analysis: Determining input, output, and logic. 3. Design: Creating Algorithm and Flowchart. 4. Coding: Translating design to code. 5. Testing: Removing logical and syntax bugs. 6. Maintenance: Updating for future needs.",
      aim: "To understand the systematic lifecycle of solving a computational problem.",
      algorithm: [
        "Problem Identification",
        "Requirement Analysis",
        "Design (Algorithm & Flowchart)",
        "Implementation (Coding)",
        "Verification (Testing)",
        "Maintenance"
      ]
    }
  },
  {
    id: 2,
    unit: 1,
    topic: "Algorithm Characteristics",
    pattern: "8 Marker",
    type: "Theory",
    frequency: "Very High",
    isMustDo: true,
    question: "What is an algorithm? Describe the various characteristics of a good algorithm.",
    answer: {
      finalAnswer: "A step-by-step set of finite instructions to solve a task.",
      explanation: "Characteristics include: 1. Finiteness (must terminate). 2. Definiteness (steps must be clear). 3. Input (0 or more). 4. Output (1 or more). 5. Effectiveness (simple enough to be done with pen/paper).",
      aim: "To define the essential properties of a valid and efficient algorithm.",
      algorithm: ["Precision", "Uniqueness", "Finiteness", "Input/Output", "Generality"]
    }
  },
  {
    id: 3,
    unit: 1,
    topic: "Flowchart Symbols",
    pattern: "8 Marker",
    type: "Theory",
    frequency: "High",
    isMustDo: false,
    question: "Mention flowchart and discuss the symbols/shapes that are commonly used in flowcharts.",
    answer: {
      finalAnswer: "Graphical representation of an algorithm.",
      explanation: "Common symbols: 1. Oval (Start/End). 2. Parallelogram (Input/Output). 3. Rectangle (Processing). 4. Diamond (Decision). 5. Arrows (Flow lines).",
      aim: "To describe the standardized visual language for representing program logic."
    }
  },
  {
    id: 4,
    unit: 1,
    topic: "Salary Calculation",
    pattern: "15 Marker",
    type: "Coding",
    frequency: "Very High",
    isMustDo: true,
    question: "Draw a flowchart and write a C program to compute the gross salary of an employee where HRA is 30% and DA as 80% of basic pay.",
    answer: {
      aim: "Calculating Gross Salary based on fixed HRA and DA percentages.",
      algorithm: [
        "Start",
        "Input Basic Pay (BP)",
        "Calculate HRA = 0.30 * BP",
        "Calculate DA = 0.80 * BP",
        "Calculate Gross Salary = BP + HRA + DA",
        "Display Gross Salary",
        "Stop"
      ],
      code: "#include <stdio.h>\nint main() {\n    float bp, hra, da, gs;\n    printf(\"Enter Basic Pay: \");\n    scanf(\"%f\", &bp);\n    hra = 0.30 * bp;\n    da = 0.80 * bp;\n    gs = bp + hra + da;\n    printf(\"Gross Salary = %.2f\", gs);\n    return 0;\n}",
      input: "Basic Pay = 10000",
      output: "Gross Salary = 21000.00",
      result: "Gross salary successfully computed with 30% HRA and 80% DA.",
      flowLogic: ["Read BP → Compute 30% & 80% → Sum → Print"],
      finalAnswer: "Gross = BP + (0.3*BP) + (0.8*BP)",
      explanation: "HRA and DA are derived attributes based on the input Basic Pay. Final formula is Gross = Basic * 2.1."
    },
    pseudocode: "READ bp, SET hra = 0.3*bp, SET da = 0.8*bp, SET gross = bp+hra+da, PRINT gross"
  },

  // --- UNIT 2: C PROGRAMMING FUNDAMENTALS ---
  {
    id: 5,
    unit: 2,
    topic: "Storage Classes",
    pattern: "8 Marker",
    type: "Theory",
    frequency: "High",
    isMustDo: true,
    question: "Analyze the various Storage Classes in C with suitable examples (Auto, Static, Extern, Register).",
    answer: {
      finalAnswer: "Specifies scope, lifetime, and storage location of variables.",
      explanation: "1. Auto: Local scope, stored in RAM, lifetime within block. 2. Static: Retains value between function calls. 3. Extern: Global access across multiple files. 4. Register: Stored in CPU register for fast access.",
      aim: "To differentiate between variable storage management strategies in C.",
      flowLogic: ["Auto (Scope) | Static (Persistence) | Extern (Global) | Register (Speed)"]
    }
  },
  {
    id: 6,
    unit: 2,
    topic: "Operators in C",
    pattern: "8 Marker",
    type: "Theory",
    frequency: "Medium",
    isMustDo: false,
    question: "Describe about pre-incremental, post-increment, pre-decrement, post-decrement, and conditional operators with examples.",
    answer: {
      finalAnswer: "Unary and Ternary operators for balance and efficiency.",
      explanation: "++x increments before use; x++ increments after use. Condition ? true_val : false_val is the ternary operator used for short conditional logic.",
      aim: "To master shorthand arithmetic and conditional operators.",
      algorithm: [
        "Pre: Increment/Decrement first, then evaluate",
        "Post: Evaluate first, then Increment/Decrement",
        "Conditional: boolean ? val1 : val2"
      ]
    }
  },
  {
    id: 7,
    unit: 2,
    topic: "C Data Types",
    pattern: "8 Marker",
    type: "Theory",
    frequency: "High",
    isMustDo: true,
    question: "Explain about different datatypes handled in C programming language.",
    answer: {
      finalAnswer: "Primitive (int, float, char, double) and Derived (arrays, pointers).",
      explanation: "1. Primary: int (2/4 bytes), char (1 byte), float (4 bytes), double (8 bytes). 2. Derived: Array, Pointer, Structure, Union. 3. Void.",
      aim: "To categorize data storage formats supported by the C compiler."
    }
  },
  {
    id: 8,
    unit: 2,
    topic: "Sum of Digits",
    pattern: "8 Marker",
    type: "Coding",
    frequency: "Very High",
    isMustDo: true,
    question: "Write a C program to calculate the sum of digits of a five-digit number.",
    answer: {
      aim: "Isolating digits of an integer and calculating their sum.",
      algorithm: [
        "Input the number",
        "While number > 0:",
        "  rem = number % 10",
        "  sum = sum + rem",
        "  number = number / 10",
        "Print sum"
      ],
      code: "int n, s=0, r; scanf(\"%d\", &n);\nwhile(n>0) { r = n%10; s += r; n /= 10; }\nprintf(\"%d\", s);",
      input: "12345",
      output: "15",
      result: "Digits summed successfully.",
      finalAnswer: "Looping logic with %10 and /10",
      explanation: "Modulo gives the last digit, division removes it. This iterative process extracts all digits."
    }
  },
  {
    id: 9,
    unit: 2,
    topic: "Biggest of Three",
    pattern: "8 Marker",
    type: "Coding",
    frequency: "High",
    isMustDo: false,
    question: "Write a C program to get 3 numbers as input from the user and print the biggest number among the three using if condition.",
    answer: {
      aim: "Conditional branching for maximum value identification.",
      algorithm: [
        "Start",
        "Input a, b, c",
        "If a > b and a > c: max = a",
        "Else if b > c: max = b",
        "Else: max = c",
        "Print max"
      ],
      code: "if(a>b && a>c) printf(\"%d\", a);\nelse if(b>c) printf(\"%d\", b);\nelse printf(\"%d\", c);",
      input: "10 50 30",
      output: "50",
      result: "Correct maximum identified.",
      finalAnswer: "If-else if ladder",
      explanation: "Using logical AND ensures both conditions for a being max are met. This is the standard way to compare three values."
    }
  },
  {
    id: 10,
    unit: 2,
    topic: "Sum of Natural Numbers",
    pattern: "8 Marker",
    type: "Coding",
    frequency: "Medium",
    isMustDo: false,
    question: "Write a C program to compute the sum of the first 10 natural numbers.",
    answer: {
      aim: "Loop iteration to calculate cumulative sum.",
      algorithm: ["Initialize sum=0", "Loop i from 1 to 10", "sum = sum + i", "Print sum"],
      code: "int sum=0; for(int i=1; i<=10; i++) sum += i; printf(\"%d\", sum);",
      input: "N/A",
      output: "55",
      result: "Sum of 1..10 is 55.",
      finalAnswer: "for(i=1; i<=10; i++) sum+=i",
      explanation: "The loop iterates 10 times, adding the current index to the accumulator variable."
    }
  },
  {
    id: 11,
    unit: 2,
    topic: "IO Functions",
    pattern: "8 Marker",
    type: "Theory",
    frequency: "Medium",
    isMustDo: false,
    question: "Differentiate getchar(), putchar() with a suitable C programming example.",
    answer: {
      finalAnswer: "getchar reads a single char; putchar prints a single char.",
      explanation: "Used for character-oriented I/O. getchar() returns integer (ASCII) from input buffer. putchar() takes that integer/char and displays it.",
      code: "char c = getchar(); putchar(c);",
      aim: "Character level I/O control."
    }
  },
  {
    id: 12,
    unit: 2,
    topic: "Gross Salary (Kannan)",
    pattern: "15 Marker",
    type: "Coding",
    frequency: "High",
    isMustDo: true,
    question: "Write a C program to calculate Kannan's gross salary: DA is 35%, HRA is 27%, and TA is 10% of basic salary.",
    answer: {
      aim: "Scenario-based salary calculation with HRA, DA, TA.",
      algorithm: [
        "Input basic_salary",
        "da = 0.35 * basic",
        "hra = 0.27 * basic",
        "ta = 0.10 * basic",
        "gross = basic + da + hra + ta",
        "Print gross"
      ],
      code: "gs = bs + (0.35*bs) + (0.27*bs) + (0.10*bs);",
      input: "1000",
      output: "1720.00",
      result: "Gross salary calculated correctly for specific scenario.",
      finalAnswer: "Gross = BS * (1 + 0.35 + 0.27 + 0.10)",
      explanation: "Applies scenario-specific percentages to basic pay. DA, HRA, and TA are calculated as decimals."
    }
  },
  {
    id: 13,
    unit: 2,
    topic: "Toll Gate Logic",
    pattern: "15 Marker",
    type: "Coding",
    frequency: "High",
    isMustDo: true,
    question: "Toll Gate Scheme Logic: If vehicle number is divisible by 7 and 3, pay 1/3 fee. If divisible by 7 or 3, pay 1/2 fee. Otherwise full fee.",
    answer: {
      aim: "Divisibility logic for fee calculation.",
      algorithm: [
        "Input v_num and fee",
        "If (v_num % 7 == 0 && v_num % 3 == 0): pay = fee/3",
        "Else if (v_num % 7 == 0 || v_num % 3 == 0): pay = fee/2",
        "Else: pay = fee",
        "Display pay"
      ],
      code: "if (v%7==0 && v%3==0) p = f/3;\nelse if (v%7==0 || v%3==0) p = f/2;\nelse p = f;",
      input: "VNum: 21, Fee: 300",
      output: "100",
      result: "Correct fee tier selected.",
      finalAnswer: "Combined logical AND/OR conditions",
      explanation: "Order matters - check for both conditions (AND) first to avoid incorrect categorization."
    }
  },

  // --- UNIT 3: ARRAYS, STRINGS, AND FUNCTIONS ---
  {
    id: 14,
    unit: 3,
    topic: "Array Reverse",
    pattern: "8 Marker",
    type: "Coding",
    frequency: "High",
    isMustDo: true,
    question: "Write a C program to read n number of values in an array and display them in reverse order.",
    answer: {
      aim: "Array traversal in reverse order.",
      algorithm: ["Read n", "Loop i=0 to n-1 to input elements", "Loop i=n-1 to 0 to print elements"],
      code: "for(i=n-1; i>=0; i--) printf(\"%d \", a[i]);",
      input: "5 elements: 1,2,3,4,5",
      output: "5 4 3 2 1",
      result: "Reversed display achieved.",
      finalAnswer: "Decrementing loop index",
      explanation: "The loop starts from the last valid index (n-1) and goes down to 0."
    }
  },
  {
    id: 15,
    unit: 3,
    topic: "Matrix Transpose",
    pattern: "8 Marker",
    type: "Coding",
    frequency: "Very High",
    isMustDo: true,
    question: "Write a C program to find the transpose of a matrix.",
    answer: {
      aim: "Interchanging rows and columns.",
      algorithm: ["Input mat[i][j]", "Assign trans[j][i] = mat[i][j]", "Print trans"],
      code: "for(i=0;i<r;i++) for(j=0;j<c;j++) t[j][i] = m[i][j];",
      input: "2x3 matrix",
      output: "3x2 matrix",
      result: "Transpose generated.",
      finalAnswer: "Swap row/column indices",
      explanation: "A new matrix is created where the row index i becomes the column index and vice-versa."
    }
  },
  {
    id: 16,
    unit: 3,
    topic: "String Palindrome",
    pattern: "8 Marker",
    type: "Coding",
    frequency: "Very High",
    isMustDo: true,
    question: "Write a C program to find whether a given string is a palindrome or not.",
    answer: {
      aim: "Validating symmetrical strings.",
      algorithm: ["Find len", "Compare s[i] with s[len-1-i] for i = 0 to len/2", "If mismatch, not palindrome"],
      code: "for(i=0; i<len/2; i++) if(s[i] != s[len-1-i]) f=1;",
      input: "level",
      output: "Palindrome",
      result: "Validated symmetry.",
      finalAnswer: "Two-pointer comparison",
      explanation: "Comparing characters from both ends moving towards the center."
    }
  },
  {
    id: 17,
    unit: 3,
    topic: "Replace Vowels",
    pattern: "8 Marker",
    type: "Coding",
    frequency: "Medium",
    isMustDo: false,
    question: "Write a C program to replace all vowels with a star (*) and print the output.",
    answer: {
      aim: "Conditional character substitution.",
      algorithm: ["Read string", "If char is a,e,i,o,u, replace with *", "Print new string"],
      code: "if(c=='a'||c=='e'...) s[i] = '*';",
      input: "apple",
      output: "*ppl*",
      result: "Vowels masked.",
      finalAnswer: "Iterative search and replace",
      explanation: "The program checks each character against the set of vowels and replaces if matched."
    }
  },
  {
    id: 18,
    unit: 3,
    topic: "Call by Value/Ref",
    pattern: "8 Marker",
    type: "Theory",
    frequency: "Very High",
    isMustDo: true,
    question: "Explain with a suitable example: Call by Value and Call by Reference.",
    answer: {
      finalAnswer: "Value copies data; Reference copies address.",
      explanation: "In Call by Value, actual args are not changed because a copy is passed. In Reference, changes reflect in caller because the actual memory address is used.",
      aim: "Understanding parameter passing mechanisms."
    }
  },
  {
    id: 19,
    unit: 3,
    topic: "Recursion",
    pattern: "8 Marker",
    type: "Theory",
    frequency: "High",
    isMustDo: true,
    question: "Describe function and its types in C and explain recursion function with an example.",
    answer: {
      finalAnswer: "Function calling itself.",
      explanation: "Recursion splits a problem into smaller instances. Example: factorial(n) = n * factorial(n-1). Requires base case to stop infinite execution.",
      aim: "Mastering recursive logic."
    }
  },
  {
    id: 20,
    unit: 3,
    topic: "Character Analysis",
    pattern: "15 Marker",
    type: "Coding",
    frequency: "High",
    isMustDo: true,
    question: "Write a C program to count the number of uppercase characters, lowercase characters, digits and special symbols in a given sentence.",
    answer: {
      aim: "String categorization using ASCII ranges.",
      algorithm: [
        "Iterate character by character",
        "If (c >= 'A' && c <= 'Z'): upper++",
        "Else if (c >= 'a' && c <= 'z'): lower++",
        "Else if (c >= '0' && c <= '9'): digit++",
        "Else: special++"
      ],
      code: "if(s[i]>='A'&&s[i]<='Z') u++;",
      input: "Hi! 123",
      output: "U:1, L:1, D:3, S:2",
      result: "Counts match input types.",
      finalAnswer: "Range checking in loop",
      explanation: "Characters are compared against ASCII ranges to classify them into four distinct types."
    }
  },
  {
    id: 21,
    unit: 3,
    topic: "Matrix Mark Sum",
    pattern: "15 Marker",
    type: "Coding",
    frequency: "High",
    isMustDo: true,
    question: "Find the total marks of both examinations for three groups stored in matrices X and Y.",
    answer: {
      aim: "Summing two matrices of identical dimensions.",
      algorithm: ["Initialize Matrix Z", "Loop i and j", "Z[i][j] = X[i][j] + Y[i][j]"],
      code: "res[i][j] = x[i][j] + y[i][j];",
      finalAnswer: "Matrix Addition",
      explanation: "Two matrices are added element-wise using nested loops to iterate through rows and columns."
    }
  },
  {
    id: 22,
    unit: 3,
    topic: "String Functions",
    pattern: "15 Marker",
    type: "Theory",
    frequency: "Very High",
    isMustDo: true,
    question: "Explain any four string manipulation functions with examples (e.g., strlen, strcpy, strcat, strcmp).",
    answer: {
      finalAnswer: "C Standard Library <string.h> functions.",
      explanation: "strlen: returns length; strcpy: copies source to dest; strcat: joins strings; strcmp: compares strings lexicographically.",
      aim: "Utility functions for string handling."
    }
  },

  // --- UNIT 4: PYTHON PROGRAMMING ---
  {
    id: 23,
    unit: 4,
    topic: "Python Structures",
    pattern: "8 Marker",
    type: "Theory",
    frequency: "High",
    isMustDo: true,
    question: "Describe different data types and structures in Python (List, Tuple, Dict, Set, Boolean).",
    answer: { 
      finalAnswer: "Mutable (List, Dict, Set) vs Immutable (Tuple).", 
      explanation: "Lists are ordered and changeable. Tuples are ordered and unchangeable. Dictionaries are key-value mappings. Sets are unordered collections of unique items.",
      aim: "Understanding Python's container types." 
    }
  },
  {
    id: 24,
    unit: 4,
    topic: "Tuple Operations",
    pattern: "8 Marker",
    type: "Theory",
    frequency: "Medium",
    isMustDo: false,
    question: "Describe any four operations performed on tuples in Python programming.",
    answer: { 
      finalAnswer: "Nesting, Slicing, Length, Repetition.", 
      explanation: "Tuples support concatenation (+), repetition (*), slicing ([start:stop]), and finding length (len()).",
      aim: "Understanding operations on immutable sequences."
    }
  },
  {
    id: 25,
    unit: 4,
    topic: "Python IO",
    pattern: "8 Marker",
    type: "Theory",
    frequency: "Medium",
    isMustDo: false,
    question: "Write the input and output functions in Python with examples.",
    answer: { 
      finalAnswer: "input() for read, print() for write.", 
      explanation: "input() reads a string from user. print() displays values. Type casting is often needed for input() (e.g., int(input())).",
      aim: "Fundamental IO in Python." 
    }
  },
  {
    id: 26,
    unit: 4,
    topic: "List vs Tuple",
    pattern: "8 Marker",
    type: "Theory",
    frequency: "High",
    isMustDo: true,
    question: "Explain list and tuple with suitable examples.",
    answer: { 
      finalAnswer: "List [v1, v2] vs Tuple (v1, v2).", 
      explanation: "Lists are dynamic and mutable (can add/remove elements). Tuples are fixed size and immutable (cannot change after creation).",
      aim: "Comparing linear data structures in Python."
    }
  },
  {
    id: 27,
    unit: 4,
    topic: "Python Dictionary",
    pattern: "15 Marker",
    type: "Theory",
    frequency: "High",
    isMustDo: true,
    question: "What is a Dictionary? Explain Python dictionaries in detail discussing its operations and methods.",
    answer: { 
      finalAnswer: "Unordered key-value pairs.", 
      explanation: "Dictionaries store data in pairs. Methods: keys(), values(), items(), update(). They are optimized for speed.",
      aim: "Mastering associative arrays in Python."
    }
  },
  {
    id: 28,
    unit: 4,
    topic: "List Sorting Logic",
    pattern: "15 Marker",
    type: "Coding",
    frequency: "Medium",
    isMustDo: false,
    question: "Write a Python program to check whether the given list is in sorted order or not.",
    answer: {
      aim: "Linear scan for sort validation.",
      algorithm: ["Compare l[i] with l[i+1] for i in range(len-1)", "If l[i] > l[i+1], return False"],
      code: "all(l[i] <= l[i+1] for i in range(len(l)-1))",
      result: "Boolean result (True/False).",
      finalAnswer: "Linear comparison",
      explanation: "The program iterates through the list once and returns False if any element is greater than its successor."
    }
  },
  {
    id: 29,
    unit: 4,
    topic: "Floyd's Triangle (Python)",
    pattern: "15 Marker",
    type: "Coding",
    frequency: "High",
    isMustDo: true,
    question: "Write a Python program to print the Floyd triangle.",
    answer: {
      aim: "Generating incremental numeric triangle.",
      code: "c=1\nfor i in range(1, n+1):\n  for j in range(i):\n    print(c, end=' '); c+=1\n  print()",
      finalAnswer: "Nested loops with counter",
      explanation: "The outer loop controls the rows, the inner loop controls columns, and a counter keeps track of the next number to print."
    }
  },

  // --- UNIT 5: PYTHON LIBRARIES ---
  {
    id: 30,
    unit: 5,
    topic: "Pandas Features",
    pattern: "8 Marker",
    type: "Theory",
    frequency: "High",
    isMustDo: true,
    question: "Explain the significant features of the pandas library.",
    answer: { 
      finalAnswer: "DataFrame, Series, Data alignment, Handling NA.", 
      explanation: "Pandas provides high-performance data structures. Features include DataFrame for tabular data, handling missing data, and merging datasets.",
      aim: "Structured data library features." 
    }
  },
  {
    id: 31,
    unit: 5,
    topic: "NumPy Features",
    pattern: "8 Marker",
    type: "Theory",
    frequency: "High",
    isMustDo: true,
    question: "List out various features of Numpy.",
    answer: { 
      finalAnswer: "n-dimensional array, broadcasting, linear algebra.", 
      explanation: "NumPy is the base for numerical computing. Features include fast array operations, broadcasting rules, and support for multi-dimensional data.",
      aim: "Numerical computing features." 
    }
  },
  {
    id: 32,
    unit: 5,
    topic: "NumPy Attributes",
    pattern: "8 Marker",
    type: "Theory",
    frequency: "Very High",
    isMustDo: true,
    question: "Write short notes on Numpy array attributes (shape, ndim, size, dtype).",
    answer: { finalAnswer: "Metadata about the array structure.", explanation: "ndim: dimensions; shape: tuple of sizes; size: total count; dtype: element type." }
  },
  {
    id: 33,
    unit: 5,
    topic: "NumPy Indexing",
    pattern: "8 Marker",
    type: "Theory",
    frequency: "High",
    isMustDo: false,
    question: "Explain with an example Numpy indexing.",
    answer: { 
      finalAnswer: "Accessing elements using [r, c] notation.", 
      explanation: "arr[1, 2] accesses row 1, col 2 element. Indexing in NumPy is zero-based and supports negative indexing for reverse access.",
      aim: "Efficient array element access."
    }
  },
  {
    id: 34,
    unit: 5,
    topic: "Pandas Querying",
    pattern: "8 Marker",
    type: "Theory",
    frequency: "Medium",
    isMustDo: false,
    question: "Write short notes on pandas querying from data frames.",
    answer: { 
      finalAnswer: "Filtering using logical conditions.", 
      explanation: "df[df['age'] > 20] retrieves rows matching condition. This is similar to SQL WHERE clauses.",
      aim: "Subset selection in DataFrames."
    }
  },
  {
    id: 35,
    unit: 5,
    topic: "NumPy Stats",
    pattern: "8 Marker",
    type: "Theory",
    frequency: "Medium",
    isMustDo: false,
    question: "Explain statistical functions in Numpy.",
    answer: { 
      finalAnswer: "mean(), median(), std(), min(), max().", 
      explanation: "NumPy provides direct methods to calculate averages, variance, and extreme values on arrays.",
      aim: "Aggregate calculations on arrays." 
    }
  },

  // --- CONSOLIDATED MCQs ---
  {
    id: 101, unit: 1, topic: "Problem Solving", pattern: "MCQ", type: "MCQ", frequency: "High", isMustDo: true,
    question: "What is the first step in the problem-solving process?",
    options: ["Generate potential solutions", "Define the problem", "Implement the solution", "Evaluate alternatives"],
    answer: { finalAnswer: "Define the problem", explanation: "Critical first step to understand constraints." }
  },
  {
    id: 102, unit: 1, topic: "Algorithm", pattern: "MCQ", type: "MCQ", frequency: "High", isMustDo: true,
    question: "What is an algorithm?",
    options: ["A step-by-step procedure to solve a problem", "A graphical representation", "A programming language", "A flowchart symbol"],
    answer: { finalAnswer: "A step-by-step procedure to solve a problem", explanation: "An algorithm is a detailed sequence of steps." }
  },
  {
    id: 103, unit: 1, topic: "Algorithm", pattern: "MCQ", type: "MCQ", frequency: "High", isMustDo: false,
    question: "Which of the following is NOT a characteristic of a good algorithm?",
    options: ["Finiteness", "Determinism", "Ambiguity", "Feasibility"],
    answer: { finalAnswer: "Ambiguity", explanation: "Must be clear and unambiguous." }
  },
  {
    id: 104, unit: 1, topic: "Operators", pattern: "MCQ", type: "MCQ", frequency: "High", isMustDo: true,
    question: "Find the output: printf(\"%d\", sizeof(\"Hello\"));",
    options: ["5", "6", "1", "2"],
    answer: { finalAnswer: "6", explanation: "5 chars + 1 null terminator." }
  },
  {
    id: 105, unit: 1, topic: "Operators", pattern: "MCQ", type: "MCQ", frequency: "Very High", isMustDo: true,
    question: "What is the output: n = 5 - 2 * 7 - 9",
    options: ["-18", "12", "9", "1"],
    answer: { finalAnswer: "-18", explanation: "5 - 14 - 9 = -18." }
  },
  {
    id: 106, unit: 1, topic: "Data Types", pattern: "MCQ", type: "MCQ", frequency: "High", isMustDo: false,
    question: "Correct output: float c = 3.14; printf(\"%f\", c % 2);",
    options: ["1.0", "0", "Compile error", "0.14"],
    answer: { finalAnswer: "Compile error", explanation: "% operator is only for integers." }
  },
  {
    id: 107, unit: 1, topic: "Operators", pattern: "MCQ", type: "MCQ", frequency: "High", isMustDo: false,
    question: "The expression 4 + 6 / 3 + 2 - 2 + 7 % 3 evaluates to:",
    options: ["3", "4", "6", "7"],
    answer: { finalAnswer: "7", explanation: "4 + 2 + 2 - 2 + 1 = 7." }
  },
  {
    id: 108, unit: 1, topic: "Comments", pattern: "MCQ", type: "MCQ", frequency: "Medium", isMustDo: false,
    question: "Appropriate position for writing comments in C?",
    options: ["Anywhere", "Before main", "Before header", "Before declaration"],
    answer: { finalAnswer: "Anywhere", explanation: "Comments can be placed anywhere for better readability." }
  },
  {
    id: 109, unit: 1, topic: "Data Types", pattern: "MCQ", type: "MCQ", frequency: "High", isMustDo: false,
    question: "Correct size order?",
    options: ["char > int > float", "int < char < float", "char < int < double", "double > char > int"],
    answer: { finalAnswer: "char < int < double", explanation: "char is 1 byte, int is 4, double is 8." }
  },
  {
    id: 110, unit: 1, topic: "Operators", pattern: "MCQ", type: "MCQ", frequency: "High", isMustDo: false,
    question: "NOT a logical operator?",
    options: ["&", "&&", "||", "!"],
    answer: { finalAnswer: "&", explanation: "& is bitwise AND." }
  },
  {
    id: 111, unit: 1, topic: "Variables", pattern: "MCQ", type: "MCQ", frequency: "High", isMustDo: false,
    question: "Special character allowed in variable name?",
    options: ["anything", "nothing", "underscore", "hyphen"],
    answer: { finalAnswer: "underscore", explanation: "Underscore is the only special character allowed in identifiers." }
  },
  {
    id: 112, unit: 2, topic: "Storage", pattern: "MCQ", type: "MCQ", frequency: "High", isMustDo: false,
    question: "Default storage class for local variables?",
    options: ["auto", "register", "static", "extern"],
    answer: { finalAnswer: "auto", explanation: "Auto is the default class for block-scoped variables." }
  },
  {
    id: 113, unit: 2, topic: "Data Types", pattern: "MCQ", type: "MCQ", frequency: "Medium", isMustDo: false,
    question: "Range of values for int?",
    options: ["-(2^31) to (2^31)-1", "-256 to 255", "-(2^64) to 2^64-1", "0 to 2^31-1"],
    answer: { finalAnswer: "-(2^31) to (2^31)-1", explanation: "Signed 32-bit integer range." }
  },
  {
    id: 114, unit: 3, topic: "Pointers", pattern: "MCQ", type: "MCQ", frequency: "Very High", isMustDo: true,
    question: "Equivalent pointer expression for a[i]?",
    options: ["*(a+i)", "a+i", "&a+i", "*a+i"],
    answer: { finalAnswer: "*(a+i)", explanation: "Pointer arithmetic is used for array indexing internally." }
  },
  {
    id: 115, unit: 3, topic: "Recursion", pattern: "MCQ", type: "MCQ", frequency: "High", isMustDo: true,
    question: "Function that calls itself?",
    options: ["Inline", "Recursive", "Static", "Friend"],
    answer: { finalAnswer: "Recursive", explanation: "Recursive functions call themselves to solve sub-problems." }
  },
  {
    id: 116, unit: 3, topic: "Strings", pattern: "MCQ", type: "MCQ", frequency: "High", isMustDo: false,
    question: "Function used to concatenate strings?",
    options: ["strcon()", "strcat()", "stradd()", "strjoin()"],
    answer: { finalAnswer: "strcat()", explanation: "Standard C function to join two strings." }
  },
  {
    id: 117, unit: 4, topic: "Python", pattern: "MCQ", type: "MCQ", frequency: "Very High", isMustDo: true,
    question: "Immutable data type in Python?",
    options: ["List", "Dictionary", "Tuple", "Set"],
    answer: { finalAnswer: "Tuple", explanation: "Tuples cannot be modified after creation." }
  },
  {
    id: 118, unit: 4, topic: "Python", pattern: "MCQ", type: "MCQ", frequency: "High", isMustDo: false,
    question: "Output of print(2 ** 3)?",
    options: ["6", "8", "9", "5"],
    answer: { finalAnswer: "8", explanation: "Double asterisk is the exponent operator." }
  },
  {
    id: 119, unit: 5, topic: "Python", pattern: "MCQ", type: "MCQ", frequency: "Very High", isMustDo: true,
    question: "Library for data manipulation and analysis?",
    options: ["NumPy", "Pandas", "Matplotlib", "SciPy"],
    answer: { finalAnswer: "Pandas", explanation: "Pandas is built for high-performance data analysis." }
  },
  {
    id: 120, unit: 5, topic: "NumPy", pattern: "MCQ", type: "MCQ", frequency: "High", isMustDo: false,
    question: "In NumPy, ndim attribute is used to find:",
    options: ["Number of elements", "Shape", "Number of dimensions", "Data type"],
    answer: { finalAnswer: "Number of dimensions", explanation: "ndim returns the number of axes." }
  },
  {
    id: 121, unit: 5, topic: "Pandas", pattern: "MCQ", type: "MCQ", frequency: "High", isMustDo: false,
    question: "Series data structure belongs to:",
    options: ["NumPy", "Pandas", "Scikit-learn", "TensorFlow"],
    answer: { finalAnswer: "Pandas", explanation: "Series is the 1D structure in Pandas." }
  }
];
