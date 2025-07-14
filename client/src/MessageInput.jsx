import React, { useState } from 'react';

function MessageInput({ onSend, onTyping }) {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
    onTyping(e.target.value.length > 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSend(input.trim());
      setInput('');
      onTyping(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 8, marginTop: 10 }}>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Type a message..."
        style={{ flex: 1, padding: 8 }}
      />
      <button type="submit" style={{ padding: '8px 16px' }}>Send</button>
    </form>
  );
}

export default MessageInput; 