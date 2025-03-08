import { pgTable, serial, varchar, text } from 'drizzle-orm/pg-core';

export const usersTable = pgTable("users", {
  id: serial("id").primaryKey(),
  username: varchar("username", { length: 9 }).notNull(),
  password: varchar("password", { length: 15 }).notNull(),
  confirm_password: varchar("confirm_password", { length: 20 }).notNull(),
  email: varchar("email", { length: 25 }).notNull().unique(),
});

export const infoTable = pgTable("infos", {
  id: serial('id').primaryKey(), 
  FullName: text('FullName'),
  Email: text('Email').unique(),
  Image: varchar('Image'),
  createdAt: text('createdAt').default('CURRENT_TIMESTAMP'),
});



