export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 shadow-md bg-white">
        {/* Left: Logo */}
        <div className="text-xl font-bold">MySite</div>

        {/* Center: Menu Links */}
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
      <main className="flex-grow flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to MySite 🚀</h1>
        <p className="text-lg text-gray-600">A minimalist Next.js app with multiple pages.</p>
      </main>
    </div>
  );
}
