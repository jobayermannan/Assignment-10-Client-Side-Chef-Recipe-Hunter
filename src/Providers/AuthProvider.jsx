import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/FirebaseConfig';
 
 
const auth =getAuth(app)

 export const AuthContext =createContext(null)




const AuthProvider = ({children}) => {
  const [user,setUser] =useState(null);
  const [loader,setLoader] = useState(true);
  const provider= new GoogleAuthProvider();
  const gitProvider= new GithubAuthProvider();

    const  createUser =(email,password)=>{
      setLoader(true)
      return createUserWithEmailAndPassword(auth,email,password)
    }

    const  signUser= (email,password)=>{
       setLoader(true)
       return signInWithEmailAndPassword(auth,email,password);
  } 

  
        
const updateCurrentUser = (user,name) => {
  setLoader(true)
  return updateProfile(user,name);
 }
 





  const SignInWithGoogle= ()=>{
    setLoader(true)
    return signInWithPopup(auth,provider);
  }
  const SignInWithGItHUb= ()=>{
    setLoader(true)
    return signInWithPopup(auth,gitProvider);
  }
  useEffect(()=>{
       const unSubscriber=      onAuthStateChanged(auth, (loggedUser)=>{
              console.log("ami asi " ,loggedUser);
              setUser(loggedUser)
              setLoader(false)
             }

       )

       return (()=>{
        unSubscriber
       })
  },[])



   const logOut=()=>{
    setLoader(true)
    return signOut(auth);
   }

  const authInfo={
    user, createUser,signUser,logOut,loader,SignInWithGoogle,SignInWithGItHUb,updateCurrentUser
  }



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;