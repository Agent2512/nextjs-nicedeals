import { Users } from './entities/Users';
import { createConnection, getConnection } from "typeorm";
import { Roles } from './entities/Roles';

export default async function Databese() {
    try {
        const con = getConnection();

        if (con.isConnected) {
            return con;
        }


    } catch {
        console.log('database connected');
        return makeConnection();
    }
}


const makeConnection = () => {
    return createConnection({
        "type": "mysql",

        "host": "localhost",
        "port": 3306,

        "username": "root",
        "password": undefined,
        "database": "nextjs-nicedeals",

        "synchronize": process.env.NODE_ENV === "development",
        "logging": false,

        "entities": [
            Users
        ],
    });
}