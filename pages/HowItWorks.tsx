import Image from "next/image";

export default function HowItWorksPage() {
  return (
    <section className="text-white bg-indigo-800 rounded-[24px] lg:m-[100px] m-4 p-10">
      <div className="text-center">
        <button className="inline-block bg-white text-[#4A48FF] text-lg font-semibold rounded-full w-[230px] h-[42px] mb-4">
          Step By Step
        </button>
        <h2 className="text-md md:text-[40px] font-bold mb-8">How it works</h2>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        {[
          {
            id: 1,
            title: "Set Up Your Assistant",
            description:
              "Customize voice and call settings to fit your workflow.",
          },
          {
            id: 2,
            title: "Connect Your Tools",
            description:
              "Seamlessly connect to CRM, calendar — no code required.",
          },
          {
            id: 3,
            title: "Start Talking",
            description:
              "Control tasks with voice — schedule and update hands-free.",
          },
        ].map((step) => (
          <div
            key={step.id}
            className="bg-white text-[#1E1EFF] rounded-xl p-6 text-center w-full max-w-sm shadow"
          >
            <Image
              src={`/assets/icon-${step.id}.png`}
              alt="Step Number"
              width={60} // adjust as needed
              height={60}
              className="mx-auto mb-4"
            />
            <h3 className="text-[22px] font-bold mb-2 text-[#2C3131]">{step.title}</h3>
            <p className="text-md text-gray-600 font-semibold">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
