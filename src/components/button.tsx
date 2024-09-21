import React from "react";
import "./button.scss";

interface ButtonProps {
  text: string;
  color: "green" | "red" | "gray";
  variant: "outlined" | "filled";
  className?: string;
}

const Button = ({ text, color, variant, className }: ButtonProps) => {
  return (
    <div className={`button ${className} ${color} ${variant}`}>{text}</div>
  );
};

export default Button;
