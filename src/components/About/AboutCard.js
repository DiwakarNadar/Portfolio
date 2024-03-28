import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Diwakar Nadar </span>
            from <span className="purple"> Mumbai, India.</span>
            <br />
            I am currently pursuing my BE in CSE with specialization in AIML from Chandigarh university.
            <br />
            
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games (Cricket,VolleyBall)
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring Nature (Travelling)
            </li>

          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Everything will be Fine in the end..If its not Then its not the End.."{" "}
          </p>
          <footer className="blockquote-footer">Diwakar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
