import "./App.css";
import { Transition } from "react-transition-group";
import { useRef, useState } from "react";
import TodoList from "./TodoList";

const duration = 2000;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

function Fade({ in: inProp }) {
  const nodeRef = useRef(null);

  return (
    <Transition nodeRef={nodeRef} in={inProp} timeout={duration}>
      {(state) => (
        <div
          ref={nodeRef}
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          I'm a fade Transition!
        </div>
      )}
    </Transition>
  );
}

function App() {
  const [inProp, setInProp] = useState(true);

  return (
    <div>
      <Fade in={inProp} />
      <button onClick={() => setInProp(!inProp)}>
        {inProp ? "Hide" : "Show"}
      </button>
      <hr />
      <TodoList />
    </div>
  );
}
export default App;
