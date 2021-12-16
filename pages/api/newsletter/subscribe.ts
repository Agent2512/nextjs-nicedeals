import { NextApiRequest, NextApiResponse } from "next";
import { object, string, boolean } from "yup";
import NewsletterControl from "../../../assets/controls/newsletterControl";

export interface NewsletterSubscribeRouteRes {
    message: "subscribed" | "unsubscribed" | "error"
    success: boolean;
}

export default async function add(req: NextApiRequest, res: NextApiResponse<NewsletterSubscribeRouteRes>) {
    // must be POST
    if (req.method !== "POST") {
        res.status(405).end();
        return;
    }

    // validate request body
    const schemaData = await newsletterIsUserSchema.validate(req.body).catch(() => false) as { email: string; value: boolean } | false

    if (schemaData == false) {
        res.status(400).json({
            message: "error",
            success: false
        });
        return;
    }

    if (schemaData.value) {
        // subscribe user
        await new NewsletterControl().subscribe_with_user_email(schemaData.email).then(val => {
            if (val) {
                res.status(200).json({
                    message: "subscribed",
                    success: true
                })
            }
            else {
                res.status(500).json({
                    message: "error",
                    success: false
                })
            }
        });
        return
    }
    else {
        // unsubscribe user
        await new NewsletterControl().unsubscribe_with_user_email(schemaData.email).then(val => {
            if (val) {
                res.status(200).json({
                    message: "unsubscribed",
                    success: true
                })
            }
            else {
                res.status(500).json({
                    message: "error",
                    success: false
                })
            }
        });
        return
    }


}

// newsletterIsUserSchema yup
const newsletterIsUserSchema = object({
    email: string().trim().required().email(),
    value: boolean().required()
})