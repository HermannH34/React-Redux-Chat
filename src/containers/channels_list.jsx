import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setChannels } from '../actions';

class ChannelsList extends Component {
  componentWillMount() {
    this.props.setChannels();
  }

  render() {

    return (
      <div>
        {this.props.channels.map((channel, index) => {
          if (index === 0) {
            return <p className='active'>#{channel}</p>;
          } else {
            return <p className='channels-list'>#{channel}</p>;
          }
        })}
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    channels: state.channels
  };
}

function mapDispatchToProps(dispatch) {

  return bindActionCreators(
    { setChannels: setChannels },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelsList);
