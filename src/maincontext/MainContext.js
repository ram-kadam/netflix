import { createContext,  useState } from "react";



export const AuthContext = createContext();

export function AuthProvide({children})
{
    const [user,setUser] = useState(null);
    return (
        <AuthContext.Provider value={{user , setUser}}> 
        {children}
        
        </AuthContext.Provider>
    )
}
