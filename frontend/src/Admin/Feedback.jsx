import React from 'react'
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';

const Feedback = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <Container>
        <BookingSection />
      </Container>
    </div>
  );
};

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Trizen</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form className="d-flex ms-auto">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light">Search</Button>
          </Form>
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#dashboard">Dashboard</Nav.Link>
            <Nav.Link href="#my-booking">My Booking</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const BookingSection = () => {
  return (
    <div className="mt-4 p-4 bg-white rounded shadow-sm">
      <h2 className="text-blue-500 mb-4">My Booking</h2>
      <BookingTable />
    </div>
  );
};

const BookingTable = () => {
  const bookings = [
    { type: 'Flight', title: 'London to New York City', location: 'New York City', orderDate: '30/6/2020', executionDate: '2/6/2020', price: '$350', status: 'Pending' },
    { type: 'Car', title: 'Mercedes-Benz A 200 CDI', location: 'Greater London, United Kingdom', orderDate: '30/6/2020', executionDate: '2/6/2020', price: '$350', status: 'Completed' },
    { type: 'Tour', title: 'InterContinental New York Barclay', location: 'Istanbul, Turkey', orderDate: '30/6/2020', executionDate: '2/6/2020', price: '$350', status: 'Delayed' },
    { type: 'Cruise', title: '5 Nights Bermuda Cruise', location: 'Miami, Florida', orderDate: '30/6/2020', executionDate: '2/6/2020', price: '$350', status: 'On schedule' },
    { type: 'Hotel', title: 'Melia White House Hotel', location: 'Boston, Massachusetts', orderDate: '30/6/2020', executionDate: '2/6/2020', price: '$350', status: 'Completed' },
    { type: 'Tour', title: 'Hut on Blue Water Beach Tour', location: '124 Nevada, Las Vegas', orderDate: '30/6/2020', executionDate: '2/6/2020', price: '$350', status: 'Completed' },
    { type: 'Flight', title: 'Rome to Australia', location: 'New York City', orderDate: '30/6/2020', executionDate: '2/6/2020', price: '$350', status: 'Completed' },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead className="bg-blue-500 text-white">
          <tr>
            <th className="w-1/6 py-2">Type</th>
            <th className="w-1/6 py-2">Title</th>
            <th className="w-1/6 py-2">Location</th>
            <th className="w-1/6 py-2">Order Date</th>
            <th className="w-1/6 py-2">Execution Date</th>
            <th className="w-1/6 py-2">Price</th>
            <th className="w-1/6 py-2">Status</th>
            <th className="w-1/6 py-2">Action</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {bookings.map((booking, index) => (
            <tr key={index} className="bg-gray-100">
              <td className="text-center py-2">{booking.type}</td>
              <td className="text-center py-2">{booking.title}</td>
              <td className="text-center py-2">{booking.location}</td>
              <td className="text-center py-2">{booking.orderDate}</td>
              <td className="text-center py-2">{booking.executionDate}</td>
              <td className="text-center py-2">{booking.price}</td>
              <td className={`text-center py-2 ${
                booking.status === 'Pending' ? 'text-yellow-500' : 
                booking.status === 'Completed' ? 'text-green-500' : 
                booking.status === 'Delayed' ? 'text-red-500' : 
                'text-blue-500'
              }`}>{booking.status}</td>
              <td className="text-center py-2">
                <button className="text-blue-500 hover:text-blue-700 mx-1">Cancel</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Feedback