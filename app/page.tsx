"use client";
import React, { useState } from "react";
import {
  Lock,
  Unlock,
  BookOpen,
  Bookmark,
  Star,
  HeartHandshake,
  Plus,
} from "lucide-react";

interface Task {
  id: number;
  name: string;
  description: string;
  dueDate: string;
  category: string;
}

interface NewTask {
  name: string;
  description: string;
  dueDate: string;
  category: string;
}
const DiaryTaskList = () => {
  const [isLocked, setIsLocked] = useState(true);
  const [pin, setPin] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  const [newTask, setNewTask] = useState({
    name: "",
    description: "",
    dueDate: "",
    category: "",
  });

  const correctPin = "1234"; // In a real app, this should be stored securely

  const handleUnlock = () => {
    if (pin === correctPin) {
      setIsLocked(false);
      setPin("");
    } else {
      alert("Incorrect PIN");
    }
  };

  const handleAddTask = () => {
    if (!newTask.name || !newTask.description) {
      alert("Please fill in at least the name and description");
      return;
    }

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        ...newTask,
      },
    ]);
    setNewTask({
      name: "",
      description: "",
      dueDate: "",
      category: "",
    });
    setIsAdding(false);
  };

  const deleteTask = (taskId: number) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const editTask = (taskId: number, updatedTask: Task) => {
    setTasks(tasks.map((task) => (task.id === taskId ? updatedTask : task)));
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="relative">
        {/* Diary Cover */}
        <div
          className={`bg-red-700 rounded-lg p-6 shadow-lg transform transition-all duration-500 
          ${isLocked ? "" : "hidden"}`}
        >
          {/* Decorative corners */}
          {[
            "top-2 left-2",
            "top-2 right-2",
            "bottom-2 left-2",
            "bottom-2 right-2",
          ].map((position) => (
            <div
              key={position}
              className={`absolute ${position} text-gray-200 opacity-50`}
            >
              ❦
            </div>
          ))}

          {/* Bookmark ribbon */}
          <div className="absolute -top-2 right-8 w-4 h-16 bg-yellow-400 transform -rotate-12 rounded-b-lg" />

          <div className="flex flex-col items-center space-y-4">
            <BookOpen size={48} className="text-gray-200" />
            <div className="text-center">
              <h1 className="text-2xl font-serif text-gray-200 mb-2">
                My Personal Task List
              </h1>
              <div className="text-gray-200 text-sm italic">Est. 2025</div>
            </div>

            <div className="w-full flex items-center justify-center my-4">
              <div className="border-t border-gray-200 w-16" />
              <Star size={16} className="text-gray-200 mx-2" />
              <div className="border-t border-gray-200 w-16" />
            </div>

            <div className="mt-8 flex flex-col items-center space-y-4">
              <div className="relative">
                <Lock size={32} className="text-gray-200" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
              </div>
              <input
                type="password"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                placeholder="Enter PIN"
                className="px-4 py-2 rounded border text-center w-32 font-serif bg-red-50"
                maxLength={4}
              />
              <button
                onClick={handleUnlock}
                className="bg-gray-200 text-red-700 px-6 py-2 rounded-full font-medium hover:bg-gray-100 flex items-center space-x-2"
              >
                <span>Unlock</span>
                <HeartHandshake size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Diary Interior */}
        <div
          className={`bg-gray-100 rounded-lg p-6 shadow-lg ${
            isLocked ? "hidden" : ""
          }`}
        >
          <div className="absolute top-0 right-0 w-0 h-0 border-t-[16px] border-l-[16px] border-t-gray-300 border-l-transparent" />

          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-3">
              <h1 className="text-2xl font-serif text-gray-800">My Tasks</h1>
              <Bookmark className="text-red-700" size={20} />
            </div>
            <div className="flex space-x-4">
              <button
                onClick={() => setIsAdding(true)}
                className="flex items-center space-x-2 text-green-600 hover:text-green-800"
              >
                <Plus size={20} />
                <span>Add Task</span>
              </button>
              <button
                onClick={() => setIsLocked(true)}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-800"
              >
                <Unlock size={20} />
                <span>Lock</span>
              </button>
            </div>
          </div>

          {isAdding && (
            <div className="mb-6 bg-white p-4 rounded-lg shadow">
              <h2 className="text-lg font-serif mb-4">New Task</h2>
              <div className="grid grid-cols-2 gap-4">
                <input
                  placeholder="Task Name"
                  value={newTask.name}
                  onChange={(e) =>
                    setNewTask({ ...newTask, name: e.target.value })
                  }
                  className="p-2 border rounded"
                />
                <input
                  placeholder="Category"
                  value={newTask.category}
                  onChange={(e) =>
                    setNewTask({ ...newTask, category: e.target.value })
                  }
                  className="p-2 border rounded"
                />
                <input
                  placeholder="Description"
                  value={newTask.description}
                  onChange={(e) =>
                    setNewTask({ ...newTask, description: e.target.value })
                  }
                  className="p-2 border rounded col-span-2"
                />
                <input
                  type="date"
                  value={newTask.dueDate}
                  onChange={(e) =>
                    setNewTask({ ...newTask, dueDate: e.target.value })
                  }
                  className="p-2 border rounded"
                />
                <div className="flex space-x-2">
                  <button
                    onClick={handleAddTask}
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setIsAdding(false)}
                    className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="space-y-4">
            {tasks.length > 0 ? (
              tasks.map((task) => (
                <div
                  key={task.id}
                  className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-red-700"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">{task.name}</h3>
                      <p className="text-gray-600 mt-1">{task.description}</p>
                      <div className="flex items-center mt-2 text-sm text-gray-500">
                        <span className="bg-gray-200 px-2 py-1 rounded">
                          {task.category}
                        </span>
                        <span className="ml-4">{task.dueDate}</span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() =>
                          editTask(task.id, {
                            ...task,
                            name:
                              prompt("Enter new name:", task.name) || task.name,
                          })
                        }
                        className="text-blue-600 hover:text-blue-800"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteTask(task.id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center text-gray-500 text-xl py-8">
                No tasks available.
              </div>
            )}
          </div>

          <div className="text-center mt-6 font-serif text-gray-400 text-sm">
            - 1 -
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiaryTaskList;
