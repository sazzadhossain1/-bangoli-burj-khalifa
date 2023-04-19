import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.init";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // create User //
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login User //
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // LogOut user //
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // signIn with google //
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  // get current user //
  useEffect(() => {
    const unSubScribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unSubScribe();
  }, []);
  const authInfo = {
    user,
    loading,
    createUser,
    loginUser,
    logOut,
    signInWithGoogle,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
