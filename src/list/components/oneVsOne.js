import React, {Component} from 'react';
import {connect} from "react-redux";
import {Icon} from 'antd';
import {setVideoOption} from '../store/actionCreator'

class OneVsOne extends Component {

    renderCommonElement() {
        const {commonVideo} = this.props.itemData;
        return (
            commonVideo.perfectList.map((item, index) => {
                return <p key={index}><Icon onClick={this.props.setVideoOption} data-src={item} style={{fontSize: '24px', verticalAlign: 'middle', marginRight: '6px'}} type="play-circle" theme="filled" />prefect {index + 1} {!item ? <span className="no-video">无视频</span>:''}</p>
            })
        )
    }

    renderQuesElement() {
        const {answerInfo} = this.props.itemData;

        return answerInfo.map((item, index) => (
            <aside className="topic-questions" key={item.quesTitle + index}>
                <p>
                    <span className="float-r answer-duration">答题时长：{item.answerDuration}s</span>
                    <span className="float-r activity-count">积分：{item.integral}</span>
                    <span className="topic-left-title">{index + 1}、{item.quesTitle}</span>
                    <img className="flashCard-topic-img" src={item.answerData.answerImg} alt="无图片"/>
                </p>
                <p><Icon onClick={this.props.setVideoOption} data-src={item.answerData.follow} style={{fontSize: '24px', verticalAlign: 'middle', marginRight: '6px'}} type="play-circle" theme="filled" />{item.quesTitle}{!item.answerData.follow ? <span className="no-video">无视频</span>:''}</p>
                <p><Icon onClick={this.props.setVideoOption} data-src={item.answerData.good} style={{fontSize: '24px', verticalAlign: 'middle', marginRight: '6px'}} type="play-circle" theme="filled" />{item.quesTitle}-good-again{!item.answerData.good ? <span className="no-video">无视频</span>:''}</p>
                <p><Icon onClick={this.props.setVideoOption} data-src={item.answerData.normal}  style={{fontSize: '24px', verticalAlign: 'middle', marginRight: '6px'}} type="play-circle" theme="filled" />{item.quesTitle}-normal-again{!item.answerData.normal ? <span className="no-video">无视频</span>:''}</p>
            </aside>
        ))
    }


    render() {
        return (
            <section className="topic-item-wrapper oneVsOne-wrapper clearfix">
                <div className="common-video">
                    <p>
                        通用视频
                    </p>
                    <p>
                        <Icon data-src={this.props.itemData.commonVideo.tryAgain} onClick={this.props.setVideoOption} style={{fontSize: '24px', verticalAlign: 'middle', marginRight: '6px'}} type="play-circle" theme="filled" />try again
                    </p>
                    {this.renderCommonElement()}
                </div>
                <div>
                    {this.renderQuesElement()}
                </div>

            </section>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setVideoOption: (e) => {
            console.log(e)
            dispatch(setVideoOption({
                visible: true,
                videoSrc: e.currentTarget.getAttribute('data-src')
            }))
        }
    }
};

export default connect(null, mapDispatchToProps)(OneVsOne);
