import * as React from "react";
import CountDisplay from "./CountDisplay";
import { useCounter } from "./hooks/useCounter";
import useToggle from "./hooks/useToggle";
import useWindowWidth from "./hooks/useWindowWidth";

interface CounterProps {
  title: string;
}

function Counter(props: CounterProps): React.ReactElement {
  const { count, add, minus } = useCounter();
  const [hide, toggle] = useToggle();
  const width = useWindowWidth();

  // 의존성 인수를 쓰지 않으면 render할때마다 무조건 Effects 실행
  React.useEffect(() => {
    console.log("[Rendered] Counter / useEffect");
  });

  // 의존성 배열을 빈 배열로 하면 어떠한 변경에도 Effects를 실행하지 않겠다
  // 하지만 처음 mount할 때는 실행된다.
  React.useEffect(() => {
    console.log("[Mounted] Counter / useEffect");
  }, []);

  return (
    <div>
      <h1>
        {props.title} / {width}
      </h1>
      {!hide && <CountDisplay count={count} />}
      <button onClick={toggle}> Toggle </button>
      <button onClick={add}> Plus </button>
      <button onClick={minus}> Minus </button>
    </div>
  );
}

export default Counter;
