import { Partners } from './entities/Partners';
import { Users } from './entities/Users';
import { createConnection, getConnection } from "typeorm";
import { Role, Roles } from './entities/Roles';
import { Categorys } from './entities/Categorys';
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
    await Roles.create({
        roleName: Role.USER,
    }).save();
    await Roles.create({
        roleName: Role.ADMIN,
    }).save();
    await Roles.create({
        roleName: Role.PARTNER,
    }).save();

    // set default categorys
    await Categorys.create({
        name: "Ophold",
        slug: "ophold",
    }).save();
    await Categorys.create({
        name: "Rejser",
        slug: "rejser",
    }).save();
    await Categorys.create({
        name: "Mad og vin",
        slug: "mad-og-vin",
    }).save();
    await Categorys.create({
        name: "Produkter",
        slug: "produkter",
    }).save();
    await Categorys.create({
        name: "Sidste chance",
        slug: "sidste-chance",
    }).save();
    await Categorys.create({
        name: "Gavekort",
        slug: "gavekort",
    }).save();
}