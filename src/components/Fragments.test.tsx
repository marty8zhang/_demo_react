import React from 'react';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { Fragment, ShorthandFragment, KeyedFragment } from './Fragments';

declare let container: HTMLDivElement;

it('renders all three fragments', () => {
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
