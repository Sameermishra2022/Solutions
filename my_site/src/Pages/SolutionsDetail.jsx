import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SolutionsDetail = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);

  useEffect(() => {
   fetch(
  `${import.meta.env.VITE_API_BASE_URL}${import.meta.env.VITE_SERVICE_DETAIL_API}?name=${id}`
)
      .then((res) => res.json())
      .then((data) => {
        setService(data.message);
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (!service) return null;

  return (
    <section className="relative min-h-screen py-24
                        bg-linear-to-br from-slate-900 via-indigo-900 to-slate-950
                        overflow-hidden text-white">

      {/* Blur Background Circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Service Title */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {service.service_name}
          </h1>

          {service.icon && (
            <img
              src={`${import.meta.env.VITE_API_BASE_URL}${service.icon}`}
              alt={service.service_name}
              className="w-20 mx-auto"
            />
          )}
        </div>

        {/* Main Image */}
        {service.image && (
          <div className="mb-16">
            <img
              src={`${import.meta.env.VITE_API_BASE_URL}${service.image}`}
              alt="service"
              className="w-full max-h-125 object-cover rounded-2xl 
                         border border-white/20 shadow-2xl"
            />
          </div>
        )}

        {/* Content Section */}
        {service.content && (
          <div className="mb-16 text-center max-w-4xl mx-auto">
            {service.content.heading && (
              <h2 className="text-3xl font-semibold mb-6">
                {service.content.heading}
              </h2>
            )}

            {service.content.content && (
              <p className="text-gray-300 text-lg leading-relaxed">
                {service.content.content}
              </p>
            )}
          </div>
        )}

        {/* Solutions / Modules */}
        {service.solution && (
          <div>
            <h3 className="text-2xl font-semibold mb-10 text-center">
              Key Modules
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {service.solution.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg 
                             border border-white/20
                             rounded-2xl p-6
                             hover:scale-105 transition duration-300"
                >
                  <h4 className="text-xl font-semibold mb-3 text-green-400">
                    {item.solution1}
                  </h4>

                  <p className="text-gray-300 text-sm">
                    {item.content}
                  </p>
                </div>
              ))}

            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default SolutionsDetail;