import React from 'react';

function UserList({ users }) {
  return (
    <div style={{ minWidth: 150 }}>
      <h4>Online Users</h4>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList; 