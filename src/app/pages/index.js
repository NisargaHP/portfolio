import Header from '../components/Header';
import SkillCard from '../components/SkillCard';
import ProjectCard from '../components/ProjectCard';

export default function Home() {
  const skills = {
    "Programming Languages": ["JavaScript", "TypeScript", "SQL", "ES6+"],
    "Front-End": ["React.js", "Next.js", "HTML5", "CSS3", "UI/UX"],
    "Back-End": ["Node.js", "Express", "PostgreSQL", "Redis", "Hasura GraphQL", "REST API", "Kafka"],
    "Developer Tools": ["Git", "Postman", "CI/CD", "VS Code"]
  };

  const projects = [
    {
      title: "Loads – Truck Brokerage App",
      description: "Developed responsive UIs with reusable components, implemented Kafka for real-time data",
      tech: ["Next.js", "React", "Kafka", "PostgreSQL"]
    },
    {
      title: "Yoga Pose Recognition",
      description: "Achieved 96% classification accuracy using CNN and LSTM",
      tech: ["Python", "OpenPose", "Deep Learning"]
    },
    {
      title: "Campus Recruitment System",
      description: "Web platform for campus hiring with REST API integrations",
      tech: ["React", "Node.js", "REST API"]
    }
  ];

  return (
    <div>
      <Header />
      
      {/* Hero Section */}
      <section id="home" className="text-center py-20 bg-gradient-to-r from-blue-50 to-indigo-100">
        <h1 className="text-4xl font-bold mb-4">NISARGA HP</h1>
        <p className="text-xl mb-6">Full Stack Engineer</p>
        <div className="flex justify-center gap-4">
          <a href="mailto:nisargahp184@gmail.com" className="bg-blue-600 text-white px-4 py-2 rounded">
            Email Me
          </a>
          <a href="/RESUME-Nisarga.pdf" download className="border border-blue-600 text-blue-600 px-4 py-2 rounded">
            Download Resume
          </a>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skills).map(([title, items]) => (
            <SkillCard key={title} title={title} items={items} />
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Experience</h2>
          <div className="max-w-3xl mx-auto">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-bold text-xl">FR8, Chennai</h3>
              <p className="text-gray-600">Executive - Full Stack Engineer | Tech: Next.js, React, Node.js, Kafka</p>
              <ul className="mt-4 list-disc pl-5 space-y-2">
                <li>Built responsive UIs with reusable components and custom hooks</li>
                <li>Implemented Kafka-based event processing for real-time updates</li>
                <li>Optimized PostgreSQL queries and created database triggers</li>
                <li>Developed payment automation using ERPNext and Kafka</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-10 text-center">Education</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-xl">Bachelor of Engineering in Computer Science</h3>
              <p>R.V College of Engineering, Bangalore | 2020-2023 | CGPA: 7.5</p>
            </div>
            <div>
              <h3 className="font-bold text-xl">Diploma in Computer Science</h3>
              <p>Sri Jayachamarajendra Polytechnic, Bangalore | 2017-2020 | 90%</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white text-center">
        <p>© 2023 Nisarga HP | nisargahp184@gmail.com</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="https://linkedin.com/in/nisarga-hp" target="_blank" rel="noopener">
            LinkedIn
          </a>
          <a href="tel:+917676480060">+91 7676480060</a>
        </div>
      </footer>
    </div>
  );
}