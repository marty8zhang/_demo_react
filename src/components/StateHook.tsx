import React, { useState } from 'react';

export default function StateHook() {
  const [clickCount, setClickCount] = useState(0);

  function handleClick() {
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
