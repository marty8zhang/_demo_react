import React, { ReactElement } from 'react';

export function Fragment(): ReactElement {
  return (
    <>
      <li>Normal Fragment Item 1</li>
      <li>Normal Fragment Item 2</li>
    </>
  );
}

export function ShorthandFragment(): ReactElement {
  // Note: The shorthand version doesn't support `key`.
  return (
    <>
      <li>Shorthand Fragment Item 1</li>
      <li>Shorthand Fragment Item 2</li>
    </>
  );
}

export function KeyedFragment(): ReactElement {
  return (
    <React.Fragment key="5 & 6">
      <li>Keyed Fragment Item 1</li>
      <li>Keyed Fragment Item 2</li>
    </React.Fragment>
  );
}
