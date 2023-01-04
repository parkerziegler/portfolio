import * as React from 'react';
import Head from 'next/head';
import { Runtime, Inspector } from '@observablehq/runtime';

interface Props {
  importNotebook: () => Promise<{ default: () => void }>;
}

const ObservableNotebook: React.FC<Props> = ({ importNotebook }) => {
  React.useEffect(() => {
    const fetchNotebook = async () => {
      const notebook = await importNotebook();

      new Runtime().module(notebook.default, (name: string) => {
        const node = name?.replace(' ', '_');
        const into = node ? document.querySelector(`.${node}`) : null;

        if (into) {
          return new Inspector(into);
        }
      });
    };

    fetchNotebook();
  }, [importNotebook]);

  return (
    <Head>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@observablehq/inspector@3/dist/inspector.css"
      />
    </Head>
  );
};

export default ObservableNotebook;
