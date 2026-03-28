import React from 'react';
import ReactDOM from "react-dom/client";
import { Editors } from '@pretextbook/web-editor';
import '@pretextbook/web-editor/dist/web-editor.css';

const roots = new Map();

function render(node, props) {
  const root = ReactDOM.createRoot(node);
  root.render(<Editors {...props} />);
  roots.set(node, root);
}

function destroy(node) {
  const root = roots.get(node);
  if (root) {
    root.unmount();
    roots.delete(node);
  }
}

export { destroy, render };
