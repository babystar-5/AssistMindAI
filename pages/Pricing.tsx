import { memberships } from "@/utils/const";

export default function PricingPage() {
  return (
    <section className="bg-white text-black mx-4 my-10 lg:m-[100px]">
      <div className="text-center mb-14">
        <button className="text-lg font-bold text-[#4A48FF] rounded-full bg-[#C7C6FF] w-[175px] h-[42px]">
          Pricing
        </button>
        <h2 className="text-[24px] md:text-[40px] font-bold mt-4 leading-[130%]">
          Built to Amplify the Way You Work
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {memberships.map((item) => (
          <div
            key={item.id}
            className={`bg-${item.color.background} text-${item.color.text} border p-6 rounded-2xl shadow-sm flex flex-col justify-between`}
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold">{item.level}</h3>
              {item.isPopular && (
                <button className="bg-[#E9D7FE] text-xs text-[#6941C6] font-medium w-[76px] h-[28px] rounded-full">
                  Popular
                </button>
              )}
            </div>
            <p className="text-[60px] font-extrabold">
              ${item.price}{" "}
              <span className="text-[18px] font-bold">per month</span>
            </p>
            <p className={`mt-4 mb-6 text-md font-semibold text-${item.color.text}`}>
              {item.description}
            </p>
            <button
              className={`w-full text-md py-2 bg-${item.color.button} text-black rounded-lg font-bold mb-12`}
            >
              Get started
            </button>
            <h3 className="text-[24px] font-bold leading-[130%]">FEATURES</h3>
            <p className="text-[16px] font-bold">{item.feature_title}</p>
            <ul className="mt-6 space-y-3 text-md text-[#38383C]">
              {item.feature_list.map((feature, index) => (
                <li key={index} className={`text-${item.color.text}`}>
                  <img
                    src={`/assets/icon-check-${item.color.button}.png`}
                    alt="Blue Check Icon"
                    className="inline-block mr-1"
                  />{" "}
                  ${feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
