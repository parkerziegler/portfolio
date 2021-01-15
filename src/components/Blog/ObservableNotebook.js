import { useEffect } from 'react';
import PropTypes from 'prop-types';
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

  return null;
};

ObservableNotebook.propTypes = {
  importNotebook: PropTypes.func.isRequired
};

export default ObservableNotebook;
