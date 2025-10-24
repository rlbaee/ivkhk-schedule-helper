"use client";

import { useState } from "react";

export default function Settings() {
  // Initialize state from localStorage safely
  const [favourites, setFavourites] = useState<string[]>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("favouriteGroups");
      return stored ? JSON.parse(stored) : [];
    }
    return [];
  });

  const [inputValue, setInputValue] = useState("");

  const addFavourite = () => {
    const trimmed = inputValue.trim();
    if (!trimmed || favourites.includes(trimmed)) return;

    const updated = [...favourites, trimmed];
    setFavourites(updated);
    localStorage.setItem("favouriteGroups", JSON.stringify(updated));
    setInputValue("");
  };

  const removeFavourite = (group: string) => {
    const updated = favourites.filter((g) => g !== group);
    setFavourites(updated);
    localStorage.setItem("favouriteGroups", JSON.stringify(updated));
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") addFavourite();
  };

  return (
    <section className="settings-screen p-4">
      <h1 className="text-3xl font-bold mb-4">Settings</h1>

      <div className="favourites-wrapper">
        {/* Input + add button */}
        <div className="add-favourite flex items-center gap-2 mb-4">
          <input
            type="text"
            placeholder="e.g. JPTV23"
            className="border rounded-full px-3 py-1 flex-1"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <button
            onClick={addFavourite}
            className="bg-blue-500 px-3 py-1 rounded-full text-white"
          >
            +
          </button>
        </div>

        {/* List of favourites */}
        <div className="favourites flex flex-wrap gap-2">
          {favourites.map((group) => (
            <div
              key={group}
              className="favourite bg-gray-400 px-3 py-1 text-amber-50 rounded-full flex items-center gap-2"
            >
              {group}
              <button
                onClick={() => removeFavourite(group)}
                className="text-white font-bold"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
