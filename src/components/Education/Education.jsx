import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[8vw] md:px-[10vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are the details of my academic background.
        </p>
      </div>

      {/* Education Timeline */}
      <div className="flex flex-col gap-12">
        {education.map((edu) => (
          <div
            key={edu.id}
            className="relative flex flex-col md:flex-row items-start gap-6 bg-gray-900 border border-white p-6 md:p-8 rounded-2xl shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] hover:scale-[1.02] transition-transform duration-300"
          >
            {/* Logo */}
            <div className="w-24 h-24 bg-white rounded-xl overflow-hidden flex-shrink-0">
              <img
                src={edu.img}
                alt={edu.school}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Content */}
            <div className="flex flex-col text-left">
              <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
              <h4 className="text-md text-gray-300">{edu.school}</h4>
              <p className="text-sm text-gray-500 mt-1">{edu.date}</p>
              <p className="mt-2 text-gray-400 font-bold">Grade: {edu.grade}</p>
              <p className="mt-2 text-gray-400">{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
