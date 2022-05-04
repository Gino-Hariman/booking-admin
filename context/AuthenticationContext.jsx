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
  const loginMutation = usePostQuery('/admin/login');

  useEffect(() => {
    async function loadUserFromCookies() {
      const token = Cookies.get('token');
      if (token) {
        console.log("Got a token in the cookies, let's see if it is valid");
        instance.defaults.headers.Authorization = `Bearer ${token}`;
        // const { data: user } = await instance.get('users/me');
        // if (user) setUser(user);
        setUser('testing Mario');
      }
      setLoading(false);
    }
    loadUserFromCookies();
  }, []);

  const login = async (data) => {
    loginMutation.mutate(data, {
      onSuccess: (res) => {
        console.log('res', res);
        if (res.type === 'error') return notify('error', err.message);
        Cookies.set('token', res.token);
        notify('success', 'Login Success!!');
        window.location.pathname = '/dashboard';
        return router;
      },
      onError: () => notify('error', 'Sorry, Something went wrong!'),
    });
    // const { data: token } = await api.post('auth/login', { email, password });
    // if (token) {
    //   console.log('Got token');
    //   Cookies.set('token', token, { expires: 60 });
    //   api.defaults.headers.Authorization = `Bearer ${token.token}`;
    //   const { data: user } = await api.get('users/me');
    //   setUser(user);
    //   console.log('Got user', user);
    // }
  };

  const logout = () => {
    Cookies.remove('token');
    setUser(null);
    delete instance.defaults.headers.Authorization;
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
