export const countryObject = [
  { value: "India", label: "India" },
  { value: "USA", label: "USA" },
  { value: "Singapore", label: "Singapore" },
  { value: "UAE", label: "UAE" },
];

// Initial contest data
export const contestDataArr = [
  {
    fullName: "Satyam Tripathi",
    email: "satyam123@gmail.com",
    gender: "Male",
    dob: "1998-11-21",
    phone: "0987654321",
    city: "Lucknow",
    country: "India",
  },
  {
    fullName: "Alex",
    email: "alex123@gmail.com",
    gender: "Male",
    dob: "1998-01-22",
    phone: "0927654321",
    city: "Paris",
    country: "USA",
  },
];

// Error message constants
export const ERROR_FULL_NAME_REQUIRED =
  "Full Name is required and should be at least 3 characters long.";
export const ERROR_INVALID_EMAIL = "Please enter a valid email address.";
export const ERROR_INVALID_PHONE = "Please enter a valid 10-digit phone number.";
export const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d\d$/;