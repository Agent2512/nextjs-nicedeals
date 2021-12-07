import { userRouteRes } from './../pages/api/user/index';
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { createContext, useContext } from "react"
import { Users } from "../assets/entities/Users"
import { userLoginRouteRes } from "../pages/api/user/login"
import { useApi, useApi2 } from "./useApi"



export const useUser = () => {
    const router = useRouter()
    const { get } = useApi2("api/user/")
    const { user, setUser } = useContext(UserContext)
    const [isLoggedIn, setIsLoggedIn] = useState(user == null ? false : true)

    const logout = () => {
        get("logout")
        setUser(null)
        router.reload()
    }


    return {
        user,
        isLoggedIn,
        logout,
    }
}

export const UserContext = createContext<{
    user: Users | null
    setUser: (user: Users | null) => void
}>({ user: null, setUser: () => { } })