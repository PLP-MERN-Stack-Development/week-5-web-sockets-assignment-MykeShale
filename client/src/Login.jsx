import React, { useState } from 'react';

function Login({ onLogin }) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);
    try {
      const endpoint = isRegister
        ? 'http://localhost:5000/api/register'
        : 'http://localhost:5000/api/login';
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: name, password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Something went wrong');
      } else {
        if (isRegister) {
          setSuccess('Registration successful! You can now log in.');
          setIsRegister(false);
        } else {
          onLogin(name);
        }
      }
    } catch (err) {
      setError('Network error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 300, margin: '100px auto', padding: 20, border: '1px solid #ccc', borderRadius: 8 }}>
      <h2>{isRegister ? 'Register' : 'Login'} to Chat</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your username"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ width: '100%', padding: 8, marginBottom: 10 }}
          autoComplete="username"
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: '100%', padding: 8, marginBottom: 10 }}
          autoComplete={isRegister ? 'new-password' : 'current-password'}
        />
        <button type="submit" style={{ width: '100%', padding: 8 }} disabled={loading}>
          {loading ? 'Please wait...' : isRegister ? 'Register' : 'Login'}
        </button>
      </form>
      <div style={{ marginTop: 10, color: 'red', minHeight: 20 }}>{error}</div>
      <div style={{ marginTop: 10, color: 'green', minHeight: 20 }}>{success}</div>
      <div style={{ marginTop: 10 }}>
        {isRegister ? (
          <span>
            Already have an account?{' '}
            <button type="button" onClick={() => { setIsRegister(false); setError(''); setSuccess(''); }} style={{ color: 'blue', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>
              Login
            </button>
          </span>
        ) : (
          <span>
            Don&apos;t have an account?{' '}
            <button type="button" onClick={() => { setIsRegister(true); setError(''); setSuccess(''); }} style={{ color: 'blue', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>
              Register
            </button>
          </span>
        )}
      </div>
    </div>
  );
}

export default Login; 