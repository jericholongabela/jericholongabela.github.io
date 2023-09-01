import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/neon-code.png";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { BrowserRouter as Router } from "react-router-dom";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(100);
  const [index, setIndex] = useState(1);
  const toRotate = [
    "a Software Developer",
    "a React-Native Developer",
    "an AI Engineer",
  ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(100);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(100);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Get to know me</span>
                  <h1>
                    {`Hi! I'm Jericho`}
                    <br />
                    <h2>
                      <span
                        className="txt-rotate"
                        dataPeriod="1000"
                        data-rotate='[ "a Software Developer",
                      "a React-Native Developer",
                      "an AI Engineer" ]'
                      >
                        <span className="wrap">{text}</span>
                      </span>
                    </h2>
                  </h1>
                  <p>
                    As an enthusiastic professional with a passion for
                    continuous learning, I am dedicated to expanding my
                    knowledge and expertise in the dynamic realms of computing
                    and the corporate world. With a firm foundation in Computer
                    Science, I possess a strong aptitude for tackling complex
                    challenges and adapting to evolving technologies. Committed
                    to staying ahead of the curve, I actively seek opportunities
                    to enhance my skill set and stay updated on industry trends.
                  </p>
                  <Router>
                    <a href="#connect" className="banner a">
                      <button>
                        Connect with me <ArrowRightCircle size={25} />
                      </button>
                    </a>
                  </Router>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img
                    src={headerImg}
                    alt="Header Img"
                    className="banner-header-img"
                  />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
