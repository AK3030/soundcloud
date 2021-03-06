import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import userErrorsReducer from './user_errors_reducer';
import trackErrorsReducer from './track_errors_reducer';
import commentErrorsReducer from './comment_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  user: userErrorsReducer,
  track: trackErrorsReducer,
});

export default errorsReducer;
