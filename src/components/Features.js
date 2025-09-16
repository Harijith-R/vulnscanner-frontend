const Feature = ({ title, desc, icon }) => (
  <div className="p-6 rounded-xl frost hover:scale-[1.01] transition-transform">
    <div className="w-12 h-12 rounded-md flex items-center justify-center bg-black/30 mb-3 neon">{icon}</div>
    <h4 className="font-semibold mb-2">{title}</h4>
    <p className="text-slate-400 text-sm">{desc}</p>
  </div>
);

export default function Features() {
  return (
    <section className="py-12">
      <div className="container">
        <h2 className="text-2xl font-bold mb-6 neon">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Feature icon="🔍" title="Core Vulnerability Assessment" desc="Non-intrusive passive scanning to find misconfigurations and missing headers." />
          <Feature icon="⚙️" title="Enterprise-Grade Scanning" desc="Queued, concurrent scans with throttling and safeguards for paid users." />
          <Feature icon="🔐" title="Secure Report Delivery" desc="PDF reports with remediation steps and secure download links." />
          <Feature icon="☁️" title="Hosted & Scalable" desc="Run scanner containers on isolated VPS or cloud for stability." />
        </div>
      </div>
    </section>
  );
}
