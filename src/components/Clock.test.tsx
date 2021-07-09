import React from 'react';
import { act } from 'react-dom/test-utils';
import { render, unmountComponentAtNode } from 'react-dom';
import Clock from './Clock';

declare let container: HTMLDivElement;

it('renders a clock', () => {
  // Workaround for `jest.useFakeTimers('modern');`, which uses `@sinonjs/fake-timers`.
  const setIntervalSpy = jest.spyOn(window, 'setInterval');
  const clearIntervalSpy = jest.spyOn(window, 'clearInterval');

  act(() => {
    render(<Clock />, container);
  });
  const clock = container.querySelector('.clock');
  expect(clock?.textContent).toContain('10:32:14 am 09/07/2021');

  act(() => {
    jest.advanceTimersByTime(900);
  });
  expect(clock?.textContent).toContain('10:32:14 am 09/07/2021');

  act(() => {
    jest.advanceTimersByTime(100);
  });
  expect(clock?.textContent).toContain('10:32:15 am 09/07/2021');

  act(() => {
    jest.advanceTimersByTime(1100);
  });
  expect(clock?.textContent).toContain('10:32:16 am 09/07/2021');

  act(() => {
    jest.advanceTimersByTime(3900);
  });
  expect(clock?.textContent).toContain('10:32:20 am 09/07/2021');

  expect(setIntervalSpy).toHaveBeenCalledTimes(1);

  act(() => {
    unmountComponentAtNode(container);
  });
  expect(clearIntervalSpy).toHaveBeenCalledTimes(1);
});

beforeEach(() => {
  jest.useFakeTimers('modern');
  jest.setSystemTime(new Date('2021-07-09T10:32:14'));
});

afterEach(() => {
  jest.useRealTimers();
});
