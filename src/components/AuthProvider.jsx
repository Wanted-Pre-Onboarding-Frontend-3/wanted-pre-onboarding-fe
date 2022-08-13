import React, { useEffect, useState } from "react";
import { api } from "services";

export const AuthContext = React.createContext(null);

export default function AuthProvider({ children }) {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const access_token = localStorage.getItem("access_token");
    if (access_token) setIsLogin(() => true);
  }, []);

  const signIn = async (inputs) => {
    const { access_token } = await api.signIn(inputs);
    if (access_token) {
      setIsLogin(() => true);
      localStorage.setItem("access_token", access_token);
    }
  };

  const signUp = async (inputs) => {
    const { access_token } = await api.signIn(inputs);
    if (access_token) {
      setIsLogin(() => true);
      localStorage.setItem("access_token", access_token);
    }
  };

  const value = { isLogin, signIn, signUp };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
