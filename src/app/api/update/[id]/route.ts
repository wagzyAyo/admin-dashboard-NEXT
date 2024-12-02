import { connectDb } from "@/lib/connectDb";
import propertyModels from "@/models/props";
import { NextResponse } from "next/server";

export async function PUT(req: Request){
    try {
        await connectDb();
        const urlPath = req.url.split('/')
        const id =  urlPath[urlPath.length -2]
        const newData = await req.json()
        console.log(newData)
        const updateProperty = await propertyModels.findOneAndUpdate({_id: id}, newData, {
            new: true
        });

        if(!updateProperty){
            return NextResponse.json({message: "No property found with the Id"}, {status: 400})
        }
        return NextResponse.json({message: "Property updated!"}, {status: 200})
    } catch (err) {
        console.log('Error updating data', err);
        return NextResponse.json({message: "Internal server error"}, {status: 500})
    }
}