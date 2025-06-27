import Footer from "../Footer";
import Navbar from "../Navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6 text-center">About Our Library System</h1>
        <p className="bg-cyan-300 text-justify text-gray-600 mb-10 w-full p-6">
          The College Library System is a user-friendly digital platform developed to streamline the management of library services in our institution. Established in [Year – e.g., 1985], our college library has been a vital resource for students, faculty, and researchers, offering a wide collection of academic and reference materials. Over the years, the library has evolved from a manual record-keeping system to a fully digital platform. This modern system allows users to search for books, register, borrow and return items, report lost books, and calculate fines for overdue materials.
          With efficient inventory and user management features, the system supports a seamless and organized library experience for everyone.
        </p>


        {/* Mission Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
          <p className="text-gray-700">
            Our mission is to digitally transform library services by offering a powerful, user-friendly Library Management System.
            We empower librarians, students, and readers to manage and access resources efficiently—anytime, anywhere.
          </p>
        </section>

        {/* Values Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">Core Values</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Universal access to knowledge</li>
            <li>Efficient and automated workflows</li>
            <li>Transparency and data security</li>
            <li>Support for lifelong learning</li>
            <li>Inclusivity and user-centered design</li>
          </ul>
        </section>

        {/* Team Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Meet the Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Team Member 1 */}
            <div className="bg-white shadow-md rounded-lg p-4 text-center">
              <img
                src="/staff3.png"
                alt="Emma Reed"
                className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="font-medium text-lg">Emma Reed</h3>
              <p className="text-sm text-gray-500">Project Manager</p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white shadow-md rounded-lg p-4 text-center">
              <img
                src="/staff2.png"
                alt="Raj Patel"
                className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="font-medium text-lg">Raj Patel</h3>
              <p className="text-sm text-gray-500">Lead Developer</p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white shadow-md rounded-lg p-4 text-center">
              <img
                src="/staff3.png"
                alt="Lina Chen"
                className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="font-medium text-lg">Lina Chen</h3>
              <p className="text-sm text-gray-500">UI/UX Designer</p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
