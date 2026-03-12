import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";

const insightData = {
  "ai-future": {
    title: "Future of Artificial Intelligence",
    content:
      "Artificial Intelligence is transforming industries by enabling automation, predictive analytics, and smarter decision-making. Companies are leveraging AI to enhance customer experiences and optimize operations.",
  },

  "healthcare-digital": {
    title: "Digital Transformation in Healthcare",
    content:
      "Healthcare organizations are adopting digital technologies such as telemedicine, electronic health records, and AI-powered diagnostics to improve patient care and operational efficiency.",
  },

  "ecommerce-trends": {
    title: "E-Commerce Trends in 2025",
    content:
      "Modern e-commerce platforms are focusing on personalization, mobile-first experiences, AI-powered recommendations, and faster checkout processes.",
  },

  "cloud-enterprise": {
    title: "Cloud Computing for Enterprises",
    content:
      "Enterprises are adopting cloud computing to improve scalability, security, and flexibility. Cloud platforms enable businesses to innovate faster and reduce infrastructure costs.",
  },
};

const InsightDetail = () => {

  const { id } = useParams();
  const data = insightData[id];

  if (!data) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
          Insight not found
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <section className="min-h-screen pt-28 pb-20 bg-linear-to-br from-slate-900 via-indigo-900 to-slate-950 text-white">

        <div className="max-w-4xl mx-auto px-6">

          <h1 className="text-4xl font-bold mb-8">
            {data.title}
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed">
            {data.content}
          </p>

        </div>

      </section>
    </>
  );
};

export default InsightDetail;