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
    <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur border-b">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="MOTION Labs home">
          <Image src="/brand/name.png?v=2" alt="MOTION Labs" width={140} height={28} priority unoptimized />
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/about" className={cn("hover:text-brand", pathname === "/about" && "text-brand font-semibold")}>{t("about")}</Link>
          <Link href="/process" className={cn("hover:text-brand", pathname === "/process" && "text-brand font-semibold")}>{t("process")}</Link>
          <Link href="/shop" className={cn("hover:text-brand", pathname === "/shop" && "text-brand font-semibold")}>{t("shop")}</Link>
          <Link href="/contact" className={cn("hover:text-brand", pathname === "/contact" && "text-brand font-semibold")}>{t("contact")}</Link>
        </nav>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setLanguage(language === "en" ? "is" : "en")}
            className="rounded-md bg-neutral-100 px-2 py-1 text-xs font-medium hover:bg-neutral-200"
          >
            {language === "en" ? "IS" : "EN"}
          </button>
          <Link href="/login" className={cn(buttonVariants({ variant: "outline" }), "border-brand text-brand hover:bg-brand hover:text-white")}>{t("logIn")}</Link>
          <Link href="/cart" className={cn(buttonVariants({ variant: "default" }), "bg-brand hover:bg-brand/90 text-white")}>{t("cart")}</Link>
        </div>
      </div>
    </header>
  );
}


