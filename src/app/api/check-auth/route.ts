import { NextRequest, NextResponse } from "next/server";
import jwt, { JwtPayload } from 'jsonwebtoken'
import userModel from "@/models/user";


export async function GET(req: NextRequest,){
    const token = req.cookies.get('jwt')?.value;


    if(!token){
        return NextResponse.json({message: "Unauthorized access"}, {status: 400})
    }

    const secret = process.env.SECRET;
  if (!secret) {
    console.error("JWT secret is not defined");
    return NextResponse.json(
      { message: "Server configuration error" },
      { status: 500 }  // 500 Internal Server Error
    );
  }

    try {
        const decoded = jwt.verify(token, secret) as JwtPayload;
        const user = await userModel.findById(decoded.userId).select('-password');
        if (!user) {
        return NextResponse.json({ message: 'User not found' }, {status: 404});
        
        }
        return NextResponse.json({ message: 'Authenticated', user }, {status: 200});
    } catch (err) {
        console.log(err)
        return NextResponse.json({ message: 'Invalid or expired token' }, {status: 401});
    }
    

}