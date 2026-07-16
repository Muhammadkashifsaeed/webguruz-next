"use client";

import Image from "next/image";
import Link from "next/link";
import SeoConsultingStrategyForm from "./SeoConsultingStrategyForm";
import SeoConsultingStrategyStats from "./SeoConsultingStrategyStats";
import SeoConsultingStrategyAudit from "./SeoConsultingStrategyAudit";
import SeoConsultingStrategyServices from "./SeoConsultingStrategyServices";
import SeoConsultingStrategyIndustries from "./SeoConsultingStrategyIndustries";
import SeoConsultingStrategyWhyChoose from "./SeoConsultingStrategyWhyChoose";

export default function SeoConsultingStrategy() {
  return (
    <div className="flex-1">
      <section className="bg-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                Expert SEO Strategy &{" "}
                <span className="text-blue-500">Consulting Services</span>
              </h1>

              <p className="mt-4 text-base leading-relaxed text-slate-700">
                Success online starts with the right strategy. Our SEO Strategy & Consulting Services are designed to help businesses like yours stand out in a crowded digital world. From boosting your website&apos;s visibility to driving meaningful traffic, we create customized plans that deliver real results. With our expertise, you&apos;ll reach your target audience, increase conversions, and achieve sustainable growth.
              </p>

              <Link
                href="/contact"
                className="mt-6 inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-colors hover:bg-blue-700"
              >
                Get Started!
              </Link>
            </div>

            <div className="relative aspect-[3/2]">
              <Image
                src="/images/visibility.webp"
                alt="Visibility"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <SeoConsultingStrategyStats />
      <SeoConsultingStrategyForm />
      <SeoConsultingStrategyAudit />
      <SeoConsultingStrategyServices />
      <SeoConsultingStrategyIndustries />
      <SeoConsultingStrategyWhyChoose />

    </div>
  );
}