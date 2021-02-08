import React, {
  ForwardedRef,
  PropsWithChildren,
  ReactNode,
} from 'react';

type Props = {
  forwardedRef: ForwardedRef<HTMLParagraphElement>,
}

class RefForwardingAwareP extends React.Component<Props> {
  render(): ReactNode {
    const { children, forwardedRef } = this.props;
    return (
      <p ref={forwardedRef}>{children}</p>
    );
  }
}

/*
 * `ref` only exists when you define a component with `React.forwardRef()`. Regular function or
 * class components don’t receive the `ref` argument, and `ref` is not available in `props` either.
 * This is why in `RefForwardingAwareP` below we have to use a different name to pass down
 * the `ref` as a part of `props`.
 */
const RefForwardedP = React.forwardRef(
  (props: PropsWithChildren<{children?: ReactNode}>, ref: ForwardedRef<HTMLParagraphElement>) => (
    <RefForwardingAwareP forwardedRef={ref}>{props.children}</RefForwardingAwareP>
  ),
);

const RefForwardedH2 = React.forwardRef(
  (props: PropsWithChildren<{children?: ReactNode}>, ref: ForwardedRef<HTMLHeadingElement>) => (
    <h2 ref={ref}>{props.children}</h2>
  ),
);

export { RefForwardedP, RefForwardedH2 };
