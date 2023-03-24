import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createMessage } from '../actions';

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    let author = prompt("What's your username ?")
    this.props.createMessage(this.state.value, author);
    this.setState({ value: "" });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <label>
          <input type="text" value={this.state.value} onChange={this.handleChange} className="champ" />
        </label>
        <input type="submit" value="Send" className="button" />
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {

  return bindActionCreators(
    { createMessage: createMessage },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(MessageForm);
