import { forwardRef } from "react";
import type { PropsWithChildren } from "react";

import clsx from "clsx";

interface InputProps
  extends PropsWithChildren<JSX.IntrinsicElements["textarea"]> {
  label?: React.ReactNode | string;
  error?: string;
}
export const TextArea = forwardRef<HTMLTextAreaElement, InputProps>(
  function TextArea({ label, className, error, ...rest }, ref) {
    return (
      <div className="w-full">
        <label className="text-[14px] flex flex-col text-blue-200">
          {label}
          <textarea
            ref={ref}
            style={{ resize: "none" }}
            className={clsx(
              "min-w-[246px] placeholder:text-gray-400-50 text-white focus:outline-none focus:!border-gray-600 rounded-md bg-gray-800 px-3.5 py-[10.5px] border !border-gray-700 border-opacity-60 disabled:opacity-50 disabled:pointer-events-none w-full mt-0.5",
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
