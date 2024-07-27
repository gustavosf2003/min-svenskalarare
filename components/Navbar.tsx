import clsx from "clsx";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between w-full bg-baseSecondary py-3 px-8 fixed top-0 left-0 right-0 z-50">
      <h1 className="text-2xl leading-6 flex items-center gap-2">
        <span className="text-4xl">🇸🇪</span>
        Min svenskalärare
      </h1>
      <div className="h-full pt-1.5 gap-10 hidden md:flex">
        <Link
          className={clsx(
            "relative text-sm pt-1 font-semibold transition-opacity hover:opacity-50 text-md text-gray-400",
          )}
          href="/settings"
        >
          Assistant
        </Link>
        <button
          className={clsx(
            "relative text-sm pt-1 font-semibold transition-opacity hover:opacity-50 text-md",
            "text-gray-400",
          )}
        >
          Logga ut
        </button>
      </div>
    </div>
  );
};

export default Navbar;
