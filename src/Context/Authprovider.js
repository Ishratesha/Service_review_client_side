import React from 'react';
import { createContext } from 'react';
import app from '../Firebase/Firebase.config';
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup,signOut, GoogleAuthProvider } from "firebase/auth";
import { useEffect } from 'react';
//context
export const AuthContext =createContext()
const auth = getAuth(app)

const Authprovider = ({children}) => {
const [user,setuser] =useState(null)
const [loading,setloading]=useState(true)

const googleProvider = new GoogleAuthProvider();
const createUser = (email,password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
}
const login = (email, password) =>{
    // setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
}
const signInWithGoogle = () =>{
    return signInWithPopup(auth, googleProvider);
}

const logOut = () => {
    return signOut(auth);
}
useEffect(()=>{
const unsubscribe = onAuthStateChanged(auth, currentUser=>{
    console.log(currentUser)
    setuser(currentUser)
})
return ()=>{
    return unsubscribe();
}
},[])

 
    const authinfo ={
      user,loading, createUser,login,logOut,
      signInWithGoogle
    }
    return (
        <AuthContext.Provider value={authinfo}>
          {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;