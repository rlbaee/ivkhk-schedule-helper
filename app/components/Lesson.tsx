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
      <div className="time font-bold">{time}</div>
      <div className="details">
        <h4 className="name text-md font-semibold">{name}</h4>
        <p className="teacher text-sm">Teacher: {teacher}</p>
        <p className="room text-sm">Room: {room}</p>
        <p className="groups text-sm">Groups: {groups}</p>
      </div>
    </div>
  );
}
