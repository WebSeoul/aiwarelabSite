"use client";
import React from "react";
import { useState } from "react";
import emailjs from "emailjs-com";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    messageType: "option",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Validate the form data (you may add more validation here)

    // Send an email using Email.js API
    try {
      await emailjs.send(
        "service_s5ky7zz", // replace with your Email.js service ID
        "template_uul9uwz", // replace with your Email.js template ID
        formData,
        "A0Iya7DmCp2XcYnHR" // replace with your Email.js user ID
      );

      console.log("Email sent successfully!");
    } catch (error) {
      console.error("Failed to send email:", error);
    }
  };

  return (
    <div className="flexCenter w-full mb-24 px-8 " id="get-in-touch">
      <form
        onSubmit={handleSubmit}
        className="mContactUs max-container rounded-lg shadow-xl flex flex-col px-8 py-8 bg-white dark:bg-white gap-5 w-7/12"
      >
        <h1 className="flexCenter text-2xl font-bold dark:text-gray-50">
          LET"S GET IN TOUCH
        </h1>
        <label className="text-gray-500 font-light mt-8 dark:text-gray-50">
          Name:
        </label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
        />

        <label className="text-gray-500 font-light mt-4 dark:text-gray-50">
          Email:
        </label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
        />

        <label className="text-gray-500 font-light mt-4 dark:text-gray-50">
          Message:
        </label>
        <textarea
          name="message"
          onChange={handleChange}
          className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
        />

        <label
          htmlFor="dropdown"
          className="text-gray-500 font-light mt-8 dark:text-gray-50"
        >
          Select an option:
        </label>
        <select
          id="dropdown"
          name="messageType"
          className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
          onChange={handleChange}
          value={formData.messageType}
        >
          <option value="option">Select...</option>
          <option value="l1">Less than $1,000</option>
          <option value="l2t5">$2,000 - $5,000</option>
          <option value="l5t10">$5,000 - $7,500</option>
          <option value="lg10">$7,500 - $10,000</option>
        </select>
        <button
          type="submit"
          className="pContactUsSubmitButton px-10 mt-8 py-2 bg-blue-100 text-gray-50 font-light rounded-md text-lg flex flex-row items-center justify-center"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
function App() {
  return <ContactForm />;
}
export default App;
