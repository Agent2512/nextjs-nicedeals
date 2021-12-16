import { createJWT } from './../../../assets/jwt';
import UserControl, { userTokenCookieOpts } from './../../../assets/controls/userControl';
import { NextApiRequest, NextApiResponse } from "next";
import { LoginFormData } from '../../../component/forms/loginForm';
import { object, string } from "yup";
import Cookies from "cookies";
import { Users } from '../../../assets/entities/Users';
import NewsletterControl from '../../../assets/controls/newsletterControl';



export interface userLoginRouteRes {
    message: string;
    success: boolean;
}

export default async function loginRoute(req: NextApiRequest, res: NextApiResponse<userLoginRouteRes>) {
    // most be a post request
    if (req.method !== 'POST') {
        res.status(405).end();
        return;
    }

    // validate data
    const SchemaUser: LoginFormData | false = await userLoginSchema.validate(req.body).catch(() => false);

    if (SchemaUser === false) {
        // validation failed
        res.status(400).json({
            message: 'Validation failed',
            success: false,
        })
        return;
    }

    // get userControl
    const userControl = new UserControl();


    // get user
    const user = await userControl.login(SchemaUser.email, SchemaUser.password);

    if (user === false) {
        // user not found
        res.status(401).json({
            message: 'Incorrect email or password"',
            success: false,
        })
        return;
    }

    // make JSON Web Token
    const userJWT = await createJWT({user});
    
    // set cookie
    const cookies = new Cookies(req, res)
    cookies.set('userToken', userJWT, userTokenCookieOpts)
    
    // login success
    res.status(200).json({
        message: "User logged in successfully",
        success: true,
    });
    return;
}

// userLoginSchema yup
const userLoginSchema = object({
    email: string().trim().required().email(),
    password: string().trim().required().min(8).matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
})