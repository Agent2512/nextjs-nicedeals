import { NextApiRequest, NextApiResponse } from "next";
import { object, string } from "yup";
import NewsletterControl from "../../../assets/controls/newsletterControl";


export interface newsletterIsUserRouteRes {
    message: string;
    success: boolean;
}

export default async function add(req: NextApiRequest, res: NextApiResponse<newsletterIsUserRouteRes>) {
    // must be POST
    if (req.method !== "POST") {
        res.status(405).end();
        return;
    }



    // validate data
    const schemaEmail: { email: string } | false = await newsletterIsUserSchema.validate(req.body).catch(() => false);

    if (schemaEmail == false) {
        res.status(400).json({
            message: "Invalid data",
            success: false
        });
        return;
    }

    const isUser = await new NewsletterControl().isUserSubscribed(schemaEmail.email)

    res.status(200).json({
        message: "User is subscribed",
        success: isUser
    })

}


// newsletterIsUserSchema yup
const newsletterIsUserSchema = object({
    email: string().trim().required().email(),
})