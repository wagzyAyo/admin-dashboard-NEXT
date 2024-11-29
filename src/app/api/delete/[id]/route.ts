import { connectDb } from "@/lib/connectDb";
import propertyModels from "@/models/props";
import { NextResponse, NextRequest } from "next/server";

export async function DELETE(req: NextRequest, {params}: {params: {id: string}}){
    try {
        await connectDb();
        const {id} = params;
        const deletedProp = await propertyModels.findByIdAndDelete(id);
        if(!deletedProp){
            return NextResponse.json({message: "No property find with the id"}, {status:400})
        }
        return NextResponse.json({message: "property deleted!"}, {status: 200})
    } catch (err) {
        console.log("Error deleting property", err)
        return NextResponse.json({message: "Internal server error"}, {status: 500})
    }
}