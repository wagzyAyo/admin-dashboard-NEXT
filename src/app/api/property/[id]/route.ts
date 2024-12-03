import { NextRequest, NextResponse } from 'next/server';
import { connectDb } from '@/lib/connectDb';
import PropertyModel from '@/models/props';

export async function GET(req: NextRequest) {
  try {
    await connectDb(); 
    const urlPath = req.url.split('/')
    console.log(urlPath)
    const id =  urlPath[urlPath.length - 1]
    console.log({property: id})

    if (!id) {
      return NextResponse.json({ message: 'Invalid or missing property ID' }, { status: 400 });
    }

    const property = await PropertyModel.findById(id);

    if (!property) {
      return NextResponse.json({ message: 'Property not found' }, { status: 404 });
    }
    console.log(property)
    return NextResponse.json(property, {status: 200});
  } catch (error) {
    console.error('Error fetching property:', error);
    return NextResponse.json({ message: 'Server error', error }, { status: 500 });
  }
}
