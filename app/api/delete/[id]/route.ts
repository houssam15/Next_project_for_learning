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

export async function DELETE (req:NextRequest , context:{params:{id:string}}){
  //console.log(request.nextUrl.searchParams.get("username"))

  try {
    // Connect to the database
    const connection = await connectToDatabase();

    const id = context.params.id;
    if (!id) {
      return  new NextResponse(JSON.stringify({ error: 'id is required in the request body.' }), {status: 400}); 
    }

    const [result] = await connection.execute('DELETE FROM users WHERE id = ?', [id]);
    // Close the database connection
    await connection.end();

    // Check if the user was deleted successfully
    if (result['affectedRows'] === 0) {
        return new NextResponse(JSON.stringify({ error: 'User not found.' }), {status: 404});
    }
  
    // Respond with the User data
    return new NextResponse(JSON.stringify({ message: 'User deleted successfully' }), {status: 200});
  } catch (error) {
    console.error('Error connecting to the database:', error);
    return new NextResponse(JSON.stringify({error: 'Internal Server Error'}), {status: 500});
  }
} 