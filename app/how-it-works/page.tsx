import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import HowItWorks from "@/components/how-it-works";

export default function Page() {
  return (
    <div className="min-h-dvh flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
}



