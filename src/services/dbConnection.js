import { dbConfig } from "../config/db.config.js";
import { initUser, User } from "../models/user.model.js";

export const dbConnect = async () =>{
    try {
        await dbConfig.authenticate();

        initUser(dbConfig);

        await dbConfig.sync();

        console.log(`Logramos conectarnos a la base de datos`);

    } catch (error) {
        console.error(`No pudimos conectarnos a la BD, ${error}`);
        process.exit(1);    
    }
}