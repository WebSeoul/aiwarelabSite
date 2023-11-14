"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
function ContactForm() {
  const [state, handleSubmit] = useForm("xgejbwjk");

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <div className="flexCenter w-full mb-24 px-8 py-8 get-in-touch">
      <form
        onSubmit={handleSubmit}
        // className="padding-container max-container flex w-6/12 flex-col gap-5"
        className="mContactUs max-container rounded-lg shadow-xl flex flex-col px-8 py-8 bg-white dark:bg-white gap-5 w-7/12"
      >
        <h1 className="flexCenter text-2xl font-bold dark:text-gray-50">
          LET"S GET IN TOUCH
        </h1>
        <label
          htmlFor="email"
          //   className="bold-18 whitespace-nowrap"
          className="text-gray-500 font-light mt-8 dark:text-gray-50"
        >
          Email Address<span className="text-red-500 dark:text-gray-50"></span>
        </label>
        <input
          id="email"
          type="email"
          name="email"
          className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <label
          htmlFor="email"
          className="text-gray-500 font-light mt-4 dark:text-gray-50"
        >
          Subject<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="subject"
          className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
        />

        <label
          htmlFor="email"
          //   className="bold-18 whitespace-nowrap"
          className="text-gray-500 font-light mt-8 dark:text-gray-50"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <label
          htmlFor="dropdown"
          className="text-gray-500 font-light mt-8 dark:text-gray-50"
        >
          Select an option:
        </label>
        <select
          id="dropdown"
          className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
        >
          <option value="">Select...</option>
          <option value="option1">Less than $1,000</option>
          <option value="option2">$2,000 - $5,000</option>
          <option value="option3">$5,000 - $7,500</option>
          <option value="option4">$7,500 - $10,000</option>
        </select>
        {/* <button type="submit" disabled={state.submitting}> 
          Submit
        </button>*/}
        <button
          //   className="flexCenter gap-3 rounded-full border"
          className="px-10 mt-8 py-2 bg-blue-100 text-gray-50 font-light rounded-md text-lg flex flex-row items-center"
          disabled={state.submitting}
        >
          <label className="bold-16 whitespace-nowrap cursor-pointer">
            {<p>Submit</p>}
          </label>
        </button>
      </form>
    </div>
  );
}
function App() {
  return <ContactForm />;
}
export default App;
