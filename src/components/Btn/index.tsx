import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  size?: "sm" | "md" | "lg";
  variant?: "outlined";
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({
  size = "md",
  variant,
  text,
  onClick,
}) => {
  const classes = [styles.button];

  if (variant === "outlined") {
    classes.push(styles.outlined);
  }

  if (size === "sm") {
    classes.push(styles.sm);
  } else if (size === "md") {
    classes.push(styles.md);
  } else if (size === "lg") {
    classes.push(styles.lg, styles.parentSize);
  }

  return (
    <button className={classes.join(" ")} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
