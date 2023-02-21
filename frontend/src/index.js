import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './indexBlank.css';
import './theme.min.css';

ReactDOM.render(
  <main id="content" role="main" class="main">
    <div class="content container">
      <App />
    </div>
  </main>,
  document.getElementById('root')
);

