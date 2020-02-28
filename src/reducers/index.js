import { combineReducers } from 'redux';
import { vocabReducer } from './vocabReducer'

const rootReducer = combineReducers({
    words: vocabReducer
  })
  
  export default rootReducer;
