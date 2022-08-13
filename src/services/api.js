import { http } from "services";

export const signIn = async ({ email, password }) => {
  return http.post("/auth/signin", { body: { email, password } });
};

export const signUp = async ({ email, password }) => {
  return http.post("/auth/signup", { body: { email, password } });
};
