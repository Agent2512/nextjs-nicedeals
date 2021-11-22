import { Partners } from './entities/Partners';
import { Users } from './entities/Users';
import { createConnection, getConnection } from "typeorm";
import { Role, Roles, setDefaultRoles } from './entities/Roles';
import { Categorys, setDefaultCategorys } from './entities/Categorys';
import { Deals } from './entities/deals';

let connectionReadyPromise: Promise<void> | null = null;

export default async function Databese() {
    if (!connectionReadyPromise) {
        connectionReadyPromise = (async () => {
            try {
                const staleConnection = getConnection();
                await staleConnection.close();
            } catch (error) {
                // no stale connection to clean up
            }

            await makeConnection();
            makeDefaultData();
        })();
    }


    return connectionReadyPromise;
}

const makeConnection = async () => {
    return await createConnection({
        "type": "mysql",

        "host": "localhost",
        "port": 3306,

        "username": "root",
        "password": undefined,
        "database": "nextjs-nicedeals",

        "synchronize": process.env.NODE_ENV === "development",
        "logging": false,

        "entities": [
            Users,
            Roles,
            Partners,
            Categorys,
            Deals
        ],
    });
}

const makeDefaultData = async () => {
    // set default roles
    setDefaultRoles()

    // set default categorys
    setDefaultCategorys()
}
