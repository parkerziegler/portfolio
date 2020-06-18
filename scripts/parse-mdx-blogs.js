const path = require('path');
const fs = require('fs');
const fsPromise = fs.promises;
const { read } = require('to-vfile');
const remark = require('remark');
const mdx = require('remark-mdx');
const prettier = require('prettier');
const { TAGS } = require('../utils/constants');

function quoteKeys(meta) {
  return meta.replace(/title|slug|date|tags/g, (matchedStr) => {
    return `"${matchedStr}"`;
  });
}

function parseMeta(posts) {
  return () => (tree) => {
    const paragraph = tree.children.find(({ type }) => type === 'paragraph');
    const introText = paragraph
      ? paragraph.children
          .map((node) => {
            if (node.type === 'link') {
              return node.children[0].value.trim();
            }

            return node.value.trim();
          })
          .join(' ')
      : '';

    const metaExport = tree.children.find(({ type }) => type === 'export');

    const meta = metaExport.value
      .split('export const meta = ')[1]
      .replace(/;/g, '')
      .replace(/'/g, '"');
    const jsonMeta = quoteKeys(meta);
    const withIntroText = {
      ...JSON.parse(jsonMeta),
      introText: introText.replace(/'/g, '"')
    };
    posts.push(JSON.stringify(withIntroText));
  };
}

function sortByDate(a, b) {
  const dateA = new Date(a.date).getTime();
  const dateB = new Date(b.date).getTime();

  return dateA > dateB ? -1 : 1;
}

function parseTags(post) {
  return {
    ...post,
    tags: post.tags.map((t) => TAGS[t])
  };
}

async function parseMDXBlogs() {
  const postsPath = path.join(__dirname, '../pages/thoughts');
  const files = await fsPromise.readdir(postsPath);
  const posts = [];

  for (const file of files) {
    const f = await read(path.join(postsPath, file));
    await remark()
      .use(mdx)
      .use(parseMeta(posts))
      .process(f);
  }

  const data = `{
        "posts": [${posts.join(',')}]
      }`;
  const ordered = JSON.stringify(
    JSON.parse(data)
      .posts.map(parseTags)
      .sort(sortByDate)
  );
  const formatted = prettier.format(ordered, { parser: 'json' });

  await fsPromise.writeFile(path.join(__dirname, 'blogs.json'), formatted);
}

parseMDXBlogs();
