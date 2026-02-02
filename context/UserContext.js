'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Check if user is logged in (client-side only for now request to /api/auth/me)
  const checkUser = async () => {
    try {
      const res = await fetch('/api/auth/me');
      if (res.ok) {
        const data = await res.json();
        setUser(data.user);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error('Error checking auth:', error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  const login = (userData) => {
    setUser(userData);
    router.push('/');
  };

  const logout = async () => {
    try {
       await fetch('/api/auth/logout', { method: 'POST' });
       setUser(null);
       router.push('/login');
    } catch (error) {
       console.error('Logout failed', error);
    }
  };

  return (
    <UserContext.Provider value={{ user, loading, login, logout, checkUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
