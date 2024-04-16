import "./App.css";
import Dropdown from "../components/dropdown/Dropdown";
import GenderInput from "../components/genderInput/GenderInput";
import InputField from "../components/input/InputField";
import Navbar from "../components/navbar/Navbar";
import { useState } from "react";
import { contestDataArr, countryObject } from "../constant/Constant";
import Button from "../components/button/Button";
import Table from "../components/table/Table";

function App() {
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [contestData, setContestData] = useState(contestDataArr);

  const handleOnEdit = () => {

  }

  const handleOnDelete = () => {

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
              <InputField id="fullname" label="Full Name" required />
              <InputField id="email" label="Email" required />
              <GenderInput
                selectedGender={selectedGender}
                onGenderChange={(event) =>
                  setSelectedGender(event.target.value)
                }
              />
              <InputField id="dob" label="D.O.B" type="date" />
              <InputField id="phone" label="Phone No." required />
              <InputField id="city" label="City" />
              <Dropdown
                options={countryObject}
                selectedValue={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                label="Country"
              />
              <div className="btnContainer">
                <Button
                  children="Submit"
                  onClick={() => console.log("Submit")}
                  disabled
                  className="submit-btn"
                />
                <Button
                  children="Cancel"
                  onClick={() => console.log("Cancel")}
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
            <Table data={contestData} onEdit={handleOnEdit} onDelete={handleOnDelete} />
          </div>
        </div>
        <hr />
      </div>
    </>
  );
}

export default App;
