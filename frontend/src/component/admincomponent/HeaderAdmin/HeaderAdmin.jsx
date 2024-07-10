import React from 'react';
import { FaBell, FaEnvelope, FaMoon } from 'react-icons/fa';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Link } from 'react-router-dom';

const HeaderAdmin = () => {
  return (
    <header className="bg-gray-800 text-white flex justify-between items-center p-4 fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center">
        <img src="component/Assets/P (2).jpg" alt="CoreUI React.js" className="h-8 w-8 mr-2" />
        <span className="font-semibold text-xl">Admin Dashboard</span>
      </div>
      <nav className="flex space-x-4">
        <Link to="/admin/dashboard" className="flex items-center hover:text-gray-400">
          <DashboardIcon className="mr-1" />
          Dashboard
        </Link>
        <Link to="/admin/users" className="hover:text-gray-400">
          Users
        </Link>
        <Link to="/admin/settings" className="hover:text-gray-400">
          Settings
        </Link>
      </nav>
      <div className="flex items-center space-x-4">
        <FaBell className="cursor-pointer hover:text-gray-400" />
        <FaEnvelope className="cursor-pointer hover:text-gray-400" />
        <FaMoon className="cursor-pointer hover:text-gray-400" />
        <img
          src="https://via.placeholder.com/30"
          alt="Profile"
          className="rounded-full w-8 h-8"
        />
      </div>
    </header>
  );
};

export default HeaderAdmin;
