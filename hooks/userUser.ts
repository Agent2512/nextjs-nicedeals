import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { createContext, useContext } from "react"
import { Users } from "../assets/entities/Users"
import { newsletterIsUserRouteRes } from "../pages/api/newsletter/isUser"
import {  useApi2 } from "./useApi"

interface IUser extends Users {
    isNewsSub: boolean;
}

export const useUser = () => {
    const { user, setUser } = useContext(UserContext)
    
    const router = useRouter()
    const { get: userGet } = useApi2("api/user/")

    const logout = () => {
        userGet("logout")
        setUser(null)
        router.push("/")
    }

    



    return {
        user: user,
        logout,
    }
}




export const UserContext = createContext<{
    user: Users | null
    setUser: (user: Users | null) => void
}>({ user: null, setUser: () => { } })


