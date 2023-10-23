import { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import headerImage from '../assets/img/header-img-removebg-preview.png'
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export default function Banner() {
    const [loopNumber, setLoopNumber] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
     // eslint-disable-next-line 
    const toRotate = ["Web Developer", "Frontend Developer", "Backend Developer"];
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;
    useEffect(() => {
        const tick = () => {
            let i = loopNumber % toRotate.length;
            
            let fullText = toRotate[i];
            let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
            setText(updatedText);
            if (isDeleting) {
                setDelta(prevDelta => prevDelta / 2);
            }
    
            if (!isDeleting && updatedText === fullText) {
                setIsDeleting(true);
                setDelta(period);
            } else if (isDeleting && updatedText === '') {
                setIsDeleting(false);
                setLoopNumber(loopNumber + 1);
                setDelta(500);
            }
        };
    
        let ticker = setInterval(() => {
            tick();
        }, delta);
    
        return () => {
            clearInterval(ticker);
        };
    }, [text, delta, loopNumber, toRotate, isDeleting, setText, setDelta, setIsDeleting, setLoopNumber]);
    

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="aligin-itmes-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <span className="tagline">Welcome to my portfolio</span>
                                    <h1>
                                        {"Hi I am Erika "} <br/> <span className="wrap">{text}</span>
                                        <br/><br/>
                                        <p>I'm a budding full-stack developer
                                            with a year of comprehensive training in web development.
                                            Eager to kickstart my career, I'm actively seeking internships to apply my
                                            skills and passion for creating innovative web solutions.
                                            Let's connect and explore opportunities together.
                                        </p>
                                    </h1>
                                </div>
                            }
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImage} alt="Header" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}