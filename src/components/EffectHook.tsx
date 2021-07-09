import React, { useEffect, useState } from 'react';

export default function EffectHook() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 100);

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  },
  /*
   * Pass an array as the optional second parameter to `useEffect()`. Each value in the array
   * will be used in comparison with their previous counterparts. If any of the values is different
   * than its counterpart in the previous rendering, the given effects - both the effect function
   * and its returning clean-up function - will be called after the current rendering; otherwise,
   * the functions will be skipped during re-rendering.
   *
   * If an empty array is provided, the props and state inside the effect will always have their
   * initial values and the functions won't be re-run. This is similar to only utilising
   * `componentDidMount()` and `componentWillUnmount()` in a class component.
   */
  []);

  return (
    <span className="clock">
      {time.toLocaleTimeString()}
      {' '}
      {time.toLocaleDateString()}
    </span>
  );
}
