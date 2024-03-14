import React, { useState,useEffect } from 'react';

const BookingDetails = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  // Function to load data from localStorage when the component mounts
  const loadDataFromLocalStorage = () => {
    const bookedData = localStorage.getItem('Booked');
    if (bookedData) {
      setSelectedSeats(JSON.parse(bookedData));
    }
  };

  // Load data when component mounts
  useEffect(() => {
    loadDataFromLocalStorage();
  }, []);

  const handleBookNow = () => {
    // Add logic to handle the booking process
    // This is just a placeholder
    alert(`Booking confirmed for seats: ${selectedSeats.join(', ')}`);
  };

  return (
    <div className="bg-white shadow-md rounded px-4 py-6">
      <h2 className="text-xl font-bold mb-4">Booking Details</h2>
      <ul className="list-disc pl-4 mb-4">
        {selectedSeats.map((seatId) => (
          <li key={seatId}>Seat {seatId}</li>
        ))}
      </ul>
      {selectedSeats.length > 0 && (
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded w-[40vw]"
          onClick={handleBookNow}
        >
          Book Now
        </button>
      )}
    </div>
  );
};

export default BookingDetails;
