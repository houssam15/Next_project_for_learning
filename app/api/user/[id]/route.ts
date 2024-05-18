import { NextRequest, NextResponse } from 'next/server';
import { createConnection } from 'mysql2/promise';


// Function to create a MySQL connection
async function connectToDatabase() {
  return createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'learning_crud_db',
  });
}

export async function GET (req:NextRequest , context:{params:{id:string}}){

  try {
    // Connect to the database
    const connection = await connectToDatabase();
    // Execute a query to retrieve data from the "User" table
    
    const [rows] = await connection.execute('SELECT * FROM users WHERE is_active = 0 AND id = '+context.params.id, );

    // Check if the User exists
     if (Array.isArray(rows) && rows.length===0) {
       return new NextResponse(JSON.stringify({error: 'User not found.'}), {status: 404});
     }

    // Close the database connection
    await connection.end();

    // Respond with the User data
    return new NextResponse(JSON.stringify(rows), {status: 200});
  } catch (error) {
    console.error('Error connecting to the database:', error);
    return new NextResponse(JSON.stringify({error: 'Internal Server Error'}), {status: 500});
  }
} 