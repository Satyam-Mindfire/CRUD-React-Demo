import React from "react";
import "./Button.css"

interface ButtonProps {
    // The function to be called when the button is clicked
    onClick: () => void;

    // Whether the button should be disabled
    disabled?: boolean;

    // The button's CSS class name for styling
    className?: string;

    // The button's text content
    children: React.ReactNode;
}


// Define the Button component
const Button: React.FC<ButtonProps> = ({
  onClick,
  disabled = false,
  className = "",
  children,
}) => {
  return (
    <button
      className={className}
      onClick={onClick}
      disabled={disabled}
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;
