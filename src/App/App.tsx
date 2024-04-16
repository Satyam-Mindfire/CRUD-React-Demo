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
      clearForm()
    }
  };

  // Handle the submit button click
  const handleSubmit = () => {
    const personData: TableRow = {
      fullName: fullName.trim(),
      email: email.trim(),
      gender: selectedGender ? selectedGender : "NA",
      dob: dob ? dob : "NA",
      phone: phone.trim(),
      city: city.trim() ? city.trim() : "NA",
      country: selectedCountry,
    };
    const index = contestData.findIndex((item) => item.email === email.trim());

    if (index !== -1) {
      const updatedContestData = [...contestData];
      updatedContestData[index] = personData;
      setContestData(updatedContestData);
    } else if (
      fullName.trim().length >= 3 &&
      emailPattern.test(email.trim()) &&
      phone.trim().length === 10
    ) {
      setContestData([...contestData, personData]);
    }
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
        <Navbar />

        <div className="container">
          {/* Form */}
          <form className="form">
            <h1 className="header-text">Join Our Contest</h1>
            <p className="secondary-text">
              Fill out the form to participate in the contest
            </p>
            <div>
              <InputField
                id="fullname"
                label="Full Name"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                errorMessage={fullNameError}
                onBlur={handleFullNameBlur}
              />
              <InputField
                id="email"
                label="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                errorMessage={emailError}
                onBlur={handleEmailBlur}
              />
              <GenderInput
                selectedGender={selectedGender}
                onGenderChange={(event) =>
                  setSelectedGender(event.target.value)
                }
              />
              <InputField
                id="dob"
                label="D.O.B"
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
              <InputField
                id="phone"
                label="Phone No."
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                errorMessage={phoneError}
                onBlur={handlePhoneBlur}
              />
              <InputField
                id="city"
                label="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <Dropdown
                options={countryObject}
                selectedValue={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                label="Country"
              />
              <div className="btnContainer">
                <Button
                  children="Submit"
                  onClick={handleSubmit}
                  disabled={validateForm()}
                  className="submit-btn"
                />
                <Button
                  children="Cancel"
                  onClick={clearForm}
                  className="cancel-btn"
                />
              </div>
            </div>
          </form>
          <hr />
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
