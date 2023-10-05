"use client";

import { usePathname } from "next/navigation";

const NAVBAR_ICONS = [
  {
    name: "Lärare",
    icon: "🇸🇪",
    abbreviation: "Lärare",
    route: "/",
  },
  {
    name: "Lexikon",
    icon: "📖",
    abbreviation: "Lexikon",
    route: "/dictionary",
  },
];

export function Navbar() {
  const pathname = usePathname();
  return (
    <div className="flex items-center justify-center">
      <nav className="flex px-1 py-1.5 flex-1 mb-4 bg-gray-800 rounded-md max-w-[80%]">
        {NAVBAR_ICONS.map((item) => (
          <a
            key={item.name}
            className={`mr-4 w-full gap-2 justify-center flex py-1 ${
              pathname === item.route
                ? "bg-gray-900 text-white rounded-md"
                : "text-gray-600"
            }`}
            href={item.route}
          >
            {item.icon}
            <span className="hidden lg:block">{item.name}</span>
            <span className="block lg:hidden">{item.abbreviation}</span>
          </a>
        ))}
      </nav>
    </div>
  );
}
