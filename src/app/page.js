import NavBar from "../components/NavBar";
import ParticleCanvas from "../components/ParticleCanvas";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

export default function Home() {
  function onScan(domain) {
    // Hook this to your backend scan call.
    if (!domain) return alert("Please enter a domain to scan.");
    alert(`Triggering free passive scan for: ${domain}\n\n(This is the UI – wire backend / API call to /api/scan/free)`);
  }

  return (
    <>
      <div className="grid-overlay" />
      <ParticleCanvas />
      <NavBar />

      <main className="relative z-10">
        <Hero onScan={onScan} />
        <Features />
        <Testimonials />
        <Contact />
      </main>

      <footer className="py-10 text-center text-slate-500">
        © {new Date().getFullYear()} The Trust Scan — Only scan targets you own or have permission to test.
      </footer>
    </>
  );
}
