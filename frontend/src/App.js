import { useEffect, useState } from "react";
import axios from "axios";
import { CheckCircle, Trash2 } from "lucide-react";

const API = "http://localhost:5000/api/tasks";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);

  // Load tasks from backend
  const fetchTasks = async () => {
    try {
      const res = await axios.get(API);
      setTasks(res.data);
    } catch (err) {
      console.error("Fetch tasks error:", err);
      alert("Could not fetch tasks. Is backend running on port 5000?");
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Add task
  const addTask = async () => {
    if (!title.trim()) return;

    setLoading(true);
    try {
      const res = await axios.post(API, { title: title.trim() });
      setTasks((prev) => [res.data, ...prev]);
      setTitle("");
    } catch (err) {
      console.error("Add task error:", err);
      alert("Add failed. Check backend POST /api/tasks");
    } finally {
      setLoading(false);
    }
  };

  // Toggle completed
  const toggleDone = async (id) => {
    try {
      const res = await axios.patch(`${API}/${id}`);
      setTasks((prev) => prev.map((t) => (t._id === id ? res.data : t)));
    } catch (err) {
      console.error("Toggle error:", err);
      alert("Toggle failed. Check PATCH /api/tasks/:id");
    }
  };

  // Delete task
  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      setTasks((prev) => prev.filter((t) => t._id !== id));
    } catch (err) {
      console.error("Delete error:", err);
      alert("Delete failed. Check DELETE /api/tasks/:id");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-200 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-6">
        <h1 className="text-3xl font-bold text-center text-indigo-700 mb-6">
          📝 Task Manager
        </h1>

        {/* Input + Add button (NOT a form) */}
        <div className="flex mb-5">
          <input
            className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Enter a task..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") addTask();
            }}
          />

          <button
            type="button"
            onClick={addTask}
            disabled={loading}
            className="bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 text-white px-5 rounded-r-lg transition"
          >
            {loading ? "Adding..." : "Add"}
          </button>
        </div>

        {/* Tasks */}
        <ul className="space-y-3">
          {tasks.map((task) => (
            <li
              key={task._id}
              className="flex items-center justify-between bg-gray-50 border rounded-lg px-4 py-2"
            >
              <span
                className={`flex-1 ${
                  task.completed ? "line-through text-gray-400" : "text-gray-800"
                }`}
              >
                {task.title}
              </span>

              <button
                onClick={() => toggleDone(task._id)}
                className={`mr-3 transition ${
                  task.completed
                    ? "text-green-700"
                    : "text-gray-500 hover:text-green-700"
                }`}
                title="Mark done"
              >
                <CheckCircle size={20} />
              </button>

              <button
                onClick={() => deleteTask(task._id)}
                className="text-red-600 hover:text-red-800 transition"
                title="Delete"
              >
                <Trash2 size={20} />
              </button>
            </li>
          ))}
        </ul>

        {tasks.length === 0 && (
          <p className="text-center text-gray-400 mt-6">No tasks yet. Add one!</p>
        )}
      </div>
    </div>
  );
}

export default App;
