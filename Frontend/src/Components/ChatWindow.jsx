const ChatWindow = ({ messages, loading }) => {
  return (
    <div className="chat-messages">
    
      {messages.map((msg, i) => (
        <div key={i} className={`bubble ${msg.sender === "user" ? "user" : "ai"}`}>
          {msg.text}
        </div>
      ))}

      {loading && <div className="bubble ai">Thinking...</div>}
    </div>
  );
};

export default ChatWindow;
