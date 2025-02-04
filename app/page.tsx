"use client";
import React, { useState } from "react";
import {
  Lock,
  Unlock,
  BookOpen,
  Bookmark,
  Star,
  HeartHandshake,
} from "lucide-react";

const DiaryTaskList = () => {
  const [isLocked, setIsLocked] = useState(true);
  const [pin, setPin] = useState("");
  const correctPin = "1234";

  const handleUnlock = () => {
    if (pin === correctPin) {
      setIsLocked(false);
      setPin("");
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <div className="relative">
        {/* Diary Cover */}
        <div
          className={`bg-red-700 rounded-lg p-6 shadow-lg transform transition-all duration-500 
          ${isLocked ? "" : "rotate-y-180 hidden"}`}
        >
          {/* Decorative corner flourishes */}
          <div className="absolute top-2 left-2 text-gray-200 opacity-50">
            ❦
          </div>
          <div className="absolute top-2 right-2 text-gray-200 opacity-50">
            ❦
          </div>
          <div className="absolute bottom-2 left-2 text-gray-200 opacity-50">
            ❦
          </div>
          <div className="absolute bottom-2 right-2 text-gray-200 opacity-50">
            ❦
          </div>

          {/* Golden bookmark ribbon */}
          <div className="absolute -top-2 right-8 w-4 h-16 bg-yellow-400 transform -rotate-12 rounded-b-lg"></div>

          <div className="flex flex-col items-center space-y-4">
            <BookOpen size={48} className="text-gray-200" />
            <div className="text-center">
              <h1 className="text-2xl font-serif text-gray-200 mb-2">
                My Personal Task List
              </h1>
              <div className="text-gray-200 text-sm italic">Est. 2025</div>
            </div>

            {/* Decorative divider */}
            <div className="w-full flex items-center justify-center my-4">
              <div className="border-t border-gray-200 w-16"></div>
              <Star size={16} className="text-gray-200 mx-2" />
              <div className="border-t border-gray-200 w-16"></div>
            </div>

            {/* Lock UI with enhanced styling */}
            <div className="mt-8 flex flex-col items-center space-y-4">
              <div className="relative">
                <Lock size={32} className="text-gray-200" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
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
          className={`bg-gray-50 rounded-lg p-6 shadow-lg ${
            isLocked ? "hidden" : ""
          }`}
        >
          {/* Page corner fold effect */}
          <div className="absolute top-0 right-0 w-0 h-0 border-t-16 border-l-16 border-t-gray-300 border-l-gray-50"></div>

          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-3">
              <h1 className="text-2xl font-serif text-gray-800">My Tasks</h1>
              <Bookmark className="text-red-700" size={20} />
            </div>
            <button
              onClick={() => setIsLocked(true)}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-800"
            >
              <Unlock size={20} />
              <span>Lock</span>
            </button>
          </div>

          {/* Lined paper effect with margin line */}
          <div className="space-y-4 relative">
            {/* Red margin line */}
            <div className="grid grid-cols-7 gap-2">
              <div className="bg-gray-200 p-2 rounded">id</div>
              <div className="bg-gray-200 p-2 rounded">TaskName"</div>
              <div className="bg-gray-200 p-2 rounded">Description</div>
              <div className="bg-gray-200 p-2 rounded">Due Date</div>
              <div className="bg-gray-200 p-2 rounded">category</div>
              <div className="bg-gray-200 p-2 rounded">Edit Button</div>
              <div className="bg-gray-200 p-2 rounded">Delete Button</div>
            </div>
          </div>

          {/* Page number */}
          <div className="text-center mt-6 font-serif text-gray-400 text-sm">
            - 1 -
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiaryTaskList;
