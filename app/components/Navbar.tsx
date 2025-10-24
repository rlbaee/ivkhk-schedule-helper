"use client";

export default function Navbar() {
  return (
    <nav className="fixed bottom-0 w-full bg-gray-100 p-4 border-t">
      <ul className="flex justify-around">
        <li>
          <a href="">Dashboard</a>
        </li>
        <li>
          <a href="">Settings</a>
        </li>
      </ul>
    </nav>
  );
}
