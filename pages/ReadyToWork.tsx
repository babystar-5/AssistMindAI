import { GridComponent2 } from "@/components/GridComponent";

export default function ReadyToWorkPage() {
  return (
    <section className="relative bg-[#080686] text-white md:p-12 p-8 rounded-2xl md:m-[100px] m-6 my-12 text-center shadow-lg">
      <GridComponent2 />
      <div className="relative">
        <h1 className="text-[24px] md:text-[40px] font-bold mb-4">
          Ready to Work Smarter with Voice?
        </h1>
        <p className="text-base md:text-[28px] mb-6 leading-[140%]">
          Start automating tasks, scheduling meetings, and syncing data — all by
          speaking naturally.
        </p>
        <button className="bg-white text-[#414651] font-bold py-2 px-6 rounded shadow hover:bg-gray-200">
          Try it for free
        </button>
      </div>
    </section>
  );
}
