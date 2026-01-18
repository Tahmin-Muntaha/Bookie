"use client";

import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#f8b5c9] py-8 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        
        
        <div className="text-xl font-bold text-gray-800">
          Bookie
        </div>

        
        <div className="flex gap-6 text-gray-700">
          <Link href="/" className="hover:text-gray-900 transition">Home</Link>
          <Link href="/all" className="hover:text-gray-900 transition">All Books</Link>
          <Link href="/login" className="hover:text-gray-900 transition">Login</Link>
        </div>

        
        <p className="text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} Bookie. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
