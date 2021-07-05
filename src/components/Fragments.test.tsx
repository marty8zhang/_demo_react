import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { Fragment, ShorthandFragment, KeyedFragment } from './Fragments';

let container: HTMLDivElement | null = null;

beforeEach(() => {
  container = document.createElement('div');
  container.appendChild(document.createElement('p'));
  document.body.appendChild(container);
});

afterEach(() => {
  if (!container) {
    return;
  }

  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders all three fragments', () => {
  if (!container) {
    return;
  }

  act(() => {
    render(<Fragment />, container);
  });
  expect(container.textContent).toContain('Normal Fragment Item 1');
  expect(container.textContent).toContain('Normal Fragment Item 2');

  act(() => {
    render(<ShorthandFragment />, container);
  });
  expect(container.textContent).toContain('Shorthand Fragment Item 1');
  expect(container.textContent).toContain('Shorthand Fragment Item 2');

  act(() => {
    render(<KeyedFragment />, container);
  });
  expect(container.textContent).toContain('Keyed Fragment Item 1');
  expect(container.textContent).toContain('Keyed Fragment Item 2');
});
