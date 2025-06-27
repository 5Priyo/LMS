import Navbar from "../Navbar";
import Footer from "../Footer";

export default function Book() {
  return (
    <>
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-4 text-center">Library Services</h1>
        <p className="text-center text-gray-600 mb-10">
          Explore the range of services offered through our Library Management System to enhance your reading and research experience.
        </p>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">📚 Book Catalog</h2>
            <p className="text-gray-700">
              Browse our complete catalog of physical and digital books with powerful search and filter tools.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">🔄 Borrow & Return</h2>
            <p className="text-gray-700">
              Seamlessly borrow and return books using your library account, with real-time due dates and return tracking.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">📅 Reserve Books Online</h2>
            <p className="text-gray-700">
              Reserve books in advance to ensure availability. Receive notifications when your reserved books are ready.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">💵 Late Fee Management</h2>
            <p className="text-gray-700">
              Keep track of late returns and associated fees with automated reminders and online payment options.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">🌐 Digital Library Access</h2>
            <p className="text-gray-700">
              Access eBooks, academic journals, and other digital resources from anywhere, at any time.
            </p>
          </div>
        </section>
      </div>
      <Footer/>
    </>
  );
}
