import React, { useEffect } from 'react';
import { useSocket } from './socket/socket';
import UserList from './UserList.jsx';
import MessageList from './MessageList.jsx';
import TypingIndicator from './TypingIndicator.jsx';
import MessageInput from './MessageInput.jsx';

function Chat({ username }) {
  const {
    connect,
    disconnect,
    users,
    messages,
    sendMessage,
    setTyping,
    typingUsers,
  } = useSocket();

  useEffect(() => {
    connect(username);
    return () => disconnect();
    // eslint-disable-next-line
  }, [username]);

  return (
    <div style={{ maxWidth: 700, margin: '40px auto', padding: 20, border: '1px solid #ccc', borderRadius: 8 }}>
      <h2>Welcome, {username}!</h2>
      <div style={{ display: 'flex', gap: 20 }}>
        <UserList users={users} />
        <div style={{ flex: 1 }}>
          <MessageList messages={messages} />
          <TypingIndicator typingUsers={typingUsers} currentUser={username} />
          <MessageInput onSend={sendMessage} onTyping={setTyping} />
        </div>
      </div>
    </div>
  );
}

export default Chat; 