import React from "react";
import { FaStar } from "react-icons/fa";
import "./Portfolio.css";
import port1 from "../../assets/poert1.png";
import port2 from "../../assets/port2.png";
import port3 from "../../assets/port3.png";

export default function Portfolio() {
const images = [port1, port2, port3, port1, port2, port3];
  return (
    <>
      <div className="container mx-auto text-center py-10">
        <h1 className="text-4xl font-bold uppercase mb-6 text-[#2C3E50]">
          Portfolio Component
        </h1>

        <div className="flex justify-center items-center mb-10">
          <div className="w-20 h-1 bg-[#2C3E50]"></div>
          <FaStar className="mx-4 text-2xl text-[#2C3E50]" />
          <div className="w-20 h-1 bg-[#2C3E50]"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-5">
          {images.map((src, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden cursor-pointer shadow-md hover:scale-105 transition duration-300"
            >
              <img src={src} alt={`Portfolio ${index + 1}`} className="w-full" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
