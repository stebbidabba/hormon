"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";

export default function Navbar() {
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();

  return (
        <header className="sticky top-0 z-40 w-full text-white">
          <div className="absolute inset-0 -z-10">
            <div className="h-full w-full bg-gradient-to-r from-[#1D3A5F] via-[#243f73] to-[#3FA9F5]" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-1/3 bg-white/5" style={{clipPath:'polygon(60% 0, 100% 0, 100% 100%, 0 100%)'}} />
          </div>
          <div className="mx-auto max-w-6xl px-4 h-14 md:h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group" aria-label="MOTION Labs home">
              <Image src="/brand/name.png?v=2" alt="MOTION Labs" width={140} height={28} priority unoptimized className="transition-transform group-hover:scale-[1.02]" />
            </Link>
            <div className="flex items-center gap-6 text-sm">
              <nav className="hidden md:flex items-center gap-7">
                <Link href="/" className={cn("text-white/90 hover:text-white underline-offset-8 hover:underline", pathname === "/" && "font-semibold underline")}>{t("home")}</Link>
                <Link href="/about" className={cn("text-white/90 hover:text-white underline-offset-8 hover:underline", pathname === "/about" && "font-semibold underline")}>{t("about")}</Link>
                <Link href="/process" className={cn("text-white/90 hover:text-white underline-offset-8 hover:underline", pathname === "/process" && "font-semibold underline")}>{t("process")}</Link>
                <Link href="/shop" className={cn("text-white/90 hover:text-white underline-offset-8 hover:underline", pathname === "/shop" && "font-semibold underline")}>{t("shop")}</Link>
                <Link href="/contact" className={cn("text-white/90 hover:text-white underline-offset-8 hover:underline", pathname === "/contact" && "font-semibold underline")}>{t("contact")}</Link>
              </nav>
              <div className="flex items-center gap-2">
          <button
            onClick={() => setLanguage(language === "en" ? "is" : "en")}
                className="rounded-md bg-white/10 px-2 py-1 text-xs font-medium hover:bg-white/20"
          >
            {language === "en" ? "IS" : "EN"}
          </button>
              <Link href="/login" className={cn(buttonVariants({ variant: "outline" }), "rounded-full border-white text-white hover:bg-white hover:text-[#1D3A5F]")}>{t("logIn")}</Link>
              <Link href="/cart" className={cn(buttonVariants({ variant: "default" }), "rounded-full bg-white text-[#1D3A5F] hover:bg-white/90")}>{t("cart")}</Link>
              </div>
            </div>
      </div>
    </header>
  );
}


