import { SignupFormData } from './../../../component/forms/SignupForm';
import { NextApiRequest, NextApiResponse } from "next";
import UserControl from '../../../assets/controls/userControl';
import { object, string, boolean } from "yup";
import NewsletterControl from '../../../assets/controls/newsletterControl';

export interface userSignupRouteRes {
    message: string;
    success: boolean;
}

export default async function signupRoute(req: NextApiRequest, res: NextApiResponse<userSignupRouteRes>) {
    // most be a post request
    if (req.method !== 'POST') {
        res.status(405).end();
        return;
    }


    // validate data
    const SchemaUser: SignupFormData | false = await userSignupSchema.validate(req.body).catch(() => false);

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

    // acceptNewsletter
    if (SchemaUser.acceptNewsletter) {
        await new NewsletterControl().newRow(SchemaUser.email, SchemaUser.firstName, user);
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