
export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  tech: string[];
  image: string;
  images: string[];
  github: string;
  live: string;
  features: string[];
  challenges: string[];
  solutions: string[];
}

export const projects: Project[] = [
  {
    id: "ecommerce",
    title: "E-Commerce Platform",
    description: "A modern e-commerce solution built with React, Node.js, and Stripe integration. Features include real-time inventory, advanced search, and mobile-first design.",
    fullDescription: "A comprehensive e-commerce platform that revolutionizes online shopping with cutting-edge technology and user-centric design. Built to handle high traffic and provide seamless shopping experiences across all devices.",
    tech: ["React", "Node.js", "MongoDB", "Stripe", "Redis", "Docker"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop"
    ],
    github: "#",
    live: "#",
    features: [
      "Real-time inventory management",
      "Advanced product search and filtering",
      "Secure payment processing with Stripe",
      "Responsive mobile-first design",
      "User authentication and profiles",
      "Order tracking and history",
      "Admin dashboard for product management",
      "Email notifications and confirmations"
    ],
    challenges: [
      "Handling high-traffic loads during peak shopping seasons",
      "Implementing real-time inventory updates across multiple users",
      "Ensuring secure payment processing and data protection",
      "Creating a seamless mobile shopping experience"
    ],
    solutions: [
      "Implemented Redis caching and database optimization for performance",
      "Used WebSocket connections for real-time inventory updates",
      "Integrated Stripe's secure payment infrastructure with fraud detection",
      "Designed mobile-first responsive layouts with progressive enhancement"
    ]
  },
  {
    id: "ai-dashboard",
    title: "AI Dashboard",
    description: "An analytics dashboard featuring AI-powered insights, real-time data visualization, and predictive analytics for business intelligence.",
    fullDescription: "A sophisticated analytics platform that leverages artificial intelligence to provide actionable business insights through beautiful visualizations and predictive modeling.",
    tech: ["Next.js", "Python", "TensorFlow", "D3.js", "PostgreSQL", "AWS"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop"
    ],
    github: "#",
    live: "#",
    features: [
      "AI-powered predictive analytics",
      "Real-time data visualization with D3.js",
      "Custom dashboard creation and configuration",
      "Machine learning model integration",
      "Automated report generation",
      "Multi-user collaboration tools",
      "Export capabilities (PDF, Excel, CSV)",
      "Advanced filtering and data drill-down"
    ],
    challenges: [
      "Processing large datasets in real-time",
      "Creating intuitive AI-driven insights for non-technical users",
      "Implementing complex data visualizations that perform well",
      "Ensuring data accuracy and model reliability"
    ],
    solutions: [
      "Implemented data streaming with Apache Kafka for real-time processing",
      "Created an intuitive UI with natural language explanations of AI insights",
      "Optimized D3.js visualizations with canvas rendering for large datasets",
      "Built comprehensive testing frameworks for ML model validation"
    ]
  },
  {
    id: "design-system",
    title: "Design System",
    description: "A comprehensive design system and component library used across multiple products, ensuring consistency and scalability.",
    fullDescription: "A robust design system that serves as the foundation for multiple product lines, providing consistent user experiences and accelerating development cycles across teams.",
    tech: ["React", "Storybook", "Figma", "TypeScript", "Jest", "Chromatic"],
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1545665277-5937750773c7?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=500&fit=crop"
    ],
    github: "#",
    live: "#",
    features: [
      "50+ reusable React components",
      "Comprehensive Storybook documentation",
      "Design tokens for consistent theming",
      "Accessibility compliance (WCAG 2.1 AA)",
      "Automated testing with Jest and Chromatic",
      "Figma integration with design tokens",
      "Dark and light theme support",
      "TypeScript definitions for all components"
    ],
    challenges: [
      "Maintaining consistency across multiple product teams",
      "Creating flexible components that work in various contexts",
      "Ensuring accessibility standards are met across all components",
      "Managing breaking changes and version updates"
    ],
    solutions: [
      "Established clear governance and contribution guidelines",
      "Implemented a flexible prop-based API with sensible defaults",
      "Built automated accessibility testing into the CI/CD pipeline",
      "Created migration guides and implemented semantic versioning"
    ]
  },
  {
    id: "mobile-app",
    title: "Mobile App",
    description: "A cross-platform mobile application for fitness tracking with social features, built using React Native and Firebase.",
    fullDescription: "A comprehensive fitness tracking application that combines personal health monitoring with social engagement features to motivate users in their fitness journey.",
    tech: ["React Native", "Firebase", "Redux", "Expo", "Node.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=500&fit=crop"
    ],
    github: "#",
    live: "#",
    features: [
      "Comprehensive workout tracking",
      "Social challenges and leaderboards",
      "Personalized fitness recommendations",
      "Integration with wearable devices",
      "Nutrition tracking and meal planning",
      "Progress analytics and insights",
      "Community features and social sharing",
      "Offline workout capabilities"
    ],
    challenges: [
      "Ensuring smooth performance across iOS and Android platforms",
      "Implementing accurate fitness tracking algorithms",
      "Creating engaging social features without compromising privacy",
      "Managing offline data synchronization"
    ],
    solutions: [
      "Used React Native with platform-specific optimizations",
      "Integrated with health APIs and implemented custom algorithms",
      "Built granular privacy controls with end-to-end encryption",
      "Implemented robust offline-first architecture with conflict resolution"
    ]
  }
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};
