// components/ProjectsSection.tsx

export default function ProjectsSection() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[#00B487] mb-6">Selected Work</h2>
      <p className="text-white/80 mb-12 text-lg">
        A glimpse into some of the websites I&apos;ve crafted — each built with care, purpose,
        and a touch of obsession.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Placeholder cards, replace with actual portfolio items */}
        <div className="bg-white/10 p-6 rounded-xl">
          <h3 className="text-xl font-semibold text-white mb-2">Project One</h3>
          <p className="text-white/70 text-sm">Brief description of this project goes here.</p>
        </div>

        <div className="bg-white/10 p-6 rounded-xl">
          <h3 className="text-xl font-semibold text-white mb-2">Project Two</h3>
          <p className="text-white/70 text-sm">Another cool project I’m proud of.</p>
        </div>

        <div className="bg-white/10 p-6 rounded-xl">
          <h3 className="text-xl font-semibold text-white mb-2">Project Three</h3>
          <p className="text-white/70 text-sm">Short summary of what makes this special.</p>
        </div>
      </div>
    </section>
  );
}
