import { connectDb } from "@/lib/connectDb";
import propertyModels from "@/models/props";
import { NextResponse, NextRequest } from "next/server";

export async function DELETE(req: NextRequest){
    const token = req.cookies.get('jwt')?.value;


    if(!token){
        return NextResponse.json({message: "Unauthorized access"}, {status: 400})
    }

    try {
        await connectDb();
        const urlPaths = req.url.split('/')
        const id = urlPaths[urlPaths.length - 1];
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