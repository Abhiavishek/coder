// src/components/ModuleDropdown.js
import React, { useState } from 'react';
import ResourceComponent from './ResourceComponent';
import { SlArrowRight } from "react-icons/sl";
import { SlArrowDown } from "react-icons/sl";
const ModuleDropdown = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isDropdownOpen1, setDropdownOpen1] = useState(false);

  const [modules, setModules] = useState([]);
  const [moduleCount, setModuleCount] = useState(1);
  const [selectedModule, setSelectedModule] = useState(null);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
    setDropdownOpen1(!isDropdownOpen1)
    setSelectedModule(null); // Close inner module dropdown when closing main dropdown
  };

  const addModule = () => {
    const newModule = {
      name: `Module ${moduleCount}`,
      resources: [`Resource 1`, `Resource 2`, `Resource 3`],
    };
    setModules([...modules, newModule]);
    setModuleCount(moduleCount + 1);
  };

  const handleModuleSelect = (index) => {
    if (index === selectedModule) {
      setSelectedModule(null); // Collapse module dropdown when clicking the same module
    } else {
      setSelectedModule(index);
    }
  };

  return (
    <div className="relative w-[80vw] h-[100vh]">
      <div>
      <div
        onClick={toggleDropdown}
        className="relative mx-auto mt-2 bg-white p-4 rounded-md shadow-md border border-black w-[60vw] cursor-pointer  hover:bg-gray-200 mt-3">
           <div className="flex items-center">
              {isDropdownOpen ? (
                <SlArrowDown className="mr-2" />
              ) : (
                <SlArrowRight className="mr-2" />
              )}
              Module
            </div>
      </div>

      {isDropdownOpen && (
        <div className="relative mx-auto mt-2 bg-white p-4 rounded-md shadow-md border border-black w-[60vw] items-center "
        >
        

          {modules.map((module, index) => (
            <div key={index} className="relative items-center">
              <div
                className="block text-gray-800 py-2 hover:bg-gray-200 cursor-pointer rounded-lg pl-5"
                onClick={() => handleModuleSelect(index)}
              >
   <div className="flex items-center">
              {isDropdownOpen1 ? (
                <SlArrowDown className="mr-2" />
              ) : (
                <SlArrowRight className="mr-2" />
              )}
              {module.name}
            </div>              </div>

              {selectedModule === index && (
                <div className="relative mt-2 bg-white p-4 rounded-md shadow-md border border-black w-[57vw] ml-1">
                
                  <h3 className="text-lg font-bold">{module.name}</h3>
                  <ResourceComponent/>
                </div>
              )}
            </div>
          ))}
            <button
            onClick={addModule}
            className="block text-gray-800 py-2 hover:bg-gray-200 cursor-pointer w-[58vw] rounded-lg"
          >
            + Add Module
          </button>
        </div>
      )}
      </div>
    </div>
  );
};

export default ModuleDropdown;
