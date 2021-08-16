import React, { useEffect, useState } from 'react';

export default function EffectHook() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    /*
     * The whole function body, except the returned function, will be used similar to
     * `componentDidMount()` (and `componentDidUpdate()` if not guarded by additional conditions)
     * in a class component.
     */
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 100);

    // The returned function will be used similar to `componentWillUnmount()` in a class component.
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  },
  /*
   * Pass an array as the OPTIONAL second parameter to `useEffect()`. This array will be used to
   * compared with its previous version, if any of its values is different than the one in the
   * previous rendering, the given effects - both the effect function and its returning clean-up
   * function - will be called after the current rendering; otherwise, the functions will be
   * skipped during re-rendering.
   *
   * By providing an empty array, there is no value to be compared, and hence the function(s) won't
   * be re-run. This is similar to only utilising `componentDidMount()` and `componentWillUnmount()`
   * in a class component.
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
