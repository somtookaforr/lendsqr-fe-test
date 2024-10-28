import React from "react";
import "./button.scss";

interface ButtonProps {
  text: string;
  color: "green" | "red" | "gray";
  variant: "outlined" | "filled";
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

const Button = ({ text, color, variant, className, type, onClick }: ButtonProps) => {
  return (
    <button className={`button ${className} ${color} ${variant}`} type={type} onClick={onClick}>{text}</button>
  );
};

export default Button;
