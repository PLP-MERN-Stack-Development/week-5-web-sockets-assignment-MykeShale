import React from 'react';

function TypingIndicator({ typingUsers, currentUser }) {
  const othersTyping = typingUsers.filter((u) => u !== currentUser);
  if (othersTyping.length === 0) return null;
  return (
    <div style={{ minHeight: 20, color: '#888', fontStyle: 'italic' }}>
      <span>{othersTyping.join(', ')} {othersTyping.length === 1 ? 'is' : 'are'} typing...</span>
    </div>
  );
}

export default TypingIndicator; 