import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function PricingTable() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle>Testosterone Test — $50</CardTitle>
            <CardDescription>Quick insight into your free testosterone.</CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-neutral-700 space-y-1">
            <div>At-home saliva kit • Morning collection • Lab-grade ELISA (RUO)</div>
          </CardContent>
          <CardFooter>
            <Link href="/buy/testosterone" className={cn(buttonVariants({ variant: "outline" }), "border-brand text-brand hover:bg-brand hover:text-white")}>Buy</Link>
          </CardFooter>
        </Card>
        <Card className="rounded-2xl border-brand/40 scale-[1.01]">
          <CardHeader className="flex-row items-center justify-between">
            <div>
              <CardTitle>Male Vitality Pack — $120</CardTitle>
              <CardDescription>Complete snapshot: Testosterone + Cortisol + DHEA.</CardDescription>
            </div>
            <Badge className="bg-brand text-white">Most Popular</Badge>
          </CardHeader>
          <CardContent className="text-sm text-neutral-700 space-y-1">
            <div>Normally $150 if purchased separately — Save $30.</div>
          </CardContent>
          <CardFooter>
            <Link href="/buy/male-vitality-pack" className={cn(buttonVariants({ variant: "default" }), "bg-brand hover:bg-brand/90 text-white")}>Buy</Link>
          </CardFooter>
        </Card>
      </div>
      <p className="text-xs text-neutral-500 mt-4">If purchased separately: $150.</p>
    </section>
  );
}



