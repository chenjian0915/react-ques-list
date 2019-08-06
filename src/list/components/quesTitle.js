import React, { Component } from 'react';
import '../style/list.css';

class QuesTitle extends Component {
	render() {
		return (
			<div className="question-title">
				<span className="activity-duration">互动时长：{this.props.itemData.activityDuration}s</span>
				<span className="course-page-index">课件第{this.props.itemData.pageIndex}页</span>
				<span className="question-index">第{this.props.itemData.quesIndex}题</span>
				<span className="question-type">{this.props.type}</span>
			</div>
		);
	}
}

export default QuesTitle;
