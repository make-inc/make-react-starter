/**
 * Drizzle Kit configuration for database migrations and schema management.
 * 
 * This configuration defines how Drizzle Kit should handle database
 * migrations, schema generation, and connection settings for PostgreSQL.
 * 
 * @fileoverview Drizzle Kit configuration
 */
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './shared/schema.ts',
  out: './server/db/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL || 'postgresql://localhost:5432/makeinc'
  }
});