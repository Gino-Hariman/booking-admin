import React, { createContext, useState, useContext, useEffect } from 'react';
import Cookies from 'js-cookie';
import Router, { useRouter } from 'next/router';
import usePostQuery from '@/hooks/usePostQuery';
import instance from '@/axios/instance';
import useToast from '@/hooks/useToast';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const { notify } = useToast();
  const loginMutation = usePostQuery('/login');

  useEffect(() => {
    async function loadUserFromCookies() {
      const token = Cookies.get('token');
      if (token) {
        instance.defaults.headers['x-admin-auth'] = token;
        setUser(Cookies.get('name'));
      }
      setLoading(false);
    }
    loadUserFromCookies();
  }, []);

  const login = async (data) => {
    loginMutation.mutate(data, {
      onSuccess: (res) => {
        if (res.type === 'error') notify('error', res.message);
        if (res.type === 'success') {
          Cookies.set('name', res.admin_name);
          // Cookies.set('adminID', res['id_admin']);
          Cookies.set('role', res.role);
          Cookies.set('token', res.token);
          setUser(res.admin_name);
          instance.defaults.headers['x-admin-auth'] = res.token;
          notify('success', 'Login Success!!');
          router.replace('/dashboard');
        }
      },
      onError: () => notify('error', 'Sorry, Something went wrong!'),
    });
  };

  const logout = () => {
    Cookies.remove('token');
    Cookies.remove('name');
    Cookies.remove('role');
    setUser(null);
    delete instance.defaults.headers['x-admin-auth'];
    window.location.pathname = '/auth/login';
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated: !!user, user, login, loading, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
