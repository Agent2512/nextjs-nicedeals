import Cookies from 'cookies';
import { NextApiRequest, NextApiResponse } from "next";
import UserControl from '../../../assets/controls/userControl';
import { Users } from "../../../assets/entities/Users";
import { verifyJWT } from '../../../assets/jwt';

export interface userRouteRes {
    isLoggedIn: boolean;
    user: Users | null;
}

export default async function userRoute(req: NextApiRequest, res: NextApiResponse<userRouteRes>) {
    // most be a get request
    if (req.method !== 'GET') {
        res.status(405).end();
        return;
    }

    const cookies = new Cookies(req, res)
    const userJWT = cookies.get('userToken')

    if (userJWT == undefined) {
        res.json({
            isLoggedIn: false,
            user: null
        });
        return;
    }

    const user = await verifyJWT<Users>(userJWT, "user")

    if (user == false) {
        cookies.set('userToken', '', {
            maxAge: 0
        })


        res.json({
            isLoggedIn: false,
            user: null
        });
        return;
    }


    res.json({
        isLoggedIn: true,
        user: user
    })
}