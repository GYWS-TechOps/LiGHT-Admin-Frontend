import React, { useState } from "react";
import { postJson } from "../utils/api";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState({ show: false, type: '', message: '' });

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  try {
    await postJson('/api/contact-messages', { name, email, message });

    setNotification({ show: true, type: 'success', message: 'Message sent successfully! 🎉' });
    setName("");
    setEmail("");
    setMessage("");
  } catch (error) {
    setNotification({ show: true, type: 'error', message: error.message || 'Error sending message. Please try again. ❌' });
    console.error("Error!", error);
  } finally {
    setLoading(false);
    // Auto-hide notification after 5 seconds
    setTimeout(() => setNotification({ show: false, type: '', message: '' }), 5000);
    }
  };

  return (
    <div className="relative">
      {/* Top-right notification */}
      {notification.show && (
        <div className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg border-l-4 animate-slide-in ${
          notification.type === 'success' 
            ? 'bg-green-100 border-green-500 text-green-800' 
            : 'bg-red-100 border-red-500 text-red-800'
        }`}>
          <div className="flex items-center justify-between min-w-[300px]">
            <div className="flex items-center">
              <span className="text-xl mr-3">
                {notification.type === 'success' ? '🎉' : '❌'}
              </span>
              <p className="font-medium">{notification.message}</p>
            </div>
            <button 
              onClick={() => setNotification({ show: false, type: '', message: '' })}
              className="text-gray-500 hover:text-gray-700 ml-4 text-lg"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Banner Section */}
      <div
        className="relative bg-cover bg-center h-64 flex flex-col justify-center items-start px-12 text-white bg-gray-800"

      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-2">Contact With Us</h1>
          <p className="text-lg max-w-xl">
            Help today because tomorrow you may be the one who needs more helping!
          </p>
          <div className="flex items-center gap-2 mt-4 text-sm">
            <button
              onClick={() => (window.location.href = "https://light.gyws.org/index.php")}
              className="font-bold hover:underline"
            >
              HOME
            </button>
            <span className="text-y ellow-400">/</span>
            <span className="text-yellow-400 font-semibold">CONTACT</span>
          </div>
        </div>
      </div>

      {/* Contact Form Card */}
      <div className="flex flex-col lg:flex-row justify-between p-8 bg-amber-50 rounded-xl shadow-md max-w-5xl mx-auto my-8">
        
        {/* Left Side - Get in Touch */}
        <div className="w-full lg:w-1/2 lg:pr-6 mb-6 lg:mb-0">
          <h2 className="text-lg font-bold mb-4">GET IN TOUCH</h2>
          <p className="text-gray-600 mb-2">
            Jagriti Vidya Mandir, Hostel Vill. Tangasole,
             P.O- Salua, P.S- Kharagpur (Local), Dist- Paschim Medinipur, Kharagpur, West-Bengal, Pin- 721145
          </p>
          <p className="text-gray-600 mb-2">📞 91+ 94147 29199 </p>
          <p className="text-gray-600">✉️ light@gyws.org</p>
        </div>

        {/* Right Side - Query Form */}
        <div className="w-full lg:w-1/2 lg:pl-6">
          <h2 className="text-lg font-bold mb-4">QUERY HERE</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full sm:w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full sm:w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <textarea
              type="query"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-lg h-28 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            ></textarea>
            <div className="flex justify-center lg:justify-start">
              <button
                type="submit"
                disabled={loading}
                className={`bg-[rgb(240,210,55)] hover:bg-[rgb(200,167,20)] text-black px-6 py-3 rounded-lg transition ${
                  loading && "opacity-70 cursor-not-allowed"
                }`}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;