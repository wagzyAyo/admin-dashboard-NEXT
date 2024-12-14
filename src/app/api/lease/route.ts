import propertyModels from "@/models/props";
import { connectDb } from "@/lib/connectDb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest){
    // const token = req.cookies.get('jwt')?.value;


    // if(!token){
    //     return NextResponse.json({message: "Unauthorized access"}, {status: 400})
    // }

    try {
        await connectDb();
        const leaseData = await propertyModels.find({tag: 'lease'});
        if(!leaseData){
            return NextResponse.json([],{status: 201})
        }
        return NextResponse.json(leaseData.reverse(), {status: 200})

    } catch (err) {
        console.log("Error getting lease data",err)
        return NextResponse.json({message: "Internal server error"}, {status: 500})
    }
}