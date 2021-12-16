import { NewsletterSubFormData } from './../../../component/forms/newsletterSubForm';
import { NextApiRequest, NextApiResponse } from "next";
import { object, string } from "yup";
import NewsletterControl from "../../../assets/controls/newsletterControl";

export interface newsletterAddRouteRes {
    message: string;
    success: boolean;
}

export default async function add(req: NextApiRequest, res: NextApiResponse<newsletterAddRouteRes>) {
    // must be POST
    if (req.method !== "POST") {
        res.status(405).end();
        return;
    }

    // validate data
    const SchemaNewsletter: NewsletterSubFormData | false = await newsletterAddSchema.validate(req.body).catch(() => false)

    if (SchemaNewsletter === false) {
        // validation failed
        res.status(400).json({
            message: 'Validation failed',
            success: false
        })
        return;
    }

    await new NewsletterControl().newRow(SchemaNewsletter.email, SchemaNewsletter.name)

    res.status(200).json({
        message: 'Success',
        success: true
    })
}

// newsletterAddSchema yup
const newsletterAddSchema = object({
    email: string().trim().required().email(),
    name: string().trim().required().min(2)
})
