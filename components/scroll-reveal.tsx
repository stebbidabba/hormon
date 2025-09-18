"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const q = ".reveal-on-scroll";
    const elements = Array.from(document.querySelectorAll<HTMLElement>(q));
    const reveal = (el: Element) => (el as HTMLElement).classList.add("is-visible");

    if (elements.length === 0) return;

    // If IntersectionObserver is not supported, reveal everything
    if (!("IntersectionObserver" in window)) {
      elements.forEach(reveal);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            reveal(entry.target);
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}


