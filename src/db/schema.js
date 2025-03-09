import { pgTable, serial, varchar, text } from 'drizzle-orm/pg-core';

export const usersTable = pgTable("users", {
  id: serial("id").primaryKey(),
  username: varchar("username", { length: 25 }).notNull(),
  password: varchar("password", { length: 60 }).notNull(),
  email: varchar("email", { length: 60 }).notNull().unique(),
});





