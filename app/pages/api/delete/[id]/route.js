import {UserService} from "../../../../../service/script";


import { NextRequest, NextResponse } from 'next/server';


export async function DELETE (req, context ){
  
 
    try {     
        const user = await UserService.deleteUserById({id:Number(context.params.id)});   
      // Respond with the User data
      return NextResponse.json(user,{status: 200});
    } catch (error) {
        console.error(error)
      return NextResponse.json({error: 'Internal Server Error'}, {status: 500});
    }
} 
