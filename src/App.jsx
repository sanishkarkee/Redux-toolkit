import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { increment, decrement } from './features/counter/counterSlice';

function App() {
  // Reducer ma update bhayeko value lai yaha FETCH gareko ho
  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  const handleIncrementClick = () => {
    dispatch(increment());
  };

  const handleDecrementClick = () => {
    dispatch(decrement());
  };

  return (
    <>
      <div className='container'>
        <button onClick={handleIncrementClick}>+</button>
        <p>Count: {count}</p>
        <button onClick={handleDecrementClick}>-</button>
      </div>
    </>
  );
}

export default App;
