import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (rootElement) {
  const rd = (typeof window !== 'undefined' && window.ReactDOM) ? window.ReactDOM : ReactDOM;
  const createRootFn = (rd && rd.createRoot) || (rd && rd.default && rd.default.createRoot);
  if (createRootFn) {
    const root = createRootFn(rootElement);
    root.render(React.createElement(App));
  } else if (rd && rd.render) {
    rd.render(React.createElement(App), rootElement);
  }
}
