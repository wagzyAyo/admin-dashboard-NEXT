import { connectDb } from "@/lib/connectDb";
import propertyModels from "@/models/props";
import { NextResponse } from "next/server";

export async function POST(request: Request){
    try {
        await connectDb();
        const data = await request.json()
        const {tag, name, size, short, amount, description, location, imageURL} = data;
        if(!tag || !name || !size || !short || !amount || !description || !location || !imageURL){
            return NextResponse.json({message: "one or more entries are empty"}, {status: 400})
        }
        const newImageUrl = imageURL.split(',').map((url: string) => url.trim())
        const newData = new propertyModels({
            tag,
            name,
            size,
            short: short,
            amount,
            location,
            description,
            imageURL: newImageUrl,
        })
        await newData.save();
        return NextResponse.json({message: "New property added"}, {status: 200})
    } catch (err) {
        console.log('Error adding new property', err)
        return NextResponse.json({message: "Internal server error"}, {status: 500})
    }
}