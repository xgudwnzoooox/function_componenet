import * as React from "react";

interface CounterProps {
  title: string;
}

interface CounterState {
  num: number;
}
s;
class Counter extends React.Component<CounterProps, CounterState> {
  constructor(props: CounterProps) {
    super(props);

    // state를 class component로 만드는 방식
    // 무조건 constructor에서만 가능
    this.state = {
      num: 0
    };
  }

  handleClick = () => {
    this.setState((prev) => {
      return {
        num: prev.num + 1
      };
    });
  };
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h3>Count: {this.state.num} </h3>
        <button onClick={this.handleClick}> Plust </button>
      </div>
    );
  }
}

// export default Counter;
