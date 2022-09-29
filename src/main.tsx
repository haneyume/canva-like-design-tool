import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
// import { App } from './projects/AiInterview/App';
// import { App } from './projects/AntSimulation/App';
// import { App } from './projects/AREditor/App';
// import { App } from './projects/ChatbotBuilder/App';
// import { App } from './projects/ExtractColor/App';
// import { App } from './projects/PoseControlGame/App';
// import { App } from './projects/SocialMediaDesigner/App';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
