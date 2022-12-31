import flowRight from 'lodash.flowright';
import type { Plugin } from 'unified';
import type { Root, Paragraph, Literal } from 'mdast';

import { TagAttributes } from '../components/Blog/Tag';

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
function quoteKeys(meta: string): string {
  return meta.replace(/title|description|slug|date|tags/g, (matchedStr) => {
    return `"${matchedStr}"`;
  });
}

/**
 * Replace any character sequence with any other character sequence.
 *
 * @param {string} match
 * The character sequence to match.
 * @param {string} replace
 * The character sequence to replace the matched sequence.
 *
 * @returns {function}
 * A function to perform the character replacement.
 */
function replaceCharacterWithCharacter(
  match: string,
  replace: string
): (str: string) => string {
  const regex = new RegExp(match, 'g');

  return (str) => str.replace(regex, replace);
}

export interface Post {
  title: string;
  description: string;
  slug: string;
  date: string;
  tags: TagAttributes[];
  introText: string;
}

/**
 * Takes in an array of blog posts and parses their metadata into JSON.
 *
 * @param {array} posts
 * The array of posts to push to.
 *
 * @returns {array}
 * The array of posts pushed to.
 */
export function parseMeta(posts: Post[]): Plugin {
  return () => (tree: Root) => {
    // First, extract the meta information from the post. Meta information
    // will always be the second child in the tree's children array based on
    // our blog post structure.
    const metaExport = tree.children[1] as Literal;

    // Extract the raw meta string from the meta node.
    const rawMeta = metaExport.value.split('export const meta = ')[1];

    // Transform the raw string into valid JSON.
    const meta = flowRight(
      quoteKeys,
      replaceCharacterWithCharacter(';', ''),
      replaceCharacterWithCharacter("'", '"')
    )(rawMeta);

    // Find the root BlogPost component.
    const post = tree.children.find((node) => node.name === 'BlogPost');

    if (Array.isArray(post.children)) {
      // Locate the first paragraph node. We assert the type here to
      // elide some _very_ laborious type narrowing since we control
      // the structure of our blog posts.
      const paragraph = post.children.find(
        ({ type }) => type === 'paragraph'
      ) as Paragraph;

      // Extract the intro text from the paragraph. If we encounter any links,
      // just return their text children.
      const introText = paragraph.children
        .map((node) => {
          if (node.type === 'link' && node.children[0].type === 'text') {
            return node.children[0].value.trim();
          } else if (node.type === 'text') {
            return node.value.trim();
          }
          return '';
        })
        .join(' ');

      const withIntroText = {
        ...JSON.parse(meta),
        introText
      };

      // Return the posts.
      posts.push(withIntroText);
    }
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
function sortByDate(a: Post, b: Post): number {
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
function parseTags(post: Post): Post {
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
export function orderAndTagPosts(posts: Post[]): Post[] {
  return posts.sort(sortByDate).map(parseTags);
}
