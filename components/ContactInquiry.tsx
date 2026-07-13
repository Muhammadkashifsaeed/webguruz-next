"use client";

import { useState } from "react";

const countries = [
  { code: "+92", name: "Pakistan", flag: "🇵🇰" },
  { code: "+1", name: "USA", flag: "🇺🇸" },
  { code: "+44", name: "UK", flag: "🇬🇧" },
  { code: "+971", name: "UAE", flag: "🇦🇪" },
  { code: "+91", name: "India", flag: "🇮🇳" },
  { code: "+61", name: "Australia", flag: "🇦🇺" },
  { code: "+966", name: "Saudi Arabia", flag: "🇸🇦" },
  { code: "+974", name: "Qatar", flag: "🇶🇦" },
  { code: "+965", name: "Kuwait", flag: "🇰🇼" },
  { code: "+973", name: "Bahrain", flag: "🇧🇭" },
  { code: "+968", name: "Oman", flag: "🇴🇲" },
  { code: "+60", name: "Malaysia", flag: "🇲🇾" },
  { code: "+65", name: "Singapore", flag: "🇸🇬" },
  { code: "+49", name: "Germany", flag: "🇩🇪" },
  { code: "+33", name: "France", flag: "🇫🇷" },
  { code: "+39", name: "Italy", flag: "🇮🇹" },
  { code: "+34", name: "Spain", flag: "🇪🇸" },
  { code: "+31", name: "Netherlands", flag: "🇳🇱" },
  { code: "+46", name: "Sweden", flag: "🇸🇪" },
  { code: "+81", name: "Japan", flag: "🇯🇵" },
];

export default function ContactInquiry() {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    budget: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Inquiry submitted!");
  };

  return (
    <section className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-slate-900">
          <span className="text-blue-400">{`Got A Question?`}</span> Fill In The
          Details Below.
        </h2>

        <form
          onSubmit={handleSubmit}
          className="mt-10 max-w-3xl mx-auto space-y-5"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-left text-sm font-medium text-slate-700">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                required
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-blue-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-left text-sm font-medium text-slate-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-blue-400 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-left text-sm font-medium text-slate-700">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <div className="mt-1 flex">
              <select
                value={selectedCountry.code}
                onChange={(e) => {
                  const country = countries.find(
                    (c) => c.code === e.target.value
                  );
                  if (country) setSelectedCountry(country);
                }}
                className="rounded-l-lg border border-gray-300 bg-gray-50 px-3 py-2.5 text-sm text-slate-700 focus:border-blue-400 focus:outline-none w-24"
              >
                {countries.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.flag} {c.code}
                  </option>
                ))}
              </select>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                placeholder={`${selectedCountry.code} phone number`}
                className="flex-1 rounded-r-lg border border-l-0 border-gray-300 px-4 py-2.5 focus:border-blue-400 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-left text-sm font-medium text-slate-700">
              Your Project Budget (USD)
            </label>
            <input
              type="text"
              name="budget"
              value={form.budget}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-blue-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-left text-sm font-medium text-slate-700">
              Describe Your Project Requirement
            </label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              rows={4}
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-blue-400 focus:outline-none"
            />
          </div>

          <div className="text-center pt-2">
            <button
              type="submit"
              className="inline-flex items-center gap-1 bg-blue-400 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-600 transition-colors"
            >
              Submit Your Inquiry! <span aria-hidden="true">&rarr;</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
