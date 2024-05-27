import { useSelector, useDispatch } from 'react-redux';

import { counterAction } from '../store';

export default function Counter() {
  const count = useSelector((state) => state.counter.count);
  const showCounter = useSelector((state) => state.counter.showCounter);

  const dispatch = useDispatch();

  return (
    <div className="bg-white w-96 m-auto my-10 p-3 border-2 rounded-lg text-center">
      <h2 className="text-2xl text-slate-600 font-bold ">
        Counter using Redux
      </h2>

      {showCounter && (
        <>
          <p className="font-bold text-3xl text-blue-800 p-3">{count}</p>
          <div>
            <button
              className="border rounded bg-blue-600 px-2 py-1 text-semibold m-1 text-white hover:bg-blue-500"
              onClick={() => dispatch(counterAction.increment())}
            >
              IncreaseBy5
            </button>
            <button
              className="border rounded bg-blue-600 px-2 py-1 text-semibold m-1 text-white hover:bg-blue-500"
              onClick={() => dispatch(counterAction.decrement())}
            >
              DecreaseBy5
            </button>
            <button
              className="border rounded bg-blue-600 px-2 py-1 text-semibold m-1 text-white hover:bg-blue-500"
              onClick={() => dispatch(counterAction.increase(20))}
            >
              IncreaseBy20
            </button>
          </div>
        </>
      )}
      <button
        className="border rounded bg-blue-600 px-2 py-1 text-semibold m-1 text-white hover:bg-blue-500"
        onClick={() => dispatch(counterAction.toggleCounter())}
      >
        Toggle Counter
      </button>
    </div>
  );
}
