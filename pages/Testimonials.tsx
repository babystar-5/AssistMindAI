export default function TestimonialsPage() {
  return (
    <section className="md:px-[100px] md:pb-16 p-4 md bg-gradient-to-b from-[#E6E8FF] to-white text-center">
      {/* Section Header */}
      <div className="mb-10">
        <button className="text-xl font-bold rounded-full text-[#4A48FF] bg-[#C7C6FF] w-[230px] h-[42px]">
          Testimonials
        </button>
        <h2 className="md:text-[40px] text-[24px] font-bold mt-4 text-black">
          What our customers are saying
        </h2>
      </div>
      {/* Testimonial Cards */}
      <div className="flex md:flex-row flex-col gap-6 items-center w-full">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-md p-6 text-left"
          >
            <p className="text-lg text-grey-500 mb-4 leading-relaxed">
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
                <p className="font-bold text-base">David Chen</p>
                <p className="text-base font-bold text-gray-500">CX Manager at Zenlia</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
        <span className="w-3 h-3 bg-[#4A48FF] rounded-full"></span>
        <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
      </div>
    </section>
  );
}
