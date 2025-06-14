// src/app/page.tsx

export default function Home() {
  return (
    <section className="bg-brand text-white py-24 px-6 sm:px-12 md:px-20 lg:px-32">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
          Grow Your Service Business with Smart Web Tools
        </h1>
        <p className="text-lg sm:text-xl text-white/90">
          Beautiful websites, intelligent features, and simple tools to help you grow — fast.
        </p>
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <a
            href="#contact"
            className="bg-white text-brand font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition"
          >
            Get Started
          </a>
          <a
            href="#services"
            className="border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-brand transition"
          >
            See Services
          </a>
        </div>
      </div>
    </section>
  );
}
