import React, { ComponentType as ReactComponentType } from 'react';
import { DataSource, fakeDataSource } from '../data/FakeDataSource';

interface ReactComponentTypeProps {
  [propertyName: string]: any,
  [propertyName: number]: any,
}

export default function HigherOrderComponent(
  /*
   * Note: Using `ReactComponentTypeProps` instead of `any` below will give us:
   * > Property 'blogs' is missing in type 'ReactComponentTypeProps' but required in type
   * > 'Readonly<BlogListProps>'.
   * , when calling `HigherOrderComponent(BlogList, ...)`. The issue might be caused by React, but
   * not TypeScript.
   */
  WrappedComponent: ReactComponentType<any>,
  dataRetriever: (dataSource: DataSource, props: ReactComponentTypeProps) => any,
  dataPropertyName: string,
): ReactComponentType<ReactComponentTypeProps> {
  interface State {
    data: any,
  }

  return class extends React.Component<ReactComponentTypeProps, State> {
    constructor(props: ReactComponentTypeProps) {
      super(props);

      this.handleDataChange = this.handleDataChange.bind(this);

      this.state = {
        data: dataRetriever(fakeDataSource, props),
      };
    }

    componentDidMount() {
      fakeDataSource.addChangeListener(this.handleDataChange);
    }

    componentWillUnmount() {
      fakeDataSource.removeChangeListener(this.handleDataChange);
    }

    public handleDataChange() {
      this.setState({
        data: dataRetriever(fakeDataSource, this.props),
      });
    }

    render() {
      const { data } = this.state;

      return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <WrappedComponent {...{ ...this.props, [dataPropertyName]: data }} />
      );
    }
  };
}
