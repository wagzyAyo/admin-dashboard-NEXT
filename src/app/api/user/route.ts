import { connectDb } from "@/lib/connectDb";
import userModel from "@/models/user";
import { NextResponse } from "next/server";

export async function  POST(request: Request){
   
    try {
        await connectDb();
        const {email, password} = await request.json();
        const newUser = new userModel({
            email,
            password
        })
        await newUser.save();
        return NextResponse.json({message: 'User Added'}, {status: 200} )
        
    } catch (err) {
        console.log('error adding new user', err)
    }
}