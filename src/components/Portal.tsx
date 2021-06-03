import React, { PropsWithChildren } from 'react';
import ReactDOM from 'react-dom';

type Props = PropsWithChildren<{}>;

export default class Portal extends React.Component<Props> {
  private modalContainer!: HTMLElement;

  private portalContainer: HTMLDivElement;

  constructor(props: Props) {
    super(props);

    this.initialiseModalContainer();

    this.portalContainer = document.createElement('div');
  }

  componentDidMount() {
    this.modalContainer.appendChild(this.portalContainer);
  }

  componentWillUnmount() {
    this.modalContainer.removeChild(this.portalContainer);
  }

  private initialiseModalContainer() {
    let modalContainer = document.getElementById('portals-modal');
    if (modalContainer === null) {
      modalContainer = document.createElement('div');
      modalContainer.id = 'portals-modal';
      document.body.appendChild(modalContainer);
    }
    this.modalContainer = modalContainer;
  }

  render() {
    const { children } = this.props;
    return ReactDOM.createPortal(
      children,
      this.portalContainer,
    );
  }
}
