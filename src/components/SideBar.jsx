import React, { useState } from "react";
import ModuleDropdown from "./ModuleDropdown";
import { SlArrowRight } from "react-icons/sl";
import { SlArrowDown } from "react-icons/sl";

const SidebarDropdown = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [weeks, setWeeks] = useState([]);
  const [weekCount, setWeekCount] = useState(1);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const addWeek = () => {
    const newWeek = `Week ${weekCount}`;
    setWeeks([...weeks, newWeek]);
    setWeekCount(weekCount + 1);
  };

  return (
    <div className="relative w-[100vw] bg-fuchsia-400 h-[100vh] flex">
      <div className="relative w-[20vw] bg-white rounded-md shadow-md h-[100dvh]">
        <div className="flex justify-center">
          <div
            onClick={toggleDropdown}
            className={`block w-[20vw] text-center text-gray-800 px-4 py-2 mt-4  rounded-md focus:outline-none transition duration-300 border-2 cursor-pointer ${
              isDropdownOpen ? "border-black" : "border-none"
            } ${
              isDropdownOpen ? "bg-[#eef1f1]" : "bg-none"
            } hover:border-black hover:text-gray-900 focus:bg-gray-300 w-98`}
          >
            <div className="flex items-center">
              {isDropdownOpen ? (
                <SlArrowDown className="mr-2" />
              ) : (
                <SlArrowRight className="mr-2" />
              )}
              Course Material
            </div>
          </div>
        </div>

        {isDropdownOpen && (
          <div className="relative mx-auto mt-2 bg-white p-4 rounded-md shadow-md border border-black align-middle">
            {weeks.map((week, index) => (
              <div
                key={index}
                className=" text-gray-800 py-2 hover:bg-gray-200 transition duration-300 flex justify-center items-center cursor-pointer rounded-lg"
              >
                <div className="rounded-full bg-bg-gray-200 w-4 h-4 mr-2 border border-gray-400"></div>{" "}
                {/* Circle with border */}
                {week}
              </div>
            ))}
            <div
              onClick={addWeek}
              className=" text-gray-800 py-2 cursor-pointer hover:bg-gray-200 mb-2 transition duration-300 flex justify-center rounded-lg"
            >
              + Add Week
            </div>
          </div>
        )}
      </div>
      <div className=" w-[80vw] h-[100vh] bg-[rgb(255,255,255)] flex justify-center">
        <ModuleDropdown />
      </div>
    </div>
  );
};

export default SidebarDropdown;
