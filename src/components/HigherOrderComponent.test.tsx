import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import HigherOrderComponent, { ReactComponentTypeProps } from './HigherOrderComponent';
import MockedDataSource, {
  // @ts-ignore
  mockedAddChangeListener, mockedRemoveChangeListener,
} from '../data/FakeDataSource';

jest.mock('../data/FakeDataSource');

let container: HTMLDivElement | null = null;

const DummyComponent = (props: ReactComponentTypeProps) => {
  const { testData: { id = '', message = '' } = {} } = props;

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

/*
 * Note: Due to the mocked implementations of `mockedDataRetriever()` and `DataSource` functions
 * are defined outside of the test(s), the following jest configuration is needed in `package.json`
 * to override the default one defined by `react-scripts`:
 * ```
 * "jest": {
 *   "resetMocks": false
 * },
 * ```
 * @see https://jestjs.io/docs/configuration#resetmocks-boolean
 */
const mockedDataRetriever = jest.fn().mockImplementation((dataSource, props) => {
  const { id } = props;

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

  return null;
});

const mockedDataSource = new MockedDataSource();

const MockedHigherOrderComponent = HigherOrderComponent(
  DummyComponent,
  mockedDataRetriever,
  mockedDataSource,
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
  expect(mockedDataRetriever).toBeCalledTimes(1);
  expect(mockedDataRetriever).toBeCalledWith(mockedDataSource, { id: '123' });
  expect(mockedAddChangeListener).toBeCalledTimes(1);
  expect(container.textContent).toContain('123 - Test message 123');

  act(() => {
    render(<MockedHigherOrderComponent id="45" />, container);
  });
  expect(mockedDataRetriever).toBeCalledTimes(2);
  expect(mockedDataRetriever).toBeCalledWith(mockedDataSource, { id: '45' });
  expect(mockedAddChangeListener).toBeCalledTimes(1);
  expect(container.textContent).toContain('45 - Test message 45');

  act(() => {
    // @ts-ignore
    unmountComponentAtNode(container);
  });
  expect(mockedRemoveChangeListener).toBeCalledTimes(1);
});

beforeEach(() => {
  mockedDataRetriever.mockClear();
  mockedAddChangeListener.mockClear();
  mockedRemoveChangeListener.mockClear();

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
