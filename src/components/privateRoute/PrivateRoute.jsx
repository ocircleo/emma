import React, { useContext } from 'react';
import { authContext } from '../provider/Provider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { loading, user } = useContext(authContext);
    const loaction = useLocation()
    if (loading) {
        return <h1>please wait the page is loading</h1>
    }
    if (user) {
        return (
            children
        )
    }
    return (
        <Navigate to={'/login'} state={{from :loaction}} replace></Navigate>
    );
};

export default PrivateRoute;