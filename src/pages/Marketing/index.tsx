import React from "react";

import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import EmBreveLayout from "../../layouts/CardEmBreve";

import NumberOne from "../../assets/number-one.svg";
import NumberTwo from "../../assets/number-two.svg";
import NumberThree from "../../assets/number-three.svg";
import NumberFour from "../../assets/number-four.svg";
import NumberFive from "../../assets/number-five.svg";
import Row from "react-bootstrap/esm/Row";

interface ICardLayoutProps {
  navigate(route: string): void;
}

const Homepage: React.FC<ICardLayoutProps> = ({ navigate }) => {
  return (
    <EmBreveLayout>
      <Col
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>Marketing</h1>
      </Col>
      <p style={{ fontSize: 20, textAlign: "center", fontStyle: "normal" }}>
        Marketing é a arte de explorar, criar e entregar valor para satisfazer
        as necessidades do mercado. São usados produtos ou serviços que possam
        interessar aos consumidores. A trilha de conhecimento sobre Marketing é
        dividida em 5 etapas:
      </p>
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
              onClick={() => navigate("/agendamento-de-consulta")}
            >
              <Image src={NumberOne} width="100%" />
            </button>
            <p style={{ marginTop: 13, textAlign: "center" }}>
              Introdução ao Marketing
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
              onClick={() => navigate("/agendamento-de-consulta")}
            >
              <Image src={NumberTwo} width="100%" />
            </button>
            <p style={{ marginTop: 13, textAlign: "center" }}>
              Planejamento estratégico
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
              onClick={() => navigate("/agendamento-de-consulta")}
            >
              <Image src={NumberThree} width="100%" />
            </button>
            <p style={{ marginTop: 13, textAlign: "center" }}>
              Gerenciamento de Produtos
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
              onClick={() => navigate("/agendamento-de-consulta")}
            >
              <Image src={NumberFour} width="100%" />
            </button>
            <p style={{ marginTop: 13, textAlign: "center" }}>
              Business Intelligence
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
              onClick={() => navigate("/agendamento-de-consulta")}
            >
              <Image src={NumberFive} width="100%" />
            </button>
            <p style={{ marginTop: 13, textAlign: "center" }}>
              CRM, Dados e Gerenciamento
            </p>
          </div>
        </Col>
        <Col xs={1} md={1}></Col>
      </Row>
    </EmBreveLayout>
  );
};

export default Homepage;
