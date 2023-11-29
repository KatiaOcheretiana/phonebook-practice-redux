import { combineReducers, createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { filterReducer } from './filterSlice';
import { contactReducer } from './contactSlice';

const rootReducer = combineReducers({
  filter: filterReducer,
  contacts: contactReducer,
});

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);
