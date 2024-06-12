import { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { Profile } from "./components/Profile";
import { BusinessInformation } from "./components/BusinessInformation";
import { Pagination } from "./components/Pagination/Pagination";
function App() {
  //State to switch between sections
  const [next, setNext] = useState(1);
  //State to store all the details
  const [allFields, setAllFields] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phoneNo: "",
    password: "",
    confirmPassword: "",
    brandname: "",
    branchtype: "",
    streetaddress: "",
    city: "",
    zipcode: "",
    tax: "",
  });
  
  //Function for validations
  const validateRequiredFields = (requiredFields) => {
    const emptyFields = requiredFields.filter((field) => !allFields[field]);
    if (emptyFields.length > 0) {
      alert(`Please fill in all required fields`);
      emptyFields.forEach((field) => {
        const inputElement = document.getElementsByName(field)[0];
        inputElement.classList.add("ring-1", "ring-red-300");
      });
      return;
    }
    if (next === 1) {
      const validationChecks = [
        {
          field: "email",
          pattern: /^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
          message: "Please enter a valid email address.",
        },
        {
          field: "phoneNo",
          length: 10,
          message: "Phone number should be exactly 10 digits long.",
        },
      ];
      if (!validationChecks[0].pattern.test(allFields.email)) {
        alert(validationChecks[0].message);
        const inputElement = document.getElementsByName(
          validationChecks[0].field
        )[0];
        inputElement.classList.add("ring-1", "ring-red-300");
        return;
      } else if (validationChecks[1].length !== allFields.phoneNo.length) {
        alert(validationChecks[1].message);
        const inputElement = document.getElementsByName(
          validationChecks[1].field
        )[0];
        inputElement.classList.add("ring-1", "ring-red-300");
        return;
      }
      if (allFields.password === allFields.confirmPassword) {
        setNext((prev) => prev + 1);
      } else {
        alert("Passwords do not match.");
      }
    } else if (next === 2) {
      if (allFields.zipcode.length !== 6) {
        alert("Zip code should be exactly 6 digits long.");
        const inputElement = document.getElementsByName("zipcode")[0];
        inputElement.classList.add("ring-1", "ring-red-300");
        return;
      }
      localStorage.setItem("allDetails", JSON.stringify(allFields));
      alert("Data is saved");
      setNext(1);
      setAllFields({firstname: "",
      lastname: "",
      email: "",
      phoneNo: "",
      password: "",
      confirmPassword: "",
      brandname: "",
      branchtype: "",
      streetaddress: "",
      city: "",
      zipcode: "",
      tax: "",})
    }
  };
  
  //Function to handle next button functionality
  const handleNext = () => {
    validateRequiredFields([
      "firstname",
      "lastname",
      "email",
      "phoneNo",
      "password",
      "confirmPassword",
    ]);
  };

  //Function to handle previous button functionality
  const handlePrevious = () => {
    setNext((prev) => prev - 1);
  };

  //Function to handle save button functionality
  const handleSave = () => {
    validateRequiredFields([
      "brandname",
      "branchtype",
      "streetaddress",
      "city",
      "zipcode",
      "tax",
    ]);
  };

  return (
    <>
      <div className="max-md:m-0 max-md:mb-4 md:m-6">
        <div className="flex justify-between m-6">
          <div></div>
          <span className="text-lg text-violet-600 font-medium max-md:text-sm">
            Create New Account
          </span>
          <span className=" text-violet-600 font-medium max-md:text-xs" >Contact Us</span>
        </div>
        <div className="m-auto my-10 max-md:w-full  md:w-4/5 max-w-[1000px] shadow-custom rounded-xl border">
          <Pagination activeIndex={next} />
          {next === 1 && (
            <Profile setAllFields={setAllFields} allFields={allFields} />
          )}
          {next === 2 && (
            <BusinessInformation
              setAllFields={setAllFields}
              allFields={allFields}
            />
          )}
        </div>
        <div className="flex items-center mx-7 justify-between">
          <button className="text-blue-400 flex items-center  transition duration-300">
            <span className="mr-2">
              <MdKeyboardArrowLeft />
            </span>
            <span className="max-md:text-xs">Back to Login</span>
          </button>
          {next === 2 && (
            <div className="flex gap-2 ">
              <button
                onClick={handlePrevious}
                className="text-violet-600 flex items-center border border-violet-600 px-4 py-1 rounded-lg transition duration-300"
              >
                <span className="mr-2">
                  <MdKeyboardArrowLeft />
                </span>
                <span className="max-md:text-xs">Previous Step</span>
              </button>
              <button>
                <button
                  className="text-white text-lg bg-violet-600 px-4 py-1 rounded-lg flex  items-center  transition duration-300"
                  onClick={handleSave}
                >
                  <span className="max-md:text-xs">Save</span>
                  <span className="mx-2">
                    <MdKeyboardArrowRight />
                  </span>
                </button>
              </button>
            </div>
          )}
          {next === 1 && (
            <button
              className="text-white text-lg bg-violet-600 px-4 py-1 rounded-lg flex  items-center  transition duration-300 max-md:w-[100px]"
              onClick={handleNext}
            >
              <span className="max-md:text-xs">Next Step</span>
              <span className="mx-2">
                <MdKeyboardArrowRight />
              </span>
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
