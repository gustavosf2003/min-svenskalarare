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
      <div className="w-full h-full">
        <textarea
          ref={ref}
          style={{ resize: "none" }}
          className={clsx(
            "min-w-[246px] text-white focus:outline-none focus:!border-gray-600 rounded bg-gray-800 px-3.5 py-[10.5px] border !border-gray-700 border-opacity-60 disabled:opacity-50 disabled:pointer-events-none w-full",
            className,
          )}
          {...rest}
        />
      </div>
    );
  },
);
