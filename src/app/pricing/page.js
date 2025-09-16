export default function Pricing() {
  return (
    <div className="min-h-screen flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold mb-6">Pricing Plans</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="border p-6 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-semibold mb-2">Free</h2>
          <p>1 free scan, or 5 free scans with account.</p>
        </div>
        <div className="border p-6 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-semibold mb-2">$5/month</h2>
          <p>25 scans per day.</p>
        </div>
        <div className="border p-6 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-semibold mb-2">$8/month</h2>
          <p>50 scans per day.</p>
        </div>
        <div className="border p-6 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-semibold mb-2">$16/month</h2>
          <p>Unlimited scans.</p>
        </div>
        <div className="border p-6 rounded-lg shadow-md text-center bg-yellow-50">
          <h2 className="text-2xl font-semibold mb-2">$25 per URL</h2>
          <p>Advanced scan with detailed vulnerability analysis.</p>
        </div>
      </div>
    </div>
  );
}
