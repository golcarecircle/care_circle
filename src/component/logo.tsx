import { FC } from "react";
import { BiPlusMedical } from "react-icons/bi";

type LogoProps = {
  size?: number;
  color?: string;
  dcolor?: string;
  textSize?: string;
  text?: string;
};

const Logo: FC<LogoProps> = ({
  size = 6,
  dcolor = "white",
  color = "black",
  text = "white",
}) => {
  const textSize = size === 6 ? "lg" : "xg";
  return (
    <a href="#" className="flex items-center">
      <div
        className={`flex justify-center item-center h-${size} bg-primary rounded-full p-1 mr-2`}
      >
        <BiPlusMedical
          className={`h-full w-full fill-${color} bg`}
          size={`${size}em`}
        />
      </div>
      <span
        className={`self-center text-${textSize} text-${text} font-semibold whitespace-nowrap dark:text-${dcolor}`}
      >
        CareCicle
      </span>
    </a>
  );
};

export default Logo;
