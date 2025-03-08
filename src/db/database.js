import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
const connect = postgres("postgresql://postgres.rdhbgalzrhekzcwerkst:connecttocluster@aws-0-ap-south-1.pooler.supabase.com:6543/postgres")
export const db = drizzle(connect);