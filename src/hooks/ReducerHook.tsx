import React, { useReducer } from 'react';

interface ReducerHookProps {
  initialCount: number,
}

interface ReducerHookState {
  count: number;
  message?: string;
}

interface ReducerHookAction {
  type: 'increment' | 'decrement' | 'reset';
  payload?: number,
}

function init(initialCount: number) {
  return {
    count: initialCount,
    message: 'This message should not be lost among state updates by the reducer.',
  };
}

/*
 * Note that the reducer must return the full state object, not just the partial object containing
 * updated properties only. Check how 'decrement' causes the previous message to lose whereas
 * 'increment' doesn't.
 */
function reducer(
  state: ReducerHookState,
  { type, payload = 0 }: ReducerHookAction,
) {
  switch (type) {
    case 'increment':
      return { ...state, count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return init(payload);
    default:
      throw new Error(`The action "${type}" isn't supported by the reducer hook.`);
  }
}

export default function ReducerHook({ initialCount }: ReducerHookProps) {
  const [state, dispatch] = useReducer(reducer, init(initialCount));
  // Lazy initialisation version. TBH, I can't really see any benefit for using this syntax.
  // const [state, dispatch] = useReducer(reducer, initialCount, init);

  const { count, message = 'Error: Previous message lost.' } = state as ReducerHookState;

  return (
    <>
      Count:
      {' '}
      {count}
      <br />
      <button type="button" onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button type="button" onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button
        type="reset"
        onClick={() => dispatch({ type: 'reset', payload: initialCount })}
      >
        Reset
      </button>
      <br />
      {message}
    </>
  );
}
