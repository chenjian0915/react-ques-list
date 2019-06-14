import axios from 'axios'
export const getListData = (dispatch) => {
    axios.get('http://localhost:3000/api/quesList.json').then((response) => {
        dispatch(setListData(response.data.data))
    }).catch((err) => {
        console.log(err)
    })
}

export const setListData = (data) => ({
    type: 'SET_LIST_DATA',
    data
});
