import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import app from "../Components/Firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleprovider = new GoogleAuthProvider();
const Authprovider = ({ children }) => {
    const [user, setUser] = useState(null);
    // google sign in
    const googlesignIN = () => {
        return signInWithPopup(auth, googleprovider)
    }

    //user register
    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // user signin
    const signin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // user state 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('user', currentUser)
            setUser(currentUser)
        })
        return () => {
            unsubscribe();
        }
    }, [])

    // user profile update
    const update = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    // user logout
    const userlogout = () => {
        return signOut(auth)
    }

    const authinfo = {
        googlesignIN,
        signup,
        signin,
        update,
        user,
        userlogout,
    }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};
export default Authprovider;