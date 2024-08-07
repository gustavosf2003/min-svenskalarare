"use client";

import { usePathname, useRouter } from "next/navigation";

import { Gear, House, NewspaperClipping } from "@phosphor-icons/react";
import clsx from "clsx";

import { useCustomNavigation } from "@/context/NavigationContext";
import Image from "next/image";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { canGoBack, setToRoute } = useCustomNavigation();
  const isSettingsPage = pathname === "/settings";
  const isNewsPage = pathname === "/news";

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-between w-full px-8 py-3 bg-baseSecondary">
      <h1
        className="flex items-center gap-2 text-xl leading-6 cursor-pointer md:text-2xl"
        onClick={() => {
          if (canGoBack) {
            router.replace("/");
          } else {
            setToRoute("/");
          }
        }}
      >
        <span className="text-2xl md:text-4xl">🇸🇪</span>
        Min svenskalärare
      </h1>
      <div className="flex md:hidden">
        {isNewsPage ? (
          <button
            aria-label="Gå till startsidan"
            className="p-2 hover:bg-[#2F2F2F] hover:bg-opacity-40 hover:rounded-full"
            onClick={() => {
              if (canGoBack) {
                router.push("/");
              } else {
                setToRoute("/");
              }
            }}
          >
            <House size={22} className="text-gray-400" />
          </button>
        ) : (
          <button
            aria-label="Gå till startsidan"
            className="p-2 hover:bg-[#2F2F2F] hover:bg-opacity-40 hover:rounded-full"
            onClick={() => {
              if (canGoBack) {
                router.push("/news");
              } else {
                setToRoute("/");
              }
            }}
          >
            <NewspaperClipping size={22} className="text-gray-400" />
          </button>
        )}
        {isSettingsPage ? (
          <button
            aria-label="Gå till startsidan"
            className="p-2 hover:bg-[#2F2F2F] hover:bg-opacity-40 hover:rounded-full"
            onClick={() => {
              if (canGoBack) {
                router.push("/");
              } else {
                setToRoute("/");
              }
            }}
          >
            <House size={22} className="text-gray-400" />
          </button>
        ) : (
          <button
            aria-label="Gå till Inställningar"
            className="p-2 hover:bg-[#2F2F2F] hover:bg-opacity-40 hover:rounded-full"
            onClick={() => {
              router.push("/settings");
            }}
          >
            <Gear size={22} className="text-gray-400" />
          </button>
        )}
      </div>
      <div className="h-full pt-1.5 gap-10 hidden md:flex">
        <button
          aria-label="Gå till startsidan"
          className={clsx(
            "relative text-sm pt-1 font-semibold transition-opacity hover:opacity-50 text-md text-gray-400",
          )}
          onClick={() => {
            if (canGoBack) {
              router.push("/");
            } else {
              setToRoute("/");
            }
          }}
        >
          Dashboard
        </button>
        <button
          aria-label="Gå till Nyhter"
          className={clsx(
            "relative text-sm pt-1 font-semibold transition-opacity hover:opacity-50 text-md text-gray-400",
          )}
          onClick={() => {
            if (canGoBack) {
              router.push("/news");
            } else {
              setToRoute("/");
            }
          }}
        >
          Nyheter
        </button>
        <button
          aria-label="Gå till Inställningar"
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
