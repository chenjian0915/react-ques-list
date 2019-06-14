import React, {Component} from 'react';
import {connect} from 'react-redux'
import { List, Pagination } from 'antd';
import {getListData} from './store/actionCreator'
import QuesTitle from './components/quesTitle'
import HighChoice from './components/highChoice'
import HighSpeech from './components/highSpeech'
import SpeechVote from './components/speechVote'
import RedEnvelope from './components/redEnvelope'
import FlashCard from './components/flashCard'
import OneVsOne from './components/oneVsOne'
import './style/list.css'


class QuestionList extends Component {

    static itemRender(current, type, originalElement) {
        if (type === 'prev') {
            return <span className="ant-pagination-item-link free-padding">上一页</span>;
        }
        if (type === 'next') {
            return <span className="ant-pagination-item-link free-padding">下一页</span>;
        }
        return originalElement;
    }

    componentDidMount() {
        this.props.setListData()
    }

    render() {
        const activityTypeTitle = {
            'HighChoice': '在线高频选择题',
            'HighSpeech': '在线高频语音题',
            'speechVote': '在线语音投票题',
            'redEnvelope': '拼手气红包',
            'flashCard': '在线闪卡',
            'oneVsOne': '在线1v1语音题',
        };

        return (
            <div className="question-list-wrapper">
                <div className="pagination-wrapper">
                    <Pagination defaultCurrent={1} itemRender={QuestionList.itemRender} total={50} onChange={this.props.pageChange} />
                </div>
                {
                    this.props.quesList.map((item, index) => {
                        let NowComponent = null
                        switch (item.activityType) {
                            case 'HighChoice':
                                NowComponent = HighChoice;
                                break;
                            case 'HighSpeech':
                                NowComponent = HighSpeech;
                                break;
                            case 'speechVote':
                                NowComponent = SpeechVote;
                                break;
                            case 'redEnvelope':
                                NowComponent = RedEnvelope;
                                break;
                            case 'flashCard':
                                NowComponent = FlashCard;
                                break;
                            case 'oneVsOne':
                                NowComponent = OneVsOne;
                                break;
                            default:
                                break;
                        }


                        return (
                            <List
                                header={<QuesTitle itemData={item} type={activityTypeTitle[item.activityType]} />}
                                footer={<NowComponent itemData={item} />}
                                bordered
                                key={item.activityType + index}
                            />
                        );
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log('mapStateToProps', state)
    return {
        quesList: state.quesList.questionList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        pageChange: (page, pageSize) => {
            console.log(page, pageSize)
        },
        setListData: () => {
            dispatch(getListData)
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionList)
