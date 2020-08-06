import React from 'react';
import ReactDOM from 'react-dom'; // permite que o React trabalhe com a DOM, usando o método "render"(apenas uma vez em todo o projeto)
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

