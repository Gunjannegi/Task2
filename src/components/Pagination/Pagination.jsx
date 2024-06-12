export const Pagination = ({ activeIndex }) => {
  return (
    <div className="flex justify-between items-center bg-gray-100">
      <div
        className={`text-center text-white text-lg w-1/2 p-6 max-sm:min-h-[104px] ${
          activeIndex === 1
            ? "bg-gradient-to-r from-blue-200 to-blue-400 rounded-r-full"
            : "bg-gradient-to-r from-blue-200 to-blue-400 outline-hidden"
        }`}
      >
        Your Profile
      </div>
      <div
        className={`text-center text-lg w-1/2 p-6 max-sm:min-h-[104px] ${
          activeIndex === 2
            ? "bg-gradient-to-r from-blue-400 to-blue-500 text-white rounded-r-full"
            : ""
        }`}
      >
        Business Information
      </div>
    </div>
  );
};
