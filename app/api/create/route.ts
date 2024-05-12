import { NextRequest, NextResponse } from 'next/server';
import { createConnection } from 'mysql2/promise';
import bcrypt from 'bcrypt';


// Function to create a MySQL connection
async function connectToDatabase() {
  return createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crud_db',
  });
}

export async function POST (req:NextRequest){

  try {
    // Connect to the database
    
    const userdata = await req.json();
    
    const { name, email,phone ,password} = userdata;
    if (!name || !email || !phone || !password) {
        return new NextResponse(JSON.stringify({ error: 'name, email, and password are required in the request body.' }),{status:400});
    }
    
    const hashedPassword = await bcrypt.hash(password, 10); // 10 is the number of salt rounds
    
    const connection = await connectToDatabase();

    // Execute a query to retrieve data from the "user" table
    const [result] = await connection.execute('INSERT INTO users (name, email,phone,password) VALUES (?, ?, ?, ?)', [
        name,
        email,
        phone,
        hashedPassword,
      ]);

    // Close the database connection
    await connection.end();
    // Respond with the User data
    return new NextResponse(JSON.stringify({ id:  result['insertId'] , message: 'User created successfully' }), {status: 200});
  } catch (error) {
    console.error('Error connecting to the database:', error);
    return new NextResponse(JSON.stringify({error: 'Internal Server Error'}), {status: 500});
  }
} 