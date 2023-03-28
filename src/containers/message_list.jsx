import React, { Component } from 'react';
import Message from '../components/message';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setMessages } from '../actions';


class MessageList extends Component {
  constructor(props) {
    super(props);
    this.ref = null;
    this.setRef = element => {
      this.ref = element;
    };
  }

  componentWillMount() {
    let intervalId
    intervalId = setInterval(
      () => {
        this.props.setMessages(this.props.selectedChannel);
      },
      1000
    );
  }

  componentDidUpdate() {
    const node = this.myRef;

    node.scrollTop = node.scrollHeight
  }

  componentWillUnmount() {

    clearInterval(intervalMessage)
  }

  renderList() {
    return this.props.messages.map((message, i) => {
      return (
        <Message key={i} message={message} />
      );
    });
  };

  render() {
    return (
      <div className="message-list" ref={node => this.myRef = node}>
        <div className="channel-title">
          {this.props.selectedChannel ? <p>Channel #{this.props.selectedChannel}</p> : <p>Channel #general</p>}
        </div>
        {this.renderList()}
      </ div>
    );
  }
};

function mapStateToProps(state) {

  return {
    messages: state.messages,
    selectedChannel: state.selectedChannel
  };
}

function mapDispatchToProps(dispatch) {

  return bindActionCreators(
    { setMessages: setMessages },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
