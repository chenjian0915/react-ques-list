let defaulstState = {
    questionList: []
};

const reducer = (state = defaulstState, action) => {
    console.log(action)
    switch (action.type) {
        case "SET_LIST_DATA":
            let newState = {
                ...state,
                questionList: action.data
            };
            return newState;
        default:
            return state
    }
};

export default reducer
