
const Projects = () => {
  return (
    <section className="bg-dark text-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-mono font-bold mb-12 text-center">
          Projects & <span className="text-neon-pink">Focus Areas</span>
        </h2>
        
        <div className="grid gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-white/5 backdrop-blur-lg border border-white/10 hover:border-neon-green/50 transition-all"
            >
              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Reinventing Proven Models",
    description: "Applying AI to time-tested business models for instant dominance, similar to Rocket Internet—but faster.",
  },
  {
    title: "Underserved Niches",
    description: "We go where innovation lags: creator platforms, adult content, gambling, and overlooked fintech. Demand is there—execution isn't.",
  },
  {
    title: "Crypto & Sovereignty",
    description: "We build for the sovereign individual—tools for self-sovereign finance, privacy, and identity.",
  },
  {
    title: "Demographic Shifts",
    description: "Tapping into high-growth but neglected markets—single middle-aged women, faith-based communities, the elderly.",
  },
];

export default Projects;
