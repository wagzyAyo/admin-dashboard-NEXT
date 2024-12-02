import { connectDb } from "@/lib/connectDb";
import propertyModels from "@/models/props";
import { NextResponse } from "next/server";

interface Params {
    id: string;
  }

export async function PUT(request: Request, { params }: {params: Params}){
    try {
        await connectDb();
        const {id} = params;
        const newData = await request.json()
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