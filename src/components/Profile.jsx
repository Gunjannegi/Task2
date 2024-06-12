export const Profile = ({ setAllFields, allFields }) => {
  // Function to handle changes in input fields of profile section
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
      <h1 className="text-center text-gray-400">Step 1</h1>
      <h1 className="text-center text-[25px] text-blue-950">Your Profile</h1>
      <p className="text-center">
        Enter the login information for your account. You will
      </p>
      <p className="text-center">
        be able to create additional users after registering.
      </p>
      <form className="grid md:grid-cols-2 max-md:grid-rows-6 gap-x-8 gap-y-4 m-8">
        <div className="grid grid-rows-2">
          <label>
            First Name<span className="text-blue-400">*</span>
          </label>
          <input
            name="firstname"
            placeholder="Input Your First Name"
            onChange={(e) => {
              // Allow only alphabetic characters and backspace
              if (/^[a-zA-Z]*$/.test(e.target.value) || !e.target.value) {
                handleInputChange(e);
              }
            }}
            value={allFields.firstname}
            className="border p-1 rounded-md focus:outline-none focus:border-0.5 focus:border-blue-400"
          />
        </div>
        <div className="grid grid-rows-2">
          <label>
            Last Name<span className="text-blue-400">*</span>
          </label>
          <input
            name="lastname"
            placeholder="Input Your Last Name"
            onChange={(e) => {
              // Allow only alphabetic characters and backspace
              if (/^[a-zA-Z]*$/.test(e.target.value) || !e.target.value) {
                handleInputChange(e);
              }
            }}
            value={allFields.lastname}
            className="border p-1 rounded-md focus:outline-none focus:border-0.5 focus:border-blue-400"
          />
        </div>
        <div className="grid grid-rows-2">
          <label>
            Email<span className="text-blue-400">*</span>
          </label>
          <input
            name="email"
            type="email"
            placeholder="Input Your Email"
            value={allFields.email}
            onChange={handleInputChange}
            className="border p-1 rounded-md focus:outline-none focus:border-0.5 focus:border-blue-400"
          />
        </div>
        <div className="grid grid-rows-2">
          <label>
            Phone Number<span className="text-blue-400">*</span>
          </label>
          <input
            name="phoneNo"
            type="number"
            placeholder="Input Your Phone Number"
            onChange={(e) => {
              //Allow only 10 digits for phone number.
              const newValue = e.target.value;
              if (!newValue || newValue.length <= 10) {
                handleInputChange(e);
              }
            }}
            value={allFields.phoneNo}
            className="border p-1 rounded-md focus:outline-none focus:border-0.5 focus:border-blue-400"
          />
        </div>
        <div className="grid grid-rows-2">
          <label>
            Password<span className="text-blue-400">*</span>
          </label>
          <input
            name="password"
            type="password"
            placeholder="Create Password"
            value={allFields.password}
            onChange={handleInputChange}
            className="border p-1 rounded-md focus:outline-none focus:border-0.5 focus:border-blue-400"
          />
        </div>
        <div className="grid grid-rows-2">
          <label>
            Confirm Password<span className="text-blue-400">*</span>
          </label>
          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirm Your Password"
            value={allFields.confirmPassword}
            onChange={handleInputChange}
            className="border p-1 rounded-md focus:outline-none focus:border-0.5 focus:border-blue-400"
          />
        </div>
      </form>
    </div>
  );
};
