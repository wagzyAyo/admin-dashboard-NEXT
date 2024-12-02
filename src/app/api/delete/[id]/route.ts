import { connectDb } from "@/lib/connectDb";
import propertyModels from "@/models/props";
import { NextResponse, NextRequest } from "next/server";

export async function DELETE(req: NextRequest, {params}: { params: Promise<{id: string}> }){
    try {
        await connectDb();
        console.log(req)
        const {id} = await params;
        const deletedProp = await propertyModels.findByIdAndDelete(id);
        if(!deletedProp){
            return NextResponse.json({message: "No property found with the id"}, {status:400})
        }
        return NextResponse.json({message: `property with the id ${id} deleted!`}, {status: 200})
    } catch (err) {
        console.log("Error deleting property", err)
        return NextResponse.json({message: "Internal server error"}, {status: 500})
    }
}