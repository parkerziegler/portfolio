import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';

const registerHit = async (req: NextApiRequest, res: NextApiResponse) => {
  const client = new MongoClient(process.env.MONGODB_URI);

  const { slug } = req.query;

  if (!slug) {
    return res.status(400).json({
      message: 'Slug not provided.'
    });
  }

  const db = client.db('Portfolio');
  const collection = db.collection('Portfolio');

  const docExists = await collection.findOne({
    slug
  });

  if (!docExists) {
    try {
      await collection.insertOne({
        slug,
        hits: 0
      });
    } catch (error) {
      return res.status(500).json({
        message:
          'Error creating document for slug: ' + slug + '. Error: ' + error
      });
    }
  }

  const updatedDoc = await collection.findOneAndUpdate(
    { slug },
    { $inc: { hits: 1 } },
    { returnDocument: 'after' }
  );

  return res.status(200).json({
    hits: updatedDoc.hits
  });
};

export default registerHit;
