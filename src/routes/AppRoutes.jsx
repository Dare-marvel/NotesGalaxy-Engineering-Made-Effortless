import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import Home from '../pages/Home';
// import About from '../pages/About';
import ContactPage from '../pages/ContactPage';
import FolderView from '../pages/FolderView';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<FolderView />} />
      {/* <Route path="/about" element={<About />} /> */}
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/:repoName/*" element={<FolderView />} />
    </Routes>
  );
};

export default AppRoutes;