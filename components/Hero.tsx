export default function Hero() {
  return (
    <section className="bg-white py-20 px-6 text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-600">
        How it works
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Unlock the power of AI to boost productivity and streamline your workflow.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Get Started
        </button>
        <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition">
          Learn More
        </button>
      </div>
    </section>
  );
}