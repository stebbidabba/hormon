"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useLanguage } from "@/contexts/language-context";

export default function Page() {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="min-h-dvh bg-[color:var(--brand)] text-white flex items-center justify-center px-4">
      <div className="absolute top-4 right-4">
        <button
          onClick={() => setLanguage(language === "en" ? "is" : "en")}
          className="rounded-md bg-white/10 px-3 py-1 text-sm font-medium"
        >
          {language === "en" ? "IS" : "EN"}
        </button>
      </div>
      <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-8">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            {mode === "login" ? t("welcomeBack") : t("createAccount")}
          </h1>
          <p className="mt-1 text-sm text-white/80">
            {mode === "login" ? t("logInToContinue") : t("signUpToGetStarted")}
          </p>
        </div>

        <div className="grid gap-3">
          <button className="w-full rounded-md bg-white text-black py-2.5 font-medium">
            {t("continueWithGoogle")}
          </button>
          <div className="relative my-2 text-center text-xs text-white/70">
            <span className="bg-transparent px-2">{t("or")}</span>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email" className="text-white">{t("email")}</Label>
            <Input id="email" placeholder="you@example.com" className="bg-white/10 border-white/20 text-white placeholder:text-white/60" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password" className="text-white">{t("password")}</Label>
            <Input id="password" type="password" className="bg-white/10 border-white/20 text-white placeholder:text-white/60" />
          </div>
          <button className="mt-2 rounded-md bg-white text-black px-4 py-2 font-medium">
            {mode === "login" ? t("logIn") : t("signUp")}
          </button>
        </div>

        <div className="mt-6 text-center text-sm text-white/80">
          {mode === "login" ? (
            <>
              {t("newHere")}{" "}
              <button onClick={() => setMode("signup")} className="underline underline-offset-4">{t("createAnAccount")}</button>
            </>
          ) : (
            <>
              {t("alreadyHaveAccount")}{" "}
              <button onClick={() => setMode("login")} className="underline underline-offset-4">{t("logIn")}</button>
            </>
          )}
        </div>

        <div className="mt-6 text-center">
          <Link href="/" className="text-xs text-white/70 underline underline-offset-4">{t("backToSite")}</Link>
        </div>
      </div>
    </div>
  );
}


