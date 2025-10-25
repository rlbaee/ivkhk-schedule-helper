"use client";
import { useState, useEffect } from "react";
import ScheduleBlock from "./ScheduleBlock";

export default function ScheduleScreen() {
  const [favouriteGroups, setFavouriteGroups] = useState<string[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("favouriteGroups");
    if (stored) {
      setTimeout(() => setFavouriteGroups(JSON.parse(stored)), 0);
    }
  }, []);

  if (favouriteGroups.length === 0) {
    return <p>No favourite groups selected.</p>;
  }

  return (
    <section className="flex flex-col gap-3">
      {favouriteGroups.map((group) => (
        <ScheduleBlock key={group} groupCode={group} />
      ))}
    </section>
  );
}
