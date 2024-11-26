import { NextResponse } from "next/server";
import { connectDb } from "@/lib/connectDb";
import propertyModels from "@/models/props";

export async function GET(){

    try {
        await connectDb()
        const salesData = await propertyModels.find({tag: 'sale'})
        if(!salesData){
            return NextResponse.json([],{status: 201})
        }
        return NextResponse.json(salesData, {status: 200})
    } catch (err) {
        console.log("Error getting sales data", err);
        return NextResponse.json({message: "Internal server error"}, {status: 500})
    }
}