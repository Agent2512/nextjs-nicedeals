import Databese from "../database";

export class BaseControl {
    dbcheck: boolean = false;

    protected async runDB() {
        if (this.dbcheck == false) {
            await Databese()
            this.dbcheck = true
        }
    }
}