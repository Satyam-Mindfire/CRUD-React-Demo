import "./App.css";
import Dropdown from "../components/dropdown/Dropdown";
import GenderInput from "../components/genderInput/GenderInput";
import InputField from "../components/input/InputField";
import Navbar from "../components/navbar/Navbar";
import { useEffect, useState } from "react";
import {
  ERROR_FULL_NAME_REQUIRED,
  ERROR_INVALID_EMAIL,
  ERROR_INVALID_PHONE,
  contestDataArr,
  countryObject,
  emailPattern,
} from "../constant/Constant";
import Button from "../components/button/Button";
import Table from "../components/table/Table";

interface TableRow {
  fullName: string;
  email: string;
  gender: string;
  dob: string;
  phone: string;
  city: string;
  country: string;
}

function App() {
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("India");
  const [contestData, setContestData] = useState<TableRow[]>(contestDataArr);
  const [fullName, setFullName] = useState("");
  const [fullNameError, setFullNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [dob, setDob] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");

  // Handle the edit button click
  const handleOnEdit = (item: TableRow) => {
    setFullName(item.fullName);
    setEmail(item.email);
    setSelectedGender(item.gender);
    setDob(item.dob);
    setPhone(item.phone);
    setCity(item.city);
    setSelectedCountry(item.country);
  };

  // Handle the delete button click
  const handleOnDelete = (index: number) => {
    // Display a browser alert asking the user to confirm the deletion
    const confirmation = confirm(
      "Are you sure you want to delete this context data?"
    );

    if (confirmation) {
      if (contestData.length === 1) {
        setContestData([]);
      } else {
        const updatedContestData: TableRow[] = [...contestData];
        updatedContestData.splice(index, 1);
        setContestData(updatedContestData);
      }
      clearForm();
    }
  };

  // Handle the submit button click
  const handleSubmit = () => {
    // Create an object with form data as properties
    const personData: TableRow = {
      fullName: fullName.trim(),
      email: email.trim(),
      gender: selectedGender ? selectedGender : "NA", // Use selected gender or default to "NA"
      dob: dob ? dob : "NA", // Use date of birth or default to "NA"
      phone: phone.trim(),
      city: city.trim() ? city.trim() : "NA", // Use city or default to "NA"
      country: selectedCountry,
    };

    // Check if an entry with the given email already exists in contestData
    const index = contestData.findIndex((item) => item.email === email.trim());

    // If an entry with the email is found, update the existing entry
    if (index !== -1) {
      // Create a copy of the contestData array
      const updatedContestData = [...contestData];
      // Update the existing entry at the found index
      updatedContestData[index] = personData;
      // Update the state with the updated array
      setContestData(updatedContestData);
    }
    // If no existing entry is found and the input data is valid
    else if (
      fullName.trim().length >= 3 && // Check if the full name has at least 3 characters
      emailPattern.test(email.trim()) && // Check if the email is valid using regex pattern
      phone.trim().length === 10 // Check if the phone number is exactly 10 digits long
    ) {
      // Add the new personData to the contestData array
      setContestData([...contestData, personData]);
    }
    // Clear the form fields after submitting the data
    clearForm();
  };

  useEffect(() => {}, []);

  // Validate form on submit action
  function validateForm() {
    const isFullNameValid = fullName.trim().length >= 3;
    const isEmailValid = emailPattern.test(email.trim());
    const isPhoneValid = phone.trim().length === 10;

    return !(isFullNameValid && isEmailValid && isPhoneValid);
  }

  // Handle Full Name Validation
  function handleFullNameBlur() {
    fullName.trim().length < 3
      ? setFullNameError(ERROR_FULL_NAME_REQUIRED)
      : setFullNameError("");
  }

  // Handle Email Validation
  function handleEmailBlur() {
    !emailPattern.test(email.trim())
      ? setEmailError(ERROR_INVALID_EMAIL)
      : setEmailError("");
  }

  // Handle Phone Validation
  function handlePhoneBlur() {
    phone.trim().length !== 10
      ? setPhoneError(ERROR_INVALID_PHONE)
      : setPhoneError("");
  }

  // This function is used to reset the form
  function clearForm() {
    setFullName("");
    setEmail("");
    setDob("");
    setSelectedGender("");
    setCity("");
    setSelectedCountry("");
    setPhone("");
    setFullNameError("");
    setEmailError("");
    setPhoneError("");
  }

  return (
    <>
      <div>
        {/* Navbar */}
        <Navbar />

        <div className="container">
          {/* Form */}
          <form className="form">
            <h1 className="header-text">Join Our Contest</h1>
            <p className="secondary-text">
              Fill out the form to participate in the contest
            </p>
            <div>
              {/* Fullname input field */}
              <InputField
                id="fullname"
                label="Full Name"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                errorMessage={fullNameError}
                onBlur={handleFullNameBlur}
              />
              {/* email input field */}
              <InputField
                id="email"
                label="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                errorMessage={emailError}
                onBlur={handleEmailBlur}
              />

              {/* Gender input field */}
              <GenderInput
                selectedGender={selectedGender}
                onGenderChange={(event) =>
                  setSelectedGender(event.target.value)
                }
              />
              {/* DOB input field */}
              <InputField
                id="dob"
                label="D.O.B"
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
              {/* Phone input field */}
              <InputField
                id="phone"
                label="Phone No."
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                errorMessage={phoneError}
                onBlur={handlePhoneBlur}
              />
              {/* City input field */}
              <InputField
                id="city"
                label="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              {/* County drop down */}
              <Dropdown
                options={countryObject}
                selectedValue={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                label="Country"
              />
              <div className="btnContainer">
                {/* Submit button */}
                <Button
                  children="Submit"
                  onClick={handleSubmit}
                  disabled={validateForm()}
                  className="submit-btn"
                />
                {/* Cancel button */}
                <Button
                  children="Cancel"
                  onClick={clearForm}
                  className="cancel-btn"
                />
              </div>
            </div>
          </form>
          <hr />
          {/* Table container */}
          <div className="table">
            <h1 className="header-text">Contest Data</h1>
            <br />
            <br />
            <br />
            <Table
              data={contestData}
              onEdit={handleOnEdit}
              onDelete={handleOnDelete}
            />
          </div>
        </div>
        <hr />
      </div>
    </>
  );
}

export default App;
