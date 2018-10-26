import * as React from 'react';
import DocumentTitle from 'react-document-title';

import AppRoutes from './appRoutes';

import './app.css';

const App = () => {
  return (     
    <div className="app">
      <br />
      <div className="container">
        <DocumentTitle title='Tech6 - Teste ReactJS'>
          <AppRoutes />
        </DocumentTitle>
      </div>      
    </div>    
  );
};

export default App;
