// components/ServicesSection.tsx

export default function ServicesSection() {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[#00B487] mb-6">What I Do</h2>
      <p className="text-white/80 text-lg mb-12">
        From concept to code, I help ideas grow into beautiful, fast, and fully functional websites.
        Here’s how I can support your vision:
      </p>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="bg-white/10 p-6 rounded-xl">
          <h3 className="text-xl font-semibold text-white mb-2">Frontend Engineering</h3>
          <p className="text-white/70 text-sm">React, Next.js, performance-first, pixel-perfect builds.</p>
        </div>

        <div className="bg-white/10 p-6 rounded-xl">
          <h3 className="text-xl font-semibold text-white mb-2">Design Integration</h3>
          <p className="text-white/70 text-sm">I breathe life into Figma/Sketch designs — no drop shadows harmed.</p>
        </div>

        <div className="bg-white/10 p-6 rounded-xl">
          <h3 className="text-xl font-semibold text-white mb-2">Creative Direction</h3>
          <p className="text-white/70 text-sm">Not just code — storytelling, voice, and vibe all matter too.</p>
        </div>
      </div>
    </section>
  );
}
