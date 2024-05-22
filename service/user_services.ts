import bcrypt from 'bcrypt';

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();



export async function createUser({username , email , password , phone}){

    const hashedPassword = await bcrypt.hash(password, 10); 

    const user = await prisma.user.create({
        data:{
           email,
           password:hashedPassword,
           username,
           phone
        }
    });
   return user;
}




export async function findAllUsers(){
   const users = await prisma.user.findMany({select:{id:true ,username:true,email:true , phone:true}});
   return users;
}




export async function findUserById({id/*,name*/}:Required<{id:number}>/* & {name?:string}*/ ){
   const user = await prisma.user.findUnique({where:{id},select:{id:true ,username:true,email:true , phone:true}});
   return user;
}



export async function deleteUserById({id}:Required<{id:number}>){
   const result = await prisma.user.delete({where:{id}});
   return result;
}


export async function updateUserById({id , data}:Required<{id:number}> & {data:Record<string,any>}){
   const result = await prisma.user.update({where:{id},data:{...data} ,  select: {
      id: true,
      username: true,
      email: true,
    }});
   
   return result;
   
}

