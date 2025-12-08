import { useState } from "react";
import { Send } from "lucide-react";

const ChatInput = ({ onSend, disabled }) => {
  const [userMsg, setUserMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userMsg.trim() || disabled) return;

    onSend(userMsg);
    setUserMsg("");
  };

  return (
    <form className="chat-input" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ask anything..."
        value={userMsg}
        onChange={(e) => setUserMsg(e.target.value)}
        disabled={disabled}
      />
      <button type="submit" disabled={disabled || !userMsg.trim()}>
        <Send size={20} />
      </button>
    </form>
  );
};

export default ChatInput;