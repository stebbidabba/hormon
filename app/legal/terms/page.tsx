"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useLanguage } from "@/contexts/language-context";

export default function Page() {
  const { t, language } = useLanguage();
  return (
    <div className="min-h-dvh flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-4 py-16">
          <h1 className="text-3xl font-bold tracking-tight">{language === "is" ? "Skilmálar" : "Terms & Conditions"}</h1>
          {language === "is" ? (
            <div className="prose prose-sm max-w-none mt-6 text-neutral-800">
              <h2>1. Inngangur</h2>
              <p>
                Velkomin(n) á Motion Labs. Með því að nota vefsíðu okkar, vörur eða þjónustu samþykkir þú þessa skilmála. Vinsamlegast lestu þá vandlega áður en þú notar þjónustuna.
              </p>

              <h2>2. Þjónusta</h2>
              <p>
                Motion Labs býður upp á nákvæm hormónapróf og tengdar upplýsingar. Þjónustan er eingöngu ætluð til fræðslu og upplýsingagjafar og kemur ekki í stað læknisfræðilegrar greiningar, ráðgjafar eða meðferðar.
              </p>

              <h2>3. Hæfi</h2>
              <p>
                Með því að nota þjónustuna staðfestir þú að þú sért að minnsta kosti 18 ára og lögfær til að gera bindandi samninga.
              </p>

              <h2>4. Skyldur notanda</h2>
              <ul>
                <li>Veita réttar og nákvæmar upplýsingar við pöntun.</li>
                <li>Fylgja leiðbeiningum sem fylgja prófunarpökkum.</li>
                <li>Misnota ekki vefinn og reyna ekki óheimilan aðgang.</li>
              </ul>

              <h2>5. Verð og greiðslur</h2>
              <p>
                Verð er birt á vefnum og getur breyst án fyrirvara. Greiðsla þarf að berast áður en prófunarpakkar eru sendir.
              </p>

              <h2>6. Afhending og skil</h2>
              <p>
                Við stefnum að afhendingu innan áætlaðs tíma en getum ekki ábyrgst nákvæma dagsetningu. Vegna eðlis vörunnar er ekki hægt að skila prófunarpökkum eftir að þeir hafa verið opnaðir.
              </p>

              <h2>7. Takmörkun ábyrgðar</h2>
              <p>
                Motion Labs ber ekki ábyrgð á tjóni eða afleiðingum sem kunna að hljótast af notkun vara eða upplýsinga. Leitaðu alltaf ráða hjá hæfum heilbrigðisstarfsfólki áður en teknar eru heilsutengdar ákvarðanir.
              </p>

              <h2>8. Lögsaga</h2>
              <p>
                Þessir skilmálar lúta lögum Íslands (eða þinnar lögsögu). Öll ágreiningsmál skulu rekin fyrir dómstólum í viðkomandi lögsögu.
              </p>
            </div>
          ) : (
            <div className="prose prose-sm max-w-none mt-6 text-neutral-800">
              <h2>1. Introduction</h2>
              <p>
                Welcome to Motion Labs. By accessing or using our website, products, or services, you agree to these Terms & Conditions. Please read them carefully before using our platform.
              </p>

              <h2>2. Services</h2>
              <p>
                Motion Labs provides affordable hormone testing kits and related information. Our services are intended for informational and educational purposes only and are not a substitute for professional medical advice, diagnosis, or treatment.
              </p>

              <h2>3. Eligibility</h2>
              <p>
                By using our services, you confirm that you are at least 18 years old and legally capable of entering into binding contracts.
              </p>

              <h2>4. User Responsibilities</h2>
              <ul>
                <li>Provide accurate information when ordering a test.</li>
                <li>Follow instructions provided with test kits.</li>
                <li>Do not misuse our website or attempt unauthorized access.</li>
              </ul>

              <h2>5. Pricing & Payment</h2>
              <p>
                Prices are listed on our website and may change without notice. Payments must be completed before test kits are shipped.
              </p>

              <h2>6. Shipping & Returns</h2>
              <p>
                We aim to deliver within the estimated timeframe but cannot guarantee exact delivery dates. Due to the nature of our products, test kits are non-refundable once opened.
              </p>

              <h2>7. Limitation of Liability</h2>
              <p>
                Motion Labs is not liable for any damages or outcomes resulting from use of our products or information. Always consult a qualified healthcare professional before making health decisions.
              </p>

              <h2>8. Governing Law</h2>
              <p>
                These Terms are governed by the laws of Iceland (or your jurisdiction). Any disputes will be handled in the courts of that jurisdiction.
              </p>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}



