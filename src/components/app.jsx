import React from 'react';
import MessageList from '../containers/message_list';
import MessageForm from '../containers/message_form';
import ChannelsList from '../containers/channels_list';

const App = (props) => {
  return (
    <div className="container">
      <div className='first'></div>
      <div className='channels'>
        <p className="title">Reduxx Chat</p>
        <ChannelsList channelFromParams={props.match.params.channel} />
      </div>
      <div>
        <MessageList channelFromParams={props.match.params.channel} />
        <div className="form">
          <MessageForm channelFromParams={props.match.params.channel} />
        </div>
      </div>
    </div>
  );
};

export default App;
