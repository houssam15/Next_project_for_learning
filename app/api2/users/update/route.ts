import {UserService} from "../../../../service";
import { NextRequest, NextResponse } from 'next/server';

export async function PUT (req:NextRequest){
    try {     
        const { id,username, email,phone } =  await req.json();
        const user = await UserService.updateUserById({id:Number(id) ,data:{username,email,phone}});   
      // Respond with the User data
      return NextResponse.json(user,{status: 200});
    } catch (error) {
        console.error(error)
      return NextResponse.json({error: 'Internal Server Error'}, {status: 500});
    }
} 
