import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const ProjectCard = ({ title, description, projURL, lang }) => {
  return (
    <Col size={12} sm={6} md={4} className="proj-col">
      <a
        href="https://github.com/jericholongabela/data_mining_project"
        target="_blank"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <Card
          className="proj-card"
          bg={"dark"}
          style={{ borderRadius: "10px" }}
        >
          <Card.Header>{lang}</Card.Header>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text style={{ textAlign: "left", padding: "5px" }}>
              {description}
            </Card.Text>
          </Card.Body>
        </Card>
      </a>
    </Col>
  );
};
