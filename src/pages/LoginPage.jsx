import { useRef } from "react";
import { Login } from "../components/Login";
export const LoginPage = () => {
  const userNameRef = useRef(null);
  const passwordRef = useRef(null);

  return (
    <>
      <Login userNameRef={userNameRef} passwordRef={passwordRef}></Login>
    </>
  );
};
