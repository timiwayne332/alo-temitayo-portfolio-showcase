import { useState } from "react";
import { ExternalLink, Github, Eye } from "lucide-react";
import { TodoDemo } from "./demos/TodoDemo";
import { DesignDemo } from "./demos/DesignDemo";
import { SchoolDemo } from "./demos/SchoolDemo";

export const Projects = () => {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);

  const projects = [
    {
      id: "todo-app",
      title: "Todo Application",
      description: "A modern, responsive todo application with local storage and beautiful UI",
      category: "Software Development",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500",
      demo: TodoDemo,
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      githubUrl: "https://github.com/alotemitayo/todo-app"
    },
    {
      id: "school-management",
      title: "School Management System",
      description: "Comprehensive school management system for students, courses, and academic records",
      category: "Software Development", 
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500",
      demo: SchoolDemo,
      technologies: ["React", "TypeScript", "Tailwind CSS", "State Management"],
      githubUrl: "https://github.com/alotemitayo/school-management-system"
    },
    {
      id: "brand-identity",
      title: "Brand Identity Design",
      description: "Complete brand identity package with logo, colors, and typography",
      category: "Graphic Design",
      image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=500",
      demo: DesignDemo,
      technologies: ["Adobe Illustrator", "Photoshop", "Figma"],
      githubUrl: "https://github.com/alotemitayo/brand-identity-designs"
    },
    {
      id: "poster-design",
      title: "Event Poster Series",
      description: "Creative poster designs for various events and campaigns",
      category: "Graphic Design",
      image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=500",
      demo: DesignDemo,
      technologies: ["Adobe Creative Suite", "Typography", "Print Design"],
      githubUrl: "https://github.com/alotemitayo/poster-designs"
    }
  ];

  const handleGitHubClick = (githubUrl: string) => {
    window.open(githubUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="projects" className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            My Projects
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A showcase of my work spanning software development and graphic design
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <button
                    onClick={() => setActiveDemo(project.id)}
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    <Eye size={16} />
                    Live Demo
                  </button>
                  <button 
                    onClick={() => handleGitHubClick(project.githubUrl)}
                    className="flex items-center gap-2 border border-slate-300 hover:bg-slate-50 text-slate-700 px-4 py-2 rounded-lg transition-colors"
                  >
                    <Github size={16} />
                    Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {activeDemo && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl max-w-6xl w-full max-h-[90vh] overflow-auto">
              <div className="p-6 border-b border-slate-200 flex justify-between items-center">
                <h3 className="text-xl font-bold text-slate-800">
                  {projects.find(p => p.id === activeDemo)?.title} - Live Demo
                </h3>
                <button
                  onClick={() => setActiveDemo(null)}
                  className="text-slate-500 hover:text-slate-700 text-2xl"
                >
                  ×
                </button>
              </div>
              
              <div className="p-6">
                {activeDemo === "todo-app" ? (
                  <TodoDemo />
                ) : activeDemo === "school-management" ? (
                  <SchoolDemo />
                ) : (
                  <DesignDemo />
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
