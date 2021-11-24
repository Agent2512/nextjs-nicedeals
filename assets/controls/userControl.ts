import { hashSync, compareSync } from "bcrypt";
import Databese from "../database";
import { Role } from "../entities/Roles";
import { Users } from "../entities/Users";

export default class UserControl {
    private hachPassword(password: string) {
        return hashSync(password, 10);
    }

    private validatePassword(password: string, hash: string) {
        return compareSync(password, hash);
    }

    public async makeUser(username: string, firstName: string, lastName: string, email: string, password: string) {
        await Databese()
        const user = new Users();
        user.username = username;
        user.firstName = firstName;
        user.lastName = lastName;
        user.email = email;
        user.password = this.hachPassword(password);

        try {
            return await user.save()
        } catch {
            return false
        }
    }

    public async getUser_by_id(id: number) {
        await Databese()

        return await Users.findOne({ id }).then(user => user == undefined ? false : user)
    }

    public async getUser_by_email(email: string) {
        await Databese()

        return await Users.findOne({ email }).then(user => user == undefined ? false : user)
    }
}