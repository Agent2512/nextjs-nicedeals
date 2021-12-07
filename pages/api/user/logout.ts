import Cookies from "cookies";
import { NextApiRequest, NextApiResponse } from "next";

export default async function logoutRoute(req: NextApiRequest, res: NextApiResponse) {
    // most be a get request
    if (req.method !== 'GET') {
        res.status(405).end();
        return;
    }

    const cookies = new Cookies(req, res)
    const userJWT = cookies.get("userToken")

    if (userJWT) {
        cookies.set("userToken", "", {
            maxAge: -1,
        })
    }

    res.status(200).json({
        success: true,
    })
    return
}