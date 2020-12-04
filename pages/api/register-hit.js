const { query: q, Client } = require('faunadb');

const registerHit = async (req, res) => {
  const client = Client({
    secret: process.env.FAUNDA_SECRET_KEY
  });

  const slug = req.query;

  if (!slug) {
    return res.status(400).json({
      message: 'Slug not provided.'
    });
  }

  const docExists = await client.query(
    q.Exists(q.Match(q.Index('hits_by_slug'), slug))
  );

  if (!docExists) {
    await client.query(
      q.Create(q.Collection('hits'), {
        data: { slug: slug, hits: 0 }
      })
    );
  }

  const document = await client.query(
    q.Get(q.Match(q.Index('hits_by_slug'), slug))
  );

  await client.query(
    q.Update(document.ref, {
      data: {
        hits: document.data.hits + 1
      }
    })
  );

  return res.status(200).json({
    hits: document.data.hits
  });
};

module.exports = registerHit;
