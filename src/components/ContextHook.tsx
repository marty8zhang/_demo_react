import React, { useContext } from 'react';
import { ContextHookContext } from '../pages/Hooks';

export default function ContextHook() {
  const contextValue = useContext(ContextHookContext);

  return (
    <p>
      <strong>Context Value:</strong>
      {' '}
      {contextValue}
    </p>
  );
}
