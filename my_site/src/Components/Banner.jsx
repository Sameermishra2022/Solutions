import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  const [bannerData, setBannerData] = useState(null);

  useEffect(() => {
    fetch("http://codesphereit.in/api/method/solutions.hero.hero")
      .then((res) => res.json())
      .then((data) => {
        setBannerData(data.data);
      })
      .catch((err) => console.error("Banner fetch error:", err));
  }, []);

  if (!bannerData) return null;

  // Highlight "transformation" word
  const highlightText = (text) => {
    return text.split(" ").map((word, index) =>
      word.toLowerCase().includes("transformation") ? (
        <span key={index} className="text-green-400">
          {word}{" "}
        </span>
      ) : (
        word + " "
      )
    );
  };

  return (
    <section className="relative min-h-screen flex items-center bg-linear-to-br from-slate-900 via-indigo-900 to-slate-950 overflow-hidden">

      {/* Decorative Blur Circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-24 
                      grid lg:grid-cols-2 gap-16 items-center">

        {/* RIGHT COLUMN (Image first on mobile & tablet) */}
        <div className="flex justify-center order-1 lg:order-2">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 
                          rounded-2xl p-6 shadow-2xl 
                          w-full max-w-xs md:max-w-sm lg:max-w-md">

            <img
              src={`http://codesphereit.in${bannerData.hero_image}`}
              alt="Banner"
              className="w-full rounded-2xl"
            />

          </div>
        </div>

        {/* LEFT COLUMN */}
        <div className="space-y-8 text-white order-2 lg:order-1">

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            {highlightText(bannerData.tagline)}
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-xl">
            {bannerData.hero_content}
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="bg-linear-to-r from-green-500 to-green-400 
                         px-8 py-3 rounded-lg font-semibold text-white 
                         hover:scale-105 hover:shadow-xl 
                         transition-all duration-300"
            >
              Contact Us
            </Link>

            <Link
              to="/about"
              className="border border-white/30 backdrop-blur-md 
                         px-8 py-3 rounded-lg font-semibold text-white 
                         hover:bg-white/10 transition-all duration-300"
            >
              Learn More
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Banner;