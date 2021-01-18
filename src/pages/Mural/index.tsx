import React from "react";

import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import EmBreveLayout from "../../layouts/CardEmBreve";

import PersonIcon from "../../assets/person-icon.svg";
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
    </EmBreveLayout>
  );
};

export default Homepage;
