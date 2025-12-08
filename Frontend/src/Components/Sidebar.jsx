import { X, Plus } from "lucide-react";

const Sidebar = ({
  open,
  closeSidebar,
  chats,
  activeChatId,
  setActiveChatId,
  createNewChat
}) => {
  const handleChatClick = (chatId) => {
    setActiveChatId(chatId);
    closeSidebar(); // Close sidebar on mobile after selecting chat
  };

  return (
    <aside className={`sidebar ${open ? "open" : ""}`}>
      <button className="close-btn" onClick={closeSidebar}>
        <X size={20} />
      </button>

      <h2 className="sidebar-title">Chats</h2>

      <button className="new-chat-btn" onClick={createNewChat}>
        <Plus size={18} /> New Chat
      </button>

      <ul className="chat-list">
        {chats.map(chat => (
          <li
            key={chat.id}
            className={`chat-item ${
              chat.id === activeChatId ? "active" : ""
            }`}
            onClick={() => handleChatClick(chat.id)}
          >
            {chat.title}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;