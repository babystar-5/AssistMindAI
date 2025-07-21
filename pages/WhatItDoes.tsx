import Image from "next/image";
import { services } from "@/utils/const";

export default function WhatItDoesPage() {
  return (
    <section className="m-6 md:m-[100px]">
      <div className="text-center mb-4">
        <button className="bg-[#C7C6FF] text-lg leading-[130%] font-semibold text-[#4A48FF] w-[230px] border border-blue-200 rounded-full px-5 py-1.5 hover:bg-blue-50 transition">
          What It Does
        </button>
      </div>
      <h3 className="text-center text-2xl sm:text-3xl font-bold text-[#1C1C1E] mb-12">
        Turn Your Voice Into Instant Action
      </h3>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {services.map((item) => (
          <div
            key={item.title}
            className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <Image
              src={`/assets/${item.src}`}
              alt={item.title}
              width={60}
              height={60}
            />
            <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
