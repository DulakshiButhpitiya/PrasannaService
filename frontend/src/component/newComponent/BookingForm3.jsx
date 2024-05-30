import React from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const BookingForm3 = () => {
  const handleBackClick = () => {
    // Implement your back navigation logic here
    window.history.back();
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 mt-8 mb-8">
      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg m-4">
        <Form>
          <h2 className="text-xl font-semibold text-center mb-6 text-sky-900">Payment Method</h2>
          <div className="bg-secondary h-0.5 mx-auto mb-2" style={{ width: '361px' }}></div>
          
          <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="validationCustom03">
              <Form.Label className="text-sky-900">Email</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Email"
                className="border-2 border-blue-400"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid email.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="validationCustom04">
              <Form.Label className="text-sky-900">Payment Method</Form.Label>
              <div className="border-2 border-blue-400 p-3 rounded">
                <Form.Check
                  required
                  type="radio"
                  label="Credit Card"
                  name="paymentMethod"
                  value="creditCard"
                  className="mb-2"
                  id="creditCard"
                />
                <Form.Check
                  required
                  type="radio"
                  label="PayPal"
                  name="paymentMethod"
                  value="paypal"
                  className="mb-2"
                  id="paypal"
                />
                <Form.Check
                  required
                  type="radio"
                  label="Bank Transfer"
                  name="paymentMethod"
                  value="bankTransfer"
                  className="mb-2"
                  id="bankTransfer"
                />
                <Form.Control.Feedback type="invalid">
                  Please select a valid payment method.
                </Form.Control.Feedback>
              </div>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="validationCustom05">
              <Form.Label className="text-sky-900">Payment Details</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Card Number / PayPal Email / Bank Account"
                className="border-2 border-blue-400"
              />
              <Form.Control.Feedback type="invalid">
                Please provide valid payment details.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <div className="flex justify-between">
            <Button
              type="button"
              onClick={handleBackClick}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded w-24"
            >
              Back
            </Button>
            <Button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-24"
            >
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default BookingForm3;
