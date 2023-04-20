import { FC } from "react";
import { LogoIcon, MedIcon } from "../icons/icons";

interface LogoProps {
  size?: "small" | "medium" | "large";
}

const Logo: FC<LogoProps> = ({ size = "medium" }) => {
  let logoClasses =
    "flex items-center justify-center text-lg font-bold text-gray-900";
  if (size === "small") {
    logoClasses += " text-sm";
  } else if (size === "large") {
    logoClasses += " text-xl";
  }

  return (
    <div className={logoClasses}>
      <LogoIcon />
      <h1 className="tracking-tight text-white text-xl">CareCircle</h1>
    </div>
  );
};

export default Logo;
