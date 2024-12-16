import propertyModels from "@/models/props";
import { connectDb } from "@/lib/connectDb";
import { /*NextRequest,*/ NextResponse } from "next/server";
import {corsResponse, corsOptionsHandler}from '../../../utils/corsUtils';

export async function OPTIONS() {
    return corsOptionsHandler();
  }

export async function GET(/*req: NextRequest*/){
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
        const response = NextResponse.json(leaseData.reverse(), {status: 200});
        return corsResponse(response)


    } catch (err) {
        console.log("Error getting lease data",err)
        const errResponse = NextResponse.json({message: "Internal server error"}, {status: 500});
        return corsResponse(errResponse);
    }
}
