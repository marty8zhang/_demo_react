import React from 'react';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import StateHook from './StateHook';

declare let container: HTMLDivElement;

it('uses State Hook to count clicks', () => {
  act(() => {
    render(<StateHook />, container);
  });
  const countInformation = container.querySelector('.count-information');
  expect(countInformation?.textContent)
    .toContain('The button has been clicked 0 time(s).');
  const countButton = container.querySelector('.count-button');
  expect(countButton?.innerHTML).toBe('Count');

  act(() => {
    countButton?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });
  expect(countInformation?.textContent)
    .toContain('The button has been clicked 1 time(s).');

  act(() => {
    countButton?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });
  expect(countInformation?.textContent)
    .toContain('The button has been clicked 2 time(s).');
});
