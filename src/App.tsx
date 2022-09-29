import { useContext, useEffect, useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { App as SocialMediaDesigner } from './SocialMediaDesigner/App';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path={'/'} element={<SocialMediaDesigner />} />
      </Routes>
    </Router>
  );
}
