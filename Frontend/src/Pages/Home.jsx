import { useState } from "react";
import "../styles/home.css";
import ThemeToggle from "../Components/Themetoggle";
import Sidebar from "../Components/Sidebar";
import SidebarToggle from "../Components/Sidebartoggle";
import { Menu } from "lucide-react";
import ChatWindow from "../Components/ChatWindow";
import ChatInput from "../Components/ChatInput";
import axios from "axios";

const Home = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userMsg, setUserMsg] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendMessage(e) {
    e.preventDefault();
    if (!userMsg.trim()) return;

    const userMessage = { sender: "user", text: userMsg };
    setMessages((prev) => [...prev, userMessage]);
    setUserMsg("");
    setLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:3000/api/ai/chat",
        { message: userMsg },
        { withCredentials: true }
      );

      const botMessage = { sender: "ai", text: res.data.reply };
      setMessages((prev) => [...prev, botMessage]);
    } catch {
      setMessages((prev) => [...prev, { sender: "ai", text: "Error fetching response" }]);
    }

    setLoading(false);
  }

  return (
    <div className="home-container">
      <ThemeToggle />

      {/* MENU BUTTON (only when sidebar is closed) */}
      {!showSidebar && (
        <button
          className="menu-btn"
          onClick={() => setShowSidebar(true)}
        >
          <Menu size={22} />
        </button>
      )}

      <Sidebar open={showSidebar} closeSidebar={() => setShowSidebar(false)} />

      <main className="chat-area">
        <ChatWindow messages={messages} loading={loading} />
        <ChatInput userMsg={userMsg} setUserMsg={setUserMsg} sendMessage={sendMessage} />
      </main>
    </div>
  );
};

export default Home;
