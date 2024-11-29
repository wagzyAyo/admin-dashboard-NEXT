import { NextApiRequest, NextApiResponse } from 'next';
import { connectDb } from '@/lib/connectDb';
import PropertyModel from '@/models/props';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      await connectDb();  // Ensure the database connection
      const { id } = req.query;
      const property = await PropertyModel.findById(id);

      if (!property) {
        return res.status(404).json({ message: 'Property not found' });
      }

      res.status(200).json(property);
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
