import { combineReducers } from 'redux';
import { vocabReducer } from './vocabReducer'
import { listReducer } from './listReducer';

const rootReducer = combineReducers({
    searchedWord: vocabReducer,
    vocabList: listReducer,
  })
  
export default rootReducer;
