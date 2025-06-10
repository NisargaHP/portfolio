export default function ProjectCard({ title, description, tech }) {
    return (
      <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <p className="text-gray-700 mb-3">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <span 
              key={t} 
              className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    );
  }