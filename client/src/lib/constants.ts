export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
  { href: "/blog", label: "Blog" }
];

export const SOCIAL_LINKS = [
  { name: "behance", icon: "fab fa-behance", url: "https://behance.net" },
  { name: "dribbble", icon: "fab fa-dribbble", url: "https://dribbble.com" },
  { name: "linkedin", icon: "fab fa-linkedin-in", url: "https://linkedin.com" },
  { name: "instagram", icon: "fab fa-instagram", url: "https://instagram.com" },
  { name: "github", icon: "fab fa-github", url: "https://github.com" }
];

export const PORTFOLIO_CATEGORIES = [
  { id: "all", name: "All" },
  { id: "web", name: "Web Design" },
  { id: "ui", name: "UI/UX" },
  { id: "branding", name: "Branding" }
];

export const PORTFOLIO_PROJECTS = [
  {
    id: 1,
    title: "GreenLife E-commerce",
    categories: ["web"],
    description: "Web Design, E-commerce, UI/UX",
    image: "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 2,
    title: "WealthWise Mobile App",
    categories: ["ui"],
    description: "UI/UX, Mobile Design, Fintech",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
  },
  {
    id: 3,
    title: "Aroma Cafe Rebrand",
    categories: ["branding"],
    description: "Branding, Identity, Packaging",
    image: "https://images.unsplash.com/photo-1574359411659-11a81c4b9f57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1373&q=80"
  },
  {
    id: 4,
    title: "NexGen Tech Corporate Site",
    categories: ["web"],
    description: "Web Design, Corporate Identity",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 5,
    title: "Analytics Dashboard",
    categories: ["ui"],
    description: "UI/UX, Data Visualization",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 6,
    title: "FitLife Brand Identity",
    categories: ["branding"],
    description: "Branding, Marketing",
    image: "https://images.unsplash.com/photo-1598367772323-3eb2012c9bc4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1478&q=80"
  }
];

export const SERVICES = [
  {
    id: 1,
    title: "UI/UX Design",
    icon: "fas fa-paint-brush",
    description: "Creating intuitive and engaging user interfaces that enhance user experience and drive conversion. My designs balance aesthetics with functionality.",
    features: [
      "User Research & Personas",
      "Wireframing & Prototyping",
      "Interactive Designs"
    ]
  },
  {
    id: 2,
    title: "Web Development",
    icon: "fas fa-code",
    description: "Building responsive, high-performance websites and applications that provide seamless user experiences across all devices and platforms.",
    features: [
      "Frontend Development",
      "Responsive Web Design",
      "Performance Optimization"
    ]
  },
  {
    id: 3,
    title: "Branding & Identity",
    icon: "fas fa-layer-group",
    description: "Developing cohesive brand identities that communicate your company's values and connect with your target audience effectively.",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Visual Identity Systems"
    ]
  }
];

export const PRICING_PLANS = [
  {
    id: 1,
    title: "Basic",
    subtitle: "Perfect for small projects",
    price: "$699",
    features: [
      "Custom Website Design (5 pages)",
      "Responsive Mobile Design",
      "Basic SEO Setup",
      "Contact Form Integration"
    ],
    notIncluded: [
      "Custom Animations",
      "E-commerce Functionality"
    ],
    popular: false
  },
  {
    id: 2,
    title: "Premium",
    subtitle: "Ideal for growing businesses",
    price: "$1,499",
    features: [
      "Custom Website Design (10 pages)",
      "Responsive Mobile Design",
      "Advanced SEO Setup",
      "Custom Contact & Lead Forms",
      "Custom Animations & Interactions"
    ],
    notIncluded: [
      "E-commerce Functionality"
    ],
    popular: true
  },
  {
    id: 3,
    title: "Enterprise",
    subtitle: "For advanced business needs",
    price: "$2,999",
    features: [
      "Custom Website Design (20+ pages)",
      "Responsive Mobile Design",
      "Comprehensive SEO Strategy",
      "Advanced Form Systems",
      "Premium Animations & Effects",
      "E-commerce Functionality"
    ],
    notIncluded: [],
    popular: false
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CEO, GreenLife",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    text: "Alexander transformed our outdated website into a beautiful, functional platform that perfectly represents our brand. The attention to detail and creative solutions exceeded our expectations. We've seen a significant increase in engagement since the redesign.",
    rating: 5
  },
  {
    id: 2,
    name: "David Martinez",
    position: "Founder, NexGen Technologies",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    text: "Working with Alexander was a game-changer for our startup. His intuitive design approach and technical expertise created a seamless user experience that our customers love. The interactive elements he added make our platform stand out from competitors.",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Wong",
    position: "Marketing Director, Aroma Cafe",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80",
    text: "Alexander's rebrand of our cafe chain completely revitalized our image. From logo design to packaging and digital presence, every element works together seamlessly. The modern yet approachable aesthetic has attracted a whole new demographic to our stores.",
    rating: 4.5
  }
];

export const SKILLS = [
  { name: "Web Development", icon: "fas fa-code" },
  { name: "UI/UX Design", icon: "fas fa-paint-brush" },
  { name: "Responsive Design", icon: "fas fa-mobile-alt" },
  { name: "Brand Strategy", icon: "fas fa-layer-group" },
  { name: "Performance Optimization", icon: "fas fa-rocket" },
  { name: "3D Modeling", icon: "fas fa-cubes" }
];

export const EXPERIENCE = [
  {
    id: 1,
    years: "2021 - Present",
    title: "Senior UI/UX Designer at TechVision",
    description: "Led the redesign of the company's flagship product, resulting in a 40% increase in user engagement and a 25% reduction in bounce rate. Managed a team of three designers, establishing design systems and workflows."
  },
  {
    id: 2,
    years: "2018 - 2021",
    title: "Interactive Developer at DigitalCraft",
    description: "Developed interactive web experiences for clients in various industries. Created custom animations and micro-interactions that enhanced user experience while maintaining performance standards."
  },
  {
    id: 3,
    years: "2016 - 2018",
    title: "Web Designer at CreativeStudio",
    description: "Designed responsive websites for small to medium businesses. Collaborated with developers to ensure design integrity throughout the development process."
  },
  {
    id: 4,
    years: "2014 - 2016",
    title: "Graphic Designer at PrintPlus",
    description: "Created visual assets for print and digital media. Developed brand identities, marketing materials, and social media graphics for diverse clients."
  }
];

export const BLOG_POSTS = [
  {
    id: 1,
    title: "The Future of Web Design: Trends to Watch in 2023",
    excerpt: "Exploring emerging design trends that are shaping the future of the web, from 3D elements to immersive experiences and accessibility-focused approaches.",
    image: "https://images.unsplash.com/photo-1549921296-3b0f9a35af25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1527&q=80",
    category: "Design",
    date: "June 10, 2023",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Building Effective Design Systems for Scale",
    excerpt: "A comprehensive guide to creating and implementing design systems that enhance consistency, improve collaboration, and enable faster product development.",
    image: "https://images.unsplash.com/photo-1534670007418-bc50e48fe231?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80",
    category: "Development",
    date: "May 24, 2023",
    readTime: "7 min read"
  },
  {
    id: 3,
    title: "The Psychology of Color in Branding and User Experience",
    excerpt: "Delving into how color choices influence perception, emotions, and behaviors, with practical guidelines for making strategic color decisions in your projects.",
    image: "https://images.unsplash.com/photo-1416339684178-3a239570f315?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1467&q=80",
    category: "Branding",
    date: "April 15, 2023",
    readTime: "6 min read"
  }
];
