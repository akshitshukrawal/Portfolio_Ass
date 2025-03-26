"use client";

export function Projects() {
  const projectsData = [
    {
      title: "ShareMe - Social Media Web App",
      description: [
        "Developed a dynamic social media platform using React, Tailwind CSS, and Sanity.io",
        "Implemented Google authentication for secure user login",
        "Created a responsive interface optimized for all devices",
        "Developed a robust commenting system for user engagement"
      ],
      technologies: ["React", "Tailwind CSS", "Sanity.io", "Google Auth"],
      githubLink: "https://github.com/akshitshukrawal/shareme"
    },
    {
      title: "Credit Card Fraud Detection",
      description: [
        "Developed a machine learning model to detect fraudulent credit card transactions",
        "Implemented multiple classification algorithms",
        "Achieved 96% accuracy on the testing dataset",
        "Utilized advanced SVM kernel functions for precise classification"
      ],
      technologies: ["Python", "Machine Learning", "SVM", "Logistic Regression"],
      githubLink: "https://github.com/akshitshukrawal/credit-card-fraud-detection"
    },
    {
      title: "Portfolio Web App",
      description: [
        "Developed a responsive web app using Next.js with Server-Side Rendering",
        "Integrated Three.js for 3D graphics",
        "Enhanced UI with Aceternity UI animations and Framer Motion",
        "Implemented Sentry for web performance monitoring"
      ],
      technologies: ["Next.js", "Three.js", "Framer Motion", "Sentry"],
      githubLink: "https://github.com/akshitshukrawal/portfolio"
    },
    {
      title: "Snake Game with Reinforcement Learning",
      description: [
        "Developed an autonomous Snake game agent using Q-learning",
        "Engineered comprehensive state representation vector",
        "Achieved maximum score of 72 in 150 games",
        "Utilized Matplotlib for training progress visualization"
      ],
      technologies: ["Python", "Pygame", "Reinforcement Learning", "Matplotlib"],
      githubLink: "https://github.com/akshitshukrawal/snake-reinforcement-learning"
    }
  ];

  return (
    <section 
      id="projects" 
      className="p-8 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen"
    >
      <h2 className="text-3xl font-extrabold mb-8 text-gray-800 border-b-4 border-blue-500 pb-2 text-center tracking-wider">
        Projects
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {projectsData.map((project, index) => (
          <div 
            key={index} 
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-6"
          >
            <h3 className="text-xl font-bold text-blue-700 mb-4 border-b pb-2">
              {project.title}
            </h3>
            
            <ul className="mb-4 space-y-2 text-gray-700">
              {project.description.map((desc, descIndex) => (
                <li key={descIndex} className="flex items-start">
                  <svg 
                    className="w-5 h-5 text-blue-500 mr-2 mt-1 flex-shrink-0" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                  {desc}
                </li>
              ))}
            </ul>
            
            <div className="mb-4 flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <span 
                  key={techIndex} 
                  className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <svg 
                className="w-6 h-6 mr-2" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}