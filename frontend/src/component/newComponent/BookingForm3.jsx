
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Form, Col, Row, Button, InputGroup } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar, faClock } from '@fortawesome/free-solid-svg-icons';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import { format, addDays, isBefore, isSameDay } from 'date-fns';

// const BookingForm3 = () => {

//   const [currentStep, setCurrentStep] = useState(1);

//   const handleNextStep = () => setCurrentStep((prevStep) => prevStep + 1);
//   const handlePrevStep = () => setCurrentStep((prevStep) => prevStep - 1);

//   const BookingForm1 = () => {
//     const [validated, setValidated] = useState(false);
//     const [errors, setErrors] = useState({ file: '' });

//     const handleSubmit = (event) => {
//       const form = event.currentTarget;
//       if (form.checkValidity() === false) {
//         event.preventDefault();
//         event.stopPropagation();
//       }

//       setValidated(true);
//     };

//     const handleChange = (event) => {
//       const file = event.target.files[0];
//       if (!file) {
//         setErrors({ file: 'Please upload a file.' });
//       } else {
//         setErrors({ file: '' });
//       }
//     };

//     return (
//        <div className="border-2 border-gray-300 rounded-lg p-4 w-full max-w-md mx-auto mt-5 mb-4 shadow-lg"style={{ maxWidth: '550px' }}>
//         <h1 className="text-3xl font-bold text-center mb-4 text-gray-700 flex justify-center items-center">
//           Booking Online Now <FontAwesomeIcon icon={faStar} className="ml-2 text-emerald-400" />
//         </h1>
//         <div className="bg-secondary h-0.5 mx-auto md:mx- mb-2" style={{ width: '361px' }}></div>
//         <h2 className="text-xl font-semibold text-center mb-6 text-sky-900">Your Details</h2>
//         <Form noValidate validated={validated} onSubmit={handleSubmit}>
//           <Row className="mb-3">
//             <Form.Group as={Col} md="6" controlId="validationCustom01">
//               <Form.Label className="text-indigo-600">First name</Form.Label>
//               <Form.Control
//                 required
//                 type="text"
//                 placeholder="First name"
//                 defaultValue="Mark"
//                 className="border-2 border-blue-400"
//               />
//               <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//             </Form.Group>
//             <Form.Group as={Col} md="6" controlId="validationCustom02">
//               <Form.Label className="text-indigo-600">Last name</Form.Label>
//               <Form.Control
//                 required
//                 type="text"
//                 placeholder="Last name"
//                 defaultValue="Otto"
//                 className="border-2 border-blue-400"
//               />
//               <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//             </Form.Group>
          
//           </Row>
//           <Row className="mb-3">
//             <Form.Group as={Col} md="6" controlId="validationCustom05">
//               <Form.Label className="text-indigo-600">Address</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="45 Nittbu Rd, Colombo"
//                 required
//                 className="border-2 border-blue-400"
//               />
//               <Form.Control.Feedback type="invalid">
//                 Please provide your address.
//               </Form.Control.Feedback>
//             </Form.Group>
//             <Form.Group as={Col} md="6" controlId="formGroupEmail">
//               <Form.Label className="text-indigo-600">Email</Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="Enter Email"
//                 required
//                 className="border-2 border-blue-400"
//               />
//               <Form.Control.Feedback type="invalid">
//                 Please provide your email.
//               </Form.Control.Feedback>
//             </Form.Group>

//             <Form.Group as={Col} md="6" controlId="validationCustom06">
//               <Form.Label className="text-indigo-600">Contact Number</Form.Label>
//               <Form.Control
//                 type="tel"
//                 placeholder="Phone Number"
//                 required
//                 className="border-2 border-blue-400"
//               />
//               <Form.Control.Feedback type="invalid">
//                 Please provide your contact number.
//               </Form.Control.Feedback>
//             </Form.Group>
//           </Row>
       

//           <h2 className="text-xl font-semibold text-center mb-6 text-sky-900">Service Information</h2>
//         <div className="bg-secondary h-0.5 mx-auto mt- mb-1" style={{ width: '266px' }}></div>
//         <Form.Group as={Col} controlId="formGridState">
//             <Form.Label className="text-indigo-600">Bike Model</Form.Label>
//             <Form.Select defaultValue="Choose..." className="border-2 border-blue-400">
//               <option>Choose...</option>
//               <option>Maestro</option>
//               <option>Pleasure</option>
//               <option>I Smart</option>
//               <option>Discovery</option>
//             </Form.Select>
//           </Form.Group>
//           <Form.Group as={Col} md="4" controlId="validationCustom03">
//             <Form.Label className="text-indigo-600">Registration Number</Form.Label>
//             <Form.Control
//               required
//               type="text"
//               placeholder="Reg No"
//               defaultValue="BBC 3465"
//               className="border-2 border-blue-400"
//             />
//             <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//           </Form.Group>
          
//           <Form.Group as={Col} md="4" controlId="validationCustom04">
//             <Form.Label className="text-indigo-600">Mileage</Form.Label>
//             <Form.Control
//               required
//               type="text"
//               placeholder="24599Km"
//               defaultValue="24599Km"
//               className="border-2 border-blue-400"
//             />
//             <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//           </Form.Group>
//           <Form.Group as={Col} controlId="formGridState">
//             <Form.Label className="text-indigo-600">Service Type</Form.Label>
//           <Form.Select defaultValue="Choose..." className=" border-2 border-blue-400">
//               <option >Choose...</option>
//               <option>Full Service</option>
//               <option>Normal Service</option>
//               <option>Washing</option>
//               <option>Oil Change</option>
//               <option>Repair</option>
//               <option>Other</option>
//             </Form.Select>
//           </Form.Group>
//           <Form.Group className="mb-3 " controlId="exampleForm.ControlTextarea1 ">
//         <Form.Label className=" text-indigo-600">Any other information</Form.Label>
//         <Form.Control as="textarea"   className="border-2 border-blue-400" rows={3} />
//       </Form.Group>
    
//         <Form.Group className="mb-3 text-indigo-600">
//           <Form.Check
//             required
//             label="Agree to terms and conditions"
//             feedback="You must agree before submitting."
//             feedbackType="invalid"
//           />
//         </Form.Group>
//           <Button type="button" onClick={handleNextStep} className="w-44" style={{ maxWidth: '99px' }}>
//             Next
//           </Button>
//         </Form>
//       </div>
//     );
//   };

//   const BookingForm2 = () => {
//     const [selectedDate, setSelectedDate] = useState(new Date());
//     const [bookedDates, setBookedDates] = useState([
//       { date: new Date(), time: '10:00' }, // Example of a pre-booked date
//     ]);
//     const [confirmationMessage, setConfirmationMessage] = useState('');

//     const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
//     const timeSlots = [
//       { value: '08:30', label: '08:30 AM' },
//       { value: '10:00', label: '10:00 AM' },
//       { value: '11:00', label: '11:00 PM' },
//       { value: '12:00', label: '12:00 PM' },
//       { value: '01:00', label: '01:00 PM' },
//       { value: '02:00', label: '02:00 PM' },
//       { value: '03:00', label: '03:00 PM' },
//       { value: '04:00', label: '04:00 PM' },
//     ];

//     const onDateChange = (direction) => {
//       const newDate = addDays(selectedDate, direction === 'next' ? 1 : -1);
//       if (isBefore(newDate, new Date())) return;
//       setSelectedDate(newDate);
//     };

//     const onTimeSlotChange = (event) => {
//       const selectedTime = event.target.value;
//       const selectedDateTime = new Date(selectedDate);
//       const selectedDateTimeString = format(selectedDateTime, 'MMMM d, yyyy');
//       setConfirmationMessage(`You selected a booking at ${selectedTime} on ${selectedDateTimeString}`);
//       setTimeout(() => setConfirmationMessage(''), 3000); // Clear message after 3 seconds
//     };

//     const formattedDate = format(selectedDate, 'EEEE, MMMM do, yyyy');

//     const isDateBooked = (date, time) =>
//       bookedDates.some(
//         (booking) => isSameDay(booking.date, date) && booking.time === time
//       );

//     return (


//   <div className="container mx-auto p-4 my-4 border-2 shadow-lg rounded-lg bg-white">
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
      
//       <div className="flex justify-between mt-6">
//           <Button type="button" onClick={handlePrevStep} className="w-44 border-2 border-gray-300 rounded mb-10 ml-5"style={{ maxWidth: '120px' }}>
//             Previous
//          </Button>

       
       
//         <Button type="button" onClick={handleNextStep} className="w-44 border-2 border-gray-300 rounded mb-10 mr-5"style={{ maxWidth: '120px' }}>
//            Next
//          </Button>
       
//       </div>
//     </div>
//   );
// };
//   const BookingForm3 = () => {
//     return (
//       <div className="border border-gray-300 rounded-lg p-0 w-full max-w-md mx-auto mb-4 mt-5 shadow-md"style={{ maxWidth: '800px' }}>
//         <h1 className="text-3xl font-bold text-center mb-4 text-indigo-600 flex justify-center items-center mt-5">
//           Booking Confirmation <FontAwesomeIcon icon={faClock} className="ml-2 text-yellow-500" />
//         </h1>
//         <div className="bg-secondary h-0.5 mx-auto md:mx- mb-2" style={{ width: '361px' }}></div>
//         <h2 className="text-xl font-semibold text-center mb-6 text-indigo-600">Confirm Your Booking</h2>
//         <div className="bg-white rounded-lg shadow-lg p-6 w-2/3 mx-auto">
//           <p className="text-lg text-center text-indigo-600">
//             Your booking has been successfully completed. We look forward to serving you.
//           </p>
//           <div className="flex justify-center mt-6">
//             <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded w-37">
//               Back to Home
//             </Link>
//           </div>
//         </div>
//         <div className="flex justify-between mt-6">
//           <Button type="button" onClick={handlePrevStep} className="w-37 mb-3 ml-4">
//             Previous
//           </Button>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div>
//       {currentStep === 1 && <BookingForm1 />}
//       {currentStep === 2 && <BookingForm2 />}
//       {currentStep === 3 && <BookingForm3 />}
//     </div>
//   );
// };
// export default BookingForm3;

  //     <div className="border border-gray-300 rounded-lg p-0 w-full max-w-md mx-auto mb-3 mt-5 shadow-md"style={{ maxWidth: '800px' }}>
  //       <h1 className="text-3xl font-bold text-center mb-4 text-indigo-600 flex justify-center items-center mt-5">
  //         Select Time <FontAwesomeIcon icon={faClock} className="ml-2 text-yellow-500" />
  //       </h1>
  //       <div className="bg-secondary h-0.5 mx-auto md:mx- mb-2" style={{ width: '361px' }}></div>
  //       <h2 className="text-xl font-semibold text-center mb-6 text-indigo-600">Select Date and Time</h2>
  //       <div className="bg-white rounded-lg shadow-lg p-6 w-2/3 mx-auto">
  //         <div className="flex items-center justify-between mb-4">
  //           <button
  //             onClick={() => onDateChange('prev')}
  //             className="bg-yellow-400 text-white px-3 py-1 rounded-full"
  //           >
  //             <ChevronLeftIcon />
  //           </button>
  //           <h3 className="text-xl font-bold text-indigo-600">{formattedDate}</h3>
  //           <button
  //             onClick={() => onDateChange('next')}
  //             className="bg-yellow-400 text-white px-3 py-1 rounded-full"
  //           >
  //             <ChevronRightIcon />
  //           </button>
  //         </div>
  //         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
  //           {timeSlots.map((slot) => (
  //             <label key={slot.value} className="inline-flex items-center">
  //               <input
  //                 type="radio"
  //                 name="timeSlot"
  //                 value={slot.value}
  //                 onChange={onTimeSlotChange}
  //                 className="form-radio text-indigo-600 border-blue-400"
  //                 disabled={isDateBooked(selectedDate, slot.value)}
  //               />
  //               <span className="ml-2 text-indigo-600">{slot.label}</span>
  //             </label>
  //           ))}
  //         </div>
  //         {confirmationMessage && (
  //           <div className="mt-4 text-green-500 font-bold">{confirmationMessage}</div>
  //         )}
  //       </div>
  //       <div className="flex justify-between mt-6">
  //         <Button type="button" onClick={handlePrevStep} className="w-44 border-2 border-gray-300 rounded mb-10 ml-5"style={{ maxWidth: '120px' }}>
  //           Previous
  //         </Button>
  //         <Button type="button" onClick={handleNextStep} className="w-44 border-2 border-gray-300 rounded mb-10 mr-5"style={{ maxWidth: '120px' }}>
  //           Next
  //         </Button>
  //       </div>
  //     </div>
  //   );
  // };


  // import React from 'react';
// import { Form, Col, Row, Button } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const BookingForm3 = () => {
//   const handleBackClick = () => {
//     // Implement your back navigation logic here
//     window.history.back();
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100 mt-8 mb-8">
//       <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg m-4">
//         <Form>
//           <h2 className="text-xl font-semibold text-center mb-6 text-sky-900">Payment Method</h2>
//           <div className="bg-secondary h-0.5 mx-auto mb-2" style={{ width: '361px' }}></div>
          
//           <Row className="mb-3">
//             <Form.Group as={Col} md="12" controlId="validationCustom03">
//               <Form.Label className="text-sky-900">Email</Form.Label>
//               <Form.Control
//                 required
//                 type="email"
//                 placeholder="Email"
//                 className="border-2 border-blue-400"
//               />
//               <Form.Control.Feedback type="invalid">
//                 Please provide a valid email.
//               </Form.Control.Feedback>
//             </Form.Group>
//           </Row>

//           <Row className="mb-3">
//             <Form.Group as={Col} md="12" controlId="validationCustom04">
//               <Form.Label className="text-sky-900">Payment Method</Form.Label>
//               <div className="border-2 border-blue-400 p-3 rounded">
//                 <Form.Check
//                   required
//                   type="radio"
//                   label="Credit Card"
//                   name="paymentMethod"
//                   value="creditCard"
//                   className="mb-2"
//                   id="creditCard"
//                 />
//                 <Form.Check
//                   required
//                   type="radio"
//                   label="PayPal"
//                   name="paymentMethod"
//                   value="paypal"
//                   className="mb-2"
//                   id="paypal"
//                 />
//                 <Form.Check
//                   required
//                   type="radio"
//                   label="Bank Transfer"
//                   name="paymentMethod"
//                   value="bankTransfer"
//                   className="mb-2"
//                   id="bankTransfer"
//                 />
//                 <Form.Control.Feedback type="invalid">
//                   Please select a valid payment method.
//                 </Form.Control.Feedback>
//               </div>
//             </Form.Group>
//           </Row>

//           <Row className="mb-3">
//             <Form.Group as={Col} md="12" controlId="validationCustom05">
//               <Form.Label className="text-sky-900">Payment Details</Form.Label>
//               <Form.Control
//                 required
//                 type="text"
//                 placeholder="Card Number / PayPal Email / Bank Account"
//                 className="border-2 border-blue-400"
//               />
//               <Form.Control.Feedback type="invalid">
//                 Please provide valid payment details.
//               </Form.Control.Feedback>
//             </Form.Group>
//           </Row>

//           <div className="flex justify-between">
//             <Button
//               type="button"
//               onClick={handleBackClick}
//               className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded w-24"
//             >
//               Back
//             </Button>
//             <Button
//               type="submit"
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-24"
//             >
//               Submit
//             </Button>
//           </div>
//         </Form>
//       </div>
//     </div>
//   );
// };

  //  export default BookingForm3;
  import React, { useState } from 'react';
  import { Link } from 'react-router-dom';
  import { Form, Col, Row, Button } from 'react-bootstrap';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faStar, faClock } from '@fortawesome/free-solid-svg-icons';
  import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
  import ChevronRightIcon from '@mui/icons-material/ChevronRight';
  import { format, addDays, isBefore, isSameDay } from 'date-fns';
  import axios from 'axios';

  const BookingForm3 = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      address: '',
      email: '',
      contactNumber: '',
      bikeModel: '',
      registrationNumber: '',
      mileage: '',
      serviceType: '',
      additionalInfo: '',
      termsAccepted: false,
      selectedTimeSlot: '',
      selectedDate:'',
    });
    console.log("data",formData)
    const [errors, setErrors] = useState({});
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [confirmationMessage, setConfirmationMessage] = useState('');
  
    const handleNextStep = () => {
      const currentErrors = validateForm();
      if (Object.keys(currentErrors).length === 0) {
        setCurrentStep((prevStep) => prevStep + 1);
      } else {
        setErrors(currentErrors);
      }
    };
  
    const handlePrevStep = () => setCurrentStep((prevStep) => prevStep - 1);
  
    const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: type === 'checkbox' ? checked : value,
      }));
    };
  
    const validateForm = () => {
      const newErrors = {};
  
      // Validate BookingForm1 fields
      if (currentStep === 1) {
        if (!formData.firstName) newErrors.firstName = 'First name is required.';
        if (!formData.lastName) newErrors.lastName = 'Last name is required.';
        if (!formData.address) newErrors.address = 'Address is required.';
        if (!formData.email) {
          newErrors.email = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          newErrors.email = 'Email is invalid.';
        }
        if (!formData.contactNumber) {
          newErrors.contactNumber = 'Contact number is required.';
        } else if (!/^\d{10}$/.test(formData.contactNumber)) {
          newErrors.contactNumber = 'Contact number must be 10 digits.';
        }
        if (!formData.bikeModel) newErrors.bikeModel = 'Bike model is required.';
        if (!formData.registrationNumber)
          newErrors.registrationNumber = 'Registration number is required.';
        if (!formData.mileage) newErrors.mileage = 'Mileage is required.';
        if (!formData.serviceType) newErrors.serviceType = 'Service type is required.';
        if (!formData.termsAccepted)
          newErrors.termsAccepted = 'You must accept the terms and conditions.';
      }
  
      // Validate BookingForm2 fields
      if (currentStep === 2) {
        if (!formData.selectedTimeSlot) newErrors.selectedTimeSlot = 'Time slot is required.';
      }
  
      return newErrors;
    };
  
    const handleDateChange = (direction) => {
      const newDate = addDays(selectedDate, direction === 'next' ? 1 : -1);
      if (isBefore(newDate, new Date())) return;
      setSelectedDate(newDate);
    };
  
    const handleTimeSlotChange = (event) => {
      const selectedTime = event.target.value;
      const selectedDateTime = new Date(selectedDate);
      const selectedDateTimeString = format(selectedDateTime, 'MMMM d, yyyy');
      setConfirmationMessage(You selected a booking at ${selectedTime} on ${selectedDateTimeString});
      setFormData((prevData) => ({
        ...prevData,
        selectedTimeSlot: selectedTime,
      }));
      setTimeout(() => setConfirmationMessage(''), 3000);
    };
    const handleSubmit = async () => {
      try {
        console.log(formData)
        const response = await axios.post('http://localhost:4000/api/appointments', formData,{headers: {
          'Content-Type': 'application/json'
        }});
        console.log('Booking confirmed:', response.data);
        alert('Booking Confirmed!');
        // Optionally, redirect or update UI
      } catch (error) {
        console.error('Error confirming booking:', error);
        alert('Failed to confirm booking. Please try again.');
      }
    };
  
    const BookingForm1 = () => (
      <div className="border-2 border-gray-300 rounded-lg p-4 w-full max-w-md mx-auto mt-5 mb-4 shadow-lg" style={{ maxWidth: '550px' }}>
        <h1 className="text-3xl font-bold text-center mb-4 text-gray-700 flex justify-center items-center">
          Booking Online Now <FontAwesomeIcon icon={faStar} className="ml-2 text-emerald-400" />
        </h1>
        <div className="bg-secondary h-0.5 mx-auto md:mx- mb-2" style={{ width: '361px' }}></div>
        <h2 className="text-xl font-semibold text-center mb-6 text-sky-900">Your Details</h2>
        <Form noValidate validated={false} onSubmit={(e) => e.preventDefault()}>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom01">
              <Form.Label className="text-indigo-600">First name</Form.Label>
              <Form.Control
                required
                type="text"
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
                className="border-2 border-blue-400"
                isInvalid={!!errors.firstName}
              />
              <Form.Control.Feedback type="invalid">{errors.firstName}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom02">
              <Form.Label className="text-indigo-600">Last name</Form.Label>
              <Form.Control
                required
                type="text"
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
                className="border-2 border-blue-400"
                isInvalid={!!errors.lastName}
              />
              <Form.Control.Feedback type="invalid">{errors.lastName}</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom05">
              <Form.Label className="text-indigo-600">Address</Form.Label>
              <Form.Control
                required
                type="text"
                name="address"
                placeholder="45 Nittbu Rd, Colombo"
                value={formData.address}
                onChange={handleChange}
                className="border-2 border-blue-400"
                isInvalid={!!errors.address}
              />
              <Form.Control.Feedback type="invalid">{errors.address}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="formGroupEmail">
              <Form.Label className="text-indigo-600">Email</Form.Label>
              <Form.Control
                required
                type="email"
                name="email"
                placeholder="Enter Email"
                value={formData.email}
                onChange={handleChange}
                className="border-2 border-blue-400"
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom06">
              <Form.Label className="text-indigo-600">Contact Number</Form.Label>
              <Form.Control
                required
                type="tel"
                name="contactNumber"
                placeholder="Phone Number"
                value={formData.contactNumber}
                onChange={handleChange}
                className="border-2 border-blue-400"
                isInvalid={!!errors.contactNumber}
              />
              <Form.Control.Feedback type="invalid">{errors.contactNumber}</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <h2 className="text-xl font-semibold text-center mb-6 text-sky-900">Service Information</h2>
          <div className="bg-secondary h-0.5 mx-auto mt- mb-1" style={{ width: '266px' }}></div>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label className="text-indigo-600">Bike Model</Form.Label>
            <Form.Select
              name="bikeModel"
              value={formData.bikeModel}
              onChange={handleChange}
              className="border-2 border-blue-400"
              isInvalid={!!errors.bikeModel}
            >
              <option value="">Choose...</option>
              <option>Maestro</option>
              <option>Pleasure</option>
              <option>I Smart </option>
              <option>Discovery</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">{errors.bikeModel}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom03">
            <Form.Label className="text-indigo-600">Registration Number</Form.Label>
            <Form.Control
              required
              type="text"
              name="registrationNumber"
              placeholder="Reg No"
              value={formData.registrationNumber}
              onChange={handleChange}
              className="border-2 border-blue-400"
              isInvalid={!!errors.registrationNumber}
            />
            <Form.Control.Feedback type="invalid">{errors.registrationNumber}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom04">
            <Form.Label className="text-indigo-600">Mileage</Form.Label>
            <Form.Control
              required
              type="text"
              name="mileage"
              placeholder="Mileage"
              value={formData.mileage}
              onChange={handleChange}
              className="border-2 border-blue-400"
              isInvalid={!!errors.mileage}
            />
            <Form.Control.Feedback type="invalid">{errors.mileage}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label className="text-indigo-600">Service Type</Form.Label>
            <Form.Select
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              className="border-2 border-blue-400"
              isInvalid={!!errors.serviceType}
            >
              <option value="">Choose...</option>
              <option>Repair</option>
              <option>Maintenance</option>
              <option>Oil Change</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">{errors.serviceType}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label className="text-indigo-600">Additional Info</Form.Label>
            <Form.Control
              as="textarea"
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange}
              className="border-2 border-blue-400"
            />
          </Form.Group>
          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check
              type="checkbox"
              label="Agree to terms and conditions"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              isInvalid={!!errors.termsAccepted}
              feedback={errors.termsAccepted}
            />
          </Form.Group>
          <Button variant="primary" onClick={handleNextStep}>
            Next <ChevronRightIcon />
          </Button>
        </Form>
      </div>
    );
  
    const BookingForm2 = () => (
      <div className="border-2 border-gray-300 rounded-lg p-4 w-full max-w-md mx-auto mt-5 mb-4 shadow-lg" style={{ maxWidth: '550px' }}>
        <h1 className="text-3xl font-bold text-center mb-4 text-gray-700 flex justify-center items-center">
          Booking Online Now <FontAwesomeIcon icon={faStar} className="ml-2 text-emerald-400" />
        </h1>
        <div className="bg-secondary h-0.5 mx-auto md:mx- mb-2" style={{ width: '361px' }}></div>
        <h2 className="text-xl font-semibold text-center mb-6 text-sky-900">Select Date and Time</h2>
        <div className="bg-secondary h-0.5 mx-auto mt- mb-1" style={{ width: '266px' }}></div>
        <div className="text-center mb-4">
          <Button  variant="outline-primary" onClick={() => handleDateChange('prev')}>
            <ChevronLeftIcon />
          </Button>
          <span className="mx-3">{format(selectedDate, 'MMMM d, yyyy')}</span>
          <Button  variant="outline-primary" onClick={() => handleDateChange('next')}>
            <ChevronRightIcon />
          </Button>
        </div>
        <Form noValidate validated={false} onSubmit={(e) => e.preventDefault()}>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label className="text-indigo-600">Time Slot</Form.Label>
            <Form.Select
              name="selectedTimeSlot"
              value={formData.selectedTimeSlot}
              onChange={handleTimeSlotChange}
              className="border-2 border-blue-400"
              isInvalid={!!errors.selectedTimeSlot}
            >
              <option value="">Choose...</option>
              <option>09:00 - 10:00</option>
              <option>10:00 - 11:00</option>
              <option>11:00 - 12:00</option>
              <option>12:00 - 01:00</option>
              <option>01:00 - 02:00</option>
              <option>02:00 - 03:00</option>
              <option>03:00 - 04:00</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">{errors.selectedTimeSlot}</Form.Control.Feedback>
          </Form.Group>
          {confirmationMessage && (
            <div className="alert alert-success mt-3" role="alert">
              {confirmationMessage}
            </div>
          )}
          <Button style={{ width: '155px' }} variant="secondary" onClick={handlePrevStep}>
            <ChevronLeftIcon /> Previous
          </Button>
          <Button  style={{ width: '155px' }}  variant="primary" onClick={handleNextStep} className="ml-12">
            Next <ChevronRightIcon />
          </Button>
        </Form>
      </div>
    );
  
    const BookingForm3 = () => (
      <div className="border-2 border-gray-300 rounded-lg p-4 w-full max-w-md mx-auto mt-5 mb-4 shadow-lg" style={{ maxWidth: '550px' }}>
        <h1 className="text-3xl font-bold text-center mb-4 text-gray-700 flex justify-center items-center">
          Booking Online Now <FontAwesomeIcon icon={faStar} className="ml-2 text-emerald-400" />
        </h1>
        <div className="bg-secondary h-0.5 mx-auto md:mx- mb-2" style={{ width: '361px' }}></div>
        <h2 className="text-xl font-semibold text-center mb-6 text-sky-900">Confirmation</h2>
        <div className="bg-secondary h-0.5 mx-auto mt- mb-1" style={{ width: '266px' }}></div>
        <p className="text-center">Please review your booking details before confirming.</p>
        <ul className="list-group list-group-flush mb-3">
          <li className="list-group-item">*Name: {formData.firstName} {formData.lastName}</li>
          <li className="list-group-item">*Address: {formData.address}</li>
          <li className="list-group-item">*Email: {formData.email}</li>
          <li className="list-group-item">*Contact Number: {formData.contactNumber}</li>
          <li className="list-group-item">*Bike Model: {formData.bikeModel}</li>
          <li className="list-group-item">*Registration Number: {formData.registrationNumber}</li>
          <li className="list-group-item">*Mileage: {formData.mileage}</li>
          <li className="list-group-item">*Service Type: {formData.serviceType}</li>
          <li className="list-group-item">*Additional Info: {formData.additionalInfo}</li>
          <li className="list-group-item">*Selected Time Slot: {formData.selectedTimeSlot}</li>
        </ul>
        <Button variant="secondary" onClick={handlePrevStep}>
          <ChevronLeftIcon /> Previous
        </Button>
        <Link to="/" >  <Button variant="success" onClick={() => handleSubmit(formData)} className="ml-12">
          Confirm Booking
        </Button></Link>
       
      </div>
    );
  
    return (
      <div>
        {currentStep === 1 && <BookingForm1 />}
        {currentStep === 2 && <BookingForm2 />}
        {currentStep === 3 && <BookingForm3 />}
      </div>
    );
  };
  
  export default BookingForm3;