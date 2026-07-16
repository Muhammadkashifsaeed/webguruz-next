"use client";

import {
  Smile,
  HeartPulse,
  GraduationCap,
  DollarSign,
  Fan,
  Home,
  MapPin,
  Utensils,
  Star,
  Plane,
  Scale,
  Car,
} from "lucide-react";

const industries = [
  { name: "Dental SEO", Icon: Smile },
  { name: "Healthcare SEO", Icon: HeartPulse },
  { name: "Education SEO", Icon: GraduationCap },
  { name: "Financial SEO", Icon: DollarSign },
  { name: "HVAC SEO", Icon: Fan },
  { name: "Real Estate SEO", Icon: Home },
  { name: "Tourism and Hotels", Icon: MapPin },
  { name: "Restaurant SEO", Icon: Utensils },
  { name: "Casino SEO", Icon: Star },
  { name: "Immigration SEO", Icon: Plane },
  { name: "Legal SEO", Icon: Scale },
  { name: "Car Dealers SEO", Icon: Car },
];

export default function InternationalSeoIndustries() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
          Industries <span className="text-blue-500">We Cater To</span>
        </h2>

        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-700">
          From startups to established enterprises, we serve businesses across a wide range of industries.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {industries.map((item) => (
            <div
              key={item.name}
              className="group flex flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:border-blue-500 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-500 transition-colors duration-300 group-hover:bg-blue-500 group-hover:text-white">
                <item.Icon className="h-6 w-6" />
              </div>
              <p className="mt-3 text-sm font-medium text-slate-700 transition-colors duration-300 group-hover:text-blue-600">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
