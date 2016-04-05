import { createStore } from 'redux';
import reducers from './reducers';

export default function initializeStore() {
  return createStore(reducers);
}
