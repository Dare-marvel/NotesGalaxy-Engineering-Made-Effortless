import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import Navbar from './components/Navbar/Navbar'
import AppRoutes from './routes/AppRoutes';
import Breadcrumbs from './components/Breadcrumbs';

function App() {
  return (
    <BrowserRouter>
      <Box>
        <Navbar />
        <Box >
          {/* <Breadcrumbs /> */}
          <AppRoutes />
        </Box>
      </Box>
    </BrowserRouter>
  );
}

export default App;