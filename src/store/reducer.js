import { combineReducers } from 'redux';
import quesList from '../list/store';

const reducer = combineReducers({
	quesList,
});

export default reducer;
