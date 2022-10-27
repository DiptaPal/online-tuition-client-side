import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const PrivateRoutes = ({ children }) => {
    const { loader, user } = useContext(AuthContext)
    const location = useLocation() 

    if(loader){
        return <div>Loading</div>
    }

    if(user && user.uid){
        return children
    }
    return <Navigate to='/login' state={{form: location}} replace></Navigate> 

};

export default PrivateRoutes;