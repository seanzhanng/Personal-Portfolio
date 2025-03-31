import { NextResponse } from "next/server";
import postgres from "postgres";

export async function POST(req) {
    try {
        const { name, email, message } = await req.json();
        
        if (!name || !email || !message) {
            return NextResponse.json({ error: "All fields are required" }, { status: 400 });
        }

        // Explicitly enable SSL
        const sql = postgres(process.env.DATABASE_URL, {
            ssl: { rejectUnauthorized: false }, // Fix for SSL connection
        });

        await sql`
            CREATE TABLE IF NOT EXISTS contacts (
                id SERIAL PRIMARY KEY,
                name TEXT NOT NULL,
                email TEXT NOT NULL,
                message TEXT NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `;

        await sql`
            INSERT INTO contacts (name, email, message)
            VALUES (${name}, ${email}, ${message})
        `;

        return NextResponse.json({ message: "Message saved successfully" }, { status: 200 });

    } catch (error) {
        console.error("Database error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}