import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import Navbar from './components/Navbar/Navbar'
import AppRoutes from './routes/AppRoutes';
import Astronaut from './components/Astronaut'
import Footer from './components/Footer'; // Import the Footer component
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/react'
// import SidebarAdLeft from './components/SidebarAd/SidebarAdLeft';
// import SidebarAdRight from './components/SidebarAd/SidebarAdRight';

// import Breadcrumbs from './components/Breadcrumbs';

function App() {
  return (
    <BrowserRouter>
      <Box display="flex" flexDirection="column" minHeight="100vh">
        <Navbar />
        <Box flex="1">
          <Astronaut />
          {/* <Breadcrumbs /> */}
          {/* <SidebarAdLeft position="left" /> */}
          <AppRoutes />
          {/* <SidebarAdRight position="right" /> */}
        </Box>
        <Footer /> 
      </Box>
      <Analytics />
      <SpeedInsights />
    </BrowserRouter>
  );
}

export default App;