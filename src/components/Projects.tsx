
import { useState } from "react";
import { ExternalLink, Github, Eye, Code } from "lucide-react";
import { TodoDemo } from "./demos/TodoDemo";
import { DesignDemo } from "./demos/DesignDemo";

export const Projects = () => {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"demo" | "code">("demo");

  const projects = [
    {
      id: "todo-app",
      title: "Todo Application",
      description: "A modern, responsive todo application with local storage and beautiful UI",
      category: "Software Development",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500",
      demo: TodoDemo,
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      code: `import { useState } from "react";
import { Plus, Check, Trash2 } from "lucide-react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export const TodoDemo = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Design new portfolio layout", completed: false },
    { id: 2, text: "Code responsive navigation", completed: true },
    { id: 3, text: "Test across different devices", completed: false }
  ]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, {
        id: Date.now(),
        text: newTodo,
        completed: false
      }]);
      setNewTodo("");
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="max-w-md mx-auto bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-xl">
      <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
        My Todo App
      </h3>
      
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && addTodo()}
          placeholder="Add a new task..."
          className="flex-1 px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={addTodo}
          className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors"
        >
          <Plus size={20} />
        </button>
      </div>

      <div className="space-y-2">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className={\`flex items-center gap-3 p-3 rounded-lg transition-all \${
              todo.completed
                ? "bg-green-50 border border-green-200"
                : "bg-white border border-slate-200"
            }\`}
          >
            <button
              onClick={() => toggleTodo(todo.id)}
              className={\`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors \${
                todo.completed
                  ? "bg-green-500 border-green-500 text-white"
                  : "border-slate-300 hover:border-blue-500"
              }\`}
            >
              {todo.completed && <Check size={12} />}
            </button>
            
            <span
              className={\`flex-1 transition-all \${
                todo.completed
                  ? "text-green-700 line-through"
                  : "text-slate-800"
              }\`}
            >
              {todo.text}
            </span>
            
            <button
              onClick={() => deleteTodo(todo.id)}
              className="text-red-500 hover:text-red-700 transition-colors"
            >
              <Trash2 size={16} />
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center text-sm text-slate-600">
        {todos.filter(todo => !todo.completed).length} of {todos.length} tasks remaining
      </div>
    </div>
  );
};`
    },
    {
      id: "task-manager",
      title: "Task Manager Pro",
      description: "Advanced task management system with categories, priorities, and deadlines",
      category: "Software Development", 
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500",
      demo: TodoDemo,
      technologies: ["React", "TypeScript", "Local Storage"],
      code: `// Enhanced version of the Todo App with additional features
import { useState, useEffect } from "react";
import { Plus, Check, Trash2, Calendar, Flag } from "lucide-react";

interface Task {
  id: number;
  text: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  category: string;
  dueDate?: string;
}

export const TaskManagerPro = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState<"all" | "pending" | "completed">("all");
  
  // Load tasks from localStorage
  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);
  
  // Save tasks to localStorage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, {
        id: Date.now(),
        text: newTask,
        completed: false,
        priority: 'medium',
        category: 'General'
      }]);
      setNewTask("");
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-lg">
      <h3 className="text-2xl font-bold text-slate-800 mb-6">Task Manager Pro</h3>
      {/* Enhanced task management interface */}
    </div>
  );
};`
    },
    {
      id: "brand-identity",
      title: "Brand Identity Design",
      description: "Complete brand identity package with logo, colors, and typography",
      category: "Graphic Design",
      image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=500",
      demo: DesignDemo,
      technologies: ["Adobe Illustrator", "Photoshop", "Figma"],
      code: `export const DesignDemo = () => {
  const designs = [
    {
      title: "Modern Logo Design",
      image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=400",
      description: "Clean, minimalist logo with modern typography"
    },
    {
      title: "Brand Color Palette", 
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400",
      description: "Carefully selected colors that represent brand values"
    },
    {
      title: "Event Poster",
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400", 
      description: "Eye-catching poster design for tech conference"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
        Design Portfolio Showcase
      </h3>
      
      <div className="grid md:grid-cols-3 gap-6">
        {designs.map((design, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="relative overflow-hidden">
              <img
                src={design.image}
                alt={design.title}
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium">View Details</p>
                </div>
              </div>
            </div>
            
            <div className="p-4">
              <h4 className="font-bold text-slate-800 mb-2">{design.title}</h4>
              <p className="text-sm text-slate-600">{design.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
        <h4 className="text-lg font-bold text-slate-800 mb-4">Design Process</h4>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold">
              1
            </div>
            <p className="text-sm font-medium text-slate-800">Research</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold">
              2
            </div>
            <p className="text-sm font-medium text-slate-800">Concept</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold">
              3
            </div>
            <p className="text-sm font-medium text-slate-800">Design</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold">
              4
            </div>
            <p className="text-sm font-medium text-slate-800">Refine</p>
          </div>
        </div>
      </div>
    </div>
  );
};`
    },
    {
      id: "poster-design",
      title: "Event Poster Series",
      description: "Creative poster designs for various events and campaigns",
      category: "Graphic Design",
      image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=500",
      demo: DesignDemo,
      technologies: ["Adobe Creative Suite", "Typography", "Print Design"],
      code: `// CSS styles for poster design components
.poster-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
}

.poster-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.poster-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.poster-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.poster-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.poster-content {
  padding: 1.5rem;
}

.poster-title {
  font-size: 1.25rem;
  font-weight: bold;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.poster-description {
  color: #718096;
  font-size: 0.875rem;
  line-height: 1.5;
}`
    }
  ];

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
                  <button className="flex items-center gap-2 border border-slate-300 hover:bg-slate-50 text-slate-700 px-4 py-2 rounded-lg transition-colors">
                    <Github size={16} />
                    Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Demo Modal */}
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
              
              {/* Tab Navigation */}
              <div className="flex border-b border-slate-200">
                <button
                  onClick={() => setActiveTab("demo")}
                  className={`px-6 py-3 font-medium transition-colors ${
                    activeTab === "demo"
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-slate-600 hover:text-slate-800"
                  }`}
                >
                  <Eye size={16} className="inline mr-2" />
                  Live Demo
                </button>
                <button
                  onClick={() => setActiveTab("code")}
                  className={`px-6 py-3 font-medium transition-colors ${
                    activeTab === "code"
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-slate-600 hover:text-slate-800"
                  }`}
                >
                  <Code size={16} className="inline mr-2" />
                  Source Code
                </button>
              </div>
              
              <div className="p-6">
                {activeTab === "demo" ? (
                  <>
                    {activeDemo === "todo-app" || activeDemo === "task-manager" ? (
                      <TodoDemo />
                    ) : (
                      <DesignDemo />
                    )}
                  </>
                ) : (
                  <div className="bg-slate-900 rounded-lg p-4 overflow-auto">
                    <pre className="text-green-400 text-sm whitespace-pre-wrap">
                      <code>{projects.find(p => p.id === activeDemo)?.code}</code>
                    </pre>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
