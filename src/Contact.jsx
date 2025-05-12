import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import {   FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';
import payments from "./assets/payments.png";


const ContactUs = () => {
  return (
    <section className="bg-gray-50 py-12 px-4">
      <h2 className="text-blue-600 text-2xl font-bold mb-8 border-b-2 border-dotted border-gray-300 w-max">
        CONTACT US
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 bg-white p-6 rounded shadow">
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border px-4 py-2 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border px-4 py-2 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full border px-4 py-2 focus:outline-none"
            />
            <textarea
              rows="6"
              placeholder="Message"
              className="w-full border px-4 py-2 focus:outline-none resize-none"
            ></textarea>
            <button
              type="submit"
              className="bg-yellow-400 text-black font-semibold px-6 py-2 hover:bg-yellow-500 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Map & Contact Info */}
        <div className="space-y-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24178.59524675901!2d-74.0060!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDQyJzQ2LjAiTiA3NMKwMDAnMjIuMCJX!5e0!3m2!1sen!2sus!4v1632176479093!5m2!1sen!2sus"
            width="100%"
            height="200"
            className="border-0 w-full"
            allowFullScreen=""
            loading="lazy"
            title="map"
          ></iframe>

          <div className="space-y-4 text-sm text-gray-700">
            <div className="flex items-start gap-2">
              <FaMapMarkerAlt className="text-yellow-400 mt-1" />
              <span>123 Street, New York, USA</span>
            </div>
            <div className="flex items-start gap-2">
              <FaEnvelope className="text-yellow-400 mt-1" />
              <span>info@example.com</span>
            </div>
            <div className="flex items-start gap-2">
              <FaPhoneAlt className="text-yellow-400 mt-1" />
              <span>+012 345 67890</span>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-gray-800 text-white py-10 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

      {/* Get in Touch */}
      <div>
        <h3 className="text-lg font-senibold mb-4">GET IN TOUCH</h3>
        <p className="text-sm mb-4">
          No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et
          et dolor sed dolor. Rebum tempor no vero est magna amet no
        </p>
        <div className="flex items-start gap-2 mb-2">
          <FaMapMarkerAlt className="text-amber-400 mt-1" />
          <span className="text-sm">123 Street, New York, USA</span>
        </div>
        <div className="flex items-start gap-2 mb-2">
          <FaEnvelope className="text-amber-400 mt-1" />
          <span className="text-sm">info@example.com</span>
        </div>
        <div className="flex items-start gap-2">
          <FaPhoneAlt className="text-amber-400 mt-1" />
          <span className="text-sm">+012 345 67890</span>
        </div>
      </div>

      {/* Quick Shop */}
      <div>
        <h3 className="text-lg font-semibold mb-4">QUICK SHOP</h3>
        <ul className="text-sm space-y-2">
          {[
            { name: 'Home', path: '/' },
            { name: 'Our Shop', path: '/shop' },
            { name: 'Shop Detail', path: '/shop-detail' },
            { name: 'Shopping Cart', path: '/cart' },
            { name: 'Checkout', path: '/checkout' },
            { name: 'Contact Us', path: '/contact' },
          ].map(({ name, path }) => (
            <li key={name}>
              <Link
                to={path}
                className="hover:text-amber-400 transition duration-200 cursor-pointer"
              >
                &rsaquo; {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* My Account */}
      <div>
        <h3 className="text-lg font- semibold mb-4">MY ACCOUNT</h3>
        <ul className="text-sm space-y-2">
          {[
            { name: 'Home', path: '/' },
            { name: 'Our Shop', path: '/shop' },
            { name: 'Shop Detail', path: '/shop-detail' },
            { name: 'Shopping Cart', path: '/cart' },
            { name: 'Checkout', path: '/checkout' },
            { name: 'Contact Us', path: '/contact' },
          ].map(({ name, path }) => (
            <li key={name}>
              <Link
                to={path}
                className="hover:text-amber-400 transition duration-200 cursor-pointer font-sans font-bolder"
              >
                &rsaquo; {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Newsletter */}
      <div>
        <h3 className="text-lg font-semibold mb-4">NEWSLETTER</h3>
        <p className="text-sm mb-4">
          Duo stet tempor ipsum sit amet magna ipsum tempor est
        </p>

        {/* Follow Us */}
        <h4 className="font-bold text-sm mb-2">FOLLOW US</h4>
        <div className="flex gap-2">
          {[FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram].map((Icon, i) => (
            <div key={i} className="bg-amber-400 p-2 rounded text-black cursor-pointer">
              <Icon />
            </div>
          ))}
        </div>
        <img className='mt-26' src={payments} alt="" />
      </div>
    </div>

    {/* Bottom Footer */}
    <div className="mt-10 border-t border-gray-700 pt-4 text-sm flex flex-col lg:flex-row justify-between items-center text-gray-400">
      <div className="mb-2 lg:mb-0">
        © <span className="text-white font-semibold">Domain</span>. All Rights Reserved.
        Designed by <span className="text-blue-400">HTML Codex</span>.
        Distributed By: <span className="text-yellow-400">ThemeWagon</span>
      </div>
    </div>
  </footer>
    </section>
  );
};

export default ContactUs;
