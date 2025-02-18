
const Projects = () => {
  return (
    <section className="bg-dark text-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-mono font-bold mb-12 text-center">
          Focus Areas & <span className="text-neon-pink">Projects</span>
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
    title: "AI Infrastructure",
    description: "Building the foundational layers for AI-first businesses.",
  },
  {
    title: "Financial Technologies",
    description: "Reimagining financial systems for the AI era.",
  },
  {
    title: "Creator Economy",
    description: "Empowering creators with AI-powered tools and platforms.",
  },
  {
    title: "Data Analytics",
    description: "Turning data into actionable insights through AI-powered analytics.",
  },
];

export default Projects;
