/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useEffect, useState } from "react";
import Lesson from "./Lesson";
import scheduleNames from "@/scheduleNames.json";
import { Tomorrow } from "next/font/google";

export default function ScheduleBlock({ groupCode }: { groupCode: string }) {
  const uuid = (scheduleNames as Record<string, string>)[groupCode];
  const [scheduleForDate, setScheduleForDate] = useState<any[]>([]);
  const baseUrl = `http://localhost/ivkhk/index.php?uuid=${uuid}`;

  const fake_date = new Date("October 22, 2025 11:13:00");

  useEffect(() => {
    const today = new Date();
    const todayFormatted = fake_date.toLocaleDateString("et-EE", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    const fetchSchedule = async () => {
      try {
        const res = await fetch(baseUrl);
        const data = await res.json();
        localStorage.setItem(`schedule_${groupCode}`, JSON.stringify(data));
        // filter lessons for today immediately
        const todayLessons = data[todayFormatted] || [];
        setScheduleForDate(todayLessons);
      } catch (err) {
        console.error(err);
      }
    };

    fetchSchedule();
  }, [baseUrl, groupCode]); // no todayFormatted here

  return (
    <section className="scheduleBlock w-full bg-amber-400">
      <div className="header">
        <h3 className="text-l">
          <b>{groupCode}</b>
        </h3>
      </div>
      <div className="separator w-full h-0.5 bg-black"></div>
      <div className="lessons flex gap-2 flex-col p-2">
        {scheduleForDate.length === 0 ? (
          <p>No lessons today</p>
        ) : (
          scheduleForDate.map((lesson, idx) => (
            <Lesson
              key={idx}
              name={lesson.name}
              time={lesson.time}
              teacher={lesson.teacher}
              room={lesson.room}
              groups={lesson.groups}
            />
          ))
        )}
      </div>
    </section>
  );
}
