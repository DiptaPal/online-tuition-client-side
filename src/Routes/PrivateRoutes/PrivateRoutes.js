import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

import { BallTriangle } from  'react-loader-spinner'


const PrivateRoutes = ({ children }) => {
    const { user, loader } = useContext(AuthContext);
    const location = useLocation();

    if (loader) {
        return <div className='flex justify-center items-end'>
            <BallTriangle
                height={100}
                width={100}
                radius={5}
                color="#fd661f"
                ariaLabel="ball-triangle-loading"
                wrapperClass={{}}
                wrapperStyle=""
                visible={true}
            /></div>
    }
    if (user && user.uid) {
        return children
    }
    return <Navigate to="/login" state={{ from: location }} replace />;

};

export default PrivateRoutes;