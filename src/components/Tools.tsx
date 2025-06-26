
import { Code, Terminal, Palette, Layers, Figma, Chrome } from "lucide-react";

export const Tools = () => {
  const toolCategories = [
    {
      title: "Development Tools",
      icon: Code,
      tools: [
        { name: "VS Code", description: "Primary code editor", level: 95 },
        { name: "Linux CLI", description: "Command line interface", level: 90 },
        { name: "Git", description: "Version control", level: 88 },
        { name: "React", description: "Frontend framework", level: 92 }
      ]
    },
    {
      title: "Design Tools", 
      icon: Palette,
      tools: [
        { name: "Adobe Photoshop", description: "Photo editing & manipulation", level: 90 },
        { name: "Adobe Illustrator", description: "Vector graphics", level: 88 },
        { name: "Figma", description: "UI/UX design", level: 85 },
        { name: "Adobe InDesign", description: "Layout design", level: 80 }
      ]
    },
    {
      title: "Other Tools",
      icon: Layers, 
      tools: [
        { name: "Notion", description: "Project management", level: 85 },
        { name: "Slack", description: "Team communication", level: 80 },
        { name: "Chrome DevTools", description: "Web debugging", level: 90 },
        { name: "npm/yarn", description: "Package management", level: 88 }
      ]
    }
  ];

  return (
    <section id="tools" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Tools & Technologies
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            The technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {toolCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <category.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">{category.title}</h3>
              </div>

              <div className="space-y-6">
                {category.tools.map((tool, toolIndex) => (
                  <div key={toolIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-semibold text-slate-800">{tool.name}</h4>
                        <p className="text-sm text-slate-600">{tool.description}</p>
                      </div>
                      <span className="text-sm font-medium text-blue-600">{tool.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{width: `${tool.level}%`}}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Always Learning</h3>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Technology evolves rapidly, and I'm committed to staying current with the latest 
            tools and best practices in both design and development.
          </p>
        </div>
      </div>
    </section>
  );
};
