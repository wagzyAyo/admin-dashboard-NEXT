import { connectDb } from "@/lib/connectDb";
import propertyModels from "@/models/props";
import { NextResponse } from "next/server";

export async function POST({params}: {params: {id: string}}){
    try {
        await connectDb();
        const {id} = params
        const deletedProp = await propertyModels.findOneAndDelete({_id: id});
        if(!deletedProp){
            return NextResponse.json({message: "No property find with the id"}, {status:400})
        }
        return NextResponse.json({message: "property deleted!"}, {status: 200})
    } catch (err) {
        console.log("Error deleting property", err)
        return NextResponse.json({message: "Internal server error"}, {status: 500})
    }
}