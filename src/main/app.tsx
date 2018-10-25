import * as React from 'react';
import Search from '../search/search';
import './app.css';

const App = () => {
  return (     
    <div className="app">
      <br />
      <div className="container">
        <Search name="Search" />
      </div>
    </div>
  );
};

export default App;
