import React, { useCallback, useState, useEffect } from "react";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
interface ILoginLayoutProps {
  chindren?: React.ReactNode;
  backgroundColor?: string;
}

const Login: React.FC<ILoginLayoutProps> = ({ children, backgroundColor }) => {
  return (
    <Container
      style={{
        backgroundColor,
      }}
      fluid
    >
      <Row>
        <Col
          xs={12}
          md={12}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100vh",
          }}
        >
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
