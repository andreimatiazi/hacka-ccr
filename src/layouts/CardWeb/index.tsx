import React from "react";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import blackWomen from "../../assets/blackwomen.png";

import NavBar from "../../components/NavBar";

interface ILoginLayoutProps {
  chindren?: React.ReactNode;
  title?: string;
}

const Web: React.FC<ILoginLayoutProps> = ({ children, title }) => {
  return (
    <>
      <NavBar></NavBar>
      <Container
        style={{
          backgroundImage: `url(${blackWomen})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100%",
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
              marginLeft: "100px",
              marginRight: "100px",
              marginTop: 350,
              marginBottom: 20,
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
    </>
  );
};

export default Web;
