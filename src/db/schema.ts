import {
  integer,
  pgTable,
  varchar,
  text,
  timestamp,
} from 'drizzle-orm/pg-core';
import { nanoid } from 'nanoid';

export const usersTable = pgTable('users', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  age: integer().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
});

export const agents = pgTable('agents', {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => nanoid()),
  name: text('name').notNull(),
  userId: text('user_id').notNull(),
  instructions: text('instructions').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});
