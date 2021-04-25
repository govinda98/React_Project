import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './App.css';

function Routine() {
  const { isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div>
        <h1>Create Your Routine</h1>
      </div>
    )
  );
}

export default Routine;