import { serial, pgTable, varchar } from "drizzle-orm/pg-core";
export const usersTable = pgTable("users", {
  id: serial("id").primaryKey(),
  username: varchar("name",{ length: 9 }).notNull(),
  password: varchar("password",{length:15}).notNull(),
  email: varchar("email",{ length: 10 }).notNull().unique(),
});