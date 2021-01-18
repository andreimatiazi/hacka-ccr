import React, { useState } from "react";
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

const LoginForm: React.FC<ILoginFormProps> = ({ handleSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      <Row style={{ marginTop: 0 }}>
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
            Login
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
            Ainda não tem um cadastro?{" "}
            <Link style={{ color: "#FFE548" }} to="/cadastro">
              Clique aqui.
            </Link>
          </span>
        </Col>
      </Row>
    </Form>
  );
};

export default LoginForm;
