import React from 'react'
import DarkModeToggle from './DarkMode'
import { Container } from 'react-bootstrap';
import Button from '../newComponent/Button'
import { ThemeProvider, createTheme } from '@mui/material/styles';

const DarkLayout = ({ children }) => {
    const [darkMode, setDarkMode] = React.useState(false);

    const toggleDarkMode = () => {
      setDarkMode((prevMode) => !prevMode);
    };
    
  
    return (
      <div>
        <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        {children}
        {/* Button component eka pennanna */}
        <Button onClick={toggleDarkMode} />
      </div>
  )
}

export default DarkLayout