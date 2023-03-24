import React, { Component } from 'react';

class Message extends Component {
  render() {
    let time = new Date(this.props.message.created_at)
    let hours = time.getUTCHours()
    let minutes = time.getUTCMinutes()
    let seconds = time.getUTCSeconds()

    function formatTime(timevalue) {
      return timevalue < 10 ? "0" + timevalue : timevalue
    }

    return (
      <div>
        <p className='author'>{this.props.message.author} <span className="time">- {formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)}</span></p>
        <p className='content'>{this.props.message.content}</p>
      </div>
    );
  }
};

export default Message;
