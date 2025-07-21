import { useState } from "react";
import { faqs } from "@/utils/const";

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="text-center m-6 md:m-[100px]">
      <div>
        <button className="text-xl font-bold text-[#4A48FF] border-[2px] rounded-[76px] bg-purple-50 w-[145px] h-[42px]">
          FAQ
        </button>
        <h2 className="text-2xl md:text-3xl font-bold mt-4 mb-10">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="space-y-4 text-left">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="border rounded-lg px-6 py-4 cursor-pointer bg-white shadow-sm"
            onClick={() => toggle(idx)}
          >
            <div className="flex justify-between items-center">
              <h3 className="font-Bold text-xl">{faq.question}</h3>
              <span className="text-xl">{openIndex === idx ? "−" : "+"}</span>
            </div>
            {openIndex === idx && faq.answer && (
              <p className="mt-2 text-md text-[#2B2B2E] leading-relaxed">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
