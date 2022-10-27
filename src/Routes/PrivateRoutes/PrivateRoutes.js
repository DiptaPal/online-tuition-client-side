import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const PrivateRoutes = ({ children }) => {
    const {user, loader} = useContext(AuthContext);
    const location = useLocation();

    if(loader){
        return <div>Loading</div>
    }
    if(user && user.uid){
        return children
    }
    return <Navigate to="/login" state={{ from: location }} replace />; 

};

export default PrivateRoutes;