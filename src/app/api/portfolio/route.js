import { db } from "@/db/database";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { usersTable } from "../../../db/schema";



export async function GET(request,token) {
  try {
    const users = await db.select().from(usersTable);
    return Response.json({ users }, { status: 200 });
  } catch (error) {
    return Response.json({ error: "Authentication failed" }, { status: 403 });
  }
}

export async function POST(request) {
  try {
    const { username, email, password, confirm_password } = await request.json();

    if (!username || !email || !password || !confirm_password) {
      return Response.json({ error: "All fields are required" }, { status: 400 });
    }

    if (password !== confirm_password) {
      return Response.json({ error: "Passwords do not match" }, { status: 400 });
    }

    // const existingUser = await db
    //   .select()
    //   .from(usersTable)
    //   .where(eq(usersTable.email, email));
    // if (existingUser.length > 0) {
    //   return Response.json({ error: "User already exists" }, { status: 409 });
    // // }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await db
      .insert(usersTable)
      .values({ username, email, password: hashedPassword });

    const token = jwt.sign(
      {  username:username,email:email },
      "shhhh",
      { expiresIn: "1h" }
    );

    return Response.json(
      { message: "User created successfully", token },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration error:", error);
    return Response.json({ error: "Registration failed" }, { status: 500 });
  }
}