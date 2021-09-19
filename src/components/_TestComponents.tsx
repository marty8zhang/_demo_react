import React from 'react';

export class _TestClassComponent extends React.Component<any, any> {
  private readonly id: number;

  constructor(props: any) {
    super(props);

    this.id = Math.ceil(Math.random() * 10000);
  }

  render() {
    const { data } = this.props;

    return (
      <>
        <h2>Test Class Component</h2>
        <p>
          Id:
          {' '}
          {this.id}
          <br />
          Received Data:
          {' '}
          {data}
        </p>
      </>
    );
  }
}

export function _TestFunctionComponent(props: any) {
  const id = Math.ceil(Math.random() * 10000);
  const { data } = props;

  return (
    <>
      <h2>Test Function Component</h2>
      <p>
        Id:
        {' '}
        {id}
        <br />
        Received Data:
        {' '}
        {data}
      </p>
    </>
  );
}
