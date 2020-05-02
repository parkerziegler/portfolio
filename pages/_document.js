import React from 'react';
import NextDocument, { Head, Main, NextScript } from 'next/document';

export default class Document extends NextDocument {
  static async getInitialProps(ctx) {
    const props = await NextDocument.getInitialProps(ctx);
    return { ...props };
  }

  render() {
    return (
      <html>
        <Head>
          {this.props.styleTags}
          <link
            href="https://fonts.googleapis.com/css?family=Zilla+Slab"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Fira+Mono&display=swap"
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
