export default function PricingPage() {
  return (
    <section className="bg-white text-black m-4 md:m-[100px]">
      <div className="text-center mb-16">
        <button className="text-lg font-bold text-[#4A48FF] rounded-full bg-[#C7C6FF] w-[175px] h-[42px]">
          Pricing
        </button>
        <h2 className="text-[24px] md:text-[40px] font-bold mt-4 leading-[130%]">
          Built to Amplify the Way You Work
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-24">
        {/* Basic */}
        <div className="border p-6 rounded-2xl shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold">Basic plan</h3>
              <button className="bg-[#E9D7FE] text-xs text-[#6941C6] font-medium w-[76px] h-[28px] rounded-full">
                Popular
              </button>
            </div>
            <p className="text-4xl font-bold">
              $10 <span className="text-base font-normal">per month</span>
            </p>
            <p className="mt-4 mb-6 text-sm text-gray-600">
              Our most popular plan.
            </p>
            <button className="w-full text-md py-2 bg-[#4A48FF] text-white rounded-lg font-bold mb-12">
              Get started
            </button>

            <h3 className="text-[24px] font-bold leading-[130%]">FEATURES</h3>
            <p className="text-[16px]">Everything in our free plan plus....</p>

            <ul className="mt-6 space-y-3 text-sm text-gray-800">
              <li>
                <img src="/assets/check-icon2.png" alt="" className="" /> Access
                to basic features
              </li>
              <li>✅ Basic reporting and analytics</li>
              <li>✅ Up to 10 individual users</li>
              <li>✅ 20 GB individual data</li>
              <li>✅ Basic chat and email support</li>
            </ul>
          </div>
        </div>

        {/* Pro Popular */}
        <div className="bg-[#1a1aff] text-white p-6 rounded-2xl shadow-lg flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold mb-2">Pro popular</h3>
            <p className="text-4xl font-bold">
              $50 <span className="text-base font-normal">per month</span>
            </p>
            <p className="mt-4 mb-6 text-sm text-white/80">
              Growing teams up to 20 users.
            </p>
            <button className="w-full py-2 bg-white text-[#1a1aff] rounded-lg font-semibold">
              Get Started
            </button>
            <ul className="mt-6 space-y-3 text-sm text-white">
              <li>✅ 200+ integrations</li>
              <li>✅ Advanced reporting and analytics</li>
              <li>✅ Up to 20 individual users</li>
              <li>✅ 40 GB individual data</li>
              <li>✅ Priority chat and email support</li>
            </ul>
          </div>
        </div>

        {/* Enterprise */}
        <div className="border p-6 rounded-2xl shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold mb-2">Enterprise plan</h3>
            <p className="text-4xl font-bold">
              $99 <span className="text-base font-normal">per month</span>
            </p>
            <p className="mt-4 mb-6 text-sm text-gray-600">
              Advanced features + unlimited users.
            </p>
            <button className="w-full py-2 bg-purple-600 text-white rounded-lg font-medium">
              Get started
            </button>
            <ul className="mt-6 space-y-3 text-sm text-gray-800">
              <li>✅ Advanced custom fields</li>
              <li>✅ Audit log and data history</li>
              <li>✅ Unlimited individual users</li>
              <li>✅ Unlimited individual data</li>
              <li>✅ Personalized + priority service</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
