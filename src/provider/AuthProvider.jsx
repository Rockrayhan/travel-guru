import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";


export const AuthContext = createContext(null) ;
const auth = getAuth(app) ;
console.log(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null) ;
    const [loading, setLoading] = useState(true);

    // register
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth , email, password) ;
    }

    // login
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password) ;

    }

  // google 
const provider = new GoogleAuthProvider();
const googleSignIn = () => {
    return signInWithPopup(auth, provider)
       
}


    // logout
    const logOut = () => {
        setLoading(true)
        return signOut(auth) ;
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user state is', currentUser);
            setUser(currentUser);
            setLoading(false)
        })
        return () => {
            unSubscribe() ;
        }
    } , [] )

    const authInfo = {
        user, 
        createUser,
        logOut,
        loginUser,
        loading,
        googleSignIn
    } 
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;