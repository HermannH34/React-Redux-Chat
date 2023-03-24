import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setChannels } from '../actions';
import Channel from '../containers/channel'

class ChannelsList extends Component {

  componentWillMount() {
    this.props.setChannels();
  }

  render() {

    return (
      <div>
        {this.props.channels.map((channel, i) => {
          return <Channel key={i} channel={channel} />
        })}
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    channels: state.channels,
    selectedChannel: state.selectedChannel
  };
}

import { selectChannel } from '../actions'

function mapDispatchToProps(dispatch) {

  return bindActionCreators(
    { setChannels: setChannels, selectChannel: selectChannel },
    dispatch
  );


}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelsList);
