import React from 'react';

function MessageList({ messages }) {
  return (
    <div style={{ height: 300, overflowY: 'auto', border: '1px solid #eee', padding: 10, marginBottom: 10 }}>
      {messages.map((msg) => (
        <div key={msg.id} style={{ marginBottom: 8 }}>
          <strong>{msg.sender || (msg.system ? 'System' : 'Unknown')}:</strong> {msg.message}
          <span style={{ color: '#888', fontSize: 12, marginLeft: 8 }}>{new Date(msg.timestamp).toLocaleTimeString()}</span>
        </div>
      ))}
    </div>
  );
}

export default MessageList; 