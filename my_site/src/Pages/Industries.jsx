import React from "react";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";

const industries = [
  { name: "Healthcare", icon: "🏥", slug: "healthcare" },
  { name: "Finance", icon: "🏦", slug: "finance" },
  { name: "E-Commerce", icon: "🛒", slug: "ecommerce" },
  { name: "Education", icon: "🎓", slug: "education" },
  { name: "Manufacturing", icon: "🏭", slug: "manufacturing" },
  { name: "Logistics", icon: "🚚", slug: "logistics" },
  { name: "Real Estate", icon: "🏠", slug: "real-estate" },
  { name: "Telecom", icon: "📡", slug: "telecom" },
];

const Industries = () => {
  return (
    <>
      <Navbar />

      <section className="min-h-screen pt-28 pb-20 bg-linear-to-br from-slate-900 via-indigo-900 to-slate-950 text-white">

        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold">
              Industries We <span className="text-green-400">Serve</span>
            </h1>
            <p className="text-gray-300 mt-4">
              Delivering digital transformation across multiple industries
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

            {industries.map((item, index) => (
              <Link
                key={index}
                to={`/industry/${item.slug}`}
                className="bg-white/10 backdrop-blur-xl border border-white/20 
                rounded-2xl p-8 flex flex-col items-center justify-center
                hover:scale-105 transition duration-300"
              >

                <div className="text-5xl mb-4">
                  {item.icon}
                </div>

                <h3 className="text-lg font-semibold">
                  {item.name}
                </h3>

              </Link>
            ))}

          </div>

        </div>

      </section>
    </>
  );
};

export default Industries;