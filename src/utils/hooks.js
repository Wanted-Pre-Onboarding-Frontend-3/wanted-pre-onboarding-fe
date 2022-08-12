import { AuthContext } from "components/AuthProvider";
import React from "react";

export function useAuth() {
  return React.useContext(AuthContext);
}
