import React, { useState } from "react";

const ContactUs = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({ email: "", phone: "" });

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const validatePhone = (value) => {
    const egyptianPhoneRegex = /^01[0-2,5]{1}[0-9]{8}$/;
    return egyptianPhoneRegex.test(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;

    if (!validateEmail(email)) {
      valid = false;
      setErrors((prev) => ({ ...prev, email: "Invalid email address" }));
    } else {
      setErrors((prev) => ({ ...prev, email: "" }));
    }

    if (!validatePhone(phone)) {
      valid = false;
      setErrors((prev) => ({
        ...prev,
        phone: "Invalid Egyptian phone number",
      }));
    } else {
      setErrors((prev) => ({ ...prev, phone: "" }));
    }

    if (valid) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between px-4 py-8 md:px-16">
      <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <img
          src="./photos/map.png"
          alt="Map"
          className="w-full md:w-3/4 rounded shadow"
        />
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full md:w-1/2 space-y-4 bg-white p-6 rounded shadow"
      >
        <h1 className="text-2xl font-bold">
          <span>
            <span className="text-orange-500"> هيا</span>
            نتواصل !
          </span>
        </h1>
        <p className="text-gray-600">
          يمكنك التواصل معنا من خلال ترك رسالة وسيتم التواصل معك لاحقًا.
        </p>

        <div>
          <input
            type="text"
            placeholder="Name"
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:ring-orange-500 text-left"
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:ring-orange-500 text-left"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        <div>
          <input
            type="text"
            placeholder="Phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:ring-orange-500 text-left"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone}</p>
          )}
        </div>

        <div>
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:ring-orange-500 text-left"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 text-white p-2 rounded hover:bg-orange-600"
        >
          إرسال
        </button>
      </form>
    </div>
  );
};

export default ContactUs;