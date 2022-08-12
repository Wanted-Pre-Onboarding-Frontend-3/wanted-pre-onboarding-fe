import Anchor from "components/Anchor";
import Button from "components/Button";
import Input from "components/Input";
import React from "react";

export default function Signup() {
  return (
    <main className="w-screen h-screen flex flex-col justify-center items-center">
      <form className="w-96 shadow-2xl rounded-2xl flex flex-col items-center gap-4 py-6 px-6">
        <h1 className="text-3xl">회원가입</h1>
        <Input className="focus:outline-orange-400" placeholder="이메일" />
        <Input className="focus:outline-orange-400" placeholder="비밀번호" />
        <Input
          className="focus:outline-orange-400"
          placeholder="비밀번호 확인"
        />
        <div className="flex gap-4 w-full">
          <Button
            className="bg-orange-400 text-white disabled:bg-gray-500"
            type="submit"
            disabled={true}
          >
            회원가입
          </Button>
          <Anchor
            to="/signup"
            className="bg-sky-400 text-white flex justify-center"
          >
            취소
          </Anchor>
        </div>
      </form>
    </main>
  );
}
