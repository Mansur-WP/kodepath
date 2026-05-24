export interface Language {
  id: string;
  name: string;
  logo: string;
  brandColor: string;
  shortDescription: string;
  fullDescription: string;
  yearCreated: number;
  creator: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  categories: string[];
  useCases: string[];
  pros: string[];
  cons: string[];
  syntaxExample: string;
  syntaxLanguage: string;
  careerOpportunities: string[];
  frameworks: string[];
  relatedLanguages: string[];
  learningRoadmap: string[];
  beginnerProjects: string[];
  freeResources: { title: string; url: string }[];
}

export const languages: Language[] = [
  {
    id: "python",
    name: "Python",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    brandColor: "#3776AB",
    shortDescription: "Easy to read, incredibly powerful. The best starting point.",
    fullDescription: "Python reads almost like English, making it incredibly accessible for beginners. Yet, it's powerful enough to drive artificial intelligence, massive web applications, and data science. It is consistently ranked as one of the best first languages to learn.",
    yearCreated: 1991,
    creator: "Guido van Rossum",
    difficulty: "Beginner",
    categories: ["Web Dev", "AI/ML", "Data Science", "Backend"],
    useCases: ["Data Analysis", "Machine Learning", "Web Scraping", "Automation"],
    pros: ["Very readable syntax", "Massive community and libraries", "Highly versatile"],
    cons: ["Slower execution speed", "Not ideal for mobile apps", "High memory consumption"],
    syntaxExample: `def greet(name):\n    print(f"Hello, {name}! Welcome to coding.")\n\ngreet("Beginner")`,
    syntaxLanguage: "python",
    careerOpportunities: ["Data Scientist", "Backend Developer", "Machine Learning Engineer", "DevOps Engineer"],
    frameworks: ["Django", "Flask", "FastAPI", "Pandas", "TensorFlow"],
    relatedLanguages: ["javascript", "ruby", "r"],
    learningRoadmap: ["Basic syntax and variables", "Control flow (if/else, loops)", "Functions and modules", "Data structures (lists, dictionaries)", "Object-Oriented Programming", "Working with files and APIs"],
    beginnerProjects: ["Number guessing game", "To-do list app", "Simple web scraper", "Weather dashboard"],
    freeResources: [
      { title: "Official Python Tutorial", url: "https://docs.python.org/3/tutorial/" },
      { title: "Automate the Boring Stuff with Python", url: "https://automatetheboringstuff.com/" }
    ]
  },
  {
    id: "javascript",
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    brandColor: "#F7DF1E",
    shortDescription: "The language of the web. Makes websites interactive.",
    fullDescription: "JavaScript is the programming language that brings websites to life. While HTML and CSS build the structure and style, JavaScript adds interactivity—from simple animations to complex web applications. If you want to build for the browser, this is essential.",
    yearCreated: 1995,
    creator: "Brendan Eich",
    difficulty: "Beginner",
    categories: ["Web Dev", "Frontend", "Backend", "Mobile Dev"],
    useCases: ["Interactive Websites", "Web Applications", "Server Backend (Node.js)"],
    pros: ["Runs directly in the browser", "Huge ecosystem (npm)", "Full-stack capabilities"],
    cons: ["Quirky behavior with types", "Rapidly changing ecosystem", "Browser compatibility issues occasionally"],
    syntaxExample: `function greet(name) {\n  console.log(\`Hello, \${name}! Welcome to coding.\`);\n}\n\ngreet('Beginner');`,
    syntaxLanguage: "javascript",
    careerOpportunities: ["Frontend Developer", "Full Stack Developer", "Web Designer"],
    frameworks: ["React", "Vue", "Angular", "Node.js", "Express"],
    relatedLanguages: ["typescript", "python", "html-css"],
    learningRoadmap: ["Variables and Data Types", "Functions and Scope", "DOM Manipulation", "Events and Event Listeners", "Asynchronous JS (Promises, Fetch)"],
    beginnerProjects: ["Interactive Calculator", "Interactive Quiz", "Memory Card Game", "Browser Extension"],
    freeResources: [
      { title: "MDN Web Docs", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide" },
      { title: "JavaScript.info", url: "https://javascript.info/" }
    ]
  },
  {
    id: "typescript",
    name: "TypeScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    brandColor: "#3178C6",
    shortDescription: "JavaScript with superpowers (types). Catches errors early.",
    fullDescription: "TypeScript is a superset of JavaScript that adds static typing. It helps developers catch errors before they even run the code, making large projects much easier to manage. It compiles down to plain JavaScript, so it runs anywhere JS does.",
    yearCreated: 2012,
    creator: "Microsoft",
    difficulty: "Intermediate",
    categories: ["Web Dev", "Frontend", "Backend"],
    useCases: ["Large scale web apps", "Enterprise software", "Complex frontends"],
    pros: ["Catches errors at compile time", "Great editor tooling/autocomplete", "Easier refactoring"],
    cons: ["Requires compilation step", "Learning curve over JavaScript", "More boilerplate code"],
    syntaxExample: `function greet(name: string): void {\n  console.log(\`Hello, \${name}! Welcome to TypeScript.\`);\n}\n\ngreet('Developer');`,
    syntaxLanguage: "typescript",
    careerOpportunities: ["Frontend Engineer", "Full Stack Engineer", "Software Architect"],
    frameworks: ["React", "Angular", "NestJS", "Next.js"],
    relatedLanguages: ["javascript", "csharp", "java"],
    learningRoadmap: ["Basic Types", "Interfaces and Types", "Generics", "Classes and Access Modifiers", "Utility Types"],
    beginnerProjects: ["Convert a JS project to TS", "Type-safe To-Do App", "Weather App with typed API responses"],
    freeResources: [
      { title: "TypeScript Handbook", url: "https://www.typescriptlang.org/docs/handbook/intro.html" },
      { title: "TypeScript Deep Dive", url: "https://basarat.gitbook.io/typescript/" }
    ]
  },
  {
    id: "java",
    name: "Java",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    brandColor: "#007396",
    shortDescription: "Write once, run anywhere. The enterprise workhorse.",
    fullDescription: "Java is an object-oriented, class-based language designed to have as few implementation dependencies as possible. It is heavily used in enterprise environments, large systems, and Android app development.",
    yearCreated: 1995,
    creator: "James Gosling",
    difficulty: "Intermediate",
    categories: ["Backend", "Mobile Dev", "Enterprise"],
    useCases: ["Enterprise Software", "Android Apps", "Large-scale systems", "Financial Services"],
    pros: ["Platform independent (JVM)", "Strong memory management", "Excellent for large teams"],
    cons: ["Verbose syntax", "Slower startup time", "Steep learning curve for OOP"],
    syntaxExample: `public class Main {\n  public static void main(String[] args) {\n    System.out.println("Hello, World!");\n  }\n}`,
    syntaxLanguage: "java",
    careerOpportunities: ["Backend Developer", "Android Developer", "Enterprise Software Engineer"],
    frameworks: ["Spring Boot", "Hibernate", "Android SDK"],
    relatedLanguages: ["csharp", "kotlin", "cpp"],
    learningRoadmap: ["Syntax and Data Types", "Object-Oriented Programming (Classes, Objects, Inheritance)", "Collections Framework", "Exception Handling", "Multithreading", "Spring Boot Basics"],
    beginnerProjects: ["Bank Account Manager", "Library Management System", "Simple ATM Interface"],
    freeResources: [
      { title: "Oracle Java Tutorials", url: "https://docs.oracle.com/javase/tutorial/" },
      { title: "Java Programming for Complete Beginners", url: "https://mooc.fi/courses/2013/programming-part-1/" }
    ]
  },
  {
    id: "c",
    name: "C",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    brandColor: "#A8B9CC",
    shortDescription: "The grandfather of modern languages. Low-level and fast.",
    fullDescription: "C is a foundational procedural language that gives you direct access to memory. Learning C teaches you how computers actually work under the hood. It is still heavily used in operating systems and embedded devices.",
    yearCreated: 1972,
    creator: "Dennis Ritchie",
    difficulty: "Advanced",
    categories: ["Systems", "Embedded"],
    useCases: ["Operating Systems", "Embedded Systems", "Hardware Drivers", "Game Engines"],
    pros: ["Extremely fast", "Direct memory access", "Foundation for many other languages"],
    cons: ["Manual memory management", "No built-in object orientation", "Easy to create fatal bugs"],
    syntaxExample: `#include <stdio.h>\n\nint main() {\n  printf("Hello, World!\\n");\n  return 0;\n}`,
    syntaxLanguage: "c",
    careerOpportunities: ["Systems Programmer", "Embedded Engineer", "Hardware Engineer"],
    frameworks: ["Standard C Library", "POSIX"],
    relatedLanguages: ["cpp", "rust", "go"],
    learningRoadmap: ["Variables and Data Types", "Control Flow", "Functions", "Pointers and Memory", "Structs and Unions", "File I/O"],
    beginnerProjects: ["CLI Calculator", "Text-based Tic-Tac-Toe", "Simple Shell"],
    freeResources: [
      { title: "Learn C Programming", url: "https://www.learn-c.org/" }
    ]
  },
  {
    id: "cplusplus",
    name: "C++",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    brandColor: "#00599C",
    shortDescription: "C with objects. The king of high-performance gaming.",
    fullDescription: "C++ builds on C by adding object-oriented features. It is the language of choice when performance is absolutely critical, such as in AAA video games, high-frequency trading, and real-time simulations.",
    yearCreated: 1985,
    creator: "Bjarne Stroustrup",
    difficulty: "Advanced",
    categories: ["Game Dev", "Systems", "Performance"],
    useCases: ["AAA Game Development", "Game Engines", "High-frequency Trading", "Browsers"],
    pros: ["Incredible performance", "Fine-grained control over hardware", "Vast ecosystem"],
    cons: ["Extremely complex syntax", "Steep learning curve", "Difficult to master"],
    syntaxExample: `#include <iostream>\n\nint main() {\n  std::cout << "Hello, World!" << std::endl;\n  return 0;\n}`,
    syntaxLanguage: "cpp",
    careerOpportunities: ["Game Developer", "Systems Engineer", "Quantitative Developer"],
    frameworks: ["Unreal Engine", "Qt", "Boost"],
    relatedLanguages: ["c", "csharp", "rust"],
    learningRoadmap: ["Basic Syntax", "Object-Oriented Programming", "Pointers and References", "Memory Management (new/delete)", "Standard Template Library (STL)", "Smart Pointers"],
    beginnerProjects: ["Console RPG Game", "Inventory Management System", "Sudoku Game"],
    freeResources: [
      { title: "LearnCpp.com", url: "https://www.learncpp.com/" }
    ]
  },
  {
    id: "csharp",
    name: "C#",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    brandColor: "#239120",
    shortDescription: "Microsoft's flagship language. Excellent for game dev (Unity).",
    fullDescription: "C# is a modern, object-oriented language developed by Microsoft. It's heavily used in enterprise Windows applications, but it's also the primary language for the Unity game engine, making it a favorite among indie game developers.",
    yearCreated: 2000,
    creator: "Microsoft",
    difficulty: "Intermediate",
    categories: ["Backend", "Game Dev", "Enterprise"],
    useCases: ["Unity Game Dev", "Windows Desktop Apps", "Enterprise Web Apps (.NET)"],
    pros: ["Excellent tooling (Visual Studio)", "Great for game dev", "Strongly typed and safe"],
    cons: ["Historically tied to Windows (though changing)", "Steep learning curve for .NET"],
    syntaxExample: `using System;\n\nclass Program {\n  static void Main() {\n    Console.WriteLine("Hello World!");\n  }\n}`,
    syntaxLanguage: "csharp",
    careerOpportunities: ["Game Developer", ".NET Developer", "Enterprise Software Engineer"],
    frameworks: [".NET Core", "Unity", "ASP.NET"],
    relatedLanguages: ["java", "typescript", "cpp"],
    learningRoadmap: ["Syntax and Types", "Object-Oriented Principles", "Collections and LINQ", "Asynchronous Programming", "Entity Framework", "Unity Basics (optional)"],
    beginnerProjects: ["Simple 2D Unity Game", "Console To-Do List", "Expense Tracker"],
    freeResources: [
      { title: "C# documentation", url: "https://learn.microsoft.com/en-us/dotnet/csharp/" }
    ]
  },
  {
    id: "kotlin",
    name: "Kotlin",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
    brandColor: "#7F52FF",
    shortDescription: "Modern, concise Java alternative. Best for Android.",
    fullDescription: "Kotlin is a modern, statically typed language that runs on the JVM. Google announced it as the preferred language for Android app development. It's fully interoperable with Java but much more concise and safe.",
    yearCreated: 2011,
    creator: "JetBrains",
    difficulty: "Intermediate",
    categories: ["Mobile Dev", "Backend"],
    useCases: ["Android App Development", "Server-side applications", "Cross-platform mobile"],
    pros: ["Null safety (no NullPointerExceptions)", "Concise syntax", "100% Java interoperable"],
    cons: ["Slower compilation time than Java", "Smaller community compared to Java"],
    syntaxExample: `fun main() {\n  val name = "World"\n  println("Hello, $name!")\n}`,
    syntaxLanguage: "kotlin",
    careerOpportunities: ["Android Developer", "Mobile Engineer", "Backend Engineer"],
    frameworks: ["Android SDK", "Spring Boot", "Ktor", "Jetpack Compose"],
    relatedLanguages: ["java", "swift", "scala"],
    learningRoadmap: ["Basic Syntax and Variables", "Null Safety", "Functions and Lambdas", "Classes and Objects", "Coroutines", "Android Basics"],
    beginnerProjects: ["Simple Android Calculator app", "Note-taking Android app", "CLI Weather App"],
    freeResources: [
      { title: "Kotlin Official Docs", url: "https://kotlinlang.org/docs/home.html" }
    ]
  },
  {
    id: "swift",
    name: "Swift",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
    brandColor: "#F05138",
    shortDescription: "Apple's language. Beautiful syntax for iOS apps.",
    fullDescription: "Swift is Apple's powerful and intuitive programming language for iOS, macOS, watchOS, and tvOS. It's designed to be safe, fast, and expressive, replacing the older Objective-C.",
    yearCreated: 2014,
    creator: "Apple",
    difficulty: "Intermediate",
    categories: ["Mobile Dev"],
    useCases: ["iOS App Development", "macOS Desktop Apps", "Apple Ecosystem Apps"],
    pros: ["Clean, modern syntax", "Fast and safe by design", "Excellent native UI tools (SwiftUI)"],
    cons: ["Locked to Apple ecosystem", "Requires a Mac to develop for iOS"],
    syntaxExample: `let name = "World"\nprint("Hello, \\(name)!")`,
    syntaxLanguage: "swift",
    careerOpportunities: ["iOS Developer", "Mobile Engineer"],
    frameworks: ["SwiftUI", "UIKit", "Combine"],
    relatedLanguages: ["kotlin", "ruby", "rust"],
    learningRoadmap: ["Variables and Types", "Optionals", "Control Flow", "Structs vs Classes", "Protocols", "SwiftUI Basics"],
    beginnerProjects: ["Tip Calculator iOS App", "Flashcard iOS App", "Simple Weather App"],
    freeResources: [
      { title: "Swift.org", url: "https://www.swift.org/" },
      { title: "100 Days of SwiftUI", url: "https://www.hackingwithswift.com/100/swiftui" }
    ]
  },
  {
    id: "go",
    name: "Go",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
    brandColor: "#00ADD8",
    shortDescription: "Built by Google for high-performance servers and cloud.",
    fullDescription: "Go (or Golang) is an open-source programming language supported by Google. It makes it easy to build simple, reliable, and efficient software. It is famous for its excellent concurrency handling, making it perfect for cloud infrastructure.",
    yearCreated: 2009,
    creator: "Google",
    difficulty: "Intermediate",
    categories: ["Backend", "Cloud", "Systems"],
    useCases: ["Cloud Infrastructure (Docker, Kubernetes are written in Go)", "Microservices", "Network Programming"],
    pros: ["Extremely fast", "Simple syntax", "Built-in concurrency (Goroutines)"],
    cons: ["Lacks some modern features (generics were only added recently)", "Strict rules (unused variables cause errors)"],
    syntaxExample: `package main\n\nimport "fmt"\n\nfunc main() {\n  fmt.Println("Hello, World!")\n}`,
    syntaxLanguage: "go",
    careerOpportunities: ["Backend Engineer", "Cloud Native Engineer", "DevOps Engineer"],
    frameworks: ["Gin", "Fiber", "Echo"],
    relatedLanguages: ["c", "rust", "python"],
    learningRoadmap: ["Packages and Variables", "Functions", "Structs and Pointers", "Interfaces", "Goroutines and Channels", "Building a REST API"],
    beginnerProjects: ["CLI Task Manager", "Simple Web Server", "Concurrent URL Checker"],
    freeResources: [
      { title: "A Tour of Go", url: "https://go.dev/tour/welcome/1" },
      { title: "Go by Example", url: "https://gobyexample.com/" }
    ]
  },
  {
    id: "rust",
    name: "Rust",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg",
    brandColor: "#000000",
    shortDescription: "Fast, safe, and loved by developers. The future of systems.",
    fullDescription: "Rust is a systems programming language that focuses on safety, especially safe concurrency. It guarantees memory safety without needing a garbage collector, making it incredibly fast. It is consistently voted the 'most loved' language by developers.",
    yearCreated: 2010,
    creator: "Graydon Hoare (Mozilla)",
    difficulty: "Advanced",
    categories: ["Systems", "Backend", "WebAssembly"],
    useCases: ["Operating Systems", "Browser Components", "High-performance servers", "CLI Tools"],
    pros: ["Memory safe without garbage collection", "Blazing fast", "Great compiler errors"],
    cons: ["Very steep learning curve (the 'borrow checker')", "Slower compilation times"],
    syntaxExample: `fn main() {\n    println!("Hello, world!");\n}`,
    syntaxLanguage: "rust",
    careerOpportunities: ["Systems Engineer", "Backend Developer", "Blockchain Developer"],
    frameworks: ["Actix", "Rocket", "Tauri", "Yew"],
    relatedLanguages: ["cpp", "c", "go"],
    learningRoadmap: ["Ownership and Borrowing", "Lifetimes", "Structs and Enums", "Error Handling", "Concurrency", "Traits"],
    beginnerProjects: ["CLI To-Do App", "Guessing Game", "Simple HTTP Server"],
    freeResources: [
      { title: "The Rust Programming Language Book", url: "https://doc.rust-lang.org/book/" }
    ]
  },
  {
    id: "php",
    name: "PHP",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    brandColor: "#777BB4",
    shortDescription: "Powers nearly 80% of the web. Essential for WordPress.",
    fullDescription: "PHP is a popular general-purpose scripting language that is especially suited to web development. It is the language behind WordPress, meaning it powers a massive portion of the internet. It has evolved significantly and modern PHP is fast and robust.",
    yearCreated: 1995,
    creator: "Rasmus Lerdorf",
    difficulty: "Beginner",
    categories: ["Web Dev", "Backend"],
    useCases: ["Server-side Web Dev", "Content Management Systems (WordPress)", "E-commerce"],
    pros: ["Easy deployment", "Massive amount of hosting options", "Huge ecosystem (WordPress, Laravel)"],
    cons: ["Inconsistent naming conventions", "Can easily write messy code if not careful"],
    syntaxExample: `<?php\n  $name = "World";\n  echo "Hello, " . $name . "!";\n?>`,
    syntaxLanguage: "php",
    careerOpportunities: ["Backend Developer", "WordPress Developer", "Full Stack Developer"],
    frameworks: ["Laravel", "Symfony", "WordPress"],
    relatedLanguages: ["javascript", "ruby", "python"],
    learningRoadmap: ["Syntax and Variables", "Forms and Superglobals", "Database connection (PDO/MySQLi)", "Object-Oriented PHP", "MVC Architecture", "Laravel Basics"],
    beginnerProjects: ["Simple Blog", "Login/Registration System", "Contact Form Builder"],
    freeResources: [
      { title: "PHP The Right Way", url: "https://phptherightway.com/" }
    ]
  },
  {
    id: "ruby",
    name: "Ruby",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg",
    brandColor: "#CC342D",
    shortDescription: "Optimized for developer happiness. Famous for Ruby on Rails.",
    fullDescription: "Ruby is a dynamic, open-source programming language with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write. It is best known for the Ruby on Rails framework, which revolutionized rapid web development.",
    yearCreated: 1995,
    creator: "Yukihiro Matsumoto",
    difficulty: "Beginner",
    categories: ["Web Dev", "Backend"],
    useCases: ["Rapid Web Application Development", "Startups", "Prototyping"],
    pros: ["Beautiful, human-readable syntax", "Incredibly fast to build apps (with Rails)", "Strong developer community"],
    cons: ["Slower execution speed", "Declining popularity compared to JS/Python"],
    syntaxExample: `def greet(name)\n  puts "Hello, #{name}!"\nend\n\ngreet("World")`,
    syntaxLanguage: "ruby",
    careerOpportunities: ["Backend Developer", "Full Stack Developer", "Startup Engineer"],
    frameworks: ["Ruby on Rails", "Sinatra"],
    relatedLanguages: ["python", "javascript", "elixir"],
    learningRoadmap: ["Basic Syntax", "Blocks and Procs", "Object-Oriented Programming", "Modules and Mixins", "Ruby on Rails Basics", "ActiveRecord Database querying"],
    beginnerProjects: ["URL Shortener", "Simple Blog Engine", "Twitter Clone"],
    freeResources: [
      { title: "Ruby in 20 Minutes", url: "https://www.ruby-lang.org/en/documentation/quickstart/" },
      { title: "The Odin Project", url: "https://www.theodinproject.com/" }
    ]
  },
  {
    id: "dart",
    name: "Dart",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
    brandColor: "#0175C2",
    shortDescription: "The engine behind Flutter for cross-platform apps.",
    fullDescription: "Dart is a client-optimized language for fast apps on any platform. While it can be used for many things, it is almost exclusively known as the language for Flutter, Google's UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase.",
    yearCreated: 2011,
    creator: "Google",
    difficulty: "Beginner",
    categories: ["Mobile Dev", "Frontend"],
    useCases: ["Cross-platform Mobile Apps (Flutter)", "Web Applications", "Desktop Apps"],
    pros: ["Write once, deploy to iOS/Android", "Fast compilation", "Great UI building capabilities"],
    cons: ["Mostly tied to Flutter ecosystem", "Smaller backend community"],
    syntaxExample: `void main() {\n  String name = 'World';\n  print('Hello $name');\n}`,
    syntaxLanguage: "dart",
    careerOpportunities: ["Mobile Developer", "Flutter Engineer", "Frontend Developer"],
    frameworks: ["Flutter"],
    relatedLanguages: ["javascript", "java", "csharp"],
    learningRoadmap: ["Basic Syntax", "Functions and Null Safety", "Object-Oriented Dart", "Asynchronous Dart", "Flutter Widgets", "State Management"],
    beginnerProjects: ["Counter App", "Expense Tracker App", "Weather App with API"],
    freeResources: [
      { title: "Dart Language Tour", url: "https://dart.dev/language" }
    ]
  },
  {
    id: "r",
    name: "R",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg",
    brandColor: "#276DC3",
    shortDescription: "The language of statistics and data visualization.",
    fullDescription: "R is a programming language and free software environment for statistical computing and graphics. It is widely used among statisticians and data miners for developing statistical software and data analysis.",
    yearCreated: 1993,
    creator: "Ross Ihaka and Robert Gentleman",
    difficulty: "Intermediate",
    categories: ["Data Science", "AI/ML"],
    useCases: ["Statistical Analysis", "Data Visualization", "Bioinformatics", "Academic Research"],
    pros: ["Incredible data visualization (ggplot2)", "Huge array of statistical packages", "Industry standard for academia"],
    cons: ["Steep learning curve for non-statisticians", "Slower than Python", "Not suited for general purpose programming"],
    syntaxExample: `name <- "World"\nprint(paste("Hello,", name))`,
    syntaxLanguage: "r",
    careerOpportunities: ["Data Analyst", "Data Scientist", "Statistician", "Quantitative Researcher"],
    frameworks: ["ggplot2", "Shiny", "dplyr"],
    relatedLanguages: ["python", "sql", "julia"],
    learningRoadmap: ["Vectors and Data Frames", "Data Manipulation (dplyr)", "Data Visualization (ggplot2)", "Statistical Testing", "Writing Functions", "Creating Dashboards (Shiny)"],
    beginnerProjects: ["Data Visualization Dashboard", "Statistical Analysis Report", "Predictive Model Script"],
    freeResources: [
      { title: "R for Data Science", url: "https://r4ds.had.co.nz/" }
    ]
  },
  {
    id: "sql",
    name: "SQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    brandColor: "#4479A1",
    shortDescription: "The universal language of data and databases.",
    fullDescription: "Structured Query Language (SQL) is a domain-specific language used in programming and designed for managing data held in a relational database management system. Almost every application uses a database, making SQL an essential skill.",
    yearCreated: 1974,
    creator: "Donald Chamberlin and Raymond Boyce",
    difficulty: "Beginner",
    categories: ["Backend", "Data Science", "Database"],
    useCases: ["Database Management", "Data Analytics", "Business Intelligence", "Backend Storage"],
    pros: ["Universal standard for relational databases", "Declarative (you describe what you want)", "High demand skill"],
    cons: ["Syntax varies slightly between databases (MySQL vs PostgreSQL)", "Not a general purpose programming language"],
    syntaxExample: `SELECT id, name, email \nFROM users \nWHERE status = 'active' \nORDER BY created_at DESC;`,
    syntaxLanguage: "sql",
    careerOpportunities: ["Database Administrator", "Data Analyst", "Backend Engineer", "Data Engineer"],
    frameworks: ["PostgreSQL", "MySQL", "SQLite"],
    relatedLanguages: ["python", "java", "php"],
    learningRoadmap: ["Basic CRUD operations (SELECT, INSERT, UPDATE, DELETE)", "Filtering and Sorting (WHERE, ORDER BY)", "Aggregation (GROUP BY, HAVING)", "Joins (INNER, LEFT, RIGHT)", "Subqueries and CTEs", "Database Design and Normalization"],
    beginnerProjects: ["Design a Library Database", "Build complex queries for an e-commerce schema", "Data analysis query set"],
    freeResources: [
      { title: "SQLBolt", url: "https://sqlbolt.com/" },
      { title: "Mode SQL Tutorial", url: "https://mode.com/sql-tutorial/" }
    ]
  },
  {
    id: "html-css",
    name: "HTML/CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    brandColor: "#E34F26",
    shortDescription: "The fundamental building blocks of the web.",
    fullDescription: "HTML (HyperText Markup Language) and CSS (Cascading Style Sheets) are the foundation of every website. HTML provides the structure and content, while CSS handles the visual layout, colors, and responsive design. They are not programming languages per se, but are essential first steps for any web developer.",
    yearCreated: 1993,
    creator: "Tim Berners-Lee",
    difficulty: "Beginner",
    categories: ["Web Dev", "Frontend"],
    useCases: ["Web Design", "UI Development", "Responsive Layouts"],
    pros: ["Extremely visual and rewarding", "Essential for any web-related role", "Easy to get started"],
    cons: ["CSS layout can be frustrating to master", "Not Turing complete (can't write logic)"],
    syntaxExample: `<div class="container">\n  <h1>Hello World</h1>\n  <p>Welcome to the web.</p>\n</div>`,
    syntaxLanguage: "html",
    careerOpportunities: ["Frontend Developer", "Web Designer", "UI Developer"],
    frameworks: ["Tailwind CSS", "Bootstrap", "Sass"],
    relatedLanguages: ["javascript", "typescript"],
    learningRoadmap: ["Semantic HTML Tags", "Forms and Inputs", "CSS Selectors and Specificity", "Flexbox Layout", "CSS Grid Layout", "Responsive Design and Media Queries"],
    beginnerProjects: ["Personal Portfolio Page", "Landing Page Clone", "CSS Art/Animations"],
    freeResources: [
      { title: "Interneting Is Hard", url: "https://internetingishard.netlify.app/" },
      { title: "freeCodeCamp HTML/CSS", url: "https://www.freecodecamp.org/learn/responsive-web-design/" }
    ]
  },
  {
    id: "bash",
    name: "Bash",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
    brandColor: "#4EAA25",
    shortDescription: "The language of the terminal and automation.",
    fullDescription: "Bash is a Unix shell and command language. It is the default shell on Linux and macOS. Learning Bash allows you to navigate your computer's file system efficiently, automate repetitive tasks, and manage servers.",
    yearCreated: 1989,
    creator: "Brian Fox",
    difficulty: "Intermediate",
    categories: ["Systems", "Cloud", "DevOps"],
    useCases: ["Server Administration", "Task Automation", "DevOps Pipelines", "Scripting"],
    pros: ["Available on almost all servers natively", "Incredibly powerful for file operations", "Essential for DevOps"],
    cons: ["Cryptic syntax", "Difficult to debug", "Not suited for complex applications"],
    syntaxExample: `#!/bin/bash\nNAME="World"\necho "Hello, $NAME!"\nls -la`,
    syntaxLanguage: "bash",
    careerOpportunities: ["DevOps Engineer", "System Administrator", "Cloud Engineer"],
    frameworks: ["Oh My Zsh (Zsh is similar)"],
    relatedLanguages: ["python", "go", "c"],
    learningRoadmap: ["Basic Navigation Commands (cd, ls, pwd)", "File Operations (cp, mv, rm)", "Pipes and Redirects", "Variables and Loops in Scripts", "Grep, Awk, and Sed", "Writing Automation Scripts"],
    beginnerProjects: ["Automated Backup Script", "System Information Dashboard", "Bulk File Renamer"],
    freeResources: [
      { title: "Missing Semester of Your CS Education", url: "https://missing.csail.mit.edu/" }
    ]
  },
  {
    id: "lua",
    name: "Lua",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/lua/lua-original.svg",
    brandColor: "#2C2D72",
    shortDescription: "Lightweight scripting language loved by game engines.",
    fullDescription: "Lua is a lightweight, high-level, multi-paradigm programming language designed primarily for embedded use in applications. It is incredibly popular in the gaming industry as a scripting language (used in Roblox, World of Warcraft, and thousands of indie games).",
    yearCreated: 1993,
    creator: "Roberto Ierusalimschy",
    difficulty: "Beginner",
    categories: ["Game Dev", "Embedded", "Scripting"],
    useCases: ["Game Scripting (Roblox, Love2D)", "Application Scripting", "Embedded Systems"],
    pros: ["Very easy to learn", "Extremely fast execution", "Tiny memory footprint"],
    cons: ["Limited standard library", "Arrays start at 1 (controversial)"],
    syntaxExample: `local name = "World"\nprint("Hello, " .. name .. "!")`,
    syntaxLanguage: "lua",
    careerOpportunities: ["Game Scripter", "Roblox Developer", "UI Programmer (Games)"],
    frameworks: ["Love2D", "Roblox Studio", "Corona"],
    relatedLanguages: ["python", "javascript", "cplusplus"],
    learningRoadmap: ["Variables and Types", "Tables (Lua's main data structure)", "Control Structures", "Functions", "Metatables", "Game Dev Basics (Love2D or Roblox)"],
    beginnerProjects: ["Simple Love2D Game", "Roblox Obby (Obstacle Course)", "Configuration Parser"],
    freeResources: [
      { title: "Programming in Lua", url: "https://www.lua.org/pil/" }
    ]
  },
  {
    id: "scala",
    name: "Scala",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scala/scala-original.svg",
    brandColor: "#DC322F",
    shortDescription: "Scalable language blending object-oriented and functional.",
    fullDescription: "Scala combines object-oriented and functional programming in one concise, high-level language. It runs on the Java Virtual Machine (JVM) and is heavily used in big data ecosystems, particularly with Apache Spark.",
    yearCreated: 2004,
    creator: "Martin Odersky",
    difficulty: "Advanced",
    categories: ["Data Science", "Backend", "Enterprise"],
    useCases: ["Big Data Processing (Apache Spark)", "Distributed Systems", "Complex Backend Architectures"],
    pros: ["Powerful functional programming features", "Highly scalable", "Interoperable with Java"],
    cons: ["Steep learning curve", "Complex type system", "Slower compile times"],
    syntaxExample: `object HelloWorld {\n  def main(args: Array[String]): Unit = {\n    println("Hello, world!")\n  }\n}`,
    syntaxLanguage: "scala",
    careerOpportunities: ["Data Engineer", "Backend Engineer", "Big Data Developer"],
    frameworks: ["Play Framework", "Akka", "Apache Spark"],
    relatedLanguages: ["java", "kotlin", "haskell"],
    learningRoadmap: ["Basic Syntax", "Functional Programming Concepts", "Immutability", "Pattern Matching", "Collections", "Concurrency (Akka)"],
    beginnerProjects: ["Simple CLI App", "Data processing script", "REST API with Play"],
    freeResources: [
      { title: "Scala Official Documentation", url: "https://docs.scala-lang.org/" }
    ]
  }
];
