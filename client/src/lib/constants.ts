export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Games" },
  { href: "/contact", label: "Contact" },
  { href: "/blog", label: "Dev Blog" }
];

export const SOCIAL_LINKS = [
  { name: "steam", icon: "fab fa-steam", url: "https://steamcommunity.com" },
  { name: "itch", icon: "fab fa-itch-io", url: "https://itch.io" },
  { name: "twitter", icon: "fab fa-twitter", url: "https://twitter.com" },
  { name: "youtube", icon: "fab fa-youtube", url: "https://youtube.com" },
  { name: "github", icon: "fab fa-github", url: "https://github.com" }
];

export const PORTFOLIO_CATEGORIES = [
  { id: "all", name: "All Games" },
  { id: "action", name: "Action" },
  { id: "adventure", name: "Adventure" },
  { id: "strategy", name: "Strategy" }
];

export const PORTFOLIO_PROJECTS = [
  {
    id: 1,
    title: "Neon Horizon",
    categories: ["action"],
    description: "Cyberpunk Action RPG, PC & Console",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 2,
    title: "Celestial Odyssey",
    categories: ["adventure"],
    description: "Space Exploration Adventure, Mobile & PC",
    image: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
  },
  {
    id: 3,
    title: "Ancient Kingdoms",
    categories: ["strategy"],
    description: "Historical Strategy Sim, PC Exclusive",
    image: "https://images.unsplash.com/photo-1513807762437-8c8dee6578fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1373&q=80"
  },
  {
    id: 4,
    title: "Shadow Protocol",
    categories: ["action"],
    description: "Stealth Action Thriller, Console Exclusive",
    image: "https://images.unsplash.com/photo-1616031037011-799237a65ca4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 5,
    title: "Pixel Quest",
    categories: ["adventure"],
    description: "Retro-Style Platformer, Cross-Platform",
    image: "https://images.unsplash.com/photo-1604846887565-640d2c52d0e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 6,
    title: "Empire Ascendant",
    categories: ["strategy"],
    description: "Real-Time Strategy, PC & Console",
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1478&q=80"
  }
];

export const SERVICES = [
  {
    id: 1,
    title: "Game Design",
    icon: "fas fa-gamepad",
    description: "Creating captivating gameplay mechanics and systems that engage players and deliver memorable gaming experiences. My designs balance challenge with satisfaction.",
    features: [
      "Gameplay Systems Design",
      "Level Design & Balancing",
      "Player Progression Systems"
    ]
  },
  {
    id: 2,
    title: "Game Development",
    icon: "fas fa-code",
    description: "Building high-performance games with smooth gameplay, optimized for various platforms and devices. I specialize in Unity and Unreal Engine development.",
    features: [
      "Cross-Platform Development",
      "Performance Optimization",
      "Advanced Graphics & Effects"
    ]
  },
  {
    id: 3,
    title: "Game Art & Animation",
    icon: "fas fa-palette",
    description: "Crafting stunning visual assets and fluid animations that bring game worlds to life. My art direction emphasizes visual cohesion and storytelling.",
    features: [
      "2D/3D Asset Creation",
      "Character Animation",
      "Environmental Design"
    ]
  }
];

export const PRICING_PLANS = [
  {
    id: 1,
    title: "Indie",
    subtitle: "Perfect for solo developers",
    price: "$999",
    features: [
      "Game Design Document",
      "Core Gameplay Prototype",
      "Basic Art Assets",
      "One Major Game Feature"
    ],
    notIncluded: [
      "Advanced AI Systems",
      "Online Multiplayer"
    ],
    popular: false
  },
  {
    id: 2,
    title: "Standard",
    subtitle: "Ideal for small studios",
    price: "$2,499",
    features: [
      "Complete Game Design",
      "Full Gameplay Implementation",
      "Custom Art Package",
      "Basic AI Implementation",
      "Sound Design Integration"
    ],
    notIncluded: [
      "Online Multiplayer"
    ],
    popular: true
  },
  {
    id: 3,
    title: "Premium",
    subtitle: "For commercial game projects",
    price: "$4,999",
    features: [
      "Advanced Game Systems",
      "Full Art Direction & Assets",
      "Complex AI Behaviors",
      "Multiplayer Capabilities",
      "Performance Optimization",
      "Cross-Platform Support"
    ],
    notIncluded: [],
    popular: false
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Marcus Reid",
    position: "Founder, Indie Horizon Games",
    image: "https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    text: "Working with Alex transformed our game project from a simple concept into a polished, engaging experience. Their technical expertise and creative problem-solving helped us overcome numerous challenges during development. Our game's player retention has increased by 35% since launch!",
    rating: 5
  },
  {
    id: 2,
    name: "Elena Martinez",
    position: "Creative Director, Quantum Studios",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    text: "Alex's skills in game optimization and graphics implementation are exceptional. Our game went from struggling at 30 FPS to running smoothly at 60+ FPS after their optimization work. They also added visual effects that made our game world much more immersive and atmospheric.",
    rating: 5
  },
  {
    id: 3,
    name: "James Chen",
    position: "Lead Developer, Pixel Dreams",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80",
    text: "We hired Alex to redesign our game's combat system, which was receiving mixed feedback from players. Their implementation was not only more responsive and satisfying but also easier to expand with new enemy types and weapons. Our player reviews improved dramatically after the update.",
    rating: 4.5
  }
];

export const SKILLS = [
  { name: "Unity Engine", icon: "fas fa-cube" },
  { name: "Unreal Engine", icon: "fas fa-cogs" },
  { name: "C# / C++", icon: "fas fa-code" },
  { name: "Game Design", icon: "fas fa-gamepad" },
  { name: "3D Modeling", icon: "fas fa-cubes" },
  { name: "Animation", icon: "fas fa-film" }
];

export const EXPERIENCE = [
  {
    id: 1,
    years: "2021 - Present",
    title: "Lead Game Developer at Nebula Interactive",
    description: "Leading development on multiple AA game titles across various genres. Responsible for core gameplay systems, shaders, and optimization. Successfully shipped two major titles with over 1 million combined sales."
  },
  {
    id: 2,
    years: "2018 - 2021",
    title: "Senior Developer at Quantum Games",
    description: "Specialized in AI programming and procedural generation for open-world games. Developed a dynamic world generation system that significantly reduced development time while increasing environmental variety."
  },
  {
    id: 3,
    years: "2016 - 2018",
    title: "Game Developer at Indie Collective",
    description: "Worked on multiple indie game projects across various platforms. Responsible for gameplay programming, physics implementation, and cross-platform optimization. Released four successful indie titles."
  },
  {
    id: 4,
    years: "2014 - 2016",
    title: "Junior Developer at Pixel Dreams",
    description: "Focused on mobile game development using Unity. Created gameplay systems, implemented monetization features, and optimized performance for low-spec devices. Contributed to two games with over 5 million downloads."
  }
];

export const BLOG_POSTS = [
  {
    id: 1,
    title: "The Future of Game Development: Trends to Watch in 2025",
    excerpt: "Exploring emerging technologies and design approaches in game development, from procedural generation to AI companions and next-gen rendering techniques.",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1527&q=80",
    category: "Tech",
    date: "April 2, 2025",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Building Effective Game Combat Systems",
    excerpt: "A deep dive into designing satisfying combat mechanics, from hitboxes and frame data to feedback systems and enemy AI behaviors.",
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80",
    category: "Design",
    date: "March 18, 2025",
    readTime: "7 min read"
  },
  {
    id: 3,
    title: "The Art of Level Design: Creating Memorable Game Spaces",
    excerpt: "Exploring techniques for crafting game environments that balance challenge, exploration, and narrative while guiding players through memorable experiences.",
    image: "https://images.unsplash.com/photo-1548484352-ea579e5233a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1467&q=80",
    category: "Design",
    date: "March 5, 2025",
    readTime: "6 min read"
  }
];
