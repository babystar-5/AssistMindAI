import GridComponent from "@/components/GridComponent";
import Image from "next/image";

export default function Dashboard() {
  return (
    <main>
      <div className="relative bg-[#060483] text-white overflow-hidden rounded-[24px] m-4 md:m-8 md:px-[168px] md:py-[80px] px-[18px] py-6 md:h-[980px] h-[700px]">
        <GridComponent />
        <section className="relative text-center">
          <h1 className="md:text-[56px] text-[24px] font-extrabold">
            Speak naturally
            <span className="inline-block align-middle">
              <Image
                src="/assets/avatar-three.png"
                alt="Three Avatars"
                width={150}
                height={70}
                priority
                className="md:w-[150px] md:h-[70px] w-16 h-8 mt-2"
              />
            </span>
            your AI assistant turns{" "}
            <span className="bg-[url('/assets/curve-underline.png')] bg-no-repeat bg-bottom bg-[length:90%_20px] pb-5 text-[#A8A6FF] font-extrabold">
              voice
            </span>{" "}
            into action.
          </h1>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <button className="bg-[#4A48FF] text-white text-xl text-semibold px-[50px] py-[15px] w-[193px] h-[56px] rounded-xl hover:opacity-90 transition">
              Try it Free
            </button>
            <button className="bg-white text-[#414651] text-xl text-bold leading-[130%] px-[20px] py-[15px] w-[193px] h-[56px] rounded-xl font-medium hover:opacity-90 transition shadow">
              <img
                src="/assets/play-circle.png"
                alt="Play Circle"
                className="inline-block h-[20px] mr-2 mb-1"
              />
              Watch Demo
            </button>
          </div>
        </section>

        <section className="relative mt-[76px]">
          <Image
            src="/assets/dashboard.png"
            alt="Dashboard"
            width={956} // adjust as needed
            height={1023}
            priority
            className="relative mx-auto max-h-[1023px]"
          />

          {/* Google Calendar */}
          <Image
            src="/assets/dashboard-left.png"
            alt="Left dashboard"
            width={300} // adjust as needed
            height={277}
            priority
            className="absolute md:top-[111px] md:left-[-57px] top-[60px] left-[-20px] w-1/4 h-1/4"
          />

          {/* Booking Rate */}
          <Image
            src="/assets/dashboard-right.png"
            alt="Right Dashboard"
            width={258} // adjust as needed
            height={121}
            priority
            className="absolute md:top-[81px] md:right-[-77px] top-[30px] right-[-30px] w-1/3 h-1/4"
          />
        </section>
      </div>
      <div className="bg-white my-[100px]">
        <h2 className="text-center text-lg md:text-[32px] font-bold leading-[140%] text-[#2B2B2E] mb-10">
          Built for companies that value trust and collaboration.
        </h2>
        <img src="/assets/companies-adv.png" alt="Company Logo" />
      </div>
    </main>
  );
}
