import React, {Component} from 'react'

class HighSpeech extends Component {
    renderElement() {
        const answerInfo = this.props.itemData.answerInfo[0];
        return (
            <section className="topic-item-wrapper">
                <p className="topic-questions clearfix">
                    <span className="float-r answer-duration">答题时长：{answerInfo.answerDuration}s</span>
                    <span className="float-r activity-count">积分：{answerInfo.integral}</span>
                    <span className="topic-left-title">{answerInfo.quesTitle}</span>
                </p>
                <p className="topic-answer">{answerInfo.answerList[0]}</p>
            </section>
        )
    }
    render() {
        return this.renderElement()
    }
}

export default HighSpeech;
