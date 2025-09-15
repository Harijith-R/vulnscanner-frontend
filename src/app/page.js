export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-start bg-white text-gray-800">
      {/* Hero Section */}
      <section className="w-full max-w-3xl text-center px-6 py-20">
        <h1 className="text-4xl font-bold mb-4 text-blue-600">
          Vulnerability Scanner
        </h1>
        <p className="text-gray-600 mb-8">
          Enter your website URL below and get a quick security rating.
          Your first scan is free.
        </p>

        <form className="flex w-full max-w-md mx-auto space-x-2">
          <input
            type="url"
            placeholder="https://example.com"
            className="flex-1 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="px-4 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700"
          >
            Scan
          </button>
        </form>
      </section>

      {/* Security Rating Placeholder */}
      <section className="w-full max-w-2xl text-center px-6 py-12 border-t">
        <h2 className="text-2xl font-semibold mb-4">Security Rating</h2>
        <div className="text-6xl font-bold text-green-500 mb-2">A+</div>
        <p className="text-gray-500">Your site looks secure based on our passive scan.</p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Download Report (PDF)
        </button>
      </section>

      {/* Advanced Scan Promo */}
      <section className="w-full max-w-3xl px-6 py-16 border-t text-center">
        <h2 className="text-2xl font-semibold mb-4">Need a deeper scan?</h2>
        <p className="text-gray-600 mb-6">
          Our <span className="font-semibold">Advanced Scan</span> performs
          in-depth testing (intrusive) and provides a detailed PDF report with remediation steps.
        </p>
        <button className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700">
          Run Advanced Scan – $25 / URL
        </button>
      </section>

      {/* Pricing Section */}
      <section className="w-full max-w-5xl px-6 py-16 border-t">
        <h2 className="text-3xl font-bold text-center mb-10">Plans & Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Free Plan */}
          <div className="border rounded-xl p-6 text-center shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Free</h3>
            <p className="text-gray-500 mb-4">1 free scan (up to 5 with account)</p>
            <p className="text-3xl font-bold mb-6">$0</p>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Start Free
            </button>
          </div>

          {/* Basic Plan */}
          <div className="border rounded-xl p-6 text-center shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Basic</h3>
            <p className="text-gray-500 mb-4">25 scans / day</p>
            <p className="text-3xl font-bold mb-6">$5<span className="text-lg">/mo</span></p>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Choose Plan
            </button>
          </div>

          {/* Pro Plan */}
          <div className="border rounded-xl p-6 text-center shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Pro</h3>
            <p className="text-gray-500 mb-4">50 scans / day</p>
            <p className="text-3xl font-bold mb-6">$8<span className="text-lg">/mo</span></p>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Choose Plan
            </button>
          </div>

          {/* Unlimited Plan */}
          <div className="border rounded-xl p-6 text-center shadow-sm md:col-span-3">
            <h3 className="text-xl font-semibold mb-2">Unlimited</h3>
            <p className="text-gray-500 mb-4">Unlimited scans / day</p>
            <p className="text-3xl font-bold mb-6">$16<span className="text-lg">/mo</span></p>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Choose Plan
            </button>
          </div>
        </div>
      </section>

      <footer className="w-full text-center py-8 border-t text-gray-400 text-sm">
        ⚠️ Only scan websites you own or have explicit permission to test.
      </footer>
    </main>
  )
}
