import { Send } from "lucide-react";
import { useState } from "react";
import Swal from "sweetalert2";

const Form = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Thanks for your feedback !",
      text: "You sent the message!",
      icon: "success",
      customClass: {
        popup: 'my-popup-class',
        title: 'my-title-class',
        content: 'my-content-class',
        confirmButton: 'my-confirm-button-class',
        theme: 'theme-dark',
      },
    });
  };

  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        Contact Us
      </h2>
      <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
        <div className="mb-6">
          <input
            type="email"
            className="w-full px-4 py-2 border border-neutral-700 rounded-md placeholder-neutral-400 focus:outline-none focus:border-orange-500"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <textarea
            className="w-full px-4 py-2 border border-neutral-700 rounded-md placeholder-neutral-400 focus:outline-none focus:border-orange-500"
            rows="4"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full flex justify-center items-center py-3 px-6 bg-gradient-to-r from-orange-500 to-orange-800 text-white font-semibold rounded-md shadow-md hover:shadow-lg transition duration-200"
        >
          <Send className="mr-2" />
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Form;
