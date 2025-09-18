"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useLanguage } from "@/contexts/language-context";

export default function Page() {
  const { language } = useLanguage();
  return (
    <div className="min-h-dvh flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-4 py-16">
          <h1 className="text-3xl font-bold tracking-tight">{language === "is" ? "Persónuvernd" : "Privacy Policy"}</h1>
          {language === "is" ? (
            <div className="prose prose-sm max-w-none mt-6 text-neutral-800">
              <h2>1. Inngangur</h2>
              <p>
                Motion Labs virðir friðhelgi þína og er skuldbundið til að vernda persónuupplýsingar þínar. Þessi persónuverndarstefna útskýrir hvernig við söfnum, notum og verndum upplýsingarnar þínar.
              </p>
              <h2>2. Hvaða upplýsingar söfnum við</h2>
              <ul>
                <li>Persónuupplýsingar sem þú gefur (nafn, netfang, heimilisfang, greiðsluupplýsingar).</li>
                <li>Heilsutengdar upplýsingar sem þú gefur við notkun þjónustu (t.d. munnvatnssýni).</li>
                <li>Tæknilegar upplýsingar (vafrakökur, greiningargögn).</li>
              </ul>
              <h2>3. Hvernig notum við upplýsingarnar</h2>
              <ul>
                <li>Til að afgreiða pantanir og skila niðurstöðum.</li>
                <li>Til að bæta þjónustu og vef.</li>
                <li>Til samskipta (pöntunaruppfærslur, þjónusta, fréttabréf).</li>
              </ul>
              <h2>4. Deiling gagna</h2>
              <p>Við seljum ekki gögnin þín. Við getum deilt gögnum með:</p>
              <ul>
                <li>Vottaðri rannsóknarstofu til að vinna sýni.</li>
                <li>Þjónustuaðilum (greiðslumiðlun, sendingar).</li>
                <li>Yfirvöldum ef krafist er samkvæmt lögum.</li>
              </ul>
              <h2>5. Öryggi gagna</h2>
              <p>
                Við beitum öryggisráðstöfunum til að vernda persónu- og heilsugögn. Engin kerfi eru þó 100% örugg og við getum ekki ábyrgst algjört öryggi.
              </p>
              <h2>6. Geymsla gagna</h2>
              <p>
                Við geymum gögn aðeins eins lengi og nauðsyn krefur samkvæmt ofangreindum tilgangi eða lögum.
              </p>
              <h2>7. Réttindi þín</h2>
              <ul>
                <li>Aðgangur að eigin gögnum.</li>
                <li>Rétting eða eyðing gagna.</li>
                <li>Afturköllun samþykkis fyrir vinnslu gagna.</li>
              </ul>
              <h2>8. Hafðu samband</h2>
              <p>Fyrir fyrirspurnir: motionlab@motion.com</p>
            </div>
          ) : (
            <div className="prose prose-sm max-w-none mt-6 text-neutral-800">
              <h2>1. Introduction</h2>
              <p>
                Motion Labs respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information.
              </p>
              <h2>2. Information We Collect</h2>
              <ul>
                <li>Personal information you provide (name, email, address, payment details).</li>
                <li>Health-related information you provide when using our services (e.g., saliva samples).</li>
                <li>Technical information (cookies, analytics data).</li>
              </ul>
              <h2>3. How We Use Your Information</h2>
              <ul>
                <li>To process your orders and deliver test results.</li>
                <li>To improve our services and website.</li>
                <li>To communicate with you (order updates, customer support, newsletters).</li>
              </ul>
              <h2>4. Data Sharing</h2>
              <p>We do not sell your data. We may share data with:</p>
              <ul>
                <li>Accredited laboratories to process test samples.</li>
                <li>Service providers (payment processors, shipping partners).</li>
                <li>Legal authorities if required by law.</li>
              </ul>
              <h2>5. Data Security</h2>
              <p>
                We implement security measures to protect your personal and health data. However, no system is 100% secure, and we cannot guarantee absolute protection.
              </p>
              <h2>6. Data Retention</h2>
              <p>
                We keep your data only as long as necessary for the purposes outlined above or as required by law.
              </p>
              <h2>7. Your Rights</h2>
              <ul>
                <li>Access your personal data.</li>
                <li>Request correction or deletion.</li>
                <li>Withdraw consent to data processing.</li>
              </ul>
              <h2>8. Contact Us</h2>
              <p>For privacy-related questions, contact us at: motionlab@motion.com</p>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}



