import Navbar from "../Navbar";
import Footer from "../Footer";

export default function Contact() {
  return (
    <>
      <Navbar />

      {/* Full-width background image */}
      <div
        className="w-full h-64 bg-cover bg-center"
        style={{ backgroundImage: "url('/contact.jpeg')" }}
      ></div>

      {/* Main content */}
      <div className="max-w-5xl mx-auto px-4 py-10">
        <p className="text-center text-gray-600 mb-10">
          Have questions, suggestions, or need assistance with our Library Management System? We'd love to hear from you.
        </p>

        {/* Contact Info */}
        <div className="mb-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div>
            <p className="font-semibold text-gray-800">Email</p>
            <p className="text-gray-600">support@lmsystem.com</p>
          </div>
          <div>
            <p className="font-semibold text-gray-800">Phone</p>
            <p className="text-gray-600">+21 (800) 123-545</p>
          </div>
          <div>
            <p className="font-semibold text-gray-800">Address</p>
            <p className="text-gray-600">123 Brown Road, Jaffna, Northern</p>
          </div>
        </div>

        {/* Contact Form Section with Image and Form Side by Side */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-200 p-4">
          {/* Left Side Image */}
          <div>
            <img
              src="/contact-b.png"
              alt="Contact Illustration"
              className="w-full h-auto rounded-xl shadow-md"
            />
          </div>

          {/* Right Side Form */}
          <form className="bg-white shadow-lg rounded-xl p-8 space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full border border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full border border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="topic" className="block text-sm font-medium text-gray-700">Subject Category</label>
              <select
                id="topic"
                name="topic"
                required
                defaultValue=""
                className="mt-1 block w-full border border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="" disabled>Select an issue type</option>
                <option value="account">Account/Login Help</option>
                <option value="catalog">Book Search/Request</option>
                <option value="tech">Technical Issue</option>
                <option value="suggestion">Suggestion/Feedback</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                required
                className="mt-1 block w-full border border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Let us know how we can help..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#001248] text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Google Map Section */}
        <div className="mt-12 ml-10">
          <h2 className="text-xl font-semibold mb-4 text-center">Our Location</h2>
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.9231005636157!2d80.0197669!3d9.687604600000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afe540d5e5c1c15%3A0x2694a31a1155f276!2sUniversity%20College%20of%20Jaffna!5e0!3m2!1sen!2slk!4v1748240348830!5m2!1sen!2slk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="University College of Jaffna Location"
            ></iframe>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
