import { connectDb } from "@/lib/connectDb";
import { NextResponse } from "next/server";
import propertyModels from "@/models/props";

export async function GET(){
    try {
        await connectDb();
        const data = await propertyModels.find();
        const reverseData = data.reverse();
        return NextResponse.json( reverseData.slice(0, 6), {status: 200})

    } catch (err) {
        console.log("Error getting recent latest data", err);
        return NextResponse.json({message: "Internal server error"}, {status: 500})
    }
}