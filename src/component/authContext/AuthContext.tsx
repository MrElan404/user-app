import { useState, createContext, useContext } from 'react';


type AuthProviderType = {
    children: React.ReactNode;
}

export const AuthContext = createContext<any>({});

export const AuthProvider = ({ children }: AuthProviderType) => {
    const [user, setUserId] = useState(0);
    const [authenticate, setAuthenticate] = useState(false);

    const login = (user: any) => {
        return setUserId(user),setAuthenticate(true);
    }

    const logout = () => {
       return setUserId(0),setAuthenticate(false);
    }

    return (
        <AuthContext.Provider value={{ user, authenticate, login, logout }} >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}
