import Image from "next/image";

export default function TalkToWorkSmarterPage() {
  return (
    <section className="flex flex-col md:flex-row justify-between md:m-[100px] mx-6">
      {/* Left Content */}
      <div className="my-[65px] mr-7">
        <div className="md:items-start text-left items-center text-center">
          <button className="bg-[#E5E7FF] text-[#4A48FF] text-xl font-bold px-4 py-1 rounded-full mb-4 w-[308px] h-[42px] ">
            Talk To Work Smarter
          </button>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 ">
            Work smarter with voice-first automation
          </h2>
        </div>
        <ul className="space-y-4 text-lg ">
          <li className="flex items-start gap-3">
            <Image
              src="/assets/icon-check-indigo-700.png"
              alt="Blue Check Icon"
              width={24}
              height={29}
              priority
            />
            <div className="-mt-1.5">
              <span className="font-bold text-[22px]">Always in Context</span>
              <br />
              <span className="text-[#38383C]">
                Understands what you mean — not just what you say. No need to
                repeat instructions.
              </span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <Image
              src="/assets/icon-check-indigo-700.png"
              alt="Blue Check Icon"
              width={24}
              height={29}
              priority
            />
            <div className="-mt-1.5">
              <span className="font-bold text-[22px]">Instant Actions</span>
              <br />
              <span className="text-[#38383C]">
                From taking notes to sending updates, your assistant gets it
                done in seconds — hands-free.
              </span>
            </div>
          </li>
        </ul>
      </div>

      {/* Right Image */}
      <div className="  ">
        <img
          src="/assets/Call-Volume.png"
          alt="Call Volume Over Time"
          className="rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
}
