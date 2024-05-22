import {UserService} from "../../../service";
import { NextRequest, NextResponse } from 'next/server';


export async function GET (req:NextRequest){
    try {     
      const users = await UserService.findAllUsers();
      return NextResponse.json(users,{status:200});
    } catch (error) {
      return NextResponse.json({error : 'Internal Server Error'}, {status: 500});
    }
} 


