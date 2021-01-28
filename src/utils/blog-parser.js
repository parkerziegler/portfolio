import flowRight from 'lodash.flowright';

import { TAGS } from './constants';

/**
 * Accepts a string representing the metadata of a blog post
 * and parses the keys to valid JSON.
 *
 * @param {string} meta
 * The raw meta string returned by the MDX AST.
 *
 * @returns {function}
 * A function to replace the meta object with keys double quoted.
 */
function quoteKeys(meta) {
  return meta.replace(/title|description|slug|date|tags/g, (matchedStr) => {
    return `"${matchedStr}"`;
  });
}

/**
 * Replace single quotes with double quotes globally.
 *
 * @param {string} match
 * The character to match.
 * @param {string} replace
 * The character to replace match with.
 *
 * @returns {string}
 * The string with double quotes.
 */
function replaceCharacterWithCharacter(match, replace) {
  const regex = new RegExp(match, 'g');
  return (str) => str.replace(regex, replace);
}

/**
 * Takes in an array of blog posts and parses their metadata
 * into JSON.
 *
 * @param {array} posts
 * The array of posts to push to.
 *
 * @returns {array}
 * The array of posts pushed to.
 */
export function parseMeta(posts) {
  return () => (tree) => {
    // Find the first paragraph node in the tree and extract it.
    // If encountering any links, just return their text children.
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

    // Get the raw meta export from MDX.
    const metaExport = tree.children.find(({ type }) => type === 'export');
    const rawMeta = metaExport.value.split('export const meta = ')[1];

    // Transform the raw string into valid JSON.
    const meta = flowRight(
      quoteKeys,
      replaceCharacterWithCharacter(';', ''),
      replaceCharacterWithCharacter("'", '"')
    )(rawMeta);

    // Add the intro text.
    const withIntroText = {
      ...JSON.parse(meta),
      introText
    };

    // Return the posts.
    posts.push(withIntroText);
  };
}

/**
 * Sort data by date.
 *
 * @param {*} a
 * The first date to compare.
 * @param {*} b
 * The second date to compare.
 *
 * @returns {number}
 * 1 or -1 depending on whether or not a is later than b.
 */
function sortByDate(a, b) {
  const dateA = new Date(a.date).getTime();
  const dateB = new Date(b.date).getTime();

  return dateA > dateB ? -1 : 1;
}

/**
 * Parse a string tag into an object with
 * an accompanying path to a static asset.
 * @param {object} post
 * The post to manipulate to lookup a tag for.
 *
 * @returns {object}
 * The post object with a properly associated
 * tag object.
 */
function parseTags(post) {
  return {
    ...post,
    tags: post.tags.map((t) => TAGS[t])
  };
}

/**
 *
 * @param {array} posts
 * The posts to order and apply tags to.
 *
 * @returns {array}
 * The ordered and tagged posts.
 */
export function orderAndTagPosts(posts) {
  return posts.sort(sortByDate).map(parseTags);
}
