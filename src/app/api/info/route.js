import { db } from "@/db/database";

import { infoTable } from "../../../db/infoschema";

// Environment variables (add to .env)
 // Use strong secret in production

export async function GET(request,) {
  try {
    const users = await db.select().from(infoTable);
    return Response.json({ users }, { status: 200 });
  } catch (error) {
    return Response.json({ error: "Authentication failed" }, { status: 403 });
  }
}

export async function POST(request) {
  try {
    const data= await request.json();

    
    // const existingUser = await db
    //   .select()
    //   .from(usersTable)
    //   .where(eq(usersTable.email, email));
    // if (existingUser.length > 0) {
    //   return Response.json({ error: "User already exists" }, { status: 409 });
    // // }

    

    const newInfo = await db
      .insert(infoTable)
      .values(data);

    

    return Response.json(
      { message: "User created successfully", newInfo },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration error:", error);
    return Response.json({ error: "Registration failed" }, { status: 500 });
  }
}