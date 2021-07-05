import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import HigherOrderComponent, { ReactComponentTypeProps } from './HigherOrderComponent';
import { DataSource } from '../data/FakeDataSource';

let container: HTMLDivElement | null = null;

const DummyComponent = (props: ReactComponentTypeProps) => {
  const { testData: { id, message } } = props;

  return (
    <div>
      {id}
      {' '}
      -
      {' '}
      {message}
    </div>
  );
};

const mockedAddChangeListener = jest.fn();
const mockedRemoveChangeListener = jest.fn();
class DummyDataSource implements DataSource {
  getAll = jest.fn();

  getOne(id?: string): any {
    if (id === '123') {
      return {
        id: '123',
        message: 'Test message 123',
      };
    }

    if (id === '45') {
      return {
        id: '45',
        message: 'Test message 45',
      };
    }

    return {};
  }

  addChangeListener = mockedAddChangeListener;

  removeChangeListener = mockedRemoveChangeListener;
}
const dummyDataSource = new DummyDataSource();

beforeEach(() => {
  mockedAddChangeListener.mockClear();
  mockedRemoveChangeListener.mockClear();

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

const dataRetriever = (
  dataSource: DataSource,
  props: ReactComponentTypeProps,
) => dataSource.getOne(props.id);
const MockedHigherOrderComponent = HigherOrderComponent(
  DummyComponent,
  dataRetriever,
  dummyDataSource,
  'testData',
  'id',
);

it('renders and updates higher order component', () => {
  if (!container) {
    return;
  }

  act(() => {
    render(<MockedHigherOrderComponent id="123" />, container);
  });
  expect(mockedAddChangeListener).toBeCalledTimes(1);
  expect(container.textContent).toContain('123 - Test message 123');

  act(() => {
    render(<MockedHigherOrderComponent id="45" />, container);
  });
  expect(mockedAddChangeListener).toBeCalledTimes(1);
  expect(container.textContent).toContain('45 - Test message 45');

  act(() => {
    // @ts-ignore
    unmountComponentAtNode(container);
  });
  expect(mockedRemoveChangeListener).toBeCalledTimes(1);
});
