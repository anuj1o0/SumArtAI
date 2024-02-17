import React, { useState, useRef, useEffect } from 'react';
import './Chatbot.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const messagesRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom of the messages when new messages are added
    messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
  }, [messages]);

  const handleSendMessage = async () => {
    const userMessage = inputValue.trim();

    if (userMessage) {
      // Add user message to chat
      setMessages([...messages, { text: `User: ${userMessage}`, sender: 'user' }]);

      try {
        // Simulate API call (replace with your actual API endpoint)
        const response = await fetch('http://192.168.85.110:8000/api/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message: userMessage }), // Change the payload format
        });

        if (!response.ok) {
          throw new Error('Failed to get response from the chatbot API');
        }

        // Assuming the API responds with JSON containing the bot's response
        const data = await response.json();

        // Display bot's response
        setMessages([...messages, { text: `Bot: ${data.response}`, sender: 'bot' }]);
      } catch (error) {
        console.error('Error fetching data from the chatbot API:', error.message);
        // Optionally, you can handle errors and display an error message to the user
      }

      setInputValue('');
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">
        <h3>ChatBot</h3>
      </div>
      <div className="chatbot-messages" ref={messagesRef}>
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="chatbot-input">
        <input
          className='chatbot-input-in'
          type="text"
          placeholder="Type your message..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className='chatbot-but' onClick={handleSendMessage}>
          <FontAwesomeIcon icon={faPaperPlane} style={{ height: "20px" }} />
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
