import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { Runtime, Inspector } from '@observablehq/runtime';

const ObservableNotebook = ({ importNotebook }) => {
  useEffect(() => {
    const fetchNotebook = async () => {
      const notebook = await importNotebook();

      new Runtime().module(notebook.default, (name) => {
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

ObservableNotebook.propTypes = {
  importNotebook: PropTypes.func.isRequired
};

export default ObservableNotebook;
