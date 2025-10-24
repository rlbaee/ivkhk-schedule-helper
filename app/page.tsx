"use client";

import Navbar from "@/app/components/Navbar";
import Dashboard from "@/app/components/Dashboard";
import Settings from "./components/Settings";
import ScheduleBlock from "./components/ScheduleBlock";
import ScheduleScreen from "./components/ScheduleScreen";

export default function Home() {
  return (
    <main>
      <ScheduleScreen />
      <Navbar />
    </main>
  );
}
