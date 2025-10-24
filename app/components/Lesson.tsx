"use client";

export default function Lesson({
  name,
  time,
  teacher,
  room,
  groups,
}: {
  name: string;
  time: string;
  teacher: string;
  room: string;
  groups: string;
}) {
  return (
    <div className="lesson">
      <p>
        <b>{time}</b>
      </p>
      <p>{name}</p>
      <p>{teacher}</p>
      <p>{room}</p>
      <p>{groups}</p>
    </div>
  );
}
