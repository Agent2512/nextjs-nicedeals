import Databese from "../database";

export class BaseControl {
    dbcheck: boolean = false;

    public async runDB() {
        if (this.dbcheck == false) {
            await Databese()
            this.dbcheck = true
        }
    }
}