"use client";

import Navbar from "@/app/components/Navbar";
import Dashboard from "@/app/components/Dashboard";
import Settings from "./components/Settings";
import { useState } from "react";

export default function Home() {
  const [screen, setScreen] = useState<"dashboard" | "settings">("dashboard");

  return (
    <main className="flex flex-col min-h-screen">
      {screen === "dashboard" && <Dashboard />}
      {screen === "settings" && <Settings />}

      <Navbar setScreen={setScreen} />
    </main>
  );
}
