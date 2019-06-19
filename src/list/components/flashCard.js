import React, {Component} from 'react'

class FlashCard extends Component {
    renderElement() {
        const {answerInfo} = this.props.itemData;
        return answerInfo.map((item, index) => (
                    <p className="topic-questions clearfix" key={item.quesTitle + '-' + index}>
                        <span className="float-r answer-duration">答题时长：{item.answerDuration}s</span>
                        <span className="float-r activity-count">积分：固定预设值</span>
                        <span className="topic-left-title">{index + 1}、{item.quesTitle}</span>
                        <img className="flashCard-topic-img" src={item.answerList[0]} alt=""/>
                    </p>
                ))
    }
    render() {
        return (<section className="topic-item-wrapper flashCard-wrapper">{this.renderElement()}</section>)
    }
}

export default FlashCard;
