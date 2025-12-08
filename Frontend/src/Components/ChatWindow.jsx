const ChatWindow = ({ messages = [], isLoading = false }) => {
  return (
    <div className="chat-messages">
      {messages.length === 0 && !isLoading ? (
        <div className="empty-chat">
          <h2>ChatGPT Clone</h2>
          <p>Start a conversation by typing a message below</p>
        </div>
      ) : (
        <>
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`bubble ${msg.sender === "user" ? "user" : "ai"}`}
            >
              {msg.text}
            </div>
          ))}
          {isLoading && (
            <div className="bubble ai loading">
              <span></span>
              <span></span>
              <span></span>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ChatWindow;
