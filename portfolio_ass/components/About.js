"use client";

export function About() {
  return (
    <section 
      id="about" 
      className="p-8 bg-gradient-to-br from-blue-50 to-indigo-100 shadow-lg rounded-xl max-w-2xl mx-auto transform transition-all duration-300 hover:scale-[1.02]"
    >
      <h2 className="text-3xl font-extrabold mb-6 text-gray-800 border-b-4 border-blue-500 pb-2 text-center tracking-wider">
        About Me
      </h2>
      
      <div className="space-y-4">
        <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <p className="mb-2">
            <span className="font-bold text-blue-700 mr-2">Name:</span>
            <span className="text-gray-700">Akshit Shukrawal</span>
          </p>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <p className="mb-2">
            <span className="font-bold text-blue-700 mr-2">Current Position:</span>
            <span className="text-gray-700">Junior Undergraduate, Department of Mechanical Engineering, IIT Kanpur</span>
          </p>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <p className="mb-2">
            <span className="font-bold text-blue-700 mr-2">Phone:</span>
            <span className="text-gray-700">+91-9314460756</span>
          </p>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <p className="mb-2">
            <span className="font-bold text-blue-700 mr-2">Emails:</span>
            <span className="text-gray-700">
              akshitsh22@iitk.ac.in | 
              <span className="ml-1 text-blue-600 hover:underline">akshitshukrawal@gmail.com</span>
            </span>
          </p>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <p className="mb-2">
            <span className="font-bold text-blue-700 mr-2">LinkedIn:</span>
            <a
              href="https://www.linkedin.com/in/akshit-shukrawal-171804255/"
              className="text-blue-600 hover:underline hover:text-blue-800 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/akshit-shukrawal-171804255/
            </a>
          </p>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <p className="mb-2">
            <span className="font-bold text-blue-700 mr-2">GitHub:</span>
            <a
              href="https://github.com/akshitshukrawal"
              className="text-blue-600 hover:underline hover:text-blue-800 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/akshitshukrawal
            </a>
          </p>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <p className="mb-2">
            <span className="font-bold text-blue-700 mr-2">Codeforces:</span>
            <a
              href="https://codeforces.com/profile/akshit_shukrawal"
              className="text-blue-600 hover:underline hover:text-blue-800 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              codeforces.com/profile/akshit_shukrawal
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}