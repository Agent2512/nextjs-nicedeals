import { hashSync, compareSync } from "bcrypt";
import { Users } from "../entities/Users";
import { BaseControl } from "./baseControl";
import { SignJWT, jwtVerify, JWTVerifyResult } from "jose";
import { SetOption } from "cookies";

export const userTokenCookieOpts: SetOption = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 1000 * 60 * 60 * 2
}


export default class UserControl extends BaseControl {
    private hachPassword(password: string) {
        return hashSync(password, 10);
    }

    private validatePassword(password: string, hash: string) {
        return compareSync(password, hash);
    }

    public async makeUser(username: string, firstName: string, lastName: string, email: string, password: string) {
        await this.runDB()

        const user = new Users();
        user.username = username;
        user.firstName = firstName;
        user.lastName = lastName;
        user.email = email;
        user.password = this.hachPassword(password);

        return await user.save().catch(() => false) as Users | false
    }

    public async getUser_by_id(id: number) {
        await this.runDB()

        return await Users.findOne({ id }).then(user => user == undefined ? false : user)
    }

    public async getUser_by_email(email: string) {
        await this.runDB()

        return await Users.findOne({ email }).then(user => user == undefined ? false : user)
    }

    public async login(email: string, password: string) {
        await this.runDB()

        const user = await this.getUser_by_email(email)

        if (user == false) {
            return false
        }

        if (this.validatePassword(password, user.password) == false) {
            return false
        }

        user.password = '';
        return user
    }
}