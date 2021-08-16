import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import EffectHook from './EffectHook';

declare let container: HTMLDivElement;

it('uses Effect Hook', () => {
  // Workaround for `jest.useFakeTimers('modern');`, which uses `@sinonjs/fake-timers`.
  const setIntervalSpy = jest.spyOn(window, 'setInterval');
  const clearIntervalSpy = jest.spyOn(window, 'clearInterval');

  act(() => {
    render(<EffectHook />, container);
  });
  const clock = container.querySelector('.clock');
  expect(clock?.textContent).toContain('10:32:14 am 09/07/2021');

  act(() => {
    jest.advanceTimersByTime(300);
  });
  expect(clock?.textContent).toContain('10:32:14 am 09/07/2021');

  act(() => {
    jest.advanceTimersByTime(700);
  });
  expect(clock?.textContent).toContain('10:32:15 am 09/07/2021');

  act(() => {
    jest.advanceTimersByTime(1900);
  });
  expect(clock?.textContent).toContain('10:32:16 am 09/07/2021');

  act(() => {
    jest.advanceTimersByTime(7100);
  });
  expect(clock?.textContent).toContain('10:32:24 am 09/07/2021');

  expect(setIntervalSpy).toHaveBeenCalledTimes(1);
  expect(setIntervalSpy).toHaveBeenCalledWith(expect.anything(), 100);

  act(() => {
    unmountComponentAtNode(container);
  });
  expect(clearIntervalSpy).toHaveBeenCalledTimes(1);
  expect(clearIntervalSpy).toHaveBeenCalledWith(expect.anything());
});

beforeEach(() => {
  jest.useFakeTimers('modern');
  jest.setSystemTime(new Date('2021-07-09T10:32:14'));
});

afterEach(() => {
  jest.useRealTimers();
});
