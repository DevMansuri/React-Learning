import classes from './Counter.module.css';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { counterActions } from "../store/counter";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <h2>Counter: {count}</h2>}
      <button onClick={() => dispatch(counterActions.increment())}>
        ➕ Increment
      </button>
      <button onClick={() => dispatch(counterActions.decrement())}>
        ➖ Decrement
      </button>
      <button onClick={() => dispatch(counterActions.increase(5))}>
        INCREASEBY5
      </button>
      <button onClick={() => dispatch(counterActions.toggle())}> Toggle</button>
    </main>
  );
};

export default Counter;
// mvc pattern
// flux type d g
// redux principlecode advantage
// redux vs context
// reux thunk
// redux saga
// redux persist
// react redux
// redux recoil
// redux toolkit

// optimizaton
// unneccesary Rendering
// error boundries
// code splitting
// use ts insted of jsx
//
