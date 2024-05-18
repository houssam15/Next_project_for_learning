import {User} from "../database/models";
import bcrypt from 'bcrypt';

export async function create_user({username , email , password , phone}){

    const hashedPassword = await bcrypt.hash(password, 10); 

    const user = await User.create({
        username : username ,
        email : email ,
        password : hashedPassword,
        phone : phone
    });

    return user.dataValues;

}

export async function fetch_users(){

    const users = await User.findAll();

    return users;

}

