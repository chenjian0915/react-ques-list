import React, {Component} from 'react'
import {Icon} from 'antd'

class OneVsOne extends Component {

    renderCommonElement() {
        const {commonVideo} = this.props.itemData;
        return (
            commonVideo.perfectList.map((item, index) => {
                return <p key={index}><Icon style={{fontSize: '24px', verticalAlign: 'middle', marginRight: '6px'}} type="play-circle" theme="filled" />prefect {index + 1}</p>
            })
        )

    }

    renderQuesElement() {
        const {answerInfo} = this.props.itemData;

        return answerInfo.map((item, index) => (
            <aside className="topic-questions" key={item.quesTitle}>
                <p>
                    <span className="float-r answer-duration">答题时长：{item.answerDuration}s</span>
                    <span className="float-r activity-count">积分：{item.count}</span>
                    <span className="topic-left-title">{index + 1}、{item.quesTitle}</span>
                    <img className="flashCard-topic-img" src={item.answerData.answerImg} alt=""/>
                </p>
                <p><Icon style={{fontSize: '24px', verticalAlign: 'middle', marginRight: '6px'}} type="play-circle" theme="filled" />{item.quesTitle}</p>
                <p><Icon style={{fontSize: '24px', verticalAlign: 'middle', marginRight: '6px'}} type="play-circle" theme="filled" />{item.quesTitle}-good-again</p>
                <p><Icon style={{fontSize: '24px', verticalAlign: 'middle', marginRight: '6px'}} type="play-circle" theme="filled" />{item.quesTitle}-normal-again</p>
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
                        <Icon style={{fontSize: '24px', verticalAlign: 'middle', marginRight: '6px'}} type="play-circle" theme="filled" />try again
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

export default OneVsOne;
