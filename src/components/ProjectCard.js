import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="project"/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <p className="project-description">{description}</p>
          <a href={link} target="_blank" className="projectLink" rel="noreferrer">Learn more</a>
        </div>
      </div>
    </Col>
  )
}
