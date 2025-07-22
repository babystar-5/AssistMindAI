import Image from "next/image";
import { avatars } from "@/utils/const";

export default function FeaturesPage() {
  return (
    <section className="bg-white md:m-[100px] m-4">
      {/* Section Tag + Title */}
      <div className="text-center mb-14">
        <button className="text-lg font-bold text-[#4A48FF] bg-[#C7C6FF] rounded-full mb-4 w-[192px] h-[42px]">
          Features
        </button>
        <h2 className="md:text-[40px] text-xl leading-[130%] font-semibold text-gray-900">
          Built to Amplify the Way You Work
        </h2>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {/* Avatar + Voice Workflows (spans 2 columns) */}
        <div className="col-span-1 lg:col-span-2 bg-gray-50 rounded-2xl p-6 flex flex-col justify-between">
          {/* Avatar Bubble Group */}
          <div className="relative h-[300px] w-full max-w-6xl mx-auto">
            {avatars.map((avatar, index) => (
              <div key={index} className={`absolute ${avatar.style}`}>
                <div className="relative w-16 h-16">
                  <Image
                    src={avatar.src}
                    alt={`Avatar ${index + 1}`}
                    className="rounded-full object-cover"
                    fill
                  />
                  <div className="absolute bottom-0 right-0 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6 4l10 6-10 6V4z" />
                    </svg>
                  </div>
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
            Customize how your assistant sounds and appears — from voice tone to
            caller ID. Stay consistent with your brand in every interaction.
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
  );
}
