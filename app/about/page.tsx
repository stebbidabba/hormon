"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useLanguage } from "@/contexts/language-context";

export default function Page() {
  const { t } = useLanguage();
  return (
    <div className="min-h-dvh flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-4 py-16">
          <h1 className="text-3xl font-bold tracking-tight">{t("aboutTitle")}</h1>
          <div className="mt-4 space-y-4 text-neutral-700">
            <p>{t("aboutP1")}</p>
            <p>{t("aboutP2")}</p>
            <p>{t("aboutP3")}</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}


