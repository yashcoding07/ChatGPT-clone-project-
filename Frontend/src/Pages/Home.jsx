import { useState } from "react";
import "../styles/home.css";
import ThemeToggle from "../Components/Themetoggle";
import Sidebar from "../Components/Sidebar";
import ChatWindow from "../Components/ChatWindow";
import ChatInput from "../Components/ChatInput";
import { Menu } from "lucide-react";

const Home = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [chats, setChats] = useState([]);
  const [activeChatId, setActiveChatId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Create new chat
  const createNewChat = () => {
    const newChat = {
      id: Date.now(),
      title: "New Chat",
      messages: []
    };

    setChats(prev => [newChat, ...prev]);
    setActiveChatId(newChat.id);
    setShowSidebar(false); // Close sidebar on mobile after creating chat
  };

  // Get current active chat
  const activeChat = chats.find(chat => chat.id === activeChatId);

  // Send message to backend and get AI response
  const sendMessage = async (userMessage) => {
    // If no active chat, create one first
    if (!activeChatId) {
      const newChat = {
        id: Date.now(),
        title: userMessage.slice(0, 30) + (userMessage.length > 30 ? "..." : ""),
        messages: []
      };
      
      const userMsg = {
        id: Date.now(),
        text: userMessage,
        sender: "user",
        timestamp: new Date().toISOString()
      };
      
      newChat.messages.push(userMsg);
      setChats(prev => [newChat, ...prev]);
      setActiveChatId(newChat.id);
      
      setIsLoading(true);
      await fetchAIResponse(userMessage, newChat.id);
      return;
    }

    // Add user message to existing chat
    const userMsg = {
      id: Date.now(),
      text: userMessage,
      sender: "user",
      timestamp: new Date().toISOString()
    };

    setChats(prev =>
      prev.map(chat =>
        chat.id === activeChatId
          ? { 
              ...chat, 
              messages: [...chat.messages, userMsg],
              title: chat.messages.length === 0 
                ? userMessage.slice(0, 30) + (userMessage.length > 30 ? "..." : "") 
                : chat.title
            }
          : chat
      )
    );

    setIsLoading(true);
    await fetchAIResponse(userMessage, activeChatId);
  };

  // Fetch AI response from backend
  const fetchAIResponse = async (userMessage, chatId) => {
    try {
      // Replace with your actual backend API endpoint
      const response = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: userMessage,
          chatId: chatId
        })
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      // Add AI response
      const aiMsg = {
        id: Date.now() + 1,
        text: data.response || "Sorry, I couldn't process that.",
        sender: "ai",
        timestamp: new Date().toISOString()
      };

      setChats(prev =>
        prev.map(chat =>
          chat.id === chatId
            ? { ...chat, messages: [...chat.messages, aiMsg] }
            : chat
        )
      );
    } catch (error) {
      console.error("Error sending message:", error);
      
      // Add error message as AI response
      const errorMsg = {
        id: Date.now() + 1,
        text: "Sorry, there was an error connecting to the server. Please try again later.",
        sender: "ai",
        timestamp: new Date().toISOString()
      };

      setChats(prev =>
        prev.map(chat =>
          chat.id === chatId
            ? { ...chat, messages: [...chat.messages, errorMsg] }
            : chat
        )
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="home-container">
      <ThemeToggle />

      {!showSidebar && (
        <button className="menu-btn" onClick={() => setShowSidebar(true)}>
          <Menu size={22} />
        </button>
      )}

      <Sidebar
        open={showSidebar}
        closeSidebar={() => setShowSidebar(false)}
        chats={chats}
        activeChatId={activeChatId}
        setActiveChatId={setActiveChatId}
        createNewChat={createNewChat}
      />

      <main className="chat-area">
        <ChatWindow 
          messages={activeChat?.messages || []} 
          isLoading={isLoading}
        />
        <ChatInput 
          onSend={sendMessage} 
          disabled={isLoading}
        />
      </main>
    </div>
  );
};

export default Home;