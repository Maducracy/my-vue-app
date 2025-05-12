import React from 'react'
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';
import payments from "../assets/payments.png"

const Footer = () => {
  return (
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
  )
}

export default Footer