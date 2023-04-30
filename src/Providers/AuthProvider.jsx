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
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          // const uid = user.uid;
          setUser(loggedUser);
        //  console.log("logged in user inside observer");
        //  console.log(loggedUser);
          // ...
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
    };

    return (
        <AuthContext.Provider value={authInfo}>
         {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;