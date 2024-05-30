import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const BookingForm1 = () => {
  const [validated, setValidated] = useState(false);
  const [errors, setErrors] = useState({ file: '' });

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const handleChange = (event) => {
    const file = event.target.files[0];
    if (!file) {
      setErrors({ file: 'Please upload a file.' });
    } else {
      setErrors({ file: '' });
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
    <div className="w-full max-w-2xl mx-auto p-8 border-2 shadow-lg rounded-lg bg-white my-8">
      <h1 className="text-3xl font-bold text-center mb-4 text-sky-900 flex justify-center items-center">
        Booking Online Now <FontAwesomeIcon icon={faStar} className="ml-2 text-emerald-400" />
      </h1>
      <div className="bg-secondary h-0.5 mx-auto md:mx- mb-2" style={{ width: '361px' }}></div>
      <h2 className="text-xl font-semibold text-center mb-6 text-sky-900">Your Details</h2>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label className="text-sky-900">First name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First name"
              defaultValue="Mark"
              className="border-2 border-blue-400"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label className="text-sky-900">Last name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Last name"
              defaultValue="Otto"
              className="border-2 border-blue-400"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          
          <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Label className="text-sky-900">Username</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Username"
                aria-describedby="inputGroupPrepend"
                required
                className="border-2 border-blue-400"
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom05">
            <Form.Label className="text-sky-900">Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="45 Nittbu Rd, Colombo"
              required
              className="border-2 border-blue-400"
            />
            <Form.Control.Feedback type="invalid">
              Please provide your address.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="formGroupEmail">
            <Form.Label className="text-sky-900">Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              required
              className="border-2 border-blue-400"
            />
            <Form.Control.Feedback type="invalid">
              Please provide your email.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom06">
            <Form.Label className="text-sky-900">Contact Number</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Phone Number"
              required
              className="border-2 border-blue-400"
            />
            <Form.Control.Feedback type="invalid">
              Please provide your contact number.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Form.Group className="position-relative mb-3">
          <Form.Label className="text-sky-900">File</Form.Label>
          <Form.Control
            type="file"
            required
            name="file"
            onChange={handleChange}
            isInvalid={!!errors.file}
            className="border-2 border-blue-400"
          />
          <Form.Control.Feedback type="invalid" tooltip>
            {errors.file}
          </Form.Control.Feedback>
        </Form.Group>
        <h2 className="text-xl font-semibold text-center mb-6 text-sky-900">Service Information</h2>
        <div className="bg-secondary h-0.5 mx-auto mt- mb-1" style={{ width: '266px' }}></div>
        <Form.Group as={Col} controlId="formGridState">
            <Form.Label className="text-sky-900">Bike Model</Form.Label>
            <Form.Select defaultValue="Choose..." className="border-2 border-blue-400">
              <option>Choose...</option>
              <option>Maestro</option>
              <option>Pleasure</option>
              <option>I Smart</option>
              <option>Discovery</option>
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom03">
            <Form.Label className="text-sky-900">Registration Number</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Reg No"
              defaultValue="BBC 3465"
              className="border-2 border-blue-400"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          
          <Form.Group as={Col} md="4" controlId="validationCustom04">
            <Form.Label className="text-sky-900">Mileage</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="24599Km"
              defaultValue="24599Km"
              className="border-2 border-blue-400"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label className="text-sky-900">Service Type</Form.Label>
            <Form.Select defaultValue="Choose..." className="border-2 border-blue-400">
              <option>Choose...</option>
              <option>Full Service</option>
              <option>Normal Service</option>
              <option>Washing</option>
              <option>Oil Change</option>
              <option>Repair</option>
              <option>Other</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label className="text-sky-900">Any other information</Form.Label>
        <Form.Control as="textarea"   className="border-2 border-blue-400" rows={3} />
      </Form.Group>
    
        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>
        <Link to="/bookingform2">
          <Button type="submit" className="w-44">
            Next
          </Button>
        </Link>
      </Form>
    </div>
    </div>
  );
};

export default BookingForm1;
