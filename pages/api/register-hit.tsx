import type { NextApiRequest, NextApiResponse } from 'next';
import { query as q, Client, Expr } from 'faunadb';

interface FaunaDocument {
  ref: Expr;
  ts: number;
  data: {
    slug: string;
    hits: number;
  };
}

const registerHit = async (req: NextApiRequest, res: NextApiResponse) => {
  const client = new Client({
    secret: process.env.FAUNA_SECRET_KEY
  });

  const { slug } = req.query;

  if (!slug) {
    return res.status(400).json({
      message: 'Slug not provided.'
    });
  }

  const docExists = await client.query<FaunaDocument>(
    q.Exists(q.Match(q.Index('hits_by_slug'), slug))
  );

  if (!docExists) {
    try {
      await client.query(
        q.Create(q.Collection('hits'), {
          data: { slug: slug, hits: 0 }
        })
      );
    } catch (error) {
      return res.status(500).json({
        message:
          'Error creating document for slug: ' + slug + '. Error: ' + error
      });
    }
  }

  const document = await client.query<FaunaDocument>(
    q.Get(q.Match(q.Index('hits_by_slug'), slug))
  );

  const registeredHit = await client.query<FaunaDocument>(
    q.Update(document.ref, {
      data: {
        hits: document.data.hits + 1
      }
    })
  );

  return res.status(200).json({
    hits: registeredHit.data.hits
  });
};

export default registerHit;
