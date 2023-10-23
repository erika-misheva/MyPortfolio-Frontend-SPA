import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import tenzies from '../assets/img/tenzies.png'
import vanLife from '../assets/img/vanLife.png'
import portfolio from '../assets/img/portfolio.png'
import 'animate.css';
import colorSharp2 from '../assets/img/color-sharp2.png'
import TrackVisibility from 'react-on-screen';

export default function Projects() {
    const projects = [
        {
            title: 'Tenzies Game',
            descripton: 'Languages and Frameworks: React.js, CSS, and HTML.',
            imgUrl: tenzies,
            link: 'https://github.com/erika-misheva/Tenzies-Game__Frontend-SPA'
        },
        {
            title: 'Van Life',
            descripton: 'Languages and Frameworks: React.js, CSS, and HTML.',
            imgUrl: vanLife,
            link: 'https://github.com/erika-misheva/Van-Life__Frontend-SPA'
        }
        ,
        {
            title: 'My Portfolio',
            descripton: "Languages and Frameworks: React.js, Bootstrap, and HTML.",
            imgUrl: portfolio,
            link : ''
        }
    ];
     
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p> I've designed and developed a collection of web applications that prioritize user experience and aesthetics. These projects showcase my proficiency in HTML, CSS, JavaScript. </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />

                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>No further projects are available at the moment. Check back later for updates.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>No further projects are available at the moment. Check back later for updates.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt='background'></img>
    </section>
  )
}