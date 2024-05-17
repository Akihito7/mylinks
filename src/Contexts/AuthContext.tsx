import { createContext, useContext, ReactNode, useState } from "react";
import { api } from "../services/axios";
import { Alert } from "react-native";

export type SignupProps = {
    name: string;
    email: string;
    password: string;
    passwordAgain: string;
}

type UserProps = {
    id: number,
    email: string,
    name: string,
    token: string,
}

type PropsAuhtContext = {
    user: UserProps,
    setUser: ({ }: UserProps) => void;
    signln: (email: string, password: string) => void;
    signup: (credentials: SignupProps) => void;
}


const AuthContext = createContext({} as PropsAuhtContext);

function AuthContextProvider({ children }: { children: ReactNode }) {

    const [user, setUser] = useState({} as UserProps);

    async function signln(email: string, password: string) {
        try {
            const response = await api.post("/auth/signln", { email, password });

            const user = {
                ...response.data.user,
                token: response.data.token
            };

            setUser(user);
        } catch (error) {
            console.log(error)
        }
    }

    async function signup(credentials: SignupProps) {
        try {
            const response = await api.post("/auth/signup", credentials);
            signln(credentials.email, credentials.password)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <AuthContext.Provider value={{
            user,
            setUser,
            signln,
            signup
        }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    return useContext(AuthContext);
}

export { AuthContextProvider, useAuth }