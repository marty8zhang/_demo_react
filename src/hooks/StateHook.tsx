import React, { useState } from 'react';

export default function StateHook() {
  const [clickCount, setClickCount] = useState(0);

  function handleClick() {
    /*
     * Note that there is an alternative form for this function, e.g.,
     * setClickCount(prevCount => prevCount + 1);
     * That form is particularly useful when being used inside a callback, within which the
     * directly use of a state variable won't give you the previous/current state value.
     */
    setClickCount(clickCount + 1);
  }

  return (
    <div className="state-hook-demo">
      <p className="count-information">
        The button has been clicked
        {' '}
        {clickCount}
        {' '}
        time(s).
      </p>
      <p>
        <button className="count-button" type="button" onClick={handleClick}>Count</button>
      </p>
    </div>
  );
}
