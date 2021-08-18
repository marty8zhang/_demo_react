import React, { useContext } from 'react';
import { ContextHookContext } from '../pages/Hooks';

export default function ContextHook() {
  /*
   * `useContext(SomeContext)` is yet another alternative to use context in a class component or
   * `<SomeContext.Consumer />`. The way of creating a context or using `<SomeContext.Provider />`
   * remains the same.
   */
  const contextValue = useContext(ContextHookContext);

  return (
    <p>
      <strong>Context Value:</strong>
      {' '}
      {contextValue}
    </p>
  );
}
