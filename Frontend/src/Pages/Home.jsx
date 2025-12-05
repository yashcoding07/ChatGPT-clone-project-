import React from "react";
import "../Styles/home.css"

const Home = () => {
  return (
    <div className="home-page">
      <header className="top-bar">
        <h2>ChatGPT Clone</h2>
      </header>

      <div className="chat-container">
        <div className="messages">
          {/* Placeholder messages */}
          <div className="message user-msg">Hello, ChatGPT!</div>
          <div className="message bot-msg">
            Hi! How can I assist you today?
          </div>
        </div>

        <div className="input-area">
          <input
            type="text"
            className="chat-input"
            placeholder="Type your message..."
          />
          <button className="send-btn">Send</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
