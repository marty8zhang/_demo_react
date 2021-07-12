import React from 'react';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import RefsAndTheDom from './RefsAndTheDom';

declare let container: HTMLDivElement;

it('has the `ref` to the class instance', () => {
  const mockedConsoleLog = jest.spyOn(global.console, 'log');

  act(() => {
    render(<RefsAndTheDom />, container);
  });
  expect(mockedConsoleLog).toHaveBeenCalledTimes(1);
  expect(mockedConsoleLog).toHaveBeenCalledWith(
    '`RefOnClassInstance.testInstanceMethod()` called.',
  );
});

it('focuses on the text input via the button click', () => {
  act(() => {
    render(<RefsAndTheDom />, container);
  });
  const textInput = container.querySelector('input[type=text]');
  expect(textInput).toBeTruthy();
  expect(document.activeElement).not.toBe(textInput);
  const button = container.querySelector('button');
  expect(button).toBeTruthy();

  act(() => {
    // @ts-ignore
    button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });
  expect(document.activeElement).toBe(textInput);
});
