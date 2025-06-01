// import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import Home from '../pages/Home';
import Community from '../pages/Community';
import ContactPage from '../pages/ContactPage';
import FolderView from '../pages/FolderView';
import AboutUs from '../pages/About';
import YouTubeChannelsPage from '../pages/YTChannels';
import Blogs from '../pages/Blogs';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<FolderView />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/:repoName/*" element={<FolderView />} />
      <Route path="/ytchannels" element={<YouTubeChannelsPage />} />
      <Route path="/community" element={<Community />} />
      <Route path="/blogs/" element={<Blogs />} />
      <Route path="/blogs/*" element={<Blogs />} />
    </Routes>
  );
};

export default AppRoutes;