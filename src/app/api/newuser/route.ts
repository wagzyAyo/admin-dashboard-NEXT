import { connectDb } from "@/lib/connectDb";
import userModel from "@/models/user";
import bcrypt from 'bcryptjs';
import { generateToken } from "@/middleware/genToken";
import { NextResponse } from "next/server";

export async function  POST(request: Request){
   
    try {
        await connectDb();
        const {username, password} = await request.json();

        if (!username || !password){
            return NextResponse.json({message: "Email and password fields are required"}, {status: 400})
        }
        const checkUser = await userModel.findOne({username});
        if(checkUser){
            return NextResponse.json({message: "User with email exist"}, {status: 409})
        }
        const saltRounds = parseInt(process.env.SALT || '10', 10)
        const newPassword = await bcrypt.hash(password, saltRounds)
        const newUser = new userModel({
            username,
            password: newPassword
        })
        const token = generateToken(newUser._id)
        await newUser.save();
        const response = NextResponse.json({message: 'User Added'}, {status: 200} )
        response.headers.set(
            'Set-Cookie',
            `jwt=${token}; HttpOnly; Path=/; Max-Age=${30 * 24 * 60 * 60}; SameSite=Strict`
          );
      
        return response;

    } catch (err) {
        console.log('error adding new user', err);
        return NextResponse.json({message: 'Internal server Error'}, {status: 500})
    }
}