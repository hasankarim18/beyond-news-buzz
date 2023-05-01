import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase.config';

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    const auth = getAuth(app);

    useEffect(() => {
     const unsubscirbe = onAuthStateChanged(auth, (loggedUser) => {
        if (loggedUser) {
          
          setUser(loggedUser);
          setLoading(false)
        } else {
          // User is signed out
          // ...
        //  console.log("user logged out in observer");
        }

        
      });

      return () => {
        return unsubscirbe();
      };
    }, [])
    

    const createUser = (email, password)=> {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password)=> {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logout = ()=> {
        return signOut(auth)
    }

    

   // console.log(auth);

    const authInfo = {
      user,
      createUser,
      signInUser,
      setUser,
      logout,
      loading,
    };

    return (
        <AuthContext.Provider value={authInfo}>
         {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;