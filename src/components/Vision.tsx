
const Vision = () => {
  return (
    <section className="bg-dark text-white py-20 px-4">
      <div className="max-w-4xl mx-auto space-y-12">
        {visionStatements.map((statement, index) => (
          <div 
            key={index}
            className="text-3xl md:text-5xl font-bold text-center leading-tight"
          >
            <span className="text-gradient-primary">{statement}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

const visionStatements = [
  "A new world of investing",
  "A new mode of execution",
  "A new era of returns",
];

export default Vision;
