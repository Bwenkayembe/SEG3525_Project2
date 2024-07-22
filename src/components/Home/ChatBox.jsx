import React, { useState } from 'react';
import './ChatBox.css';
import ChatImage from '/images/chatbubble.png'; // Adjust the path to your image

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [userMessage, setUserMessage] = useState('');

  const responses = {
    Hello: "Hello, my name is Chatty, the chat chat.",
    Student: "This website was coded by Bwen Kayembe Entus, an excellent student who strives to achieve greatness in life.",
    Congo: "This is a website to spread awareness about the current ongoing situation happening in the Democratic Republic of the Congo.",
    Tell_Me_a_Joke: "Knock, knock. Who's there? Congo. Congo who? Congo and tell me a joke!",
    Skibbidi: "Skibbidi wap pap pap, skibbidi wap pap pap toilet!"
  };

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    const lowerCaseMessage = userMessage.toLowerCase();
    let botResponse = "I'm sorry, I didn't understand that.";

    if (lowerCaseMessage.includes('hello')) {
      botResponse = responses.hello;
    } else if (lowerCaseMessage.includes('student')) {
      botResponse = responses.student;
    } else if (lowerCaseMessage.includes('congo')) {
      botResponse = responses.congo;
    }

    setMessages([...messages, { text: userMessage, sender: 'user' }, { text: botResponse, sender: 'bot' }]);
    setUserMessage('');
  };

  return (
    <div className="chat-box">
      <button className="chat-toggle" onClick={() => setIsOpen(!isOpen)}>
        <img src={ChatImage} alt="Chat" className="chat-icon" />
      </button>
      {isOpen && (
        <div className="chat-content">
          <div className="messages">
            {messages.map((msg, index) => (
              <div key={index} className={`chat-message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <form onSubmit={handleMessageSubmit} className="chat-form">
            <input
              type="text"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              placeholder="Type your message..."
              required
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatBox;
