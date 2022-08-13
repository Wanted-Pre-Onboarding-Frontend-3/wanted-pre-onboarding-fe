import { Button, Input } from "components";
import React, { useCallback, useEffect, useState } from "react";
import { api } from "services";
import { createTodo, getTodos, updateTodo } from "services/api";
import { useAuth, useInputs } from "utils/hooks";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const { signOut } = useAuth();

  const fetchTodos = useCallback(async () => {
    const data = await getTodos();
    setTodos(() => [...data]);
  }, []);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  const handleTodoForm = useCallback(
    async ({ todo }) => {
      await createTodo({ todo });
      await fetchTodos();
    },
    [fetchTodos]
  );

  return (
    <main className="w-screen flex flex-col gap-10 justify-center items-center py-10 px-14">
      <Button className="w-40 self-end" onClick={signOut}>
        로그아웃
      </Button>
      <TodoList todos={todos} fetchTodos={fetchTodos} />
      <TodoForm onSubmit={handleTodoForm} />
    </main>
  );
}

function TodoList({ todos, fetchTodos }) {
  return (
    <div className="grid grid-cols-5 w-full gap-4">
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} fetchTodos={fetchTodos} />;
      })}
    </div>
  );
}

function TodoItem({ todo, fetchTodos }) {
  const { todo: todoContent, isCompleted, id } = todo;
  const [isEditable, setIsEditable] = useState(false);

  const toggleTodo = useCallback(async () => {
    await api.updateTodo({ id, todo: todoContent, isCompleted: !isCompleted });
    await fetchTodos();
  }, [fetchTodos, id, isCompleted, todoContent]);

  const handleDeleteButton = useCallback(async () => {
    await api.deleteTodo({ id });
    await fetchTodos();
  }, [fetchTodos, id]);

  const handleTodoForm = useCallback(
    async ({ todo }) => {
      await updateTodo({ id, todo, isCompleted });
      await fetchTodos();
      setIsEditable(() => false);
    },
    [fetchTodos, id, isCompleted]
  );

  const toggleEditButton = useCallback(() => {
    setIsEditable((prev) => !prev);
  }, []);

  return isEditable ? (
    <TodoForm
      initialValue={todoContent}
      onSubmit={handleTodoForm}
      submitButton="수정"
      onCancle={toggleEditButton}
    />
  ) : (
    <div className="w-full shadow-lg border flex justify-between px-5 py-6 flex-col gap-4 rounded-lg">
      <span className="flex gap-3 w-1/2">
        <Button onClick={toggleEditButton}>수정</Button>
        <Button onClick={handleDeleteButton}>삭제</Button>
      </span>
      <p>{todoContent}</p>

      <Button className={isCompleted && " bg-sky-400"} onClick={toggleTodo}>
        {isCompleted ? "완료" : "진행중"}
      </Button>
    </div>
  );
}

function TodoForm({
  onSubmit,
  initialValue = "",
  submitButton = "추가",
  onCancle,
}) {
  const { inputs, handleInput, reset } = useInputs({ todo: initialValue });
  const { todo } = inputs;

  const handleForm = useCallback(
    async (e) => {
      e.preventDefault();
      onSubmit({ todo });
      reset();
    },
    [onSubmit, reset, todo]
  );

  return (
    <form
      className="shadow-2xl rounded-2xl flex flex-col items-center gap-4 py-6 px-6"
      onSubmit={handleForm}
    >
      <Input name="todo" value={todo} onChange={handleInput} />
      <Button>{submitButton}</Button>
      {onCancle != null && <Button onClick={onCancle}>취소</Button>}
    </form>
  );
}
