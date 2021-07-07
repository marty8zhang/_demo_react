// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import { unmountComponentAtNode } from 'react-dom';

beforeEach(() => {
  global.container = document.createElement('div');
  document.body.appendChild(global.container);
});

afterEach(() => {
  unmountComponentAtNode(global.container);
  global.container.remove();
  global.container = null;
});
