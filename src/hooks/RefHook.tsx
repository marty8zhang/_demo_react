import React, { useEffect, useRef, useState } from 'react';

/*
 * Different to `React.createRef()`, a `ref` created by `useRef()` can have an initial value.
 * Also, its `current` property is mutable, not `readonly`.
 */
export default function RefHook() {
  // const ref = React.createRef();
  // Error: Cannot assign to 'current' because it is a read-only property.
  // ref.current = 1;

  // Usage 1: Refer to a DOM element.
  const refHookInput = useRef<HTMLInputElement>(null);
  const focusOnInput = () => {
    refHookInput.current!.focus();
  };

  // Usage 2: Use as an instance variable.
  const [time, setTime] = useState(new Date());
  const refHookIntervalId = useRef<any>(null);
  // Note: Setting `ReturnType<typeof setInterval>` as the `current` type will make it readonly.
  // const refHookIntervalId = useRef<ReturnType<typeof setInterval>>(null);

  useEffect(() => {
    refHookIntervalId.current = setInterval(() => setTime(new Date()), 100);

    return () => {
      clearInterval(refHookIntervalId.current);
    };
  }, []);

  return (
    <>
      <div>
        <input type="text" ref={refHookInput} />
        <button type="button" onClick={focusOnInput}>Focus</button>
      </div>
      <p>
        {time.toLocaleTimeString()}
        {' '}
        {time.toLocaleDateString()}
      </p>
    </>
  );
}
