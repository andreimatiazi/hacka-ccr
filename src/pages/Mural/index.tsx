import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";

import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

import EmBreveLayout from "../../layouts/CardEmBreve";

import PersonIcon from "../../assets/person-icon.svg";
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
        <h1>Mural</h1>
      </Col>
      <Col>
        <Row>
          <Image
            style={{ width: "3rem", height: "3rem" }}
            src={PersonIcon}
            width="100%"
          />
          <Row>
            <Col style={{ paddingLeft: 24 }}>
              <p
                style={{ fontSize: 20, fontStyle: "normal", marginBottom: -8 }}
              >
                Bruna das Couves
              </p>
              <span style={{ fontSize: 13, fontStyle: "normal", marginTop: 0 }}>
                @joanadascouves
              </span>
            </Col>
          </Row>
        </Row>
      </Col>
      <p style={{ fontSize: 13, fontStyle: "normal", paddingTop: 12 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <hr />
      <Col>
        <Row>
          <Image
            style={{ width: "3rem", height: "3rem" }}
            src={PersonIcon}
            width="100%"
          />
          <Row>
            <Col style={{ paddingLeft: 24 }}>
              <p
                style={{ fontSize: 20, fontStyle: "normal", marginBottom: -8 }}
              >
                Juliana dos Repolhos
              </p>
              <span style={{ fontSize: 13, fontStyle: "normal", marginTop: 0 }}>
                @julianadosrepolhos
              </span>
            </Col>
          </Row>
        </Row>
      </Col>
      <p style={{ fontSize: 13, fontStyle: "normal", paddingTop: 12 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      {/* <Row>
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
      </Row> */}
    </EmBreveLayout>
  );
};

export default Homepage;
