export default function Contact() {
  return (
    <section className="py-12">
      <div className="container text-center">
        <h3 className="text-2xl font-bold neon mb-4">Stay in the loop</h3>
        <p className="text-slate-400 mb-6">Get updates, early access and discounts — no spam.</p>

        <div className="flex justify-center gap-2">
          <input id="email" placeholder="you@company.com" className="p-3 w-80 rounded-l-md bg-black/30 border border-slate-700 text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
          <button onClick={() => {
            const v = document.getElementById("email").value;
            alert(v ? `Thanks — ${v} added!` : "Please enter an email");
          }} className="px-4 py-3 bg-gradient-to-r from-cyan-400 to-blue-600 text-black font-bold rounded-r-md">Sign up</button>
        </div>

        <div className="mt-6 flex justify-center gap-4 text-cyan-300">
          <a aria-label="twitter" href="#" className="hover:brightness-125">🐦</a>
          <a aria-label="github" href="#" className="hover:brightness-125"></a>
          <a aria-label="linkedin" href="#" className="hover:brightness-125">in</a>
        </div>
      </div>
    </section>
  );
}
