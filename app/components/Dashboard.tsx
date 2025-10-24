"use client";
import ScheduleScreen from "./ScheduleScreen";
export default function Dashboard() {
  const today = new Date();
  const todayFormatted = today.toLocaleDateString("et-EE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <section className="p-4">
      <h1 className="text-3xl font-bold mb-4">{todayFormatted}</h1>

      <ScheduleScreen />
    </section>
  );
}
