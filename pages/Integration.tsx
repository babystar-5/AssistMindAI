export default function IntegrationPage() {
  return (
    <section className="lg:m-[100px] m-4 lg:p-[80px] md:p-8 text-white rounded-3xl bg-[#080686]">
      <div className="flex flex-col md:flex-row gap-8 p-6 items-center">
        {/* Left Text Side */}
        <div className="md:w-1/2 w-full flex flex-col justify-between md:items-start md:text-left items-center text-center">
          <button className="md:text-xl text-sm font-bold rounded-full bg-white text-[#4A48FF] mb-4 w-[196px] h-[42px]">
            Integrate
          </button>
          <h2 className="md:text-[40px] text-[24px] font-bold mb-4 leading-snug">
            Integrate Your Voice Agent with Leading Tools
          </h2>
          <p className="text-base text-white/90 mb-6">
            Instantly sync your AI assistant with essential business platforms
            like Google Calendar, GoHighLevel, Calendly, and Webhooks.
          </p>

          <ul className="space-y-3 text-sm mb-4">
            <li className="flex items-start gap-2">
              <span className="text-blue-200">✔</span>
              Real-time call-to-calendar sync
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-200">✔</span>
              Auto-push lead data into CRMs
            </li>
            <li className="flex items-start gap-2 leading-[130%]">
              <span className="text-blue-200">✔</span>
              Secure webhook & API integrations
            </li>
          </ul>
        </div>

        {/* Right Image Side */}
        <div className="md:w-1/2 w-full">
          <img
            src="/assets/integration-ui.png"
            alt="Integrations UI"
            className="rounded-xl border border-white/20 shadow-lg w-full"
          />
        </div>
      </div>
    </section>
  );
}
