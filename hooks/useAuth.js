import React, { createContext, useContext } from 'react'
import * as Google from "expo-google-app-auth"

const AuthContext = createContext({

})

const config = {
    scopes: ["profile", "email"],
    permissions: ["public_profile", "email", "gender", "location"],
    androidClientId: process.env.androidClientId
}

export const AuthProvider = ({ children }) => {

    const signInWithGoogle = async () => {
        await Google.logInAsync()
    }

    return (
        <AuthContext.Provider value={{
            user: null
        }
        }>
            {children}
        </AuthContext.Provider>
    )
}

export default function useAuth() {
    return useContext(AuthContext)
}