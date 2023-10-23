import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { BsGithub } from "react-icons/bs";


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/erika-miseva-131a151bb/" target="_blank" rel="noreferrer"><img src={navIcon1} alt="linkedin logo" /></a>
              <a href="https://www.instagram.com/erika.miseva/" target="_blank" rel="noreferrer"><img src={navIcon2} alt="instagram logo" /></a>
              <a href="https://www.facebook.com/erika.miseva" target="_blank" rel="noreferrer"><img src={navIcon3} alt="facebook logo" /></a>
              <a href="https://github.com/erika-misheva" target="_blank" rel="noreferrer" ><BsGithub  size={31.88} id="github" alt="github logo"/></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
