import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

// npm i @emailjs/browser

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_53hoyon",
        "template_mikzp9k",
        form.current,
        "uk6hSMKyxcHRGKBqM"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message sent!");
          // alert("Message sent!");
          window.location.reload();
        },
        (error) => {
          console.log(error.text);
          alert(error.text)
        }
      );
  };

  return (
    <div className="flex justify-center items-center">
    <div className="w-[700px] m-0 mt-6 mb-6 md:m-10 p-4  rounded-lg">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
        Connect with us
      </h2>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col mx-0 md:mx-20">
        <label className="font-semibold text-gray-700">Your Name</label>
        <input
          type="text"
          name="user_name"
          className="border border-org rounded-md p-2 focus:outline-none focus:border-yel1"
          required
        />

        <label className="font-semibold text-gray-700 mt-4">Your Email</label>
        <input
          type="email"
          name="user_email"
          className="border border-org rounded-md p-2 focus:outline-none focus:border-yel1"
          required
        />

        <label className="font-semibold text-gray-700 mt-4">Message</label>
        <textarea
          name="message"
          className="border border-org rounded-md p-2 h-28 focus:outline-none focus:border-yel1"
          required
        ></textarea>

        <button
          type="submit"
          className="mt-6 bg-gradient-to-r from-org to-yel1 text-white font-bold py-2 px-4 rounded-md hover:bg-gradient-to-l hover:scale-110 transition-all"
        >
          Send
        </button>
      </form>
    </div>
    </div>
  );
};

export default Contact;
