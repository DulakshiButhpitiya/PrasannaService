// import React, { useState } from 'react';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import { Link } from 'react-router-dom';
// import { format, addDays, isBefore, isSameDay } from 'date-fns';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faClock } from '@fortawesome/free-solid-svg-icons';

// const BookingForm2 = () => {
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [bookedDates, setBookedDates] = useState([
//     { date: new Date(), time: '10:00' }, // Example of a pre-booked date
//   ]);
//   const [confirmationMessage, setConfirmationMessage] = useState('');

//   const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
//   const timeSlots = [
//     { value: '10:00', label: '10:00 AM' },
//     { value: '11:00', label: '11:00 AM' },
//     { value: '12:00', label: '12:00 PM' },
//     { value: '01:00', label: '01:00 PM' },
//     { value: '02:00', label: '02:00 PM' },
//     { value: '03:00', label: '03:00 PM' },
//     { value: '04:00', label: '04:00 PM' },
//     { value: '05:00', label: '05:00 PM' },
//   ];

//   const onDateChange = (direction) => {
//     const newDate = addDays(selectedDate, direction === 'next' ? 1 : -1);
//     if (isBefore(newDate, new Date())) return;
//     setSelectedDate(newDate);
//   };

//   const onTimeSlotChange = (event) => {
//     const selectedTime = event.target.value;
//     const selectedDateTime = new Date(selectedDate);
//     const selectedDateTimeString = format(selectedDateTime, 'MMMM d, yyyy');
//     setConfirmationMessage(`You selected a booking at ${selectedTime} on ${selectedDateTimeString}`);
//     setTimeout(() => setConfirmationMessage(''), 3000); // Clear message after 3 seconds
//   };

//   const formattedDate = format(selectedDate, 'EEEE, MMMM do, yyyy');

//   const isDateBooked = (date, time) =>
//     bookedDates.some(
//       (booking) => isSameDay(booking.date, date) && booking.time === time
//     );

//   return (
//     <div className="container mx-auto p-4 my-4 border-2 shadow-lg rounded-lg bg-white">
//       <h1 className="text-3xl font-bold text-center mb-4 text-indigo-600 flex justify-center items-center">
//         Select Time <FontAwesomeIcon icon={faClock} className="ml-2 text-yellow-500" />
//       </h1>
//       <div className="flex justify-between items-center mb-4">
//         <button
//           className="px-2 py-1 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md focus:outline-none"
//           onClick={() => onDateChange('prev')}
//           disabled={isBefore(addDays(selectedDate, -1), new Date())}
//         >
//           <ChevronLeftIcon />
//         </button>
//         <span className="text-xl font-medium">{formattedDate}</span>
//         <button
//           className="px-2 py-1 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md focus:outline-none"
//           onClick={() => onDateChange('next')}
//         >
//           <ChevronRightIcon />
//         </button>
//       </div>
//       <div className="grid grid-cols-6 gap-4 border-t border-l border-gray-300">
//         {days.map((day, index) => {
//           const dayDate = addDays(selectedDate, index);
//           return (
//             <div key={day} className="border-r border-b border-gray-300 p-2">
//               <p className="font-medium mb-2">{format(dayDate, 'EEE, MMM d')}</p>
//               {timeSlots.map((timeSlot) => {
//                 const isBooked = isDateBooked(dayDate, timeSlot.value);
//                 return (
//                   <div key={timeSlot.value} className="mb-2">
//                     <label className="flex items-center cursor-pointer">
//                       <input
//                         type="radio"
//                         name="timeSlot"
//                         value={timeSlot.value}
//                         onChange={onTimeSlotChange}
//                         className="mr-2"
//                         disabled={isBooked}
//                       />
//                       <span className={isBooked ? 'text-red-500 line-through' : ''}>
//                         {timeSlot.label}
//                       </span>
//                     </label>
//                   </div>
//                 );
//               })}
//             </div>
//           );
//         })}
//       </div>
//       {confirmationMessage && (
//         <p className="text-green-500 text-center mt-4">{confirmationMessage}</p>
//       )}
//       <div className="flex justify-between mt-4">
//         <Link to="/booking">
//           <button className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md focus:outline-none">
//             Previous
//           </button>
//         </Link>
//         <Link to="/bookingform3">
//           <button className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md focus:outline-none">
//             Next
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default BookingForm2;


import React, { useState } from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from 'react-router-dom';
import { format, addDays, isBefore, isSameDay } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

const BookingForm2 = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [bookedDates, setBookedDates] = useState([
    { date: new Date(), time: '10:00' }, // Example of a pre-booked date
  ]);

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  const timeSlots = [
    { value: '10:00', label: '10:00 AM' },
    { value: '11:00', label: '11:00 AM' },
    { value: '12:00', label: '12:00 PM' },
    { value: '01:00', label: '01:00 PM' },
    { value: '02:00', label: '02:00 PM' },
    { value: '03:00', label: '03:00 PM' },
    { value: '04:00', label: '04:00 PM' },
    { value: '05:00', label: '05:00 PM' },
  ];

  const onDateChange = (direction) => {
    const newDate = addDays(selectedDate, direction === 'next' ? 1 : -1);
    if (isBefore(newDate, new Date())) return;
    setSelectedDate(newDate);
  };

  const onTimeSlotChange = (event) => {
    const selectedTime = event.target.value;
    // Add any additional logic for handling time slot selection if needed
  };

  const formattedDate = format(selectedDate, 'EEEE, MMMM do, yyyy');

  const isDateBooked = (date, time) =>
    bookedDates.some(
      (booking) => isSameDay(booking.date, date) && booking.time === time
    );

  return (
    <div className="container mx-auto p-4 my-4 border-2 shadow-lg rounded-lg bg-white">
      <h1 className="text-3xl font-bold text-center mb-4 text-indigo-600 flex justify-center items-center">
        Select Time <FontAwesomeIcon icon={faClock} className="ml-2 text-yellow-500" />
      </h1>
      <div className="flex justify-between items-center mb-4">
        <button
          className="px-2 py-1 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md focus:outline-none"
          onClick={() => onDateChange('prev')}
          disabled={isBefore(addDays(selectedDate, -1), new Date())}
        >
          <ChevronLeftIcon />
        </button>
        <span className="text-xl font-medium">{formattedDate}</span>
        <button
          className="px-2 py-1 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md focus:outline-none"
          onClick={() => onDateChange('next')}
        >
          <ChevronRightIcon />
        </button>
      </div>
      <div className="grid grid-cols-6 gap-4 border-t border-l border-gray-300">
        {days.map((day, index) => {
          const dayDate = addDays(selectedDate, index);
          return (
            <div key={day} className="border-r border-b border-gray-300 p-2">
              <p className="font-medium mb-2">{format(dayDate, 'EEE, MMM d')}</p>
              {timeSlots.map((timeSlot) => {
                const isBooked = isDateBooked(dayDate, timeSlot.value);
                return (
                  <div key={timeSlot.value} className="mb-2">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="timeSlot"
                        value={timeSlot.value}
                        onChange={onTimeSlotChange}
                        className="mr-2"
                        disabled={isBooked}
                      />
                      <span className={isBooked ? 'text-red-500 line-through' : ''}>
                        {timeSlot.label}
                      </span>
                    </label>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    
      <div className="flex justify-between mt-4">
        <Link to="/booking">
          <button className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md focus:outline-none">
            Previous
          </button>
        </Link>
        <Link to="/bookingform3">
          <button className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md focus:outline-none">
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BookingForm2;
