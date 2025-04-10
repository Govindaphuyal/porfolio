import { db } from "@/db/database";

import { infoTable } from "../../../../db/infoschema";

import { eq } from "drizzle-orm";

export async function GET(request,{params}) {
  try {
      const id=await params.id
      const users = await db.select().from(infoTable).where(eq(infoTable.id, id));;
    return Response.json({ users }, { status: 200 });
  } catch (error) {
    // return Response.json({ error: "Authentication failed" }, { status: 403 });
  }
}