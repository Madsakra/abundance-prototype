import { useRouter, useSegments } from "expo-router";
import { createContext, useContext, useEffect, useState } from "react";

// Define user type
interface User {
    id: string;
    name: string;
    email: string;
    token: string;

    profileID?:string;
    // Add more fields as needed
  }


const AuthContext = createContext<any>(null);

// HOOK TO RETURN CONTEXT
export function useAuth (){
    return useContext(AuthContext);
}




export function AuthProvider({children}:React.PropsWithChildren)
{
    const rootSegment = useSegments()[0];
    const router = useRouter();
    const [user, setUser] = useState<User | undefined>(undefined);

    // check if user exist when first load
    useEffect(()=>{

      

        // if no user and user is not seeing auth screen
        if (user===undefined && rootSegment !=="(auth)")
        {
            router.replace("/(auth)/landing")
        }

        // if user logged in and not seeing app page, show them
        else if (user && rootSegment !=="(app)")
        {
            // IF USER LOGS IN FOR THE FIRST TIME
            if (!user.profileID || user.profileID.trim() === "") 
            {
                router.replace("/(profileCreation)/simpleInformation");
            }

            else{
                router.replace("/")
            }

           


        };

    },[user,rootSegment])


    return (
        <AuthContext.Provider
        value={{
            // state of user
            user:user,

            signIn: (userData: User) => {
                setUser(userData); // Set the full user object from API
              },

            signOut:()=>{
                setUser(undefined);
            }

        }}
        >
            {children}

        </AuthContext.Provider>
    )
}