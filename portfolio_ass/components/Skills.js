"use client";

export function Skills() {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "C++", level: "Advanced" },
        { name: "C", level: "Intermediate" },
        { name: "Python", level: "Advanced" },
        { name: "JavaScript", level: "Advanced" }
      ]
    },
    {
      category: "Web Technologies",
      skills: [
        { name: "HTML", level: "Advanced" },
        { name: "Tailwind CSS", level: "Advanced" },
        { name: "React", level: "Advanced" },
        { name: "NextJS", level: "Intermediate" },
        { name: "Sanity", level: "Intermediate" }
      ]
    },
    {
      category: "Libraries & Frameworks",
      skills: [
        { name: "NumPy", level: "Advanced" },
        { name: "Pygame", level: "Intermediate" },
        { name: "Scikit-learn", level: "Advanced" },
        { name: "STL", level: "Intermediate" }
      ]
    },
    {
      category: "Utilities & Tools",
      skills: [
        { name: "LaTeX", level: "Intermediate" },
        { name: "Jupyter", level: "Intermediate" },
        { name: "Git", level: "Advanced" },
        { name: "GitHub", level: "Advanced" }
      ]
    }
  ];

  return (
    <section 
      id="skills" 
      className="p-4 sm:p-8 bg-gradient-to-br from-blue-50 to-indigo-100"
    >
      <h2 className="text-2xl sm:text-3xl font-extrabold mb-6 sm:mb-8 text-gray-800 border-b-4 border-blue-500 pb-2 text-center tracking-wider">
        Technical Skills
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {skillCategories.map((category, index) => (
          <div 
            key={index} 
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-4 sm:p-6"
          >
            <h3 className="text-lg sm:text-xl font-bold text-blue-700 mb-3 sm:mb-4 border-b pb-2">
              {category.category}
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
              {category.skills.map((skill, skillIndex) => (
                <div 
                  key={skillIndex} 
                  className="flex items-center space-x-2 sm:space-x-3 p-1 sm:p-2 bg-gray-50 rounded-md"
                >
                  <div 
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{
                      backgroundColor: 
                        skill.level === "Advanced" ? "#10B981" : 
                        skill.level === "Intermediate" ? "#3B82F6" : 
                        "#6B7280"
                    }}
                  />
                  <span className="text-xs sm:text-sm text-gray-800 font-medium truncate">
                    {skill.name}
                  </span>
                  <span className="text-[10px] sm:text-xs text-gray-500 ml-auto">
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}