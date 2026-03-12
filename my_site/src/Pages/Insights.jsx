import React from "react";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";

const insights = [
  {
    title: "Future of Artificial Intelligence",
    slug: "ai-future",
    category: "Technology",
    desc: "Exploring how AI is transforming industries and digital experiences.",
  },
  {
    title: "Digital Transformation in Healthcare",
    slug: "healthcare-digital",
    category: "Healthcare",
    desc: "How modern technologies are revolutionizing healthcare systems.",
  },
  {
    title: "E-Commerce Trends in 2025",
    slug: "ecommerce-trends",
    category: "E-Commerce",
    desc: "Key trends shaping the future of online shopping platforms.",
  },
  {
    title: "Cloud Computing for Enterprises",
    slug: "cloud-enterprise",
    category: "Cloud",
    desc: "Why enterprises are moving to scalable cloud infrastructures.",
  },
];

const Insights = () => {
  return (
    <>
      <Navbar />

      <section className="min-h-screen pt-28 pb-20 bg-linear-to-br from-slate-900 via-indigo-900 to-slate-950 text-white">

        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold">
              Latest <span className="text-green-400">Insights</span>
            </h1>

            <p className="text-gray-300 mt-4">
              Stay updated with the latest technology trends and insights.
            </p>
          </div>

          {/* Insights Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {insights.map((item, index) => (
              <Link
                key={index}
                to={`/insight/${item.slug}`}
                className="bg-white/10 backdrop-blur-xl border border-white/20
                rounded-2xl p-8 hover:scale-105 transition duration-300"
              >

                <p className="text-green-400 text-sm mb-3">
                  {item.category}
                </p>

                <h3 className="text-xl font-semibold mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-300 text-sm">
                  {item.desc}
                </p>

              </Link>
            ))}

          </div>

        </div>

      </section>
    </>
  );
};

export default Insights;