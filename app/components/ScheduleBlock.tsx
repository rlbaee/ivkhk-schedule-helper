"use client";

import Lesson from "./Lesson";

export default function ScheduleBlock({ groupName }: { groupName: string }) {
  return (
    <section className="scheduleBlock">
      <div className="header">
        <h3>{groupName}</h3>
      </div>
      <div className="lessons">
        <Lesson
          name="Programmeerimise alused"
          time="8:15 - 9:45"
          teacher="Jelena Kuzmina"
          room="C-213"
          groups="JPTV23, JPIT23"
        />
      </div>
    </section>
  );
}
