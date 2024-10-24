import { useSelector } from "react-redux";

const Card = ({
  label,
  value,
  percentage,
  icon: Icon,
  bgColor,
  textColor,
  iconFill,
  className,
}) => {
  return (
    <div
      className={`flex flex-col gap-3 p-6 rounded-2xl w-[202px] ${bgColor} ${className} `}
    >
      <div className={`${textColor} text-sm font-semibold`}>{label}</div>
      <div className="flex gap-7 items-center">
        <div className={`${textColor} text-2xl font-semibold`}>{value}</div>
        <div
          className={`flex gap-1 items-center ${textColor} text-xs font-medium`}
        >
          <div>{percentage}</div>
          <div>{Icon}</div>
          <div>{Icon && <Icon fill={iconFill} />}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
