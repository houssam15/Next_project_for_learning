import {UserService} from "../../../../service";
import { NextRequest, NextResponse } from 'next/server';


export async function POST (req:NextRequest){

    try {     
        //validation 
      const userdata = await req.json();
      
      const { name, email,phone ,password} = userdata;
      if (!name || !email || !phone || !password) {
          return NextResponse.json({ error: 'name, email, and password are required in the request body.' },{status:400});
      }
      const newUser = await UserService.createUser({username:name , email:email , password:password , phone:phone});  
      // Respond with the User data
      return NextResponse.json({message: 'User created successfully', user:newUser},{status: 200});
    } catch (error) {
      return NextResponse.json({error: 'Internal Server Error'}, {status: 500});
    }
} 


