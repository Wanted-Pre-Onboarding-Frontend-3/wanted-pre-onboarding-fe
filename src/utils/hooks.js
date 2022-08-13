import { AuthContext } from "components/AuthProvider";
import React, { useCallback, useState } from "react";

export function useAuth() {
  return React.useContext(AuthContext);
}

export function useInputs(initialValue = {}) {
  const [inputs, setInputs] = useState(initialValue);

  const handleInput = useCallback((e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  }, []);

  const reset = useCallback(() => {
    setInputs(initialValue);
  }, [initialValue]);

  return { inputs, handleInput, reset };
}
