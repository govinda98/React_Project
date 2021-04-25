import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Logout from './Logout';
import './Login.css';

const Login = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <div className="login">
            <button onClick={() => loginWithRedirect()}>Log In</button>
            <Logout />
        </div>
    );
}

export default Login;