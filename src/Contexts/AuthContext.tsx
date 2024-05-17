import { createContext, useContext, ReactNode, useState } from "react";
import { api } from "../services/axios";
import { Alert } from "react-native";
import { AppError } from "../utils/AppError";
import { Toast } from "native-base";


export type LoginProps = {
    email: string;
    password: string;
}

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
    signln: (credentials: LoginProps) => void;
    signup: (credentials: SignupProps) => void;
}


const AuthContext = createContext({} as PropsAuhtContext);

function AuthContextProvider({ children }: { children: ReactNode }) {

    const [user, setUser] = useState({} as UserProps);

    async function signln({ email, password }: LoginProps) {
        try {
            const response = await api.post("/auth/signln", { email, password });

            const user = {
                ...response.data.user,
                token: response.data.token
            };

            setUser(user);
        } catch (error) {
            const errorMessage = error instanceof AppError ? error.errorMessage : "Erro no servidor, tente novamente mais tarde"
            Toast.show({
                title: errorMessage,
                duration: 3000,
                bg: "red.500",
                placement: "top",
            })
        }
    }

    async function signup(credentials: SignupProps) {
        try {
            await api.post("/auth/signup", credentials);
            signln(credentials)
        } catch (error) {
            const errorMessage = error instanceof AppError ? error.errorMessage : "Erro no servidor, tente novamente mais tarde"
            Toast.show({
                title: errorMessage,
                duration: 3000,
                bg: "red.500",
                placement: "top",
            })
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