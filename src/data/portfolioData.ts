import type { PortfolioData } from '../types/portfolio';

export const portfolioData: PortfolioData = {
  personal: {
    name: 'Kavin K',
    headline: 'Aspiring Software Engineer | Full-Stack Developer | AI/ML Enthusiast',
    tagline: 'Building intelligent applications and meaningful digital experiences.',
    university: 'Sathyabama Institute of Science and Technology',
    department: 'B.Tech Information Technology',
    graduationYear: 2027,
    location: 'Chennai, Tamil Nadu, India',
    bioShort:
      'Pursuing B.Tech in Information Technology at Sathyabama Institute of Science and Technology, Chennai. Passionate about software engineering, full-stack architecture, machine learning systems, and engineering practical digital solutions that solve real-world problems.',
    bioLong: [
      'I am an Information Technology undergraduate at Sathyabama Institute of Science and Technology, Chennai, graduating in 2027. My journey in tech is driven by curiosity and a commitment to building practical, reliable, and user-centric software solutions.',
      'From building responsive frontend interfaces with React and Tailwind CSS to designing robust backend APIs with Node.js and Python, I enjoy solving problems across the entire engineering stack. I am particularly fascinated by AI/ML integrations, Retrieval-Augmented Generation (RAG), and data-driven systems.',
      'Beyond solo coding, I thrive in collaborative team environments. I have built projects alongside talented peers, organized technical workshops for juniors through the BIS Club, and competed in dynamic hackathons and coding contests. I believe consistent learning, technical honesty, and clean code are the keys to long-term engineering excellence.',
    ],
    availableFor: [
      'Software Engineering Internships',
      'Full-Stack Developer Roles',
      'AI/ML Research & Project Collaborations',
      'Hackathons & Open-Source',
    ],
    avatarUrl: '/profile-placeholder.svg',
    resumeUrl: '/resume.pdf',
  },

  socials: [
    {
      platform: 'GitHub',
      url: 'https://github.com/your-username', // Replace with your actual GitHub profile URL
      label: 'GitHub Profile',
      handle: 'github.com/your-username',
    },
    {
      platform: 'LinkedIn',
      url: 'https://linkedin.com/in/your-username', // Replace with your actual LinkedIn profile URL
      label: 'LinkedIn Profile',
      handle: 'linkedin.com/in/your-username',
    },
    {
      platform: 'Email',
      url: 'mailto:kavin.developer.contact@example.com', // Replace with your primary email
      label: 'Personal Email',
      handle: 'kavin.developer.contact@example.com',
    },
  ],

  skills: [
    {
      id: 'languages',
      name: 'Programming Languages',
      description: 'Core languages for systems, algorithms, scripting, and full-stack development',
      skills: [
        { name: 'Python', category: 'languages', level: 'Proficient', description: 'Data structures, AI/ML scripting, FastAPI/Flask, automation' },
        { name: 'Java', category: 'languages', level: 'Proficient', description: 'OOP, data structures, enterprise fundamentals' },
        { name: 'JavaScript', category: 'languages', level: 'Proficient', description: 'ES6+, asynchronous programming, DOM, modern web logic' },
        { name: 'SQL', category: 'languages', level: 'Proficient', description: 'Relational schema design, complex joins, indexing, queries' },
        { name: 'C++', category: 'languages', level: 'Familiar', description: 'Algorithmic problem solving, pointers, STL memory concepts' },
      ],
    },
    {
      id: 'frontend',
      name: 'Frontend Development',
      description: 'Building responsive, accessible, high-performance web applications',
      skills: [
        { name: 'React.js', category: 'frontend', level: 'Proficient', description: 'Component architecture, custom hooks, state management' },
        { name: 'HTML5', category: 'frontend', level: 'Proficient', description: 'Semantic markup, accessibility, modern standards' },
        { name: 'CSS3', category: 'frontend', level: 'Proficient', description: 'Flexbox, CSS Grid, custom properties, animations' },
        { name: 'Tailwind CSS', category: 'frontend', level: 'Proficient', description: 'Utility-first rapid prototyping, responsive styling' },
        { name: 'Vite', category: 'frontend', level: 'Proficient', description: 'Blazing-fast bundler, HMR, modern build tooling' },
      ],
    },
    {
      id: 'backend',
      name: 'Backend Development',
      description: 'Designing scalable web services, RESTful APIs, and server-side logic',
      skills: [
        { name: 'Node.js', category: 'backend', level: 'Proficient', description: 'Non-blocking I/O, server-side JavaScript runtimes' },
        { name: 'Express.js', category: 'backend', level: 'Proficient', description: 'Middleware architecture, routing, REST API microservices' },
        { name: 'REST APIs', category: 'backend', level: 'Proficient', description: 'API contract design, status codes, JSON payload processing' },
        { name: 'Python Backend', category: 'backend', level: 'Proficient', description: 'FastAPI/Flask API development, backend scripts' },
      ],
    },
    {
      id: 'databases',
      name: 'Databases',
      description: 'Data modeling, relational integrity, and document storage',
      skills: [
        { name: 'MySQL', category: 'databases', level: 'Proficient', description: 'Relational data modeling, ACID transactions, relational queries' },
        { name: 'PostgreSQL', category: 'databases', level: 'Familiar', description: 'Advanced relational schemas, JSONB support, constraints' },
        { name: 'MongoDB', category: 'databases', level: 'Proficient', description: 'NoSQL document modeling, Mongoose ODM, aggregation' },
      ],
    },
    {
      id: 'ai-data',
      name: 'AI and Data Technologies',
      description: 'Machine learning algorithms, LLM orchestration, and intelligent workflows',
      skills: [
        { name: 'Artificial Intelligence', category: 'ai-data', level: 'Proficient', description: 'Heuristic search, decision intelligence, applied algorithms' },
        { name: 'Machine Learning', category: 'ai-data', level: 'Proficient', description: 'Supervised/unsupervised models, scikit-learn, evaluation' },
        { name: 'Large Language Models (LLMs)', category: 'ai-data', level: 'Familiar', description: 'Prompt engineering, token optimization, API integration' },
        { name: 'Retrieval-Augmented Generation (RAG)', category: 'ai-data', level: 'Exploring', description: 'Vector embeddings, chunking strategies, semantic retrieval' },
        { name: 'Data Science', category: 'ai-data', level: 'Familiar', description: 'Pandas, NumPy, data cleansing, exploratory data analysis' },
      ],
    },
    {
      id: 'tools',
      name: 'Tools & Platforms',
      description: 'Developer workflows, version control, 3D, and embedded computing tools',
      skills: [
        { name: 'Git', category: 'tools', level: 'Proficient', description: 'Version control, branch management, merge conflict resolution' },
        { name: 'GitHub', category: 'tools', level: 'Proficient', description: 'Pull requests, issues, team collaboration, GitHub Actions' },
        { name: 'VS Code', category: 'tools', level: 'Proficient', description: 'Configured IDE, debugging, extension ecosystem' },
        { name: 'Docker', category: 'tools', level: 'Exploring', description: 'Containerization basics, Dockerfile, reproducible environments' },
        { name: 'Unity', category: 'tools', level: 'Familiar', description: '3D game engine, scene hierarchy, C# game object scripting' },
        { name: 'Arduino & ESP32', category: 'tools', level: 'Familiar', description: 'Embedded logic, microcontrollers, sensor simulation concepts' },
      ],
    },
  ],

  projects: [
    {
      id: 'smartbinx',
      title: 'SmartBinX',
      subtitle: 'IoT-Inspired Smart Waste Management System Using AI and Software Simulation',
      category: 'IoT / Simulation',
      status: 'Software Simulation',
      badgeColor: 'border-emerald-500/40 text-emerald-400 bg-emerald-500/10',
      problemStatement:
        'Municipal waste collection in urban zones frequently operates on rigid, predetermined schedules. This causes overflowing waste bins in dense areas, unnecessary fuel consumption by collection trucks visiting empty bins, and zero real-time operational visibility for city administrators.',
      solution:
        'SmartBinX tackles this with an intelligent software simulation platform that generates algorithmic sensor metrics (fill levels, status codes, GPS positions), uses AI-based route optimization algorithms to generate dynamic truck collection routes, and visualizes everything on a centralized analytics dashboard.',
      keyFeatures: [
        'Simulated smart-bin status and fill-level monitoring with synthetic telemetry data generation',
        'Interactive GPS-based location mapping of urban collection bins',
        'AI-assisted waste collection route optimization (dynamic shortest path calculation)',
        'Predictive analytics forecasting bin fill-rates based on historical simulation metrics',
        'Centralized operations dashboard with high-priority overflow alerts and truck dispatch metrics',
      ],
      simulationFeatures: [
        {
          title: 'Software Simulation Architecture',
          description: 'Uses mathematical synthetic data models to simulate ultrasonic fill sensors and battery voltage across multiple virtual nodes.',
          isSimulated: true,
        },
        {
          title: 'Dynamic Route Optimization',
          description: 'Calculates the optimal pick-up sequence only visiting bins with fill level > 75%, cutting simulated transit distance by ~34%.',
          isSimulated: true,
        },
        {
          title: 'Hardware Status Note',
          description: 'Designed purely as a software and algorithmic simulation platform; physical IoT sensor nodes are conceptual.',
          isSimulated: true,
        },
      ],
      technologies: ['React.js', 'Python', 'AI/ML Algorithms', 'Leaflet / Maps API', 'FastAPI', 'Tailwind CSS'],
      githubUrl: 'https://github.com/your-username/smartbinx-simulation',
      demoUrl: 'https://smartbinx-demo.example.com',
      hasInteractiveDemo: true,
      demoType: 'smartbin',
      previewNote: 'Software-only simulation project with simulated sensor telemetry and route optimization.',
      imageAlt: 'SmartBinX Smart Waste Management Dashboard and Map Preview',
      accentGlow: 'from-emerald-500/20 via-teal-500/10 to-transparent',
    },
    {
      id: 'ambuclear',
      title: 'AmbuClear',
      subtitle: 'Smart Ambulance Traffic Prioritization System',
      category: 'IoT / Simulation',
      status: 'Traffic Simulation',
      badgeColor: 'border-cyan-500/40 text-cyan-400 bg-cyan-500/10',
      problemStatement:
        'Emergency ambulances encounter severe delays at congested road intersections during peak urban hours. Every minute wasted at traffic signals jeopardizes critical patient survival during the "Golden Hour" of medical emergency response.',
      solution:
        'AmbuClear models an intelligent traffic management concept that tracks ambulance emergency runs, calculates dynamic traffic-aware ETAs, simulates pre-emptive green signal corridors along the emergency path, and gives dispatchers a live situational control board.',
      keyFeatures: [
        'Ambulance location tracking concept with real-time waypoint progression',
        'Dynamic Estimated Time of Arrival (ETA) prediction factoring in junction congestion',
        'Traffic-aware route planning avoiding dense bottleneck intersections',
        'Emergency traffic signal prioritization simulation (green wave corridor automation)',
        'Centralized dispatcher monitoring dashboard with incident logs and priority overrides',
      ],
      simulationFeatures: [
        {
          title: 'Signal Corridor Simulation',
          description: 'Simulates synchronized green signals triggered 200m ahead of emergency vehicles, restoring normal cycle once passed.',
          isSimulated: true,
        },
        {
          title: 'Real-World City Integration',
          description: 'Designed as a simulation and proof-of-concept for municipal smart city infrastructure integration.',
          isSimulated: true,
        },
      ],
      technologies: ['React.js', 'Node.js / Python', 'Maps API', 'WebSockets Concept', 'Tailwind CSS', 'Simulation Engine'],
      githubUrl: 'https://github.com/your-username/ambuclear-concept',
      demoUrl: 'https://ambuclear-sim.example.com',
      hasInteractiveDemo: true,
      demoType: 'ambuclear',
      previewNote: 'Proof-of-concept and simulation system highlighting emergency corridor prioritization.',
      imageAlt: 'AmbuClear Traffic Signal Corridor Simulation Dashboard',
      accentGlow: 'from-cyan-500/20 via-blue-500/10 to-transparent',
    },
    {
      id: 'mindlink',
      title: 'MindLink',
      subtitle: 'AI-Powered Study and Productivity Platform',
      category: 'AI & ML',
      status: 'Full-Stack Prototype',
      badgeColor: 'border-violet-500/40 text-violet-400 bg-violet-500/10',
      problemStatement:
        'Self-directed learners frequently face study fatigue, lack of social accountability, and information overload when trying to extract core concepts and practice questions from heavy academic textbooks and lecture notes.',
      solution:
        'MindLink provides an all-in-one distraction-free study environment combining anonymous collaborative virtual study rooms, an integrated Pomodoro timer with ambient focus soundscapes, and an AI study assistant for rapid summarization and Q&A.',
      keyFeatures: [
        'Anonymous virtual study rooms that foster shared accountability without privacy invasion',
        'Customizable Pomodoro productivity timer with automated work/break cycle tracking',
        'AI-powered study material summarization (extracting key definitions and bullet highlights)',
        'Clean, student-friendly, distraction-free user interface with dark mode optimization',
        'Quick flashcard and practice query generator from raw lecture text',
      ],
      technologies: ['React.js', 'Tailwind CSS', 'Node.js / Express', 'AI/LLM Integration', 'Vite', 'REST APIs'],
      githubUrl: 'https://github.com/your-username/mindlink-platform',
      demoUrl: 'https://mindlink-study.example.com',
      hasInteractiveDemo: true,
      demoType: 'mindlink',
      previewNote: 'Interactive study productivity web application featuring integrated Pomodoro and AI summaries.',
      imageAlt: 'MindLink Study Platform User Interface with Pomodoro Timer',
      accentGlow: 'from-violet-500/20 via-indigo-500/10 to-transparent',
    },
    {
      id: 'onehood',
      title: 'OneHood',
      subtitle: 'Hyperlocal Community Chatboard',
      category: 'Full Stack',
      status: 'Web Concept',
      badgeColor: 'border-blue-500/40 text-blue-400 bg-blue-500/10',
      problemStatement:
        'Neighborhood communities, college hostels, and apartment complexes lack a lightweight, localized platform to exchange urgent notices, borrow items, coordinate local meetups, and share safety updates without cluttering global social feeds.',
      solution:
        'OneHood is a modern web application concept engineered for hyperlocal micro-communities, featuring zone-tagged discussion boards, instant local announcements, responsive mobile-first cards, and clean content management.',
      keyFeatures: [
        'Community-based micro discussions categorized by interests and neighborhood topics',
        'Location-oriented posts and community notice pins with expiration timers',
        'Mobile-first responsive interface with clean card-based feeds and tag filters',
        'User authentication architecture and community moderation framework',
        'Fast lightweight client built with Vite and React for instant loading on mobile devices',
      ],
      technologies: ['React.js', 'Vite', 'Tailwind CSS', 'REST Backend APIs', 'MongoDB', 'JWT Auth Architecture'],
      githubUrl: 'https://github.com/your-username/onehood-community',
      demoUrl: 'https://onehood-chat.example.com',
      hasInteractiveDemo: true,
      demoType: 'onehood',
      previewNote: 'Hyperlocal community messaging board concept and responsive web architecture.',
      imageAlt: 'OneHood Community Chatboard and Feed Interface Preview',
      accentGlow: 'from-blue-500/20 via-sky-500/10 to-transparent',
    },
    {
      id: 'ar-restaurant-menu',
      title: 'AR Restaurant Menu',
      subtitle: 'Interactive Augmented Reality Restaurant Menu',
      category: 'AR / 3D',
      status: 'AR 3D Experience',
      badgeColor: 'border-amber-500/40 text-amber-400 bg-amber-500/10',
      problemStatement:
        'Conventional paper and static digital menus fail to convey portion sizes, presentation styles, and ingredient compositions. This leads to ordering hesitation, food wastage, and mismatched customer expectations in restaurants.',
      solution:
        'An interactive augmented reality dining concept that renders high-fidelity 3D food representations right on the customer’s table through mobile AR, providing ingredient breakdowns, nutritional facts, and intuitive pricing presentation.',
      keyFeatures: [
        'Interactive 3D food models allowing 360-degree rotation, zoom, and spatial inspection',
        'Detailed restaurant menu visualization with pricing, spicy indices, and dietary tags',
        'Nutritional and ingredient transparency breakdown for health-conscious diners',
        'Mobile-friendly AR concept designed for seamless customer smartphone access',
        'Built with Unity engine and C# scripting with Vuforia marker/target tracking',
      ],
      technologies: ['Unity', 'C#', '3D Asset Modeling', 'Vuforia AR SDK', 'Mobile UI Design'],
      githubUrl: 'https://github.com/your-username/ar-restaurant-menu',
      demoUrl: 'https://ar-menu-showcase.example.com',
      hasInteractiveDemo: true,
      demoType: 'ar',
      previewNote: 'Augmented reality mobile concept bringing food menus to life with 3D interactive models.',
      imageAlt: 'AR Restaurant Menu 3D Interactive Food Experience Preview',
      accentGlow: 'from-amber-500/20 via-orange-500/10 to-transparent',
    },
  ],

  achievements: [
    {
      id: 'web-whiz-1st',
      title: '1st Place Winner - Web Whiz Competition',
      roleOrTeam: 'Teammate: Kishore',
      dateOrYear: '2024 - 2025',
      category: 'Competition Award',
      highlightBadge: '🏆 First Place Winner',
      description:
        'Clinched First Place in the intense Web Whiz development challenge alongside teammate Kishore, rapidly conceptualizing, architecting, and presenting a responsive, high-performing web application under strict time constraints.',
      impactOrLearnings: [
        'Demonstrated rapid problem-solving, UI/UX execution, and clean frontend logic under competitive pressure.',
        'Collaborated effectively in a two-person team, dividing architecture and UI styling seamlessly.',
        'Judged on code quality, responsiveness, aesthetic execution, and working prototype delivery.',
      ],
      certificateAvailable: true,
    },
    {
      id: 'techxcelerate-2025',
      title: 'TechXcelerate 2025 Participant',
      roleOrTeam: 'Team Collaborator',
      dateOrYear: '2025',
      category: 'Hackathon',
      highlightBadge: '🚀 Technical Hackathon',
      description:
        'Actively participated in TechXcelerate 2025, tackling real-world software challenges, brainstorming scalable architectural solutions, and building innovative software prototypes alongside fellow student engineers.',
      impactOrLearnings: [
        'Explored rapid software prototyping and iterative design sprints.',
        'Engaged with mentor feedback to refine system architecture and problem framing.',
        'Strengthened agile development habits and teamwork in high-tempo hackathon environments.',
      ],
      certificateAvailable: true,
    },
    {
      id: 'bugslayer-26',
      title: "BUGSLAYER '26 Coding & Debugging Challenge",
      roleOrTeam: 'Competitive Programmer / Problem Solver',
      dateOrYear: '2026',
      category: 'Hackathon',
      highlightBadge: '⚡ Debugging & Optimization',
      description:
        "Competed in BUGSLAYER '26, an intensive coding and debugging competition focused on identifying edge-case bugs, profiling algorithmic bottlenecks, and refactoring broken code under stringent time limits.",
      impactOrLearnings: [
        'Sharpened code analysis, mental execution tracing, and syntax troubleshooting skills.',
        'Diagnosed logical flaws, memory considerations, and boundary condition failures.',
        'Reinforced the value of structured test cases and defensive programming.',
      ],
      certificateAvailable: true,
    },
    {
      id: 'bis-club-workshop',
      title: 'BIS Club Member & AR/VR Workshop Organizer',
      roleOrTeam: 'Bureau of Indian Standards Student Chapter',
      dateOrYear: '2024 - 2025',
      category: 'Community & Leadership',
      highlightBadge: '🎓 Workshop Organizer',
      description:
        'Active member of the BIS (Bureau of Indian Standards) Club at Sathyabama Institute of Science and Technology. Successfully co-organized and mentored a hands-on AR/VR Workshop for junior engineering students.',
      impactOrLearnings: [
        'Guided junior peers through foundational AR/VR development principles, Unity setups, and spatial concepts.',
        'Coordinated event logistics, workshop materials, technical demonstrations, and interactive Q&A sessions.',
        'Cultivated leadership, technical communication, and student community mentorship skills.',
      ],
      certificateAvailable: true,
    },
    {
      id: 'innoverse-26-organizer',
      title: "INNOVERSE '26 – National Level 24-Hour Hackathon",
      roleOrTeam: 'Student Organizer / Organizing Committee (III Year IT)',
      dateOrYear: 'February 27–28, 2026',
      category: 'Event Coordination',
      highlightBadge: '⚡ National Hackathon Organizer',
      description:
        "Student Organizer for INNOVERSE '26, a flagship National-Level 24-Hour Hackathon hosted by the Department of Information Technology (School of Computing) at Sathyabama Institute of Science and Technology, sponsored by HackGeniX.",
      impactOrLearnings: [
        'Coordinated on-ground operations, participant support, and 24-hour hackathon logistics for ₹23K+ cash prize & internship tracks.',
        'Facilitated venue logistics at Dr. Remibai Jeppiaar Auditorium, ensuring seamless round-the-clock technical operations and mentoring flow.',
        'Collaborated with departmental faculty advisors, student convenors, and industry sponsor HackGeniX to execute a high-standard national event.',
      ],
      certificateAvailable: true,
    },
  ],

  education: {
    degree: 'B.Tech in Information Technology',
    institution: 'Sathyabama Institute of Science and Technology',
    location: 'Chennai, Tamil Nadu, India',
    period: '2023 – 2027 (Expected Graduation)',
    status: 'Currently Pursuing - 3rd Year',
    cgpa: 'Update in portfolioData.ts', // Configurable field
    cgpaMax: '10.0',
    coursework: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming (Java / C++)',
      'Database Management Systems (SQL & Relational Design)',
      'Operating Systems & System Architecture',
      'Computer Networks & Protocols',
      'Web Technologies & Full-Stack Development',
      'Artificial Intelligence & Machine Learning Fundamentals',
      'Software Engineering Methodologies',
    ],
    highlights: [
      'Student Organizer for INNOVERSE \'26 (National Level 24-Hour Hackathon - Dept. of IT).',
      'Active member of student technical societies including the BIS Student Chapter.',
      'Organized an interactive hands-on AR/VR workshop for junior students.',
      'Winner of 1st Place in Web Whiz competition alongside departmental hackathons.',
      'Maintaining strong academic discipline alongside continuous hands-on project building.',
    ],
  },
};
