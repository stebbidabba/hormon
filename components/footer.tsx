"use client";

import Link from "next/link";
import { InstagramIcon, TikTokIcon, GmailIcon } from "@/components/icons";
import { useLanguage } from "@/contexts/language-context";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t bg-white">
      <div className="bg-neutral-50">
        <div className="mx-auto max-w-6xl px-4 py-4 text-xs text-neutral-700 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="leading-relaxed">{t("ruoDisclaimer")}</div>
          <div className="flex items-center gap-4">
            <Link href="/legal/ruo" className="hover:text-brand">{t("ruo_label")}</Link>
            <Link href="/legal/terms" className="hover:text-brand">{t("terms_label")}</Link>
            <Link href="/legal/privacy" className="hover:text-brand">{t("privacy_label")}</Link>
          </div>
          <div className="flex items-center gap-3 text-neutral-600">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-brand"><InstagramIcon width={18} height={18} /></a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer" aria-label="TikTok" className="hover:text-brand"><TikTokIcon width={18} height={18} /></a>
            <a href="mailto:motionlab@motion.com" aria-label="Email" className="hover:text-brand"><GmailIcon width={20} height={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}


