import React, { useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../FirebaseSetUp/Firebase.init';

const AuthProvider = ({children}) => {

       const [loading , setLoading ] = useState(true);

       // create user for register
       const createUserRegister = (email , password) => {
              setLoading(true);
              return createUserWithEmailAndPassword( auth ,email , password)
       }

       // create login withFirebase


       const authInfo = {
              createUserRegister,
              loading,

       }
       return (
              <AuthContext value={authInfo}>
                     {children}
              </AuthContext>
       );
};

export default AuthProvider;