import React from 'react';
import libraryData from './libraryData.json';
import { useNavigate } from 'react-router-dom';
const LibraryList = () => {
  let navigate = useNavigate();
  const handleButtonClick = () => {
    // Navigate to a specific route when a button is clicked
    navigate('/seatlayout')
  };
  return (
    <div className="container mx-auto mt-8">
      {libraryData.libraries.map((library, index) => (
        <div key={index} className="bg-white border shadow-lg rounded-lg overflow-hidden mx-auto mb-8">
          <div className="px-6 py-4">
            <h2 className="text-xl font-semibold mb-2 text-gray-800">{library.name}</h2>
            <p className="text-gray-600 mb-4">{library.address}</p>
            <div className="flex flex-wrap">
              {Object.entries(library.services).map(([slot, time]) => (
                <button 
                  key={slot}
                  className={`bg-blue-500 text-white py-2 px-4 rounded mr-2 mb-2 ${
                    time === 'Closed' ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  disabled={time === 'Closed'}
                  onClick={() => handleButtonClick()}
                >
                  {slot}: {time}
                </button>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LibraryList;
