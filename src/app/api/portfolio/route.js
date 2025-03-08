import {db} from "@/db/database"
import {usersTable} from "../../../db/schema"
export async function GET(){
    const datas=await db.select().from(usersTable);
    return Response.json({
        usersTable:datas
    })
    
}
export async function POST(request) {
    try {
      const data = await request.json();
      console.log("Received data:", data);
      
      const newEntry = await db.insert(usersTable).values(data);
  
      return Response.json({ message: "Inserted successfully", newEntry }, { status: 201 });
    } catch (error) {
      console.error("Database error:", error);
      return Response.json({ message: "Failed to insert" }, { status: 500 });
    }
  }