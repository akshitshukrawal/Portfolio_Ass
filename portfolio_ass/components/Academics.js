"use client";

export function Academics() {
  return (
    <section 
      id="acads" 
      className="p-8 bg-gradient-to-br from-blue-50 to-indigo-100 shadow-lg rounded-xl max-w-4xl mx-auto transform transition-all duration-300 hover:scale-[1.01]"
    >
      <h2 className="text-3xl font-extrabold mb-6 text-gray-800 border-b-4 border-blue-500 pb-2 text-center tracking-wider">
        Academic Qualifications
      </h2>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left border-separate border-spacing-0 rounded-lg overflow-hidden shadow-md">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="p-4 font-semibold first:rounded-tl-lg last:rounded-tr-lg">Year</th>
              <th className="p-4 font-semibold">Degree/Certificate</th>
              <th className="p-4 font-semibold">Institute</th>
              <th className="p-4 font-semibold last:rounded-tr-lg">CPI/%</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white transition-colors hover:bg-blue-50">
              <td className="p-4 border-b border-gray-200">2022 - Present</td>
              <td className="p-4 border-b border-gray-200 font-medium text-gray-800">B.Tech</td>
              <td className="p-4 border-b border-gray-200">IIT Kanpur</td>
              <td className="p-4 border-b border-gray-200 font-bold text-blue-600">8/10</td>
            </tr>
            <tr className="bg-white transition-colors hover:bg-blue-50">
              <td className="p-4 border-b border-gray-200">2022</td>
              <td className="p-4 border-b border-gray-200 font-medium text-gray-800">RBSE (XII)</td>
              <td className="p-4 border-b border-gray-200">M B I SR SEC SCH, Kota</td>
              <td className="p-4 border-b border-gray-200 font-bold text-blue-600">83%</td>
            </tr>
            <tr className="bg-white transition-colors hover:bg-blue-50">
              <td className="p-4 border-b border-gray-200">2020</td>
              <td className="p-4 border-b border-gray-200 font-medium text-gray-800">CBSE (X)</td>
              <td className="p-4 border-b border-gray-200">Lawrence & Mayo Public School, Kota</td>
              <td className="p-4 border-b border-gray-200 font-bold text-blue-600">91%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}