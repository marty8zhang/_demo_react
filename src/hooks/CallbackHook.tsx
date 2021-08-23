import React, { useCallback, useEffect, useState } from 'react';

export default function CallbackHook() {
  const [count, setCount] = useState(0);
  const CONST_NUMBER = 1;

  useEffect(() => {
    const intervalId = setInterval(
      // Note how `setCount()` is being used below. On the other hand, directly calling
      // `setCount(count + 1)` won't give us the current state in the callback.
      () => setCount((previousCount) => previousCount + 1),
      1000,
    );

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function square(number: number) {
    return number * number;
  }

  const callbackBasedOnConstant = useCallback(() => square(count), [CONST_NUMBER]);
  const callbackBasedOnState = useCallback(() => square(count), [count]);

  return (
    <p>
      <strong>Count:</strong>
      {' '}
      {count}
      <br />
      <strong>Callback Results:</strong>
      {' '}
      {callbackBasedOnConstant()}
      {' vs '}
      {callbackBasedOnState()}
    </p>
  );
}
