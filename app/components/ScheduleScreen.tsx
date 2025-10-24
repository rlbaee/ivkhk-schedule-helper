"use client";
import { useState, useEffect } from "react";
import ScheduleBlock from "./ScheduleBlock";

export default function ScheduleScreen() {
  const [favourites, setFavourites] = useState<string[]>([]);

  useEffect(() => {
    // wrap in setTimeout or just parse in effect without causing immediate re-render
    const saved = localStorage.getItem("favourites");
    if (saved) {
      // setState asynchronously to avoid cascade
      setTimeout(() => setFavourites(JSON.parse(saved)), 0);
    }
  }, []);

  return (
    <section>
      {favourites.length === 0 && <p>No favourite groups selected.</p>}
      {favourites.map((group) => (
        <ScheduleBlock key={group} groupName={group} />
      ))}
    </section>
  );
}
