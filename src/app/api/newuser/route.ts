import { connectDb } from "@/lib/connectDb";
import userModel from "@/models/user";
import bcrypt from 'bcryptjs';
import { NextResponse } from "next/server";

export async function  POST(request: Request){
   
    try {
        await connectDb();
        const {email, password} = await request.json();

        if (!email || !password){
            return NextResponse.json({message: "Email and password fields are required"}, {status: 400})
        }
        const checkUser = await userModel.findOne({email});
        if(checkUser){
            return NextResponse.json({message: "User with email exist"}, {status: 404})
        }
        const saltRounds = parseInt(process.env.SALT || '10', 10)
        const newPassword = await bcrypt.hash(password, saltRounds)
        const newUser = new userModel({
            email,
            password: newPassword
        })
        await newUser.save();
        return NextResponse.json({message: 'User Added'}, {status: 200} )
        
    } catch (err) {
        console.log('error adding new user', err);
        return NextResponse.json({message: 'Internal server Error'}, {status: 500})
    }
}