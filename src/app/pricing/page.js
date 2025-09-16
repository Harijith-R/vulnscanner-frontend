export default function Pricing() {
  return (
    <div className="min-h-screen py-20">
      <div className="container">
        <h1 className="text-4xl font-extrabold neon mb-6">Pricing</h1>
        <p className="text-slate-300 mb-8">Flexible plans for individuals and teams.</p>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
          <div className="frost p-6 rounded-xl text-center">
            <h3 className="text-xl font-semibold">Free</h3>
            <p className="text-slate-400">1 anon scan / day — 5 with registration</p>
            <div className="mt-4 text-3xl font-bold">$0</div>
          </div>

          <div className="frost p-6 rounded-xl text-center">
            <h3 className="text-xl font-semibold">Basic</h3>
            <p className="text-slate-400">25 scans / day</p>
            <div className="mt-4 text-3xl font-bold">$5 / mo</div>
          </div>

          <div className="frost p-6 rounded-xl text-center">
            <h3 className="text-xl font-semibold">Pro</h3>
            <p className="text-slate-400">50 scans / day</p>
            <div className="mt-4 text-3xl font-bold">$8 / mo</div>
          </div>

          <div className="frost p-6 rounded-xl text-center md:col-span-3">
            <h3 className="text-xl font-semibold">Unlimited</h3>
            <p className="text-slate-400">Unlimited passive scans</p>
            <div className="mt-4 text-3xl font-bold">$16 / mo</div>
          </div>

          <div className="frost p-6 rounded-xl text-center md:col-span-3 bg-yellow-900/10">
            <h3 className="text-xl font-semibold">Advanced Scan (one-time)</h3>
            <p className="text-slate-400">Intrusive, verification & remediation steps</p>
            <div className="mt-4 text-3xl font-bold">$25 / URL</div>
          </div>
        </div>
      </div>
    </div>
  );
}
