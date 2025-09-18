"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";
import { Bolt, Dumbbell, Brain, Moon, ClipboardCheck } from "lucide-react";

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <section className={cn("mx-auto max-w-6xl px-4 py-16", className)}>{children}</section>;
}

function Divider() {
  return (
    <div className="relative h-16">
      <div className="absolute inset-0 bg-[url('/brand/triskelion.png')] bg-no-repeat bg-center opacity-[0.05]" style={{ backgroundSize: 140 }} aria-hidden />
    </div>
  );
}

// ValueCard was used in a previous design; keeping codebase lean by removing unused component.

// ImageReasonCard removed (legacy).

// FeatureTile removed (legacy).

// TestosteroneResultCard removed (legacy).

function ResultCard({ title, value, unit, status = "Normal" }: { title: string; value: string; unit: string; status?: string }) {
  return (
    <div className="mx-auto w-full max-w-sm rounded-3xl border bg-white/90 shadow-md backdrop-blur p-5">
      <div className="flex items-start justify-between">
        <div>
          <div className="text-lg font-semibold text-neutral-900">{title}</div>
          <div className="mt-1 text-[15px] font-medium text-brand">{status}</div>
        </div>
        <div className="text-brand text-xl font-semibold">{value} <span className="text-neutral-400 text-sm align-middle">{unit}</span></div>
      </div>
      <div className="mt-4 rounded-full bg-white/70 p-2 shadow-inner">
        <div className="flex items-center gap-2">
          <div className="h-3 flex-1 rounded-full bg-red-300/70" />
          <div className="relative h-3 flex-[0.8] rounded-full bg-brand/80">
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 h-5 w-3 rounded-full bg-white shadow" />
          </div>
          <div className="h-3 flex-1 rounded-full bg-red-300/70" />
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-dvh flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative border-b fade-up reveal-on-scroll">
          <div className="absolute inset-0 watermark-triskelion" aria-hidden />
          <div className="relative mx-auto max-w-6xl px-4 py-20">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">{t("knowYourT")}</h1>
            <p className="mt-5 text-lg text-neutral-700 max-w-2xl">{t("hormonesDrive")}</p>
            <div className="mt-8 flex flex-wrap gap-3 items-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">{t("first50off")}</span>
              <Link href="/shop" className={cn(buttonVariants({ variant: "default" }), "rounded-full bg-brand hover:bg-accent text-white px-6 py-6 text-base")}>{t("getYourKit")}</Link>
            </div>
            <p className="mt-4 text-xs text-neutral-600">{t("trustCues")}</p>
          </div>
        </section>

        <Divider />

        {/* Featured Kits */}
        <section className="relative overflow-hidden fade-up reveal-on-scroll">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(29,58,95,0.08),transparent_40%),radial-gradient(circle_at_80%_100%,rgba(29,58,95,0.08),transparent_40%)]" aria-hidden />
          <div className="relative mx-auto max-w-6xl px-4 py-20">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">{t("launchOffer")} • {t("first50off")}</span>
              <h2 className="mt-3 text-4xl font-bold tracking-tight">{t("getYourKit")}</h2>
              <p className="mt-3 text-neutral-700">Energy, recovery, vitality and stress balance — choose your starting point.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Link href="/buy/testosterone" className="card hover-lift p-0 overflow-hidden block">
                <div className="grid md:grid-cols-2">
                  <div className="relative img-zoom bg-white p-6 flex items-center justify-center">
                    <Image src="/brand/testkit.png" alt="Testosterone Kit" width={400} height={260} className="h-auto w-[260px] object-contain" unoptimized />
                    <div className="pointer-events-none absolute bottom-0 right-0 h-3/5 w-full bg-brand/10" style={{clipPath:'polygon(100% 0, 0 100%, 100% 100%)'}}/>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold">{t("testosteroneKit")}</h3>
                    </div>
                    <p className="mt-2 text-neutral-700 text-sm">Track free testosterone for strength, recovery and vitality.</p>
                    <div className="mt-4">
                      <span className={cn(buttonVariants({ variant: "default" }), "rounded-full bg-brand hover:bg-accent text-white")}>{t("getYourKit")}</span>
                    </div>
                  </div>
                </div>
              </Link>
              <Link href="/buy/male-vitality-pack" className="card hover-lift p-0 overflow-hidden block">
                <div className="grid md:grid-cols-2">
                  <div className="relative img-zoom bg-white p-6 flex items-center justify-center order-last md:order-first">
                    <Image src="/brand/malekit.png" alt="Stress & Energy Kit" width={400} height={260} className="h-auto w-[260px] object-contain" unoptimized />
                    <div className="pointer-events-none absolute bottom-0 left-0 h-3/5 w-full bg-accent/10" style={{clipPath:'polygon(0 0, 0 100%, 100% 100%)'}}/>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold">{t("stressEnergyKit")}</h3>
                    </div>
                    <p className="mt-2 text-neutral-700 text-sm">Balance stress and energy with a simple at-home kit.</p>
                    <div className="mt-4">
                      <span className={cn(buttonVariants({ variant: "default" }), "rounded-full bg-brand hover:bg-accent text-white")}>{t("getYourKit")}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        <Divider />

        {/* Hormone Crisis Section */}
        <section className="bg-neutral-50 border-y">
          <div className="mx-auto max-w-6xl px-4 py-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight">{t("hormoneCrisisTitle")}</h2>
              <p className="mt-6 text-lg text-neutral-700 max-w-4xl mx-auto">{t("hormoneCrisisIntro")}</p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-3 mb-12">
              <div className="text-center p-6 rounded-2xl bg-white border shadow-sm">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-red-50 flex items-center justify-center">
                  <span className="text-4xl font-extrabold tracking-tight text-red-600">-30%</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{t("decliningTestosterone")}</h3>
                <p className="text-neutral-700 text-sm">{t("decliningTestosteroneText")}</p>
              </div>
              
              <div className="text-center p-6 rounded-2xl bg-white border shadow-sm">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-orange-50 flex items-center justify-center">
                  <span className="text-4xl font-extrabold tracking-tight text-orange-600">+25%</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{t("risingStress")}</h3>
                <p className="text-neutral-700 text-sm">{t("risingStressText")}</p>
              </div>
              
              <div className="text-center p-6 rounded-2xl bg-white border shadow-sm">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-yellow-50 flex items-center justify-center">
                  <span className="text-4xl font-extrabold tracking-tight text-yellow-600">-20%</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{t("decliningDhea")}</h3>
                <p className="text-neutral-700 text-sm">{t("decliningDheaText")}</p>
              </div>
            </div>
            
              <div className="text-center bg-white rounded-3xl border p-8 shadow-sm card hover-lift">
              <h3 className="text-2xl font-bold text-brand mb-4">{t("takeControlTitle")}</h3>
              <p className="text-lg text-neutral-700 mb-6 max-w-3xl mx-auto">{t("takeControlText")}</p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link href="/shop" className={cn(buttonVariants({ variant: "default" }), "bg-brand hover:bg-brand/90 text-white px-6 py-3 text-base")}>{t("startTrackingNow")}</Link>
                <Link href="/process" className={cn(buttonVariants({ variant: "outline" }), "border-brand text-brand hover:bg-brand hover:text-white px-6 py-3 text-base")}>{t("learnHowItWorks")}</Link>
              </div>
            </div>
          </div>
        </section>

        <Divider />

        {/* Results in App */}
        <section className="bg-brand/10 border-y fade-up reveal-on-scroll">
          <div className="mx-auto max-w-6xl px-4 py-20">
            <h2 className="text-3xl font-semibold tracking-tight">{t("getResultsInAppTitle")}</h2>
            <p className="mt-3 text-neutral-700 max-w-2xl">{t("getResultsInAppSubhead")}</p>
            
            {/* Individual Hormone Graphs */}
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {/* Free Testosterone Graph */}
              <div className="bg-white rounded-2xl border border-neutral-200 p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-neutral-900">{t("freeTestosteroneTitle")}</h3>
                  <div className="flex items-center gap-2 text-sm text-green-600 font-medium">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span>+12%</span>
                  </div>
                </div>
                <div className="relative h-48 w-full">
                  <svg viewBox="0 0 300 150" className="w-full h-full">
                    <defs>
                      <linearGradient id="testosteroneGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#1D3A5F" stopOpacity="0.3"/>
                        <stop offset="100%" stopColor="#1D3A5F" stopOpacity="0.05"/>
                      </linearGradient>
                      <pattern id="testosteroneGrid" width="30" height="30" patternUnits="userSpaceOnUse">
                        <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#f3f4f6" strokeWidth="1"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#testosteroneGrid)" />
                    {/* Normal range band (pg/mL ~60-100) */}
                    <rect x="40" y="40" width="240" height="60" fill="#1D3A5F" opacity="0.08" />
                    
                    {/* Y-axis labels */}
                    <text x="10" y="20" className="text-xs font-medium fill-neutral-600">120</text>
                    <text x="10" y="60" className="text-xs font-medium fill-neutral-600">90</text>
                    <text x="10" y="100" className="text-xs font-medium fill-neutral-600">60</text>
                    <text x="10" y="140" className="text-xs font-medium fill-neutral-600">30</text>
                    
                    {/* X-axis labels */}
                    <text x="50" y="145" className="text-xs font-medium fill-neutral-600">Jan</text>
                    <text x="100" y="145" className="text-xs font-medium fill-neutral-600">Feb</text>
                    <text x="150" y="145" className="text-xs font-medium fill-neutral-600">Mar</text>
                    <text x="200" y="145" className="text-xs font-medium fill-neutral-600">Apr</text>
                    <text x="250" y="145" className="text-xs font-medium fill-neutral-600">May</text>
                    <text x="290" y="145" className="text-xs font-medium fill-neutral-600">Jun</text>
                    
                    {/* Free Testosterone area and line (varied but generally upward) */}
                    <polygon
                      points="50,105 100,95 150,100 200,85 250,70 290,65 290,150 50,150"
                      fill="url(#testosteroneGradient)"
                    />
                    <polyline
                      points="50,105 100,95 150,100 200,85 250,70 290,65"
                      fill="none"
                      stroke="#1D3A5F"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    
                    {/* Data points */}
                    <circle cx="50" cy="105" r="4" fill="#1D3A5F" stroke="white" strokeWidth="2"/>
                    <circle cx="100" cy="95" r="4" fill="#1D3A5F" stroke="white" strokeWidth="2"/>
                    <circle cx="150" cy="100" r="4" fill="#1D3A5F" stroke="white" strokeWidth="2"/>
                    <circle cx="200" cy="85" r="4" fill="#1D3A5F" stroke="white" strokeWidth="2"/>
                    <circle cx="250" cy="70" r="4" fill="#1D3A5F" stroke="white" strokeWidth="2"/>
                    <circle cx="290" cy="65" r="4" fill="#1D3A5F" stroke="white" strokeWidth="2"/>
                  </svg>
                </div>
                <div className="mt-3 text-center">
                  <span className="text-sm text-neutral-600">{t("currentWithinRange")}</span>
                </div>
              </div>

              {/* Cortisol Graph */}
              <div className="bg-white rounded-2xl border border-neutral-200 p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-neutral-900">{t("cortisolTitle")}</h3>
                  <div className="flex items-center gap-2 text-sm text-red-600 font-medium">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <span>-10%</span>
                  </div>
                </div>
                <div className="relative h-48 w-full">
                  <svg viewBox="0 0 300 150" className="w-full h-full">
                    <defs>
                      <linearGradient id="cortisolGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3"/>
                        <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.05"/>
                      </linearGradient>
                      <pattern id="cortisolGrid" width="30" height="30" patternUnits="userSpaceOnUse">
                        <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#f3f4f6" strokeWidth="1"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#cortisolGrid)" />
                    {/* Normal range band (ng/mL ~5-20) */}
                    <rect x="40" y="60" width="240" height="80" fill="#3B82F6" opacity="0.08" />
                    
                    {/* Y-axis labels (ng/mL) */}
                    <text x="10" y="20" className="text-xs font-medium fill-neutral-600">25</text>
                    <text x="10" y="60" className="text-xs font-medium fill-neutral-600">20</text>
                    <text x="10" y="100" className="text-xs font-medium fill-neutral-600">15</text>
                    <text x="10" y="140" className="text-xs font-medium fill-neutral-600">5</text>
                    
                    {/* X-axis labels */}
                    <text x="50" y="145" className="text-xs font-medium fill-neutral-600">Jan</text>
                    <text x="100" y="145" className="text-xs font-medium fill-neutral-600">Feb</text>
                    <text x="150" y="145" className="text-xs font-medium fill-neutral-600">Mar</text>
                    <text x="200" y="145" className="text-xs font-medium fill-neutral-600">Apr</text>
                    <text x="250" y="145" className="text-xs font-medium fill-neutral-600">May</text>
                    <text x="290" y="145" className="text-xs font-medium fill-neutral-600">Jun</text>
                    
                    {/* Cortisol area and line (downward trend) */}
                    <polygon
                      points="50,50 100,70 150,85 200,95 250,105 290,115 290,150 50,150"
                      fill="url(#cortisolGradient)"
                    />
                    <polyline
                      points="50,50 100,70 150,85 200,95 250,105 290,115"
                      fill="none"
                      stroke="#3B82F6"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    
                    {/* Data points */}
                    <circle cx="50" cy="50" r="4" fill="#3B82F6" stroke="white" strokeWidth="2"/>
                    <circle cx="100" cy="70" r="4" fill="#3B82F6" stroke="white" strokeWidth="2"/>
                    <circle cx="150" cy="85" r="4" fill="#3B82F6" stroke="white" strokeWidth="2"/>
                    <circle cx="200" cy="95" r="4" fill="#3B82F6" stroke="white" strokeWidth="2"/>
                    <circle cx="250" cy="105" r="4" fill="#3B82F6" stroke="white" strokeWidth="2"/>
                    <circle cx="290" cy="115" r="4" fill="#3B82F6" stroke="white" strokeWidth="2"/>
                  </svg>
                </div>
                <div className="mt-3 text-center">
                  <span className="text-sm text-neutral-600">{t("currentCortisol")}</span>
                </div>
              </div>

              {/* DHEA Graph */}
              <div className="bg-white rounded-2xl border border-neutral-200 p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-neutral-900">{t("dheaTitle")}</h3>
                  <div className="flex items-center gap-2 text-sm text-green-600 font-medium">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span>+22%</span>
                  </div>
                </div>
                <div className="relative h-48 w-full">
                  <svg viewBox="0 0 300 150" className="w-full h-full">
                    <defs>
                      <linearGradient id="dheaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#1E40AF" stopOpacity="0.3"/>
                        <stop offset="100%" stopColor="#1E40AF" stopOpacity="0.05"/>
                      </linearGradient>
                      <pattern id="dheaGrid" width="30" height="30" patternUnits="userSpaceOnUse">
                        <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#f3f4f6" strokeWidth="1"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#dheaGrid)" />
                    {/* Normal range band (pg/mL ~150-300) */}
                    <rect x="40" y="60" width="240" height="60" fill="#1E40AF" opacity="0.08" />
                    
                    {/* Y-axis labels (pg/mL) */}
                    <text x="10" y="20" className="text-xs font-medium fill-neutral-600">400</text>
                    <text x="10" y="60" className="text-xs font-medium fill-neutral-600">300</text>
                    <text x="10" y="100" className="text-xs font-medium fill-neutral-600">200</text>
                    <text x="10" y="140" className="text-xs font-medium fill-neutral-600">100</text>
                    
                    {/* X-axis labels */}
                    <text x="50" y="145" className="text-xs font-medium fill-neutral-600">Jan</text>
                    <text x="100" y="145" className="text-xs font-medium fill-neutral-600">Feb</text>
                    <text x="150" y="145" className="text-xs font-medium fill-neutral-600">Mar</text>
                    <text x="200" y="145" className="text-xs font-medium fill-neutral-600">Apr</text>
                    <text x="250" y="145" className="text-xs font-medium fill-neutral-600">May</text>
                    <text x="290" y="145" className="text-xs font-medium fill-neutral-600">Jun</text>
                    
                    {/* DHEA area and line (varied, slight dip) */}
                    <polygon
                      points="50,120 100,110 150,100 200,105 250,95 290,85 290,150 50,150"
                      fill="url(#dheaGradient)"
                    />
                    <polyline
                      points="50,120 100,110 150,100 200,105 250,95 290,85"
                      fill="none"
                      stroke="#1E40AF"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    
                    {/* Data points */}
                    <circle cx="50" cy="120" r="4" fill="#1E40AF" stroke="white" strokeWidth="2"/>
                    <circle cx="100" cy="110" r="4" fill="#1E40AF" stroke="white" strokeWidth="2"/>
                    <circle cx="150" cy="100" r="4" fill="#1E40AF" stroke="white" strokeWidth="2"/>
                    <circle cx="200" cy="105" r="4" fill="#1E40AF" stroke="white" strokeWidth="2"/>
                    <circle cx="250" cy="95" r="4" fill="#1E40AF" stroke="white" strokeWidth="2"/>
                    <circle cx="290" cy="85" r="4" fill="#1E40AF" stroke="white" strokeWidth="2"/>
                  </svg>
                </div>
                <div className="mt-3 text-center">
                  <span className="text-sm text-neutral-600">{t("currentDhea")}</span>
                </div>
              </div>
            </div>
            
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <ResultCard title="Testosterone" value="72" unit="pg/mL" />
              <ResultCard title="Cortisol" value="9.7" unit="ng/mL" />
              <ResultCard title="DHEA" value="246" unit="pg/mL" />
            </div>
          </div>
        </section>

        <Divider />

        {/* Why Test Now */}
        <Section>
          <h2 className="text-2xl font-semibold tracking-tight">{t("whyTestNow")}</h2>
          <div className="mt-6 grid items-stretch gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2 rounded-3xl border bg-white p-6 shadow-sm h-full">
              <div className="grid gap-8 md:grid-cols-2 h-full">
                <ul className="space-y-3 text-sm text-neutral-800 self-center">
                  <li>• {t("actionableBaseline")}</li>
                  <li>• {t("trackProgress")}</li>
                  <li>• {t("morningSnapshot")}</li>
                </ul>
                <ul className="space-y-3 text-sm text-neutral-800 self-center">
                  <li>• {t("nonInvasive")}</li>
                  <li>• {t("private")}</li>
                  <li>• {t("fastSetup")}</li>
                </ul>
              </div>
            </div>
            <div className="rounded-3xl border bg-white p-6 shadow-sm h-full flex flex-col">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
                <ClipboardCheck className="h-4 w-4" /> {t("guidanceBadge")}
              </div>
              <h3 className="mt-4 text-xl font-semibold tracking-tight">{t("guidanceTitle")}</h3>
              <p className="mt-2 text-neutral-700 text-sm">{t("guidanceBody")}</p>
              <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-neutral-600 mt-auto">
                <div className="rounded-lg border bg-neutral-50 p-3">
                  <div className="font-medium text-neutral-900">{t("guidanceItem1Title")}</div>
                  <div>{t("guidanceItem1Body")}</div>
                </div>
                <div className="rounded-lg border bg-neutral-50 p-3">
                  <div className="font-medium text-neutral-900">{t("guidanceItem2Title")}</div>
                  <div>{t("guidanceItem2Body")}</div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        

        {/* Science Explainer */}
        <Section>
          <h2 className="text-2xl font-semibold tracking-tight">{t("whatWeMeasure")}</h2>
          <p className="mt-4 text-neutral-700 max-w-3xl">
            {t("scienceExplainer")}
          </p>
          <div className="mt-6 rounded-xl border bg-neutral-50 p-4 text-xs text-neutral-700">
            {t("ruoDisclaimer")}
          </div>
        </Section>

        

        {/* FAQ */}
        <Section>
          <h2 className="text-2xl font-semibold tracking-tight">FAQ</h2>
          <Accordion type="single" collapsible className="mt-6">
            <AccordionItem value="item-1">
              <AccordionTrigger>Free vs. total testosterone?</AccordionTrigger>
              <AccordionContent>
                We measure free (bioavailable) testosterone in saliva in pg/mL. This is not the same as a blood test’s total testosterone in ng/dL.
                Free T reflects the fraction not bound to proteins and is more actionable for day-to-day insights.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Why morning collection?</AccordionTrigger>
              <AccordionContent>
                Free testosterone follows a diurnal rhythm and is typically highest in the morning. Standardized timing improves consistency across individuals.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is this diagnostic?</AccordionTrigger>
              <AccordionContent>
                No — Research Use Only (RUO) for wellness and performance insights.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>How long are results?</AccordionTrigger>
              <AccordionContent>
                You’ll receive your report after we process your sample.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>What’s in the kit?</AccordionTrigger>
              <AccordionContent>
                PP collection tube(s), instructions, and packaging. Non-invasive, easy steps.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Section>

        <Divider />

        {/* CTA Footer Band */}
        <section className="border-t">
          <div className="mx-auto max-w-6xl px-4 py-14 text-center">
            <h3 className="text-2xl font-semibold tracking-tight">{t("measureWhatMatters")}</h3>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link href="/buy/male-vitality-pack" className={cn(buttonVariants({ variant: "default" }), "bg-brand hover:bg-brand/90 text-white px-6 py-6 text-base")}>{t("getMaleVitalityPack")}</Link>
              <Link href="/buy/testosterone" className={cn(buttonVariants({ variant: "outline" }), "border-brand text-brand hover:bg-brand hover:text-white px-6 py-6 text-base")}>{t("getTestosteroneTest")}</Link>
            </div>
        </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
