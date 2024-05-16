import { createContext, useContext, ReactNode } from "react";

const AuthContext = createContext({});

function AuthContextProvider({ children }: { children: ReactNode }) {
    return (
        <AuthContext.Provider value={{
            name: "Guilherme Akihito",
            email: "akihitopro7@gmail.com"
        }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    return useContext(AuthContext);
}

export {AuthContextProvider, useAuth}