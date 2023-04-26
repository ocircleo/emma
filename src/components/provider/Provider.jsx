import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import app from '../../utilities/app_config.js'
export const authContext = createContext(null);
const Provider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const auth = getAuth(app);
    const createEmailAcount = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const loginWithEmail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const signOutUser = () => {
        return signOut(auth);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(!loading);
        })
        return () => {
            unsubscribe()
        }
    }, [])
    const authInfo = {
        loading, user, auth, createEmailAcount,loginWithEmail,signOutUser
    }

    return (<authContext.Provider value={authInfo}>
        {children}
    </authContext.Provider>
    )



};

export default Provider;