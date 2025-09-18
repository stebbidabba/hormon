"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Page() {
  const [email, setEmail] = useState("");
  const [quantity, setQuantity] = useState(1);

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
    <div className="min-h-dvh flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-4 py-16">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold tracking-tight">Male Vitality Pack — $120</h1>
            <Badge className="bg-brand text-white">Most Popular</Badge>
          </div>
          <p className="mt-3 text-neutral-700">Complete snapshot: Testosterone + Cortisol + DHEA.</p>
          <div className="text-sm text-neutral-700">Normally $150 if purchased separately — Save $30.</div>
          <div className="mt-6 text-sm text-neutral-700">
            We measure free (bioavailable) testosterone in saliva using a research-grade ELISA. Results are in pg/mL and are not the same as a blood test's total testosterone (ng/dL). Free T reflects the fraction not bound to SHBG/albumin—the part that can act on tissues.
          </div>

          <div className="mt-8 flex gap-3">
            <button onClick={handleAddToCart} className={cn(buttonVariants({ variant: "default" }), "bg-brand hover:bg-brand/90 text-white px-6 py-3")}>Add to Cart</button>
            
            <Dialog>
              <DialogTrigger className={cn(buttonVariants({ variant: "outline" }), "border-brand text-brand hover:bg-brand hover:text-white px-6 py-3")}>Buy Now</DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Checkout</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4">
                  <div className="flex items-center justify-between">
                    <span>Male Vitality Pack</span>
                    <span>$120</span>
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
                      <span>${120 * quantity}</span>
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
        </section>
      </main>
      <Footer />
    </div>
  );
}


