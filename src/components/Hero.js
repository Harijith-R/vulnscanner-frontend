import AutoType from "./AutoType";

export default function Hero({ onScan }) {
  return (
    <section className="py-20">
      <div className="container text-center">
        <h1 className="text-5xl font-extrabold neon mb-4">
          The Trust Scan
        </h1>
        <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
          Building Trust Through Transparency — fast, minimal, and accurate website vulnerability scanning.
        </p>

        <div className="mb-6">
          <AutoType words={["Security", "Transparency", "Integrity", "Reliability"]} />
        </div>

        <div className="flex items-center justify-center gap-4">
          <input id="domain" placeholder="https://example.com" className="rounded-l-md p-3 w-96 bg-black/30 border border-slate-700 text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
          <button onClick={() => {
            const v = document.getElementById("domain").value;
            if (onScan) onScan(v);
          }} className="btn-neon px-5 py-3 rounded-r-md text-slate-100 font-semibold neon">
            Start Now, Free
          </button>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
          <div className="frost p-5 rounded-lg w-80 text-left shadow-md">
            <h3 className="text-lg font-semibold mb-2">Security Rating</h3>
            <div className="text-4xl font-bold text-cyan-300">A</div>
            <p className="text-slate-400 mt-2">Quick passive scan — rating shown here. Download a short PDF summary or upgrade for a detailed report.</p>
          </div>
          <div className="p-5 rounded-lg w-80 neon" style={{border: "1px solid rgba(0,230,255,0.12)"}}>
            <h3 className="text-lg font-semibold mb-2">Advanced Scan</h3>
            <p className="text-slate-300">Deep testing, exploit verification and remedial steps. One-off $25 per URL.</p>
            <button className="mt-4 px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-600 text-black rounded-md font-semibold">Get Advanced Scan</button>
          </div>
        </div>
      </div>
    </section>
  );
}
