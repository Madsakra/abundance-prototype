import { useRouter, useSegments } from "expo-router";
import { createContext, useContext, useEffect, useState } from "react";


const AuthContext = createContext<any>(null);

// HOOK TO RETURN CONTEXT
export function useAuth (){
    return useContext(AuthContext);
}

export function AuthProvider({children}:React.PropsWithChildren)
{
    const rootSegment = useSegments()[0];
    const router = useRouter();
    const [user,setUser] = useState<string | undefined>("");

    // check if user exist when first load
    useEffect(()=>{

        // if user is undefined, do nothing
        if (user === undefined) return;

        // if no user and user is not seeing auth screen
        if (!user && rootSegment !=="(auth)")
        {
            router.replace("/(auth)/landing")
        }

        // if user logged in and not seeing app page, show them
        else if (user && rootSegment !=="(app)")
        {
            router.replace("/")
        };

    },[user,rootSegment])


    return (
        <AuthContext.Provider
        value={{
            // state of user
            user:user,

            signIn: ()=>{
                setUser("Me")
            },

            signOut:()=>{
                setUser("");
            }

        }}
        >
            {children}

        </AuthContext.Provider>
    )
}