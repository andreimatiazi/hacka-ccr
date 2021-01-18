import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useHistory } from "react-router-dom";

import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

import LogoMin from "../assets/logoMin.png";

const NavBar: React.FC = () => {
  const history = useHistory();

  function handleClick() {
    history.push("/");
  }
  return (
    <Navbar fixed="top" collapseOnSelect expand="lg" bg="white">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Col xs={5} md={5}>
          <Nav className="mr-auto">
            <Col xs={3} md={3}>
              <Nav.Link style={{ color: "#000" }} href="/inicio">
                Início
              </Nav.Link>
            </Col>
            <Col xs={4} md={4}>
              <Nav.Link style={{ color: "#000" }} href="/inicio">
                Autoconhecimento
              </Nav.Link>
            </Col>
            <Col xs={4} md={4}>
              <Nav.Link style={{ color: "#000" }} href="/cursos">
                Cursos
              </Nav.Link>
            </Col>
          </Nav>
        </Col>
        <Col xs={2} md={2}>
          <Image src={LogoMin} width="100%" />
          {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        </Col>
        <Col xs={5} md={5}>
          <Nav className="mr-auto">
            <Col xs={3} md={3}>
              <Nav.Link style={{ color: "#000" }} href="/inicio">
                Mentorias
              </Nav.Link>
            </Col>
            <Col xs={4} md={4}>
              <Nav.Link style={{ color: "#000" }} href="/mural">
                Mural
              </Nav.Link>
            </Col>
            <Col xs={4} md={4}>
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
                onClick={() => handleClick()}
              >
                Entrar
              </Button>
            </Col>
          </Nav>
        </Col>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
