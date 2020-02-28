import { combineReducers } from 'redux';
import { vocabReducer } from './vocabReducer'

const rootReducer = combineReducers({
    searchedWord: vocabReducer
  })
  
export default rootReducer;
