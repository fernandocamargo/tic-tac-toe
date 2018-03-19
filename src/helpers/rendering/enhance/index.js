import { createElement } from 'react';

export default (component, enhancement) => props =>
  createElement(component, {
    ...props,
    ...enhancement,
  });
