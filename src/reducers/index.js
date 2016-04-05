import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import assetFormReducer from './assetForm';

const reducers = {
  form: formReducer,
  assetForm: assetFormReducer,
};

export default combineReducers(reducers);

// export default function (state = {}, action) {
//   if (action === undefined) {
//     return state;
//   }

//   console.log('Reducing.');
//   console.log(state);
//   console.log(action);

//   return combineReducers(reducers)(state, action);
// }
