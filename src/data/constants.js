// data.js
export const Bio = {
  name: "Niraj Kumar",
  roles: ["Full Stack Developer", "MERN / Django Developer"],
  description:
    "Hands-on Full-Stack Developer with experience in the MERN stack and Django, proficient in building secure, scalable web applications. Experienced in API integration, database management, and responsive UI development with React.js. Focused on performance, automation and production-ready deployments.",
  email: "nirajkr0401@gmail.com",
  phone: "+91 6201933069",
  location: "Bihar, India",
  github: "",
  linkedin: "",
  resume: "", // add link to resume file (optional)
};

export const skills = [
  {
    title: "Programming & Frameworks",
    logo: "https://via.placeholder.com/128?text=Code",
    skills: [
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      {
        name: "Python",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
      {
        name: "C++",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
      },
      {
        name: "Django",
        image:
          "https://www.djangoproject.com/m/img/logos/django-logo-negative.png",
      },
      {
        name: "Flask",
        image:
          "https://flask.palletsprojects.com/en/2.2.x/_images/flask-logo.png",
      },
      {
        name: "React.js",
        image:
          "data:image/svg+xml;base64,PHN2ZyB... (same as existing or replace)",
      },
      {
        name: "Next.js",
        image: "https://nextjs.org/static/twitter-cards/home.jpg",
      },
    ],
  },
  {
    title: "Frontend & Styling",
    logo: "https://via.placeholder.com/128?text=Frontend",
    skills: [
      {
        name: "HTML5",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS3",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
      {
        name: "Tailwind CSS",
        image:
          "https://tailwindcss.com/_next/static/media/social-card.2b4d0b8f.jpg",
      },
      {
        name: "Bootstrap",
        image:
          "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
      },
      {
        name: "Responsive Design",
        image: "https://via.placeholder.com/64?text=R",
      },
    ],
  },
  {
    title: "Backend & Databases",
    logo: "https://via.placeholder.com/128?text=Backend",
    skills: [
      { name: "Node.js", image: "https://nodejs.org/static/images/logo.svg" },
      {
        name: "Express.js",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
      },
      {
        name: "MongoDB",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      },
      {
        name: "PostgreSQL",
        image: "https://www.postgresql.org/media/img/about/press/elephant.png",
      },
      {
        name: "MySQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },
      {
        name: "Firebase",
        image: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
      },
      {
        name: "RESTful APIs",
        image: "https://via.placeholder.com/64?text=API",
      },
    ],
  },
  {
    title: "Tools & Other",
    logo: "https://via.placeholder.com/128?text=Tools",
    skills: [
      {
        name: "Git & GitHub",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
      {
        name: "Docker",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
      },
      {
        name: "Postman",
        image:
          "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
      },
      {
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png",
      },
      {
        name: "Chrome DevTools",
        image: "https://via.placeholder.com/64?text=DevTools",
      },
      {
        name: "Webpack / Build Tools",
        image: "https://via.placeholder.com/64?text=Build",
      },
    ],
  },
];

export const experiences = [
  {
    id: 1,
    img: "https://via.placeholder.com/150?text=CDAC",
    role: "Software Development Intern",
    company: "CDAC - Kolkata",
    date: "October 2024 - Present",
    desc:
      "• Developed a rule-based pension calculator web application using Django and PostgreSQL that streamlined pension planning procedures and improved form submission effectiveness by 70%.\n" +
      "• Implemented secure user authentication using third-party identity verification APIs, reducing registration errors and improving data privacy by 90%.\n" +
      "• Built a paperless claims workflow to eliminate manual document handling, reducing processing overhead by 65%.\n" +
      "• Conducted training on Linux and project architectures for 30+ students, accelerating deployment capability by 60%.\n" +
      "• Created a voice-to-text conversion app using React.js and Node.js to reduce manual transcription time by ~80%.\n" +
      "• Tech stack: React.js, Node.js, Express.js, Django, PostgreSQL, REST APIs, Postman, Linux.",
    skills: [
      "React.js",
      "Node.js",
      "Django",
      "PostgreSQL",
      "REST APIs",
      "Linux",
    ],
  },
  {
    id: 2,
    img: "https://via.placeholder.com/150?text=Chegg",
    role: "Q&A Expert (CSE)",
    company: "Chegg (Freelance)",
    date: "Dec 2023 - Present",
    desc:
      "• Provided technical answers and coding solutions for 500+ student questions on SQL, Python, JavaScript debugging, and networking.\n" +
      "• Created performant SQL queries and debugged backend DB code, improving solution accuracy.\n" +
      "• Delivered professional Python and JavaScript code patches with high acceptance rates (>95%).\n" +
      "• Assisted students with networking concepts and technical explanations, maintaining high quality and accountability.",
    skills: ["SQL", "Python", "JavaScript", "Debugging", "Technical Writing"],
  },
];

export const projects = [
  {
    id: 1,
    title: "E-commerce Web Application",
    date: "Jan 2023 - Aug 2023",
    description:
      "Built a user-friendly e-commerce website using React.js and Django with Gmail/phone login, Stripe payments, and PostgreSQL-backed cart/product management—improving accessibility and checkout reliability. Improved DB performance and security controls.",
    image: "https://via.placeholder.com/600x300?text=E-commerce+App",
    tags: ["React.js", "Django", "PostgreSQL", "Stripe", "REST API"],
    category: "web app",
    github: "",
  },
  {
    id: 2,
    title: "Voice-to-Text App (Web)",
    date: "Oct 2024",
    description:
      "A web-based voice-to-text converter using Web Speech API, real-time parsing and a React frontend with Node.js backend to store transcriptions; aimed at improving accessibility and reducing manual transcription time.",
    image: "https://via.placeholder.com/600x300?text=Voice+to+Text",
    tags: ["React.js", "Node.js", "Web Speech API"],
    category: "tool",
    github: "",
  },
  {
    id: 3,
    title: "Paperless Claims & Pension Calculator",
    date: "Oct 2024 - Dec 2024",
    description:
      "Rule-based pension calculator and paperless claims system combining Django forms, PostgreSQL and secure API integrations to automate pension workflows and claims submissions.",
    image: "https://via.placeholder.com/600x300?text=Pension+Calculator",
    tags: ["Django", "PostgreSQL", "APIs"],
    category: "web app",
    github: "",
  },
];

export const education = [
  {
    id: 0,
    img: "https://via.placeholder.com/120?text=BPMCE",
    school: "B.P. Mandal College of Engineering, Bihar",
    date: "Aug 2019 - Aug 2023",
    grade: "7.50 / 10",
    desc: "Bachelor of Technology - Computer Science Engineering. Focused on algorithms, data structures, databases, web development and software engineering projects.",
    degree: "B.Tech, Computer Science & Engineering",
  },
];

export const achievements = [
  "Core Java Training — Internshala",
  "Soft Skills — NPTEL",
  "Programming in C & C++ — E & ICT Academy, IIT Kanpur",
];

export const TimeLineData = [
  { year: 2019, text: "Started engineering (B.Tech CSE)" },
  { year: 2022, text: "Built early web projects & freelanced" },
  { year: 2023, text: "Completed B.Tech, joined Chegg as Q&A Expert" },
  { year: 2024, text: "Joined CDAC as Software Development Intern" },
  { year: 2025, text: "Ongoing: Software Development Intern @ CDAC" },
];
