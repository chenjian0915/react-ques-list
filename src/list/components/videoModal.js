import React, {Component} from 'react';
import {connect} from "react-redux";
import {Modal} from 'antd'
import {setVideoOption} from "../store/actionCreator";

class VideoModal extends Component {

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log(nextProps)
        return true;
    }

    render() {
        return (
            <div>
                <Modal
                    title="Basic Modal"
                    visible={this.props.visible}
                    onCancel={this.props.closeModal}
                    centered={true}
                    footer={null}
                >
                    <video src={this.props.videoSrc}  controls="controls" autoPlay={true} className="videoPlayer"></video>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        visible: state.quesList.visible,
        videoSrc: state.quesList.videoSrc,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        closeModal: (e) => {
            dispatch(setVideoOption({
                visible: false,
                videoSrc: ''
            }))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoModal)
