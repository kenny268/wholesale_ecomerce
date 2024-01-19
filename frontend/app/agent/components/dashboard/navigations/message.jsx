// Message.js
import React from 'react';

const Message = ({ sender, content }) => {
  return (
    <div>
      <strong>{sender}:</strong> 
      <p>{content}</p>
    </div>
  );
};

export default Message;
