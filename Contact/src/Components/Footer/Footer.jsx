import React from "react";
import { FaFacebookF, FaGlobe, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      
      <footer className="text-white py-16 bg-[#2C3E50] mt-20">
        <div className="container mx-auto grid md:grid-cols-3 gap-10 text-center">
          
          <div>
            <h1 className="text-3xl font-bold mb-5">LOCATION</h1>
            <p className="my-4">2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>

          <div>
            <h1 className="text-3xl font-bold mb-5">AROUND THE WEB</h1>
            <div className="flex justify-center gap-4">
              <a
                href="#"
                className="border-2 border-white rounded-full p-3 hover:bg-white hover:text-[#2C3E50] transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="border-2 border-white rounded-full p-3 hover:bg-white hover:text-[#2C3E50] transition"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="border-2 border-white rounded-full p-3 hover:bg-white hover:text-[#2C3E50] transition"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                className="border-2 border-white rounded-full p-3 hover:bg-white hover:text-[#2C3E50] transition"
              >
                <FaGlobe />
              </a>
            </div>
          </div>

          <div>
            <h1 className="text-3xl font-bold mb-5">ABOUT FREELANCER</h1>
            <p>
              Freelancer is a free to use, licensed Bootstrap theme created by
              Route.
            </p>
          </div>
        </div>
      </footer>

      <div className="bg-[#1A252F] text-center text-white py-4">
        <p>Copyright © Your Website 2021</p>
      </div>
    </>
  );
}
