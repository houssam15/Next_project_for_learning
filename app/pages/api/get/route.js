import {UserService} from "../../../../service/script";

import { NextRequest, NextResponse } from 'next/server';

export async function GET (req){
  try {   
 

  const data = await UserService.getAll();
  console.log(data);

  return new NextResponse(JSON.stringify( data), {status: 200});
} catch (error) {
  console.error('Error connecting to the database:', error);
  return new NextResponse(JSON.stringify({error: 'Internal Server Error'}), {status: 500});
}
}