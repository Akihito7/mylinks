import { createContext, useContext, ReactNode, useState, useEffect } from "react";
import { api } from "../services/axios";
import { AppError } from "../utils/AppError";
import { Toast } from "native-base";
import AsyncStorage from '@react-native-async-storage/async-storage';



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
    password: string,
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
    const USERCREDENTIALSASYNCSTORAGE = "@mylinks:user"

    async function signln({ email, password }: LoginProps) {
        try {
            const response = await api.post("/auth/signln", { email, password });
            
            api.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`

            const user = {
                ...response.data.user,
                token: response.data.token
            };

            setUser(user);
            await AsyncStorage.setItem(USERCREDENTIALSASYNCSTORAGE, JSON.stringify({ ...user, password }));


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
            await signln(credentials)
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

    async function attemptAutoLogin() {
        const userCredentials = await AsyncStorage.getItem(USERCREDENTIALSASYNCSTORAGE);
        const parsedUser: UserProps | undefined = userCredentials ? JSON.parse(userCredentials) : undefined;

        if (!parsedUser) return;

        try {
            await signln(parsedUser);
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

    useEffect(() => {
        attemptAutoLogin();
    }, [])


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