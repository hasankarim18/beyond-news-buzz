import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import Loading from '../Utils/Loading';

const PrivateRoute = ({children}) => {
    const location = useLocation()
    const {user, loading} = useContext(AuthContext)
    console.log(loading);

    if(loading){
        return <Loading />
    }else {
 if (user) {
   return children;
 } else {
   return <Navigate to="/login" state={{ from: location }} replace />;
 }
}

   
    
  
};

/**
 * STEPS 
 * 1. Check user is logged in or not 
 * 2.. if user is logged in allow them to visit the route 
 * 3. else redirect them to the other page
 * 4. setup the private router 
 * 
 */

export default PrivateRoute;