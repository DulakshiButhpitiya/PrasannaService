import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BookingTable = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/appointments');
        setBookings(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  const handleAddBooking = async (id) => {
    // Add booking logic here
    try {
      // Assuming there's an endpoint to confirm a booking
      await axios.put(`http://localhost:4000/api/appointments/${id}/confirm`);
      alert('Booking confirmed!');
      setBookings(bookings.filter(booking => booking.id !== id));
    } catch (error) {
      console.error('Error confirming booking:', error);
      alert('Failed to confirm booking. Please try again.');
    }
  };

  const handleRejectBooking = async (id) => {
    // Reject booking logic here
    try {
      // Assuming there's an endpoint to reject a booking
      await axios.delete(`http://localhost:4000/api/appointments/${id}`);
      alert('Booking rejected!');
      setBookings(bookings.filter(booking => booking.id !== id));
    } catch (error) {
      console.error('Error rejecting booking:', error);
      alert('Failed to reject booking. Please try again.');
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="table-responsive">
      <Table striped bordered hover className="mt-4">
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Email</th>
            <th>Contact Number</th>
            <th>Bike Model</th>
            <th>Registration Number</th>
            <th>Mileage</th>
            <th>Service Type</th>
            <th>Additional Info</th>
            <th>Time Slot</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.firstName} {booking.lastName}</td>
              <td>{booking.address}</td>
              <td>{booking.email}</td>
              <td>{booking.contactNumber}</td>
              <td>{booking.bikeModel}</td>
              <td>{booking.registrationNumber}</td>
              <td>{booking.mileage}</td>
              <td>{booking.serviceType}</td>
              <td>{booking.additionalInfo}</td>
              <td>{booking.selectedTimeSlot}</td>
              <td>
                <Button variant="success" onClick={() => handleAddBooking(booking.id)}>
                  Add
                </Button>{' '}
                <Button variant="danger" onClick={() => handleRejectBooking(booking.id)}>
                  Reject
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default BookingTable;
