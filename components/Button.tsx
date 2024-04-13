import { ComponentPropsWithoutRef } from "react";

import clsx from "clsx";
import Loading from "./Loading";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  loading?: boolean;
}

export const Button = ({
  children,
  loading,
  disabled,
  className,
  ...rest
}: ButtonProps) => {
  return (
    <button
      {...rest}
      title=""
      disabled={disabled || loading}
      className={clsx(
        "bg-blue-600 rounded-md text-white disabled:opacity-30 disabled:border-neutral-200 disabled:text-blue-100 shadow-xl disabled:cursor-not-allowed body-md justify-center inline-flex px-4 py-2.5 items-center hover:opacity-70 transition-opacity",
        loading && "min-w-20",
        className,
      )}
    >
      {loading ? <Loading className="!w-4 !h-4" /> : children}
    </button>
  );
};
