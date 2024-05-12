import { NextRequest, NextResponse } from 'next/server';
import { createConnection } from 'mysql2/promise';


// Function to create a MySQL connection
async function connectToDatabase() {
    return createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'crud_db',
    });
  }

export async function PUT (req:NextRequest){
    try{
        const userdata = await req.json();
        const { id, name, email } = userdata;
    
        if (!id || !name || !email) {
            return new NextResponse(JSON.stringify({ error: 'id, name, and email are required in the request body.' }),{status:400});
        }
      
        
        const connection = await connectToDatabase();

        // Execute a query to update the user in the "users" table
        const [result] = await connection.execute(
          'UPDATE users SET name = ?, email = ? WHERE id = ?',
          [name, email, id]
        );
    
        // Close the database connection
        await connection.end();
        // Check if the user was updated successfully
        if (result["affectedRows"] === 0) {
            return new NextResponse(JSON.stringify( {error: 'User not found.' }),{status:404});
        }
    
        // Respond with a success message
        return new NextResponse(JSON.stringify( { message: 'User updated successfully' }),{status:200});

    }catch(error){
        console.error('Error connecting to the database:', error);
    return new NextResponse(JSON.stringify({error: 'Internal Server Error'}), {status: 500});
    }
   
} 