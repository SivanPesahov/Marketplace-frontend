import { useRef } from "react";
import { Register } from "../components/Register";

export const RegisterPage = () => {
  const userNameRef = useRef(null);
  const passwordRef = useRef(null);
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);

  return (
    <>
      <Register
        userNameRef={userNameRef}
        passwordRef={passwordRef}
        firstNameRef={firstNameRef}
        lastNameRef={lastNameRef}
      ></Register>
    </>
  );
};
