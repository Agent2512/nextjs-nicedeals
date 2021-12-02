import { Users } from "../entities/Users";
import { Newsletter } from "../entities/Newsletter";
import { BaseControl } from "./baseControl";


export default class NewsletterControl extends BaseControl {

    public async newRow(email: string, name: string, user: Users | null = null) {
        await this.runDB()

        let newsletter = new Newsletter()
        newsletter.email = email
        newsletter.name = name
        newsletter.user = user

        return await newsletter.save().catch(() => false)
    }
}