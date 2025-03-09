
import { pgTable, serial, varchar, text } from 'drizzle-orm/pg-core';

export const infoTable = pgTable("infos", {
    id: serial('id').primaryKey(), 
    FullName: text('FullName'),
    Title: text('title').notNull(),
    description: text('description').notNull(),
    Image: varchar('Image'),
    createdAt: text('createdAt').default('CURRENT_TIMESTAMP'),
  });