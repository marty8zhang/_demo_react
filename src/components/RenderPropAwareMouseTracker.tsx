import React, { ReactNode, MouseEvent, CSSProperties } from 'react';

interface MousePosition {
  x: number,
  y: number,
}
interface Props {
  render: (mousePosition: MousePosition) => ReactNode;
  id?: string,
  style?: CSSProperties;
}
interface State extends MousePosition {}

export default class RenderPropAwareMouseTracker extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = { x: 0, y: 0 };

    this.handleMouseMove = this.handleMouseMove.bind(this);
  }

  public handleMouseMove(event: MouseEvent): void {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  }

  render(): ReactNode {
    const {
      render, id, style = {},
    } = this.props;
    const { x, y } = this.state;
    return (
      <div
        id={id}
        style={style}
        onMouseMove={this.handleMouseMove}
      >
        {render({ x, y })}
      </div>
    );
  }
}
