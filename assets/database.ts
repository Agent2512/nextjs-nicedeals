import { createConnection } from "typeorm";

export default class Databese {
    /**
    * create connection useing typeorm
    */
    constructor() {
        createConnection({
            "type": "mysql",
            "host": "localhost",
            "port": 80,
            "username": "root",
            "password": "",
            "database": "nextjs-nicedeals",
            "synchronize": process.env.NODE_ENV === "development",
            "logging": false,
            "entities": []
        });
    }
}