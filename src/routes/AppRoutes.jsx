import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Flex, Spinner } from "@chakra-ui/react";


// Keep FolderView as regular import since it's the home page
import FolderView from '../pages/FolderView';

// Lazy load all other components
const Community = lazy(() => import('../pages/Community'));
const ContactPage = lazy(() => import('../pages/ContactPage'));
const AboutUs = lazy(() => import('../pages/About'));
const YouTubeChannelsPage = lazy(() => import('../pages/YTChannels'));
const Blogs = lazy(() => import('../pages/Blogs'));
const EducationalSnakeGame = lazy(() => import('../components/Games/SnakeGame'));
const Tetris = lazy(() => import('../components/Games/Tetris'));
const Games = lazy(() => import('../pages/Games'));
const Pong = lazy(() => import('../components/Games/Pong'));

const LoadingSpinner = () => (
  <Flex align="center" justify="center" minH="100vh">
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="blue.500"
      size="xl"
    />
  </Flex>
);

// Wrapper component for Suspense
const LazyRoute = ({ children }) => (
  <Suspense fallback={<LoadingSpinner />}>
    {children}
  </Suspense>
);

const AppRoutes = () => {
  return (
    <Routes>
      <Route 
        path="/" 
        element={<FolderView />} 
      />
      <Route 
        path="/contact" 
        element={
          <LazyRoute>
            <ContactPage />
          </LazyRoute>
        } 
      />
      <Route 
        path="/about" 
        element={
          <LazyRoute>
            <AboutUs />
          </LazyRoute>
        } 
      />
      <Route 
        path="/:repoName/*" 
        element={<FolderView />} 
      />
      <Route 
        path="/ytchannels" 
        element={
          <LazyRoute>
            <YouTubeChannelsPage />
          </LazyRoute>
        } 
      />
      <Route 
        path="/community" 
        element={
          <LazyRoute>
            <Community />
          </LazyRoute>
        } 
      />
      <Route 
        path="/blogs" 
        element={
          <LazyRoute>
            <Blogs />
          </LazyRoute>
        } 
      />
      <Route 
        path="/tetris-game" 
        element={
          <LazyRoute>
            <Tetris />
          </LazyRoute>
        } 
      />
      <Route 
        path="/games" 
        element={
          <LazyRoute>
            <Games />
          </LazyRoute>
        } 
      />
      <Route 
        path="/snake-game" 
        element={
          <LazyRoute>
            <EducationalSnakeGame />
          </LazyRoute>
        } 
      />
      <Route 
        path="/pong-game" 
        element={
          <LazyRoute>
            <Pong />
          </LazyRoute>
        } 
      />
    </Routes>
  );
};

export default AppRoutes;