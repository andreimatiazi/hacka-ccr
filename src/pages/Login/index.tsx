import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";

import LoginLayout from "../../layouts/Login";
import LoginForm from "../../components/LoginForm";

const Login: React.FC = () => {
  const history = useHistory();

  const handleSubmit = useCallback(
    async (
      event: React.MouseEvent<HTMLElement, MouseEvent>,
      email: string,
      password: string
    ) => {
      event.preventDefault();

      // Enviar para API
      console.log(email, password); // Apenas para não esquercer nas deps

      history.push("/inicio");
    },
    [history]
  );

  return (
    <LoginLayout backgroundColor="#fff">
      <LoginForm handleSubmit={handleSubmit} />
    </LoginLayout>
  );
};

export default Login;
