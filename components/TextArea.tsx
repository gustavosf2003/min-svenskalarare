import { forwardRef } from "react";
import type { PropsWithChildren } from "react";

import clsx from "clsx";

interface InputProps
  extends PropsWithChildren<JSX.IntrinsicElements["textarea"]> {
  label?: React.ReactNode | string;
  error?: string;
}
export const TextArea = forwardRef<HTMLTextAreaElement, InputProps>(
  function TextArea({ className, ...rest }, ref) {
    return (
      <div className="w-full h-full">
        <textarea
          ref={ref}
          style={{ resize: "none" }}
          className={clsx(
            "min-w-[246px] focus:outline-none rounded-xl bg-[#2F2F2F] text-primaryWhite px-3.5 py-[10.5px] disabled:opacity-50 disabled:pointer-events-none w-full",
            className,
          )}
          {...rest}
        />
      </div>
    );
  },
);
