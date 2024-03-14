import React from 'react'
import SeatBooking from './library/SeatBooking'
// import SidebarDropdown from './components/SideBar'
import SeatData from './library/SeatData.json'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import SeatLayout from './library/SeatLayout'
import BookingDetails from './library/BookingDetails'

const App = () => {
  // const[selectedTab, setSelectedTab]=useState("Home")
  return (
    <div>
      <BrowserRouter>
       <Routes>
        <Route path='/' element={<SeatBooking/>}/>
        <Route path='/seatlayout' element={<SeatLayout/>}/>
        <Route path='/bookingDetails' element={<BookingDetails/>}/>
       </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App