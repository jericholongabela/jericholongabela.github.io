import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import pythonProject from "../assets/img/python-project.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title:
        "Predicting Demand and Fare Prices: An Analysis on the NYC Trip Dataset using ARIMA and Linear Regression",
      description:
        "An analysis on the NYC Trip Dataset using ARIMA for demand prediction and Linear Regression for fare price prediction.",
      lang: "Python",
      projURL: "https://github.com/jericholongabela/data_mining_project",
    },
    {
      title:
        "Predicting Demand and Fare Prices: An Analysis on the NYC Trip Dataset using ARIMA and Linear Regression",
      description: "Python",
      lang: "Python",
      projURL: "https://github.com/jericholongabela/data_mining_project",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    These are all the projects I have garnered over the course
                    of my academic journey. I have worked on a variety of
                    projects ranging from web development to mobile development
                    to artificial intelligence. I have also worked on a few
                    projects that are not listed here, but I have not included
                    them because they are not as relevant to my career path.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Web and Mobile</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Computers</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">
                          Artificial Intelligence
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>
                          These are all the projects I have garnered over the
                          course of my academic journey. I have worked on a
                          variety of projects ranging from web development to
                          mobile development to artificial intelligence. I have
                          also worked on a few projects that are not listed
                          here, but I have not included them because they are
                          not as relevant to my career path.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
