import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'antd';
import { setVideoOption } from '../store/actionCreator';

class VideoModal extends Component {
	shouldComponentUpdate(nextProps) {
		console.log(nextProps);
		return true;
	}

	render() {
		return (
			<div>
				<Modal
					title="查看视频"
					visible={this.props.visible}
					onCancel={this.props.closeModal}
					centered
					footer={null}
					className="video-model"
				>
					{/* eslint-disable-next-line jsx-a11y/media-has-caption */}
					<video src={this.props.videoSrc} controls="controls" autoPlay className="videoPlayer">
						<track kind="subtitles" src="subs_eng.srt" srcLang="en" label="English" />
					</video>
				</Modal>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	visible: state.quesList.visible,
	videoSrc: state.quesList.videoSrc,
});

const mapDispatchToProps = dispatch => ({
	closeModal: () => {
		dispatch(setVideoOption({
			visible: false,
			videoSrc: '',
		}));
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoModal);
