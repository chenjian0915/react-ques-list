import {
    SET_LIST_DATA,
    SET_SPIN_STATUS,
    SET_VIDEO_OPTION
} from './actionType';

let defaultState = {
    questionList: [],
    total: 0,
    visible: false,
    videoSrc: '',
    spinStatus: true
};

const reducer = (state = defaultState, action) => {
    console.log(action)
    switch (action.type) {
        case SET_LIST_DATA:
            return {
                ...state,
                questionList: action.data.dataList,
                total: action.data.total
            };
        case SET_VIDEO_OPTION:
            return {
                ...state,
                visible: action.data.visible,
                videoSrc: action.data.videoSrc
            };
        case SET_SPIN_STATUS:
            return {
                ...state,
                spinStatus: action.data
            };
        default:
            return state
    }
};

export default reducer
