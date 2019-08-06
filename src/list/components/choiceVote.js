import React, { Component } from 'react';

class ChoiceVote extends Component {
	renderElement() {
		const answerInfo = this.props.itemData.answerInfo[0];
		return (
			<section className="topic-item-wrapper">
				<p className="topic-questions clearfix">
					<span className="float-r answer-duration">答题时长：{answerInfo.answerDuration}s</span>
					<span className="float-r activity-count">积分：{answerInfo.integral}</span>
				</p>
				{new Array(answerInfo.option).fill(1).map((item, index) => (
					<p className="topic-answer" key={65}>{String.fromCharCode(65 + index)}、</p>
				))}
			</section>
		);
	}

	render() {
		return this.renderElement();
	}
}

export default ChoiceVote;
