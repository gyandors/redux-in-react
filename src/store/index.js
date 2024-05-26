import { legacy_createStore as createStore } from 'redux';

function counterReducer(state = { count: 0 }, action) {
  if (action.type === 'INCREMENTBY5') return { count: state.count + 5 };
  if (action.type === 'DECREMENTBY5') return { count: state.count - 5 };
  return state;
}

const store = createStore(counterReducer);

export default store;
