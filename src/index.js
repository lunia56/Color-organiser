import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import ColorProvider from "./components/ColorProvider"



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ColorProvider>
    <App />
  </ColorProvider>
);

