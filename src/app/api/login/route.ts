import { connectDb } from "@/lib/connectDb";
import userModel from "@/models/user";
import bcrypt from 'bcryptjs'
import {generateToken} from '../../../middleware/genToken'
import { NextResponse } from "next/server";

export async function POST(request: Request){
    await connectDb();
    const {username, password} = await request.json();
    console.log(username, password)
    try {
        const user = await userModel.findOne({username})
        console.log(user)
        if(user){
            const checkPassword = await bcrypt.compare(password, user.password)
            if (checkPassword){
                //send token
                const token = generateToken(user._id);
                const response = NextResponse.json({message: "Login successful"}, {status: 200});
                response.headers.set(
                    'Set-Cookie',
                    `jwt=${token}; HttpOnly; Path=/; Max-Age=${30 * 24 * 60 * 60}; SameSite=Strict`
                )
                return response
            }else{
                return NextResponse.json({message: "Invalid email or password"}, {status: 401})
            }
        }
        return NextResponse.json({message: "No user found with the email"}, {status: 400})
    } catch (err) {
      console.log("Error finding user",err) 
      return NextResponse.json({message: "Internal server error"}, {status: 500})
    }
}