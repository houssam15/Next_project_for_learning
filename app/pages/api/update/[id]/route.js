import {UserService} from "../../../../../service/script";

import { NextRequest, NextResponse } from 'next/server';

export async function PUT (req , context){

 
  try {   
    const id = Number(context.params.id);
    const userdata = await req.json();
    const {name,email,phone,password} = userdata;
    if(!name || !email || !phone || !password){
        return new NextResponse(JSON.stringify({ error: 'name, email, and password are required in the request body.' }),{status:400});
      }
      console.log("ddd");
//       console.log(Number(context.params.id));

  const updateUser = await UserService.updateUserById({id,username:name , email:email , password:password });
 

  return new NextResponse(JSON.stringify( updateUser), {status: 200});
} catch (error) {
  console.error('Error connecting to the database:', error);
  return new NextResponse(JSON.stringify({error: 'Internal Server Error'}), {status: 500});
}
}