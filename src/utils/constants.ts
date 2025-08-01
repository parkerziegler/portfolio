import type { TagAttributes } from '../components/Blog/Tag';

export const TAGS: Record<string, TagAttributes> = {
  testing: {
    icon: '⚠️',
    tag: 'Testing'
  },
  react: {
    icon: '/logos/react-logo.svg',
    tag: 'React'
  },
  cypress: {
    icon: '/logos/cypress-logo.svg',
    tag: 'Cypress'
  },
  animation: {
    icon: '✨',
    tag: 'Animation'
  },
  d3: {
    icon: '/logos/d3-logo.svg',
    tag: 'D3'
  },
  gis: {
    icon: '🗺️',
    tag: 'GIS'
  },
  carto: {
    icon: '/logos/carto-logo.svg',
    tag: 'CARTO'
  },
  speaking: {
    icon: '🗣️',
    tag: 'Speaking'
  },
  python: {
    icon: '/logos/python-logo.svg',
    tag: 'Python'
  },
  javascript: {
    icon: '/logos/js-logo.svg',
    tag: 'JavaScript'
  },
  typescript: {
    icon: '/logos/ts-logo.svg',
    tag: 'TypeScript'
  },
  observable: {
    icon: '/logos/observable-dark-logo.svg',
    tag: 'Observable'
  },
  reason: {
    icon: '/logos/reason-logo.svg',
    tag: 'Reason'
  },
  rescript: {
    icon: '/logos/rescript-logo.svg',
    tag: 'ReScript'
  },
  ['grad-school']: {
    icon: '🎓',
    tag: 'Grad School'
  }
};

export const CORE_LANGUAGES = {
  JavaScript: { src: '/logos/js-logo.svg', alt: 'JavaScript Logo' },
  TypeScript: { src: '/logos/ts-logo.svg', alt: 'TypeScript Logo' },
  HTML: { src: '/logos/html-logo.svg', alt: 'HTML Logo' },
  CSS: { src: '/logos/css-logo.svg', alt: 'CSS Logo' },
  GraphQL: { src: '/logos/graphql-logo.svg', alt: 'GraphQL Logo' },
  Rust: { src: '/logos/rust-logo.svg', alt: 'Rust Logo' },
  WebAssembly: { src: '/logos/wasm-logo.svg', alt: 'WebAssembly Logo' },
  Python: { src: '/logos/python-logo.svg', alt: 'Python Logo' },
  ReScript: { src: '/logos/rescript-logo.svg', alt: 'ReScript Logo' },
  Reason: { src: '/logos/reason-logo.svg', alt: 'Reason Logo' },
  OCaml: { src: '/logos/ocaml-logo.svg', alt: 'OCaml Logo' }
};

export const LANGUAGES = {
  ...CORE_LANGUAGES,
  Java: { src: '/logos/java-logo.svg', alt: 'Java Logo' },
  TeX: { src: '/logos/tex-logo.svg', alt: 'TeX Logo' }
};

export const TOOLS = {
  React: { src: '/logos/react-logo.svg', alt: 'React Logo' },
  Svelte: { src: '/logos/svelte-logo.svg', alt: 'Svelte Logo' },
  Node: { src: '/logos/node-logo.svg', alt: 'Node Logo' },
  Next: { src: '/logos/next-logo.svg', alt: 'Next.js Logo' },
  D3: { src: '/logos/d3-logo.svg', alt: 'D3 Logo' },
  Redux: { src: '/logos/redux-logo.svg', alt: 'Redux Logo' },
  Jest: { src: '/logos/jest-logo.svg', alt: 'Jest Logo' },
  Cypress: { src: '/logos/cypress-logo.svg', alt: 'Cypress Logo' },
  TailwindCSS: { src: '/logos/tailwindcss-logo.svg', alt: 'Tailwind Logo' },
  Sass: { src: '/logos/sass-logo.svg', alt: 'Sass Logo' },
  Terraform: { src: '/logos/terraform-logo.svg', alt: 'Terraform Logo' }
};

export const NAV_ITEMS = [
  {
    route: '/code',
    displayText: 'Code'
  },
  {
    route: '/maps',
    displayText: 'Maps'
  },
  {
    route: '/thoughts',
    displayText: 'Thoughts'
  }
];

export const CONTRIBUTION_EVENT_TYPES = [
  'ForkEvent',
  'IssuesEvent',
  'PullRequestEvent',
  'PullRequestReviewEvent',
  'PushEvent',
  'ReleaseEvent'
] as const;

export const CONTRIBUTION_EVENT_ICONS = {
  ForkEvent: {
    src: '/icons/git-branch.svg',
    alt: 'Fork'
  },
  IssuesEvent: {
    src: '/icons/alert-circle.svg',
    alt: 'Issue'
  },
  PullRequestEvent: {
    src: '/icons/git-pull-request.svg',
    alt: 'Pull Request'
  },
  PullRequestReviewEvent: {
    src: '/icons/eye.svg',
    alt: 'Pull Request Review'
  },
  PushEvent: {
    src: '/icons/terminal.svg',
    alt: 'Commit'
  },
  ReleaseEvent: {
    src: '/icons/upload-cloud.svg',
    alt: 'Release'
  }
};
