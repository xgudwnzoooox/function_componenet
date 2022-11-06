import * as React from "react";

interface CountDisplayProps {
  count: number;
}

function CountDisplay(props: CountDisplayProps): React.ReactElement {
  React.useEffect(() => {
    console.log("[Rendered] CountDisplay / useEffect");
  });

  // 의존성 배열을 빈 배열로 하면 어떠한 변경에도 Effects를 실행하지 않겠다
  // 하지만 처음 mount할 때는 실행된다.
  React.useEffect(() => {
    console.log("[Mounted] CountDisplay / useEffect");
  }, []);

  return <h3>Count: {props.count}</h3>;
}

export default CountDisplay;
