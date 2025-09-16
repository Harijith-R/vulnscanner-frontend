const TCard = ({ quote, author }) => (
  <div className="p-5 w-72 rounded-xl frosted frosted-anim frost floaty border border-slate-700/50">
    <div className="text-slate-200 italic mb-3">“{quote}”</div>
    <div className="text-sm text-slate-400">— {author}</div>
  </div>
);

export default function Testimonials() {
  return (
    <section className="py-12">
      <div className="container text-center">
        <h3 className="text-2xl font-bold mb-6 neon">What users say</h3>
        <div className="flex gap-6 justify-center flex-wrap">
          <TCard quote="Found issues before they hit prod — saved us weeks of work." author="CTO, FinTech" />
          <TCard quote="Fast and easy; the reports were clear and actionable." author="Security Lead" />
          <TCard quote="Great for initial triage — then we escalated to advanced scans." author="DevOps Manager" />
        </div>
      </div>
    </section>
  );
}
