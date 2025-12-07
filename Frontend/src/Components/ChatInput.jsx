const ChatInput = ({ userMsg, setUserMsg, sendMessage }) => {
  return (
    <form className="chat-input" onSubmit={sendMessage}>
      <input
        type="text"
        placeholder="Send a message..."
        value={userMsg}
        onChange={(e) => setUserMsg(e.target.value)}
      />
      <button type="submit">➤</button>
    </form>
  );
};

export default ChatInput;
