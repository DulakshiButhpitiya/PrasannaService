import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SettingsIcon from '@mui/icons-material/Settings';
import LockIcon from '@mui/icons-material/Lock';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
          bgcolor: '#1F2937', // Tailwind's bg-gray-800
          color: 'white', // Text color
          marginTop: '64px', // Adjust for header height
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'space-between',
        }}
      >
        <List>
          <ListItem button component={Link} to="/admin/dashboard">
            <ListItemIcon sx={{ color: 'white' }}>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button component={Link} to="/admin/invoice">
            <ListItemIcon sx={{ color: 'white' }}>
              <PersonAddIcon />
            </ListItemIcon>
            <ListItemText primary="Generate Invoice" />
          </ListItem>
          <ListItem button component={Link} to="/admin/manageproduct">
            <ListItemIcon sx={{ color: 'white' }}>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Manage Products" />
          </ListItem>
          <ListItem button component={Link} to="/admin/login">
            <ListItemIcon sx={{ color: 'white' }}>
              <LockIcon />
            </ListItemIcon>
            <ListItemText primary="Add Login" />
          </ListItem>
          {/* Logout button */}
          <ListItem button component={Link} to="/logout">
            <ListItemIcon sx={{ color: 'white' }}>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
