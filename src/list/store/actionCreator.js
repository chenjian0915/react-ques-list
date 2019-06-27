import axios from 'axios'
import serverList from '../../server/serverList'
import {
    SET_LIST_DATA,
    SET_SPIN_STATUS,
    SET_VIDEO_OPTION
} from './actionType'

export const getListData = (obj) => {
    return (dispatch) => {
        axios.get(`${serverList.listUrl}mntk/v1/admin/checkpage`, {
            params: obj
        }).then((response) => {
            window.scrollTo(0, 0)
            dispatch(setListData(response.data))
            dispatch(setSpinOption(false))
        }).catch((err) => {
            console.log(err)
        })
    }
}
// 设置列表数据
export const setListData = (data) => ({
    type: SET_LIST_DATA,
    data
});

// 设置视频数据
export const setVideoOption = (data) => ({
    type: SET_VIDEO_OPTION,
    data
});

// 设置loading状态
export const setSpinOption = (data) => ({
    type: SET_SPIN_STATUS,
    data
});

