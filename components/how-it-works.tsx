"use client";

import { useLanguage } from "@/contexts/language-context";
import { Package, FlaskConical, Truck, Microscope, ClipboardCheck, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function HowItWorks() {
  const { t } = useLanguage();
  
  // Reduced to 5 steps: Merge lab analysis + results into a single, clearer step for first-time visitors
  const steps = [
    { icon: Package, title: t("step1Title"), desc: t("step1Desc"), trust: t("step1Trust") },
    { icon: FlaskConical, title: t("step2Title"), desc: t("step2Desc"), trust: t("step2Trust") },
    { icon: Truck, title: t("step3Title"), desc: t("step3Desc"), trust: t("step3Trust") },
    {
      icon: Microscope,
      title: `${t("step4Title")} & ${t("step5Title")}`,
      desc: `${t("step4Desc")} ${t("step5Desc")}`,
      trust: `${t("step4Trust")} • ${t("step5Trust")}`,
    },
    { icon: TrendingUp, title: t("step6Title"), desc: t("step6Desc"), trust: t("step6Trust") },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-3xl font-bold tracking-tight text-center mb-16">{t("howItWorks")}</h2>
      
      {/* Progress line for desktop */}
      <div className="hidden lg:block relative mb-12">
        <div className="absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-brand via-brand to-blue-500 rounded-full"></div>
        <div className="relative flex justify-between">
          {steps.map((_, i) => (
            <div key={i} className={cn(
              "w-4 h-4 rounded-full border-2 border-white shadow-lg",
              i < 3 ? "bg-brand" : "bg-blue-500"
            )}></div>
          ))}
        </div>
      </div>

      {/* Steps grid (no scroll reveal; simple layout) */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {steps.map((step, i) => (
          <div key={i} className="relative">
            <div className="p-6 rounded-2xl border bg-white shadow-sm transition-shadow hover-lift card">
              <div className="flex items-center gap-3 mb-4">
                <div className={cn(
                  "p-2 rounded-full",
                  i < 3 ? "bg-brand/10 text-brand" : "bg-blue-50 text-blue-600"
                )}>
                  <step.icon size={20} />
                </div>
                <span className={cn(
                  "text-sm font-semibold",
                  i < 3 ? "text-brand" : "text-blue-600"
                )}>
                  {t("step")} {i + 1}
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-neutral-700 text-sm mb-3">{step.desc}</p>
              <div className="text-xs text-neutral-500 bg-neutral-50 px-2 py-1 rounded">
                {step.trust}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <Link 
          href="/shop" 
          className={cn(
            buttonVariants({ variant: "default" }), 
            "bg-brand hover:bg-brand/90 text-white px-8 py-3 text-lg"
          )}
        >
          {t("getStartedToday")}
        </Link>
      </div>
    </section>
  );
}


