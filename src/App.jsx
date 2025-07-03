import { BrowserRouter } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import Navbar from './components/Navbar/Navbar'
import AppRoutes from './routes/AppRoutes';
import Astronaut from './components/Astronaut'
import Footer from './components/Footer';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/react'

function App() {
  return (
    <BrowserRouter>
      <Box display="flex" flexDirection="column" minHeight="100vh">
        <Navbar />
        <Box flex="1">
          <Astronaut />
          <AppRoutes />
        </Box>
        <Footer /> 
      </Box>
      <Analytics />
      <SpeedInsights />
    </BrowserRouter>
  );
}

export default App;