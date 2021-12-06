import { useRouter } from "next/router"
import { createContext, useContext } from "react"
import { Users } from "../assets/entities/Users"
import { userLoginRouteRes } from "../pages/api/user/login"
import { useApi } from "./useApi"



export const useUser = () => {
    const user = useContext(UserContext)

    

    return {  



    }
}

export const UserContext = createContext<Users | null>(null)

