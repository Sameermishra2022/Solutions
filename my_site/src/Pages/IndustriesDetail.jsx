import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";

const industryData = {
  healthcare: {
    title: "Healthcare",
    description:
      "We help healthcare organizations modernize their digital infrastructure with secure, scalable, and patient-focused technology solutions.",
    technologies: ["React", "Node.js", "Python", "AWS", "AI/ML"],
    solutions: [
      "Hospital Management Systems",
      "Telemedicine Platforms",
      "Electronic Health Records (EHR)",
      "Healthcare Mobile Apps",
    ],
  },

  finance: {
    title: "Finance",
    description:
      "Our fintech solutions empower financial institutions with secure, reliable, and scalable digital systems.",
    technologies: ["React", "Java", "Spring Boot", "Blockchain", "AWS"],
    solutions: [
      "Digital Banking Platforms",
      "Payment Gateways",
      "Fraud Detection Systems",
      "Financial Analytics Dashboards",
    ],
  },

  ecommerce: {
    title: "E-Commerce",
    description:
      "We build scalable e-commerce platforms that deliver seamless shopping experiences and boost conversions.",
    technologies: ["React", "Next.js", "Node.js", "MongoDB", "Stripe"],
    solutions: [
      "Online Store Development",
      "Payment Integration",
      "Inventory Management Systems",
      "Customer Experience Platforms",
    ],
  },

  education: {
    title: "Education",
    description:
      "We deliver modern digital learning platforms to transform traditional education into engaging online experiences.",
    technologies: ["React", "Node.js", "Firebase", "AWS"],
    solutions: [
      "Learning Management Systems",
      "Online Examination Platforms",
      "Student Portals",
      "Virtual Classroom Systems",
    ],
  },

  manufacturing: {
    title: "Manufacturing",
    description:
      "Our digital solutions help manufacturers streamline operations, improve efficiency, and reduce costs.",
    technologies: ["IoT", "React", "Node.js", "Python", "AWS"],
    solutions: [
      "Supply Chain Automation",
      "Production Monitoring Systems",
      "Inventory Management",
      "Industrial IoT Platforms",
    ],
  },

  logistics: {
    title: "Logistics",
    description:
      "We develop smart logistics systems that optimize supply chains and enable real-time tracking.",
    technologies: ["React", "Node.js", "Google Maps API", "AWS"],
    solutions: [
      "Fleet Management Systems",
      "Real-Time Tracking Platforms",
      "Warehouse Management Systems",
      "Route Optimization Tools",
    ],
  },

  "real-estate": {
    title: "Real Estate",
    description:
      "We create digital platforms that simplify property management, listing, and customer engagement.",
    technologies: ["React", "Node.js", "MongoDB", "AWS"],
    solutions: [
      "Property Listing Platforms",
      "Real Estate CRM",
      "Virtual Property Tours",
      "Lead Management Systems",
    ],
  },

  telecom: {
    title: "Telecommunications",
    description:
      "Our telecom solutions help providers manage networks, customers, and services efficiently.",
    technologies: ["React", "Java", "Microservices", "AWS"],
    solutions: [
      "Customer Management Systems",
      "Network Monitoring Tools",
      "Billing Platforms",
      "Telecom Analytics Systems",
    ],
  },
};

const IndustryDetail = () => {
  const { id } = useParams();
  const data = industryData[id];

  if (!data) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
          Industry not found
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <section className="min-h-screen pt-28 pb-20 bg-linear-to-br from-slate-900 via-indigo-900 to-slate-950 text-white">

        <div className="max-w-6xl mx-auto px-6 space-y-16">

          {/* Heading */}
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              {data.title} Industry
            </h1>

            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              {data.description}
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h2 className="text-3xl font-semibold text-center mb-10">
              Our Solutions
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {data.solutions.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg border border-white/20
                  rounded-2xl p-6 text-center hover:scale-105 transition"
                >
                  <h3 className="text-lg font-semibold text-green-400">
                    {item}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h2 className="text-3xl font-semibold text-center mb-10">
              Technologies We Use
            </h2>

            <div className="flex flex-wrap justify-center gap-4">
              {data.technologies.map((tech, index) => (
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

export default IndustryDetail;