import * as React from 'react';
import NextDocument, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext
} from 'next/document';

export default class Document extends NextDocument {
  static async getInitialProps(ctx: DocumentContext) {
    const props = await NextDocument.getInitialProps(ctx);
    return { ...props };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="theme-color" content="#7b16ff" />
          {this.props.styles}
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=DM+Mono&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Source+Serif+Pro:ital,wght@0,400;0,600;0,700;1,400&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" type="image/png" href="/favicon/favicon-48.png" />
          <link rel="icon" type="image/png" href="/favicon/favicon-96.png" />
          <link rel="icon" type="image/png" href="/favicon/favicon-144.png" />
          <link rel="icon" type="image/png" href="/favicon/favicon-192.png" />
          <style>{`
            html {
              font-size: 10px;
              scroll-behavior: smooth;
            }

            body {
              margin: 0;
              overflow-x: hidden;
            }

            * {
              box-sizing: border-box;
            }
          `}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
