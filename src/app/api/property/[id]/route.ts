import { NextRequest, NextResponse } from 'next/server';
import { connectDb } from '@/lib/connectDb';
import PropertyModel from '@/models/props';

export async function GET(req: NextRequest, {params}: {params: {id: string}}) {
  try {
    await connectDb();  // Ensure the database connection

    // Extract 'id' from the URL parameters
    const id = await params.id; // Extracts the last part of the path

    // Validate the id parameter
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
