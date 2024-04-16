import React from "react";
import "./GenderInput.css";

// Define an interface for the possible props
interface GenderInputProps {
  // The currently selected gender
  selectedGender: string;

  // Event handler for when the gender selection changes
  onGenderChange: (event: React.ChangeEvent<HTMLInputElement>) => void;

  // Class name for the input field (optional)
  inputClassName?: string;

  // Class name for the labels (optional)
  labelClassName?: string;
}

// Define the GenderInput functional component with props
const GenderInput: React.FC<GenderInputProps> = ({
  selectedGender,
  onGenderChange,
  inputClassName = "",
  labelClassName = "",
}) => {
  return (
    <div className="inputFieldContainer">
      {/* Label for gender input */}
      <label className={`inputFieldLabel ${labelClassName}`}>Gender</label>
      {/* Radio buttons for gender */}
      <span>
        <input
          type="radio"
          value="Male"
          name="Gender"
          id="Male"
          checked={selectedGender === "Male"}
          onChange={onGenderChange}
          className={`${inputClassName}`}
        />
        <label htmlFor="Male" className={`margin ${labelClassName}`}>
          Male
        </label>
        <input
          type="radio"
          value="Female"
          name="Gender"
          id="Female"
          checked={selectedGender === "Female"}
          onChange={onGenderChange}
          className={`${inputClassName}`}
        />
        <label htmlFor="Female" className={`margin ${labelClassName}`}>
          Female
        </label>
      </span>
    </div>
  );
};

export default GenderInput;
