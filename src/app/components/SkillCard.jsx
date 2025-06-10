export default function SkillCard({ title, items }) {
    return (
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <ul className="grid grid-cols-2 gap-2">
          {items.map((skill) => (
            <li key={skill} className="flex items-center">
              <span className="bg-blue-500 w-2 h-2 rounded-full mr-2"></span>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    );
  }