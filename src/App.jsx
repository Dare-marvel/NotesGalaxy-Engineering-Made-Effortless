// App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import FolderView from './components/FolderView';
import Breadcrumbs from './components/Breadcrumbs';

function App() {
  return (
    <BrowserRouter>
      <Container style={{ marginTop: '2rem' }}>
      <Breadcrumbs />
        <Routes>
          <Route path="/" element={<FolderView />} />
          <Route path="/:repoName/*" element={<FolderView />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;