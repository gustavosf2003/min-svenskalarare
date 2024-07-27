import { ComponentPropsWithoutRef } from "react";

import clsx from "clsx";
import Loading from "./Loading";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  loading?: boolean;
}

const ButtonPrimary = ({
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
        "bg-primaryWhite rounded-full text-[#0E0E0E] disabled:opacity-30 disabled:border-neutral-200  shadow-xl disabled:cursor-not-allowed body-md justify-center inline-flex px-4 py-2.5 items-center hover:opacity-70 transition-opacity",
        loading && "min-w-20",
        className,
      )}
    >
      {loading ? <Loading className="!w-4 !h-4" /> : children}
    </button>
  );
};

const IconButton = ({
  children,
  loading,
  disabled,
  className,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        "bg-[#ECECEC]  rounded-full absolute right-1.5 top-[7px] h-[26px] w-[26px] flex justify-center items-center",
        disabled
          ? "transition-all ease-in-out  duration-900 opacity-100 hover:opacity-70"
          : "transition-all ease-in-out  duration-900 opacity-40",
      )}
    >
      {children}
    </button>
  );
};

export const Button = {
  Primary: ButtonPrimary,
  Icon: IconButton,
};
