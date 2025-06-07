import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../FirebaseSetUp/Firebase.init';

const AuthProvider = ({children}) => {

       const [loading , setLoading ] = useState(true);
       const [user , setUser] = useState(null);

       // create user for register
       const createUserRegister = (email , password) => {
              setLoading(true);
              return createUserWithEmailAndPassword( auth ,email , password)
       }

       // create login withFirebase
       const createLoginUser = (email , password)=>{
              setLoading(true);
              return signInWithEmailAndPassword(auth , email , password);
       }

       // observer
       useEffect(()=>{
              const unSubscribe = onAuthStateChanged(auth , (CurrentUser) => {

                     setUser(CurrentUser)
                     setLoading(false)
                     console.log('user in the auth ' , CurrentUser);
              })
              return () => {
                     unSubscribe();
              }
       },[])


       const authInfo = {
              createUserRegister,
              loading,
              createLoginUser,
              user,

       }
       return (
              <AuthContext value={authInfo}>
                     {children}
              </AuthContext>
       );
};

export default AuthProvider;