/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\n  query repos($from: DateTime!, $to: DateTime!) {\n    reviz: repository(name: \"reviz\", owner: \"parkerziegler\") {\n      ...repoInfo\n    }\n    cartokit: repository(name: \"cartokit\", owner: \"parkerziegler\") {\n      ...repoInfo\n    }\n    renature: repository(name: \"renature\", owner: \"FormidableLabs\") {\n      ...repoInfo\n    }\n    rescriptUrql: repository(name: \"rescript-urql\", owner: \"FormidableLabs\") {\n      ...repoInfo\n    }\n    urql: repository(name: \"urql\", owner: \"FormidableLabs\") {\n      ...repoInfo\n    }\n    webpackDashboard: repository(\n      name: \"webpack-dashboard\"\n      owner: \"FormidableLabs\"\n    ) {\n      ...repoInfo\n    }\n    viewer {\n      contributionsCollection(from: $from, to: $to) {\n        totalCommitContributions\n        totalIssueContributions\n        totalPullRequestContributions\n        totalPullRequestReviewContributions\n      }\n    }\n  }\n": types.ReposDocument,
    "\n  fragment repoInfo on Repository {\n    name\n    description\n    primaryLanguage {\n      name\n      color\n    }\n    stargazers {\n      totalCount\n    }\n    forkCount\n    repositoryTopics(first: 6) {\n      edges {\n        node {\n          topic {\n            name\n          }\n        }\n      }\n    }\n    url\n  }\n": types.RepoInfoFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query repos($from: DateTime!, $to: DateTime!) {\n    reviz: repository(name: \"reviz\", owner: \"parkerziegler\") {\n      ...repoInfo\n    }\n    cartokit: repository(name: \"cartokit\", owner: \"parkerziegler\") {\n      ...repoInfo\n    }\n    renature: repository(name: \"renature\", owner: \"FormidableLabs\") {\n      ...repoInfo\n    }\n    rescriptUrql: repository(name: \"rescript-urql\", owner: \"FormidableLabs\") {\n      ...repoInfo\n    }\n    urql: repository(name: \"urql\", owner: \"FormidableLabs\") {\n      ...repoInfo\n    }\n    webpackDashboard: repository(\n      name: \"webpack-dashboard\"\n      owner: \"FormidableLabs\"\n    ) {\n      ...repoInfo\n    }\n    viewer {\n      contributionsCollection(from: $from, to: $to) {\n        totalCommitContributions\n        totalIssueContributions\n        totalPullRequestContributions\n        totalPullRequestReviewContributions\n      }\n    }\n  }\n"): (typeof documents)["\n  query repos($from: DateTime!, $to: DateTime!) {\n    reviz: repository(name: \"reviz\", owner: \"parkerziegler\") {\n      ...repoInfo\n    }\n    cartokit: repository(name: \"cartokit\", owner: \"parkerziegler\") {\n      ...repoInfo\n    }\n    renature: repository(name: \"renature\", owner: \"FormidableLabs\") {\n      ...repoInfo\n    }\n    rescriptUrql: repository(name: \"rescript-urql\", owner: \"FormidableLabs\") {\n      ...repoInfo\n    }\n    urql: repository(name: \"urql\", owner: \"FormidableLabs\") {\n      ...repoInfo\n    }\n    webpackDashboard: repository(\n      name: \"webpack-dashboard\"\n      owner: \"FormidableLabs\"\n    ) {\n      ...repoInfo\n    }\n    viewer {\n      contributionsCollection(from: $from, to: $to) {\n        totalCommitContributions\n        totalIssueContributions\n        totalPullRequestContributions\n        totalPullRequestReviewContributions\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment repoInfo on Repository {\n    name\n    description\n    primaryLanguage {\n      name\n      color\n    }\n    stargazers {\n      totalCount\n    }\n    forkCount\n    repositoryTopics(first: 6) {\n      edges {\n        node {\n          topic {\n            name\n          }\n        }\n      }\n    }\n    url\n  }\n"): (typeof documents)["\n  fragment repoInfo on Repository {\n    name\n    description\n    primaryLanguage {\n      name\n      color\n    }\n    stargazers {\n      totalCount\n    }\n    forkCount\n    repositoryTopics(first: 6) {\n      edges {\n        node {\n          topic {\n            name\n          }\n        }\n      }\n    }\n    url\n  }\n"];

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
**/
export function graphql(source: string): unknown;

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;