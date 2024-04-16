import React from "react";
import "./InputField.css";

// Define an interface for the possible props
interface InputProps {
  // id for the input element (used in label's htmlFor attribute)
  id: string;

  // Label text
  label: string;

  // Boolean indicating whether the input is required
  required?: boolean;

  // Class name for the input field (optional)
  inputClassName?: string;

  // Class name for the label (optional)
  labelClassName?: string;

  //Class name for the error (optional)
  errorClassName?: string;

  //Error message (optional)
  errorMessage?: string;

  //Type of the input field (optional)
  type?: string;

  // Event handler function for the blur event
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;

  value: string;

   // Event handler when the input changes
   onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

// Define the FullNameInput functional component with props
const InputField: React.FC<InputProps> = ({
  id,
  label,
  required = false,
  inputClassName = "",
  labelClassName = "",
  errorClassName = "",
  errorMessage = "",
  type = "text",
  onBlur = () => {},
  value,
  onChange
}) => {
  return (
    <div className="inputFieldContainer">
      {/* Label for the input field */}
      <label htmlFor={id} className={`inputFieldLabel ${labelClassName}`}>
        {label}
        {required && <sup className="required-asterisk">*</sup>}{" "}
        {/* Conditionally render asterisk */}
      </label>
      {/* Input field */}
      <input
        id={id}
        className={`inputField ${inputClassName}`}
        type={type}
        onBlur={onBlur}
        value={value}
        onChange={onChange}
      />
      <p className={`error-msg ${errorClassName}`}>{errorMessage}</p>
    </div>
  );
};

export default InputField;
