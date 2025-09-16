export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 shadow-md bg-white">
        {/* Left: Logo */}
        <div className="text-xl font-bold">SecurityScanner</div>

        {/* Center: Menu */}
        <div className="space-x-6">
          <a href="/pricing" className="hover:text-blue-600">Pricing</a>
          <a href="/contact" className="hover:text-blue-600">Contact Us</a>
          <a href="/blog" className="hover:text-blue-600">Blog</a>
        </div>

        {/* Right: Login */}
        <div>
          <a href="/login" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Login
          </a>
        </div>
      </nav>

      {/* Main Section */}
      <main className="flex-grow flex flex-col justify-center items-center text-center p-6">
        {/* Domain Scanner */}
        <h1 className="text-4xl font-bold mb-6">Free Website Security Scan</h1>
        <input
          type="text"
          placeholder="Enter your domain (example.com)"
          className="border p-3 w-80 rounded-lg mb-4"
        />
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
          Start Free Scan
        </button>

        {/* Security Rating Placeholder */}
        <div className="mt-8 p-6 border rounded-lg shadow-md bg-gray-50 w-96">
          <h2 className="text-xl font-semibold mb-2">Security Rating</h2>
          <p className="text-gray-600">Your scan results will appear here...</p>
        </div>

        {/* Advanced Scan Promo */}
        <div className="mt-10 p-6 border rounded-lg shadow-lg bg-yellow-50 w-96">
          <h2 className="text-xl font-bold mb-2 text-yellow-700">Upgrade to Advanced Scan 🚀</h2>
          <p className="text-gray-700">
            Get deep vulnerability analysis for just <strong>$25 per URL</strong>.
          </p>
          <button className="mt-4 bg-yellow-600 text-white px-6 py-2 rounded-lg hover:bg-yellow-700">
            Try Advanced Scan
          </button>
        </div>
      </main>
    </div>
  );
}
