import React, {Component} from 'react';
import {connect} from 'react-redux'
import { List, Pagination, Empty, Spin, BackTop } from 'antd';
import {getListData, setSpinOption} from './store/actionCreator'
import QuesTitle from './components/quesTitle'
import HighChoice from './components/highChoice'
import ChoiceVote from './components/choiceVote'
import HighSpeech from './components/highSpeech'
import SpeechVote from './components/speechVote'
import RedEnvelope from './components/redEnvelope'
import FlashCard from './components/flashCard'
import OneVsOne from './components/oneVsOne'
import VideoModal from './components/videoModal'
import './style/list.css'

class QuestionList extends Component {
    constructor(props) {
        super(props);
        let {chapterStartTime, courseId} = this.props.match.params;
        let productId = this.props.match.params.chapterId;
        this.state = {
            currentPage: 0,
            chapterStartTime,
            courseId,
            productId
        }
        this.pageChange = this.pageChange.bind(this)
    }

    static itemRender(current, type, originalElement) {
        if (type === 'prev') {
            return <span className="ant-pagination-item-link free-padding">上一页</span>;
        }
        if (type === 'next') {
            return <span className="ant-pagination-item-link free-padding">下一页</span>;
        }
        return originalElement;
    }

    renderList() {
        const activityTypeTitle = {
            101: '在线高频选择题',
            102: '在线高频语音题',
            105: '在线语音投票题',
            4: '拼手气红包',
            104: '在线闪卡',
            103: '在线1v1语音题',
            106: '在线选择投票题',
        };
        const activityTypeElement = {
            101: HighChoice,
            102: HighSpeech,
            105: SpeechVote,
            4: RedEnvelope,
            104: FlashCard,
            103: OneVsOne,
            106: ChoiceVote
        };

        if (this.props.quesList.length === 0) return <Empty description="该课程暂未传题" />
        return this.props.quesList.map((item, index) => {
            let NowComponent = activityTypeElement[item.activityType]

            return (
                <List
                    header={<QuesTitle itemData={item} type={activityTypeTitle[item.activityType]} />}
                    footer={<NowComponent itemData={item} />}
                    bordered
                    key={item.pageIndex + '-' + item.quesIndex}
                />
            );
        })
    }

    pageChange (page) {
        this.setState({
            currentPage: page - 1
        }, () => {
            this.props.setListData(this.state)
        });
    }

    componentDidMount() {
        this.props.setListData(this.state)
    }

    render() {
        return (
            <div className="question-list-wrapper">
                <Spin spinning={this.props.spinStatus} delay={500}>
                <div className="pagination-wrapper">
                    <Pagination defaultCurrent={1} itemRender={QuestionList.itemRender} pageSize={20} total={this.props.total} onChange={this.pageChange} />
                </div>
                <div className="render-list-wrapper">
                    {this.renderList()}
                </div>

                <VideoModal />
                <div>{this.props.spinStatus}</div>
                </Spin>
                <BackTop />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        quesList: state.quesList.questionList,
        total: state.quesList.total,
        spinStatus: state.quesList.spinStatus,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        setListData: (state) => {
            dispatch(setSpinOption(true));
            dispatch(getListData({
                product: state.productId,
                courseId: state.courseId,
                chapterStartTime: state.chapterStartTime,
                dataVersion: '1.0.0.0',
                pageNo: state.currentPage,
            }))
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionList)
