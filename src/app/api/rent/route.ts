import propertyModels from "@/models/props";
import { connectDb } from "@/lib/connectDb";
import { NextResponse } from "next/server";

export async function GET(){
    try {
        await connectDb();
        const rentdata = await propertyModels.find({tag: "rent"});
        if(!rentdata){
            return NextResponse.json([], {status: 201})
        }
        return NextResponse.json(rentdata.reverse(), {status: 200})
    } catch (err) {
        console.log("Error getting lease data", err);
        return NextResponse.json({message: "Internal server error"}, {status: 500})
    }
}