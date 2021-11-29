import UserControl, { userSessionOptions } from './../../../assets/controls/userControl';
import { NextApiRequest, NextApiResponse } from "next";
import { withIronSessionApiRoute } from 'iron-session/next';

export default withIronSessionApiRoute(loginRoute, userSessionOptions);

export interface loginRouteRes {
    message: string;
    success: boolean;
}

async function loginRoute(req: NextApiRequest, res: NextApiResponse<loginRouteRes>) {
    // most be a post request
    if (req.method !== 'POST') {
        res.status(405).end();
        return;
    }

    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400).json({
            message: "Please provide email and password",
            success: false
        });
        return;
    }

    const user = await new UserControl().login(email, password);

    if (user == false) {
        res.status(401).json({
            message: "Incorrect email or password",
            success: false
        });
        return;
    } 

    req.session.user = user;
    await req.session.save();

    res.status(200).json({
        message: "User logged in successfully",
        success: true,
    });
    return;
}