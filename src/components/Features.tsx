
const Features = () => {
  return (
    <section className="bg-dark text-white py-20 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="p-6 rounded-lg bg-white/5 backdrop-blur-lg border border-white/10 hover:border-neon-green/50 transition-all">
            <h3 className="text-xl font-mono font-bold mb-6 text-neon-green">{feature.title}</h3>
            <ul className="space-y-4">
              {feature.points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-neon-pink font-mono">→</span>
                  <span className="text-gray-400">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

const features = [
  {
    title: "Extreme Velocity",
    points: [
      "AI-powered idea validation in days, not months",
      "Automated execution pipelines",
      "Rapid go-to-market strategy",
    ],
  },
  {
    title: "Liquidity Focused",
    points: [
      "Optimized for fast exits",
      "Secondary market strategies",
      "Multiple monetization paths",
    ],
  },
  {
    title: "Data Flywheel",
    points: [
      "Self-reinforcing data loops",
      "Predictive market analytics",
      "Continuous optimization",
    ],
  },
];

export default Features;
