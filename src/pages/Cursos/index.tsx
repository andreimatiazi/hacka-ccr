import React from "react";

import { useHistory } from "react-router-dom";

import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

import WebLayout from "../../layouts/CardWeb";

import Web from "../../assets/web-development.svg";
import Marketing from "../../assets/digital-marketing.svg";
import Venda from "../../assets/venda.svg";
import Financas from "../../assets/financas.svg";
import DataScience from "../../assets/data-science.svg";
import Row from "react-bootstrap/esm/Row";

interface ICardLayoutProps {
  navigate(route: string): void;
}

const Cursos: React.FC<ICardLayoutProps> = ({ navigate }) => {
  const history = useHistory();

  function handleClick() {
    history.push("/marketing");
  }
  return (
    <WebLayout>
      <Col
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>O que você quer aprender hoje?</h1>
      </Col>
      <Row>
        <Col xs={1} md={1}></Col>
        <Col xs={2} md={2}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              margin: "0 2rem",
            }}
          >
            <button
              style={{
                border: "none",
                width: "7rem",
                height: "7rem",
                borderRadius: "50%",
                background: "#FFE548",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={() => navigate("/desenvolvimento")}
            >
              <Image src={Web} width="50%" />
            </button>
            <p style={{ marginTop: 13, textAlign: "center" }}>
              Desenvolvimento
            </p>
          </div>
        </Col>
        <Col xs={2} md={2}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              margin: "0 2rem",
            }}
          >
            <button
              style={{
                border: "none",
                width: "7rem",
                height: "7rem",
                borderRadius: "50%",
                background: "#FFE548",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={() => handleClick()}
            >
              <Image src={Marketing} width="50%" />
            </button>
            <p style={{ marginTop: 13, textAlign: "center" }}>Marketing</p>
          </div>
        </Col>
        <Col xs={2} md={2}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              margin: "0 2rem",
            }}
          >
            <button
              style={{
                border: "none",
                width: "7rem",
                height: "7rem",
                borderRadius: "50%",
                background: "#FFE548",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={() => navigate("/vendas")}
            >
              <Image src={Venda} width="50%" />
            </button>
            <p style={{ marginTop: 13, textAlign: "center" }}>Vendas</p>
          </div>
        </Col>
        <Col xs={2} md={2}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              margin: "0 2rem",
            }}
          >
            <button
              style={{
                border: "none",
                width: "7rem",
                height: "7rem",
                borderRadius: "50%",
                background: "#FFE548",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={() => navigate("/financas")}
            >
              <Image src={Financas} width="50%" />
            </button>
            <p style={{ marginTop: 13, textAlign: "center" }}>Finanças</p>
          </div>
        </Col>
        <Col xs={2} md={2}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              margin: "0 2rem",
            }}
          >
            <button
              style={{
                border: "none",
                width: "7rem",
                height: "7rem",
                borderRadius: "50%",
                background: "#FFE548",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={() => navigate("/data-science")}
            >
              <Image src={DataScience} width="50%" />
            </button>
            <p style={{ marginTop: 13, textAlign: "center" }}>Data Science</p>
          </div>
        </Col>
        <Col xs={1} md={1}></Col>
      </Row>
      <Col
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h2 style={{ fontSize: 30, paddingRight: 100 }}>
          Ainda não sabe o que quer aprender?
        </h2>{" "}
        <Row style={{ marginTop: 15 }}>
          <Col>
            <Button
              style={{
                backgroundColor: "#F21B3F",
                borderColor: "#E5E5E5",
                color: "#fff",
                borderRadius: 35,
                padding: 8,
                paddingInline: 50,
                borderWidth: 1,
                fontSize: 24,
              }}
              variant="primary"
              type="submit"
              block
            >
              Descubra!
            </Button>
          </Col>
        </Row>
      </Col>
    </WebLayout>
  );
};

export default Cursos;
