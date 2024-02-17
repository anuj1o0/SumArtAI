// ChatbotEmbed.js

import React, { useState } from 'react';
import Chatbot from './Chatbot';

const ChatbotEmbed = () => {
  const [chatbotVisible, setChatbotVisible] = useState(false);

  return (
    <div className="chatbot-embed">
      <button style={{height: "45px",width: "200px", margin:"10px"}} onClick={() => setChatbotVisible(!chatbotVisible)}>Toggle Chatbot</button>
      {chatbotVisible && (
        <div className="chatbot-overlay">
          <Chatbot />
        </div>
      )}
    </div>
  );
};

export default ChatbotEmbed;
