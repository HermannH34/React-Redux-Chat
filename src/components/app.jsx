import React from 'react';
import MessageList from '../containers/message_list';
import MessageForm from '../containers/message_form';

const App = () => {
  return (
    <div className="messaging-wrapper">

      <MessageList />
      <div className="form">
        <MessageForm />
      </div>
    </div>
  );
};

export default App;
