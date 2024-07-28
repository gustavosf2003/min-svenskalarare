import clsx from "clsx";

const SelectableBadge = ({
  children,
  className,
  selected,
  onChange,
}: {
  children: React.ReactNode;
  className?: string;
  selected?: boolean;
  onChange?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}) => {
  return (
    <button
      onClick={onChange}
      className={clsx(
        "flex items-center border justify-center text-xs rounded-full px-3 py-1.5",
        className,
        selected
          ? "border border-[#FFA500] text-primaryWhite transition-colors"
          : "border-[#7c8591] text-[#7c8591] transition-colors hover:text-opacity-80",
      )}
    >
      {children}
    </button>
  );
};

export default SelectableBadge;
