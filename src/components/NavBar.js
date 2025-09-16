export default function NavBar() {
  return (
    <header className="w-full py-4">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md flex items-center justify-center bg-gradient-to-br from-cyan-400 to-indigo-600 shadow-neon">
            <div className="text-black font-bold">TS</div>
          </div>
          <div>
            <div className="text-sm text-slate-300">The Trust Scan</div>
            <div className="text-xs text-slate-500">Building Trust Through Transparency</div>
          </div>
        </div>

        <nav className="flex items-center gap-8">
          <a href="/pricing" className="text-slate-300 hover:text-white">Pricing</a>
          <a href="/contact" className="text-slate-300 hover:text-white">Contact</a>
          <a href="/blog" className="text-slate-300 hover:text-white">Blog</a>
          <a href="/login" className="ml-4 px-4 py-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-semibold hover:brightness-105">
            Login
          </a>
        </nav>
      </div>
    </header>
  );
}
