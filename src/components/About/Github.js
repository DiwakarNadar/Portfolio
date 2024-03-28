import React from "react";
import { Row } from "react-bootstrap";
import myImg from "../../Assets/leetcode-calender.png";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <img src={myImg} className="img-fluid" />
    </Row>
  );
}

export default Github;
