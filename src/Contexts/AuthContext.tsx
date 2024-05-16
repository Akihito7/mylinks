import { createContext, useContext, ReactNode, useState } from "react";


type UserProps = {
    id : number,
    email: string,
    name: string,
    token: string,
}

type PropsAuhtContext = {
    user: UserProps,
    setUser : ({} : UserProps) => void;
}


const AuthContext = createContext({} as PropsAuhtContext);

function AuthContextProvider({ children }: { children: ReactNode }) {

    const [user, setUser] = useState({} as UserProps);

    return (
        <AuthContext.Provider value={{
            user,
            setUser,
        }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    return useContext(AuthContext);
}

export { AuthContextProvider, useAuth }