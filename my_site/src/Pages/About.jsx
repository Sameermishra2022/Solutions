import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";

const About = () => {
  const [aboutData, setAboutData] = useState({});
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}${import.meta.env.VITE_ABOUT_API}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("API RESPONSE:", data);
        setAboutData(data?.data || {});
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (aboutData?.testimonials?.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) =>
          prev === aboutData.testimonials.length - 1 ? 0 : prev + 1
        );
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [aboutData]);

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
          Loading...
        </div>
      </>
    );
  }

  const title = aboutData?.title || "";
  const highlighted = title.replace(
    /innovative digital/i,
    '<span class="text-green-400">innovative digital</span>'
  );

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-linear-to-br from-slate-900 via-indigo-900 to-slate-950 pt-32 pb-24 text-white">
        <div className="max-w-7xl mx-auto px-6 space-y-24">

          {/* TITLE */}
          <div className="text-center space-y-6">
            <h1
              className="text-5xl md:text-6xl font-extrabold leading-snug"
              dangerouslySetInnerHTML={{ __html: highlighted }}
            />
            <div className="w-24 h-1 bg-green-400 mx-auto rounded-full"></div>
          </div>

          {/* BRANDING IMAGE */}
          {aboutData?.branding && (
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
               src={`${import.meta.env.VITE_API_BASE_URL}${aboutData.branding}`}
                alt="Brand"
                className="w-full h-112.5 object-cover"
              />
            </div>
          )}

          {/* SOLUTIONS */}
          {aboutData?.solutions?.length > 0 && (
            <div>
              <h2 className="text-4xl font-bold text-center mb-14">
                Our Solutions
              </h2>

              <div className="grid md:grid-cols-2 gap-10">
                {aboutData.solutions.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-xl hover:scale-105 transition duration-300"
                  >
                    {/* ✅ 200x200 Fixed Image Box */}
                    <div className="flex justify-center mb-4">
                      <div className="w-50 h-50 overflow-hidden rounded-xl">
                        <img
                         src={`${import.meta.env.VITE_API_BASE_URL}${item.image}`}
                          alt={item.service_name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    <h3 className="text-2xl font-semibold text-green-400 mb-3 text-center">
                      {item.service_name}
                    </h3>

                    <p className="text-gray-300 text-sm leading-relaxed text-center">
                      {item.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* WHY CHOOSE US */}
          {aboutData?.why_choose_us?.length > 0 && (
            <div>
              <h2 className="text-4xl font-bold text-center mb-14">
                Why Choose Us
              </h2>

              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
                {aboutData.why_choose_us.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 text-center shadow-lg hover:-translate-y-2 transition duration-300"
                  >
                    <img
                      src={`${import.meta.env.VITE_API_BASE_URL}${item.icon}`}
                      alt={item.title}
                      className="h-14 mx-auto mb-4"
                    />
                    <h4 className="text-lg font-semibold text-green-400 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-300 text-sm">{item.content}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TESTIMONIALS */}
          {aboutData?.testimonials?.length > 0 && (
            <div>
              <h2 className="text-4xl font-bold text-center mb-14">
                Client Testimonials
              </h2>

              <div className="max-w-3xl mx-auto">
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 
                      rounded-2xl p-10 shadow-xl
                      max-w-2xl mx-auto min-h-80 
                      flex flex-col justify-center items-center text-center">

                  <p className="text-gray-300 text-base italic mb-8 leading-relaxed">
                    "{aboutData.testimonials[currentIndex].msg}"
                  </p>

                  <div className="space-y-1">
                    <h5 className="font-semibold text-green-400 text-lg">
                      {aboutData.testimonials[currentIndex].name}
                    </h5>

                    <p className="text-gray-400 text-sm">
                      {aboutData.testimonials[currentIndex].designation} —{" "}
                      {aboutData.testimonials[currentIndex].company}
                    </p>
                  </div>

                  <div className="flex items-center justify-center gap-6 mt-8">
                    <button
                      onClick={() =>
                        setCurrentIndex(
                          currentIndex === 0
                            ? aboutData.testimonials.length - 1
                            : currentIndex - 1
                        )
                      }
                      className="h-10 w-10 flex items-center justify-center
                                 bg-white/20 hover:bg-green-500
                                 backdrop-blur-md rounded-full
                                 transition duration-300"
                    >
                      ❮
                    </button>

                    <div className="flex gap-3">
                      {aboutData.testimonials.map((_, index) => (
                        <div
                          key={index}
                          onClick={() => setCurrentIndex(index)}
                          className={`h-3 w-3 rounded-full cursor-pointer transition-all duration-300 
                            ${
                              currentIndex === index
                                ? "bg-green-400 scale-125"
                                : "bg-gray-400/40"
                            }`}
                        />
                      ))}
                    </div>

                    <button
                      onClick={() =>
                        setCurrentIndex(
                          currentIndex === aboutData.testimonials.length - 1
                            ? 0
                            : currentIndex + 1
                        )
                      }
                      className="h-10 w-10 flex items-center justify-center
                                 bg-white/20 hover:bg-green-500
                                 backdrop-blur-md rounded-full
                                 transition duration-300"
                    >
                      ❯
                    </button>
                  </div>

                </div>
              </div>
            </div>
          )}

        </div>
      </section>
    </>
  );
};

export default About;