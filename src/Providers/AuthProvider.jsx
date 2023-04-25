import React, { createContext, useState } from 'react';
import { getAuth } from "firebase/auth";
import app from '../firebase.config';

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true)

    const auth = getAuth(app)

    const user = {displayName: 'Muri Khan'}

    console.log(auth);

    const authInfo = {
        user
    }

    return (
        <AuthContext.Provider value={authInfo}>
         {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;