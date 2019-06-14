import {combineReducers} from 'redux'
import quesList from '../list/store/'


const reducer = combineReducers({
    quesList: quesList
});

export default reducer
