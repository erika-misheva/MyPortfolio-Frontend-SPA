import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import html from '../assets/img/html.png'
import css from '../assets/img/CSS3_logo.svg.png'
import bootstrap from '../assets/img/bootstrap-logo-vector.svg'
import sass from '../assets/img/sass.png'
import javascript from '../assets/img/javascript.png'
import typescript from '../assets/img/Typescript.svg.png'
import react from '../assets/img/react.png'
import csharp from '../assets/img/csharp.png'
import aspCore from '../assets/img/aspnetcore-logo.png'
import mvc from '../assets/img/mvc.png'
import api from '../assets/img/webApi.png'
import sql from '../assets/img/mysql.png'
import colorSharp from '../assets/img/color-sharp.png'

export default function Skills(){
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return(
        <section className="skill" id="skills">
        <Container>
            <Row>
                <Col>
                <div className="skill-bx">
                    <h2>Skills</h2>
                    <p> Skilled in both front-end and back-end development, 
                        I'm ready to tackle diverse projects and deliver exceptional results.</p>
                    <Carousel responsive={responsive} className="skill-slider">
                        <div className="item">
                            <img src={html} alt="html logo"/>
                            <h5>HTML5</h5>
                        </div>
                        <div className="item">
                            <img src={css} alt="css logo"/>
                            <h5>CSS3</h5>
                        </div>
                        <div className="item">
                            <img src={bootstrap} alt="bootstrap logo"/>
                            <h5>Bootstrap</h5>
                        </div>
                        <div className="item">
                            <img src={sass} alt="sass logo"/>
                            <h5>SCSS</h5>
                        </div>
                        <div className="item">
                            <img src={javascript} alt="java script logo"/>
                            <h5>Javascript</h5>
                        </div>
                        <div className="item">
                            <img src={typescript} alt="typescript logo"/>
                            <h5>Typescript</h5>
                        </div>
                        <div className="item">
                            <img src={react} alt="react.js logo"/>
                            <h5>React.js</h5>
                        </div>
                        <div className="item">
                            <img src={csharp} alt="c# logo"/>
                            <h5>C#</h5>
                        </div>
                        <div className="item">
                            <img src={aspCore} alt="ASP.NET Core Logo"/>
                            <h5>ASP.NET Core</h5>
                        </div>
                        <div className="item">
                            <img src={mvc} alt="ASP.NET MVC Logo"/>
                            <h5>ASP.NET MVC</h5>
                        </div>
                        <div className="item">
                            <img src={api} alt="ASP.NET Core API Logo"/>
                            <h5>ASP.NET Core API</h5>
                        </div>
                        <div className="item">
                            <img src={sql} alt="My Sql Logo"/>
                            <h5>SQL</h5>
                        </div>
                    </Carousel>
                </div>
                </Col>
            </Row>
        </Container>
        <img className="background-image-left" src={colorSharp} alt="background"/>
        </section>
    );
}