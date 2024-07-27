import { forwardRef } from "react";
import type { PropsWithChildren } from "react";

import clsx from "clsx";

interface InputProps extends PropsWithChildren<JSX.IntrinsicElements["input"]> {
  label?: React.ReactNode | string;
  error?: string;
}
export const InputText = forwardRef<HTMLInputElement, InputProps>(
  function InputText({ label, className, error, ...rest }, ref) {
    return (
      <div className="flex-1">
        <label className="text-[14px] gap-1 flex flex-col text-blue-200">
          {label}
          <input
            ref={ref}
            className={clsx(
              "min-w-[246px] bg-[#2F2F2F] text-[#ECECEC] focus:outline-none rounded-full px-3.5 h-[48px] disabled:opacity-50 disabled:pointer-events-none w-full mt-0.5",
              className,
            )}
            {...rest}
          />
        </label>
        {error && (
          <p className="text-error-500 body-md">
            <span className="sr-only">Error: </span> {error}
          </p>
        )}
      </div>
    );
  },
);
