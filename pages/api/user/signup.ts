import { SignupFormData } from './../../../component/forms/SignupForm';
import { NextApiRequest, NextApiResponse } from "next";
import UserControl from '../../../assets/controls/userControl';
import { object, string, boolean } from "yup";

export interface signupRouteRes {
    message: string;
    success: boolean;
}

export default async function signupRoute(req: NextApiRequest, res: NextApiResponse<signupRouteRes>) {
    // only from signup page
    if (req.headers.referer === undefined || req.headers.referer.indexOf('/signup') === -1) {
        res.status(403).end();
        return;
    }

    // most be a post request
    if (req.method !== 'POST') {
        res.status(405).end();
        return;
    }

    var test = {
        firstName: 'nklas',
        lastName: 'gadeberg',
        acceptNewsletter: "ggg",
        username: 'Agent2512',
        email: 'spiler2512@gmail.com',
        password: '123456789jH!',
        confirmPassword: '123456789jH!'
    }

    // validate data
    const SchemaUser: SignupFormData | false = await userSignupSchema.validate(test).catch(() => false);

    if (SchemaUser === false) {
        // validation failed
        res.status(400).json({
            message: 'Validation failed',
            success: false
        })
        return;
    }
    else {
        // password match
        if (SchemaUser.password !== SchemaUser.confirmPassword) {
            res.status(400).json({
                message: 'Validation failed',
                success: false
            })
            return;
        }
    }

    // make user
    const user = await new UserControl().makeUser(SchemaUser.username, SchemaUser.firstName, SchemaUser.lastName, SchemaUser.email, SchemaUser.password);

    if (user === false) {
        // user already exists
        res.status(400).json({
            message: 'User already exists',
            success: false
        })
        return;
    }

    res.status(200).json({
        message: 'User created',
        success: true
    })
    return;
}

// userSignupSchema yup
const userSignupSchema = object({
    username: string().trim().required().min(6),
    email: string().trim().required().email(),
    firstName: string().trim().required().min(2),
    lastName: string().trim().required().min(2),
    password: string().trim().required().min(8).matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/),
    confirmPassword: string().trim().required().min(8).matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/),
    acceptNewsletter: boolean().required()
})