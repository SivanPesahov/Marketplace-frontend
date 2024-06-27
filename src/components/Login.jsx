import React from "react";
import { InputBar } from "../utils/InputBar";
import { Button } from "../utils/SubmitButton";

export const Login = (props) => {
  const { userNameRef, passwordRef } = props;

  function createUser(ev) {
    ev.preventDefault();
    console.log(userNameRef.current.value, passwordRef.current.value);
  }

  return (
    <>
      <form onSubmit={createUser}>
        <div className="mx-32 mt-20 bg-gray-700 border rounded flex flex-col items-center">
          <div className="w-5/6 mt-2">
            <InputBar ref={userNameRef} placeholder="Enter username" />
            <InputBar ref={passwordRef} placeholder="Enter password" />
          </div>
          <div className="flex justify-center mb-3">
            <Button>Login</Button>
          </div>
        </div>
      </form>
    </>
  );
};
