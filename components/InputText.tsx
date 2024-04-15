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
              "!border !border-gray-700 min-w-[246px] text-white focus:outline-none focus:!border-gray-600 rounded bg-gray-800 px-3.5 py-[10.5px] disabled:opacity-50 disabled:pointer-events-none w-full mt-0.5",
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
