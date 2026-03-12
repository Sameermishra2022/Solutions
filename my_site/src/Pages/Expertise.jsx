import React from "react";
import Navbar from "../Components/Navbar";

const expertise = [
  {
    title: "Web Development",
    desc: "Modern responsive websites and web applications built using the latest technologies."
  },
  {
    title: "Mobile App Development",
    desc: "Cross-platform and native mobile apps for Android and iOS."
  },
  {
    title: "Cloud Solutions",
    desc: "Scalable and secure cloud infrastructure using AWS and modern cloud tools."
  },
  {
    title: "Artificial Intelligence",
    desc: "AI powered automation, machine learning and intelligent applications."
  },
  {
    title: "UI / UX Design",
    desc: "User centered design with modern and intuitive interfaces."
  },
  {
    title: "DevOps",
    desc: "CI/CD pipelines, automation and efficient deployment systems."
  }
];

const technologies = [
  "React",
  "Node.js",
  "JavaScript",
  "Python",
  "MongoDB",
  "AWS",
  "Docker",
  "Kubernetes"
];

const Expertise = () => {
  return (
    <>
      <Navbar />

      <section className="min-h-screen pt-28 pb-20 bg-linear-to-br from-slate-900 via-indigo-900 to-slate-950 text-white">

        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <div className="text-center mb-20">

            <h1 className="text-4xl md:text-5xl font-bold">
              Our <span className="text-green-400">Expertise</span>
            </h1>

            <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
              We combine technology, innovation, and industry knowledge to
              deliver powerful digital solutions.
            </p>

          </div>

          {/* Expertise Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">

            {expertise.map((item, index) => (
              <div
                key={index}
                className="bg-white/10 p-6 rounded-xl border border-white/20 hover:scale-105 transition"
              >
                <h3 className="text-xl font-semibold mb-3 text-green-400">
                  {item.title}
                </h3>

                <p className="text-gray-300 text-sm">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>

          {/* Technologies */}
          <div>

            <h2 className="text-3xl font-semibold text-center mb-10">
              Technologies We Use
            </h2>

            <div className="flex flex-wrap justify-center gap-4">

              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-6 py-2 bg-white/10 border border-white/20 rounded-full"
                >
                  {tech}
                </span>
              ))}

            </div>

          </div>

        </div>

      </section>
    </>
  );
};

export default Expertise;