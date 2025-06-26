
import { useState } from "react";
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
            className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
              todo.completed
                ? "bg-green-50 border border-green-200"
                : "bg-white border border-slate-200"
            }`}
          >
            <button
              onClick={() => toggleTodo(todo.id)}
              className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                todo.completed
                  ? "bg-green-500 border-green-500 text-white"
                  : "border-slate-300 hover:border-blue-500"
              }`}
            >
              {todo.completed && <Check size={12} />}
            </button>
            
            <span
              className={`flex-1 transition-all ${
                todo.completed
                  ? "text-green-700 line-through"
                  : "text-slate-800"
              }`}
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
};
