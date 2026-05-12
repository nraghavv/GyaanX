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
      theory: "Problem solving using a computer is a systematic approach to identifying user needs and translating them into functional software. It follows a lifecycle similar to engineering, ensuring that the solution is robust and error-free. By following specific stages, developers avoid logical pitfalls and ensure that the final product scales well and remains maintainable over long durations.",
      explanation: "Problem solving follows a systematic lifecycle that begins with the **Problem Definition** phase, where the developer identifies the core issue and understands the specific needs of the user. This is followed by **Requirement Analysis**, which involves mapping the necessary inputs, the logic required to process them, and the expected outputs. \n\nNext is the **Design** phase, where the logical flow is mapped out using visual tools like flowcharts or written instructions called algorithms. This phase acts as a blueprint before any actual code is written. Once the design is finalized, the **Coding** phase begins, where the logic is implemented in a specific programming language such as C or Python. \n\nAfter implementation, **Testing** is crucial to identify and fix any syntax or logical bugs that might exist. Finally, the **Maintenance** phase ensures the software remains relevant by providing updates and fixing issues that arise during real-world usage. This structured approach is essential for professional software development, as it minimizes the risk of system failure and ensures that user requirements are met precisely through each transition of the development lifecycle.",
      aim: "To understand the systematic lifecycle of solving a computational problem.",
      algorithm: [
        "Problem Identification: Clearly defining what needs to be solved.",
        "Analysis: Determining inputs, outputs, and processing logic.",
        "Design: Creating architectural blueprints via algorithms and flowcharts.",
        "Coding: Translating the design into actual program code.",
        "Testing: Running the program to find and eliminate errors.",
        "Maintenance: Updating and debugging the solution in the long term."
      ],
      result: "Systematic problem solving lifecycle successfully defined."
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
      theory: "An algorithm is a finite sequence of well-defined, computer-implementable instructions, typically used to solve a class of specific problems or perform a computation. It serves as the foundation for any computer program. A good algorithm must be efficient in terms of both time (how fast it runs) and space (how much memory it uses).",
      explanation: "A robust and effective algorithm must satisfy five core criteria to be considered valid and professional. First is **Finiteness**, which dictates that an algorithm must always terminate after a finite sequence of steps. An infinite loop is a failed algorithm. Second is **Definiteness**, meaning every step must be clear, precise, and unambiguous; it should mean exactly one thing to the system. \n\nThird, an algorithm requires **Input**, accepting zero or more quantified data points to process. Fourth is **Output**, where it must produce at least one meaningful result that represents the solution to the given problem. Finally, **Effectiveness** ensures that the operations are basic enough to be performed correctly and manually if needed. \n\nBeyond these, a good algorithm should be independent of any specific programming language, allowing it to be implemented in C, Java, or Python with equal ease. It acts as a logical recipe for the computer. If any of these characteristics are missing, the logic may become unstable, leading to incorrect results or system crashes, making these traits indispensable for programmers when designing new software logic or solving computational puzzles.",
      aim: "To define the essential properties of a valid and efficient algorithm.",
      algorithm: [
        "Finiteness: The algorithm must terminate after a set number of steps.",
        "Definiteness: Steps must be unambiguous and clearly defined.",
        "Input: Zero or more inputs are necessary for processing.",
        "Output: At least one result must be produced by the algorithm.",
        "Effectiveness: Every step must be feasible and simple to perform."
      ],
      result: "Algorithm characteristics identified and analyzed for efficiency."
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
      theory: "A flowchart is a visual representation of the sequence of steps and decisions needed to perform a process. Each step in the sequence is noted within a specific diagram shape. Flowcharts are used in designing and documenting simple processes or programs. They help to visualize complex logic and make it easier for others to understand the program's flow before implementation.",
      explanation: "Flowcharts utilize a set of standardized geometric shapes to map logic visually and universally. The **Oval** symbol is used to represent the Terminal points, specifically the 'Start' and 'End' of a process. For data movement, the **Parallelogram** is used to denote Input and Output operations, such as reading data from a user or printing results to the screen. \n\nThe **Rectangle** is perhaps the most common symbol, representing a regular processing step or calculation, such as 'Add A to B'. When the program reaches a fork in the road, the **Diamond** shape is used for decision-making. This symbol typically contains a logic check (e.g., 'Is X > Y?') and has two branches for 'True' and 'False' logic. \n\nConnecting these shapes are **Flow Lines** (Arrows), which indicate the exact sequence of operations. This visual mapping is like a GPS for code; it allows developers to debug the logic in their minds before writing a single line of syntax. By using these standard symbols, programs can be shared across teams where different members might use different coding languages, as the flowchart provides a common visual language for logical architecture and sequence control.",
      aim: "To describe the standardized visual language for representing program logic.",
      algorithm: [
        "Oval: Indicates the start and end of the flowchart.",
        "Parallelogram: Used for input and output data operations.",
        "Rectangle: Represents processing steps like calculations.",
        "Diamond: Used for decision making and logical branching.",
        "Flowlines: Connect symbols to show the logical sequence."
      ],
      result: "Standardized flowchart symbols analyzed for logical mapping."
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
      aim: "To write a program to calculate the Gross Salary of an employee based on a given Basic Pay with HRA and DA bonuses.",
      theory: "Gross Salary represents the total earnings of an employee before any deductions or taxes. It is calculated by adding various allowances like House Rent Allowance (HRA) and Dearness Allowance (DA) to the base salary. In this specific case, HRA is 30% of Basic Pay and DA is 80% of Basic Pay. The total formula becomes: Gross Salary = Basic Pay + HRA + DA.",
      algorithm: [
        "1. Start of the program logic.",
        "2. Declare floating-point variables for basic pay, HRA, DA, and gross salary.",
        "3. Read the Basic Pay value from the user input.",
        "4. Calculate HRA by multiplying the basic pay by 0.30.",
        "5. Calculate DA by multiplying the basic pay by 0.80.",
        "6. Calculate the Gross Salary by summing Basic Pay, HRA, and DA.",
        "7. Display the result to the user with a formatted string.",
        "8. End the program."
      ],
      code: "#include <stdio.h>\n\nint main() {\n    float bp, hra, da, gs;\n    \n    // Input Basic Pay from user\n    printf(\"Enter basic pay of the employee: \");\n    scanf(\"%f\", &bp);\n    \n    // Calculate HRA (30%) and DA (80%)\n    hra = 0.30 * bp;\n    da = 0.80 * bp;\n    \n    // Compute Gross Salary\n    gs = bp + hra + da;\n    \n    // Output final results\n    printf(\"\\n--- Salary Slip ---\\n\");\n    printf(\"Basic Pay: %.2f\\n\", bp);\n    printf(\"HRA (30%%): %.2f\\n\", hra);\n    printf(\"DA (80%%): %.2f\\n\", da);\n    printf(\"-------------------\\n\");\n    printf(\"Gross Salary: %.2f\\n\", gs);\n    \n    return 0;\n}",
      input: "Basic Pay: 25000",
      output: "Gross Salary: 52500.00",
      result: "Gross salary successfully computed with 30% HRA and 80% DA.",
      finalAnswer: "Gross = Basic + (0.3*Basic) + (0.8*Basic)",
      explanation: "The program starts by including the standard input-output library `<stdio.h>` to enable interaction with the user. In the `main()` function, four floating-point variables are declared: `bp` for Basic Pay, `hra` for House Rent Allowance, `da` for Dearness Allowance, and `gs` for Gross Salary. The `printf` function prompts the user to enter their Basic Pay, which is captured using `scanf` with the `%f` format specifier. \n\nOnce input is received, the mathematical logic begins. HRA is calculated as 30% of the basic pay (`0.30 * bp`), reflecting the housing benefit. Similarly, DA is calculated as 80% (`0.8 * bp`), representing the cost-of-living adjustment. These components are added to the original Basic Pay (`gs = bp + hra + da`) to arrive at the total Gross Salary. Finally, the result is displayed using formatted `printf` statements. The use of `%.2f` is critical as it ensures the values are displayed with two decimal places, matching the standard currency format. This approach is systematic and ensures calculation accuracy across different salary scales.",
    },
    pseudocode: "READ bp\nCALCULATE hra = 0.30 * bp\nCALCULATE da = 0.80 * bp\nSET gross_salary = bp + hra + da\nPRINT gross_salary"
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
      theory: "A storage class in C defines four major properties of a variable: the duration of its life in memory, its scope (where it is visible), its linkage (relationship with other files), and the actual physical location in the system (RAM or CPU Register). Choosing the correct storage class is crucial for balancing memory efficiency with fast execution speeds in complex applications.",
      explanation: "In C programming, storage classes are fundamental descriptors that determine a variable's fate within a project. The **auto** class is the default for all local variables; they are created on the stack when a function is called and automatically destroyed when the function exits. This makes them ideal for temporary data that doesn't need to persist. \n\nThe **static** class, however, tells the compiler to retain the variable's value even after the function block has finished execution. This is useful for tracking states, like a call counter, without using risky global variables. The **extern** class is essential for multi-file projects, as it allows a variable declared in one file to be accessed in another, facilitating modular architecture. \n\nLastly, the **register** storage class suggests to the compiler that the variable should be stored in the CPU's registers rather than RAM. This is reserved for variables that are accessed extremely frequently, like loop counters, to maximize performance. By strategically using these classes, a developer can control exactly how much memory a program consumes and how quickly it performs operations, which is the hallmark of high-quality C code used in system-level programming.",
      aim: "To compare and analyze the four storage classes in C: auto, static, extern, and register.",
      algorithm: [
        "1. Identify the 'auto' class for standard stack-based local variables.",
        "2. Analyze the 'static' class for persistent memory between function calls.",
        "3. Evaluate the 'extern' class for declaring variables across multiple files.",
        "4. examine the 'register' class for optimizing access speed via CPU storage.",
        "5. Summarize the scope and lifetime of each class in a comparative table."
      ],
      result: "Variable storage and management strategies successfully analyzed."
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
      theory: "Operators are symbols that tell the compiler to perform specific mathematical or logical tasks. Increment and decrement operators are unary operators that increase or decrease a variable's value by one. The conditional operator, also known as the ternary operator, is a shorthand for an if-else statement. These tools are commonly used for loop control and concise decision making.",
      explanation: "Unary operators like **pre-increment** (++x) and **post-increment** (x++) behave differently in expressions. Pre-increment changes the value *before* it is used, while post-increment uses the current value first and then changes it. The same logic applies to pre-decrement (--x) and post-decrement (x--). These operators are vital for clean loop iterations and pointer arithmetic. \n\nThe **conditional operator** (? :) is C's only ternary operator, taking three operands. It follows the syntax `condition ? value_if_true : value_if_false`. It is widely used to replace simple if-else blocks for assignments, making code significantly more readable. For example, `max = (a > b) ? a : b;` is a professional way to find the larger of two numbers in a single line. Understanding the precedence and side effects of these operators is essential for avoiding logical errors, especially in complex expressions where multiple increments might occur. Using them correctly leads to compact, efficient, and standardized C code that is easy for other developers to read and maintain.",
      aim: "To master shorthand increment/decrement and conditional ternary operators.",
      algorithm: [
        "1. Define the increment operator (++) logic for values.",
        "2. Explain 'Pre' logic: Value updated then assigned.",
        "3. Explain 'Post' logic: Value assigned then updated.",
        "4. Describe the ternary operator syntax: (Cond) ? T : F.",
        "5. Provide examples showing the different output of each operator."
      ],
      result: "Unary and Ternary operator mechanics understood and applied."
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
      theory: "A data type specifies the type of data that a variable can hold, such as integer, floating-point, or character. It also determines the size of memory occupied by the variable and the range of values that can be stored. C is a statically-typed language, meaning every variable must have a declared type before it can be used.",
      explanation: "C handles a variety of data types categorized primarily into Primary, Derived, and User-Defined types. **Primary types** are the basic building blocks: `int` for whole numbers, `float` and `double` for fractional numbers with varying precision, and `char` for single characters or symbols. Each type occupies a specific number of bytes (e.g., typically 4 bytes for int on modern systems) and has a defined range. \n\n**Derived types** are built using primary types; these include **Arrays** for storing collections of identical types, **Pointers** for memory address manipulation, and **Functions**. These allow for complex data structures and efficient memory management. Finally, **User-Defined types** like `struct` (Structures), `union`, and `enum` (Enumerations) allow programmers to create custom containers that can group different types of data under a single name. \n\nSelecting the appropriate data type is a critical skill for C programmers. Using a `double` when an `int` suffices wastes memory, while using a `char` for numeric calculations can lead to overflow errors. A deep understanding of these types ensures that the program is both memory-efficient and capable of handling the intended data ranges without data loss during processing.",
      aim: "To categorize and explain the diverse data storage formats supported by C.",
      algorithm: [
        "1. Categorize data types into Primary, Derived, and User-defined.",
        "2. Detail Primary types: int, char, float, and double.",
        "3. Detail Derived types: Arrays, Pointers, and Structures.",
        "4. Explain memory allocation size for each basic type.",
        "5. Discuss the purpose of Type modifiers like signed, unsigned, and long."
      ],
      result: "C data types categorized and explained for effective memory usage."
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
      aim: "To write an efficient C program that extracts individual digits from a five-digit integer and calculates their cumulative sum.",
      theory: "Calculating the sum of digits involves isolating each numeral from an integer. In C, this is achieved through the repeated application of the modulo operator (%) to fetch the last digit and the integer division operator (/) to discard it. This logarithmic approach is memory-efficient and avoids the overhead of converting numeric data into strings.",
      algorithm: [
        "1. Start the program execution.",
        "2. Declare integer variables for the number (n), the current digit (r), and the running total (sum).",
        "3. Read the input integer from the user using scanf.",
        "4. Initialize a while loop that iterates as long as the number is greater than zero.",
        "5. Use n % 10 to extract the rightmost digit and add it to the sum.",
        "6. Perform n = n / 10 to shift the number one place value to the right.",
        "7. Exit the loop once all digits have been processed.",
        "8. Output the final sum to the standard display.",
        "9. End."
      ],
      code: "#include <stdio.h>\n\nint main() {\n    int n, r, sum = 0;\n    \n    printf(\"Enter a five-digit number: \");\n    scanf(\"%d\", &n);\n    \n    // Loop for digit extraction and addition\n    while (n > 0) {\n        r = n % 10;    // Get the remainder (last digit)\n        sum = sum + r; // Add it to cumulative sum\n        n = n / 10;    // Truncate the number\n    }\n    \n    printf(\"Total sum of digits = %d\\n\", sum);\n    \n    return 0;\n}",
      input: "12345",
      output: "Total sum of digits = 15",
      result: "Digits summed successfully using iterative extraction logic.",
      finalAnswer: "Looping logic with %10 and /10",
      explanation: "This program uses a fundamental algorithmic pattern to handle numeric decomposition. It begins by establishing an environment where an integer `n` stores the user's input, while `sum` is strictly initialized to zero to prevent garbage values from corrupting the result. The core logic enters a while loop, which acts as a processing engine that keeps running as long as there are digits left to count. \n\nInside this engine, the modulo operation (`n % 10`) serves as a surgical tool that precisely extracts the last digit of the number. Once extracted, this digit is immediately added to our `sum`. To prepare for the next step, the division operator (`n / 10`) performs a shift, effectively deleting the digit we just processed. This cycle repeats: if the input is 432, it extracts 2, then 3, then 4, before `n` eventually drops to 0. This method is highly optimized because it only uses basic arithmetic, making it lightning-fast on most hardware and perfectly suited for system-level programming and competitive examinations.",
    },
    pseudocode: "READ n, SET s = 0, WHILE n > 0: r = n % 10, s = s + r, n = n / 10, ENDWHILE, PRINT s"
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
      aim: "To identify and display the largest value among three user-provided numbers using conditional branching logic.",
      theory: "Decision making is a core component of programming. Finding the maximum of three numbers involves comparing them against each other using relational operators. An 'if-else if-else' ladder is the most structured way to check multiple exhaustive conditions, ensuring that the computer only performs the comparisons necessary to reach the final conclusion.",
      algorithm: [
        "1. Start the program.",
        "2. Declare three integer variables a, b, and c.",
        "3. Accept the values for a, b, and c from the user console.",
        "4. Check if 'a' is greater than both 'b' and 'c' using logic: (a > b && a > c).",
        "5. If true, identify 'a' as the largest.",
        "6. Else, check if 'b' is greater than 'c'.",
        "7. If true, identify 'b' as the largest; otherwise, 'c' must be the largest.",
        "8. Output the identified maximum.",
        "9. Stop."
      ],
      code: "#include <stdio.h>\n\nint main() {\n    int a, b, c;\n    \n    printf(\"Enter three numbers: \");\n    scanf(\"%d %d %d\", &a, &b, &c);\n    \n    if (a >= b && a >= c) {\n        printf(\"Largest number is: %d\\n\", a);\n    } else if (b >= a && b >= c) {\n        printf(\"Largest number is: %d\\n\", b);\n    } else {\n        printf(\"Largest number is: %d\\n\", c);\n    }\n    \n    return 0;\n}",
      input: "10 50 30",
      output: "Largest number is: 50",
      result: "Correct maximum identified using efficient logical branching.",
      finalAnswer: "If-else if ladder",
      explanation: "This program leverages conditional logic to determine dominance among three specific data points. After capturing the inputs, the logic enters a sequence of checks known as a ladder. The first check uses the logical AND (`&&`) operator, which demands that both sub-conditions be true: a must be bigger than b, and it must also be bigger than c. If this high bar is met, 'a' is confirmed as the maximum, and the program skips the remaining checks to optimize performance. \n\nIf the first check fails, we know 'a' is definitely not the winner, so the problem reduces to a simpler comparison between 'b' and 'c'. The `else if` block handles this by comparing 'b' against the remaining options. If 'b' is also not the largest, the `else` block triggers by default, as 'c' is the only logical possibility left. This hierarchical selection pattern ensures that for any set of inputs, the computer makes at most two comparisons to reach the right answer. It is a clean, readable, and highly reliable way to handle selection problems that are frequent in exam scenarios and real-world software logic.",
    },
    pseudocode: "READ a, b, c, IF a > b AND a > c: PRINT a, ELSE IF b > c: PRINT b, ELSE: PRINT c"
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
      aim: "To calculate the total sum of the integer sequence from 1 to 10 using a control loop for automation.",
      theory: "A natural number series is a fundamental sequence in mathematics. While there is a formula (n*(n+1)/2), in computer science, we often use loops to calculate such sums to demonstrate the concept of accumulation. Accumulation involves taking a result from a previous step and adding it to the current data in a single variable, effectively building a total step-by-step.",
      algorithm: [
        "1. Start.",
        "2. Initialize a variable 'sum' to zero to prevent garbage data errors.",
        "3. Setup a for loop starting with counter i = 1.",
        "4. Set the loop condition to run as long as i is less than or equal to 10.",
        "5. Inside the loop, update the sum: sum = sum + i.",
        "6. Increment i by one at the end of every turn.",
        "7. Once i exceeds 10, exit the loop and display the final sum.",
        "8. Stop."
      ],
      code: "#include <stdio.h>\n\nint main() {\n    int i, sum = 0;\n    \n    // Iterative addition loop\n    for (i = 1; i <= 10; i++) {\n        sum = sum + i;\n    }\n    \n    printf(\"The sum of first 10 natural numbers is: %d\\n\", sum);\n    \n    return 0;\n}",
      input: "None",
      output: "The sum of first 10 natural numbers is: 55",
      result: "Sum of 1..10 is correctly calculated as 55.",
      finalAnswer: "for(i=1; i<=10; i++) sum+=i",
      explanation: "This program provides a clear example of iterative logic through the use of a for loop. The program begins by declaring an integer `i` for loop control and a `sum` variable that is precisely initialized to 0. This initialization is critical; without it, the variable would contain a random number from memory, leading to incorrect calculations. The for loop then sets three parameters: it starts at 1, continues while the value is 10 or less, and grows by 1 in each step. \n\nDuring every pass of the loop, the value of the counter `i` is added to the current total in `sum`. In the first pass, `sum` becomes 1 (0+1); in the second, it becomes 3 (1+2); in the third, it becomes 6 (3+3), and this continues until the 10th pass where it becomes 55. Once the counter increments to 11, the loop condition fails, and control moves to the `printf` statement. This cumulative process is a vital concept in programming, as it forms the basis for more complex data aggregations like calculating averages, processing arrays, and building large-scale statistical models in data science.",
    },
    pseudocode: "SET sum = 0, FOR i FROM 1 TO 10: sum = sum + i, ENDFOR, PRINT sum"
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
      theory: "In C, while `scanf` and `printf` are versatile, `getchar()` and `putchar()` offer a more lightweight and efficient way to handle single characters. They are part of the `<stdio.h>` header. `getchar()` reads one character from the standard input buffer, while `putchar()` writes one character directly to the standard output. They are essential for low-level text processing and single-character input validation.",
      explanation: "The functions `getchar()` and `putchar()` are the simplest forms of character I/O in the C language. `getchar()` sits and waits for the user to press a key and hit 'Enter'. It captures exactly one character from the input stream. An interesting detail is that it often returns an `int` rather than a `char` so it can represent the special `EOF` (End of File) value, which is usually outside the `char` range. \n\nOn the output side, `putchar()` takes a single character constant or variable and prints it immediately to the screen. Unlike `printf`, it doesn't support format specifiers like %d or %f, which makes it faster because the computer doesn't have to parse a complex format string. This simplicity makes these functions perfect for loops that process text one letter at a time, such as converting a sentence to uppercase or counting spaces in a string. In an exam, providing an example where a character is read and then immediately displayed shows a solid understanding of how C interacts with device buffers at a granular level, far below the abstraction of high-level formatting functions.",
      aim: "To demonstrate the specific usage and behavior of single-character I/O functions in C.",
      algorithm: [
        "1. Start the program by including stdio.h.",
        "2. Declare a variable 'ch' to hold the character input.",
        "3. Prompt the user and use getchar() to receive the input.",
        "4. Use putchar() to display the received character back to the console.",
        "5. Print a final message and terminate."
      ],
      code: "#include <stdio.h>\n\nint main() {\n    char c;\n    printf(\"Enter a character: \");\n    c = getchar(); // Reads a single char\n    printf(\"You entered: \");\n    putchar(c);    // Prints a single char\n    return 0;\n}",
      result: "getchar() and putchar() successfully differentiated through implementation."
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
      aim: "To calculate the total monthly earnings (Gross Salary) based on a provided basic salary and fixed percentage allowances.",
      theory: "Professional salary computation involves identifying various allowances that are typically fixed percentages of the basic pay. In this problem, Kannan receives DA (Dearness Allowance) at 35%, HRA (House Rent Allowance) at 27%, and TA (Travel Allowance) at 10%. The Gross Salary is the mathematical sum of the basic salary and all these allowances. This demonstrates basic arithmetic accumulation in a business logic context.",
      algorithm: [
        "1. Start.",
        "2. Declare float variables for basic_salary, da, hra, ta, and gross_salary.",
        "3. Input the basic_salary from the user.",
        "4. Calculate da = 0.35 * basic_salary.",
        "5. Calculate hra = 0.27 * basic_salary.",
        "6. Calculate ta = 0.10 * basic_salary.",
        "7. Compute gross_salary = basic_salary + da + hra + ta.",
        "8. Output all calculated components and the final gross salary.",
        "9. Stop."
      ],
      code: "#include <stdio.h>\n\nint main() {\n    float bs, da, hra, ta, gs;\n    printf(\"Enter Kannan's Basic Salary: \");\n    scanf(\"%f\", &bs);\n    \n    da = 0.35 * bs;\n    hra = 0.27 * bs;\n    ta = 0.10 * bs;\n    gs = bs + da + hra + ta;\n    \n    printf(\"\\n--- Kannan's Salary Breakdown ---\\n\");\n    printf(\"Basic Salary: %.2f\\n\", bs);\n    printf(\"DA (35%%): %.2f\\n\", da);\n    printf(\"HRA (27%%): %.2f\\n\", hra);\n    printf(\"TA (10%%): %.2f\\n\", ta);\n    printf(\"---------------------------------\\n\");\n    printf(\"Gross Salary: %.2f\\n\", gs);\n    \n    return 0;\n}",
      input: "Basic Salary: 20000",
      output: "Gross Salary: 34400.00",
      result: "Gross salary calculated correctly for specific scenario with TA inclusion.",
      finalAnswer: "Gross = BS * (1 + 0.35 + 0.27 + 0.10)",
      explanation: "This program calculates a comprehensive salary package for an employee named Kannan. It starts by defining five floating-point variables to accommodate decimal values, which are typical for financial data. The program uses `scanf` to capture the basic salary, which serves as the foundation for all subsequent calculations. \n\nThe logical section calculates three distinct allowances: DA at 35%, HRA at 27%, and TA at 10%. These are calculated by multipling the basic salary with their respective decimal equivalents (0.35, 0.27, and 0.1). Once these individual amounts are determined, they are summed together with the original basic salary to arrive at the 'Gross' total. \n\nFinally, the program prints a formatted 'Salary Slip' using `%.2f` to ensure the output remains clean and professionally formatted to two decimal places. This problem is a textbook example of how programming can solve practical payroll problems and demonstrates the importance of using descriptive variable names (`bs`, `da`, `hra`, `ta`) and structured output to make the data understandable for the end-user.",
    },
    pseudocode: "READ bs, SET da = 0.35 * bs, SET hra = 0.27 * bs, SET ta = 0.10 * bs, SET gs = bs + da + hra + ta, PRINT gs"
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
      aim: "To automate a tiered discounting system at a toll gate using modulo-based divisibility logic and nested conditional checks.",
      theory: "Conditional discounting requires the evaluation of multiple logical conditions with varying priority. In this problem, we use the modulo operator (%) to check divisibility. We must prioritize the 'AND' case (both 7 and 3) because it offers a larger discount. If we checked the 'OR' case first, eligible vehicles would get the smaller discount and trigger an early exit from the if-else block. This illustrates the importance of condition ordering in programming.",
      algorithm: [
        "1. Start.",
        "2. Read the vehicle number (v_num) and the base fee from the user.",
        "3. IF (v_num % 7 == 0 AND v_num % 3 == 0):",
        "   Calculate payable = fee / 3.",
        "4. ELSE IF (v_num % 7 == 0 OR v_num % 3 == 0):",
        "   Calculate payable = fee / 2.",
        "5. ELSE:",
        "   Payable = fee.",
        "6. Output the calculated payable fee.",
        "7. Stop."
      ],
      code: "#include <stdio.h>\n\nint main() {\n    int v_num;\n    float fee, payable;\n    \n    printf(\"Enter vehicle number: \");\n    scanf(\"%d\", &v_num);\n    printf(\"Enter base toll fee: \");\n    scanf(\"%f\", &fee);\n    \n    if (v_num % 7 == 0 && v_num % 3 == 0) {\n        payable = fee / 3.0;\n        printf(\"Special Discount! Pay 1/3: %.2f\", payable);\n    } else if (v_num % 7 == 0 || v_num % 3 == 0) {\n        payable = fee / 2.0;\n        printf(\"Standard Discount! Pay 1/2: %.2f\", payable);\n    } else {\n        payable = fee;\n        printf(\"No Discount. Pay full fee: %.2f\", payable);\n    }\n    \n    return 0;\n}",
      input: "Vehicle: 21, Fee: 300",
      output: "Pay 1/3: 100.00",
      result: "Correct fee tier selected using hierarchical conditional logic.",
      finalAnswer: "Combined logical AND/OR conditions",
      explanation: "This program solves a conditional pricing problem frequently found in logistics and automated systems. It captures the vehicle's unique ID and the standard fee. The core logic uses an `if-else if-else` structure coupled with the modulo operator (`%`). The first condition is the most restrictive: it uses the logical AND (`&&`) to see if the number is divisible by both 7 and 3 (equivalent to being divisible by 21). If this is true, the user gets the best discount (1/3 of the fee). \n\nIf the first check fails, the program proceeds to a more lenient check using the logical OR (`||`). This check sees if the number is divisible by *either* 7 or 3. If either is true, the user gets a 50% discount. Finally, if the number satisfies neither rule, the `else` block ensures they pay the full base fee. The professional touch here is the ordering: by placing the hardest condition first, we ensure that a number like 21 gets the maximum discount rather than stopping at the 'OR' check and getting only 50%. This illustrates fundamental conditional prioritization in software logic design.",
    },
    pseudocode: "READ vn, fee, IF (vn%7==0 AND vn%3==0): pay=fee/3, ELSE IF (vn%7==0 OR vn%3==0): pay=fee/2, ELSE: pay=fee, PRINT pay"
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
      aim: "To demonstrate array indexing and traversal by reading data forwards and printing it backward.",
      theory: "An array is a collection of elements stored in contiguous memory locations. Each element is accessed by its index. In C, arrays are zero-indexed, meaning a collection of 'n' items ranges from index 0 to n-1. Reversing the display requires starting a loop from the highest index (n-1) and decrementing down to the lowest index (0). This is a simple but vital example of non-linear data traversal.",
      algorithm: [
        "1. Start.",
        "2. Declare an array variable and a size variable 'n'.",
        "3. Accept the number of elements 'n' from the user.",
        "4. Loop 'i' from 0 to n-1 to read and store each element into the array.",
        "5. Print a message indicating the reversed order display.",
        "6. Start a second loop with 'i' initialized to n-1.",
        "7. Continue while i >= 0, decrementing i in each step.",
        "8. Output array[i] in the loop.",
        "9. Stop."
      ],
      code: "#include <stdio.h>\n\nint main() {\n    int a[100], n, i;\n    \n    printf(\"Enter number of elements: \");\n    scanf(\"%d\", &n);\n    \n    printf(\"Enter %d elements:\\n\", n);\n    for(i = 0; i < n; i++) {\n        scanf(\"%d\", &a[i]);\n    }\n    \n    printf(\"Array in reverse order:\\n\");\n    for(i = n - 1; i >= 0; i--) {\n        printf(\"%d \", a[i]);\n    }\n    \n    return 0;\n}",
      input: "N=3, Elements: 10, 20, 30",
      output: "30 20 10",
      result: "Array elements successfully read and displayed in reverse order.",
      finalAnswer: "Decrementing loop index",
      explanation: "This program highlights the flexibility of array indexing in C. It begins by allocating an array `a` with a capacity of 100 integers—a common 'static allocation' technique used in student exams. The user first defines how many items they actually want to use (`n`). A standard `for` loop, starting from 0 and moving up to `n-1`, is then used to 'load' the data into the array structure using `scanf`. \n\nThe second `for` loop is where the 'reversing' logic happens. Instead of starting from 0, it initializes the counter `i` to `n-1`, which targets the very last item entered by the user. The loop condition `i >= 0` and the decrement operation `i--` ensure that the computer visits every slot in the array in backward order. This pattern is essential for many data structure operations, such as checking for palindromes, implementing stacks, or simply displaying data in chronological order when stored in reverse. It proves that the programmer understands that memory is just a row of boxes that can be visited in any order as long as the indices remain valid.",
    },
    pseudocode: "READ n, READ n items into A, FOR i FROM n-1 DOWNTO 0: PRINT A[i], ENDFOR"
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
      aim: "To convert a matrix by interchanging its rows and columns using nested loops and multi-dimensional arrays.",
      theory: "A matrix transpose is a linear algebra operation where the element at row 'i' and column 'j' in the original matrix moves to row 'j' and column 'i' in the new matrix. For an m x n matrix, the transpose will be an n x m matrix. This concept is widely used in graphic rotations, solving systems of linear equations, and data processing in engineering and scientific simulations.",
      algorithm: [
        "1. Start.",
        "2. Input the number of rows (r) and columns (c) of the matrix.",
        "3. Loop through i from 0 to r-1 and j from 0 to c-1 to read matrix elements.",
        "4. Create a second loop structure where the indices are swapped.",
        "5. Inside the loop, assign transpose[j][i] = original[i][j].",
        "6. Loop through the transpose matrix to display the results in grid format.",
        "7. Stop."
      ],
      code: "#include <stdio.h>\n\nint main() {\n    int a[10][10], transpose[10][10], r, c, i, j;\n    printf(\"Enter rows and columns: \");\n    scanf(\"%d %d\", &r, &c);\n\n    printf(\"Enter matrix elements:\\n\");\n    for (i = 0; i < r; ++i)\n        for (j = 0; j < c; ++j) {\n            scanf(\"%d\", &a[i][j]);\n        }\n\n    // Computing the transpose\n    for (i = 0; i < r; ++i)\n        for (j = 0; j < c; ++j) {\n            transpose[j][i] = a[i][j];\n        }\n\n    // Displaying the transpose\n    printf(\"\\nTranspose of the matrix:\\n\");\n    for (i = 0; i < c; ++i)\n        for (j = 0; j < r; ++j) {\n            printf(\"%d  \", transpose[i][j]);\n            if (j == r - 1)\n                printf(\"\\n\");\n        }\n    return 0;\n}",
      input: "2x3 matrix: [[1,2,3],[4,5,6]]",
      output: "3x2 matrix: [[1,4],[2,5],[3,6]]",
      result: "Mathematical matrix transpose generated and displayed in grid format.",
      finalAnswer: "Swap row/column indices",
      explanation: "This program leverages two-dimensional arrays to perform a classic mathematical transformation. It begins by capturing the dimensions of the input matrix. Because the transpose swaps horizontal and vertical dimensions, an input matrix of 2 rows and 3 columns requires an output matrix of 3 rows and 2 columns. The matrix and its transpose are both stored as 2D arrays (`a[10][10]` and `transpose[10][10]`). \n\nThe actual transformation occurs in a nested loop where the original row index `i` becomes the new column index, and the original column index `j` becomes the new row index (`transpose[j][i] = a[i][j]`). This process 'flips' the matrix along its main diagonal. Finally, the program prints the resulting matrix using another set of nested loops, being careful to print a newline character (`\\n`) only after a full row of the *new* matrix is complete. This problem is a foundational exercise in multi-dimensional data management and demonstrates how physical arrangement in memory can be logically manipulated for computational purposes.",
    },
    pseudocode: "READ R, C, READ Matrix M, FOR i FROM 0 TO R-1: FOR j FROM 0 TO C-1: T[j][i] = M[i][j], ENDFOR, ENDFOR, PRINT T"
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
      aim: "To check if a sequence of characters reads the same forward and backward using string manipulation techniques.",
      theory: "A palindrome is a string that possesses mirror symmetry. Examples include 'MADAM' or 'RACECAR'. In programming, we verify this by comparing the character at the start of the string with the character at the corresponding position from the end. If all pairs match, the string is a palindrome. This is a primary exercise in string-based logic and character level comparison.",
      algorithm: [
        "1. Start.",
        "2. Input the string from the user.",
        "3. Calculate the length of the string using strlen().",
        "4. Start a loop from index i = 0 up to length/2.",
        "5. Inside the loop, compare string[i] with string[length - 1 - i].",
        "6. If any pair does not match, set a flag and break the loop.",
        "7. After the loop, check the flag.",
        "8. If flag is unchanged, it is a Palindrome; otherwise, it's not.",
        "9. Stop."
      ],
      code: "#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char str[100];\n    int i, len, flag = 0;\n    \n    printf(\"Enter a string: \");\n    gets(str);\n    \n    len = strlen(str);\n    \n    for (i = 0; i < len / 2; i++) {\n        if (str[i] != str[len - i - 1]) {\n            flag = 1;\n            break;\n        }\n    }\n    \n    if (flag) {\n        printf(\"%s is not a palindrome\", str);\n    } else {\n        printf(\"%s is a palindrome\", str);\n    }\n    \n    return 0;\n}",
      input: "String: Level",
      output: "Level is not palindrome (Case sensitive)",
      result: "String symmetry validated using dual-end comparison logic.",
      finalAnswer: "Two-pointer comparison",
      explanation: "This program evaluates string symmetry using a character comparison loop. It first captures the input using a character array and determines its length using the `strlen` function. The efficiency of this algorithm lies in the choice to only loop up to `len / 2`. By comparing the first half with the second half, we cover the entire word without redundant checks. \n\nInside the loop, `str[i]` represents a character from the front, while `str[len - i - 1]` represents the mirrored character from the back. If 'RADAR' is the input (length 5), it compares index 0 ('R') with index 4 ('R'), then index 1 ('A') with index 3 ('A'). If a single mismatch occurs, a `flag` is set to 1, and the program uses `break` to exit early. This illustrates the concept of early-exit optimization. The final `if` statement then uses the `flag` to provide a clear answer. This logic is used in everything from DNA sequence analysis to word-processing autocorrect features, making it a staple of computer science literacy.",
    },
    pseudocode: "READ S, L = length(S), FOR i FROM 0 TO L/2: IF S[i] != S[L-1-i]: PRINT 'Not Palindrome', EXIT, ENDFOR, PRINT 'Palindrome'"
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
      aim: "To iterate through a string and conditionally modify its contents based on character identity.",
      theory: "String modification involves scanning every character in a sequence and applying logic based on the character's value. In this case, we search for vowels (a, e, i, o, u) in both cases and replace them with a specific symbol (*). This is a common task in data obfuscation, masking passwords, or simple text transformations used in word processing.",
      algorithm: [
        "1. Start.",
        "2. Input the target string from the user.",
        "3. Start a loop that runs until the null terminator ('\\0') is reached.",
        "4. For each character, check if it matches a, e, i, o, u (or their uppercase versions).",
        "5. If a match is found, change the character at that array index to '*'.",
        "6. If no match is found, move to the next character index.",
        "7. After the loop, output the modified string.",
        "8. Stop."
      ],
      code: "#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char s[100];\n    int i;\n    \n    printf(\"Enter a string: \");\n    gets(s);\n    \n    for (i = 0; s[i] != '\\0'; i++) {\n        char c = s[i];\n        if (c=='a'||c=='e'||c=='i'||c=='o'||c=='u'||c=='A'||c=='E'||c=='I'||c=='O'||c=='U') {\n            s[i] = '*';\n        }\n    }\n    \n    printf(\"Modified string: %s\\n\", s);\n    return 0;\n}",
      input: "Input: Programmer",
      output: "Pr*gr*mm*r",
      result: "Content substitution successfully achieved for all vowels.",
      finalAnswer: "Iterative search and replace",
      explanation: "This program demonstrates how to manipulate strings in-place within an array. It reads a string and processes it using a `for` loop that concludes when it encounters the null character (`\\0`), which marks the end of all strings in C. Inside the loop, it evaluates each character against a set consisting of the five vowels in both lowercase and uppercase. \n\nBy using the assignment operator `s[i] = '*'`, the program actually replaces the data stored at that specific memory location. This is different from just printing a '*' instead of the vowel; it actually transforms the string in the computer's memory. Once the loop has visited every index, the transformed string is printed. This type of iteration and conditional masking is the basis for many modern text-processing functions, such as finding and replacing text in an editor or hiding sensitive information in a database display, demonstrating how simple logical checks can achieve powerful data transformation effects.",
    },
    pseudocode: "READ S, FOR EACH char C in S: IF C is VOWEL: REPLACE C WITH '*', ENDIF, ENDFOR, PRINT S"
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
      theory: "Parameter passing is the mechanic of sending data from a calling function to a sub-function. In **Call by Value**, the computer creates a copy of the actual data and sends it, protecting the original variable from modification. In **Call by Reference**, the computer sends the memory address (using pointers) of the actual data, allowing the sub-function to directly modify the original variable. Choosing between them is a decision about safety versus efficiency.",
      explanation: "These are the two primary ways to transmit information between functions in C. In **Call by Value**, when you pass a variable to a function, the compiler takes a snapshot of that value and places it in a new location for the function to use. Any changes made within the function, like adding 10 to a number, only affect this local copy. Once the function finishes, the 'snapshot' is deleted, and the original variable in the main program remains exactly as it was. This is highly secure but can be slow if you are passing very large amounts of data. \n\nConversely, **Call by Reference** works by passing the memory address of the variable using pointers. Instead of a copy, the function receives a 'roadmap' to the original data's location. If the function changes the value, it is actually changing it at its original source in the system memory. This is similar to giving someone the keys to your house rather than a photograph of it. If they move the furniture (data), it stays moved after they leave. In exams, a swap program is the best way to demonstrate this: a swap function using values will fail to change the main numbers, while a swap function using references (pointers) will succeed.",
      aim: "To differentiate between two fundamental parameter passing strategies in C and their impact on memory.",
      algorithm: [
        "1. Define a function for Call by Value that accepts integer parameters.",
        "2. Modify these parameters inside the function and observe the main variables.",
        "3. Define a function for Call by Reference using pointer parameters (*) and addresses (&).",
        "4. Modify the data through the pointers inside the second function.",
        "5. Print the variables in the main function to confirm changes only occurred in Reference mode.",
        "6. Conclude on the memory safety and efficiency of both methods."
      ],
      result: "Parameter passing mechanics analyzed and contrasted successfully."
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
      theory: "Recursion is a programming technique where a function calls itself to solve a problem. It works on the principle of 'divide and conquer', breaking down a complex task into smaller, identical sub-tasks. Every recursive function must have two mandatory components: a **Base Case** to stop the execution and a **Recursive Case** to continue the process. Without a base case, the function would call itself infinitely, eventually causing a 'Stack Overflow' error.",
      explanation: "Recursion is essentially a form of self-referential logic inside a program. In C, when a function calls itself, the computer pushes the current execution state onto a stack and starts a fresh instance of that function. This cycle continues until a specific 'Base Case' is hit, which acts as a safety anchor. \n\nFor instance, when calculating a factorial using recursion, the function says: 'To find 5!, I first need 4!.' Then it waits. The next instance says: 'To find 4!, I need 3!.' This continues until it reaches 1, which it knows is 1 (the base case). Then, like a chain reaction, the results are passed back up the stack: the bottom call returns 1, the next multiplication produces 2, then 6, then 24, and finally 120 is returned to the main program. This approach is highly elegant and makes code much shorter and closer to mathematical definitions, though it uses more memory than a simple loop because of the stack overhead. In an exam, emphasizing the importance of the base case and the stack model shows a deep understanding of recursive mechanics.",
      aim: "To define the concept of functions and demonstrate recursion through a practical factorial example.",
      algorithm: [
        "1. Start.",
        "2. Define a function 'fact(n)'.",
        "3. IF n is 1 or 0 (Base Case), return 1.",
        "4. ELSE (Recursive Case), return n * fact(n-1).",
        "5. In the main() function, take input 'x'.",
        "6. Call fact(x) and store the result.",
        "7. Display result and stop."
      ],
      code: "#include <stdio.h>\n\nint factorial(int n) {\n    if (n <= 1) // Base case\n        return 1;\n    else\n        return n * factorial(n - 1); // Recursive call\n}\n\nint main() {\n    int num = 5;\n    printf(\"Factorial of %d is %d\", num, factorial(num));\n    return 0;\n}",
      result: "Recursive logic successfully implemented and explained with factorial example."
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
      aim: "To parse a string and quantify its contents by categorizing every character into defined ASCII ranges.",
      theory: "Character analysis is performed using the ASCII (American Standard Code for Information Interchange) values. Every character on a keyboard corresponds to a unique integer. For instance, 'A'-'Z' are 65-90, 'a'-'z' are 97-122, and '0'-'9' are 48-57. By comparing a character against these ranges using logical AND operations, we can accurately identify its type. This is a fundamental technique for data sanitization and password complexity validation.",
      algorithm: [
        "1. Start.",
        "2. Input a string (sentence) from the user.",
        "3. Initialize counters: upper=0, lower=0, digit=0, special=0.",
        "4. Start a loop that visits every character in the string until '\\0'.",
        "5. Inside the loop, use if-else if conditions:",
        "   - IF (ch >= 'A' AND ch <= 'Z'), increment upper.",
        "   - ELSE IF (ch >= 'a' AND ch <= 'z'), increment lower.",
        "   - ELSE IF (ch >= '0' AND ch <= '9'), increment digit.",
        "   - ELSE, increment special.",
        "6. Display all four counters after the loop ends.",
        "7. Stop."
      ],
      code: "#include <stdio.h>\n\nint main() {\n    char s[200];\n    int i, u=0, l=0, d=0, sp=0;\n    printf(\"Enter a sentence: \");\n    gets(s);\n    \n    for(i=0; s[i]!='\\0'; i++) {\n        if(s[i] >= 'A' && s[i] <= 'Z') u++;\n        else if(s[i] >= 'a' && s[i] <= 'z') l++;\n        else if(s[i] >= '0' && s[i] <= '9') d++;\n        else sp++;\n    }\n    \n    printf(\"Uppercase: %d\\nLowercase: %d\\nDigits: %d\\nSpecial: %d\", u, l, d, sp);\n    return 0;\n}",
      input: "Hi! 123",
      output: "Uppercase: 1, Lowercase: 1, Digits: 3, Special: 2",
      result: "Sentence successfully analyzed using ASCII range-based filtering.",
      finalAnswer: "Range checking in loop",
      explanation: "This program acts as a sophisticated sorting machine for text. It accepts a full sentence and uses a `for` loop to inspect every character stored in the array. The logic relies on numerical comparisons against the character set standards. For each character, the computer effectively asks four questions: 'Is it big?', 'Is it small?', 'Is it a number?', or 'Is it something else?'. \n\nBecause 'A' through 'Z' are guaranteed to be in a continuous numerical block in C (65 to 90), we can use simple greater-than and less-than operators to trap them. The same applies to lowercase letters and numbers. Anything that doesn't fit into those three boxes—like a space, a period, or a dollar sign—is automatically pushed into the 'special character' bucket by the final `else` clause. This type of scanning algorithm is the backbone of search engine indexing and security software that checks for dangerous patterns in incoming chat messages or web inputs. In an exam, showing how multiple counters are managed simultaneously proves competence in complex state tracking.",
    },
    pseudocode: "READ S, FOR EACH char C in S: IF C in 'A'..'Z': u++, ELSE IF C in 'a'..'z': l++, ELSE IF C in '0'..'9': d++, ELSE: s++, ENDFOR, PRINT u, l, d, s"
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
      aim: "To calculate the cumulative result of two examinations by performing element-wise addition of two multi-dimensional arrays (matrices).",
      theory: "Matrix addition is a mathematical operation that produces a new matrix of the same size. For two matrices to be added, they must have the same number of rows and columns. Each element in the result matrix is the sum of the elements at the corresponding positions in the two input matrices. In a scholarly context, this is used to aggregate data points across different categories, like combining marks from two separate semesters.",
      algorithm: [
        "1. Start.",
        "2. Define the dimensions of the matrices (rows, columns).",
        "3. Loop through i (rows) and j (columns) to input data for Matrix X.",
        "4. Loop again to input data for Matrix Y.",
        "5. Initialize Matrix Z to store the results.",
        "6. Run nested loops to perform: Z[i][j] = X[i][j] + Y[i][j].",
        "7. Print Matrix Z as the final examination tally.",
        "8. Stop."
      ],
      code: "#include <stdio.h>\n\nint main() {\n    int x[3][3], y[3][3], z[3][3], i, j;\n    printf(\"Enter marks for Exam X (3x3):\\n\");\n    for(i=0; i<3; i++) for(j=0; j<3; j++) scanf(\"%d\", &x[i][j]);\n    \n    printf(\"Enter marks for Exam Y (3x3):\\n\");\n    for(i=0; i<3; i++) for(j=0; j<3; j++) scanf(\"%d\", &y[i][j]);\n    \n    // Summing examinations\n    for(i=0; i<3; i++) {\n        for(j=0; j<3; j++) {\n            z[i][j] = x[i][j] + y[i][j];\n            printf(\"%d\\t\", z[i][j]);\n        }\n        printf(\"\\n\");\n    }\n    return 0;\n}",
      input: "X:[[10,10,10],...], Y:[[20,20,20],...]",
      output: "[[30,30,30],...]",
      result: "Examination totals successfully calculated through element-wise matrix addition.",
      finalAnswer: "Matrix Addition",
      explanation: "This program solves a data aggregation problem using the concept of matrix addition. It treats each examination's results as a grid (Matrix). By using nested loops, the program effectively visits every 'cell' in the two grids simultaneously. For example, the marks of Student 1 in subject 1 from Exam X are added directly to their marks in Subject 1 from Exam Y. \n\nThe beauty of this approach is its scalability. Whether we have 3 groups or 300, the logic remains identical: target the same row and column index in both inputs. The program also uses formatting characters like `\\t` (tab) to ensure the final output looks like a professional report or ledger. In an exam, explaining that matrix addition requires identical dimensions and a position-by-position summing process is vital for showing that you understand the mathematical constraints of array-based data structures.",
    },
    pseudocode: "READ Matrix X, Y, FOR i FROM 0 TO R-1: FOR j FROM 0 TO C-1: Z[i][j] = X[i][j] + Y[i][j], ENDFOR, ENDFOR, PRINT Z"
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
      theory: "String manipulation is a core part of C programming, managed primarily through the standard library header `<string.h>`. Strings in C are represented as null-terminated character arrays. Because C does not have a native 'string' data type like Python, these functions provide the heavy lifting needed to measure, copy, join, and compare these arrays efficiently. Understanding these functions is essential for building compilers, processing user input, and managing text-based data.",
      explanation: "The C standard library provides a suite of tools for handling text. First, **strlen()** is used to find the number of characters in a string without counting the null terminator. It's essentially a letter-counter. Second, **strcpy()** copies the contents of one string into another. In C, you cannot simply say 'A = B' for strings because they are arrays, so strcpy is mandatory for assignment. \n\nThird, **strcat()** is short for 'String Concatenation'. It glues a new string onto the end of an existing one, which is very useful for building sentences or paths dynamically. Finally, **strcmp()** is used to compare two strings alphabetically. It returns 0 if they are identical, which is the most common use case in validation logic. Unlike numbers, where we use `==`, strings require strcmp because we must compare them character by character. In an exam, providing a short snippet showing how two separate strings ('Hello' and 'World') are measured, joined into 'HelloWorld', and then compared proved that you have mastered the foundational mechanics of text processing in low-level languages.",
      aim: "To explore and demonstrate the four primary string utility functions provided by the C standard library.",
      algorithm: [
        "1. Define two sample strings, S1 and S2.",
        "2. Use strlen(S1) to find and display the length of the first string.",
        "3. Use strcpy(S3, S2) to demonstrate how data moves into a new array.",
        "4. Use strcat(S1, S2) to merge the strings and print the result.",
        "5. Use strcmp(S1, S2) to check for equality and handle the resulting integer.",
        "6. Summarize the importance of null-terminators in these operations."
      ],
      result: "String utility functions correctly identified, explained, and demonstrated."
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
      theory: "Python provides four major built-in data structures: List, Tuple, Set, and Dictionary. These are categorized based on their technical properties: Mutability (the ability to change after creation), Ordering (whether elements preserve their sequence), and Uniqueness (whether duplicates are allowed). Understanding these structures is foundational for writing efficient Python code that manages memory and data properly.",
      explanation: "Python's power lies in its rich set of data structures that handle data organization automatically. A **List** is the most versatile, acting like a dynamic array that can grow or shrink. It is 'mutable', meaning you can swap an item at any index without rebuilding the entire structure. This makes it perfect for data that changes frequently, like a shopping cart. Conversely, **Tuples** are 'immutable'—once created, they are fixed. This makes them faster and safer for storing constants like geographic coordinates (latitude, longitude). \n\n**Dictionaries** store data in key-value pairs, allowing for instantaneous lookups based on custom identifiers rather than simple numbers. This is similar to how a real-world dictionary works, linking a word to its definition. Finally, **Sets** are unordered collections that strictly forbid duplicates, which is ideal for filtering out redundant data points. In an exam, highlighting the distinction between mutable and immutable types is critical, as it proves your understanding of how Python manages data integrity and computational overhead in different scenarios.",
      aim: "To explore and contrast the primary built-in data containers in the Python ecosystem.",
      algorithm: [
        "1. Define a List [1, 2, 3] and show its mutability by changing an element.",
        "2. Define a Tuple (1, 2, 3) and explain its fixed nature.",
        "3. Define a Set {1, 2, 2, 3} and observe the removal of duplicates.",
        "4. Define a Dictionary {'name': 'AI'} and demonstrate key-based access.",
        "5. Conclude on when to use each based on mutability requirements."
      ],
      result: "Python data structures successfully categorized and explained with use-cases."
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
      theory: "A Tuple is an immutable, ordered sequence of items in Python. While the items themselves cannot be changed or moved once established, tuples support a variety of operations that allow programmers to inspect, combine, and dissect them. Because of their immutability, these operations are highly optimized by the Python interpreter, making tuples a preferred choice for 'read-only' data streams.",
      explanation: "Even though Tuples are unchangeable, they are surprisingly versatile in how they can be manipulated. One primary operation is **Concatenation**, where we use the `+` operator to join two separate tuples into a brand-new third tuple. Another core operation is **Slicing**, which allows us to extract a specific sub-range of items (e.g., items 2 through 4) without modifying the original source. \n\nWe also frequently use the **index()** and **count()** methods to find the position of a specific item or determine how many times it appears. Finally, the **tuple packing and unpacking** feature is a signature Python move, allowing multiple variables to be assigned from a single tuple in one line of code. In an exam, explaining that these operations produce *new* tuples rather than changing the original is key. It shows you understand that while the data is 'locked' (Immutable), the logic for handling that data remains flexible and powerful, similar to how you can't edit a physical book but can still quote specific chapters or bind two volumes together.",
      aim: "To identify and demonstrate the standard methods for interacting with immutable tuples in Python.",
      algorithm: [
        "1. Create two sample tuples T1 and T2.",
        "2. Perform concatenation using T3 = T1 + T2.",
        "3. demonstrate slicing using T1[1:3] to extract partial data.",
        "4. Use len() to determine the total number of elements.",
        "5. Show repetition using T1 * 2 to create a larger sequence.",
        "6. Conclude on the efficiency of read-only operations."
      ],
      result: "Primary tuple operations analyzed and explained with focus on immutability."
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
      theory: "I/O (Input/Output) operations are the primary way a program interacts with the outside world. In Python, the `input()` function captures data from the keyboard as a string, while the `print()` function displays data to the console. Because Python is dynamically typed, we must often use 'Type Casting' to convert the string input into numbers for mathematical calculations. These functions are designed to be intuitive and readable, aligning with Python's philosophy of 'Simplicity over Complexity'.",
      explanation: "Python uses simple pipelines for data flow that are much easier to master than the formatted strings of C. The **input()** function pauses the program and allows the user to type. A crucial detail for students is that input always arrives as a 'string'. To do math, you must wrap it in a converter like `int(input())`. \n\nOn the other side, the **print()** function is incredibly smart; it can take multiple items, automatically add spaces between them, and even format decimal points. You can also use 'f-strings' (formatted string literals) to embed variables directly into sentences, making the output code much cleaner and easier to maintain. In an exam, demonstrating a simple cycle where a name is read and a personalized greeting is printed shows that you understand the basic feedback loop between the user and the machine. Explaining the necessity of type casting proves you know how Python differentiates between '3' (text) and 3 (a actual number that can be added or multiplied).",
      aim: "To master the basic syntax for reading user data and displaying processed results in Python.",
      algorithm: [
        "1. Define a prompt for the user.",
        "2. Use x = input() to capture the response.",
        "3. Use type-casting like int(x) if numeric data is expected.",
        "4. Process the data (e.g., x + 10).",
        "5. Use print() with f-strings to display the final result clearly.",
        "6. Conclude on the readability of Python I/O compared to lower-level languages."
      ],
      result: "Fundamental Python I/O mechanics successfully demonstrated."
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
      theory: "Lists and Tuples are both sequence data types in Python that store collections of items. However, they differ in one fundamental way: **Mutability**. A List is mutable, meaning its items can be updated, deleted, or appended. A Tuple is immutable, meaning its state is constant once created. This architectural choice affects their performance (Tuples are faster) and their intended use in software design.",
      explanation: "The choice between a List and a Tuple is a decision about how you expect your data to behave. A **List** (defined with square brackets `[]`) is like your grocery shopping list. As you walk through the store, you might cross items out, add new ones at the bottom, or realize you picked up the wrong bread and swap it out. It's flexible and 'dynamic'. \n\nIn contrast, a **Tuple** (defined with parentheses `()`) is like your 'Date of Birth'. It's a collection of three numbers (Day, Month, Year) that will never change, no matter what happens in the program. Because Tuples are 'locked' by Python, the computer can store them more efficiently in memory, leading to slightly better speed in large-scale data processing. In an exam, showing code where a List is modified and a Tuple remains static is the perfect way to prove your understanding. It highlights that while both can hold the same data, one is built for change and the other is built for stability and speed.",
      aim: "To contrast the technical and practical differences between mutable lists and immutable tuples.",
      algorithm: [
        "1. Initialize a List L = [10, 20, 30].",
        "2. Modify an element: L[0] = 50 and print to show success.",
        "3. Initialize a Tuple T = (10, 20, 30).",
        "4. Attempt to modify T[0] = 50 and note the resulting error.",
        "5. Conclude on which to use for 'Settings' vs 'User Data'."
      ],
      result: "Technical differences between lists and tuples analyzed and demonstrated."
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
      theory: "A Dictionary is a mutable collection of key-value pairs in Python. Unlike Lists, which are indexed by numbers, Dictionaries are 'associative', meaning you use a unique 'Key' (which can be a string or integer) to find a 'Value'. This structure is implement via a 'Hash Table', making data retrieval incredibly fast even when storing millions of items. They are the backbone of JSON data, configuration settings, and database mappings in modern applications.",
      explanation: "Dictionaries store data in a way that mimics real-world directories. Each entry consists of a **Key**—a unique identifier—and a **Value**—the actual data. Think of your phone's contact list: the contact's name is the Key, and their phone number is the Value. You don't scroll through every person to find a number; you search for the name and find the number instantly. This 'O(1)' lookup speed is why dictionaries are so powerful. \n\nPython provides several methods to manage this data. **keys()** and **values()** allow you to extract just the identifiers or just the data points, while **items()** lets you loop through both simultaneously. You can add new entries simply by assigning a value to a new key, or remove them using the **pop()** method. In an exam, explaining that keys must be 'hashable' (immutable, like strings or numbers) and unique is a sophisticated point that shows you understand the underlying mathematics. They are essential for any problem involving lookups, counting frequencies, or organizing complex data where a simple numbered row isn't enough.",
      aim: "To perform a deep-dive into the associative data structure of Python, covering creation, access, and modern methods.",
      algorithm: [
        "1. Create a dictionary D = {'A': 1, 'B': 2}.",
        "2. Access a value using D['A'].",
        "3. Demonstrate adding a new pair: D['C'] = 3.",
        "4. Use the .get() method to access a key safely.",
        "5. Loop through both keys and values using .items().",
        "6. Conclude on the use of Dictionaries for rapid data lookup."
      ],
      result: "Dictionary data structure analyzed in-depth with primary operations explained."
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
      aim: "To implement a comparison algorithm that verifies if a list's elements are strictly ascending.",
      theory: "A list is considered sorted if every element is less than or equal to the element that follows it. In programming terms, for every index 'i', the relation `List[i] <= List[i+1]` must hold true. We can verify this using a linear scan, comparing each adjacent pair. If even one pair fails this test, we can immediately conclude the list is unsorted. This is a common requirement in data processing and preparation before binary searches can be performed.",
      algorithm: [
        "1. Start.",
        "2. Take a list of numbers as input.",
        "3. Use a loop that runs from index 0 to length-2.",
        "4. Inside the loop, compare current element L[i] with the next element L[i+1].",
        "5. IF L[i] > L[i+1], printed 'Not Sorted' and terminal the program.",
        "6. IF the loop completes successfully, print 'Sorted'.",
        "7. Stop."
      ],
      code: "def is_sorted(lst):\n    for i in range(len(lst) - 1):\n        if lst[i] > lst[i+1]:\n            return False\n    return True\n\nnums = [1, 2, 5, 8, 10]\nif is_sorted(nums):\n    print(\"The list is sorted!\")\nelse:\n    print(\"The list is NOT sorted!\")",
      input: "[1, 3, 2, 5]",
      output: "The list is NOT sorted!",
      result: "Sort validation successfully performed through linear pairwise comparison.",
      finalAnswer: "Linear comparison",
      explanation: "This program verifies the numerical order of a list by checking neighbors. It uses a `for` loop combined with the `range(len(lst) - 1)` function. We subtract 1 from the length because when we are at the last item, there is no 'next' item to its right to compare it with. Inside the loop, the program performs a simple 'greater-than' check. \n\nIf at any point a number is bigger than the one follow it (like a 5 followed by a 2), we know the entire list is out of order. The program uses a 'False' return or a flag to capture this state and exits immediately to save time. If the loop manages to reach the very end without being interrupted, it means every single pair passed the test, and the list is perfectly sorted. This algorithm introduces students to 'early-exit' logic and index-offset handling, which are critical for preventing 'index out of bounds' errors in more complex array-based programs.",
    },
    pseudocode: "READ L, FOR i FROM 0 TO len(L)-2: IF L[i] > L[i+1]: PRINT 'Not Sorted', EXIT, ENDFOR, PRINT 'Sorted'"
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
      aim: "To generate a right-angled triangular distribution of consecutive natural numbers using nested loops.",
      theory: "Floyd's Triangle is a numeric pattern where the first row contains '1', the second row contains '2, 3', the third contains '4, 5, 6', and so on. It is an excellent way to demonstrate nested loop control and independent counters. The outer loop manages the row number, while the inner loop determines how many items to print in that specific row. This pattern logic is frequently used in computer graphics and UI layout for arranging objects in stepped formation.",
      algorithm: [
        "1. Start.",
        "2. Take the number of rows 'n' from the user.",
        "3. Initialize a counter 'num' to 1.",
        "4. Setup an outer for loop (i) from 1 to n.",
        "5. Setup an inner for loop (j) from 1 to i.",
        "6. Inside the inner loop, print 'num' and increment it by 1.",
        "7. Use the end=' ' parameter to keep numbers on the same line.",
        "8. Use a blank print() at the end of the outer loop to start a new line.",
        "9. Stop."
      ],
      code: "rows = int(input(\"Enter rows: \"))\nnum = 1\nfor i in range(1, rows + 1):\n    for j in range(1, i + 1):\n        print(num, end=\" \")\n        num += 1\n    print() # Newline after each row",
      input: "Rows: 4",
      output: "1 \n2 3 \n4 5 6 \n7 8 9 10",
      result: "Consecutive numerical triangle successfully generated using nested loop logic.",
      finalAnswer: "Nested loops with counter",
      explanation: "This program creates a distinct geometric number pattern by coordinating two loops. It starts by taking a row count from the user and initializing a `num` variable to 1—this variable is independent of the loops and simply counts upward forever. The outer loop `i` defines which 'floor' of the triangle we are currently building. Because the first floor has one number and the second floor has two, we use the value of `i` to tell the inner loop `j` how many times it should run. \n\nInside the inner loop, we print the current value of `num` and immediately add 1 to it so it's ready for the next slot. By using `end=' '` in the print function, we prevent Python from starting a new line after every single number. The 'magic' happens at the end of the outer loop, where a simple `print()` statement (with no text) acts like an 'Enter' key, pushing the cursor to the next row. This exercise proves that the developer can manage multiple variables at once and understands the hierarchical relationship between 'rows' and 'columns' in a terminal display. It's a classic exam question because it targets both counter management and whitespace control.",
    },
    pseudocode: "READ n, SET c = 1, FOR i FROM 1 TO n: FOR j FROM 1 TO i: PRINT c, INCREMENT c, ENDFOR, PRINT newline, ENDFOR"
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
      theory: "Pandas is a high-performance, open-source library built on top of NumPy for data manipulation and analysis in Python. Its primary data structure is the 'DataFrame', a 2D labeled table that can hold columns of different data types. Pandas excels at 'Data Wrangling', providing automated tools for cleaning, merging, and reshaping datasets that would otherwise require hundreds of lines of core Python code.",
      explanation: "Pandas is effectively 'Excel for Python'. While standard Python lists are just rows of items, a Pandas **DataFrame** adds headers and row indexes, allowing you to treat your data as a professional table. One of its standout features is the sophisticated **Handling of Missing Data**. In the real world, datasets often come with empty cells; Pandas provides methods like `fillna()` to intelligently replace gaps or `dropna()` to remove incomplete records automatically. \n\nAnother significant feature is **Data Alignment**. When you combine two different data sources, Pandas ensures that indices match correctly, preventing data from 'drifting' into the wrong rows. It also supports powerful **Grouping and Pivoting** operations, which can summarize millions of lines of raw transactions into a monthly sales report with a single command. In an exam, emphasizing that Pandas is built on NumPy is vital, as it explains how the library maintains incredible speed while offering such high-level 'user-friendly' features. It transforms Python from a general-purpose language into a world-class environment for data science and financial modeling.",
      aim: "To explore the architectural and functional strengths of the Pandas library in structured data analysis.",
      algorithm: [
        "1. Install and import the pandas library as 'pd'.",
        "2. Create a DataFrame from a dictionary or CSV file.",
        "3. Demonstrate the use of .info() and .describe() for meta-analysis.",
        "4. Use .isnull() to identify gaps in the data.",
        "5. Perform a filtering operation like df[df['age'] > 20].",
        "6. Conclude on the efficiency of labeled data structures."
      ],
      result: "Key features of Pandas successfully identified and explained for data-heavy applications."
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
      theory: "NumPy (Numerical Python) is the core library for scientific computing in Python. It provides the **ndarray** object, a multi-dimensional array that is significantly faster and more memory-efficient than standard Python lists. NumPy is the foundation upon which almost all other data science libraries (like Pandas and SciPy) are built, offering a wide array of mathematical functions for linear algebra and statistical analysis.",
      explanation: "The defining feature of NumPy is speed. While a standard Python list is a collection of pointers to objects in memory, a NumPy array is a continuous block of raw data. This allows the CPU to process the entire array at once using 'vectorization'. Another powerhouse feature is **Broadcasting**, which allows you to perform operations on arrays of different sizes without needing explicit loops. For example, if you want to double every number in a 1,000x1,000 grid, NumPy does it in one line without visiting every 'slot' manually. \n\nNumPy also includes a comprehensive library of **Linear Algebra** tools, which are essential for everything from 3D game engines to artificial intelligence. It supports Fourier transforms, random number generation, and sophisticated indexing techniques that allow you to pick out complex patterns of data instantly. In an exam, the most important point to make is that NumPy moves the 'heavy lifting' of math away from Python and into high-speed C-code libraries that run under the hood. This makes it a 'bridge' between the readability of Python and the raw power of machine-level computing.",
      aim: "To identify the core technological pillars that make NumPy the standard for numerical processing.",
      algorithm: [
        "1. Import numpy as 'np'.",
        "2. Create an ndarray using np.array().",
        "3. Demonstrate vectorization (adding 10 to the entire array at once).",
        "4. Show broadcasting between a scalar and a matrix.",
        "5. Use np.reshape() to change data layout without copying memory.",
        "6. Conclude on the memory advantages of homogeneous arrays."
      ],
      result: "Primary features of NumPy successfully analyzed and contrasted with standard lists."
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
    answer: { 
      finalAnswer: "Metadata about the array structure.", 
      theory: "Attributes in NumPy are read-only properties that describe the 'metadata' or the physical structure of an array. Unlike methods, attributes don't perform work; they simply tell you what the array *is*. The four most critical attributes are **shape**, **ndim**, **size**, and **dtype**. These allow a programmer to verify the dimensions and data integrity of a dataset before performing complex math.",
      explanation: "Every NumPy array carries a 'identity label' through its attributes. The **shape** attribute is a tuple that tells you the dimensions (e.g., 5 rows and 2 columns). This is vital because you cannot add two matrices unless their shapes match. The **ndim** attribute tells you the number of axes; for instance, a photograph is 3D (width, height, color channels), while a simple list is 1D. \n\nNext, **size** tells you the total count of elements inside, regardless of how they are arranged. Finally, **dtype** (data type) is perhaps the most important for memory efficiency. It tells you if the array contains integers, floats, or complex numbers. Unlike standard Python lists which can have mixed types, NumPy arrays are 'homogeneous' (all items are the same type). This homogeneity is what allows the computer to process them so fast. In an exam, explaining that these attributes are checked *before* a computation to prevent 'shape mismatch' errors shows a practical understanding of robust numerical programming.",
      aim: "To define and explain the four essential descriptors of a NumPy multidimensional array.",
      algorithm: [
        "1. Create a 2D NumPy array.",
        "2. Print .shape to see row vs column count.",
        "3. Print .ndim to identify if it is a vector, matrix, or tensor.",
        "4. Print .size to get the total item tally.",
        "5. Print .dtype to confirm the bit-depth of the data.",
        "6. Conclude on the role of metadata in error prevention."
      ],
      result: "NumPy array attributes successfully analyzed and defined."
    }
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
      theory: "Indexing and Slicing in NumPy are the processes of selecting specific elements or sub-grids from an array. Because NumPy arrays can be multi-dimensional, indexing uses a comma-separated tuple of integers representing the position along each axis. It supports standard zero-based indexing, negative indexing (from the end), and boolean indexing (selecting based on logic like 'every value > 10').",
      explanation: "NumPy indexing is far more powerful than accessing a standard list because it operates on multiple dimensions simultaneously. To find an item in a 2D grid, you simply provide the row and column in one set of brackets, like `[row, col]`. It's similar to a 'Coordinate System' on a map. If you want a whole section of the map, you use **Slicing** with the colon (`:`) operator, which lets you grab 'Rows 2 to 5' and 'All Columns' in a single command. \n\nA more advanced feature is **Boolean Indexing**, where you use a logical condition as the index. If you write `arr[arr > 0]`, NumPy creates a 'mask' and instantly returns only the positive numbers from that array. This is incredibly useful for filtering data or removing unwanted values ('noise') from a signal. In an exam, showing how to access a single item versus a sub-row proves you understand the jump from 1D to Multi-D data navigation, which is the heart of image processing and scientific simulation.",
      aim: "To demonstrate the techniques for navigating and extracting data from N-dimensional arrays.",
      algorithm: [
        "1. Create a 3x3 diagonal matrix.",
        "2. Access the center element using [1, 1].",
        "3. Use a slice [0, :] to extract the first entire row.",
        "4. Use negative indexing [-1, -1] for the last element.",
        "5. Apply a filter: arr[arr % 2 == 0] to find even numbers.",
        "6. Conclude on the efficiency of multidimensional slicing."
      ],
      result: "NumPy indexing and slicing strategies successfully categorized and demonstrated."
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
      theory: "Querying in Pandas is the method of extracting specific subsets of data from a DataFrame that meet certain criteria. This can be achieved through Boolean Indexing, the `.loc` and `.iloc` accessors, or the `.query()` string-based method. These tools allow for complex filtering that remains readable and efficient, even for very large datasets.",
      explanation: "Querying a DataFrame is like using a search engine on a database. Instead of manually looping through every row to find a specific entry, you provide a 'Condition'. For example, if you have a table of employees, you can write `df[df['Salary'] > 50000]` to instantly see only the high-earners. Pandas creates a 'True/False' mask for the entire table behind the scenes and shows you only the 'True' rows. \n\nThere are two main ways to approach this. **Label-based selection** (.loc) uses the names of rows and columns, while **Integer-based selection** (.iloc) uses their numerical positions. The most modern approach is the **.query()** method, which lets you write filters as simple English-like strings, such as `df.query('age < 25 and city == \"New York\"')`. This makes your code much cleaner and easier for other developers to read. In an exam, explaining that querying doesn't usually delete data but simply 'filters' the view is an important distinction that shows you understand the non-destructive nature of data analysis.",
      aim: "To explore the various syntax options for filtering and selecting data from Pandas DataFrames.",
      algorithm: [
        "1. Initialize a DataFrame with columns like 'Name', 'Score', 'Status'.",
        "2. Apply a Boolean filter: df[df['Score'] > 80].",
        "3. Use .loc to select all rows where 'Status' is 'Pass'.",
        "4. demonstrate the .query() method for multiple conditions.",
        "5. Show how to reset the index after filtering.",
        "6. Conclude on the readability of the .query() method."
      ],
      result: "Pandas querying techniques analyzed and explained for dataset subsetting."
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
      theory: "Statistical functions in NumPy are built-in methods used to summarize and analyze huge volumes of numbers quickly. They operate on the entire array or along a specific axis (rows or columns). Common functions include **mean()** for average, **median()** for the middle value, **std()** for standard deviation (spread), and **sum()** for totals. These are essential for the 'Exploratory Data Analysis' (EDA) phase of any research or engineering project.",
      explanation: "NumPy makes complex statistics feel effortless. If you have a million temperature readings, you don't write a loop to find the average; you simply call `np.mean(arr)`. The real power, however, is the **axis** parameter. In a 2D table of student marks (Rows = Students, Columns = Subjects), you can find the average for 'Each Student' by calculating along Axis 1, or the average for 'Each Subject' by calculating along Axis 0. \n\nFunctions like **min()** and **max()** identify the outliers in the data, while **std()** helps you understand the reliability of the data—a low standard deviation means all your data points are very close to the average. These functions are written in highly optimized C-code, meaning they can process millions of data points in a fraction of a second. In an exam, explaining that these functions work on 'tensors' (multi-dimensional grids) and can be focused on specific dimensions shows you have moved past simple 1D math and into true multidimensional data analysis.",
      aim: "To demonstrate the use of aggregate mathematical functions for summarizing numerical datasets.",
      algorithm: [
        "1. Create a large NumPy array with random values.",
        "2. Compute the overall average using np.mean().",
        "3. Find the lowest and highest values using np.min() and np.max().",
        "4. Calculate row-wise sums using axis=1.",
        "5. Use np.std() to evaluate data variance.",
        "6. Conclude on the performance of vector-based statistics."
      ],
      result: "NumPy statistical capabilities analyzed and demonstrated for large-scale data."
    }
  },

  // --- CONSOLIDATED MCQs ---
  {
    id: 101, unit: 1, topic: "Problem Solving", pattern: "MCQ", type: "MCQ", frequency: "High", isMustDo: true,
    question: "What is the first step in the problem-solving process?",
    options: ["Generate potential solutions", "Define the problem", "Implement the solution", "Evaluate alternatives"],
    answer: { 
      finalAnswer: "Define the problem", 
      aim: "To identify the foundational stage of the systematic problem-solving methodology.",
      theory: "Problem solving is a structured technical process that begins with a clear understanding of the target issue. Before any logic is written or code is generated, the developer must establish the boundaries and constraints of the problem. This ensures that the final solution is relevant and targeted. In an exam, identifying 'Definition' as the first step shows an appreciation for the software life-cycle.",
      explanation: "Answer: Problem definition is the mandatory first stage.\n\nExplanation: You can't fix a car if you don't know it's broken. Defining the problem ensures you aren't writing code for a solution that nobody actually needs." 
    }
  },
  {
    id: 102, unit: 1, topic: "Algorithm", pattern: "MCQ", type: "MCQ", frequency: "High", isMustDo: true,
    question: "What is an algorithm?",
    options: ["A step-by-step procedure to solve a problem", "A graphical representation", "A programming language", "A flowchart symbol"],
    answer: { 
      finalAnswer: "A step-by-step procedure to solve a problem", 
      aim: "To define the concept of an algorithm in the context of computer science.",
      theory: "An algorithm is a finite set of unambiguous instructions that, when followed, perform a specific task or solve a class of problems. It is the logical blueprint that exists independently of any specific programming language. Algorithms must be precise, efficient, and guaranteed to terminate in a finite number of steps.",
      explanation: "Answer: An algorithm is a logical sequence of steps.\n\nExplanation: Think of it like a treasure map. It doesn't just say 'Find Gold'; it tells you 'Walk 10 steps North, Turn Left, Dig 5 feet' in a precise order." 
    }
  },
  {
    id: 103, unit: 1, topic: "Algorithm", pattern: "MCQ", type: "MCQ", frequency: "High", isMustDo: false,
    question: "Which of the following is NOT a characteristic of a good algorithm?",
    options: ["Finiteness", "Determinism", "Ambiguity", "Feasibility"],
    answer: { 
      finalAnswer: "Ambiguity", 
      aim: "To identify the qualities that differentiate a functional algorithm from a failed one.",
      theory: "A robust algorithm must adhere to several key characteristics: Finiteness (must end), Definiteness (each step must be clear), Input/Output (data flow), and Feasibility (can be executed). Ambiguity is the greatest enemy of computation because machines require absolute certainty to make logical decisions. Eliminating ambiguity is the primary goal of the development phase.",
      explanation: "Answer: Algorithms MUST be definite and clear.\n\nExplanation: Computers are literal. If a direction is 'Vague' (Ambiguous), the computer will get confused or produce an error, just like a GPS that tells you to 'Turn soon' instead of 'Turn in 100 meters'." 
    }
  },
  {
    id: 104, unit: 1, topic: "Operators", pattern: "MCQ", type: "MCQ", frequency: "High", isMustDo: true,
    question: "Find the output: printf(\"%d\", sizeof(\"Hello\"));",
    options: ["5", "6", "1", "2"],
    answer: { 
      finalAnswer: "6", 
      aim: "To calculate the memory footprint of a string literal in the C programming language.",
      theory: "In C, strings are treated as an array of characters ending with a special 'Null Terminator' characterized by the symbol '\\0'. The `sizeof` operator returns the total number of bytes occupied by a variable or constant. Since each character in 'Hello' takes 1 byte and the null terminator takes 1 byte, the total sum is 6.",
      explanation: "Answer: C strings use an extra character for the 'End'.\n\nExplanation: If you have a train with 5 cars ('H-e-l-l-o'), C requires a special 'Empty' caboose (\\0) at the end to tell the driver where the train stops. So, 5 letters + 1 caboose = 6 bytes." 
    }
  },
  {
    id: 105, unit: 1, topic: "Operators", pattern: "MCQ", type: "MCQ", frequency: "Very High", isMustDo: true,
    question: "What is the output: n = 5 - 2 * 7 - 9",
    options: ["-18", "12", "9", "1"],
    answer: { 
      finalAnswer: "-18", 
      aim: "To demonstrate the application of operator precedence (PEMDAS/BODMAS) in C expressions.",
      theory: "Operator precedence determines the order in which parts of a mathematical expression are evaluated. In C, multiplicative operators (*, /, %) have higher priority than additive operators (+, -). When operators have the same priority, they are evaluated based on their 'Associativity', which is usually left-to-right for basic math.",
      explanation: "Answer: Multiplication (*) evaluates before Subtraction (-).\n\nExplanation: Math in C follows 'Priority Seating'. Since Multiplication is a 'VIP', it gets processed first (2*7=14), and only then do the regular Subtractions happen." 
    }
  },
  {
    id: 106, unit: 1, topic: "Data Types", pattern: "MCQ", type: "MCQ", frequency: "High", isMustDo: false,
    question: "Correct output: float c = 3.14; printf(\"%f\", c % 2);",
    options: ["1.0", "0", "Compile error", "0.14"],
    answer: { 
      finalAnswer: "Compile error", 
      aim: "To identify the technical constraints of the modulo operator in C.",
      theory: "The modulo operator (%) is used to find the remainder of a division. Strictly according to the C standard, this operator is only defined for integer types (int, char, long). Attempting to use it on floating-point numbers (float, double) causes a syntax error because floating-point division doesn't result in a 'remainder' in the same discrete sense.",
      explanation: "Answer: Modulo (%) is strictly for whole numbers (integers).\n\nExplanation: Modulo is like splitting a pack of 10 cookies between 3 people. It tells you how many WHOLE cookies are left over. You can't use it on 'Half-cookies' (floats) because they can always be broken into smaller pieces." 
    }
  },
  {
    id: 107, unit: 1, topic: "Operators", pattern: "MCQ", type: "MCQ", frequency: "High", isMustDo: false,
    question: "The expression 4 + 6 / 3 + 2 - 2 + 7 % 3 evaluates to:",
    options: ["3", "4", "6", "7"],
    answer: { 
      finalAnswer: "7", 
      aim: "To evaluate a complex arithmetic expression by applying order of operations.",
      theory: "In multi-operator expressions, C follows a strict hierarchy. PEMDAS (Parentheses, Exponents, Multiplication/Division/Modulo, Addition/Subtraction) is the standard. Division and Modulo occupy the same tier and are evaluated left-to-right before any addition or subtraction is performed. This predictable behavior is crucial for accurate algorithm implementation.",
      explanation: "Answer: Divide (/) and Modulo (%) are done before Add (+).\n\nExplanation: The computer processes the complex tasks (/, %) first like a fast-lane at an airport, and then finishes with the simpler walk-in tasks (+, -) to get the final total of 7." 
    }
  },
  {
    id: 108, unit: 1, topic: "Comments", pattern: "MCQ", type: "MCQ", frequency: "Medium", isMustDo: false,
    question: "Appropriate position for writing comments in C?",
    options: ["Anywhere", "Before main", "Before header", "Before declaration"],
    answer: { 
      finalAnswer: "Anywhere", 
      aim: "To understand the flexibility and purpose of internal documentation in C code.",
      theory: "Comments are non-executable parts of a program meant for humans. In C, single-line comments (//) and multi-line comments (/* */) can be placed legally anywhere that whitespace is allowed. They are ignored by the compiler during the tokenization phase. Useful comments explain 'Why' something is done, rather than just 'What' is done.",
      explanation: "Answer: Comments don't affect code execution.\n\nExplanation: Comments are like sticky-notes on a wall. You can put them anywhere to help yourself remember things, but the wall itself doesn't care—it's still just a wall." 
    }
  },
  {
    id: 109, unit: 1, topic: "Data Types", pattern: "MCQ", type: "MCQ", frequency: "High", isMustDo: false,
    question: "Correct size order?",
    options: ["char > int > float", "int < char < float", "char < int < double", "double > char > int"],
    answer: { 
      finalAnswer: "char < int < double", 
      aim: "To contrast the storage requirements of basic primitive data types in C.",
      theory: "Memory allocation depends on the data type's bit-depth. A 'char' typically occupies 1 byte (8 bits), an 'int' usually takes 4 bytes (32 bits), and a 'double' takes 8 bytes (64 bits). Using the correct type is essential for memory-constrained environments like embedded systems. This hierarchy reflects the range and precision of the data being stored.",
      explanation: "Answer: Memory size grows from char to double.\n\nExplanation: 'char' is a small cup (1 byte), 'int' is a jug (4 bytes), and 'double' is a giant barrel (8 bytes). You choose the size based on how much 'data' you need to pour in." 
    }
  },
  {
    id: 110, unit: 1, topic: "Operators", pattern: "MCQ", type: "MCQ", frequency: "High", isMustDo: false,
    question: "NOT a logical operator?",
    options: ["&", "&&", "||", "!"],
    answer: { 
      finalAnswer: "&", 
      aim: "To distinguish between logical and bitwise operators in C.",
      theory: "Logical operators (&&, ||, !) work on boolean 'Truth' values (0 or non-zero). Bitwise operators (&, |, ^, ~) work on the individual bits of an integer. While they appear similar, a logical operator returns a single 0 or 1, whereas a bitwise operator produces a new integer based on bit-level manipulation. Confusing them can lead to subtle logic bugs.",
      explanation: "Answer: && is Logical AND; & is Bitwise AND.\n\nExplanation: Using & for logic is like trying to use a screwdriver to Hammer a nail. It might look similar, but it's designed for a different job (looking at bits instead of Truth/False)." 
    }
  },
  {
    id: 111, unit: 1, topic: "Variables", pattern: "MCQ", type: "MCQ", frequency: "High", isMustDo: false,
    question: "Special character allowed in variable name?",
    options: ["anything", "nothing", "underscore", "hyphen"],
    answer: { 
      finalAnswer: "underscore", 
      aim: "To identify the legal character set for creating identifiers in C.",
      theory: "Identifiers (variable and function names) in C must follow strict naming conventions. They can only contain alphanumeric characters (A-Z, a-z, 0-9) and the underscore (_). An identifier cannot start with a digit. No other special characters, including spaces, hyphens, or currency symbols, are permitted. This ensures that the compiler can easily distinguish names from operators.",
      explanation: "Answer: Most symbols are banned in variable names.\n\nExplanation: C is picky about names. It only likes alphabets, numbers, and the 'Underscore' (_). Any other symbols (like - or @) make the computer think you are trying to do math instead of name a box." 
    }
  },
  {
    id: 112, unit: 2, topic: "Storage", pattern: "MCQ", type: "MCQ", frequency: "High", isMustDo: false,
    question: "Default storage class for local variables?",
    options: ["auto", "register", "static", "extern"],
    answer: { 
      finalAnswer: "auto", 
      aim: "To identify the default behavior of variable scoping and lifetime in C.",
      theory: "Storage classes define the scope, visibility, and lifetime of variables. The 'auto' storage class is the default for all variables declared inside a block or a function. Such variables are created on the 'Stack' when the function is called and automatically destroyed when it returns. This minimizes memory waste by only allocating space when absolutely needed.",
      explanation: "Answer: 'auto' is the default for standard local variables.\n\nExplanation: When you create a variable inside a function without a label, C automatically tags it as 'auto', meaning it's a 'Temporary' helper that only exists while that function is running." 
    }
  },
  {
    id: 113, unit: 2, topic: "Data Types", pattern: "MCQ", type: "MCQ", frequency: "Medium", isMustDo: false,
    question: "Range of values for int?",
    options: ["-(2^31) to (2^31)-1", "-256 to 255", "-(2^64) to 2^64-1", "0 to 2^31-1"],
    answer: { 
      finalAnswer: "-(2^31) to (2^31)-1", 
      aim: "To identify the numerical limits of a standard 4-byte integer in modern systems.",
      theory: "An 'int' in modern C is typically 32 bits wide. In a 'Signed' integer, one bit is reserved for the sign (+/-), leaving 31 bits for the magnitude. This results in a range from -2,147,483,648 to 2,147,483,647. If a calculation exceeds these limits, 'Integer Overflow' occurs, often leading to negative results for additions—a critical security and logic risk.",
      explanation: "Answer: This is the max capacity of a 32-bit signed integer.\n\nExplanation: A 32-bit integer is like a counter that can only go so high. Once it hits ~2.1 billion, it has no more room left for larger numbers." 
    }
  },
  {
    id: 114, unit: 3, topic: "Pointers", pattern: "MCQ", type: "MCQ", frequency: "Very High", isMustDo: true,
    question: "Equivalent pointer expression for a[i]?",
    options: ["*(a+i)", "a+i", "&a+i", "*a+i"],
    answer: { 
      finalAnswer: "*(a+i)", 
      aim: "To explore the mathematical relationship between arrays and pointers in C.",
      theory: "In C, the name of an array acts as a constant pointer to its first element. The expression `a[i]` is internally converted by the compiler into address arithmetic: `*(a + i)`. This means 'take the base address of A, offset it by i items, and dereference the resulting address'. This deep duality is what makes C incredibly efficient for low-level memory manipulation.",
      explanation: "Answer: Arrays and Pointers are twins in memory.\n\nExplanation: Writing a[i] is just a user-friendly way of saying 'Go to address A and move forward i spots'. *(a+i) is how the computer actually reads that direction." 
    }
  },
  {
    id: 115, unit: 3, topic: "Recursion", pattern: "MCQ", type: "MCQ", frequency: "High", isMustDo: true,
    question: "Function that calls itself?",
    options: ["Inline", "Recursive", "Static", "Friend"],
    answer: { 
      finalAnswer: "Recursive", 
      aim: "To identify the programming paradigm where a function is defined in terms of itself.",
      theory: "Recursion is a process where a function calls itself directly or indirectly. This is often used to solve mathematical problems like factorials, Fibonacci sequences, or tree traversals. A recursive function must include a condition to stop the self-calls (Base Case), or it will result in infinite execution and a stack overflow. It is an alternative to iterative loops.",
      explanation: "Answer: Recursion means the function calls itself.\n\nExplanation: It's like a dream within a dream (Inception). You keep going deeper into the same function until you find the 'kick' (Base Case) that brings you back to the start." 
    }
  },
  {
    id: 116, unit: 3, topic: "Strings", pattern: "MCQ", type: "MCQ", frequency: "High", isMustDo: false,
    question: "Function used to concatenate strings?",
    options: ["strcon()", "strcat()", "stradd()", "strjoin()"],
    answer: { 
      finalAnswer: "strcat()", 
      aim: "To identify the standard library function used for merging character sequences in C.",
      theory: "The `strcat()` function (String Concatenate) belongs to the `<string.h>` library. It appends the source string to the end of the destination string, overwriting the null terminator of the destination. It is vital that the destination array has enough allocated space to hold the combined result, otherwise, a buffer overflow could occur. This is a common point of failure for beginner C programmers.",
      explanation: "Answer: strcat stands for 'String Concatenate'.\n\nExplanation: Concatenation is like gluing two boards together. strcat puts the second string right at the end of the first one to make one long sentence." 
    }
  },
  {
    id: 117, unit: 4, topic: "Python", pattern: "MCQ", type: "MCQ", frequency: "Very High", isMustDo: true,
    question: "Immutable data type in Python?",
    options: ["List", "Dictionary", "Tuple", "Set"],
    answer: { 
      finalAnswer: "Tuple", 
      aim: "To identify the primary immutable sequence type in the Python language.",
      theory: "Immutability means that the object's state cannot be modified after it is created. In Python, Tuples are the most common example of this. Unlike Lists (which use `[]`), Tuples (which use `()`) do not support item assignment or deletion. This makes them safer for passing data through a program without the risk of accidental modification, and also slightly more memory efficient.",
      explanation: "Answer: Tuples cannot be changed after creation.\n\nExplanation: A Tuple is like a 'Sealed Envelope'. You can read what's inside, but you can't add or remove sheets without breaking the seal (creating a new one)." 
    }
  },
  {
    id: 118, unit: 4, topic: "Python", pattern: "MCQ", type: "MCQ", frequency: "High", isMustDo: false,
    question: "Output of print(2 ** 3)?",
    options: ["6", "8", "9", "5"],
    answer: { 
      finalAnswer: "8", 
      aim: "To identify the operator for exponentiation in Python.",
      theory: "Python uses the `**` operator as a dedicated power function. This is part of Python's clean syntax, avoiding the need for a separate math library (like `pow()` in C) for basic squaring or cubing. It has high precedence in the order of operations, evaluated before most other arithmetic symbols. This is a common 'Gotcha' for those moving from C where `^` might be mistaken for power (it is bitwise XOR in C).",
      explanation: "Answer: ** is the 'Power' operator.\n\nExplanation: 2 ** 3 means 2 x 2 x 2. In Python, this double-star is the shorthand for saying 'multiply this number by itself this many times'." 
    }
  },
  {
    id: 119, unit: 5, topic: "Python", pattern: "MCQ", type: "MCQ", frequency: "Very High", isMustDo: true,
    question: "Library for data manipulation and analysis?",
    options: ["NumPy", "Pandas", "Matplotlib", "SciPy"],
    answer: { 
      finalAnswer: "Pandas", 
      aim: "To identify the industry-standard library for data structure handling in Python.",
      theory: "Pandas is the primary library for data wrangling in Python. While NumPy provides the fast array back-end, Pandas provides the 'DataFrame'—a labeled table structure similar to an SQL table or Excel sheet. It allows users to filter rows, merge tables, and handle missing data with high-level commands, making it indispensable for modern data science and financial engineering.",
      explanation: "Answer: Pandas is the king of data manipulation.\n\nExplanation: While NumPy handles the numbers, Pandas handles the 'Spreadsheet'—giving you columns, rows, and searchable labels to make data easy to read." 
    }
  },
  {
    id: 120, unit: 5, topic: "NumPy", pattern: "MCQ", type: "MCQ", frequency: "High", isMustDo: false,
    question: "In NumPy, ndim attribute is used to find:",
    options: ["Number of elements", "Shape", "Number of dimensions", "Data type"],
    answer: { 
      finalAnswer: "Number of dimensions", 
      aim: "To understand the dimensional metadata of an N-dimensional array in NumPy.",
      theory: "The `ndim` attribute (N-Dimensions) returns an integer representing the number of axes in an array. A scalar has 0 dimensions, a vector has 1, a matrix has 2, and a tensor can have 3 or more. Before performing matrix multiplication, developers check `ndim` to ensure that they are actually working with a 2D structure rather than a flat list, preventing runtime shape errors.",
      explanation: "Answer: ndim tells you the 'Depth' of the array.\n\nExplanation: It tells you if you are looking at a line (1D), a flat square grid (2D), or a cube of numbers (3D)." 
    }
  },
  {
    id: 121, unit: 5, topic: "Pandas", pattern: "MCQ", type: "MCQ", frequency: "High", isMustDo: false,
    question: "Series data structure belongs to:",
    options: ["NumPy", "Pandas", "Scikit-learn", "TensorFlow"],
    answer: { 
      finalAnswer: "Pandas", 
      aim: "To identify the origin and type of the 'Series' data structure.",
      theory: "In Pandas, a 'Series' is a one-dimensional array capable of holding any data type (integers, strings, floats, etc.). It acts like a single column in a DataFrame. Each element in a Series is associated with a label, known as its index. This allows for fast, label-based lookups which are much more descriptive than traditional integer-based array indices.",
      explanation: "Answer: A Series is a 1D column in Pandas.\n\nExplanation: Think of a Series as a single column in an Excel sheet. Multiple Series joined together make up a full DataFrame (Table)." 
    }
  }
];
