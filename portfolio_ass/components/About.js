"use client";

export function About() {
  return (
    <section 
      id="about" 
      className="p-4 sm:p-8 bg-gradient-to-br from-blue-50 to-indigo-100 shadow-lg rounded-xl max-w-2xl mx-auto transform transition-all duration-300 hover:scale-[1.02]"
    >
      <h2 className="text-2xl sm:text-3xl font-extrabold mb-6 text-gray-800 border-b-4 border-blue-500 pb-2 text-center tracking-wider">
        About Me
      </h2>
      
      <div className="max-h-[70vh] overflow-y-auto scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-blue-100 pr-2">
        <div className="space-y-4">
          {[
            { label: "Name", value: "Akshit Shukrawal" },
            { 
              label: "Current Position", 
              value: "Junior Undergraduate, Department of Mechanical Engineering, IIT Kanpur" 
            },
            { label: "Phone", value: "+91-9314460756" },
            { 
              label: "Emails", 
              value: [
                "akshitsh22@iitk.ac.in",
                "akshitshukrawal@gmail.com"
              ]
            },
            { 
              label: "LinkedIn", 
              type: "link",
              href: "https://www.linkedin.com/in/akshit-shukrawal-171804255/",
              value: "linkedin.com/in/akshit-shukrawal-171804255/" 
            },
            { 
              label: "GitHub", 
              type: "link",
              href: "https://github.com/akshitshukrawal",
              value: "github.com/akshitshukrawal" 
            },
            { 
              label: "Codeforces", 
              type: "link",
              href: "https://codeforces.com/profile/akshit_shukrawal",
              value: "codeforces.com/profile/akshit_shukrawal" 
            }
          ].map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-3 sm:p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow break-words"
            >
              <p className="mb-1">
                <span className="font-bold text-blue-700 mr-2 text-sm sm:text-base">
                  {item.label}:
                </span>
                {item.type === 'link' ? (
                  <a
                    href={item.href}
                    className="text-blue-600 hover:underline hover:text-blue-800 transition-colors text-xs sm:text-sm break-all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.value}
                  </a>
                ) : (
                  Array.isArray(item.value) ? (
                    <span className="text-gray-700 text-xs sm:text-sm">
                      {item.value.join(" | ")}
                    </span>
                  ) : (
                    <span className="text-gray-700 text-xs sm:text-sm break-words">
                      {item.value}
                    </span>
                  )
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}