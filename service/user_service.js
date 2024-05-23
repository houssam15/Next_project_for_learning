
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

export async function deleteUserById({id}){
    const result = await prisma.user.delete({where:{id}});
    return result;
 }

export async function getUserById({id}){
    const result = await prisma.user.findUnique({where:{id},select:{id:true ,username:true,email:true }});
    return result;
 }


 export async function getAll(){
    const result = await prisma.user.findMany()
    return result;
 }

