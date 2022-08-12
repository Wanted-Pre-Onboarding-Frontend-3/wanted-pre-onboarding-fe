import React from "react";
import Input from "components/Input";
import Button from "components/Button";
import Anchor from "components/Anchor";

export default function Home() {
  return (
    <main className="w-screen h-screen flex flex-col justify-center items-center">
      <form className="w-96 shadow-2xl rounded-2xl flex flex-col items-center gap-4 py-6 px-6">
        <h1 className="text-3xl">로그인</h1>
        <Input className="focus:outline-sky-400" placeholder="이메일" />
        <Input className="focus:outline-sky-400" placeholder="비밀번호" />
        <div className="flex gap-4 w-full">
          <Button className="bg-sky-400 text-white" type="submit">
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
