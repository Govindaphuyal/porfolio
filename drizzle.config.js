
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  schema: './src/db/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url:"postgresql://postgres.kmrbrrcyixswmpkpqhqd:connecttocluster@aws-0-ap-south-1.pooler.supabase.com:6543/postgres",
  },
});
