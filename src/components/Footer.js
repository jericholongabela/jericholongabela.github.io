import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/jericho-longabela-logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" className="footer-logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/jericho-longabela-60840b239"
                target="_blank"
              >
                <img src={navIcon1} alt="" />
              </a>
              <a href="https://github.com/jericholongabela" target="_blank">
                <img src={navIcon2} alt="" />
              </a>
              <a
                href="https://join.skype.com/invite/sMdS5WEp4IkX"
                target="_blank"
              >
                <img src={navIcon3} alt="" />
              </a>
            </div>
            <p>
              Code inspired from:{" "}
              <a href="https://github.com/judygab/web-dev-projects">
                https://github.com/judygab/web-dev-projects
              </a>
              <br />
              Logo made from: <a href="https://app.logo.com/">LOGO</a>
              <br />
              Illustration by{" "}
              <a href="https://icons8.com/illustrations/author/HxMFjfKZdNq2">
                Rosina Gavrilash
              </a>{" "}
              from <a href="https://icons8.com/illustrations">Ouch!</a>
              <br />
              Images from: <a href="https://www.freepik.com/">Freepik</a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
