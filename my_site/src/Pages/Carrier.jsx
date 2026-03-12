import React from "react";
import Navbar from "../Components/Navbar";

const jobs = [
  {
    title: "Frontend Developer",
    location: "Remote / India",
    type: "Full Time",
    skills: "React, JavaScript, Tailwind"
  },
  {
    title: "Backend Developer",
    location: "Remote / India",
    type: "Full Time",
    skills: "Node.js, Express, MongoDB"
  },
  {
    title: "UI/UX Designer",
    location: "Remote",
    type: "Full Time",
    skills: "Figma, Adobe XD"
  },
  {
    title: "Digital Marketing Specialist",
    location: "Hybrid",
    type: "Full Time",
    skills: "SEO, Google Ads, Social Media"
  }
];

const Career = () => {
  return (
    <>
      <Navbar />

      <section className="min-h-screen pt-28 pb-20 bg-linear-to-br from-slate-900 via-indigo-900 to-slate-950 text-white">

        <div className="max-w-7xl mx-auto px-6">

          {/* Hero Section */}
          <div className="text-center mb-20">

            <h1 className="text-4xl md:text-5xl font-bold">
              Build Your <span className="text-green-400">Career With Us</span>
            </h1>

            <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
              Join our passionate team of developers, designers, and innovators 
              building next-generation digital solutions.
            </p>

          </div>

          {/* Why Work With Us */}
          <div className="mb-20">

            <h2 className="text-3xl font-semibold text-center mb-10">
              Why Work With Us
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

              <div className="bg-white/10 p-6 rounded-xl border border-white/20">
                <h3 className="text-green-400 font-semibold mb-2">
                  Innovative Projects
                </h3>
                <p className="text-gray-300 text-sm">
                  Work on modern technologies and real-world digital products.
                </p>
              </div>

              <div className="bg-white/10 p-6 rounded-xl border border-white/20">
                <h3 className="text-green-400 font-semibold mb-2">
                  Career Growth
                </h3>
                <p className="text-gray-300 text-sm">
                  Continuous learning and mentorship programs.
                </p>
              </div>

              <div className="bg-white/10 p-6 rounded-xl border border-white/20">
                <h3 className="text-green-400 font-semibold mb-2">
                  Flexible Work
                </h3>
                <p className="text-gray-300 text-sm">
                  Remote and hybrid work environment.
                </p>
              </div>

              <div className="bg-white/10 p-6 rounded-xl border border-white/20">
                <h3 className="text-green-400 font-semibold mb-2">
                  Friendly Culture
                </h3>
                <p className="text-gray-300 text-sm">
                  Supportive team with collaborative work culture.
                </p>
              </div>

            </div>

          </div>

          {/* Open Positions */}
          <div className="mb-20">

            <h2 className="text-3xl font-semibold text-center mb-10">
              Open Positions
            </h2>

            <div className="grid md:grid-cols-2 gap-8">

              {jobs.map((job, index) => (
                <div
                  key={index}
                  className="bg-white/10 p-6 rounded-xl border border-white/20 hover:scale-105 transition"
                >

                  <h3 className="text-xl font-semibold mb-3">
                    {job.title}
                  </h3>

                  <p className="text-gray-300 text-sm mb-2">
                    📍 {job.location}
                  </p>

                  <p className="text-gray-300 text-sm mb-2">
                    💼 {job.type}
                  </p>

                  <p className="text-gray-300 text-sm mb-4">
                    Skills: {job.skills}
                  </p>

                  <button className="px-5 py-2 bg-green-500 hover:bg-green-600 rounded-lg text-sm">
                    Apply Now
                  </button>

                </div>
              ))}

            </div>

          </div>

          {/* Hiring Process */}
          <div className="mb-20">

            <h2 className="text-3xl font-semibold text-center mb-10">
              Hiring Process
            </h2>

            <div className="grid md:grid-cols-4 gap-8 text-center">

              <div>
                <h3 className="text-green-400 font-semibold mb-2">
                  1. Application
                </h3>
                <p className="text-gray-300 text-sm">
                  Submit your resume and details.
                </p>
              </div>

              <div>
                <h3 className="text-green-400 font-semibold mb-2">
                  2. Interview
                </h3>
                <p className="text-gray-300 text-sm">
                  Technical and HR discussion.
                </p>
              </div>

              <div>
                <h3 className="text-green-400 font-semibold mb-2">
                  3. Assessment
                </h3>
                <p className="text-gray-300 text-sm">
                  Small technical task or test.
                </p>
              </div>

              <div>
                <h3 className="text-green-400 font-semibold mb-2">
                  4. Offer
                </h3>
                <p className="text-gray-300 text-sm">
                  Offer letter and onboarding.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>
    </>
  );
};

export default Career;