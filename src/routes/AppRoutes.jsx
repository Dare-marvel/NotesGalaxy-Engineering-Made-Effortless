// import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import Home from '../pages/Home';
import Community from '../pages/Community';
import ContactPage from '../pages/ContactPage';
import FolderView from '../pages/FolderView';
import AboutUs from '../pages/About';
import YouTubeChannelsPage from '../pages/YTChannels';
import Blogs from '../pages/Blogs';
import EducationalSnakeGame from '../components/Games/SnakeGame';
import Tetris from '../components/Games/Tetris'
import Games from '../pages/Games'
import Pong from '../components/Games/Pong';



const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<FolderView />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/:repoName/*" element={<FolderView />} />
      <Route path="/ytchannels" element={<YouTubeChannelsPage />} />
      <Route path="/community" element={<Community />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/tetris-game" element={<Tetris />} />
      <Route path="/games" element={<Games />} />
      <Route path="/snake-game" element={<EducationalSnakeGame />} />
      <Route path="/pong-game" element={<Pong />} />
    </Routes>
  );
};

export default AppRoutes;