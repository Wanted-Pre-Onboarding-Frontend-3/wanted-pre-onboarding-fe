import { Anchor, Button, Input } from "components";
import React, { useMemo } from "react";
import { Navigate } from "react-router";
import { useAuth, useInputs } from "utils/hooks";

export default function Home() {
  const { inputs, handleInput } = useInputs({ email: "", password: "" });
  const { isLogin, signIn } = useAuth();
  const { email, password } = inputs;
  const handleForm = async (e) => {
    e.preventDefault();
    await signIn(inputs);
  };

  const enabled = useMemo(() => {
    return email.includes("@") && password.length >= 8;
  }, [email, password.length]);

  if (isLogin) return <Navigate to="/todo" />;
  return (
    <main className="w-screen h-screen flex flex-col justify-center items-center">
      <form
        className="w-96 shadow-2xl rounded-2xl flex flex-col items-center gap-4 py-6 px-6"
        onSubmit={handleForm}
      >
        <h1 className="text-3xl">로그인</h1>
        <Input
          className="focus:outline-sky-400"
          placeholder="이메일"
          name="email"
          value={email}
          onChange={handleInput}
          type="email"
        />
        <Input
          className="focus:outline-sky-400"
          placeholder="비밀번호"
          name="password"
          type="password"
          minLength={8}
          value={password}
          onChange={handleInput}
        />
        <div className="flex gap-4 w-full">
          <Button
            className="bg-sky-400 text-white disabled:bg-gray-500"
            type="submit"
            disabled={enabled === false}
          >
            로그인
          </Button>
          <Anchor
            to="/signup"
            className="bg-orange-400 text-white flex justify-center"
          >
            회원가입
          </Anchor>
        </div>
      </form>
    </main>
  );
}
