import React from "react";

import { getTrackBackground, Range } from "react-range";

interface RangeSliderProps {
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
  onChange: (values: number[]) => void;
  values: number[];
}

const RangeSlider: React.FC<RangeSliderProps> = ({
  min = 1,
  max = 3,
  step = 1,
  defaultValue = min,
  onChange,
  values,
}) => {
  return (
    <>
      <div className="flex justify-center flex-wrap">
        <Range
          values={values}
          step={step}
          min={min}
          max={max}
          rtl={false}
          onChange={onChange}
          renderMark={({ props, index }) => (
            <div
              {...props}
              key={props.key}
              className="h-4 rounded-sm w-[5px]"
              style={{
                ...props.style,
                backgroundColor:
                  index * step < values[0] ? "#7c8591" : "#7c8591",
              }}
            />
          )}
          renderTrack={({ props, children }) => (
            <div
              onMouseDown={props.onMouseDown}
              onTouchStart={props.onTouchStart}
              style={{
                ...props.style,
              }}
              className="h-9 w-full flex"
            >
              <div
                ref={props.ref}
                style={{
                  background: getTrackBackground({
                    values: values,
                    colors: ["#ffffff1a", "#ffffff1a"],
                    min: min,
                    max: max,
                    rtl: false,
                  }),
                }}
                className="h-[5px] w-full rounded-[4px] self-center"
              >
                {children}
              </div>
            </div>
          )}
          renderThumb={({ props, isDragged }) => (
            <div
              {...props}
              key={props.key}
              style={{
                ...props.style,
              }}
              className="w-5 h-5 rounded-full bg-[#FFA500] outline-none flex items-center justify-center"
            >
              <div className="bg-[#7c8591]/90 w-2 h-2 rounded-full"></div>
            </div>
          )}
        />
      </div>
    </>
  );
};

export default RangeSlider;
