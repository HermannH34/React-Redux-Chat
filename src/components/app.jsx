import React from 'react';
import MessageList from '../containers/message_list';
import MessageForm from '../containers/message_form';
import ChannelsList from '../containers/channels_list';

const App = () => {
  return (
    <div className="container">
      <div className='channels'>
        <p className="title">Redux Chat</p>
        <ChannelsList />
      </div>
      <div>
        <MessageList />
        <div className="form">
          <MessageForm />
        </div>
      </div>
    </div>
  );
};

export default App;
