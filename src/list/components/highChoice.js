import React, {Component} from 'react'

class HighChoice extends Component {
    //
    renderElement() {
        const {answerInfo} = this.props.itemData;
        return (
            <section className="topic-item-wrapper">
                <p className="topic-questions clearfix">
                    <span className="float-r answer-duration">答题时长：{answerInfo.answerDuration}s</span>
                    <span className="float-r activity-count">积分：{answerInfo.count}</span>
                    <span className="topic-left-title">{answerInfo.quesTitle}</span>
                </p>
                {answerInfo.answerList.map((item, index) => (
                    <p className="topic-answer" key={index}>{String.fromCharCode(65 + index)}、{item}</p>
                ))}
            </section>
        )

    }

    render() {
        return this.renderElement()
    }
}

export default HighChoice;