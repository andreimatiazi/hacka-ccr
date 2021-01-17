import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";

import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import LoginLayout from "../../layouts/Login";
import CadastroForm from "../../components/CadastroForm";

import Logo from "../../assets/Logo.svg";

const Cadastro: React.FC = () => {
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
    <LoginLayout backgroundColor="#E4E0E1">
      <Col xs={6} md={4}>
        <Col
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image src={Logo} rounded />
        </Col>
        <CadastroForm handleSubmit={handleSubmit} />
      </Col>
    </LoginLayout>
  );
};

export default Cadastro;
