import { X } from "lucide-react";

const Sidebar = ({ open, closeSidebar }) => {
  return (
    <aside className={`sidebar ${open ? "open" : ""}`}>
      {/* Close Button appears inside sidebar */}
      <button className="close-btn" onClick={closeSidebar}>
        <X size={20} />
      </button>

      <h2 className="sidebar-title">Chats</h2>

      <ul className="chat-list">
        <li className="chat-item">New Chat +</li>
        <li className="chat-item">Chat 1</li>
        <li className="chat-item">Chat 2</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
