import React from "react";

export const AuthContext = React.createContext(null);

export default function AuthProvider({ children }) {
  const [user, setUser] = React.useState(null);

  const signin = (newUser, callback) => {
    return null;
  };

  const signout = (callback) => {
    return null;
  };

  const value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
