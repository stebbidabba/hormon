import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="relative border-b">
      <div className="absolute inset-0 watermark-triskelion" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-4 py-20">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
          Know Your T — or Get the Full Picture
        </h1>
        <p className="mt-5 text-lg text-neutral-700 max-w-2xl">
          Accurate, at-home saliva testing. Free testosterone alone, or bundle with cortisol and DHEA for a complete view.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/buy/male-vitality-pack" className={cn(buttonVariants({ variant: "default" }), "bg-brand hover:bg-brand/90 text-white px-6 py-6 text-base")}>Get Stress & Energy Kit</Link>
          <Link href="/buy/testosterone" className={cn(buttonVariants({ variant: "outline" }), "border-brand text-brand hover:bg-brand hover:text-white px-6 py-6 text-base")}>Get Testosterone Kit</Link>
        </div>
      </div>
    </section>
  );
}



