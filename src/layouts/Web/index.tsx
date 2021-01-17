import React, { useCallback, useState, useEffect } from "react";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

interface ILoginLayoutProps {
  chindren?: React.ReactNode;
  title?: string;
}

const Web: React.FC<ILoginLayoutProps> = ({ children, title }) => {
  return (
    <Container
      style={{
        backgroundColor: "#12C1BC",
        height: "100vh",
      }}
      fluid
    >
      <Row>
        <Col style={{ padding: "30px" }}>
          <h1
            style={{
              textAlign: "center",
              color: "#fff",
            }}
          >
            {title}
          </h1>
        </Col>
      </Row>
      <Row>
        <Col
          style={{
            borderColor: "#E5E5E5",
            borderStyle: "solid",
            marginLeft: "30px",
            marginRight: "30px",
            borderRadius: "57px",
            borderWidth: "1px",
            padding: "40px",
            backgroundColor: "#fff",
          }}
        >
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default Web;
