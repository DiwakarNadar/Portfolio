import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
} from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import { SiJupyter } from "react-icons/si";
import { SiPycharm } from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        < SiLeetcode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPycharm />
      </Col>
    </Row>
  );
}
export default Toolstack;
