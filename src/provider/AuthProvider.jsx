import { createContext } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import { useState } from "react";
import { useEffect } from "react";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {

   const googleProvider = new GoogleAuthProvider();
   const [loading, setLoading] = useState(true);
   const [user, setUser] = useState(null);

   const signWithGoogle = () => {
      setLoading(true);
      return signInWithPopup(auth, googleProvider);
   }
   const userRegistration = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
   }
   const userLogin = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password)
   }
   const logOut = () => {
      setLoading(true);
      return signOut(auth)
   }
   useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, currentUser => {
         console.log('user in auth state', currentUser);
         setUser(currentUser);
         setLoading(false);
      })
      return () => unsubscribe()
   },[])
   const userInfo = {
      userLogin,
      userRegistration,
      loading,
      signWithGoogle,
      logOut,
      user,
   }
   return (
      <AuthContext.Provider value={userInfo}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthProvider;