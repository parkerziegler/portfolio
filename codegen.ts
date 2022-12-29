import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'src/generated/github-schema-loader.ts',
  documents: 'pages/*.tsx',
  generates: {
    'src/generated/': {
      preset: 'client',
      plugins: []
    }
  }
};

export default config;
