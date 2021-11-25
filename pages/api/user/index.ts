import { withIronSessionApiRoute } from "iron-session/next";
import { NextApiRequest, NextApiResponse } from "next";
import { userSessionOptions } from "../../../assets/controls/userControl";

export default withIronSessionApiRoute(userRoute, userSessionOptions);

async function userRoute(req: NextApiRequest, res: NextApiResponse) {
    // most be a get request
    if (req.method !== 'GET') {
        res.status(405).end();
        return;
    }

    if (req.session.user) {
        res.status(200).json({
            ...req.session.user,
            isLoggedIn: true
        });
        return;
    }
    

    res.status(200).json({
        isLoggedIn: false
    });
    return;
}