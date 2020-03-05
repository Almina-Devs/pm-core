import React from 'react';
import Router from './containers/app/Router';
import UserContextProvider from './containers/app/contexts/UserContext';

function App() {
  return (
    <div className="App">
      <UserContextProvider>
          <Router />
      </UserContextProvider>
    </div>
  );
}

export default App;
