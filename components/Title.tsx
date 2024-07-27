type TitleProps = {
  text: string;
  icon?: React.ReactElement;
};

const Title = ({ text, icon }: TitleProps) => {
  return (
    <div className="md:flex items-center gap-2 text-[#7c8591] font-bold">
      {icon}
      <p className="text-primaryWhite font-medium">{text}</p>
    </div>
  );
};

export default Title;
