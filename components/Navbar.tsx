"use client";

import { usePathname, useRouter } from "next/navigation";

import { Gear, House } from "@phosphor-icons/react";
import clsx from "clsx";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const isSettingsPage = pathname === "/settings";
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-between w-full px-8 py-3 bg-baseSecondary">
      <h1
        className="flex items-center text-xl cursor-pointer md:text-2xl leading-6 gap-2"
        onClick={() => router.push("/")}
      >
        <span className="text-2xl md:text-4xl">🇸🇪</span>
        Min svenskalärare
      </h1>
      <div className="flex md:hidden">
        <button
          className="p-2 hover:bg-[#2F2F2F] hover:bg-opacity-40 hover:rounded-full"
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
