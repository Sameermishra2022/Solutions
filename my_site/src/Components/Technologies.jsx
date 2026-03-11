import React, { useEffect, useState } from "react";

const Technology = () => {
  const [techData, setTechData] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}${import.meta.env.VITE_TECH_API}`)
      .then((res) => res.json())
      .then((data) => {
        setTechData(data.message || []);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="relative py-16 sm:py-20 md:py-24
                        bg-linear-to-br from-slate-900 via-indigo-900 to-slate-950
                        overflow-hidden text-white">

      <div className="absolute top-10 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-green-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-5 sm:right-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-14 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Our <span className="text-green-400">Technology</span>
          </h2>
        </div>

        <div className="space-y-12 sm:space-y-16">

          {techData.map((category, index) => (
            <div key={index}>

              <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-center">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 sm:gap-8">

                {category.technology.map((tech, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center justify-center
                               bg-white/10 backdrop-blur-lg border border-white/20
                               rounded-xl sm:rounded-2xl
                               p-4 sm:p-6
                               hover:scale-105 transition duration-300"
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-3">
                      <img
                        src={`${import.meta.env.VITE_API_BASE_URL}${tech.icon}`}
                        alt={tech.title}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    <h4 className="text-sm sm:text-base font-medium text-center">
                      {tech.title}
                    </h4>
                  </div>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Technology;