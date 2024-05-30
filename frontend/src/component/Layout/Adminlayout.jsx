import React from 'react';
import HeaderAdmin from '../admincomponent/HeaderAdmin/HeaderAdmin';
import Sidebar from '../admincomponent/Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';

const AdminLayout = () => {
  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <HeaderAdmin />
      <Box sx={{ display: 'flex', width: '100%' }}>
        <Sidebar />
        <Box sx={{ flexGrow: 1, bgcolor: '#F3F4F6', padding: 3, marginTop: '64px', marginLeft: '240px' }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default AdminLayout;
