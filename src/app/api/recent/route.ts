import { connectDb } from "@/lib/connectDb";
import { /*NextRequest,*/ NextResponse } from "next/server";
import propertyModels from "@/models/props";
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
        const data = await propertyModels.find();
        const reverseData = data.reverse();
        const response =  NextResponse.json( reverseData.slice(0, 6), {status: 200});
        return corsResponse(response);

    } catch (err) {
        console.log("Error getting recent latest data", err);
        const errResponse = NextResponse.json({message: "Internal server error"}, {status: 500})
        return corsResponse(errResponse)
    }
}