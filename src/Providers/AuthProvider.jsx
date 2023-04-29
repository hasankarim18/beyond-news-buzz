import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../firebase.config';

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true)

    const auth = getAuth(app)

    const createUser = (email, password)=> {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const user = null

    console.log(auth);

    const authInfo = {
        user,
        createUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
         {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;