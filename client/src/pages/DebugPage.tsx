import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const DebugPage: React.FC = () => {
  const auth = useAuth();

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Debug Auth Information</h1>
      
      <div style={{ background: '#f5f5f5', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
        <h3>Auth State:</h3>
        <pre>{JSON.stringify({
          isAuthenticated: auth.isAuthenticated,
          isLoading: auth.isLoading,
          hasUser: !!auth.user,
          hasToken: !!auth.token,
          tokenFromLS: !!localStorage.getItem('token')
        }, null, 2)}</pre>
      </div>

      {auth.user && (
        <div style={{ background: '#e8f5e8', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
          <h3>User Data:</h3>
          <pre>{JSON.stringify(auth.user, null, 2)}</pre>
        </div>
      )}

      <div style={{ background: '#fff3cd', padding: '1rem', borderRadius: '8px' }}>
        <h3>Actions:</h3>
        <button 
          onClick={() => {
            console.log('Current localStorage token:', localStorage.getItem('token'));
          }}
          style={{ margin: '0.5rem', padding: '0.5rem 1rem' }}
        >
          Log Token
        </button>
        
        <button 
          onClick={() => {
            localStorage.removeItem('token');
            window.location.reload();
          }}
          style={{ margin: '0.5rem', padding: '0.5rem 1rem', background: '#dc3545', color: 'white', border: 'none', borderRadius: '4px' }}
        >
          Clear Token & Reload
        </button>
      </div>
    </div>
  );
};

export default DebugPage;
