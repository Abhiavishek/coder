import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import classNames from 'classnames';
import LibraryList from './LibraryList';

const timeSlots = ['Morning', 'Afternoon', 'Evening'];

const seatsAvailability = {
  Morning: [true, false, true, false, true],
  Afternoon: [true, true, false, true, false],
  Evening: [false, true, false, true, true],
};

const LibrarySeatBooking = () => {
  const [libraryName] = useState("Shunya Vighyan");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedSlot(null);
    setSelectedSeats([]);
  };

  const handleSlotSelection = (slot) => {
    setSelectedSlot(slot);
  };

  const handleSeatSelection = (index) => {
    if (!selectedSeats.includes(index)) {
      setSelectedSeats([...selectedSeats, index]);
    } else {
      setSelectedSeats(selectedSeats.filter((seatIndex) => seatIndex !== index));
    }
  };

  const isSeatSelected = (index) => {
    return selectedSeats.includes(index);
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">{libraryName} Library Seat Booking</h1>
      <hr className="mb-4" />

      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Select a Date</h2>
        <DatePicker selected={selectedDate} onChange={handleDateChange} minDate={new Date()} maxDate={new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)} dateFormat="MMMM d, yyyy" className="p-2 border rounded" />
      </div>
      <div className='border-spacing-1'>
      <LibraryList/>
      </div>

      </div>

    )
};

export default LibrarySeatBooking;
