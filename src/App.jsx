import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import FolderView from './components/FolderView';
import Breadcrumbs from './components/Breadcrumbs';

function App() {
  return (
    <BrowserRouter>
      <Box mt="2rem">
        <Breadcrumbs />
        <Routes>
          <Route path="/" element={<FolderView />} />
          <Route path="/:repoName/*" element={<FolderView />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
