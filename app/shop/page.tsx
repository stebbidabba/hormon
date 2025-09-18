"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
// import Link from "next/link";
import Image from "next/image";
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/language-context";

function ProductCard({
  title,
  price,
  href,
  popular,
  description,
  imageSrc,
}: {
  title: string;
  price: number;
  href?: string;
  popular?: boolean;
  description: string;
  imageSrc: string;
}) {
  const [quantity, setQuantity] = useState(1);
  const [email, setEmail] = useState("");
  const { t } = useLanguage();

  const handleAddToCart = () => {
    toast.success("Added to cart!");
  };

  const handleCheckout = () => {
    const ok = /.+@.+\..+/.test(email);
    if (!ok) return toast.error("Enter a valid email");
    toast.success("Order placed! (Demo mode)");
    setEmail("");
  };

  return (
    <div className="flex flex-col h-full">
      <div className="relative">
        {popular && (
          <span className="absolute right-3 top-3 z-10 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-white">Most Popular</span>
        )}
        <Image
          src={imageSrc}
          alt="Product image"
          width={800}
          height={480}
          className="h-auto w-[220px] md:w-[280px] rounded-3xl object-contain mx-auto"
          unoptimized
        />
      </div>

      <div className="mt-4">
        <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
        <p className="mt-2 text-neutral-700 text-sm">{description}</p>
        <div className="mt-4 text-lg font-semibold">${price}</div>
        <div className="mt-4 flex items-center gap-2">
          <button onClick={handleAddToCart} className={cn("rounded-full px-6 py-2", buttonVariants({ variant: "default" }), "bg-brand hover:bg-brand/90 text-white")}>{t("addToCart")}</button>
          <Dialog>
            <DialogTrigger className={cn("rounded-full px-6 py-2", buttonVariants({ variant: "outline" }), "border-brand text-brand hover:bg-brand hover:text-white")}>{t("buyNow")}</DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Checkout</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4">
                <div className="flex items-center justify-between">
                  <span>{title}</span>
                  <span>${price}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Quantity</span>
                  <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} className="rounded border px-2 py-1">
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                  </select>
                </div>
                <div className="border-t pt-2">
                  <div className="flex items-center justify-between font-semibold">
                    <span>Total</span>
                    <span>${price * quantity}</span>
                  </div>
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                  <button onClick={handleCheckout} className="mt-2 rounded-md bg-brand text-white px-4 py-2">Place Order</button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-dvh flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-4 py-16">
          <h1 className="text-3xl font-bold tracking-tight">{t("shopTitle")}</h1>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <ProductCard
              title="Free Testosterone Test"
              price={50}
              href="/buy/testosterone"
              description="Measure free testosterone at home with a simple morning saliva kit."
              imageSrc="/brand/testkit.png"
            />
            <ProductCard
              title="Male Vitality Pack"
              price={120}
              href="/buy/male-vitality-pack"
              description="Bundle of Free Testosterone, Cortisol, and DHEA for a complete snapshot."
              popular={true}
              imageSrc="/brand/malekit.png"
            />
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-semibold tracking-tight mb-8">Coming Soon</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-3xl border bg-neutral-50 p-6 h-full">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold tracking-tight">Complete Sex Hormone Panel</h3>
                  <span className="rounded-full bg-brand/10 px-3 py-1 text-xs font-medium text-brand">Coming Soon</span>
                </div>
                <p className="mt-2 text-neutral-700 text-sm">Includes:</p>
                <ul className="mt-3 space-y-1 text-sm text-neutral-800 list-disc list-inside">
                  <li>Free Testosterone</li>
                  <li>Estradiol</li>
                  <li>Progesterone</li>
                  <li>Estrone</li>
                  <li>DHEA-S</li>
                  <li>17-OH-Progesterone</li>
                </ul>
              </div>

              <div className="rounded-3xl border bg-neutral-50 p-6 h-full">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold tracking-tight">Women&apos;s Balance Panel</h3>
                  <span className="rounded-full bg-brand/10 px-3 py-1 text-xs font-medium text-brand">Coming Soon</span>
                </div>
                <p className="mt-2 text-neutral-700 text-sm">Includes:</p>
                <ul className="mt-3 space-y-1 text-sm text-neutral-800 list-disc list-inside">
                  <li>Estradiol</li>
                  <li>Progesterone</li>
                  <li>Estrone <span className="text-neutral-500">(coming soon)</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}


