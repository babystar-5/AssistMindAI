export default function Dashboard() {
  return (
    <main className="min-h-screen bg-[#060483] text-white relative overflow-hidden rounded-[24px] mx-8 my-6 h-[980px] pt-[79px]">
      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(227,240,255,0.28)_1px,transparent_1px),linear-gradient(to_bottom,rgba(227,240,255,0.28)_1px,transparent_1px)] bg-[size:45px_65px] bg-[position:-35px_-60px] opacity-70 z-0" />

      <section className="relative w-[1050px] mx-auto pt-3 text-center">
        <h1 className="text-[56px] font-extrabold">
          Speak naturally
          <span className="inline-block align-middle">
            <img
              src="/assets/avatar1.png"
              alt="Avatar1"
              className="inline-block h-[85px] rounded-full mt-4"
            />
            <img
              src="/assets/avatar2.png"
              alt="Avatar2"
              className="inline-block h-[85px] rounded-full mt-4 -ml-12"
            />
            <img
              src="/assets/avatar3.png"
              alt="Avatar3"
              className="inline-block h-[85px] rounded-full mt-4 -ml-12"
            />
          </span>
          your AI assistant
          <br />
          turns{" "}
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

      <img
        src="/assets/dashboard.png"
        alt="Analytics Dashboard"
        className="mt-[76px] mx-auto max-w-[956px]"
      />

      {/* Google Calendar */}
      <div className="absolute left-10 bottom-[13%] bg-white text-black p-[14px] rounded-xl shadow-md w-[300px] h-[277px]">
        <img
          src="/assets/calendar.png"
          alt="Calendar"
          className="inline-block mb-1 mr-2"
        />
        <h4 className="font-bold text-lg inline-block mr-8">Google Calendar</h4>
        <button className="bg-[#09AC4714] text-[#09AC47] text-[11px] font-bold w-[58px] h-[22px] rounded-xl transition inline-block">
          Active
        </button>
        <p className="font-semibold text-[10px] leading-[14.8px] py-[10px]">
          Schedules appointments directly in your Google Calendar with real-time
          sync.
        </p>
        <p className="font-bold text-[14.8px] leading-[130%]">Key Features: </p>
        <div>
          <img
            src="/assets/check-icon.png"
            alt="Calendar"
            className="inline-block mt-1 mr-1"
          />
          <p className="inline-block text-[11px] landing-4 font-medium">
            Real-time sync
          </p>
        </div>
        <div>
          <img
            src="/assets/check-icon.png"
            alt="Calendar"
            className="inline-block mt-1 mr-1"
          />
          <p className="inline-block text-[11px] landing-4 font-medium">
            Conflict avoidance
          </p>
        </div>
        <div>
          <img
            src="/assets/check-icon.png"
            alt="Calendar"
            className="inline-block mt-1 mr-1"
          />
          <p className="inline-block text-[11px] landing-4 font-medium">
            Auto-create event w/ details
          </p>
        </div>
        <div>
          <img
            src="/assets/check-icon.png"
            alt="Calendar"
            className="inline-block mt-1 mr-1"
          />
          <p className="inline-block text-[11px] landing-4 font-medium">
            Sends confirmation/reminders
          </p>
        </div>
        <div className="flex gap-2 mt-4">
          <button className="bg-[#4A48FF] text-white text-[12px] px-3 py-1 rounded-md font-semibold">
            Configure
          </button>
          <button className="border px-3 py-1 rounded-md text-[12px] font-semibold">
            Test
          </button>
          <button className="text-red-500 text-[12px] font-semibold">
            Disconnect
          </button>
        </div>

        {/* Booking Rate */}
        <div className="absolute left-[935px] bottom-[195px] bg-white text-black rounded-xl shadow-md w-[258px] h-[121px] p-4">
          <div className="flex justify-between">
            <p className="text-[14px] font-bold">Booking Rate</p>
            <button className="bg-[#F366661A] text-[#F36666] text-[11px] font-bold w-[70px] h-[30px] rounded-xl transition">
              <span className="inline-block mr-1">+2.3%</span>
              <img
                src="/assets/vector.png"
                alt="Vector"
                className="inline-block w-[5.7] h-[6.5px]"
              />
            </button>
          </div>
          <p className="font-bold text-[28px]">68.5%</p>
          <p className="font-semibold text-[12px] ">% of calls successfully answered</p>
        </div>
      </div>
    </main>
  );
}
