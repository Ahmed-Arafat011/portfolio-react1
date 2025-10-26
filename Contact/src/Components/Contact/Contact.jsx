import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    userName: "",
    userAge: "",
    userEmail: "",
    userPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message Sent Successfully!");
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      
      <section className="flex flex-col items-center justify-center flex-grow py-12 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] uppercase mb-3">
          Contact Section
        </h2>
        <div className="w-20 h-[2px] bg-[#2C3E50] mb-8 relative">
          <span className="absolute left-1/2 -translate-x-1/2 -top-2 text-[#2C3E50] text-xl">
            ★
          </span>
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md flex flex-col gap-6"
        >
          <input
            type="text"
            name="userName"
            placeholder="userName"
            value={formData.userName}
            onChange={handleChange}
            className="border-b-2 border-gray-300 focus:border-teal-500 outline-none p-2"
            required
          />

          <input
            type="number"
            name="userAge"
            placeholder="userAge"
            value={formData.userAge}
            onChange={handleChange}
            className="border-b-2 border-gray-300 focus:border-teal-500 outline-none p-2"
            required
          />

          <input
            type="email"
            name="userEmail"
            placeholder="userEmail"
            value={formData.userEmail}
            onChange={handleChange}
            className="border-b-2 border-gray-300 focus:border-teal-500 outline-none p-2"
            required
          />

          <input
            type="password"
            name="userPassword"
            placeholder="userPassword"
            value={formData.userPassword}
            onChange={handleChange}
            className="border-b-2 border-gray-300 focus:border-teal-500 outline-none p-2"
            required
          />

          <button
            type="submit"
            className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded-md transition w-fit self-start"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}