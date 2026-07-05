import React, { useState } from "react";

const ContactForm = () => {
  //   const [formData, setFormData] = useState({
  //     name: "",
  //     email: "",
  //     message: "",
  //   });

  //   const handleChange = (e) => {
  //     setFormData((prev) => ({
  //       ...prev,
  //       [e.target.name]: e.target.value,
  //     }));
  //   };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();

  //     console.log(formData);

  //     alert("Message sent successfully!");

  //     setFormData({
  //       name: "",
  //       email: "",
  //       message: "",
  //     });
  //   };

  return (
    <form
      action={"https://formsubmit.co/jannatferdoush1212@gmail.com"}
      method="POST"
      className="flex flex-col gap-5 w-full mt-8 space-y-4 border p-2 rounded-lg shadow-lg bg-white/40 shadow-violet-300"
    >
      <input
        type="text"
        name="name"
        placeholder="Enter Your Name"
        // value={formData.name}
        // onChange={handleChange}
        required
        className="input input-bordered w-full"
      />

      <input
        type="email"
        name="email"
        placeholder="Enter Your Email"
        // value={formData.email}
        // onChange={handleChange}
        required
        className="input input-bordered w-full"
      />

      <textarea
        name="message"
        rows="6"
        placeholder="Write your message"
        // value={formData.message}
        // onChange={handleChange}
        required
        className="textarea textarea-bordered w-full"
      />

      <div className="flex gap-4">
        <button type="submit" className="btn btn-primary hover:bg-blue-500">
          Send Message
        </button>

        <button
          type="reset"
          className="btn btn-outline"
          //   onClick={() =>
          //     setFormData({
          //       name: "",
          //       email: "",
          //       message: "",
          //     })
          //   }
        >
          Reset
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
