import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
import app from "../firebase/firebase.config";

//<---------Import Finishing Line--------->

const auth = getAuth(app);
export const AuthContext = createContext();

//<---------Function--------->
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  const GoogleSignIn = (provider) => {
    setLoader(true);
    return signInWithPopup(auth, provider);
  };

  const CreateUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const veryfieEmailAddress = () => {
    return sendEmailVerification(auth.currentUser);
  };

  const UpdateProfile = (name, photoURL) => {
    setLoader(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });
  };

  const LogIn = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoader(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser === null || currentUser.emailVerified) {
        setUser(currentUser);
      }
      setLoader(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loader,
    setLoader,
    CreateUser,
    veryfieEmailAddress,
    GoogleSignIn,
    logOut,
    LogIn,
    UpdateProfile,
  };

  return (
    <AuthContext.Provider value={authInfo}> {children}</AuthContext.Provider>
  );
};

export default AuthProvider;
