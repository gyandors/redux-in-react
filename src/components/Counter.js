import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function Counter() {
  const [showCounter, setShowCounter] = useState(true);

  const countSelector = useSelector((state) => state.count);
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
          <p style={{ fontSize: '2rem' }}>{countSelector}</p>
          <div>
            <button
              style={{ fontSize: '1.2rem' }}
              onClick={() => dispatch({ type: 'INCREMENTBY5' })}
            >
              IncrementBy5
            </button>
            <button
              style={{ fontSize: '1.2rem' }}
              onClick={() => dispatch({ type: 'DECREMENTBY5' })}
            >
              DecrementBy5
            </button>
          </div>
        </>
      )}
      <button
        style={{ fontSize: '1.2rem' }}
        onClick={() => setShowCounter(!showCounter)}
      >
        Toggle Counter
      </button>
    </div>
  );
}
