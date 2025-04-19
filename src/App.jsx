import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import {
  increment,
  decrement,
  resetCount,
} from './features/counter/counterSlice';

function App() {
  // Reducer ma update bhayeko value lai yaha FETCH gareko ho
  //state.counter.value:
  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  const handleIncrementClick = () => {
    dispatch(increment()); // dispatch(action())
  };

  const handleDecrementClick = () => {
    dispatch(decrement()); // dispatch(action())
  };

  const handleResetClick = () => {
    dispatch(resetCount());
  };

  return (
    <>
      <div className='container'>
        <button onClick={handleIncrementClick}>+</button>
        <p>Count: {count}</p>
        <button onClick={handleDecrementClick}>-</button>
        <br />
        <br />
        <button onClick={handleResetClick}>Reset</button>
      </div>
    </>
  );
}

export default App;
