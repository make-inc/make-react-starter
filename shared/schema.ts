/**
 * Database schema definitions using Drizzle ORM for PostgreSQL.
 * 
 * This file contains all table schemas that are shared between
 * the client and server applications.
 * 
 * @fileoverview Database schema definitions
 */
import { pgTable, text, integer, timestamp } from 'drizzle-orm/pg-core';
import { z } from 'zod';
import { createInsertSchema } from 'drizzle-zod';

/** 
 * Add your table schemas here.
 * 
 * For example, if you have a users table, you can define the schema like this:
 * 
 * export const users = pgTable('users', {
 *   id: integer('id').primaryKey().generatedByDefaultAsIdentity(),
 *   name: text('name').notNull(),
 *   email: text('email').notNull().unique(),
 *   createdAt: timestamp('created_at').defaultNow(),
 *   updatedAt: timestamp('updated_at').defaultNow()
 * });
 * 
 * export const insertUserSchema = createInsertSchema(users).pick({
 *   username: true,
 *   password: true,
 * });
 * 
 * export type InsertUser = z.infer<typeof insertUserSchema>;
 * export type User = typeof users.$inferSelect;
 * 
 * Remove the example above and add your own table schemas here.
 */