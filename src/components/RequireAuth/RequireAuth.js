import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useLocation } from 'react-router-dom';
import auth from '../../firebase.init';

const RequireAuth = () => {
    const [user] = useAuthState(auth)
    const location = useLocation()
    return (
        <div>

        </div>
    );
};

export default RequireAuth;