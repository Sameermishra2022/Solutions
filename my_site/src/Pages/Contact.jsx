import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";

const Contact = () => {
  const [contact, setContact] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    msg: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMsg, setSubmitMsg] = useState("");

  // ✅ Fetch Contact Info
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

  // ✅ Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmitMsg("");

    try {
      const formPayload = new URLSearchParams();
      formPayload.append("first_name", formData.first_name);
      formPayload.append("last_name", formData.last_name);
      formPayload.append("email", formData.email);
      formPayload.append("phone", formData.phone);
      formPayload.append("msg", formData.msg);

      const response = await fetch(
        "https://codesphereit.in/api/method/solutions.contact.contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formPayload,
        }
      );

      const result = await response.json();

      if (response.ok && !result.exc) {
        setSubmitMsg("Message sent successfully ✅");

        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          phone: "",
          msg: "",
        });
      } else {
        setSubmitMsg("Backend validation failed ❌");
      }
    } catch (error) {
      setSubmitMsg("Error sending message ❌");
    }

    setIsSubmitting(false);
  };

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
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

          {/* INFO CARD */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl text-white order-2 lg:order-1">

            <h1 className="text-4xl md:text-5xl font-extrabold mb-10">
              Get In <span className="text-green-400">Touch</span>
            </h1>

            <div className="space-y-8 text-gray-300">

              <div>
                <p className="text-sm uppercase tracking-wide mb-1">Phone</p>
                <a
                  href={`tel:${contact?.phone}`}
                  className="text-lg hover:text-green-400 transition"
                >
                  {contact?.phone}
                </a>
              </div>

              <div>
                <p className="text-sm uppercase tracking-wide mb-1">Email</p>
                <a
                  href={`mailto:${contact?.email}`}
                  className="text-lg hover:text-green-400 transition"
                >
                  {contact?.email}
                </a>
              </div>

              <div>
                <p className="text-sm uppercase tracking-wide mb-1">Address</p>
                <p className="text-lg">{contact?.address}</p>
              </div>

            </div>

            {/* Social Icons */}
            <div className="flex gap-6 pt-10">
              {contact?.social_hub?.map((item, index) => (
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
                    className="w-6 h-6 brightness-0 invert sepia hue-rotate-90 saturate-[5]"
                  />
                </a>
              ))}
            </div>

          </div>

          {/* FORM CARD */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl order-1 lg:order-2">

            <form className="space-y-6" onSubmit={handleSubmit}>

              {/* First & Last Name Side by Side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  placeholder="First Name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:ring-2 focus:ring-green-400"
                />

                <input
                  type="text"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  placeholder="Last Name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:ring-2 focus:ring-green-400"
                />
              </div>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:ring-2 focus:ring-green-400"
              />

              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:ring-2 focus:ring-green-400"
              />

              <textarea
                name="msg"
                rows="4"
                value={formData.msg}
                onChange={handleChange}
                placeholder="Message"
                required
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:ring-2 focus:ring-green-400"
              ></textarea>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-linear-to-r from-green-500 to-emerald-400 py-3 rounded-lg font-semibold hover:scale-105 transition"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {submitMsg && (
                <p className="text-center text-green-400 mt-2">
                  {submitMsg}
                </p>
              )}

            </form>
          </div>

        </div>
      </section>
    </>
  );
};

export default Contact;