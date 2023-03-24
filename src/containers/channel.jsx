import React, { Component } from 'react';
import { selectChannel } from '../actions/index.js'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class Channel extends Component {
  handleClick = () => {

    this.props.selectChannel(this.props.channel);
  }
  render() {
    let classes = 'channels-list'
    if (this.props.channel === this.props.firstChannel && !this.props.selectedChannel) {
      classes += ' active';
    }
    else if (this.props.channel == this.props.selectedChannel) {

      classes += ' active';
    }


    return (
      <div>
        <p className={classes} onClick={this.handleClick}>#{this.props.channel}</p>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    selectedChannel: state.selectedChannel,
    firstChannel: state.channels[0]
  };
}

function mapDispatchToProps(dispatch) {

  return bindActionCreators(
    { selectChannel: selectChannel },
    dispatch
  );


}

export default connect(mapStateToProps, mapDispatchToProps)(Channel)
