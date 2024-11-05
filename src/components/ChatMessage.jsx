import React from "react";
import Markdown from "react-markdown";

export default function ChatMessage({
  message,
  query,
  isLoading,
  lastArray,
  currentQuery,
}) {
  return (
    <div className="chat-message-cstm">
      {/* User Question */}
      <div className="d-flex justify-content-end">
        <div className="p-3 border shadow-sm bg-primary-subtle text-end rounded-user-cstm mb-3">
          <i className="bi bi-person-circle me-2"></i>
          <strong>Question:</strong>
          <div className="mt-2">{query}</div>
        </div>
      </div>

      {/* AI Response */}
      <div className="d-flex justify-content-start">
        <div className="p-3 border shadow-sm bg-primary-subtle rounded-ai-cstm">
          <i className="bi bi-robot me-2"></i>
          <strong>Answer:</strong>
          <div className="mt-2">
            <Markdown className="markdown">{message}</Markdown>
          </div>
        </div>
      </div>

      {/* AI Loading Animation */}
      {isLoading && lastArray && (
        <>
          <div className="d-flex justify-content-end mt-3">
            <div className="p-3 border shadow-sm bg-primary-subtle text-end rounded-user-cstm mb-3 bumble-animation">
              <i className="bi bi-person-circle me-2"></i>
              <strong>Question:</strong>
              <div className="mt-2">{currentQuery}</div>
            </div>
          </div>

          <div className="d-flex justify-content-start">
            <div className="p-3 border shadow-sm bg-primary-subtle rounded-ai-cstm bumble-animation">
              <i className="bi bi-robot me-2"></i>
              <strong>Answer:</strong>
              <div className="loading-animation mt-2">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
