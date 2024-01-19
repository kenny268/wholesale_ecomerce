// MessagePage.js

import React, { useState } from 'react';
import Message from './message';

const MessagePage = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'User1', content: 'Hello! how are you doing it is a pleasure to meet you , i am a bot' },
    { id: 2, sender: 'User2', content: 'Hi there!' },
    { id: 3, sender: 'User1', content: 'How are you?' },
    { id: 4, sender: 'User2', content: 'I am fine, thanks!' },
    { id: 5, sender: 'User1', content: 'Good to hear that!' },
    { id: 6, sender: 'User2', content: 'How can I help you?' },
    { id: 7, sender: 'User1', content: 'I need help with my order' },
    { id: 8, sender: 'User2', content: 'Sure, what is your order number?' },
    { id: 9, sender: 'User1', content: 'My order number is 123456' },
    { id: 10, sender: 'User2', content: 'Thanks, let me check that for you' },
    { id: 11, sender: 'User2', content: 'Your order is on the way' },
    { id: 12, sender: 'User1', content: 'Great, thanks!' },
    { id: 13, sender: 'User2', content: 'You are welcome!' },
    { id: 14, sender: 'User1', content: 'Bye!' },
    { id: 15, sender: 'User2', content: 'Bye!' },
    { id: 16, sender: 'User1', content: 'Bye!' },
    { id: 17, sender: 'User2', content: 'Hello ' },
    { id: 18, sender: 'User1', content: 'Hello I got a problem with order' },
    { id: 19, sender: 'User2', content: 'What is your order number?' },
    { id: 20, sender: 'User1', content: 'My order number is 123456' },
    { id: 21, sender: 'User2', content: 'Thanks, let me check that for you' },
    { id: 22, sender: 'User2', content: 'Your order is on the way' },
    { id: 23, sender: 'User1', content: 'Great, thanks!' },
    { id: 24, sender: 'User2', content: 'You are welcome!' },
    { id: 25, sender: 'User1', content: 'Bye!' },

    // Add more messages as needed
  ]);

  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      // Add the new message to the messages array
      const newMessageObject = {
        id: messages.length + 1,
        sender: 'CurrentUser', // You may want to get the actual user from authentication
        content: newMessage.trim(),
      };

      setMessages((prevMessages) => [...prevMessages, newMessageObject]);

      // Clear the textarea after sending the message
      setNewMessage('');
    }
  };

  return (
    <div>
      <h2>Message Page</h2>
      <div style={{ maxHeight: '300px', overflowY: 'scroll' }}>
        {messages.map((message) => (
          <Message key={message.id} sender={message.sender} content={message.content} />
        ))}
      </div>
      {/* Add a form for sending new messages */}
      <div>
        <textarea
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default MessagePage;
