import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="absolute w-full mt-4 bg-info text-gray-200 py-4 md:py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start">
          {/* Customer Service Section */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-sm md:text-lg font-bold mb-3">
              Customer Service
            </h2>
            <ul>
              <li className="mb-2">
                <a
                  href="/help-center"
                  className="hover:underline text-sm md:text-lg"
                >
                  Help Center
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="/returns"
                  className="hover:underline  text-sm md:text-lg"
                >
                  Returns & Refunds
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/shipping"
                  className="hover:underline  text-sm md:text-lg"
                >
                  Shipping Info
                </a>
              </li>
              <li className="mb-2">
                <a href="/faq" className="hover:underline">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-sm md:text-lg font-bold mb-3">Follow Us</h2>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebook className="text-2xl hover:text-blue-300" />
              </a>
              <a
                href="https://instagram.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram className="text-2xl hover:text-pink-300" />
              </a>
              <a
                href="https://tiktok.com/@yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
              >
                <FaTiktok className="text-2xl hover:text-black" />
              </a>
              <a
                href="https://youtube.com/yourchannel"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <FaYoutube className="text-2xl hover:text-red-300" />
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-sm md:text-lg font-bold mb-2">Get in Touch</h2>
            <p className="mb-1">
              <FaEnvelope className="inline mr-2 text-sm md:text-lg" />{" "}
              support@beautytrendy.com
            </p>
            <p className="mb-1">
              <FaPhone className="inline mr-2 text-sm md:text-lg" /> +1 916 3381
              375
            </p>
            <p>Beauty City</p>
          </div>

          {/* Useful Links */}
          <div>
            <h2 className="text-sm md:text-lg font-bold mb-2">Check On</h2>
            <ul>
              <li className="mb-2">
                <a href="/about" className="hover:underline text-sm md:text-lg">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/products"
                  className="hover:underline text-sm md:text-lg"
                >
                  Shop
                </a>
              </li>
              <li className="mb-2">
                <a href="/about" className="hover:underline text-sm md:text-lg">
                  Contact Us
                </a>
              </li>
              <li className="mb-2">
                <a href="" className="hover:underline text-sm md:text-lg">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-4 text-center border-t border-lime-500 pt-4">
          <p>
            &copy; {new Date().getFullYear()} Sonnatrendy Store. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
