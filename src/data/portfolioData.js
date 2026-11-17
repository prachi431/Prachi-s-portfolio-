export const personalInfo = {
  name: "Prachi Rawat",
  avatarUrl: "/profile.jpg", // Saved LinkedIn PFP (with fallback to /avatar.svg)
  headline: "Greetings — WELCOME PRACHI'S PORTFOLIO",
  shortTitle: "AI & ML Undergraduate",
  tagline: "Building strong programming fundamentals & exploring real-world AI applications",
  bio: "I am an Artificial Intelligence and Machine Learning undergraduate at Bangalore Institute of Technology (BIT), originally from Haryana. I am passionate about building strong programming fundamentals, solving algorithmic problems, and exploring real-world applications of AI.",
  location: "Bangalore, India (Originally from Haryana)",
  email: "prachirawat.dev@gmail.com", // Replace with your primary email
  github: "https://github.com/prachi-rawat", // Replace with your GitHub handle
  linkedin: "https://www.linkedin.com/in/prachi-rawat-0840b8368",
  resumeUrl: "#resume", // Can be a Google Drive link, PDF path in /public, etc.
};

export const aboutData = {
  story: [
    "Originally from Haryana, I took a bold leap towards India's Silicon Valley to pursue my Bachelor of Engineering in Artificial Intelligence & Machine Learning at Bangalore Institute of Technology (BIT).",
    "As an undergraduate, I am actively building an ironclad foundation in core computer science. My current focus is mastering low-level programming with C and versatile problem-solving with Python, while exploring data structure fundamentals.",
    "My journey is driven by an intense curiosity about how mathematics and code intersect to create intelligent systems. Beyond coursework, I spend my time coding terminal applications, breaking down algorithmic puzzles, and staying abreast of the rapid innovations shaping modern artificial intelligence."
  ],
  education: [
    {
      degree: "Bachelor of Engineering (B.E.) in AI & ML",
      institution: "Bangalore Institute of Technology (BIT)",
      location: "Bengaluru, Karnataka",
      period: "2024 – 2028 (Undergraduate)",
      status: "In Progress",
      highlights: [
        "Specialization in Artificial Intelligence & Machine Learning",
        "Rigorous coursework in C Programming, Mathematics for Computing, and Problem Solving",
        "Active member of campus developer and tech communities"
      ]
    },
    {
      degree: "Higher Secondary Education (Class XII - Science)",
      institution: "Senior Secondary School",
      location: "Haryana, India",
      period: "Completed with Distinction",
      status: "Completed",
      highlights: [
        "Focus on Physics, Chemistry, and Advanced Mathematics",
        "Developed early interest in analytical thinking and computational logic"
      ]
    }
  ],
  highlights: [
    {
      title: "B.E. in AI & ML",
      subtitle: "Bangalore Institute of Technology",
      icon: "GraduationCap"
    },
    {
      title: "Roots in Haryana",
      subtitle: "Relocated to Bengaluru for Tech Hub immersion",
      icon: "MapPin"
    },
    {
      title: "Core Dev Focus",
      subtitle: "C & Python Low-level & High-level Foundations",
      icon: "Code2"
    },
    {
      title: "Next Milestone",
      subtitle: "DSA, Neural Networks & Computer Vision",
      icon: "Sparkles"
    }
  ]
};

export const skillsData = [
  {
    category: "Programming Languages",
    description: "Foundational and versatile languages powering my computational problem solving.",
    skills: [
      {
        name: "C",
        level: "Foundational / Core",
        detail: "Memory management, pointers, structs, file I/O, control flow",
        icon: "FileCode",
        color: "from-blue-500/20 to-cyan-500/20 border-cyan-500/30 text-cyan-400"
      },
      {
        name: "Python",
        level: "Intermediate / Scripting",
        detail: "OOP, script automation, standard libraries, algorithmic coding",
        icon: "Terminal",
        color: "from-amber-500/20 to-yellow-500/20 border-yellow-500/30 text-yellow-400"
      }
    ]
  },
  {
    category: "Core Areas",
    description: "Algorithmic concepts, theoretical pillars, and applied intelligence.",
    skills: [
      {
        name: "Problem Solving",
        level: "Active Practice",
        detail: "Logic building, edge-case analysis, pattern formulation",
        icon: "Cpu",
        color: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-400"
      },
      {
        name: "Data Structures (Basics)",
        level: "Foundational",
        detail: "Arrays, strings, linked lists concepts, stacks, queues",
        icon: "Boxes",
        color: "from-indigo-500/20 to-blue-500/20 border-indigo-500/30 text-indigo-400"
      },
      {
        name: "AI & Machine Learning Fundamentals",
        level: "Academic & Exploration",
        detail: "Supervised learning concepts, linear regression, evaluation metrics",
        icon: "Brain",
        color: "from-purple-500/20 to-pink-500/20 border-purple-500/30 text-purple-400"
      }
    ]
  },
  {
    category: "Tools & Platforms",
    description: "Environments, version control, and developer utilities used daily.",
    skills: [
      {
        name: "Git",
        level: "Version Control",
        detail: "Branching, committing, merge conflict resolution, workflows",
        icon: "GitBranch",
        color: "from-orange-500/20 to-red-500/20 border-orange-500/30 text-orange-400"
      },
      {
        name: "GitHub",
        level: "Collaboration",
        detail: "Remote repositories, PR reviews, documentation, open source",
        icon: "Github",
        color: "from-slate-500/20 to-gray-500/20 border-slate-500/30 text-slate-300"
      },
      {
        name: "Linux",
        level: "CLI & Environment",
        detail: "Shell navigation, package managers, bash scripting fundamentals",
        icon: "Server",
        color: "from-yellow-500/20 to-amber-500/20 border-yellow-500/30 text-amber-300"
      },
      {
        name: "VS Code",
        level: "Primary IDE",
        detail: "Extensions, integrated debugging, multi-language configuration",
        icon: "Laptop",
        color: "from-sky-500/20 to-blue-500/20 border-sky-500/30 text-sky-400"
      }
    ]
  }
];

export const projectsData = [
  {
    id: 1,
    title: "Student Management System in C",
    tagline: "Console-based Record Management & File Persistence",
    description: "A robust terminal application developed in C using custom structures and pointers. Features full CRUD capability for student records, automated GPA computation, search filters, and persistent file storage handling binary/text records safely.",
    primaryLanguage: "C",
    techStack: ["C", "File I/O", "Data Structures", "Dynamic Memory", "CLI"],
    githubUrl: "https://github.com/prachi-rawat/student-management-system-c",
    liveDemoUrl: null,
    highlights: [
      "Custom struct data schema with unique student ID indexing",
      "Dynamic array resizing with malloc & free to optimize heap usage",
      "Robust file parsing preventing record corruption during sudden exits"
    ],
    status: "Completed",
    featuredBadge: "Low-Level Systems"
  },
  {
    id: 2,
    title: "Python CLI Calculator & Task Automator",
    tagline: "Multi-utility Developer Terminal Tool",
    description: "A dual-purpose productivity CLI utility created in Python. Incorporates a high-precision arithmetic/scientific parser alongside a file organization automator that batches, categorizes, and timestamps downloads and study assets.",
    primaryLanguage: "Python",
    techStack: ["Python 3", "OS Module", "Regex", "Argparse", "Automation"],
    githubUrl: "https://github.com/prachi-rawat/python-cli-automator",
    liveDemoUrl: null,
    highlights: [
      "Modular command-line argument parsing for one-command workflows",
      "Automated directory housekeeping sorting files by extension and date",
      "Custom math expression evaluator handling bracket hierarchy safely"
    ],
    status: "Completed",
    featuredBadge: "Python Automation"
  },
  {
    id: 3,
    title: "Number Guessing & Logic Game in C",
    tagline: "Algorithmic Game with Binary Search Hint Engine",
    description: "An interactive logic-based number guessing game developed in C. Implements multiple difficulty modes, session scoreboards, dynamic feedback metrics, and an optional algorithmic AI hint helper explaining optimal binary search strategies.",
    primaryLanguage: "C",
    techStack: ["C", "Algorithms", "Binary Search Logic", "Standard Library", "Stats Tracking"],
    githubUrl: "https://github.com/prachi-rawat/number-logic-game-c",
    liveDemoUrl: null,
    highlights: [
      "Time-seeded pseudo-random number generator ensuring unique runs",
      "Dynamic algorithmic hint system demonstrating O(log n) efficiency",
      "Session statistics tracker logging lowest attempts and win streaks"
    ],
    status: "Completed",
    featuredBadge: "Algorithmic Logic"
  }
];

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" }
];
