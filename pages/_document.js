import React from 'react';
import NextDocument, { Head, Main, NextScript } from 'next/document';

export default class Document extends NextDocument {
  static async getInitialProps(ctx) {
    const props = await NextDocument.getInitialProps(ctx);
    return { ...props };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
          ></meta>
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
          <style>{`
            html {
              font-size: 10px;
            }

            body {
              margin: 0;
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
      </html>
    );
  }
}
