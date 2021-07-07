import React from 'react';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import RenderPropAwareMouseTracker from './RenderPropAwareMouseTracker';

declare let container: HTMLDivElement;

it('tracks mouse movement with render prop', () => {
  act(() => {
    render(<RenderPropAwareMouseTracker
      render={(mousePosition) => `${mousePosition.x}, ${mousePosition.y}`}
      id="test-render-prop-aware-mouse-tracker"
      style={{ height: '50px', backgroundColor: 'black' }}
    />, container);
  });
  const tracker = document.querySelector('[id=test-render-prop-aware-mouse-tracker]');
  expect(tracker).toBeTruthy();
  expect(tracker).toHaveStyle(`
    background-color: black;
    height: 50px;
  `);
  expect(container.textContent).toContain('0, 0');

  act(() => {
    const mouseMoveEvent = new MouseEvent('mousemove', {
      clientX: 12,
      clientY: 34,
      // Note that `bubbles: true` is required for an Event to reach the React listener.
      bubbles: true,
    });

    tracker?.dispatchEvent(mouseMoveEvent);
  });
  expect(container.textContent).toContain('12, 34');
});
