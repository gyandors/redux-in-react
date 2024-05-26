import { useSelector, useDispatch } from 'react-redux';

import { counterAction } from '../store';

export default function Counter() {
  const count = useSelector((state) => state.count);
  const showCounter = useSelector((state) => state.showCounter);

  const dispatch = useDispatch();

  return (
    <div
      style={{
        width: '20rem',
        margin: 'auto',
        padding: '1rem',
        border: '2px solid',
        textAlign: 'center',
      }}
    >
      <h2>Counter</h2>

      {showCounter && (
        <>
          <p style={{ fontSize: '2rem' }}>{count}</p>
          <div>
            <button
              style={{ fontSize: '1.2rem', margin: '6px' }}
              onClick={() => dispatch(counterAction.increment())}
            >
              IncreaseBy5
            </button>
            <button
              style={{ fontSize: '1.2rem', margin: '6px' }}
              onClick={() => dispatch(counterAction.decrement())}
            >
              DecreaseBy5
            </button>
            <button
              style={{ fontSize: '1.2rem', margin: '6px' }}
              onClick={() => dispatch(counterAction.increase(20))}
            >
              IncreaseBy20
            </button>
          </div>
        </>
      )}
      <button
        style={{ fontSize: '1.2rem' }}
        onClick={() => dispatch(counterAction.toggleCounter())}
      >
        Toggle Counter
      </button>
    </div>
  );
}
