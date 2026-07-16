"use client";

export default function VoiceSearchOptimizationAudit() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 text-center">
          Request a Website Audit for FREE!
        </h2>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="text"
            placeholder="Enter Your domain name"
            className="w-full sm:w-96 rounded-lg border border-gray-300 px-4 py-3 text-slate-700 focus:border-blue-400 focus:outline-none"
          />
          <button
            type="button"
            className="w-full sm:w-auto bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-colors hover:bg-blue-700"
          >
            Check Your site health instantly
          </button>
        </div>
      </div>
    </section>
  );
}
