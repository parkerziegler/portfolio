const { query: q, Client } = require('faunadb');

const registerHit = async (req, res) => {
  const client = new Client({
    secret: process.env.FAUNA_SECRET_KEY
  });

  const { slug } = req.query;

  if (!slug) {
    return res.status(400).json({
      message: 'Slug not provided.'
    });
  }

  const docExists = await client.query(
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
      console.error('Error creating record: ', error.message);
    }
  }

  const document = await client.query(
    q.Get(q.Match(q.Index('hits_by_slug'), slug))
  );

  const registeredHit = await client.query(
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

module.exports = registerHit;
