import React from 'react';
import Router from './containers/app/Router';
import UserContextProvider from './containers/app/contexts/UserContext';
import ErrorBoundary from './containers/app/ErrorBoundary';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <UserContextProvider>
            <Router />
        </UserContextProvider>
      </ErrorBoundary>
    </div>
  );
}

export default App;
