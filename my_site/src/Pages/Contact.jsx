import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";

const Contact = () => {
  const [contact, setContact] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://codesphereit.in/api/method/solutions.contact.contact_info")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch contact info");
        return res.json();
      })
      .then((data) => {
        setContact(data.data || data.message?.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
          Loading contact info...
        </div>
      </>
    );

  if (error)
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-slate-900 text-red-400">
          {error}
        </div>
      </>
    );

  return (
    <>
      <Navbar />

      <section className="relative min-h-screen bg-linear-to-br from-slate-900 via-indigo-900 to-slate-950 pt-28 pb-20">
        {/* Blur Effects */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          {/* RIGHT SIDE FORM (Mobile & Tablet Upper) */}
          <div
            className="bg-white/10 backdrop-blur-xl border border-white/20 
                          rounded-2xl p-8 shadow-2xl 
                          order-1 lg:order-2"
          >
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:ring-2 focus:ring-green-400"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:ring-2 focus:ring-green-400"
              />

              <textarea
                rows="4"
                placeholder="Message"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:ring-2 focus:ring-green-400"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-linear-to-r from-green-500 to-emerald-400 py-3 rounded-lg font-semibold hover:scale-105 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* LEFT SIDE INFO */}
          <div className="text-white space-y-8 order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold">
              Get In <span className="text-green-400">Touch</span>
            </h1>

            <div className="space-y-6 text-gray-300">
              <div>
                <p className="text-sm uppercase tracking-wide">Phone</p>
                <a
                  href={`tel:${contact.phone}`}
                  className="text-lg hover:text-green-400"
                >
                  {contact.phone}
                </a>
              </div>

              <div>
                <p className="text-sm uppercase tracking-wide">Email</p>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-lg hover:text-green-400"
                >
                  {contact.email}
                </a>
              </div>

              <div>
                <p className="text-sm uppercase tracking-wide">Address</p>
                <p className="text-lg">{contact.address}</p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center lg:justify-start gap-6 pt-10">
              {contact.social_hub?.map((item, index) => (
                <a
                  key={index}
                  href={item.links}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-xl hover:scale-110 transition"
                >
                  <img
                    src={`https://codesphereit.in${item.icon}`}
                    alt={item.title}
                    className="w-6 h-6 brightness-0 invert sepia hue-rotate-90 saturate-[5] hover:scale-110 transition"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
