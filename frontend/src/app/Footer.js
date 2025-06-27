'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const companyInfo = {
    name: 'TechCorp Solutions',
    description: "Innovative solutions for tomorrow's challenges",
    address: '123 Tech Street, Silicon Valley, CA 94025',
    email: 'contact@techcorp.com',
    phone: '+1 (555) 123-4567',
  };

  const quickLinks = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
    { name: 'Book', url: '/book' },
    { name: 'Contact', url: '/contact' },
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: <FaFacebook />, url: '#' },
    { name: 'Twitter', icon: <FaTwitter />, url: '#' },
    { name: 'LinkedIn', icon: <FaLinkedin />, url: '#' },
    { name: 'Instagram', icon: <FaInstagram />, url: '#' },
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert('Subscribed!');
  };

  return (
   <footer className="bg-[#001248] font-poppins  text-white border-t-2 border-white">

      <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4 text-center md:text-left">
            <Image
              src="/liblogo.png"
              alt="Company Logo"
              width={150}
              height={100}
              className="h-12 w-auto object-contain mx-auto md:mx-0"
            />
            <p className="text-sm font-poppins  md:text-base">{companyInfo.description}</p>
            {/* <p className="text-sm md:text-base">
              &copy; {currentYear} {companyInfo.name}. All rights reserved.
            </p> */}
          </div>

          {/* Quick Links */}
          <div className="text- font-poppins  md:text-left">
            <h3 className="text-lg md:text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.url}
                    className="block py-1 text-sm md:text-base hover:text-accent transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-lg md:text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <FaMapMarkerAlt className="text-accent" />
                <span className="text-sm md:text-base">{companyInfo.address}</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <FaEnvelope className="text-accent" />
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="text-sm md:text-base hover:text-accent transition-colors duration-200"
                >
                  {companyInfo.email}
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <FaPhone className="text-accent" />
                <span className="text-sm md:text-base">{companyInfo.phone}</span>
              </div>
            </div>
          </div>

          {/* Newsletter & Socials */}
          <div className="text-center md:text-left">
            <h3 className="text-lg md:text-xl font-bold mb-4">Newsletter</h3>
            <form
              onSubmit={handleSubscribe}
              className="space-y-4 sm:space-y-0 sm:flex sm:items-center sm:space-x-4 w-full"
            >
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full sm:w-auto px-3 py-2 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button
                type="submit"
                className="bg-teal-400 w-full sm:w-auto bg-accent text-white font-semibold px-3 py-2 rounded-md hover:bg-accent-dark transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>

            <div className="mt-6 flex flex-wrap justify-center sm:justify-start gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  aria-label={`Follow us on ${social.name}`}
                  className="text-2xl text-white hover:text-accent transition-colors duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-teal-400 font-poppins text-[#001248] text-center py-4 text-l">
    © {new Date().getFullYear()} University Coolege of Jaffna.All rights reserved.
  </div>
    </footer>
  );
};

export default Footer;
