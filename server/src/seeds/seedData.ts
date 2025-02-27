import { Book } from "../models/bookModel.js";

export const books = [
    {
        title: "The Pragmatic Programmer",
        author: "Andrew Hunt and David Thomas",
        publicationDate: new Date("1999-10-20"),
        isbn: "978-0201616224",
        categories: ["Software Development", "Programming Practices", "Career Development"],
        description: "A guide to software development best practices, covering tips, techniques, and philosophies for writing better code."
      },
      {
        title: "Clean Code: A Handbook of Agile Software Craftsmanship",
        author: "Robert C. Martin",
        publicationDate: new Date("2008-08-01"),
        isbn: "978-0132350884",
        categories: ["Software Development", "Programming Practices", "Agile"],
        description: "Explores the principles and practices of writing clean, maintainable, and efficient code."
      },
      {
        title: "Code Complete: A Practical Handbook of Software Construction",
        author: "Steve McConnell",
        publicationDate: new Date("1993-01-01"),
        isbn: "978-0735619678",
        categories: ["Software Development", "Programming Practices", "Software Construction"],
        description: "A detailed guide to software construction techniques, focusing on quality and maintainability."
      },
      {
        title: "Refactoring: Improving the Design of Existing Code",
        author: "Martin Fowler",
        publicationDate: new Date("1999-07-08"),
        isbn: "978-0201485677",
        categories: ["Software Development", "Refactoring", "Programming Practices"],
        description: "Covers techniques for restructuring existing code to improve its readability and maintainability."
      },
      {
        title: "The Mythical Man-Month: Essays on Software Engineering",
        author: "Frederick P. Brooks Jr.",
        publicationDate: new Date("1975-01-01"),
        isbn: "978-0201835953",
        categories: ["Software Engineering", "Project Management", "Software Development"],
        description: "A collection of essays on software project management and the challenges of large-scale development."
      },
      {
        title: "Design Patterns: Elements of Reusable Object-Oriented Software",
        author: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
        publicationDate: new Date("1994-10-31"),
        isbn: "978-0201633610",
        categories: ["Software Development", "Design Patterns", "Object-Oriented Programming"],
        description: "A foundational book introducing 23 design patterns used in object-oriented programming."
      },
      {
        title: "The Clean Coder: A Code of Conduct for Professional Programmers",
        author: "Robert C. Martin",
        publicationDate: new Date("2011-05-23"),
        isbn: "978-0137081073",
        categories: ["Software Development", "Career Development", "Professionalism"],
        description: "Focuses on professionalism in software development, covering ethics, discipline, and responsibility."
      },
      {
        title: "Software Engineering: A Practitioner’s Approach",
        author: "Roger S. Pressman",
        publicationDate: new Date("1982-01-01"),
        isbn: "978-0078022128",
        categories: ["Software Engineering", "Development Process", "Project Management"],
        description: "Covers software engineering principles, methodologies, and best practices."
      },
      {
        title: "The Art of Scalability",
        author: "Martin L. Abbott and Michael T. Fisher",
        publicationDate: new Date("2009-12-21"),
        isbn: "978-0137030422",
        categories: ["Software Architecture", "Scalability", "Performance Optimization"],
        description: "Explores strategies for designing scalable applications and handling high-demand systems."
      },
      {
        title: "Continuous Delivery: Reliable Software Releases through Build, Test, and Deployment Automation",
        author: "Jez Humble and David Farley",
        publicationDate: new Date("2010-08-27"),
        isbn: "978-0321601919",
        categories: ["Software Deployment", "Automation", "DevOps"],
        description: "Covers techniques for automating software delivery to ensure reliable and efficient deployment."
      },
      {
        title: "Introduction to the Theory of Computation",
        author: "Michael Sipser",
        publicationDate: new Date("1996-01-01"),
        isbn: "978-1133187790",
        categories: ["Computer Science", "Computation Theory", "Algorithms"],
        description: "A foundational book on computational theory, including automata, formal languages, and complexity theory."
      },
      {
        title: "The Algorithm Design Manual",
        author: "Steven S. Skiena",
        publicationDate: new Date("1998-01-01"),
        isbn: "978-3030542559",
        categories: ["Algorithms", "Data Structures", "Computer Science"],
        description: "Covers algorithm design techniques and practical applications with a focus on efficiency and performance."
      },
      {
        title: "Algorithms",
        author: "Robert Sedgewick and Kevin Wayne",
        publicationDate: new Date("2011-01-01"),
        isbn: "978-0321573513",
        categories: ["Algorithms", "Data Structures", "Programming"],
        description: "An in-depth exploration of fundamental algorithms and data structures."
      },
      {
        title: "Introduction to Algorithms",
        author: "Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, Clifford Stein",
        publicationDate: new Date("1990-07-31"),
        isbn: "978-0262046305",
        categories: ["Algorithms", "Computer Science", "Data Structures"],
        description: "A comprehensive introduction to algorithms, widely used as a university textbook."
      },
      {
        title: "Grokking Algorithms",
        author: "Aditya Bhargava",
        publicationDate: new Date("2016-05-01"),
        isbn: "978-1617292231",
        categories: ["Algorithms", "Computer Science", "Programming"],
        description: "An illustrated and beginner-friendly guide to algorithms and data structures."
      },
      {
        title: "Computer Networking: A Top-Down Approach",
        author: "James F. Kurose and Keith W. Ross",
        publicationDate: new Date("2000-01-01"),
        isbn: "978-0133594140",
        categories: ["Networking", "Computer Science", "Internet Technologies"],
        description: "Explores networking concepts from the application layer down to the physical layer."
      },
      {
        title: "Artificial Intelligence: A Modern Approach",
        author: "Stuart Russell and Peter Norvig",
        publicationDate: new Date("1995-12-01"),
        isbn: "978-0134610993",
        categories: ["Artificial Intelligence", "Machine Learning", "Computer Science"],
        description: "A comprehensive introduction to artificial intelligence and its real-world applications."
      },
      {
        title: "Compilers: Principles, Techniques, and Tools",
        author: "Alfred V. Aho, Monica S. Lam, Ravi Sethi, Jeffrey D. Ullman",
        publicationDate: new Date("1986-01-01"),
        isbn: "978-0321486813",
        categories: ["Compilers", "Computer Science", "Programming Languages"],
        description: "A deep dive into compiler design, also known as the 'Dragon Book'."
      },
      {
        title: "Structure and Interpretation of Computer Programs",
        author: "Harold Abelson, Gerald Jay Sussman, Julie Sussman",
        publicationDate: new Date("1985-01-01"),
        isbn: "978-0262510875",
        categories: ["Programming", "Computer Science", "Software Development"],
        description: "A classic MIT textbook covering fundamental programming concepts using Scheme."
      },
      {
        title: "Code: The Hidden Language of Computer Hardware and Software",
        author: "Charles Petzold",
        publicationDate: new Date("1999-10-21"),
        isbn: "978-0735611313",
        categories: ["Computer Science", "Electronics", "Programming"],
        description: "Explains the inner workings of computers and binary code in an accessible way."
      },
      {
        title: "The Web Application Hacker’s Handbook",
        author: "Dafydd Stuttard and Marcus Pinto",
        publicationDate: new Date("2007-01-01"),
        isbn: "978-1118026472",
        categories: ["Cybersecurity", "Hacking", "Web Security"],
        description: "A hands-on guide to finding and exploiting security vulnerabilities in web applications."
      },
      {
        title: "Hacking: The Art of Exploitation",
        author: "Jon Erickson",
        publicationDate: new Date("2003-01-01"),
        isbn: "978-1593271442",
        categories: ["Cybersecurity", "Hacking", "Security Exploits"],
        description: "Teaches hacking techniques with a focus on understanding computer systems at a deep level."
      },
      {
        title: "The Code Book: The Science of Secrecy from Ancient Egypt to Quantum Cryptography",
        author: "Simon Singh",
        publicationDate: new Date("1999-01-01"),
        isbn: "978-1857028799",
        categories: ["Cryptography", "Cybersecurity", "History"],
        description: "Explores the history and evolution of cryptography from ancient times to modern-day encryption."
      },
      {
        title: "Applied Cryptography: Protocols, Algorithms, and Source Code in C",
        author: "Bruce Schneier",
        publicationDate: new Date("1993-01-01"),
        isbn: "978-1119096726",
        categories: ["Cryptography", "Cybersecurity", "Encryption"],
        description: "A foundational text covering cryptographic techniques and algorithms."
      },
      {
        title: "Security Engineering: A Guide to Building Dependable Distributed Systems",
        author: "Ross J. Anderson",
        publicationDate: new Date("2001-01-01"),
        isbn: "978-1119642787",
        categories: ["Cybersecurity", "Security Engineering", "Software Security"],
        description: "Explains how to build secure systems through proper design and engineering principles."
      },
      {
        title: "Practical Malware Analysis",
        author: "Michael Sikorski and Andrew Honig",
        publicationDate: new Date("2012-01-01"),
        isbn: "978-1593272906",
        categories: ["Cybersecurity", "Malware Analysis", "Reverse Engineering"],
        description: "A guide to dissecting and analyzing malicious software to understand and mitigate threats."
      },
      {
        title: "Ghost in the Wires: My Adventures as the World’s Most Wanted Hacker",
        author: "Kevin Mitnick",
        publicationDate: new Date("2011-01-01"),
        isbn: "978-0316037709",
        categories: ["Cybersecurity", "Hacking", "True Crime"],
        description: "A thrilling autobiography of Kevin Mitnick, one of the world’s most famous hackers."
      },
      {
        title: "Blue Team Handbook: Incident Response Edition",
        author: "Don Murdoch",
        publicationDate: new Date("2014-01-01"),
        isbn: "978-1500734756",
        categories: ["Cybersecurity", "Incident Response", "Defensive Security"],
        description: "A practical guide for cybersecurity professionals focused on defensive security measures."
      },
      {
        title: "Black Hat Python: Python Programming for Hackers and Pentesters",
        author: "Justin Seitz",
        publicationDate: new Date("2014-01-01"),
        isbn: "978-1593275907",
        categories: ["Cybersecurity", "Hacking", "Python Programming"],
        description: "Teaches how to use Python for penetration testing and security research."
      },
      {
        title: "Social Engineering: The Science of Human Hacking",
        author: "Christopher Hadnagy",
        publicationDate: new Date("2010-01-01"),
        isbn: "978-1119433385",
        categories: ["Cybersecurity", "Social Engineering", "Security Awareness"],
        description: "Explores the psychology behind social engineering and how to defend against it."
      },
      {
        title: "The Phoenix Project: A Novel About IT, DevOps, and Helping Your Business Win",
        author: "Gene Kim, Kevin Behr, George Spafford",
        publicationDate: new Date("2013-01-10"),
        isbn: "978-0988262591",
        categories: ["DevOps", "IT Management", "Software Development"],
        description: "A business novel illustrating DevOps principles and their impact on IT and business efficiency."
      },
      {
        title: "The DevOps Handbook",
        author: "Gene Kim, Patrick Debois, John Willis, Jez Humble",
        publicationDate: new Date("2016-10-06"),
        isbn: "978-1942788003",
        categories: ["DevOps", "Software Engineering", "Automation"],
        description: "A comprehensive guide to implementing DevOps practices in IT organizations."
      },
      {
        title: "Site Reliability Engineering: How Google Runs Production Systems",
        author: "Niall Richard Murphy, Betsy Beyer, Chris Jones, Jennifer Petoff",
        publicationDate: new Date("2016-03-23"),
        isbn: "978-1491929124",
        categories: ["DevOps", "Site Reliability Engineering", "Cloud Computing"],
        description: "Explores Google's approach to reliability and operational excellence in large-scale systems."
      },
      {
        title: "Cloud Computing: Concepts, Technology & Architecture",
        author: "Thomas Erl, Ricardo Puttini, Zaigham Mahmood",
        publicationDate: new Date("2013-04-01"),
        isbn: "978-0133387520",
        categories: ["Cloud Computing", "Networking", "IT Infrastructure"],
        description: "An in-depth overview of cloud computing models, architectures, and technologies."
      },
      {
        title: "Terraform: Up & Running",
        author: "Yevgeniy Brikman",
        publicationDate: new Date("2017-09-01"),
        isbn: "978-1492046905",
        categories: ["DevOps", "Infrastructure as Code", "Cloud Computing"],
        description: "A practical guide to using Terraform for automating infrastructure in cloud environments."
      },
      {
        title: "Kubernetes Up & Running",
        author: "Kelsey Hightower, Brendan Burns, Joe Beda",
        publicationDate: new Date("2017-09-07"),
        isbn: "978-1492046530",
        categories: ["DevOps", "Cloud Computing", "Containerization"],
        description: "An introduction to Kubernetes and its role in managing containerized applications."
      },
      {
        title: "Google Cloud Platform for Architects",
        author: "Vitthal Srinivasan, Ted Hunter",
        publicationDate: new Date("2018-11-30"),
        isbn: "978-1788834307",
        categories: ["Cloud Computing", "Google Cloud", "IT Infrastructure"],
        description: "Explains how to architect solutions using Google Cloud Platform services."
      },
      {
        title: "Continuous Delivery: Reliable Software Releases through Build, Test, and Deployment Automation",
        author: "Jez Humble, David Farley",
        publicationDate: new Date("2010-08-06"),
        isbn: "978-0321601919",
        categories: ["DevOps", "Software Deployment", "Automation"],
        description: "A detailed guide on continuous integration and delivery for software development teams."
      },
      {
        title: "Mastering AWS Security",
        author: "Albert Anthony",
        publicationDate: new Date("2017-10-27"),
        isbn: "978-1788472950",
        categories: ["Cloud Computing", "AWS", "Cybersecurity"],
        description: "A deep dive into securing AWS environments and mitigating cloud security risks."
      },
      {
        title: "Docker Deep Dive",
        author: "Nigel Poulton",
        publicationDate: new Date("2017-06-01"),
        isbn: "978-1521822807",
        categories: ["DevOps", "Containerization", "Software Deployment"],
        description: "A beginner-friendly yet comprehensive guide to Docker and container technologies."
      },
      {
        title: "Artificial Intelligence: A Modern Approach",
        author: "Stuart Russell and Peter Norvig",
        publicationDate: new Date("1995-12-01"),
        isbn: "978-0134610993",
        categories: ["Artificial Intelligence", "Machine Learning", "Computer Science"],
        description: "A comprehensive introduction to artificial intelligence and its real-world applications."
      },
      {
        title: "Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow",
        author: "Aurélien Géron",
        publicationDate: new Date("2017-03-30"),
        isbn: "978-1492032649",
        categories: ["Machine Learning", "AI", "Data Science"],
        description: "A practical guide to building machine learning models using popular Python libraries."
      },
      {
        title: "Deep Learning",
        author: "Ian Goodfellow, Yoshua Bengio, Aaron Courville",
        publicationDate: new Date("2016-11-18"),
        isbn: "978-0262035613",
        categories: ["Deep Learning", "Neural Networks", "AI"],
        description: "An authoritative textbook on deep learning and neural networks."
      },
      {
        title: "Python Machine Learning",
        author: "Sebastian Raschka, Vahid Mirjalili",
        publicationDate: new Date("2015-09-23"),
        isbn: "978-1787125932",
        categories: ["Machine Learning", "Python", "Data Science"],
        description: "Explains machine learning concepts with hands-on Python examples."
      },
      {
        title: "Pattern Recognition and Machine Learning",
        author: "Christopher M. Bishop",
        publicationDate: new Date("2006-08-17"),
        isbn: "978-0387310732",
        categories: ["Machine Learning", "Pattern Recognition", "AI"],
        description: "A mathematical approach to pattern recognition and machine learning models."
      },
      {
        title: "The Hundred-Page Machine Learning Book",
        author: "Andriy Burkov",
        publicationDate: new Date("2019-01-13"),
        isbn: "978-1999579500",
        categories: ["Machine Learning", "AI", "Data Science"],
        description: "A concise, easy-to-understand introduction to machine learning concepts."
      },
      {
        title: "Speech and Language Processing",
        author: "Daniel Jurafsky and James H. Martin",
        publicationDate: new Date("2000-01-01"),
        isbn: "978-0131873216",
        categories: ["AI", "Natural Language Processing", "Speech Recognition"],
        description: "A leading textbook on NLP, covering language models and speech processing."
      },
      {
        title: "Machine Learning Yearning",
        author: "Andrew Ng",
        publicationDate: new Date("2018-01-01"),
        isbn: "B07F5BLRFT",
        categories: ["Machine Learning", "AI", "Project Management"],
        description: "A practical guide to building and improving machine learning models."
      },
      {
        title: "Grokking Deep Learning",
        author: "Andrew W. Trask",
        publicationDate: new Date("2019-01-01"),
        isbn: "978-1617293702",
        categories: ["Deep Learning", "Neural Networks", "AI"],
        description: "A hands-on introduction to deep learning concepts through Python coding exercises."
      },
      {
        title: "Probabilistic Graphical Models: Principles and Techniques",
        author: "Daphne Koller and Nir Friedman",
        publicationDate: new Date("2009-07-31"),
        isbn: "978-0262013192",
        categories: ["Machine Learning", "AI", "Probabilistic Models"],
        description: "Explores the use of probabilistic graphical models in AI applications."
      }
    ];

    export const seedBooks = async () => {
        try {
          await Book.insertMany(books);
          console.log('✅ Books seeded successfully');
        } catch (err) {
          console.error('❌ Error seeding books:', err);
        }
      }