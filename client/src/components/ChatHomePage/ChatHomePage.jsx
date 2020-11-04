import React from "react";
import "./ChatHomePage.css";

function ChatHomePage(props) {
  return (
    <>
      <div className="chat-container">
        <p className="paragraph">
          Want to cut through the noise and just talk to someone who can help?
        </p>
        <p className="all-caps">WE GET IT!</p>
        <p className="paragraph-chitChat">
          Chit-chat with one of our experts at any time.
        </p>
        <p className="paragraph-conversation">
          Have a conversation, ask questions, get help- we are here for YOU.
        </p>
        <button className="chat-button" disabled>
          Chat with our Experts
        </button>
      </div>
    </>
  );
}

export default ChatHomePage;
