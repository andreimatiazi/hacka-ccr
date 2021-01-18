import React from "react";

import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import WebLayout from "../../layouts/CardWeb";
import Row from "react-bootstrap/esm/Row";

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
        <h1>Descubra o que mais tem a ver com você!</h1>
      </Col>
      <Row>
        <Col xs={1} md={1}></Col>
        <Col>
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
                  fontSize: 30,
                }}
                variant="primary"
                type="submit"
                block
              >
                Já sei que carreira quero seguir
              </Button>
            </Col>
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
                  fontSize: 30,
                }}
                variant="primary"
                type="submit"
                block
              >
                Ainda não sei que carreira quero seguir
              </Button>
            </Col>
          </Row>
        </Col>
        <Col xs={1} md={1}></Col>
      </Row>
    </WebLayout>
  );
};

export default Homepage;
