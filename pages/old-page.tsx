"use client";
import { useState } from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  const companies = [
    { name: "Sisyphus", logo: "comlogo1.png" },
    { name: "Sisyphus", logo: "comlogo1.png" },
    { name: "Sisyphus", logo: "comlogo1.png" },
    { name: "Sisyphus", logo: "comlogo1.png" },
    { name: "Sisyphus", logo: "comlogo1.png" },
    { name: "Sisyphus", logo: "comlogo1.png" },
  ];

  const faqs = [
    {
      question: "How does the AI assistant handle scheduling?",
      answer:
        "Our assistant connects to tools like Google Calendar and Calendly to check availability, avoid conflicts, and book appointments in real time — all through voice commands. You can even customize buffer times, durations, and auto-reminders.",
    },
    {
      question: "Can I use the assistant with my CRM?",
      answer: "",
    },
    {
      question: "Is it possible to integrate with webhooks or APIs?",
      answer: "",
    },
    {
      question: "Does it support multiple team members or departments?",
      answer: "",
    },
    {
      question: "How secure is the data handled by the voice assistant?",
      answer: "",
    },
  ];

  const pricing_info = [
    {
      id: 1,
      level: "Basic plan",
      price: 10,
      description: "Our most popular plan.",
      feature_title: "Everything in our free plan plus....",
      feature_list: [
        "Access to basic features",
        "Basic reporting and analytics",
        "Up to 10 individual users",
        "20 GB individual data",
        "Basic chat and email support",
      ],
      color: { background: "white", button: "#4A48FF", letter: "black" },
    },
    {
      id: 2,
      level: "Pro popular",
      price: 50,
      description: "Growing teams up to 20 users.",
      feature_title: "Everything in Basic plus....",
      feature_list: [
        "200+ integrations",
        "Advanced reporting and analytics",
        "Up to 20 individual users",
        "40 GB individual data",
        "Priority chat and email support",
      ],
      color: { background: "#1614A0", button: "white", letter: "white" },
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-[1440px] mx-auto">
      <Header />

      {/* Dashboard */}
      <main className="min-h-screen bg-[#060483] text-white relative overflow-hidden rounded-[24px] mr-8 ml-8">
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
          <h4 className="font-bold text-lg inline-block mr-8">
            Google Calendar
          </h4>
          <button className="bg-[#09AC4714] text-[#09AC47] text-[11px] font-bold w-[58px] h-[22px] rounded-xl transition inline-block">
            Active
          </button>
          <p className="font-semibold text-[10px] leading-[14.8px] py-[10px]">
            Schedules appointments directly in your Google Calendar with
            real-time sync.
          </p>
          <p className="font-bold text-[14.8px] leading-[130%]">
            Key Features:{" "}
          </p>
          <div>
            <img
              src="/assets/check-icon1.png"
              alt="Calendar"
              className="inline-block mt-1 mr-1"
            />
            <p className="inline-block text-[11px] landing-4 font-medium">
              Real-time sync
            </p>
          </div>
          <div>
            <img
              src="/assets/check-icon1.png"
              alt="Calendar"
              className="inline-block mt-1 mr-1"
            />
            <p className="inline-block text-[11px] landing-4 font-medium">
              Conflict avoidance
            </p>
          </div>
          <div>
            <img
              src="/assets/check-icon1.png"
              alt="Calendar"
              className="inline-block mt-1 mr-1"
            />
            <p className="inline-block text-[11px] landing-4 font-medium">
              Auto-create event w/ details
            </p>
          </div>
          <div>
            <img
              src="/assets/check-icon1.png"
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
            <p className="font-semibold text-[12px] ">
              % of calls successfully answered
            </p>
          </div>
        </div>
      </main>

      {/* Company ADV */}
      <main className="bg-white mt-[100px] mb-[100px]">
        {/* Top Text */}
        <h2 className="text-center text-lg md:text-[32px] font-bold leading-[140%] text-[#2B2B2E] mb-10">
          Built for companies that value trust and collaboration.
        </h2>

        <img src="/assets/companies-adv.png" alt="Company Logo" />
      </main>

      {/* What It Does */}
      <section>
        <div className="text-center mb-4">
          <button className="bg-[#C7C6FF] text-lg leading-[130%] font-semibold text-[#4A48FF] w-[230px] border border-blue-200 rounded-full px-5 py-1.5 hover:bg-blue-50 transition">
            What It Does
          </button>
        </div>

        <h3 className="text-center text-2xl sm:text-3xl font-semibold text-gray-900 mb-12">
          Turn Your Voice Into Instant Action
        </h3>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            {
              src: "icon-mic.png",
              title: "Voice-Powered Control",
              desc: "Speak commands and get instant responses — no typing needed.",
            },
            {
              src: "icon-bright.png",
              title: "Contextual Intelligence",
              desc: "Your smart assistant remembers tasks, tools, and workflows.",
            },
            {
              src: "icon-realtime.png",
              title: "Real-Time Integrations",
              desc: "Connects with your calendar, CRM, Slack, and more.",
            },
            {
              src: "icon-faster.png",
              title: "Faster Than Manual",
              desc: "Save valuable hours a day by simply talking to your assistant.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <img
                src={`/assets/${item.src}`}
                alt={item.title}
                className="w-[60px]"
              />
              <h4 className="font-bold leading-[130%] text-[22px] text-[#212123] mb-10">{item.title}</h4>
              <p className="text-base text-[#38383C]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Talk to Work Smarter */}
      <section className="w-full max-w-[1440px] mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="max-w-lg text-center">
          <button className="inline-block bg-[#E5E7FF] text-[#4A48FF] text-sm font-medium px-4 py-1 rounded-full mb-4 text-center">
            Talk To Work Smarter
          </button>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work smarter with voice-first automation
          </h2>
          <ul className="space-y-4 text-lg">
            <li className="flex items-start gap-3">
              <span className="text-[#4A48FF] text-xl">✔</span>
              <div>
                <span className="font-semibold">Always in Context</span>
                <br />
                <span className="text-gray-500">
                  Understands what you mean — not just what you say. No need to
                  repeat instructions.
                </span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#4A48FF] text-xl">✔</span>
              <div>
                <span className="font-semibold">Instant Actions</span>
                <br />
                <span className="text-gray-500">
                  From taking notes to sending updates, your assistant gets it
                  done in seconds — hands-free.
                </span>
              </div>
            </li>
          </ul>
        </div>

        {/* Right Image */}
        <div className="flex-shrink-0">
          <img
            src="/assets/Call-Volume.png"
            alt="Call Volume Over Time"
            className="rounded-xl shadow-lg w-full max-w-md"
          />
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gradient-to-r from-[#1E1EFF] to-[#4A48FF] text-white py-20 px-6 rounded-[24px] mx-auto max-w-[1440px] mt-20">
        <div className="text-center mb-12 text-center">
          <button className="inline-block bg-white text-[#4A48FF] text-sm font-semibold px-4 py-1 rounded-full mb-4">
            Step By Step
          </button>
          <h2 className="text-3xl md:text-4xl font-bold">How it works</h2>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {[
            {
              title: "Set Up Your Assistant",
              description:
                "Customize voice and call settings to fit your workflow.",
            },
            {
              title: "Connect Your Tools",
              description:
                "Seamlessly connect to CRM, calendar — no code required.",
            },
            {
              title: "Start Talking",
              description:
                "Control tasks with voice — schedule and update hands-free.",
            },
          ].map((step, index) => (
            <div
              key={index}
              className="bg-white text-[#1E1EFF] rounded-xl p-6 text-center w-full max-w-sm shadow"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#E5E7FF] flex items-center justify-center text-lg font-bold">
                0{index + 1}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-20 px-4 sm:px-8">
        {/* Section Tag + Title */}
        <div className="text-center mb-12">
          <button className="text-sm font-semibold text-blue-600 border border-blue-200 rounded-full px-5 py-1.5 mb-4">
            Features
          </button>
          <h2 className="text-3xl font-semibold text-gray-900">
            Built to Amplify the Way You Work
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* Avatar + Voice Workflows (spans 2 columns) */}
          <div className="col-span-1 lg:col-span-2 bg-gray-50 rounded-2xl p-6 flex flex-col justify-between">
            {/* Avatar Bubble Group */}
            <div className="flex flex-wrap gap-4 justify-center mb-6">
              {[...Array(7)].map((_, i) => (
                <div
                  key={i}
                  className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow"
                >
                  <img
                    src={`https://randomuser.me/api/portraits/thumb/${
                      i % 2 === 0 ? "women" : "men"
                    }/${i + 10}.jpg`}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 right-0 w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center text-white text-[10px] font-bold">
                    ▶
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold mb-1">
                Speak and Manage Workflows Instantly
              </h3>
              <p className="text-sm text-gray-600">
                Easily add tasks, assign follow-ups, and update your workspace —
                all with simple voice commands. No clicks. No typing.
              </p>
            </div>
          </div>

          {/* Voice Campaign Box */}
          <div className="bg-gray-50 rounded-2xl p-6 text-center">
            <h3 className="font-semibold text-gray-900 mb-2">
              Create Voice Campaigns
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Easily launch outbound call or reminder campaigns with simple,
              prompts — no training needed.
            </p>
            <div className="bg-white rounded-xl p-4 shadow">
              <p className="text-sm text-gray-800 mb-2 text-xs font-medium">
                Campaign - Jun 25
              </p>
              <div className="text-xs text-gray-600 mb-1">
                Recipients: <b>150</b> | Completed: <b>78</b>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full mb-2">
                <div className="w-[30%] h-full bg-blue-600 rounded-full"></div>
              </div>
              <span className="text-xs text-yellow-600 bg-yellow-100 rounded px-2 py-0.5">
                In Progress
              </span>
            </div>
          </div>

          {/* Identity Settings */}
          <div className="bg-gray-50 rounded-2xl p-6">
            <h3 className="font-semibold text-gray-900 mb-2">
              Identity & Voice Settings
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Customize how your assistant sounds and appears — from voice tone
              to caller ID. Stay consistent with your brand in every
              interaction.
            </p>
            <div className="bg-white p-3 rounded shadow text-sm text-gray-700 space-y-2">
              <div className="flex justify-between items-center">
                <span>Blocked Numbers</span>
                <span className="text-gray-500 text-xs">+1 (888) 123-4567</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Detect Link Voicemails</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked
                    readOnly
                  />
                  <div className="w-9 h-5 bg-blue-100 peer-focus:outline-none rounded-full peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Call Logs CTA */}
          <div className="bg-gray-50 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Call Logs, Made Simple
              </h3>
              <p className="text-sm text-gray-600">
                Track every conversation in one place — with searchable logs,
                playback, and AI-generated summaries.
              </p>
            </div>
            <button className="mt-4 bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-700">
              View Call Logs
            </button>
          </div>

          {/* Call Log Table */}
          <div className="bg-gray-50 rounded-2xl p-6">
            <h3 className="font-semibold text-gray-900 mb-3">Call Log</h3>
            <div className="relative mb-3">
              <input
                type="text"
                placeholder="Search..."
                className="w-full border border-gray-300 rounded-md px-3 py-1.5 text-sm"
              />
            </div>
            <table className="w-full text-left text-sm text-gray-700">
              <thead>
                <tr className="border-b">
                  <th>Caller</th>
                  <th>Number</th>
                  <th>Date & Time</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                {Array(5)
                  .fill(null)
                  .map((_, i) => (
                    <tr key={i} className="border-b text-sm">
                      <td>Dev Kooper</td>
                      <td>(647) 1255 125</td>
                      <td>15 May 2020</td>
                      <td>1m 12s</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-white to-[#f4f6ff] text-center">
        {/* Section Header */}
        <div className="mb-10">
          <button className="text-sm font-medium px-4 py-1 rounded-full border border-blue-100 text-blue-600 bg-blue-50">
            Testimonials
          </button>
          <h2 className="text-3xl font-semibold mt-4 text-gray-900">
            What our customers are saying
          </h2>
        </div>

        {/* Testimonial Cards */}
        <div className="flex flex-wrap justify-center gap-6 px-4 sm:px-8">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md max-w-sm p-6 text-left"
            >
              <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                It feels like I have a second brain handling follow-ups and
                scheduling — all triggered by voice. I just speak, and tasks are
                done, meetings get booked, and our CRM stays up-to-date without
                lifting a finger
              </p>
              <div className="flex items-center gap-3">
                <img
                  src="/assets/avatar-david.png"
                  alt="David Chen"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-sm">David Chen</p>
                  <p className="text-xs text-gray-500">CX Manager at Zenlia</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
          <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
          <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
        </div>
      </section>

      {/* Integration */}
      <section className="bg-gradient-to-br from-[#0b0f78] to-[#281ccf] text-white py-20 px-6 rounded-3xl mx-4 sm:mx-12 mt-16 relative overflow-hidden">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Left Text Side */}
          <div>
            <button className="text-sm font-medium px-4 py-1 rounded-full border border-white bg-white/20 text-white mb-4">
              Integrate
            </button>
            <h2 className="text-3xl font-bold mb-4 leading-snug">
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
          <div className="relative">
            <img
              src="/assets/integration-ui.png"
              alt="Integrations UI"
              className="rounded-xl border border-white/20 shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="min-h-screen bg-white text-black px-4 md:px-8 py-16">
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

                <h3 className="text-[24px] font-bold leading-[130%]">
                  FEATURES
                </h3>
                <p className="text-[16px]">Everything in our free plan plus....</p>

              <ul className="mt-6 space-y-3 text-sm text-gray-800">
                <li><img src="/assets/check-icon2.png" alt="" className="" /> Access to basic features</li>
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

      {/* FAQ */}
      <section className="max-w-3xl mx-auto text-center">
        <span className="text-xs font-medium text-purple-600 border px-4 py-1 rounded-full bg-purple-50">
          FAQ
        </span>
        <h2 className="text-2xl md:text-3xl font-bold mt-4 mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4 text-left">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border rounded-lg px-6 py-4 cursor-pointer bg-white shadow-sm"
              onClick={() => toggle(idx)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-medium">{faq.question}</h3>
                <span className="text-xl">{openIndex === idx ? "−" : "+"}</span>
              </div>
              {openIndex === idx && faq.answer && (
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Ready To Work... */}
      <section className="bg-gradient-to-r from-[#1F2B97] to-[#0A1C61] text-white p-12 rounded-2xl mx-auto my-12 w-[90%] max-w-4xl text-center shadow-lg">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          Ready to Work Smarter with Voice?
        </h1>
        <p className="text-lg mb-6">
          Start automating tasks, scheduling meetings, and syncing data — all by
          speaking naturally.
        </p>
        <button className="bg-white text-blue-800 font-semibold py-2 px-6 rounded shadow hover:bg-gray-200">
          Try it for free
        </button>
      </section>

      <Footer />
    </div>
  );
}
