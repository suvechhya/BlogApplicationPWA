import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import './App.scss';
import Routes from './routes/routes';
import { AuthProvider } from './contexts/AuthContext';

function App() {

  return (
    <div className="App">
      <AuthProvider>
        <Container>
          <Routes />
        </Container>
      </AuthProvider>
    </div>
  );
}

export default App;
