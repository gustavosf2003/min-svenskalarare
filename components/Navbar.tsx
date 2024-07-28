"use client";

import { usePathname, useRouter } from "next/navigation";

import { Gear, House } from "@phosphor-icons/react";
import clsx from "clsx";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const isSettingsPage = pathname === "/settings";
  return (
    <div className="flex justify-between w-full bg-baseSecondary py-3 px-8 fixed top-0 left-0 right-0 z-50">
      <h1
        className="text-xl md:text-2xl leading-6 flex items-center gap-2 cursor-pointer"
        onClick={() => router.push("/")}
      >
        <span className="text-2xl md:text-4xl">🇸🇪</span>
        Min svenskalärare
      </h1>
      <div className="flex md:hidden">
        <button
          onClick={() => {
            router.push(isSettingsPage ? "/" : "/settings");
          }}
        >
          {isSettingsPage ? (
            <House size={22} className="text-gray-400" />
          ) : (
            <Gear size={22} className="text-gray-400" />
          )}
        </button>
      </div>
      <div className="h-full pt-1.5 gap-10 hidden md:flex">
        <button
          className={clsx(
            "relative text-sm pt-1 font-semibold transition-opacity hover:opacity-50 text-md text-gray-400",
          )}
          onClick={() => router.push("/")}
        >
          Dashboard
        </button>
        <button
          className={clsx(
            "relative text-sm pt-1 font-semibold transition-opacity hover:opacity-50 text-md text-gray-400",
          )}
          onClick={() => router.push("/settings")}
        >
          Inställningar
        </button>
      </div>
    </div>
  );
};

export default Navbar;
