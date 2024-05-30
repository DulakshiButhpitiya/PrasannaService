import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function FullBackground() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container disableGutters={true} maxWidth={false} sx={{ height: '100vh', display: 'flex' }}>
        <Box sx={{ bgcolor: '#cfe8fc', flexGrow: 1 }} />
      </Container>
    </React.Fragment>
  );
}