"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "is";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navbar
    about: "About",
    process: "Process",
    shop: "Shop",
    contact: "Contact",
    logIn: "Log in",
    cart: "Cart",
    
    // Login page
    welcomeBack: "Welcome back",
    createAccount: "Create your account",
    logInToContinue: "Log in to continue",
    signUpToGetStarted: "Sign up to get started",
    continueWithGoogle: "Continue with Google",
    or: "or",
    email: "Email",
    password: "Password",
    signUp: "Sign up",
    newHere: "New here?",
    createAnAccount: "Create an account",
    alreadyHaveAccount: "Already have an account?",
    backToSite: "Back to site",
    
    // Home page
    knowYourT: "Know Your T — or Get the Full Picture",
    hormonesDrive: "Your hormones drive energy, strength, mood, sleep, and focus. Measure what matters — at home.",
    getMaleVitalityPack: "Get Male Vitality Pack — $120",
    getTestosteroneTest: "Get Free Testosterone Test — $50",
    trustCues: "At-home saliva • Research Use Only (RUO) • Clear results • Personal guidance and tips included",
    
    // Home page sections
    whyHormonesMatter: "Why hormones matter",
    whyHormonesIntro: "Hormone health is fundamental to how you feel, perform, and thrive every day. At MOTION Labs, we help you track your hormone levels across multiple tests, providing personalized guidance and insights tailored to your unique biology.",
    energyDrive: "Energy & Drive",
    energyDriveText: "Low free T and high cortisol can blunt motivation and training response.",
    strengthMuscle: "Strength & Muscle", 
    strengthMuscleText: "T supports muscle protein synthesis and recovery.",
    moodFocus: "Mood & Focus",
    moodFocusText: "Hormone balance affects confidence, clarity, and resilience.",
    stressSleep: "Stress & Sleep",
    stressSleepText: "Cortisol rhythm ties to sleep quality and daytime alertness.",
    
    // Why hormones matter cards
    energyTitle: "Energy",
    energyDescription: "Daily drive and workout readiness track with free T and cortisol balance.",
    muscleTitle: "Muscle", 
    muscleDescription: "Support protein synthesis, recovery, and adaptation.",
    focusTitle: "Focus",
    focusDescription: "Sharper decision-making and confidence when hormones are aligned.",
    sleepStressTitle: "Sleep & Stress",
    sleepStressDescription: "Cortisol rhythm ties directly to quality sleep and calm days.",
    hormoneShiftsTagline: "Small hormone shifts = Big performance changes",
    
    // Results in app section
    getResultsInAppTitle: "Get results in the app",
    getResultsInAppSubhead: "Track your hormones over time and get personalized advice and tips based on your trends.",
    freeTestosteroneTitle: "Free Testosterone",
    cortisolTitle: "Cortisol",
    dheaTitle: "DHEA",
    currentWithinRange: "Current: 72 pg/mL (within range)",
    currentCortisol: "Current: 9.7 ng/mL",
    currentDhea: "Current: 246 pg/mL",
    
    // Hormone crisis section
    hormoneCrisisTitle: "The hormone crisis is real",
    hormoneCrisisIntro: "Modern lifestyle, stress, and environmental factors are causing widespread hormone imbalances. The data is clear: we're facing a silent epidemic that's affecting energy, mood, and overall health.",
    decliningTestosterone: "Declining Free Testosterone",
    decliningTestosteroneText: "Average free testosterone levels are down roughly 30% compared to a generation ago — impacting energy, muscle mass, and vitality.",
    risingStress: "Rising Stress Hormones",
    risingStressText: "Chronic stress and cortisol dysregulation have risen by about 25% in recent years, disrupting sleep, mood, and recovery.",
    decliningDhea: "Declining DHEA",
    decliningDheaText: "Average DHEA levels have fallen by around 20% beyond age-related decline, reducing resilience and healthy aging.",
    takeControlTitle: "Take control of your hormone health",
    takeControlText: "Don't let declining hormone levels dictate your quality of life. With MOTION Labs, you can track, understand, and optimize your hormone balance with personalized insights and actionable guidance.",
    startTrackingNow: "Start Tracking Now",
    learnHowItWorks: "Learn How It Works",
    bodyComposition: "Body Composition",
    bodyCompositionText: "Hormones influence fat distribution and metabolic rate.",
    agingResilience: "Aging & Resilience",
    agingResilienceText: "DHEA trends with vitality over time.",
    
    whyTestNow: "Why test now?",
    actionableBaseline: "Actionable baseline – Know where you stand before changing training, diet, or supplements.",
    trackProgress: "Track progress – See if your plan is actually moving the needle.",
    morningSnapshot: "Morning snapshot – Simple, single morning collection for high compliance.",
    nonInvasive: "Non-invasive – No needles, no clinic wait.",
    private: "Private – Discreet, at-home collection with clear results.",
    fastSetup: "Fast setup – Order in minutes, collect in one morning.",
    
    // Guidance card
    guidanceBadge: "Personal Guidance",
    guidanceTitle: "You won’t be left guessing",
    guidanceBody: "After your results, we help you interpret what they mean and what to do next — with clear, personalized tips you can act on.",
    guidanceItem1Title: "Action plan",
    guidanceItem1Body: "Simple steps to improve sleep, stress, and training.",
    guidanceItem2Title: "Re-test timeline",
    guidanceItem2Body: "When to test again to see real progress.",
    
    accurateAtHome: "Accurate. At-home. Affordable.",
    accurateIntro: "Get high-quality, research-grade measurements at a fraction of typical private lab prices — with zero clinic overhead. Everything needed comes in the kit.",
    testosteroneTest: "Free Testosterone Test",
    maleVitalityPack: "Male Vitality Pack (Free T + Cortisol + DHEA)",
    normally150: "Normally $150 if purchased separately — Save $30.",
    clearInstructions: "Clear instructions. Single morning saliva sample. RUO for wellness/performance insights.",
    
    whatWeMeasure: "What we measure",
    scienceExplainer: "We measure free (bioavailable) testosterone in saliva using a research-grade ELISA. Results are in pg/mL and are not the same as a blood test's total testosterone (ng/dL). Free T reflects the fraction not bound to SHBG/albumin — the part that can act on tissues. Cortisol and DHEA are measured from the same at-home saliva format.",
    
    howItWorks: "How it works",
    step: "Step",
    getStartedToday: "Get Started Today",
    
    // Step 1
    step1Title: "Choose the test that fits your goals",
    step1Desc: "Whether it's testosterone, stress hormones, or full vitality panels, order directly from our website. Kits are shipped in discreet packaging to protect your privacy.",
    step1Trust: "100% Secure Payment",
    
    // Step 2
    step2Title: "Quick, simple, at home",
    step2Desc: "Follow the clear instructions to collect a small saliva sample. No needles, no clinics — just a painless swab in the comfort of your home.",
    step2Trust: "Takes less than 5 minutes",
    
    // Step 3
    step3Title: "Prepaid and hassle-free",
    step3Desc: "Place the sample in the prepaid return envelope included in your kit. Drop it off at any mailbox — no appointments needed.",
    step3Trust: "Tracked shipping included",
    
    // Step 4
    step4Title: "Accurate results, certified labs",
    step4Desc: "Your sample is analyzed using gold-standard ELISA testing at our certified European partner laboratories.",
    step4Trust: "ISO-certified labs",
    
    // Step 5
    step5Title: "Clear results, actionable insights",
    step5Desc: "Access your secure results online within days. Our reports are designed to be clear and easy to understand, so you can take control of your health.",
    step5Trust: "Private & confidential",
    
    // Step 6
    step6Title: "Your health, over time",
    step6Desc: "Re-test quarterly to see how your lifestyle changes affect your hormone balance. Build a complete picture of your long-term health.",
    step6Trust: "Track your progress in your account dashboard",
    
    measureWhatMatters: "Measure what matters — start today.",
    
    // Shop page
    shopTitle: "Shop",
    addToCart: "Add to Cart",
    buyNow: "Buy Now",
    // FAQ
    faq_title: "FAQ",
    faq_q1: "Free vs. total testosterone?",
    faq_a1:
      "We measure free (bioavailable) testosterone in saliva using a research-grade ELISA. Results are in pg/mL and are not the same as a blood test’s total testosterone (ng/dL). Free T reflects the fraction not bound to SHBG/albumin—the part that can act on tissues.",
    faq_q2: "Why morning collection?",
    faq_a2:
      "Testosterone follows a diurnal rhythm and is typically highest in the morning, improving consistency across individuals.",
    faq_q3: "Is this diagnostic?",
    faq_a3: "No — Research Use Only (RUO) for wellness/performance insights.",
    faq_q4: "How long are results?",
    faq_a4: "You’ll receive your report after we process your sample.",
    faq_q5: "What’s in the kit?",
    faq_a5: "A saliva collection device, instructions, and a prepaid return mailer.",
    
    // Contact page
    contactTitle: "Contact",
    name: "Name",
    message: "Message",
    send: "Send",
    pleaseCompleteForm: "Please complete the form",
    thanksWellBeInTouch: "Thanks — we'll be in touch.",

    // About page
    aboutTitle: "About MOTION Labs",
    aboutP1:
      "At MOTION Labs, our mission is simple: to make the world healthier by giving people the tools to understand their own biology. We believe that preventing disease starts with finding the cause — not just treating the symptoms. By creating accessible, affordable ways to measure and track hormones, we’re pushing for a future where health is proactive, not reactive. Our agenda is straightforward: do good work, empower individuals, and build systems that help people live stronger, longer, and better lives.",
    aboutP2:
      "What we do is bring cutting-edge lab methods out of clinics and into your hands. We specialize in at-home saliva testing for key hormones like testosterone, cortisol, and DHEA — the markers that drive energy, mood, recovery, and resilience. Our tests are non-invasive, affordable, and designed for clarity. We combine scientific rigor with simplicity so that anyone can get reliable data without medical jargon or unnecessary barriers.",
    aboutP3:
      "MOTION Labs is built on the belief that when you know what’s happening inside your body, you can take charge of your health. We’re here to make that knowledge simple, trustworthy, and actionable.",

    // Footer
    motionLabs: "MOTION Labs",
    atHomeSaliva: "At-home saliva testing for hormone insights. RUO.",
    ruoDisclaimer: "MOTION Labs provides Research Use Only (RUO) tests for wellness and performance insights. Not for diagnostic or medical decision-making.",
    ruo_label: "RUO",
    terms_label: "Terms",
    privacy_label: "Privacy",
  },
  is: {
    // Navbar
    about: "Um okkur",
    process: "Ferli",
    shop: "Verslun",
    contact: "Hafa samband",
    logIn: "Skrá inn",
    cart: "Karfa",
    
    // Login page
    welcomeBack: "Velkominn aftur",
    createAccount: "Búðu til aðgang",
    logInToContinue: "Skráðu þig inn til að halda áfram",
    signUpToGetStarted: "Skráðu þig til að byrja",
    continueWithGoogle: "Halda áfram með Google",
    or: "eða",
    email: "Netfang",
    password: "Lykilorð",
    signUp: "Skrá sig",
    newHere: "Nýr hér?",
    createAnAccount: "Búðu til aðgang",
    alreadyHaveAccount: "Áttu þegar aðgang?",
    backToSite: "Til baka á síðuna",
    
    // Home page
    knowYourT: "Mældu hormónagildin þín heima",
    hormonesDrive: "Hormónin þín stjórna orku, styrk, skapi, svefni og einbeitingu. Mældu það sem skiptir máli — heima.",
    getMaleVitalityPack: "Fáðu Male Vitality Pack — $120",
    getTestosteroneTest: "Fáðu Testosterone Test — $50",
    trustCues: "Heima munnvatn • Rannsóknarviðurkenning (RUO) • Skýrar niðurstöður • Persónuleg leiðsögn og ráð fylgja",
    
    // Home page sections
    whyHormonesMatter: "Hvers vegna skipta hormón máli",
    whyHormonesIntro: "Hormónaheilsa er grundvallaratriði fyrir hvernig þú líður, afkastar og þrífst á hverjum degi. Hjá MOTION Labs hjálpum við þér að fylgjast með hormónastigi þínu í gegnum margar prófanir, veita persónulega leiðsögn og innsýn sem er sérsniðin að einstökum líffræði þinni.",
    energyDrive: "Orka og drifkraftur",
    energyDriveText: "Lág frjáls T og há kortísól getur dregið úr hvöt og þjálfunarsvarinu.",
    strengthMuscle: "Styrkur og vöðvar",
    strengthMuscleText: "T styður vöðvapróteinmyndun og endurheimt.",
    moodFocus: "Skap og einbeiting",
    moodFocusText: "Hormónajafnvægi hefur áhrif á sjálfstraust, skýrleika og þol.",
    stressSleep: "Streita og svefn",
    stressSleepText: "Kortísólhríð tengist svefnkvaliteti og dagvöku.",
    
    // Why hormones matter cards
    energyTitle: "Orka",
    energyDescription: "Daglega drifkraftur og þjálfunarundirbúningur fylgist með frjálsum T og kortísóljafnvægi.",
    muscleTitle: "Vöðvar",
    muscleDescription: "Styður próteinmyndun, endurheimt og aðlögun.",
    focusTitle: "Einbeiting",
    focusDescription: "Skærri ákvarðanatöku og sjálfstraust þegar hormón eru í jafnvægi.",
    sleepStressTitle: "Svefn og streita",
    sleepStressDescription: "Kortísólhríð tengist beint svefnkvaliteti og rólegum dögum.",
    hormoneShiftsTagline: "Litlar hormónabreytingar = Stórar afkastabreytingar",
    
    // Results in app section
    getResultsInAppTitle: "Fáðu niðurstöður í forritinu",
    getResultsInAppSubhead: "Fylgstu með hormónum þínum með tímanum og fáðu persónulega ráð og ráðleggingar byggðar á þróunum þínum.",
    freeTestosteroneTitle: "Frjáls Testósterón",
    cortisolTitle: "Kortísól",
    dheaTitle: "DHEA",
    currentWithinRange: "Núverandi: 72 pg/mL (innan marka)",
    currentCortisol: "Núverandi: 9.7 ng/mL",
    currentDhea: "Núverandi: 246 pg/mL",
    
    // Hormone crisis section
    hormoneCrisisTitle: "Hormónakreppan er raunveruleg",
    hormoneCrisisIntro: "Nútímalífstíll, streita og umhverfisþættir eru að valda víðtækum hormónajafnvægisbreytingum. Gögnin eru skýr: við stöndum frammi fyrir þögulri faraldri sem hefur áhrif á orku, skap og heildarheilsu.",
    decliningTestosterone: "Minnandi frjáls testósterón",
    decliningTestosteroneText: "Meðaltal frjáls testósteróns er um það bil 30% lægra en hjá fyrri kynslóð — með áhrif á orku, vöðvamassa og lífsorku.",
    risingStress: "Hækkandi streituhormón",
    risingStressText: "Langtíma streita og kortísóljafnvægisbreytingar hafa aukist um ~25% á síðustu árum, sem truflar svefn, skap og endurheimt.",
    decliningDhea: "Minnandi DHEA",
    decliningDheaText: "Meðal DHEA stig hafa lækkað um ~20% umfram aldurstengda lækkun, sem dregur úr þoli og heilbrigðri öldrun.",
    takeControlTitle: "Taktu stjórn á hormónaheilsu þinni",
    takeControlText: "Ekki láta minnandi hormónastig ráða lífsgæðum þínum. Með MOTION Labs getur þú fylgst með, skilið og bætt hormónajafnvægið þitt með persónulegum innsýn og aðgerðarhæfum ráðleggingum.",
    startTrackingNow: "Byrjaðu að fylgjast með núna",
    learnHowItWorks: "Lærðu hvernig það virkar",
    bodyComposition: "Líkamsástand",
    bodyCompositionText: "Hormón hafa áhrif á fituúthlutun og efnaskipti.",
    agingResilience: "Elding og þol",
    agingResilienceText: "DHEA tengist lífsorku með tímanum.",
    
    whyTestNow: "Hvers vegna prófa núna?",
    actionableBaseline: "Aðgerðarhæf grunnlínu – Þekktu þitt ástand áður en þú breytir þjálfun, mataræði eða fæðubótum.",
    trackProgress: "Fylgstu með framvindu – Sjáðu hvort áætlunin þín sé að virka.",
    morningSnapshot: "Morgunmynd – Einföld, ein morgunuppsöfnun fyrir háa fylgni.",
    nonInvasive: "Óþrýstingur – Engar nálar, engin biðlisti á heilbrigðisstofnun.",
    private: "Einkamál – Dularfull, heima uppsöfnun með skýrum niðurstöðum.",
    fastSetup: "Fljótleg uppsetning – Pantaðu á mínútum, safnaðu einum morgni.",
    
    // Guidance card
    guidanceBadge: "Persónuleg leiðsögn",
    guidanceTitle: "Þú verður ekki skilinn eftir í óvissu",
    guidanceBody: "Eftir niðurstöður hjálpum við þér að skilja hvað þær þýða og hvað skal gera næst — með skýrum, persónulegum ráðum sem þú getur framkvæmt.",
    guidanceItem1Title: "Aðgerðaáætlun",
    guidanceItem1Body: "Einföld skref til að bæta svefn, streitu og þjálfun.",
    guidanceItem2Title: "Endurprófunartímalína",
    guidanceItem2Body: "Hvenær á að prófa aftur til að sjá raunverulega framvindu.",
    
    accurateAtHome: "Nákvæmt. Heima. Ódýrt.",
    accurateIntro: "Fáðu hágæða, rannsóknarstigsmælingar á broti af venjulegum einkalaboratoríuverði — með núll heilbrigðisstofnunarkostnaði. Allt sem þarf kemur í pakkann.",
    testosteroneTest: "Free Testosterone Test",
    maleVitalityPack: "Male Vitality Pack (Free T + Cortisol + DHEA)",
    normally150: "Venjulega $150 ef keypt sérstaklega — Sparaðu $30.",
    clearInstructions: "Skýrar leiðbeiningar. Ein morgunmunnvatnsúrtak. RUO fyrir heilsu/afkastagetu innsýn.",
    
    whatWeMeasure: "Hvað við mælum",
    scienceExplainer: "Við mælum frjáls (lífrænlega aðgengileg) testósterón í munnvatni með rannsóknarstigs ELISA. Niðurstöður eru í pg/mL og eru ekki það sama og blóðprófs heildar testósterón (ng/dL). Frjáls T endurspeglar þann hluta sem er ekki bundinn við SHBG/albúmín — þann hluta sem getur verkað á vefi. Kortísól og DHEA eru mæld úr sömu heima munnvatnsforminu.",
    
    howItWorks: "Hvernig það virkar",
    step: "Skref",
    getStartedToday: "Byrjaðu í dag",
    
    // Step 1
    step1Title: "Veldu prófið sem hentar markmiðum þínum",
    step1Desc: "Hvort sem það er testósterón, streituhormón, eða fullur lífsorkupakki, pantaðu beint af vefsíðunni okkar. Sett eru send með dularfullum umbúðum til að vernda friðhelgi þína.",
    step1Trust: "100% Örugg greiðsla",
    
    // Step 2
    step2Title: "Fljótlegt, einfalt, heima",
    step2Desc: "Fylgdu skýrum leiðbeiningum til að safna litlu munnvatnsúrtaki. Engar nálar, engar heilbrigðisstofnanir — bara sársaukalausur þurrka í þægindum heimilis þíns.",
    step2Trust: "Tekur innan við 5 mínútur",
    
    // Step 3
    step3Title: "Fyrirgreitt og án vandræða",
    step3Desc: "Settu úrtakið í fyrirgreitt skilapakka sem fylgir með settinu þínu. Settu það í hvaða póstkassa sem er — engar tímasetningar nauðsynlegar.",
    step3Trust: "Rakningarsending fylgir",
    
    // Step 4
    step4Title: "Nákvæmar niðurstöður, viðurkenndar rannsóknarstofur",
    step4Desc: "Úrtakið þitt er greint með gullstöðlu ELISA prófun í viðurkenndum evrópskum samstarfsaðilum okkar.",
    step4Trust: "ISO-viðurkenndar rannsóknarstofur",
    
    // Step 5
    step5Title: "Skýrar niðurstöður, aðgerðarhæfar innsýnir",
    step5Desc: "Fáðu aðgang að öruggum niðurstöðum á netinu innan daga. Skýrslurnar okkar eru hannaðar til að vera skýrar og auðskiljanlegar, svo þú getir tekið stjórn á heilsu þinni.",
    step5Trust: "Einkamál og trúnaður",
    
    // Step 6
    step6Title: "Heilsa þín, með tímanum",
    step6Desc: "Endurprófaðu ársfjórðungslega til að sjá hvernig lífstílsbreytingar þínar hafa áhrif á hormónajafnvægið þitt. Byggðu heildarmynd af langtíma heilsu þinni.",
    step6Trust: "Fylgstu með framvindu á reikningsstjórnborðinu þínu",
    
    measureWhatMatters: "Mældu það sem skiptir máli — byrjaðu í dag.",
    
    // Shop page
    shopTitle: "Verslun",
    addToCart: "Bæta í körfu",
    buyNow: "Kaupa núna",
    // FAQ
    faq_title: "Algengar spurningar",
    faq_q1: "Frjálst vs. heildar testósterón?",
    faq_a1:
      "Við mælum frjálst (líffræðilega aðgengilegt) testósterón í munnvatni með rannsóknarstigs ELISA. Niðurstöður eru í pg/mL og eru ekki það sama og blóðprófs heildar testósterón (ng/dL). Frjáls T endurspeglar hluta sem er ekki bundinn við SHBG/albúmín — hlutann sem getur virkað á vefi.",
    faq_q2: "Af hverju morgunsöfnun?",
    faq_a2:
      "Testósterón fylgir dægursveiflu og er yfirleitt hæst á morgnana sem bætir samræmi milli einstaklinga.",
    faq_q3: "Er þetta greiningarpróf?",
    faq_a3: "Nei — Research Use Only (RUO) fyrir heilsu/afkastagetu innsýn.",
    faq_q4: "Hversu lengi eru niðurstöður?",
    faq_a4: "Þú færð skýrslu eftir að við höfum unnið sýnið.",
    faq_q5: "Hvað er í pakkanum?",
    faq_a5: "Munnvatnssöfnunartæki, leiðbeiningar og fyrirgreiddur skilapakki.",
    
    // Contact page
    contactTitle: "Hafa samband",
    name: "Nafn",
    message: "Skilaboð",
    send: "Senda",
    pleaseCompleteForm: "Vinsamlegast fylltu út formið",
    thanksWellBeInTouch: "Takk — við verðum í sambandi.",

    // About page
    aboutTitle: "Um MOTION Labs",
    aboutP1:
      "Hjá MOTION Labs er markmiðið einfalt: að gera heiminn heilbrigðari með því að gefa fólki tæki til að skilja eigin líffræði. Við trúum því að forvörn sjúkdóma byrji á því að finna orsakir — ekki aðeins meðhöndla einkenni. Með því að skapa aðgengilegar, nákvæmar leiðir til að mæla og fylgjast með hormónum vinnum við að framtíð þar sem heilsa er fyrirbyggjandi, ekki viðbragðsmiðuð. Áherslur okkar eru skýrar: vinna gott starf, efla einstaklinga og byggja kerfi sem hjálpa fólki að lifa sterkara, lengur og betur.",
    aboutP2:
      "Við færum háþróaðar rannsóknaraðferðir út úr heilsugæslu og í þínar hendur. Við sérhæfum okkur í heima-munnvatnsprófum fyrir lykilhormón eins og testósterón, kortísól og DHEA — mælikvarða sem hafa áhrif á orku, skap, endurheimt og þol. Prófin okkar eru án inngrips, nákvæm og hönnuð til skýrleika. Við sameinum vísindalegan agaðan grunn og einfaldleika svo hver sem er geti fengið áreiðanleg gögn án óþarfs fræðimáls eða hindrana.",
    aboutP3:
      "MOTION Labs byggir á þeirri trú að þegar þú veist hvað er að gerast innra með þér geturðu tekið stjórn á heilsu þinni. Við erum hér til að gera þá þekkingu einfalda, trausta og framkvæmanlega.",

    // Footer
    motionLabs: "MOTION Labs",
    atHomeSaliva: "Heima munnvatn próf fyrir hormón innsýn. RUO.",
    ruoDisclaimer: "MOTION Labs veitir Research Use Only (RUO) próf fyrir heilsu og afkastagetu innsýn. Ekki fyrir greiningu eða læknisfræðilega ákvarðanatöku.",
    ruo_label: "RUO",
    terms_label: "Skilmálar",
    privacy_label: "Persónuvernd",
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("is");

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
