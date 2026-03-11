import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Solutions = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}${import.meta.env.VITE_SERVICES_API}`)
      .then((res) => res.json())
      .then((data) => {
        setServices(data.message || []);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="relative py-16 sm:py-20 md:py-24
                        bg-linear-to-br from-slate-900 via-indigo-900 to-slate-950 
                        overflow-hidden text-white">

      {/* Blur Effects */}
      <div className="absolute top-10 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-green-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-5 sm:right-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Our <span className="text-green-400">Solutions</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">

          {services.map((item, index) => (
            <Link
              key={index}
              to={`/service/${item.name}`}
              className="flex flex-col items-center justify-center
                         bg-white/10 backdrop-blur-lg border border-white/20
                         rounded-xl sm:rounded-2xl
                         p-6 sm:p-8
                         hover:scale-105 transition duration-300"
            >
              {item.icon && (
                <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 mb-4">
                  <img
                    src={`${import.meta.env.VITE_API_BASE_URL}${item.icon}`}
                    alt={item.service_name}
                    className="w-full h-full object-contain"
                  />
                </div>
              )}

              <h3 className="text-base sm:text-lg font-semibold text-center">
                {item.service_name}
              </h3>
            </Link>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Solutions;