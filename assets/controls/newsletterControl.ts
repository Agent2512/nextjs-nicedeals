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

    public async isUserSubscribed(email: string) {
        await this.runDB()

        const user = await Users.findOne({ where: { email: email } })

        if (user) {
            const newsletter = await Newsletter.findOne({ where: { user: user } })

            if (newsletter) {
                return true
            }
        }

        return false
    }

    public async subscribe_with_user_email(email: string) {
        await this.runDB()

        const user = await Users.findOne({ where: { email: email } })

        if (user) {
            const newsletter = await Newsletter.findOne({ where: { user } })

            if (!newsletter) {
                return await this.newRow(email, user.username, user).then(() => true).catch(() => false)
            }

            return true
        }

        return false
    }

    public async unsubscribe_with_user_email(email: string) {
        await this.runDB()

        const user = await Users.findOne({ where: { email: email } })

        if (user) {
            const newsletter = await Newsletter.findOne({ where: { user } })

            if (newsletter) {
                return await newsletter.remove().then(() => true).catch(() => false)
            }

            return true
        }

        return false
    }
}