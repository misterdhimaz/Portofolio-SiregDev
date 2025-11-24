import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TeamMarquee from "@/components/TeamMarquee"; // <-- Kita pakai yang baru
import Services from "@/components/Services";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white selection:bg-blue-500/50">
      <Navbar />
      <Hero />
      <TeamMarquee />
      <Services />
      <Footer />
    </main>
  );
}