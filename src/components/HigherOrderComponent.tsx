import React, { ComponentType as ReactComponentType } from 'react';
import { DataSource } from '../data/FakeDataSource';
import { getDisplayName } from './Utility';

export interface ReactComponentTypeProps {
  [propertyName: string]: any,
  [propertyName: number]: any,
}

export default function HigherOrderComponent(
  /*
   * Note: Using `ReactComponentType<ReactComponentTypeProps>` instead of `ReactComponentType<any>`
   * below will give us:
   * > Property 'blogs' is missing in type 'ReactComponentTypeProps' but required in type
   * > 'Readonly<BlogListProps>'.
   * , when calling `HigherOrderComponent(BlogList, ...)`. The issue might be caused by React, but
   * not TypeScript.
   */
  WrappedComponent: ReactComponentType<any>,
  dataRetriever: (dataSource: DataSource, props: ReactComponentTypeProps) => any,
  currentDataSource: DataSource,
  dataPropertyName: string,
  changeTriggerPropertyName: string|null = null,
): ReactComponentType<ReactComponentTypeProps> {
  interface State {
    data: any,
  }

  return class extends React.Component<ReactComponentTypeProps, State> {
    constructor(props: ReactComponentTypeProps) {
      super(props);

      this.handleDataChange = this.handleDataChange.bind(this);

      this.state = {
        data: dataRetriever(currentDataSource, props),
      };
    }

    componentDidMount() {
      currentDataSource.addChangeListener(this.handleDataChange);
    }

    componentDidUpdate(prevProps: Readonly<ReactComponentTypeProps>) {
      if (!changeTriggerPropertyName) {
        return;
      }

      const { [changeTriggerPropertyName]: currentPropsChangeTriggerValue = null } = this.props;
      if (prevProps[changeTriggerPropertyName] === currentPropsChangeTriggerValue) {
        return;
      }

      this.handleDataChange();
    }

    componentWillUnmount() {
      currentDataSource.removeChangeListener(this.handleDataChange);
    }

    public static get displayName(): string {
      return `HigherOrderComponent(${getDisplayName(WrappedComponent)})`;
    }

    public handleDataChange() {
      this.setState({
        data: dataRetriever(currentDataSource, this.props),
      });
    }

    render() {
      const { data } = this.state;

      return (
        /*
         * `WrappedComponent` receives all the `props` of the container, along with a new property,
         * `[dataPropertyName]`, which it can use to render its output.
         */
        // eslint-disable-next-line react/jsx-props-no-spreading
        <WrappedComponent {...{ ...this.props, [dataPropertyName]: data }} />
      );
    }
  };
}
