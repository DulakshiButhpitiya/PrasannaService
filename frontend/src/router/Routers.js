import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layouttt from "../component/Layout/Layouttt";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Product from "../Pages/Product";
import Adminlogin from "../Admin/Adminlogin";
import Adminlayout from "../component/Layout/Adminlayout";
import Dashboard from "../Admin/Dashboard";
import Manageproduct from "../Admin/Manageproduct";
import Services from "../Pages/Services";
import Spareparts from "../Pages/Spareparts";
import BookingOnline from "../Pages/BookingOnline";
import Login from "../component/Login&Registration/LoginRegistration";
import Register from "../component/Login&Registration/Reg";
import Book from "../component/newComponent/TableBooking";
import BookingForm1 from "../component/newComponent/BookingForm1";
import BookingForm2 from "../component/newComponent/BookingForm2";
import BookingForm3 from "../component/newComponent/BookingForm3";
import ForgotPass from "../component/Login&Registration/ForgotPass";
import Sidebar from "../component/admincomponent/Sidebar/Sidebar";
import { BrowserRouter as Switch } from 'react-router-dom';
import Invoice from "../Admin/Invoice";

const Routers = () => {
  return (
    <Routes>
      <Route path="/bookingg" element={<Book />} />
      <Route path="/" element={<Layouttt />}>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
        <Route path="/service" element={<Services />} />
        <Route path="/Spareparts" element={<Spareparts />} />
        <Route path="/booking" element={<BookingOnline />} />
        <Route path="/bookingform1" element={<BookingForm1 />} />
        <Route path="/bookingform2" element={<BookingForm2 />} />
        <Route path="/bookingform3" element={<BookingForm3 />}/>

      </Route>
      <Route path="/admin/login" element={<Adminlogin />} />
      <Route path="/admin" element={<Adminlayout />}>
        <Route path="/admin" element={<Navigate to="/admin/Dashboard" />} />
        <Route path="/admin/Dashboard" element={<Dashboard />} />
        <Route path="/admin/invoice" element={<Invoice/>} />
        <Route path="/admin/Manageproduct" element={<Manageproduct />} />
        
      </Route>

      {/* login&reg  */}

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/ForgotPass" element={<ForgotPass/>} />
    </Routes>
  );
};

export default Routers;
