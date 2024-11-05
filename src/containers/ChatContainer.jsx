import React, { useEffect, useState, useRef } from "react";
import ChatInput from "../components/ChatInput";
import ChatMessage from "../components/ChatMessage";
import Navbar from "../components/Navbar";
import Load from "../components/Load";
import { queryAI, logout } from "../utils/api";

const ChatContainer = (props) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");

  const endOfMessagesRef = useRef(null);

  const scrollToBottom = () => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleQuery = (e) => {
    e.preventDefault();
    scrollToBottom();
    setLoading(true);
    setError(null);
    queryAI({ query }, props.token)
      .then((res) => {
        setMessages([...messages, { query, data: res }]);
        setQuery("");
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleLogout = () => {
    setLoading(true);
    logout(props.token)
      .then(() => {
        props.setToken(null);
        localStorage.removeItem("token");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <Navbar logout={handleLogout} loading={loading} />
      <div className="container">
        {loading && messages.length === 0 ? (
          <Load />
        ) : (
          messages.map((message, index) => (
            <ChatMessage
              key={index}
              message={message.data.data}
              query={message.query}
              isLoading={loading}
              lastArray={index === messages.length - 1}
              currentQuery={query}
            />
          ))
        )}
        {/* Elemen referensi untuk scroll otomatis */}
        <div ref={endOfMessagesRef} />
      </div>
      <ChatInput
        onSubmit={handleQuery}
        onChange={handleChange}
        loading={loading}
        query={query}
      />
    </div>
  );
};

export default ChatContainer;
