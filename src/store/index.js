import { legacy_createStore as createStore } from 'redux';

function counterReducer(state = { count: 0 }, action) {
  if (action.type === 'INCREMENTBY2') return { count: state.count + 2 };
  if (action.type === 'DECREMENTBY2') return { count: state.count - 2 };
  return state;
}

const store = createStore(counterReducer);

export default store;
