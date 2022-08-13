import { http } from "services";

export const signIn = async ({ email, password }) => {
  return http.post("/auth/signin", { body: { email, password } });
};

export const signUp = async ({ email, password }) => {
  return http.post("/auth/signup", { body: { email, password } });
};

export const createTodo = async ({ todo }) => {
  return http.post("/todos", { body: { todo } });
};

export const getTodos = async () => {
  return http.get("/todos");
};

export const updateTodo = async ({ id, todo, isCompleted }) => {
  return http.put(`/todos/${id}`, { body: { todo, isCompleted } });
};

export const deleteTodo = async ({ id }) => {
  return http.del(`/todos/${id}`);
};
