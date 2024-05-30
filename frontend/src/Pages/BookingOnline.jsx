import React from 'react';
import TableBooking from '../component/newComponent/TableBooking';
import BookingForm1 from '../component/newComponent/BookingForm1';
import BookingForm2 from '../component/newComponent/BookingForm2';

const BookingOnline = () => {
  return (
    <div className="flex flex-col md:flex-row bg-white h-full">
      
      <div className="md:w-1/2 p-4 border-2 border-gray-100 shadow-md rounded-lg bg-white  my-14" style={{ width: '599px' ,height:'899px'}}>

        <h3 className="text-xl font-semibold mb-4 text-purple-700">BOOK ONLINE NOW</h3>
        <p>You can book multiple different jobs (such as fork repairs and tire fitting) if you want - to add different options add more information about the services you want in 'any other information' and we'll find the right options for you.</p>

        <p>You can book multiple different jobs if you wish (such as MOT and tyre fitting) – just use the ‘book other work’ button to add different options, and we’ll look for suitable options for you.</p>

        <p>You will need to make a payment online to secure your slot – for MOTs you’ll be charged the full MOT test fee when you book. For all other work, we’ll ask you to pay a deposit when you book and the remainder on the day.</p>

        <p>Please note: Online bookings not available for same-day. If you want to book for today then please call 077 224 5022</p>

        <p>If you have any questions, please contact us.</p>

        <p>*For our Free Service package, you’ll need to contact us to book.</p>
        <button className="bg-purple-700 text-white py-2 px-4 rounded mt-4 hover:bg-purple-800 transition duration-300">BOOK A SLOT ONLINE NOW</button>
      </div>
      
      <div className="md:w-1/2 p-4 bg-white">
        <BookingForm1 />
      </div>
    </div>
  );
};

export default BookingOnline;
