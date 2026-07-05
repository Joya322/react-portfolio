import React from "react";
import ContactForm from "./ContactForm";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

const Contact = () => {
  return (
    <section className="mt-8">
      <div class="contact col-4" id="contact-me">
        <h2 className="text-3xl font-bold text-center">Contact Me</h2>
        <p className="mx-auto lg:w-3/5 text-center mt-3 opacity-80">
          Have a project in mind or an opportunity to discuss? Feel free to
          reach out—I'd be happy to connect.
        </p>
      </div>
      <div className="lg:grid lg:grid-cols-2 flex flex-col gap-10 lg:w-3/4 mx-auto ">
        {/* contact form */}
        <ContactForm />

        {/* moore ways to contact */}
        <div className="flex flex-col justify-center items-center">
          <div className="bg-white/40 rounded-lg shadow-lg shadow-violet-500 p-10">
            <h4 className="text-xl font-semibold text-gray-500 mb-4">
              More ways to Contact
            </h4>
            <div className="media-buttons flex justify-center items-center gap-10">
              {/* email */}
              <button
                className="btn request-callback bg-violet-300"
                onClick={() =>
                  (window.location.href = "mailto:jannatferdoush1212@gmail.com")
                }
              >
                <TfiEmail className="text-2xl text-violet-950" />
              </button>
              {/* phone */}
              <button
                className="btn request-callback bg-violet-300"
                onClick={() => {
                  window.location.href = "tel:+8801310811856";
                }}
              >
                <FaPhone className="text-2xl text-violet-950" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
