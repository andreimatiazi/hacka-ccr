import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

interface ILoginFormProps {
  handleSubmit(
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    email: string,
    password: string
  ): void;
}

const CadastroForm: React.FC<ILoginFormProps> = ({ handleSubmit }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [adress, setAdress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  return (
    <Form
      style={{
        borderRadius: 56,
        padding: 50,
        borderColor: "#E5E5E5",
        borderStyle: "solid",
        marginLeft: "30px",
        marginRight: "30px",
        borderWidth: "1px",
        backgroundColor: "#fff",
      }}
    >
      <Row style={{ marginTop: 15 }}>
        <Col>
          <p
            style={{
              color: "#AAA4A4",
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "30px",
              lineHeight: "35px",
              textAlign: "center",
            }}
          >
            Cadastre-se
          </p>
          <Form.Control
            style={{
              borderRadius: 50,
              borderColor: "#E5E5E5",
              color: "#AAA4A4",
              padding: 8,
              paddingLeft: 16,
              borderWidth: 1,
              fontSize: 14,
            }}
            type="name"
            placeholder="Nome completo"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </Col>
      </Row>

      <Row style={{ marginTop: 15 }}>
        <Col>
          <Form.Control
            style={{
              borderRadius: 50,
              borderColor: "#E5E5E5",
              color: "#AAA4A4",
              padding: 8,
              paddingLeft: 16,
              borderWidth: 1,
              fontSize: 14,
            }}
            type="phone"
            placeholder="Telefone"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
        </Col>
      </Row>
      <Row style={{ marginTop: 15 }}>
        <Col>
          <Form.Control
            style={{
              borderRadius: 50,
              borderColor: "#E5E5E5",
              color: "#AAA4A4",
              padding: 8,
              paddingLeft: 16,
              borderWidth: 1,
              fontSize: 14,
            }}
            type="adress"
            placeholder="Endereço"
            value={adress}
            onChange={(event) => setAdress(event.target.value)}
          />
        </Col>
      </Row>
      <Row style={{ marginTop: 15 }}>
        <Col>
          <Form.Control
            style={{
              borderRadius: 50,
              borderColor: "#E5E5E5",
              color: "#AAA4A4",
              padding: 8,
              paddingLeft: 16,
              borderWidth: 1,
              fontSize: 14,
            }}
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </Col>
      </Row>
      <Row style={{ marginTop: 15 }}>
        <Col>
          <Form.Control
            style={{
              borderRadius: 50,
              borderColor: "#E5E5E5",
              color: "#AAA4A4",
              padding: 8,
              paddingLeft: 16,
              borderWidth: 1,
              fontSize: 14,
            }}
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </Col>
      </Row>
      <Row style={{ marginTop: 15 }}>
        <Col>
          <Form.Control
            style={{
              borderRadius: 50,
              borderColor: "#E5E5E5",
              color: "#AAA4A4",
              padding: 8,
              paddingLeft: 16,
              borderWidth: 1,
              fontSize: 14,
            }}
            type="password"
            placeholder="Repita sua senha"
            value={rePassword}
            onChange={(event) => setRePassword(event.target.value)}
          />
        </Col>
      </Row>

      <Row style={{ marginTop: 15 }}>
        <Col>
          <Button
            style={{
              backgroundColor: "#FFE548",
              borderColor: "#E5E5E5",
              color: "#fff",
              borderRadius: 35,
              padding: 8,
              paddingInline: 50,
              borderWidth: 1,
            }}
            variant="primary"
            type="submit"
            block
            onClick={(event) => handleSubmit(event, email, password)}
          >
            Entrar
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <span style={{ fontSize: 14, color: "#AAA4A4" }}>
            Já possui um cadastro? Retorne ao{" "}
            <Link style={{ color: "#FFE548" }} to="/">
              Login.
            </Link>
          </span>
        </Col>
      </Row>
    </Form>
  );
};

export default CadastroForm;
