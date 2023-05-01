import React, { Component } from 'react';
import { selectChannel } from '../actions/index.js'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Channel extends Component {

  render() {
    let classes = 'channels-list'
    if (this.props.channel === this.props.firstChannel && !this.props.channelFromParams) {
      classes += ' active';
    }
    else if (this.props.channel == this.props.channelFromParams) {

      classes += ' active';
    }

    return (
      <div>
        <Link to={`/${this.props.channel}`}>
          <p className={classes}>
            #{this.props.channel}
          </p>
        </Link>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
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
