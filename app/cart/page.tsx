import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Page() {
  return (
    <div className="min-h-dvh flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-4 py-16">
          <h1 className="text-3xl font-bold tracking-tight">Your Cart</h1>
          <p className="mt-4 text-neutral-700">This is a demo cart. Add items from the Shop and proceed to checkout from product pages.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}



