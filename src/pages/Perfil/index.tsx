import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";

import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

import WebLayout from "../../layouts/CardWeb";
import Row from "react-bootstrap/esm/Row";

import PersonIcon from "../../assets/person-icon.svg";
import Web from "../../assets/web-development.svg";
import Marketing from "../../assets/digital-marketing.svg";

interface ICardLayoutProps {
  navigate(route: string): void;
}

const Homepage: React.FC<ICardLayoutProps> = ({ navigate }) => {
  return (
    <WebLayout>
      <Col
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          style={{ width: "7rem", height: "7rem" }}
          src={PersonIcon}
          width="100%"
        />
      </Col>
      <Col
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: -20,
        }}
      >
        <p style={{ fontSize: 24, fontWeight: 700 }}>Bruna das Couves</p>
      </Col>
      <Col
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p style={{ fontSize: 13 }}>@brunadascouves</p>
      </Col>
      <div>
        <Col
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: -20,
          }}
        >
          <p style={{ fontSize: 24, fontWeight: 400 }}>Objetivo de carreira:</p>
        </Col>
        <Col
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p style={{ fontSize: 18 }}>Desenvolvedora front-end</p>
        </Col>
      </div>
      <div>
        <Col
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: -20,
          }}
        >
          <p style={{ fontSize: 24, fontWeight: 400 }}>Principais potências:</p>
        </Col>
        <Col
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p style={{ fontSize: 18 }}>
            Cuidado, trabalho em equipe e liderança.
          </p>
        </Col>
      </div>
      <div>
        <Col
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: -20,
          }}
        >
          <p style={{ fontSize: 24, fontWeight: 400 }}>Pontos de melhoria:</p>
        </Col>
        <Col
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p style={{ fontSize: 18 }}>Comunicação e organização</p>
        </Col>
      </div>
      <hr />
      <div>
        <Col
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p style={{ fontSize: 30, fontWeight: 400 }}>
            Os melhores cursos para você:
          </p>
        </Col>
        <Col
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
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
                onClick={() => navigate("/agendamento-de-consulta")}
              >
                <Image src={Marketing} width="50%" />
              </button>
              <p style={{ marginTop: 13, textAlign: "center" }}>Marketing</p>
            </div>
          </Col>
        </Col>
      </div>
      <div>
        <Col
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p style={{ fontSize: 30, fontWeight: 400 }}>
            Os melhores mentores para você:
          </p>
        </Col>
        <Col
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Row>
            <Image
              style={{ width: "6rem", height: "6rem" }}
              src={PersonIcon}
              width="100%"
            />
            <Row>
              <Col style={{ paddingLeft: 24 }}>
                <p
                  style={{
                    fontSize: 20,
                    fontStyle: "normal",
                    marginBottom: -8,
                  }}
                >
                  Juliana dos Repolhos
                </p>
                <span
                  style={{ fontSize: 13, fontStyle: "normal", marginTop: 0 }}
                >
                  @julianadosrepolhos
                </span>
                <Row style={{ marginTop: 15 }}>
                  <Col>
                    <Button
                      style={{
                        backgroundColor: "#FFE548",
                        borderColor: "#E5E5E5",
                        color: "#fff",
                        borderRadius: 35,
                        padding: 4,
                        paddingInline: 30,
                        borderWidth: 1,
                        fontSize: 14,
                      }}
                      variant="primary"
                      type="submit"
                      block
                    >
                      Agendar
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Row>
        </Col>
      </div>
    </WebLayout>
  );
};

export default Homepage;
