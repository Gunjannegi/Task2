import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaQuestionCircle } from "react-icons/fa";
export const BusinessInformation = ({ setAllFields, allFields }) => {

   // Function to handle changes in input fields of business info section
  const handleInputChange = (event) => {
    const inputElement = document.getElementsByName(event.target.name)[0];
    if (inputElement && inputElement.classList.contains("ring-red-300")) {
      inputElement.classList.remove("ring-1", "ring-red-300");
    }
    setAllFields((prevDetails) => ({
      ...prevDetails,
      [event.target.name]: event.target.value,
    }));
  };
  return (
    <div className="m-10">
      <h1 className="text-center text-gray-400">Step 2</h1>
      <h1 className="text-center text-[25px] text-blue-950">
        Business Information
      </h1>
      <p className="text-center">
        Please, enter information about your company.
      </p>
      <div>
        <h1 className="mt-6 text-blue-400">GENERAL INFORMATION</h1>
        <div className="grid md:grid-cols-2 max-md:grid-rows-6 gap-x-8 gap-y-4">
          <div className="grid grid-rows-2">
            <label>
              Brand Name<span className="text-blue-400">*</span>
            </label>
            <input
              name="brandname"
              placeholder="Input Your Brand Name"
              onChange={(e) => {
                if (/^[a-zA-Z\s|]*$/.test(e.target.value) || !e.target.value) {
                  handleInputChange(e);
                }
              }}
              value={allFields.brandname}
              className="border p-1 rounded-md focus:outline-none focus:border-0.5 focus:border-blue-400"
            />
          </div>
          <div className="grid grid-rows-2">
            <label className="flex items-center">
              Branch Type<span className="text-blue-400">*</span><span className="ml-4" 
              title={
              `Local: Brands with distribution in 3 divisions or less 
OR multiple divisions but a total of 150 stores or less.

National: Brands with distribution in 4 or more divisions 
or in more than 150 stores.`}><FaQuestionCircle size={15} color="gray"/></span>
            </label>
            <select
              name="branchtype"
              placeholder="Select Your Branch type"
              value={allFields.branchtype}
              onChange={handleInputChange}
              className="border p-1 rounded-md focus:outline-none focus:border-0.5 focus:border-blue-400 "
            >
              <option value="">Select</option>
              <option value="local">Local</option>
              <option value="national">National</option>
            </select>
          </div>
          <div className="grid grid-rows-2">
            <label>
              Street Address<span className="text-blue-400">*</span>
            </label>
            <input
              name="streetaddress"
              type="text"
              placeholder="Input Your Street Address"
              onChange={handleInputChange}
              value={allFields.streetaddress}
              className="border p-1 rounded-md focus:outline-none focus:border-0.5 focus:border-blue-400"
            />
          </div>
          <div className="grid grid-rows-2">
            <label>
              City<span className="text-blue-400">*</span>
            </label>
            <input
              name="city"
              placeholder="Input City"
              onChange={(e) => {
                if (/^[a-zA-Z\s|]*$/.test(e.target.value) || !e.target.value) {
                  handleInputChange(e);
                }
              }}
              value={allFields.city}
              className="border p-1 rounded-md focus:outline-none focus:border-0.5 focus:border-blue-400"
            />
          </div>
          <div className="grid grid-rows-2">
            <label>
              Zip Code<span className="text-blue-400">*</span>
            </label>
            <input
              name="zipcode"
              type="number"
              placeholder="Input Zip Code"
              onChange={(e) => {
                const newValue = e.target.value;
                if (!newValue || newValue.length <= 6) {
                  handleInputChange(e);
                }
              }}
              value={allFields.zipcode}
              className="border p-1 rounded-md focus:outline-none focus:border-0.5 focus:border-blue-400"
            />
          </div>
          <div className="grid grid-rows-2">
            <label>
              Tax ID Number<span className="text-blue-400">*</span>
            </label>
            <input
              name="tax"
              type="number"
              placeholder="Input Tax ID Number"
              value={allFields.tax}
              onChange={handleInputChange}
              className="border p-1 rounded-md focus:outline-none focus:border-0.5 focus:border-blue-400"
            />
          </div>
        </div>
        <h1 className="mt-6 text-blue-400">DOCUMENTS</h1>
        <p className="text-sm my-2">
          Once the following documnets are signed, you will be ready to get
          started.
        </p>
        <div className="flex items-center justify-between w-4/5 gap-4 mb-6">
          <p className="flex w-full justify-between items-center border rounded-md p-1">
            <span className="max-md:text-xs">Electronically sign the agreement(s)</span>
            <span>
              <FaCheck color="green" />
            </span>
          </p>
          <button className="bg-violet-600 rounded-md p-2 text-white">
            <MdKeyboardArrowRight />
          </button>
        </div>
        <div className="flex items-center justify-between w-4/5 gap-4">
          <p className="flex w-full justify-between items-center border rounded-md p-1">
            <span className="max-md:text-xs">
              Non adult beverage Kroger market supplier waiver and release
            </span>
            <span>
              <RxCross2 color="red" />
            </span>
          </p>
          <button className="bg-violet-600 rounded-md p-2 text-white">
            <MdKeyboardArrowRight />
          </button>
        </div>
        <h1 className="mt-6 text-blue-400">COI PDF UPLOAD</h1>
        <p className="text-sm my-2">
          Once the following documnets are signed, you will be ready to get
          started.
        </p>
        <div className="flex items-center justify-between w-4/5 gap-4">
          <p className="flex w-full justify-between items-center border rounded-md p-1">
            <span className="max-md:text-xs">Electronically sign the agreement(s)</span>
            <span>
              <FaCheck color="green" />
            </span>
          </p>
          <button className="bg-violet-600 rounded-md p-2 text-white">
            <MdKeyboardArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};
