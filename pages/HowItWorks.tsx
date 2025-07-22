import Image from "next/image";
import { steps } from "@/utils/const";

export default function HowItWorksPage() {
  return (
    <section className="text-white bg-indigo-800 rounded-[24px] lg:m-[100px] m-4 p-10">
      <div className="text-center">
        <button className="inline-block bg-white text-[#4A48FF] text-lg font-semibold rounded-full w-[230px] h-[42px] mb-4">
          Step By Step
        </button>
        <h2 className="text-md md:text-[40px] font-bold mb-8">How it works</h2>
      </div>

      <div className="max-w-6xl mx-auto relative flex flex-col md:flex-row items-center justify-between gap-16">
        {/* Step 1 */}
        <div className="bg-white text-center rounded-xl shadow-md p-6 w-full md:w-[330px] relative z-10">
          <div className="text-white bg-indigo-600 w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center font-bold">
            01
          </div>
          <h3 className="font-bold text-xl text-black">
            Set Up Your Assistant
          </h3>
          <p className="text-md text-black mt-2">
            Customize voice and call settings to fit your workflow.
          </p>
        </div>

        {/* Arrow */}
        <img
          src="/assets/arrow-left.png"
          alt="arrow"
          className="hidden md:block absolute top-21 left-[28%] w-[60px] z-0"
        />
        <img
          src="/assets/arrow-up.png"
          alt="arrow"
          className="md:hidden absolute top-[26%] left-[49%] h-[60px] w-[15px] z-100"
        />

        {/* Step 2 */}
        <div className="bg-white text-center rounded-xl shadow-md p-6 w-full md:w-[330px] relative z-10">
          <div className="text-white bg-indigo-600 w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center font-bold">
            02
          </div>
          <h3 className="font-bold text-xl text-black">Connect Your Tools</h3>
          <p className="text-md text-black mt-2">
            Seamlessly connect to CRM, calendar — no code required.
          </p>
        </div>

        {/* Arrow */}
        <img
          src="/assets/arrow-right.png"
          alt="arrow"
          className="hidden md:block absolute top-21 left-[64%] w-[60px] z-0"
        />
        <img
          src="/assets/arrow-down.png"
          alt="arrow"
          className="md:hidden absolute top-[62%] left-[49%] h-[60px] w-[15px] z-100"
        />

        {/* Step 3 */}
        <div className="bg-white text-center rounded-xl shadow-md p-6 w-full md:w-[330px] relative z-10">
          <div className="text-white bg-indigo-600 w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center font-bold">
            03
          </div>
          <h3 className="font-bold text-xl text-black"> Start Talking</h3>
          <p className="text-md text-black mt-2">
            Control tasks with voice — schedule and update hands-free.
          </p>
        </div>
      </div>
    </section>
  );
}