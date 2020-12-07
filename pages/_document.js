import React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

export default class Document extends NextDocument {
  static async getInitialProps(ctx) {
    const props = await NextDocument.getInitialProps(ctx);
    return { ...props };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="theme-color" content="#7b16ff" />
          {this.props.styleTags}
          <link
            href="https://fonts.googleapis.com/css?family=Zilla+Slab&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
            rel="stylesheet"
          ></link>
          <link
            href="https://fonts.googleapis.com/css2?family=DM+Mono&display=swap"
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
