// class Component

import * as React from "react";
import { createRoot } from "react-dom/client";
import Counter from "./Counter";

// React 활동영역 선정 id = root;
// React 에게 활동영역 알려주고 => reactRoot
const rootNode = document.getElementById("root");
const reactRoot = createRoot(rootNode!);

// 활동영역에 작성한 엘리먼트 던지기
reactRoot.render(<Counter title="this is counter" />);

// npm start 하면 화면에 출력
//할로
