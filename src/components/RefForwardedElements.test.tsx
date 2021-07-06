import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { RefForwardedH2, RefForwardedP } from './RefForwardedElements';

let container: HTMLDivElement | null = null;
const h2Ref = React.createRef<HTMLHeadingElement>();
const pRef = React.createRef<HTMLParagraphElement>();

it('matches with the H2 inline snapshot', () => {
  act(() => {
    render(
      <RefForwardedH2 ref={h2Ref}>This is a referred H2.</RefForwardedH2>,
      container,
    );
  });
  expect(h2Ref.current?.outerHTML).toMatchInlineSnapshot(
    '"<h2>This is a referred H2.</h2>"',
  );
});

it('matches with the paragraph snapshot', () => {
  act(() => {
    render(
      <RefForwardedP ref={pRef}>This is a referred paragraph.</RefForwardedP>,
      container,
    );
  });
  expect(pRef.current?.outerHTML).toMatchSnapshot();
});

beforeEach(() => {
  container = document.createElement('div');
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
