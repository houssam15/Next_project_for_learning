import bcrypt from 'bcrypt';

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();



export async function create_user({username , email , password , phone}){

    const hashedPassword = await bcrypt.hash(password, 10); 

    const user = await prisma.user.create({
        data:{
           email,
           password:hashedPassword,
           username,
        }
    });

    console.log(user)    

   return user;

}

export async function fetch_users(){

   // const users = await User.findAll();

   // return users;

}

