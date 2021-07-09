import React from 'react';

interface Props {}
interface State {
  date: Date;
}

export default class Clock extends React.Component<Props, State> {
  private intervalId?: ReturnType<typeof setInterval>;

  constructor(props: Props) {
    super(props);

    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(
      () => this.tick(),
      100,
    );
  }

  componentWillUnmount() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  tick() {
    /*
     * `setState()` lets React know that the component's state has been updated and hence triggers
     * a new `render()` call on the same component.
     */
    this.setState({
      date: new Date(),
    });
  }

  render() {
    const { date } = this.state;

    return (
      <span className="clock">
        {date.toLocaleTimeString()}
        {' '}
        {date.toLocaleDateString()}
      </span>
    );
  }
}
