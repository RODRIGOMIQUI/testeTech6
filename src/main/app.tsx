import * as React from 'react';
import AppRoutes from './appRoutes';

import './app.css';

const App = () => {
  return (     
    <div className="app">
      <br />
      <div className="container">
        <AppRoutes />
      </div>      
    </div>    
  );
};

export default App;
