import { db ,connection} from "./src/db/database";
import {migrate} from "drizzle-orm/postgres-js/migrator"
(async()=>{
    await migrate(db,{migrationsFolder:"./drizzle"})
    await connection.end()
})()