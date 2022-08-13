import { Anchor, Button, Input } from "components";
import React, { useCallback } from "react";
import { useAuth, useInputs } from "utils/hooks";

export default function Signup() {
  const { inputs, handleInput } = useInputs({
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const { signUp } = useAuth();
  const { email, password, passwordConfirm } = inputs;

  const isSubmitEnable = useCallback(({ email, password, passwordConfirm }) => {
    return (
      email.includes("@") &&
      password.length >= 8 &&
      passwordConfirm.length >= 8 &&
      password === passwordConfirm
    );
  }, []);

  const handleForm = useCallback(
    async (e) => {
      e.preventDefault();
      if (isSubmitEnable(inputs) === false) return;
      await signUp(inputs);
    },
    [inputs, isSubmitEnable, signUp]
  );

  return (
    <main className="w-screen h-screen flex flex-col justify-center items-center">
      <form
        className="w-96 shadow-2xl rounded-2xl flex flex-col items-center gap-4 py-6 px-6"
        onSubmit={handleForm}
      >
        <h1 className="text-3xl">회원가입</h1>
        <Input
          className="focus:outline-orange-400"
          placeholder="이메일"
          type="email"
          name="email"
          value={email}
          onChange={handleInput}
        />
        <Input
          className="focus:outline-orange-400"
          placeholder="비밀번호"
          name="password"
          type="password"
          minLength={8}
          value={password}
          onChange={handleInput}
        />
        <Input
          className="focus:outline-orange-400"
          placeholder="비밀번호 확인"
          name="passwordConfirm"
          value={passwordConfirm}
          type="password"
          minLength={8}
          onChange={handleInput}
        />
        <div className="flex gap-4 w-full">
          <Button
            className="bg-orange-400 text-white disabled:bg-gray-500"
            type="submit"
            disabled={isSubmitEnable(inputs) === false}
          >
            회원가입
          </Button>
          <Anchor to="/" className="bg-sky-400 text-white flex justify-center">
            취소
          </Anchor>
        </div>
      </form>
    </main>
  );
}
