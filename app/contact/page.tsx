"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/language-context";

export default function Page() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { t } = useLanguage();

  const handleSubmit = () => {
    if (!name || !/.+@.+\..+/.test(email) || !message) return toast.error(t("pleaseCompleteForm"));
    toast.success(t("thanksWellBeInTouch"));
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-dvh flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="mx-auto max-w-2xl px-4 py-16">
          <h1 className="text-3xl font-bold tracking-tight">{t("contactTitle")}</h1>
          <div className="mt-8 grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">{t("name")}</Label>
              <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">{t("email")}</Label>
              <Input id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message">{t("message")}</Label>
              <textarea id="message" className="min-h-32 rounded-md border p-3" value={message} onChange={(e) => setMessage(e.target.value)} />
            </div>
            <button onClick={handleSubmit} className="mt-2 rounded-md bg-brand text-white px-4 py-2 w-fit">{t("send")}</button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}


