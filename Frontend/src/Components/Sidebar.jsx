<<<<<<< HEAD
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
=======
import { X } from "lucide-react";

const Sidebar = ({ open, closeSidebar }) => {
  return (
    <aside className={`sidebar ${open ? "open" : ""}`}>
      {/* Close Button appears inside sidebar */}
>>>>>>> c1977282dd8c05fbc1d350b1c3fadfc814323851
      <button className="close-btn" onClick={closeSidebar}>
        <X size={20} />
      </button>

      <h2 className="sidebar-title">Chats</h2>

<<<<<<< HEAD
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
=======
      <ul className="chat-list">
        <li className="chat-item">New Chat +</li>
        <li className="chat-item">Chat 1</li>
        <li className="chat-item">Chat 2</li>
>>>>>>> c1977282dd8c05fbc1d350b1c3fadfc814323851
      </ul>
    </aside>
  );
};

<<<<<<< HEAD
export default Sidebar;
=======
export default Sidebar;
>>>>>>> c1977282dd8c05fbc1d350b1c3fadfc814323851
