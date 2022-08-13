import React, { useEffect, useState } from "react";

export const AuthContext = React.createContext(null);

export default function AuthProvider({ children }) {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const access_token = localStorage.getItem("access_token");
    if (access_token) setIsLogin(true);
  }, []);

  const value = { isLogin };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
