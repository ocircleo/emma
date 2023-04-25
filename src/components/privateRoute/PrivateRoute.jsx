import React, { useContext } from 'react';
import { authContext } from '../provider/Provider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { loading, user }    = useContext(authContext);
    if (user) {
        return (
            children
        )
    }
    return (
        <Navigate to={'/login'}></Navigate>
    );
};

export default PrivateRoute;